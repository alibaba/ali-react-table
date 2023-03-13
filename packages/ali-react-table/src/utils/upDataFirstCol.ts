import { ArtColumn } from '../interfaces'
/**
 * 更新第一个叶子节点列配置
 */
export default function upDataFirstCol(columns: ArtColumn[], upFn:(firstCol:ArtColumn)=>ArtColumn):ArtColumn[]{
  const [firstCol, ...others] = columns;
  if(firstCol.children && firstCol.children.length){
    firstCol.children = upDataFirstCol(firstCol.children, upFn)
    return [...columns];
  }else{
    return [
      upFn(firstCol),
      ...others
    ]
  }
}