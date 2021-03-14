import { ArtColumn, BaseTable } from 'ali-react-table'
import { Button, Radio, Switch, Typography } from 'antd'
import cx from 'classnames'
import numeral from 'numeral'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { AntdBaseTable, HippoBaseTable } from 'website/src/assets'

const DarkBaseTable: any = styled(BaseTable)`
  --bgcolor: #333;
  --header-bgcolor: #45494f;
  --hover-bgcolor: #46484a;
  --header-hover-bgcolor: #606164;
  --highlight-bgcolor: #191a1b;
  --header-highlight-bgcolor: #191a1b;
  --color: #dadde1;
  --header-color: #dadde1;
  --lock-shadow: rgb(37 37 37 / 0.5) 0 0 6px 2px;
  --border-color: #3c4045;
`

function amount(v: any) {
  if (v === '-' || v == null) {
    return '-'
  }
  return numeral(v).format('0,0')
}

function repeat<T>(arr: T[], n: number) {
  let result: T[] = []
  for (let i = 0; i < n; i++) {
    result = result.concat(arr)
  }
  return result
}

// prettier-ignore
const dataSource = [
  { provinceName: '湖北省', cityName: '武汉', confirmedCount: 37914, curedCount: 2519, deadCount: 1123, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '孝感', confirmedCount: 3114, curedCount: 313, deadCount: 62, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '黄冈', confirmedCount: 2817, curedCount: 611, deadCount: 68, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '荆州', confirmedCount: 1478, curedCount: 193, deadCount: 32, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '随州', confirmedCount: 1232, curedCount: 96, deadCount: 19, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '襄阳', confirmedCount: 1128, curedCount: 85, deadCount: 18, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '鄂州', confirmedCount: 1192, curedCount: 199, deadCount: 33, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '宜昌', confirmedCount: 906, curedCount: 92, deadCount: 15, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '黄石', confirmedCount: 980, curedCount: 170, deadCount: 13, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '荆门', confirmedCount: 902, curedCount: 112, deadCount: 28, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '咸宁', confirmedCount: 840, curedCount: 127, deadCount: 8, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '十堰', confirmedCount: 597, curedCount: 101, deadCount: 2, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '仙桃', confirmedCount: 514, curedCount: 63, deadCount: 17, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '天门', confirmedCount: 422, curedCount: 21, deadCount: 10, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '恩施州', confirmedCount: 244, curedCount: 71, deadCount: 4, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '潜江', confirmedCount: 116, curedCount: 12, deadCount: 5, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '神农架林区', confirmedCount: 10, curedCount: 8, deadCount: 0, updateTime: '2020-02-15' },
  { provinceName: '湖北省', cityName: '待明确地区', confirmedCount: 0, curedCount: 18, deadCount: 0, updateTime: '2020-02-06' },
  { provinceName: '湖北省', cityName: '未知地区', confirmedCount: 0, curedCount: 35, deadCount: 0, updateTime: '2020-02-02' },
  { provinceName: '湖北省', cityName: '恩施', confirmedCount: 87, curedCount: 0, deadCount: 0, updateTime: '2020-02-01' },
  { provinceName: '广东省', cityName: '深圳', confirmedCount: 406, curedCount: 115, deadCount: 0, updateTime: '2020-02-15' },
  { provinceName: '广东省', cityName: '广州', confirmedCount: 335, curedCount: 106, deadCount: 0, updateTime: '2020-02-15' },
  { provinceName: '广东省', cityName: '东莞', confirmedCount: 81, curedCount: 7, deadCount: 1, updateTime: '2020-02-15' },
  { provinceName: '广东省', cityName: '佛山', confirmedCount: 84, curedCount: 22, deadCount: 0, updateTime: '2020-02-15' },
  { provinceName: '广东省', cityName: '珠海', confirmedCount: 95, curedCount: 34, deadCount: 0, updateTime: '2020-02-15' },
]

const beautifulScrollbarStyleMixin = css`
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border: 1px solid #eaeaea;

    &:hover {
      background: #6e6e6e;
    }
  }

  ::-webkit-scrollbar-track {
    background: #eaeaea;
  }
`

const AppDivAppDiv = styled.div.withConfig({
  // @ts-ignore
  componentId: 'app-div',
})`
  display: flow-root;

  &.has-custom-scrollbar {
    .art-table-wrapper,
    .art-horizontal-scroll-container {
      ${beautifulScrollbarStyleMixin}
    }
  }

  tfoot {
    --bgcolor: var(--hover-bgcolor);
  }

  .control-grid {
    display: grid;
    grid: auto-flow / repeat(auto-fill, minmax(250px, auto));
    gap: 16px;

    .item {
      padding: 4px;
      outline: 1px dashed #ccc;
      display: flex;
      gap: 4px;
      flex-flow: column;
      align-items: start;
    }
  }
`

export function DemoApp() {
  const footerDataSource = [
    {
      confirmedCount: 50000,
      curedCount: 4500,
      deadCount: 1500,
      provinceName: '全国1月总计(mock)',
      updateTime: '2020-01-31',
    },
    {
      confirmedCount: 60000,
      curedCount: 3400,
      deadCount: 800,
      provinceName: '全国2月总计(mock)',
      updateTime: '2020-02-29',
    },
  ]

  const [hasHeader, setHasHeader] = useState(true)
  const [isStickyHeader, setIsStickyHeader] = useState(true)
  const [hasData, setHasData] = useState(true)
  const [hasFooter, setHasFooter] = useState(true)
  const [limitSize, setLimitSize] = useState(true)
  const [isStickyFooter, setIsStickyFooter] = useState(true)
  const [useOuterBorder, setUseOuterBorder] = useState(false)
  const [hasStickyScroll, setHasStickyScroll] = useState(true)
  const [hasCustomScrollbar, setHasCustomScrollbar] = useState(true)
  const [leftLock, setLeftLock] = useState(true)
  const [rightLock, setRightLock] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [useBigData, setUseBigData] = useState(false)
  const [useRotate, setUseRotate] = useState(false)
  const [useScale, setUseScale] = useState(false)
  const [cellCount, setCellCount] = useState(20)
  const [theme, setTheme] = useState('default')
  const [showControlGrid, toggle] = useReducer((s: boolean) => !s, true)

  const appDivRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const appDiv = appDivRef.current
    const handle = setInterval(() => {
      requestAnimationFrame(() => {
        setCellCount(appDiv.querySelectorAll('td, th').length)
      })
    }, 500)

    return () => {
      clearInterval(handle)
    }
  }, [])

  let BaseTableComponent = BaseTable
  if (theme === 'default-dark') {
    BaseTableComponent = DarkBaseTable
  } else if (theme == 'antd') {
    BaseTableComponent = AntdBaseTable as any
  } else if (theme == 'antd-dark') {
    BaseTableComponent = AntdBaseTable as any
  } else if (theme === 'hippo') {
    BaseTableComponent = HippoBaseTable as any
  }

  const style1 = limitSize
    ? { overflow: 'auto', maxHeight: 400, maxWidth: 600, margin: '5vh auto' }
    : { marginTop: 'clamp(30px, 20vh, 100px)', marginBottom: 'clamp(100px, 100vh, 400px)' }

  const style2 = {
    transform: `rotate(${useRotate ? '20deg' : '0'}) scale(${useScale ? 0.85 : 1})`,
  }

  if (typeof document === 'undefined') {
    return null
  }

  return (
    <AppDivAppDiv ref={appDivRef} className={cx({ 'has-custom-scrollbar': hasCustomScrollbar })}>
      <div style={{ background: '#f2f2f2', padding: 16 }}>
        <Typography>
          <h4>
            ali-react-table 自定义表格结构示例
            <Button onClick={toggle} size="small" style={{ marginLeft: 8 }}>
              展开/收起控制面板
            </Button>
          </h4>
          <p>
            组件提供了丰富的选项用于调整表格的结构，部分结构可以通过 <code>props.xxx</code>{' '}
            快速调整；而其他结构需要通过覆盖表格的样式进行调整。
          </p>
        </Typography>

        {showControlGrid && (
          <div className="control-grid">
            <div className="item">
              <Switch checked={hasHeader} onChange={setHasHeader} />
              <code>props.hasHeader</code>
              <div>是否展示表头</div>
            </div>
            <div className="item">
              <Switch checked={isStickyHeader} onChange={setIsStickyHeader} />
              <code>props.isStickyHeader</code>
              <div>表头是否使用粘性定位</div>
            </div>
            <div className="item">
              <Switch checked={isStickyFooter} onChange={setIsStickyFooter} />
              <code>props.isStickyFooter</code>
              <div>表格页脚是否使用粘性定位</div>
            </div>
            <div className="item">
              <Switch checked={hasStickyScroll} onChange={setHasStickyScroll} />
              <code>props.hasStickyScroll</code>
              <div>表格是否包含横向粘性滚动条</div>
            </div>
            <div className="item">
              <Switch checked={useOuterBorder} onChange={setUseOuterBorder} />
              <code>props.useOuterBorder</code>
              <div>是否使用来自外层 div 的边框代替单元格的外边框</div>
            </div>
            <div className="item">
              <Switch checked={hasData} onChange={setHasData} />
              <code>props.dataSource=[...]</code>
              <div>表格是否有数据</div>
            </div>
            <div className="item">
              <Switch checked={hasFooter} onChange={setHasFooter} />
              <code>props.footerDataSource=[...]</code>
              <div>表格页脚是否有数据</div>
            </div>
            <div className="item">
              <Switch checked={limitSize} onChange={setLimitSize} />
              <div>
                将表格尺寸限制为 <code>600*400</code>
              </div>
            </div>
            <div className="item">
              <Switch checked={hasCustomScrollbar} onChange={setHasCustomScrollbar} />
              <div>使用自定义样式的滚动条</div>
              <div>（通过 styled-components 覆盖样式进行实现）</div>
            </div>
            <div className="item">
              <Switch checked={leftLock} onChange={setLeftLock} />
              <div>左侧锁列</div>
            </div>
            <div className="item">
              <Switch checked={rightLock} onChange={setRightLock} />
              <div>右侧锁列</div>
            </div>
            <div className="item">
              <Switch checked={isLoading} onChange={setIsLoading} />
              <div>数据加载动画</div>
            </div>
            <div className="item">
              <Switch checked={useBigData} onChange={setUseBigData} />
              <div>大数据量</div>
            </div>
            <div className="item">
              <Switch checked={useRotate} onChange={setUseRotate} />
              <div>
                <code>transform="rotate(20deg)"</code>
              </div>
            </div>
            <div className="item">
              <Switch checked={useScale} onChange={setUseScale} />
              <div>
                <code>transform="scale(0.85)"</code>
              </div>
            </div>
            <div className="item">
              <Radio.Group value={theme} onChange={(e) => setTheme(e.target.value)} size="small">
                <Radio.Button value="default">默认</Radio.Button>
                <Radio.Button value="default-dark">暗色</Radio.Button>
                <Radio.Button value="antd">antd</Radio.Button>
                <Radio.Button value="antd-dark">antd 暗色</Radio.Button>
                <Radio.Button value="hippo">盒马</Radio.Button>
              </Radio.Group>
              <div>表格主题</div>
            </div>
          </div>
        )}

        <div style={{ marginTop: '1rem' }}>
          <div>当前表格中单元格的数量：{cellCount} （包括 th 与 td，每隔 500ms 更新）</div>
        </div>
      </div>

      <BaseTableComponent
        className={cx('bordered', 'compact', { dark: theme.includes('dark') })}
        isStickyHeader={isStickyHeader}
        isStickyFooter={isStickyFooter}
        isLoading={isLoading}
        style={{ ...style1, ...style2 }}
        useOuterBorder={useOuterBorder}
        hasStickyScroll={hasStickyScroll}
        stickyScrollHeight={hasCustomScrollbar ? 10 : 'auto'}
        hasHeader={hasHeader}
        columns={[
          { code: 'provinceName', name: '省份', width: 150, lock: leftLock },
          { code: 'cityName', name: '城市', width: 150 },
          ...repeat<ArtColumn>(
            [
              { code: 'confirmedCount', name: '确诊', width: 100, render: amount, align: 'right' },
              { code: 'curedCount', name: '治愈', width: 100, render: amount, align: 'right' },
              { code: 'deadCount', name: '死亡', width: 100, render: amount, align: 'right' },
            ],
            useBigData ? 40 : 10,
          ),
          { code: 'updateTime', name: '更新时间', width: 150, lock: rightLock },
        ]}
        dataSource={hasData ? (useBigData ? repeat(dataSource, 5) : dataSource) : []}
        footerDataSource={hasFooter ? footerDataSource : []}
      />
    </AppDivAppDiv>
  )
}
