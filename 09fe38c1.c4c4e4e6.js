(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,r){"use strict";function a(e,t,r){return e.getValue?e.getValue(t,r):t[e.code]}r.d(t,"a",(function(){return o}));const o={safeRenderHeader:function(e){var t;return null!==(t=e.title)&&void 0!==t?t:e.name},safeGetValue:a,safeGetRowKey:function(e,t,r){let a;return"string"==typeof e?a=t[e]:"function"==typeof e&&(a=e(t)),null==a&&(a=String(r)),a},safeGetCellProps:function(e,t,r){if(e.getCellProps){const o=a(e,t,r);return e.getCellProps(o,t,r)||{}}return{}},safeRender:function(e,t,r){const o=a(e,t,r);return e.render?e.render(o,t,r):o}}},147:function(e,t,r){"use strict";function a(e){return null==e.children||0===e.children.length}r.d(t,"a",(function(){return a}))},148:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"d",(function(){return h}));var a=r(141);const o=20,n={artTableWrapper:"art-table-wrapper",artTable:"art-table",tableHeader:"art-table-header",tableBody:"art-table-body",tableRow:"art-table-row",tableHeaderRow:"art-table-header-row",tableCell:"art-table-cell",tableHeaderCell:"art-table-header-cell",virtualBlank:"art-virtual-blank",stickyScroll:"art-sticky-scroll",stickyScrollItem:"art-sticky-scroll-item",lockShadowMask:"art-lock-shadow-mask",lockShadow:"art-lock-shadow",leftLockShadow:"art-left-lock-shadow",rightLockShadow:"art-right-lock-shadow",emptyWrapper:"art-empty-wrapper",loadingWrapper:"art-loading-wrapper",loadingIndicatorWrapper:"art-loading-indicator-wrapper",loadingIndicator:"art-loading-indicator"},l=5,i=10,c=20,s=30,d=40,h=a.b.div`
  --row-height: 48px;
  --color: #333;
  --bgcolor: white;
  --hover-bgcolor: var(--hover-color, #f5f5f5);
  --highlight-bgcolor: #eee;

  --header-row-height: 32px;
  --header-color: #5a6c84;
  --header-bgcolor: #e9edf2;
  --header-hover-bgcolor: #ddd;
  --header-highlight-bgcolor: #e4e8ed;

  --cell-padding: 8px 12px;
  --font-size: 12px;
  --line-height: 1.28571;
  --lock-shadow: rgba(152, 152, 152, 0.5) 0 0 6px 2px;

  --border-color: #dfe3e8;
  --cell-border: 1px solid var(--border-color);
  --cell-border-horizontal: var(--cell-border);
  --cell-border-vertical: var(--cell-border);
  --header-cell-border: 1px solid var(--border-color);
  --header-cell-border-horizontal: var(--header-cell-border);
  --header-cell-border-vertical: var(--header-cell-border);

  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  cursor: default;
  color: var(--color);
  font-size: var(--font-size);
  line-height: var(--line-height);
  position: relative;

  // 表格外边框由 art-table-wrapper 提供，而不是由单元格提供
  &.use-outer-border {
    border-top: var(--cell-border-horizontal);
    border-right: var(--cell-border-vertical);
    border-bottom: var(--cell-border-horizontal);
    border-left: var(--cell-border-vertical);

    td.first,
    th.first {
      border-left: none;
    }
    td.last,
    th.last {
      border-right: none;
    }
    tr.first th,
    tr.first td {
      border-top: none;
    }
    tr.last td {
      border-bottom: none;
    }
  }

  .no-scrollbar {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .${n.tableHeader} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--header-bgcolor);
  }

  .${n.tableBody} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--bgcolor);
  }

  &.sticky .${n.tableHeader} {
    position: sticky;
    top: 0;
    z-index: ${i};
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
    display: table;
    margin: 0;
    padding: 0;
  }

  // 在 tr 上设置 .no-hover 可以禁用鼠标悬停效果
  tr:not(.no-hover):hover > td {
    background: var(--hover-bgcolor);
  }
  // 在 tr 设置 highlight 可以为底下的 td 设置为高亮色
  // 而设置 .no-highlight 的话则可以禁用高亮效果；
  tr:not(.no-highlight).highlight > td {
    background: var(--highlight-bgcolor);
  }

  th {
    font-weight: normal;
    text-align: left;
    padding: var(--cell-padding);
    height: var(--header-row-height);
    color: var(--header-color);
    background: var(--header-bgcolor);
    border: none;
    border-right: var(--header-cell-border-vertical);
    border-bottom: var(--header-cell-border-horizontal);
  }
  tr.first th {
    border-top: var(--header-cell-border-horizontal);
  }
  th.first {
    border-left: var(--header-cell-border-vertical);
  }

  td {
    padding: var(--cell-padding);
    background: var(--bgcolor);
    height: var(--row-height);
    border: none;
    border-right: var(--cell-border-vertical);
    border-bottom: var(--cell-border-horizontal);
  }
  td.first {
    border-left: var(--cell-border-vertical);
  }
  tr.first td {
    border-top: var(--cell-border-horizontal);
  }
  &.has-header tr.first td {
    border-top: none;
  }

  .lock-left,
  .lock-right {
    z-index: ${l};
  }

  //#region 锁列阴影
  .${n.lockShadowMask} {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: ${c};
    pointer-events: none;
    overflow: hidden;

    .${n.lockShadow} {
      height: 100%;
    }

    .${n.leftLockShadow} {
      margin-right: ${o}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-right: var(--cell-border-vertical);
      }
    }

    .${n.rightLockShadow} {
      margin-left: ${o}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-left: var(--cell-border-vertical);
      }
    }
  }
  //#endregion

  //#region 空表格展现
  .${n.emptyWrapper} {
    pointer-events: none;
    color: #99a3b3;
    font-size: 12px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .empty-image {
      width: 50px;
      height: 50px;
    }

    .empty-tips {
      margin-top: 16px;
      line-height: 1.5;
    }
  }
  //#endregion

  //#region 粘性滚动条
  .${n.stickyScroll} {
    overflow: auto;
    position: sticky;
    bottom: 0;
    z-index: ${s};
    margin-top: -17px;
  }

  .${n.stickyScrollItem} {
    // 必须有高度才能出现滚动条
    height: 1px;
    visibility: hidden;
  }
  //#endregion

  //#region 加载样式
  .${n.loadingWrapper} {
    position: relative;

    .${n.loadingIndicatorWrapper} {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
    }

    .${n.loadingIndicator} {
      position: sticky;
      z-index: ${d};
      transform: translateY(-50%);
    }
  }
  //#endregion
`},155:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return c}));var a=r(0),o=r.n(a),n=r(141);const l=n.b.div`
  display: inline-flex;
  align-items: center;
`,i=Object(n.b)(l)`
  &.leaf {
    cursor: default;
  }

  .expansion-icon {
    fill: #999;
    flex: 0 0 16px;
    transition: transform 200ms;

    &.expanded {
      transform-origin: center center;
      transform: rotate(90deg);
    }
  }
`;const c={Loading:function(e){return o.a.createElement("svg",Object.assign({width:"16",height:"16",fill:"currentColor",viewBox:"0 0 1024 1024"},e),o.a.createElement("path",{d:"M512 74.667c-17.067 0-32 14.933-32 32V256c0 17.067 14.933 32 32 32s32-14.933 32-32V106.667c0-17.067-14.933-32-32-32zm181.333 288c8.534 0 17.067-2.134 23.467-8.534L821.333 249.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L672 309.333c-12.8 12.8-12.8 32 0 44.8 4.267 6.4 12.8 8.534 21.333 8.534zm224 117.333H768c-17.067 0-32 14.933-32 32s14.933 32 32 32h149.333c17.067 0 32-14.933 32-32s-14.933-32-32-32zM714.667 669.867c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8L774.4 819.2c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L714.667 669.867zM512 736c-17.067 0-32 14.933-32 32v149.333c0 17.067 14.933 32 32 32s32-14.933 32-32V768c0-17.067-14.933-32-32-32zm-202.667-66.133L204.8 774.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l104.534-104.533c12.8-12.8 12.8-32 0-44.8s-36.267-12.8-46.934 0zM288 512c0-17.067-14.933-32-32-32H106.667c-17.067 0-32 14.933-32 32s14.933 32 32 32H256c17.067 0 32-14.933 32-32zm-40.533-309.333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L307.2 352c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L247.467 202.667z"}))},CaretDown:function(e){return o.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),o.a.createElement("path",{d:"M24 12L16 22 8 12z"}))},CaretRight:function(e){return o.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),o.a.createElement("path",{d:"M12 8L22 16 12 24z"}))},Info:function(e){return o.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 16 16"},e),o.a.createElement("path",{d:"M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"}),o.a.createElement("path",{d:"M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"}))}}},170:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var a=r(0),o=r.n(a),n=r(148);const l=o.a.memo((()=>o.a.createElement("svg",{style:{margin:"auto",display:"block",width:40,height:40},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},o.a.createElement("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#23a7fa",strokeDasharray:"188 64",strokeLinecap:"round",strokeWidth:"10"},o.a.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})))));function i({children:e,visible:t}){return o.a.createElement("div",{className:"art-loading-content-wrapper",style:{filter:t?"blur(1px)":"none"}},e)}function c({visible:e,children:t,LoadingContentWrapper:r=i,LoadingIcon:a=l}){return o.a.createElement("div",{className:n.b.loadingWrapper},e&&o.a.createElement("div",{className:n.b.loadingIndicatorWrapper},o.a.createElement("div",{className:n.b.loadingIndicator},o.a.createElement(a,null))),o.a.createElement(r,{visible:e,children:t}))}},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class a{constructor(){Object.defineProperty(this,"rects",{enumerable:!0,configurable:!0,writable:!0,value:[]})}testSkip(e,t){return this.rects.some((({left:r,right:a,top:o,bottom:n})=>r<=t&&t<a&&o<=e&&e<n))}stripUpwards(e){this.rects=this.rects.filter((t=>t.bottom>e))}add(e,t,r,a){this.rects.push({left:t,right:t+r,top:e,bottom:e+a})}}},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return ae}));var a=r(131),o=r.n(a),n=r(0),l=r.n(n),i=r(463),c=r(721),s=r(715),d=r(726),h=r(723),p=r(722),u=r(718),b=r(548),f=r(714),m=r(716),g=r(717),v=r(144),w=r(148);const y=l.a.memo((()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{alt:"empty-image",className:"empty-image",src:"//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"}),l.a.createElement("div",{className:"empty-tips"},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",l.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2"))));function k({colgroup:e,colSpan:t,isLoading:r,emptyCellHeight:a,EmptyContent:n=y}){const i=!r;return l.a.createElement("table",null,e,l.a.createElement("tbody",null,l.a.createElement("tr",{className:o()(w.b.tableRow,"first","last","no-hover"),"data-rowindex":0},l.a.createElement("td",{className:o()(w.b.tableCell,"first","last"),colSpan:t,style:{height:null!=a?a:200}},i&&l.a.createElement("div",{className:w.b.emptyWrapper},l.a.createElement(n,null))))))}var x=r(147),S=r(322),E=r(725),j=r(713),R=r(582),O=r(727);const L="v3"===(null!=r(141).a?"v5":"v3")?"innerRef":"ref",M=100;function z(e){let t=0;return e.forEach((e=>{t+=e})),t}const N=Object(E.a)((()=>Object(j.a)(window,"resize").pipe(Object(O.a)(150,R.b,{leading:!0,trailing:!0}))));function H(){const e=document.createElement("div");e.style.position="absolute",e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.top="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,r=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{width:t,height:r}}let I;function B(e,t){return null==e?void 0:e.querySelector("."+t)}function C(e,t){const r=Object.prototype.hasOwnProperty;if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let n=0;n<a.length;n++)if(!r.call(t,a[n])||!Object.is(e[a[n]],t[a[n]]))return!1;return!0}function T(e,t){return null==e||"auto"===e?t:e}let W=!1;function $(e){W||(W=!0,console.warn("[ali-react-table] column.hidden \u5df2\u7ecf\u8fc7\u65f6\uff0c\u5982\u679c\u9700\u8981\u9690\u85cf\u8be5\u5217\uff0c\u8bf7\u5c06\u5176\u4ece columns \u6570\u7ec4\u4e2d\u79fb\u9664",e))}function V(e){let t=0;for(const a of e){if(!r(a))break;t+=1}return t;function r(e){return Object(x.a)(e)?e.lock:e.lock||e.children.some(r)}}function P(e,t){const{useVirtual:r,columns:a,dataSource:o,defaultColumnWidth:n}=e,l=function(e,t){return null!=e&&Array.isArray(e)||(console.warn("[ali-react-table] <BaseTable /> props.columns \u9700\u8981\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4",e),e=[]),function e(r){const a=[];for(let o of r)if(null==o.width&&null!=t&&(o={...o,width:t}),Object(x.a)(o))o.hidden?$(o):a.push(o);else{const t=e(o.children);t.length>0&&a.push({...o,children:t})}return a}(e)}(a,n),i=V(l),c=Object(S.a)(l,"leaf-only");if(i===l.length)return{flat:{left:[],right:[],full:c,center:c},nested:{left:[],right:[],full:l,center:l},useVirtual:{horizontal:!1,vertical:!1,header:!1},stickyLeftMap:new Map,stickyRightMap:new Map};const s=l.slice(0,i),d=V(l.slice().reverse()),h=l.slice(i,l.length-d),p=l.slice(l.length-d),u=c.length>=100&&c.every((e=>null!=e.width)),b=o.length>=100,f="object"!=typeof r?{horizontal:T(r,u),vertical:T(r,b),header:T(r,!1)}:{horizontal:T(r.horizontal,u),vertical:T(r.vertical,b),header:T(r.header,b)},m={left:Object(S.a)(s,"leaf-only"),full:c,right:Object(S.a)(p,"leaf-only"),center:Object(S.a)(h,"leaf-only")},g=m.full.length,v=m.left.length,w=m.right.length,y=new Map;let k=0;for(let x=0;x<v;x++)y.set(x,k),k+=m.full[x].width;const E=new Map;let j=0;for(let x=0;x<w;x++)E.set(g-1-x,j),j+=m.full[g-1-x].width;return{flat:m,nested:{left:s,full:l,right:p,center:h},useVirtual:f,stickyLeftMap:y,stickyRightMap:E}}var D=r(323);function X(e){const t=[];for(let r=0;r<e;r++)t.push(r);return t}function Y(e,t){const r=[];for(let o=0;o<t;o++)r.push([]);const a=[];return function e(t,o){let n=0;for(let l=0;l<t.length;l++){const i=t[l];if(Object(x.a)(i)){n+=1;const e={type:"normal",width:i.col.width,col:i.col,colIndex:i.colIndex,colSpan:1,isLeaf:!0};r[o].push(e),a.push(e)}else{const t=e(i.children,o+1);n+=t.leafCount,t.leafCount>0&&r[o].push({type:"normal",width:i.col.width,col:i.col,colIndex:i.colIndex,colSpan:t.leafCount,isLeaf:!1})}}return{leafCount:n}}(e,0),{flat:a,leveled:r}}function A(e,t){return function e(t,r){const a=[];let o=0;for(let n=0;n<t.length;n++){const l=t[n],i=r+o;if(Object(x.a)(l))o+=1,a.push({colIndex:i,col:l});else{const t=e(l.children,i);o+=t.leafCount,t.leafCount>0&&a.push({col:l,colIndex:i,children:t.result})}}return{result:a,leafCount:o}}(e,t).result}function U({flat:e,nested:t,hoz:r,useVirtual:a},o){if(a.header){const a=Y(A(t.left,0),o),n=Y(function(e,t,r){return function e(a,o){let n=0;const l=[];for(const i of a){const a=o+n;if(Object(x.a)(i))n+=1,r+t.leftIndex<=a&&a<r+t.rightIndex&&l.push({colIndex:a,col:i});else{const t=e(i.children,a);n+=t.leafCount,t.filtered.length>0&&l.push({colIndex:a,col:i,children:t.filtered})}}return{filtered:l,leafCount:n}}(e,r).filtered}(t.center,r,e.left.length),o),l=Y(A(t.right,e.left.length+e.center.length),o);return{flat:[...a.flat,{type:"blank",width:r.leftBlank,blankSide:"left"},...n.flat,{type:"blank",width:r.rightBlank,blankSide:"right"},...l.flat],leveled:X(o).map((e=>[...a.leveled[e],{type:"blank",width:r.leftBlank,blankSide:"left"},...n.leveled[e],{type:"blank",width:r.rightBlank,blankSide:"right"},...l.leveled[e]]))}}return Y(A(t.full,0),o)}function F(e){const{nested:t,flat:r,stickyLeftMap:a,stickyRightMap:n}=e,i=Object(D.a)(t.full)+1,c=U(e,i),s=r.full.length,d=r.left.length,h=r.right.length,p=c.leveled.map(((e,t)=>{const r=e.map((e=>{if("normal"===e.type){var r,c;const{colIndex:p,colSpan:u,isLeaf:b,col:f}=e,m=null!==(r=f.headerCellProps)&&void 0!==r?r:{},g={};return p<d?(g.position="sticky",g.left=a.get(p)):p>=s-h&&(g.position="sticky",g.right=n.get(p)),l.a.createElement("th",Object.assign({key:p},m,{className:o()(w.b.tableHeaderCell,m.className,{first:0===p,last:p+u===s,"lock-left":p<d,"lock-right":p>=s-h}),colSpan:u,rowSpan:b?i-t:void 0,style:{textAlign:f.align,...m.style,...g}}),null!==(c=f.title)&&void 0!==c?c:f.name)}return e.width>0?l.a.createElement("th",{key:e.blankSide}):null}));return l.a.createElement("tr",{key:t,className:o()(w.b.tableHeaderRow,{first:0===t,last:t===i-1})},r)}));return l.a.createElement("table",null,l.a.createElement("colgroup",null,c.flat.map((e=>"blank"===e.type?e.width>0?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):null:l.a.createElement("col",{key:e.colIndex,style:{width:e.width}})))),l.a.createElement("thead",null,p))}function q(e,t){const r=new Array(e).fill(t);return{getRenderRange:function(e,a,o){return r.length!==o&&function(e){if(e<r.length)r.length=e;else{const a=r.length;r.length=e,r.fill(t,a)}}(o),a<=0?e<=0?function(){const e={topIndex:0,topBlank:0},t=l(0,e);return{...e,...t}}():function(){const e=i(o),t=n(e),r=l(e,t);return{...t,...r}}():function(){const t=n(e),r=l(e+a,t);return{...t,...r}}();function n(e){if(0===r.length)return{topIndex:0,topBlank:0};let t=0,a=0;for(;t<r.length;){const o=r[t];if(a+o>=e)break;a+=o,t+=1}return function(e,t){let a=0,o=0;for(;o<e&&a<M;)o+=1,a+=r[e-o];return{topIndex:e-o,topBlank:t-a}}(t,a)}function l(e,t){let a=t.topIndex,n=t.topBlank;for(;a<o&&n<e;)n+=r[a],a+=1;return function(e,t){let a=0,n=0;for(;n<o-e&&a<M;)a+=r[e+n],n+=1;return{bottomIndex:e+n,bottomBlank:t-a}}(a,i(o)-n)}function i(e){return z(r)+(e-r.length)*t}},updateRow:function(e,t,a){r[e]=a},cache:r}}var G=r(177),K=r(365),J=r(373),Z=r(724);function Q(e){return e===window?{left:0,top:0,bottom:window.innerHeight,right:window.innerWidth}:e.getBoundingClientRect()}function _(e){return e===window?Object(j.a)(e,"resize"):new J.a((t=>{const r=new K.a((()=>{t.next()}));return r.observe(e),()=>{r.disconnect()}}))}function ee(e,t){return Object(Z.a)(Object(j.a)(t,"scroll"),_(t),_(e)).pipe(b.a((()=>function(e,t){const r=Q(e),a=Q(t);return{offsetY:Math.max(0,a.top-r.top),offsetX:Math.max(0,a.left-r.left),clipRect:{left:Math.max(r.left,a.left),top:Math.max(r.top,a.top),right:Math.min(r.right,a.right),bottom:Math.min(r.bottom,a.bottom)}}}(e,t))))}var te=r(170);let re=!1;class ae extends l.a.Component{constructor(e){super(e),Object.defineProperty(this,"rowHeightManager",{enumerable:!0,configurable:!0,writable:!0,value:q(this.props.dataSource.length,this.props.estimatedRowHeight)}),Object.defineProperty(this,"artTableWrapperRef",{enumerable:!0,configurable:!0,writable:!0,value:l.a.createRef()}),Object.defineProperty(this,"doms",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rootSubscription",{enumerable:!0,configurable:!0,writable:!0,value:new i.a}),Object.defineProperty(this,"data$",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.state={...P(e),hasScroll:!0,needRenderLock:!0,offsetY:0,offsetX:0,maxRenderHeight:600,maxRenderWidth:800}}getDoms(){return this.doms}updateStickyScroll(){const{stickyScroll:e,artTable:t,stickyScrollItem:r}=this.doms;if(!t)return;const a=t.querySelector(`.${w.b.tableBody} table`).offsetWidth,o=t.offsetWidth,n=(null==I&&(I=new c.a(H()),N.pipe(Object(b.a)((()=>H()))).subscribe(I)),I.value);e.style.marginTop=`-${n.height}px`,o>=a?this.state.hasScroll&&this.setState({hasScroll:!1}):!this.state.hasScroll&&n.height>5&&this.setState({hasScroll:!0}),r.style.width=a+"px"}renderTableHeader({horizontal:e}){const{stickyTop:t,hasHeader:r}=this.props,{flat:a,nested:n,useVirtual:i,stickyLeftMap:c,stickyRightMap:s}=this.state;return l.a.createElement("div",{className:o()(w.b.tableHeader,"no-scrollbar"),style:{top:0===t?void 0:t,display:r?void 0:"none"}},l.a.createElement(F,{nested:n,flat:a,hoz:e,useVirtual:i,stickyLeftMap:c,stickyRightMap:s}))}updateOffsetX(e){this.state.useVirtual.horizontal&&Math.abs(e-this.state.offsetX)>=50&&this.setState({offsetX:e})}syncHorizontalScrollFromTableBody(){this.syncHorizontalScroll(this.doms.tableBody.scrollLeft)}syncHorizontalScroll(e){this.updateOffsetX(e);const{tableBody:t,artTableWrapper:r}=this.doms,{flat:a}=this.state,o=a.left.length>0&&this.state.needRenderLock&&e>0,n=B(r,w.b.leftLockShadow);o?n.classList.add("show-shadow"):n.classList.remove("show-shadow");const l=a.right.length>0&&this.state.needRenderLock&&e<t.scrollWidth-t.clientWidth,i=B(r,w.b.rightLockShadow);l?i.classList.add("show-shadow"):i.classList.remove("show-shadow")}getVerticalRenderRange(){const{dataSource:e}=this.props,{useVirtual:t,offsetY:r,maxRenderHeight:a}=this.state,o=e.length;return t.vertical?this.rowHeightManager.getRenderRange(r,a,o):function(e){return{topIndex:0,topBlank:0,bottomIndex:e,bottomBlank:0}}(o)}getHorizontalRenderRange(){const{offsetX:e,maxRenderWidth:t,useVirtual:r,flat:a}=this.state;if(!r.horizontal)return{leftIndex:0,leftBlank:0,rightIndex:a.full.length,rightBlank:0};let o=0,n=0,l=0,i=0;const c=Math.max(0,e-M);for(;o<a.center.length;){const e=a.center[o];if(!(e.width+l<c))break;o+=1,l+=e.width}const s=t+(c-l)+200;for(;o+n<a.center.length;){const e=a.center[o+n];if(!(e.width+i<s))break;i+=e.width,n+=1}const d=a.center.length-o-n;return{leftIndex:o,leftBlank:l,rightIndex:o+n,rightBlank:z(a.center.slice(a.center.length-d).map((e=>e.width)))}}getRenderRange(){return{vertical:this.getVerticalRenderRange(),horizontal:this.getHorizontalRenderRange()}}getFlatHozWrappedCols(e){const{flat:t}=this.state;return[...t.left.map(((e,t)=>({type:"normal",col:e,colIndex:t}))),e.leftBlank>0&&{type:"blank",blankSide:"left",width:e.leftBlank},...t.center.slice(e.leftIndex,e.rightIndex).map(((r,a)=>({type:"normal",col:r,colIndex:t.left.length+e.leftIndex+a}))),e.rightBlank>0&&{type:"blank",blankSide:"right",width:e.rightBlank},...t.right.map(((e,r)=>({type:"normal",col:e,colIndex:t.full.length-t.right.length+r})))].filter(Boolean)}renderTableBody(e){const{vertical:t,horizontal:r}=e,{dataSource:a,getRowProps:n,primaryKey:i,isLoading:c,emptyCellHeight:s}=this.props,d=this.getFlatHozWrappedCols(r),h=l.a.createElement("colgroup",null,d.map((e=>"blank"===e.type?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):l.a.createElement("col",{key:e.colIndex,style:{width:e.col.width}}))));if(t.bottomIndex-t.topIndex==0){const{components:e,emptyContent:t}=this.props;let r=e.EmptyContent;return null==r&&null!=t&&(re||(re=!0,console.warn("[ali-react-table] BaseTable props.emptyContent \u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u4f7f\u7528 props.components.EmptyContent \u6765\u81ea\u5b9a\u4e49\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u8868\u683c\u8868\u73b0")),r=()=>t),l.a.createElement("div",{className:w.b.tableBody},l.a.createElement(k,{colgroup:h,colSpan:d.length,isLoading:c,EmptyContent:r,emptyCellHeight:s}))}const{flat:p,stickyLeftMap:u,stickyRightMap:b}=this.state,f=p.full.length,m=p.left.length,g=p.right.length,y=new G.a,x=a.slice(t.topIndex,t.bottomIndex).map((function(e,c){const s=t.topIndex+c;y.stripUpwards(s);const h=n(e,s),p=o()(w.b.tableRow,{first:0===s,last:s===a.length-1,even:s%2==0,odd:s%2==1},null==h?void 0:h.className);return l.a.createElement("tr",Object.assign({},h,{className:p,key:v.a.safeGetRowKey(i,e,s),"data-rowindex":s}),d.map((a=>"blank"===a.type?l.a.createElement("td",{key:a.blankSide}):function(e,a,n,i){var c,s;if(y.testSkip(a,i))return null;const d=v.a.safeGetValue(n,e,a),h=null!==(c=null===(s=n.getCellProps)||void 0===s?void 0:s.call(n,d,e,a))&&void 0!==c?c:{};let p=d;n.render&&(p=n.render(d,e,a));let k=1,x=1;if(n.getSpanRect){const t=n.getSpanRect(d,e,a);k=null==t?1:t.right-i,x=null==t?1:t.bottom-a}else null!=h.colSpan&&(k=h.colSpan),null!=h.rowSpan&&(x=h.rowSpan);x=Math.min(x,t.bottomIndex-a),k=Math.min(k,m+r.rightIndex-i);const S=k>1||x>1;S&&y.add(a,i,k,x);const E={};i<m?(E.position="sticky",E.left=u.get(i)):i>=f-g&&(E.position="sticky",E.right=b.get(i));return l.a.createElement("td",{key:i,...h,className:o()(w.b.tableCell,h.className,{first:0===i,last:i+k===f,"lock-left":i<m,"lock-right":i>=f-g}),...S?{colSpan:k,rowSpan:x}:null,style:{textAlign:n.align,...h.style,...E}},p)}(e,s,a.col,a.colIndex))))}));return l.a.createElement("div",{className:w.b.tableBody},l.a.createElement("div",{key:"top-blank",className:o()(w.b.virtualBlank,"top"),style:{height:t.topBlank}}),l.a.createElement("table",null,h,l.a.createElement("tbody",null,x)),l.a.createElement("div",{key:"bottom-blank",className:o()(w.b.virtualBlank,"bottom"),style:{height:t.bottomBlank}}))}isLock(){const{nested:e}=this.state;return e.left.length>0||e.right.length>0}render(){const{dataSource:e,className:t,style:r,hasHeader:a,useOuterBorder:n,isStickyHead:i,isLoading:c,components:s}=this.props,{flat:d}=this.state,h=this.getRenderRange();return(c=>{const s={className:o()(w.b.artTableWrapper,{"use-outer-border":n,sticky:i,empty:0===e.length,lock:this.isLock(),"has-header":a},t),style:r,[L]:this.artTableWrapperRef};return l.a.createElement(w.d,Object.assign({},s),c)})(l.a.createElement(te.b,{visible:c,LoadingIcon:s.LoadingIcon,LoadingContentWrapper:s.LoadingContentWrapper},l.a.createElement("div",{className:w.b.artTable},this.renderTableHeader(h),this.renderTableBody(h),l.a.createElement("div",{className:w.b.lockShadowMask,style:{left:0,width:z(d.left.map((e=>e.width)))+w.c}},l.a.createElement("div",{className:o()(w.b.lockShadow,w.b.leftLockShadow)})),l.a.createElement("div",{className:w.b.lockShadowMask,style:{right:0,width:z(d.right.map((e=>e.width)))+w.c}},l.a.createElement("div",{className:o()(w.b.lockShadow,w.b.rightLockShadow)}))),l.a.createElement("div",{className:w.b.stickyScroll,style:{display:this.state.hasScroll?"block":"none",bottom:this.props.stickyBottom}},l.a.createElement("div",{className:w.b.stickyScrollItem}))))}componentDidMount(){this.updateDoms(),this.data$=new c.a({props:this.props,state:this.state,prevProps:null,prevState:null}),this.initSubscriptions(),this.didMountOrUpdate()}componentDidUpdate(e,t){this.updateDoms(),this.data$.next({props:this.props,state:this.state,prevProps:e,prevState:t}),this.didMountOrUpdate(e,t)}didMountOrUpdate(e,t){this.syncHorizontalScrollFromTableBody(),this.updateStickyScroll(),this.adjustNeedRenderLock(),this.updateRowHeightManager(e),this.resetStickyScrollIfNecessary(t)}resetStickyScrollIfNecessary(e){null!=e&&this.state.hasScroll&&!e.hasScroll&&(this.doms.stickyScroll.scrollLeft=0)}initSubscriptions(){const{tableHeader:e,tableBody:t,stickyScroll:r}=this.doms;this.rootSubscription.add(N.subscribe((()=>{this.updateStickyScroll(),this.adjustNeedRenderLock()}))),this.rootSubscription.add(function(e,t){const r=new Set;function a(t,a){r.clear();for(const o of e)o!==t&&(o.scrollLeft=a,r.add(o))}const o=new i.a;for(const n of e){const e=()=>{if(r.has(n))return void r.delete(n);const e=n.scrollLeft;a(n,e),t(e)};n.addEventListener("scroll",e,{passive:!0}),o.add((()=>n.removeEventListener("scroll",e)))}return o}([t,r,e],(e=>{this.syncHorizontalScroll(e)})));const a=this.data$.pipe(b.a((e=>e.props.flowRoot)),f.a((e=>{const t=this.artTableWrapperRef.current;if("auto"===e){const e=getComputedStyle(t);return Object(s.a)("visible"!==e.overflowY?t:window)}return"self"===e?Object(s.a)(t):"function"==typeof e?Object(d.a)(0,h.a).pipe(b.a(e)):Object(s.a)(e)})),m.a()).pipe(f.a((e=>ee(this.doms.artTable,e))));this.rootSubscription.add(Object(p.a)([a.pipe(b.a((e=>e.clipRect)),m.a(C)),this.data$.pipe(g.a((e=>{var t;return!(null===(t=e.prevProps)||void 0===t?void 0:t.isLoading)&&e.props.isLoading})))]).subscribe((([e])=>{const{artTableWrapper:t}=this.doms,r=B(t,w.b.loadingIndicator);if(!r)return;const a=e.bottom-e.top;r.style.top=a/2+"px",r.style.marginTop=a/2+"px"}))),this.rootSubscription.add(a.pipe(g.a((()=>{const{horizontal:e,vertical:t}=this.state.useVirtual;return e||t})),b.a((({clipRect:e,offsetY:t})=>({maxRenderHeight:e.bottom-e.top,maxRenderWidth:e.right-e.left,offsetY:t}))),m.a(((e,t)=>Math.abs(e.maxRenderWidth-t.maxRenderWidth)<50&&Math.abs(e.maxRenderHeight-t.maxRenderHeight)<50&&Math.abs(e.offsetY-t.offsetY)<50))).subscribe((e=>{this.setState(e)})))}componentWillUnmount(){this.rootSubscription.unsubscribe()}updateDoms(){const e=this.artTableWrapperRef.current,t=B(e,w.b.artTable);this.doms={artTableWrapper:e,artTable:t,tableHeader:B(t,w.b.tableHeader),tableBody:B(t,w.b.tableBody),stickyScroll:B(e,w.b.stickyScroll),stickyScrollItem:B(e,w.b.stickyScrollItem)}}updateRowHeightManager(e){var t;const r=this.doms.artTable.querySelector(`.${w.b.virtualBlank}.top`),a=null!==(t=null==r?void 0:r.clientHeight)&&void 0!==t?t:0;let o=-1,n=-1;for(const c of(l=this.doms.artTable,i=w.b.tableRow,null==l?void 0:l.querySelectorAll("."+i))){const e=Number(c.dataset.rowindex);if(isNaN(e))continue;o=Math.max(o,e);const t=c.offsetTop+a,r=c.offsetHeight;n=Math.max(n,t+r),this.rowHeightManager.updateRow(e,t,r)}var l,i;if(-1!==o&&n<this.state.offsetY+this.state.maxRenderHeight){this.getVerticalRenderRange().bottomIndex-1>o&&this.forceUpdate()}}adjustNeedRenderLock(){const{needRenderLock:e,flat:t}=this.state;if(this.isLock()){const r=z(t.full.map((e=>e.width)))>this.doms.artTable.clientWidth;e!==r&&this.setState({needRenderLock:r})}else e&&this.setState({needRenderLock:!1})}}Object.defineProperty(ae,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{isStickyHead:!0,stickyTop:0,stickyBottom:0,useVirtual:"auto",estimatedRowHeight:48,hasHeader:!0,isLoading:!1,components:{},getRowProps:u.a,flowRoot:"auto"}}),Object.defineProperty(ae,"getDerivedStateFromProps",{enumerable:!0,configurable:!0,writable:!0,value:P})},322:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(147);function o(e,t="pre"){const r=[];return function e(o){if(null==o)return;for(const n of o)Object(a.a)(n)?r.push(n):"pre"===t?(r.push(n),e(n.children)):"post"===t?(e(n.children),r.push(n)):e(n.children)}(e),r}},323:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(147);function o(e){let t=-1;return function e(r,o){for(const n of r)Object(a.a)(n)?t=Math.max(t,o):e(n.children,o+1)}(e,0),t}},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r(182),o=r(148),n=r(323),l=r(539),i=r(131),c=r.n(i),s=r(0),d=r.n(s),h=r(141);const p=Object(h.b)(a.a)`
  --highlight-bgcolor: #fafafa;
  --header-highlight-bgcolor: #f5f5f5;

  --lock-shadow: rgba(0, 0, 0, 0.2) 0 0 10px 0px;
  --row-height: 32px;
  --header-row-height: 36px;
  --cell-padding: 16px;
  --color: rgba(0, 0, 0, 0.85);
  --header-color: rgba(0, 0, 0, 0.85);
  --header-bgcolor: #fafafa;
  --hover-bgcolor: #fafafa;
  --header-hover-bgcolor: #f5f5f5;
  --line-height: 1.5715;
  --font-size: 14px;
  --border-color: #f0f0f0;

  td {
    transition: background 0.3s;
  }

  .${o.b.lockShadowMask} {
    .${o.b.lockShadow} {
      transition: box-shadow 0.3s;
    }
  }

  &:not(.bordered) {
    --cell-border-vertical: none;
    --header-cell-border-vertical: none;

    thead > tr.first th {
      border-top: none;
    }
  }

  th {
    font-weight: 500;
  }
`,u=d.a.memo((()=>d.a.createElement(d.a.Fragment,null,d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"41",className:"ant-empty-img-simple",viewBox:"0 0 64 41"},d.a.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(0 1)"},d.a.createElement("ellipse",{cx:"32",cy:"33",className:"ant-empty-img-simple-ellipse",rx:"32",ry:"7"}),d.a.createElement("g",{fillRule:"nonzero",className:"ant-empty-img-simple-g"},d.a.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),d.a.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",className:"ant-empty-img-simple-path"})))),d.a.createElement("div",{className:"empty-tips",style:{marginTop:8,color:"rgba(0,0,0,.25)",fontSize:14}},"\u6682\u65e0\u6570\u636e"))));class b extends d.a.Component{render(){const{children:e,visible:t}=this.props;return d.a.createElement("div",{className:"ant-loading-content-wrapper",style:{opacity:t?.6:void 0}},e)}}function f(){return d.a.createElement(l.a,{style:{display:"block"}})}const m=d.a.forwardRef((function(e,t){const r=Object(n.a)(e.columns);return d.a.createElement(p,Object.assign({ref:t},e,{className:c()(e.className,{"header-depth-0":0===r,"header-depth-1":1===r}),components:{EmptyContent:u,LoadingContentWrapper:b,LoadingIcon:f,...e.components}}))}))},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var a=r(182),o=r(323),n=r(131),l=r.n(n),i=r(0),c=r.n(i),s=r(141),d=r(155);const h=s.c`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,p=Object(s.b)(a.a)`
  --row-height: 50px;
  --header-row-height: 36px;
  --border-color: #eee;
  --lock-shadow: rgba(56, 88, 207, 0.12) 0 0 8px 4px;
  --cell-padding: 8px 20px;
  --line-height: 20px;

  --color: #666;
  --header-color: #333;
  --header-bgcolor: #f9f9f9;
  --hover-bgcolor: #eff3fb;
  --header-hover-bgcolor: #eff2fb;
  --highlight-bgcolor: #e2e6ef;
  --header-highlight-bgcolor: #e2e6ef;

  &.header-depth-1 {
    --header-row-height: 40px;
  }

  &.header-depth-0 {
    --header-row-height: 50px;
  }

  &:not(.bordered) {
    --cell-border-vertical: none;
    --header-cell-border-vertical: none;

    thead > tr.first th {
      border-top: none;
    }
    thead > tr.last th {
      border-bottom: none;
    }
  }

  th {
    font-weight: 500;
  }

  &.compact {
    --row-height: 40px;
    --header-row-height: 40px;
    --cell-padding: 8px 16px;
  }

  &.zebra tr.odd,
  tr.alternative {
    --bgcolor: #f9f9f9;
    // 仍然需要 hover 效果，故 --hover-bgcolor 还是保持原样
  }
`,u=c.a.memo((()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{alt:"hippo-table-empty",width:"160",height:"160",src:"https://img.alicdn.com/tfs/TB1s7zrWeL2gK0jSZFmXXc7iXXa-240-240.svg"}),c.a.createElement("div",{className:"empty-tips",style:{marginTop:-24}},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",c.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2"))));class b extends c.a.Component{constructor(){super(...arguments),Object.defineProperty(this,"handle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:{warming:!1,prevVisible:!1}})}static getDerivedStateFromProps(e,t){return!t.prevVisible&&e.visible?{warming:!0,prevVisible:!0}:e.visible?null:{warming:!1,prevVisible:!1}}componentDidUpdate(e){!e.visible&&this.props.visible?this.handle=setTimeout((()=>{this.setState({warming:!1})}),1e3):this.props.visible||clearTimeout(this.handle)}componentWillUnmount(){clearTimeout(this.handle)}render(){const{visible:e,children:t}=this.props,{warming:r}=this.state;return c.a.createElement("div",{className:"hippo-loading-content-wrapper",style:{filter:e?r?"blur(0.5px)":"blur(1px)":"none",transition:"filter 300ms cubic-bezier(0, 0.4, 0.6, 1)"}},t)}}const f=Object(s.b)(d.c.Loading)`
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
  animation: 1.5s linear 0s infinite ${h};
  opacity: 1;
  transition: opacity 300ms;
`,m=c.a.memo((()=>{const[e,t]=Object(i.useState)(!1);return Object(i.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),1e3);return()=>clearTimeout(e)}),[]),c.a.createElement(f,{type:"loading",className:"hippo-table-loading",style:{opacity:e?1:0}})})),g=c.a.forwardRef((function(e,t){const r=Object(o.a)(e.columns);return c.a.createElement(p,Object.assign({ref:t},e,{className:l()(e.className,{"header-depth-0":0===r,"header-depth-1":1===r}),components:{EmptyContent:u,LoadingContentWrapper:b,LoadingIcon:m,...e.components}}))}))},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return d})),r.d(t,"rightToc",(function(){return h})),r.d(t,"dataSource",(function(){return p})),r.d(t,"columns",(function(){return u})),r.d(t,"default",(function(){return f}));var a=r(2),o=r(6),n=(r(0),r(146)),l=r(182),i=r(376),c=r(377),s={id:"theme",title:"\u8868\u683c\u4e3b\u9898\u5207\u6362"},d={unversionedId:"theme",id:"theme",isDocsHomePage:!1,title:"\u8868\u683c\u4e3b\u9898\u5207\u6362",description:"export const dataSource = [",source:"@site/examples/theme.mdx",slug:"/theme",permalink:"/examples/theme",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/examples/theme.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u5927\u6570\u636e\u91cf\u6d4b\u8bd5",permalink:"/examples/big-data"},next:{title:"\u5178\u578b\u6570\u636e\u62a5\u8868",permalink:"/examples/biz/data-report"}},h=[{value:"\u9ed8\u8ba4\u8868\u683c\u4e3b\u9898",id:"\u9ed8\u8ba4\u8868\u683c\u4e3b\u9898",children:[]},{value:"Ant Design",id:"ant-design",children:[]},{value:"Hippo Design",id:"hippo-design",children:[]}],p=[{prov:"\u6e56\u5317\u7701",confirmed:54406,cured:4793,dead:1457,t:"2020-02-15 19:52:02"},{prov:"\u5e7f\u4e1c\u7701",confirmed:1294,cured:409,dead:2,t:"2020-02-15 19:52:02"},{prov:"\u6cb3\u5357\u7701",confirmed:1212,cured:390,dead:13,t:"2020-02-15 19:52:02"},{prov:"\u6d59\u6c5f\u7701",confirmed:1162,cured:428,dead:0,t:"2020-02-15 19:52:02"},{prov:"\u6e56\u5357\u7701",confirmed:1001,cured:417,dead:2,t:"2020-02-15 19:52:02"}],u=[{code:"prov",name:"\u7701\u4efd",width:150},{code:"confirmed",name:"\u786e\u8bca",width:100,align:"right"},{code:"cured",name:"\u6cbb\u6108",width:100,align:"right"},{code:"dead",name:"\u6b7b\u4ea1",width:100,align:"right"},{code:"t",name:"\u6700\u540e\u66f4\u65b0\u65f6\u95f4",width:180}],b={rightToc:h,dataSource:p,columns:u};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"(todo \u9700\u8981\u4e00\u4e9b\u66f4\u52a0\u590d\u6742\u7684\u793a\u4f8b)"),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"\u76ee\u524d\u6587\u6863\u7f51\u7ad9\u4e2d\u7684\u4e3b\u9898\u5207\u6362\u8fd8\u4e0d\u652f\u6301\u6697\u8272\u6a21\u5f0f"))),Object(n.b)("h3",{id:"\u9ed8\u8ba4\u8868\u683c\u4e3b\u9898"},"\u9ed8\u8ba4\u8868\u683c\u4e3b\u9898"),Object(n.b)(l.a,{dataSource:p,columns:u,mdxType:"BaseTable"}),Object(n.b)("h3",{id:"ant-design"},"Ant Design"),Object(n.b)(i.a,{dataSource:p,columns:u,mdxType:"AntdBaseTable"}),Object(n.b)("h3",{id:"hippo-design"},"Hippo Design"),Object(n.b)(c.a,{dataSource:p,columns:u,mdxType:"HippoBaseTable"}))}f.isMDXComponent=!0}}]);