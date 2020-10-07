import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import clsx from 'clsx'

import styles from './styles.module.css'

function Playground({ children, theme, transformCode, ...props }) {
  const defaultShow = props.metastring.includes('open')
  const [show, setShow] = React.useState(defaultShow)

  return (
    <LiveProvider
      code={children.replace(/\n$/, '')}
      transformCode={transformCode || ((code) => `${code};`)}
      theme={theme}
      {...props}
    >
      <div
        className={clsx(styles.playgroundHeader, styles.playgroundEditorHeader)}
        style={{ display: 'flex', cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setShow(!show)}
      >
        <span>Live Editor</span>
        <span style={{ marginLeft: 'auto', fontSize: '85%' }}>点击展开或收拢</span>
      </div>
      <LiveEditor className={styles.playgroundEditor} style={{ display: show ? undefined : 'none' }} />
      <div className={clsx(styles.playgroundHeader, styles.playgroundPreviewHeader)}>Preview</div>
      <div className={styles.playgroundPreview}>
        <LivePreview />
        <LiveError />
      </div>
    </LiveProvider>
  )
}

export default Playground
