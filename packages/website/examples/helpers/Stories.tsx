import { Button, Select } from '@alifd/next'
// @ts-ignore
import BrowserOnly from '@docusaurus/BrowserOnly'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function FallbackStory({ exampleName }: { exampleName: string }) {
  return (
    <div style={{ marginTop: 16 }}>
      <p>
        无法找到名为 <b>{exampleName}</b> 的示例
      </p>
    </div>
  )
}

const base = 'https://github.com/alibaba/ali-react-table/blob/master/packages/website/examples/'

function Inner({ stories, path }: { stories: any; path?: string }) {
  const location = useLocation()
  const history = useHistory()

  const allExampleNames = Object.keys(stories).filter((key) => key !== 'default')
  const searchParams = new URLSearchParams(location.search)

  const exampleName = searchParams.get('example') ?? allExampleNames[0]
  const exampleIndex = allExampleNames.indexOf(exampleName)
  const StoryComp = stories[exampleName] ?? FallbackStory

  const gotoExample = (name: string) => {
    searchParams.set('example', name)
    history.replace({ search: String(searchParams) })
  }

  const selectNext = () => {
    if (exampleIndex === -1) {
      gotoExample(allExampleNames[0])
    } else if (exampleIndex < allExampleNames.length - 1) {
      gotoExample(allExampleNames[exampleIndex + 1])
    }
  }

  const selectPrev = () => {
    if (exampleIndex === -1) {
      gotoExample(allExampleNames[0])
    } else if (exampleIndex !== -1 && exampleIndex > 0) {
      gotoExample(allExampleNames[exampleIndex - 1])
    }
  }

  const renderSourceButton = () => {
    if (path) {
      return (
        <Button component="a" href={String(new URL(path, base))}>
          查看源码
        </Button>
      )
    }
    return null
  }

  return (
    <>
      {allExampleNames.length > 1 ? (
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <span>
            示例（{exampleIndex + 1} / {allExampleNames.length}）：
          </span>
          <Select
            style={{ marginLeft: 8, width: 200 }}
            dataSource={allExampleNames}
            value={exampleName}
            onChange={gotoExample}
          />
          <Button.Group style={{ marginLeft: 8 }}>
            <Button onClick={selectPrev} disabled={exampleIndex === 0}>
              上一个
            </Button>
            <Button onClick={selectNext} disabled={exampleIndex === allExampleNames.length - 1}>
              下一个
            </Button>
            {renderSourceButton()}
          </Button.Group>
        </div>
      ) : (
        <div style={{ marginBottom: path ? 16 : 0 }}>{renderSourceButton()}</div>
      )}

      <StoryComp exampleName={exampleName} />
    </>
  )
}

export function Stories(props: { stories: any; path?: string }) {
  return <BrowserOnly fallback={'示例载入中...'}>{() => <Inner {...props} />}</BrowserOnly>
}
