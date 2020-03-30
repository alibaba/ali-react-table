import { useCallback, useRef, useState } from 'react'
import { usePrevious } from 'react-use';
import { shallowEqual } from '@little-saga/rx-hooks';

export function useDeriveState<S>(
  initState: S,
  deps: any[],
  derive: (nextDeps: any[], prevState: S) => S,
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const ref = useRef(initState);
  // 通过 counter 来控制重渲染
  const [counter, setCounter] = useState(0);

  const prevDeps = usePrevious(deps);
  if (prevDeps != null && !shallowEqual(prevDeps, deps)) {
    ref.current = derive(deps, ref.current);
  }

  const setState = useCallback(
    (nextState: React.SetStateAction<S>) => {
      if (typeof nextState === 'function') {
        const next = (nextState as (prevState: S) => S)(ref.current);
        if (ref.current === next) {
          return;
        }
        ref.current = next;
      } else {
        if (ref.current === nextState) {
          return;
        }
        ref.current = nextState;
      }
      setCounter(x => x + 1);
    },
    [ref, setCounter],
  );

  return [ref.current, setState];
}
