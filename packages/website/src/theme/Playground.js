import * as React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import usePrismTheme from '@theme/hooks/usePrismTheme'
import styled from 'styled-components'

const PlaygroundHeaderDiv = styled.div`
  letter-spacing: 0.08rem;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  small {
    font-size: 0.75rem;
  }

  &.preview-header {
    background: var(--ifm-color-emphasis-600);
    color: var(--ifm-color-content-inverse);
  }

  &.editor-header {
    background: var(--ifm-color-emphasis-300);
    color: var(--ifm-color-content);
  }
`

const PlaygroundPreviewDiv = styled.div`
  border: 1px solid var(--ifm-color-emphasis-300);
  font-size: 12px;
  padding: 1rem;
  position: relative;
`

const StyledLiveEditor = styled(LiveEditor)`
  font-size: 12px;
  font-family: var(--ifm-font-family-monospace) !important;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-top: none;
  margin-bottom: var(--ifm-leading);
`

export default function Playground({ children, theme, transformCode, noInline, fromStory, ...props }) {
  const contextTheme = usePrismTheme()
  const defaultShow = props.metastring.includes('open')
  const [showEditor, setShowEditor] = React.useState(defaultShow)
  const [showPreview, setShowPreview] = React.useState(true)

  return (
    <LiveProvider
      code={children.replace(/\n$/, '')}
      transformCode={transformCode || ((code) => `${code};`)}
      theme={theme ?? contextTheme}
      noInline={noInline}
      {...props}
    >
      <PlaygroundHeaderDiv className="preview-header" onClick={() => setShowPreview(!showPreview)}>
        <span>预览</span>
        <small style={{ marginLeft: 'auto' }}>点击展开或收拢</small>
      </PlaygroundHeaderDiv>
      <PlaygroundPreviewDiv style={{ display: showPreview ? undefined : 'none' }}>
        <LivePreview />
        <LiveError />
      </PlaygroundPreviewDiv>

      <PlaygroundHeaderDiv className="editor-header" onClick={() => setShowEditor(!showEditor)}>
        <span>源码</span>
        <small style={{ marginLeft: 'auto' }}>点击展开或收拢</small>
      </PlaygroundHeaderDiv>
      <StyledLiveEditor style={{ display: showEditor ? undefined : 'none' }} />
    </LiveProvider>
  )
}
