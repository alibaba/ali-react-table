import React from 'react'
import { amount, lfl } from 'assets/format'
import styled from 'styled-components'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'

export default { title: '业务示例 / 商品排行榜' }

const StyledBaseTable = styled(WebsiteBaseTable)`
  --border-color: none;
  --header-bgcolor: var(--ifm-background-surface-color);
  --row-height: 36px;

  .art-table-header {
    border-top: 1px solid #dfe3e8;
    border-bottom: 1px solid #dfe3e8;
  }

  .art-table-header-cell {
    height: 48px;
  }
`

export function RankTable() {
  return (
    <StyledBaseTable
      style={{ paddingRight: 16 }}
      columns={[
        { name: '排名', code: 'rank', width: 50 },
        { name: '商品名称', code: 'sku_name' },
        { name: '指标', code: 'value', render: amount, width: 100, align: 'right' },
        { name: '环比', code: 'rated', render: lfl, width: 100, align: 'right' },
        { name: '周比', code: 'ratew', render: lfl, width: 100, align: 'right' },
      ]}
      dataSource={[
        { rank: 1, sku_name: '青浦白鹤红颜草莓300g', value: 1234567, rated: 0.0123456, ratew: 0.087654 },
        { rank: 2, sku_name: '凤达草鸡蛋12枚', value: 1234567, rated: 0.0123456, ratew: 0.087654 },
        { rank: 3, sku_name: 'Dole进口甜香蕉650g', value: 1234567, rated: 0, ratew: -0.087654 },
        { rank: 4, sku_name: '崇明芦笋350g', value: 1234567, rated: 0.0123456, ratew: 0.087654 },
        { rank: 5, sku_name: '北海道原味吐司面包210g', value: 1234567, rated: -0.0123456, ratew: -0.087654 },
        { rank: 6, sku_name: '盒马珍珠生虾仁150g', value: 1234567, rated: 0.0123456, ratew: 0.087654 },
        { rank: 7, sku_name: '洛川红富士苹果4个', value: 1234567, rated: -0.0123456, ratew: -0.087654 },
        { rank: 8, sku_name: '湾仔码头大白菜猪肉水饺300g', value: 1234567, rated: 0.0123456, ratew: 0.087654 },
        { rank: 9, sku_name: '牛奶小蛋糕', value: 1234567, rated: 0.0123456, ratew: 0 },
        { rank: 10, sku_name: '六记雄潮汕牛肉丸250g', value: 1234567, rated: 0.0123456, ratew: 0.087654 },
      ]}
    />
  )
}
