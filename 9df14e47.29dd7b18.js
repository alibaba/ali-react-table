(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return C})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return R})),n.d(t,"default",(function(){return L}));var a={};n.r(a),n.d(a,"default",(function(){return v})),n.d(a,"\u7b80\u6613\u900f\u89c6\u8868",(function(){return E}));var r=n(2),o=n(6),l=n(0),s=n.n(l),i=n(146),c=n(327),d=n(393),u=n(340),h=n(357),p=n(185),f=n(176),m=n(378),b=n(181),g=n(428),v={title:"\u5176\u4ed6 / \u7b80\u6613\u900f\u89c6\u8868"};const y=[{code:"planet",name:"\u5b50\u516c\u53f8",width:150},{code:"area",name:"\u95e8\u5e97",width:150},{code:"season",name:"\u5b63\u5ea6"},{code:"month",name:"\u6708\u4efd"},{code:"one",name:"\u4e00\u7ea7\u7c7b\u76ee"},{code:"two",name:"\u4e8c\u7ea7\u7c7b\u76ee"},{code:"three",name:"\u4e09\u7ea7\u7c7b\u76ee"}],k=new Map(y.map((e=>[e.code,e]))),w=[{code:"a",name:"\u6307\u6807A",width:100,align:"right",expression:"SUM(a)",render:f.amount},{code:"b",name:"\u6307\u6807B",width:100,align:"right",expression:"SUM(b)",render:f.amount},{code:"c",name:"\u6307\u6807C",hidden:!0,render:f.amount,expression:"SUM(c)"},{code:"lfl",name:"\u73af\u6bd4\u6307\u6807",expression:"(b - c) / c",width:100,align:"right",render:f.lfl},{code:"d",name:"\u6307\u6807D",expression:"SUM(d)",render:f.amount,width:120,align:"right"},{code:"rate",name:"\u5360\u6bd4\u6307\u6807",expression:"d / b",render:f.ratio,width:120,align:"right"}],j=w.filter((e=>!e.hidden));function x(e){return{position:"start",value:0===e.path.length?"\u603b\u8ba1":"\u5c0f\u8ba1"}}function E(){const[{data:e,isLoading:t},n]=Object(l.useState)({isLoading:!0,data:[]});Object(l.useEffect)((()=>{Object(p.getIncomeData)().then((e=>n({data:e,isLoading:!1})))}),[]);const[a,r]=Object(l.useState)("top"),[o,i]=Object(l.useState)(["planet","area","one"]),[f,v]=Object(l.useState)(["season","month"]),[E,S]=Object(l.useState)(!0),[C,O]=Object(l.useState)(!1),[R,M]=Object(l.useState)([]),L=new Set(R),T=Object(c.b)(e,o,{includeTopWrapper:!0,isExpand:C?e=>L.has(e):void 0}),[z]=Object(d.a)(T,{indicators:"left"===a?j:null,generateSubtotalNode:E?x:null,supportsExpand:C,expandKeys:R,onChangeExpandKeys:M}),[N,I]=Object(l.useState)([]),B=new Set(N),H=Object(c.b)(e,f,{includeTopWrapper:!0,isExpand:C?e=>B.has(e):void 0}),[W]=Object(d.a)(H,{indicators:"top"===a?j:null,generateSubtotalNode:E?x:null,supportsExpand:C,expandKeys:N,onChangeExpandKeys:I}),P=Object(g.a)(w),V=Object(u.c)({data:e,leftCodes:o,topCodes:f,aggregate:P,prebuiltLeftTree:T,prebuiltTopTree:H});return s.a.createElement("div",null,s.a.createElement(m.a,{showSupportsExpandToggle:!0,supportsExpand:C,onChangeSupportsExpand:O,showSubtotal:E,onChangeShowSubtotal:S,dimensions:y,leftCodes:o,onChangeLeftCodes:i,topCodes:f,onChangeTopCodes:v,indicatorSide:a,onChangeIndicatorSide:r}),s.a.createElement(h.b,{className:"bordered",BaseTableComponent:b.a,isLoading:t,defaultColumnWidth:100,useVirtual:!0,leftMetaColumns:o.map((e=>k.get(e))),leftTree:z.children,leftTotalNode:z,topTree:W.children,topTotalNode:W,getValue:(e,t)=>{var n,a,r;const o=V.get(e.data.dataKey).get(t.data.dataKey);if(null==o)return"-";return o[(null!==(n=null===(a=e.data)||void 0===a?void 0:a.indicator)&&void 0!==n?n:null===(r=t.data)||void 0===r?void 0:r.indicator).code]},render:(e,t,n)=>{var a,r,o,l,s;const i=null!==(a=null===(r=t.data)||void 0===r||null===(o=r.indicator)||void 0===o?void 0:o.render)&&void 0!==a?a:null===(l=n.data)||void 0===l||null===(s=l.indicator)||void 0===s?void 0:s.render;return i?i(e):e}}))}var S=n(354),C={id:"simple-pivot-table",title:"\u7b80\u6613\u900f\u89c6\u8868",hide_table_of_contents:!0,hide_title:!0},O={unversionedId:"others/simple-pivot-table",id:"others/simple-pivot-table",isDocsHomePage:!1,title:"\u7b80\u6613\u900f\u89c6\u8868",source:"@site/examples/others/simple-pivot-table.mdx",slug:"/others/simple-pivot-table",permalink:"/examples/others/simple-pivot-table",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/examples/others/simple-pivot-table.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u652f\u6301\u4e0b\u94bb\u7684\u6811\u72b6\u8868\u683c",permalink:"/examples/others/drill-tree-table"}},R=[],M={rightToc:R};function L(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},M,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(S.a,{stories:a,path:"others/simple-pivot-table.stories.tsx",mdxType:"Stories"}))}L.isMDXComponent=!0},144:function(e,t,n){"use strict";function a(e,t,n){return e.getValue?e.getValue(t,n):t[e.code]}n.d(t,"a",(function(){return r}));const r={safeRenderHeader:function(e){var t;return null!==(t=e.title)&&void 0!==t?t:e.name},safeGetValue:a,safeGetRowKey:function(e,t,n){let a;return"string"==typeof e?a=t[e]:"function"==typeof e&&(a=e(t)),null==a&&(a=String(n)),a},safeGetCellProps:function(e,t,n){if(e.getCellProps){const r=a(e,t,n);return e.getCellProps(r,t,n)||{}}return{}},safeRender:function(e,t,n){const r=a(e,t,n);return e.render?e.render(r,t,n):r}}},147:function(e,t,n){"use strict";function a(e){return null==e.children||0===e.children.length}n.d(t,"a",(function(){return a}))},148:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u}));var a=n(141);const r=20,o={artTableWrapper:"art-table-wrapper",artTable:"art-table",tableHeader:"art-table-header",tableBody:"art-table-body",tableRow:"art-table-row",tableHeaderRow:"art-table-header-row",tableCell:"art-table-cell",tableHeaderCell:"art-table-header-cell",virtualBlank:"art-virtual-blank",stickyScroll:"art-sticky-scroll",stickyScrollItem:"art-sticky-scroll-item",lockShadowMask:"art-lock-shadow-mask",lockShadow:"art-lock-shadow",leftLockShadow:"art-left-lock-shadow",rightLockShadow:"art-right-lock-shadow",emptyWrapper:"art-empty-wrapper",loadingWrapper:"art-loading-wrapper",loadingIndicatorWrapper:"art-loading-indicator-wrapper",loadingIndicator:"art-loading-indicator"},l=5,s=10,i=20,c=30,d=40,u=a.b.div`
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

  .${o.tableHeader} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--header-bgcolor);
  }

  .${o.tableBody} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--bgcolor);
  }

  &.sticky .${o.tableHeader} {
    position: sticky;
    top: 0;
    z-index: ${s};
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
  .${o.lockShadowMask} {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: ${i};
    pointer-events: none;
    overflow: hidden;

    .${o.lockShadow} {
      height: 100%;
    }

    .${o.leftLockShadow} {
      margin-right: ${r}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-right: var(--cell-border-vertical);
      }
    }

    .${o.rightLockShadow} {
      margin-left: ${r}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-left: var(--cell-border-vertical);
      }
    }
  }
  //#endregion

  //#region 空表格展现
  .${o.emptyWrapper} {
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
  .${o.stickyScroll} {
    overflow: auto;
    position: sticky;
    bottom: 0;
    z-index: ${c};
    margin-top: -17px;
  }

  .${o.stickyScrollItem} {
    // 必须有高度才能出现滚动条
    height: 1px;
    visibility: hidden;
  }
  //#endregion

  //#region 加载样式
  .${o.loadingWrapper} {
    position: relative;

    .${o.loadingIndicatorWrapper} {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
    }

    .${o.loadingIndicator} {
      position: sticky;
      z-index: ${d};
      transform: translateY(-50%);
    }
  }
  //#endregion
`},150:function(e,t,n){"use strict";function a(e,t){const n=[];return e.forEach(((a,r)=>{n.push(...t(a,r,e))})),n}function r(e){const t={};for(const[n,a]of e)t[n]=a;return t}n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));const o={diff(e,t){const n=new Set(t);return e.filter((e=>!n.has(e)))},merge(e,t){const n=new Set(e);return e.concat(t.filter((e=>!n.has(e))))}};function l(e){return(...t)=>e}},155:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var a=n(0),r=n.n(a),o=n(141);const l=o.b.div`
  display: inline-flex;
  align-items: center;
`,s=Object(o.b)(l)`
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
`;const i={Loading:function(e){return r.a.createElement("svg",Object.assign({width:"16",height:"16",fill:"currentColor",viewBox:"0 0 1024 1024"},e),r.a.createElement("path",{d:"M512 74.667c-17.067 0-32 14.933-32 32V256c0 17.067 14.933 32 32 32s32-14.933 32-32V106.667c0-17.067-14.933-32-32-32zm181.333 288c8.534 0 17.067-2.134 23.467-8.534L821.333 249.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L672 309.333c-12.8 12.8-12.8 32 0 44.8 4.267 6.4 12.8 8.534 21.333 8.534zm224 117.333H768c-17.067 0-32 14.933-32 32s14.933 32 32 32h149.333c17.067 0 32-14.933 32-32s-14.933-32-32-32zM714.667 669.867c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8L774.4 819.2c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L714.667 669.867zM512 736c-17.067 0-32 14.933-32 32v149.333c0 17.067 14.933 32 32 32s32-14.933 32-32V768c0-17.067-14.933-32-32-32zm-202.667-66.133L204.8 774.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l104.534-104.533c12.8-12.8 12.8-32 0-44.8s-36.267-12.8-46.934 0zM288 512c0-17.067-14.933-32-32-32H106.667c-17.067 0-32 14.933-32 32s14.933 32 32 32H256c17.067 0 32-14.933 32-32zm-40.533-309.333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L307.2 352c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L247.467 202.667z"}))},CaretDown:function(e){return r.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),r.a.createElement("path",{d:"M24 12L16 22 8 12z"}))},CaretRight:function(e){return r.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),r.a.createElement("path",{d:"M12 8L22 16 12 24z"}))},Info:function(e){return r.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 16 16"},e),r.a.createElement("path",{d:"M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"}),r.a.createElement("path",{d:"M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"}))}}},170:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(0),r=n.n(a),o=n(148);const l=r.a.memo((()=>r.a.createElement("svg",{style:{margin:"auto",display:"block",width:40,height:40},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},r.a.createElement("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#23a7fa",strokeDasharray:"188 64",strokeLinecap:"round",strokeWidth:"10"},r.a.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})))));function s({children:e,visible:t}){return r.a.createElement("div",{className:"art-loading-content-wrapper",style:{filter:t?"blur(1px)":"none"}},e)}function i({visible:e,children:t,LoadingContentWrapper:n=s,LoadingIcon:a=l}){return r.a.createElement("div",{className:o.b.loadingWrapper},e&&r.a.createElement("div",{className:o.b.loadingIndicatorWrapper},r.a.createElement("div",{className:o.b.loadingIndicator},r.a.createElement(a,null))),r.a.createElement(n,{visible:e,children:t}))}},175:function(e,t,n){"use strict";function a(e){return 0===e.length?"key:@total@":"key:"+e.join(" ")}n.d(t,"a",(function(){return a}))},176:function(e,t,n){"use strict";n.r(t),n.d(t,"plain",(function(){return c})),n.d(t,"amount0",(function(){return d})),n.d(t,"amount",(function(){return u})),n.d(t,"time",(function(){return h})),n.d(t,"amount1",(function(){return p})),n.d(t,"amount2",(function(){return f})),n.d(t,"ratio",(function(){return m})),n.d(t,"lfl",(function(){return v})),n.d(t,"money",(function(){return y}));var a=n(391),r=n.n(a),o=n(137),l=n.n(o),s=n(0),i=n.n(s);const c=e=>"-"===e||null==e?"-":String(e),d=e=>"-"===e||null==e?"-":r()(e).format("0,0"),u=d;function h(e){return l()(e,"YYYY-MM-DD HH:mm:ss.sss").format("YYYY\u5e74MM\u6708DD\u65e5 HH:mm:ss")}const p=e=>"-"===e||null==e?"-":r()(e).format("0,0.0"),f=e=>"-"===e||null==e?"-":r()(e).format("0,0.00"),m=e=>"-"===e||null==e?"-":r()(e).format("0.00%"),b=Object(s.memo)((({size:e=12,style:t})=>i.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},i.a.createElement("path",{d:"M682.667 512v426.667H341.333V512h-256L512 0l426.667 512h-256z"})))),g=Object(s.memo)((({size:e=12,style:t})=>i.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},i.a.createElement("path",{d:"M682.667 426.667V0H341.333v426.667h-256l426.667 512 426.667-512h-256z"})))),v=e=>{return null==e||"-"===e||isNaN(e)||e===1/0||e===-1/0?t("-"):t((e=Number(e))>0?i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{style:{color:"#f4485c"}},r()(e).format("0.00%")),i.a.createElement(b,{style:{marginLeft:4,color:"#f4485c"}})):e<0?i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{style:{color:"#00a854"}},r()(e).format("0.00%")),i.a.createElement(g,{style:{marginLeft:4,color:"#00a854"}})):i.a.createElement("span",{style:{color:"#838383"}},"0"));function t(e){return i.a.createElement("div",{className:"lfl-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"flex-end"}},e)}},y=e=>"-"===e||null==e?"-":(e=Number(e))<0?"-"+y(-e):0===e?String(e):e<1e4?r()(e).format("0,0"):e<1e5?r()(e/1e4).format("0.0")+"\u4e07":e<1e8?r()(e/1e4).format("0")+"\u4e07":e<1e9?r()(e/1e8).format("0.0")+"\u4ebf":r()(e/1e8).format("0")+"\u4ebf"},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));class a{constructor(){Object.defineProperty(this,"rects",{enumerable:!0,configurable:!0,writable:!0,value:[]})}testSkip(e,t){return this.rects.some((({left:n,right:a,top:r,bottom:o})=>n<=t&&t<a&&r<=e&&e<o))}stripUpwards(e){this.rects=this.rects.filter((t=>t.bottom>e))}add(e,t,n,a){this.rects.push({left:t,right:t+n,top:e,bottom:e+a})}}},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(172),r=n(182),o=n(0),l=n.n(o),s=n(141);const i=Object(s.b)(r.a)`
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
`,c=l.a.forwardRef(((e,t)=>{const{isDarkTheme:n}=Object(a.a)(),o=n?i:r.a;return l.a.createElement(o,Object.assign({ref:t},e))}))},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return ae}));var a=n(131),r=n.n(a),o=n(0),l=n.n(o),s=n(463),i=n(721),c=n(715),d=n(726),u=n(723),h=n(722),p=n(718),f=n(548),m=n(714),b=n(716),g=n(717),v=n(144),y=n(148);const k=l.a.memo((()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{alt:"empty-image",className:"empty-image",src:"//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"}),l.a.createElement("div",{className:"empty-tips"},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",l.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2"))));function w({colgroup:e,colSpan:t,isLoading:n,emptyCellHeight:a,EmptyContent:o=k}){const s=!n;return l.a.createElement("table",null,e,l.a.createElement("tbody",null,l.a.createElement("tr",{className:r()(y.b.tableRow,"first","last","no-hover"),"data-rowindex":0},l.a.createElement("td",{className:r()(y.b.tableCell,"first","last"),colSpan:t,style:{height:null!=a?a:200}},s&&l.a.createElement("div",{className:y.b.emptyWrapper},l.a.createElement(o,null))))))}var j=n(147),x=n(322),E=n(725),S=n(713),C=n(582),O=n(727);const R="v3"===(null!=n(141).a?"v5":"v3")?"innerRef":"ref",M=100;function L(e){let t=0;return e.forEach((e=>{t+=e})),t}const T=Object(E.a)((()=>Object(S.a)(window,"resize").pipe(Object(O.a)(150,C.b,{leading:!0,trailing:!0}))));function z(){const e=document.createElement("div");e.style.position="absolute",e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.top="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{width:t,height:n}}let N;function I(e,t){return null==e?void 0:e.querySelector("."+t)}function B(e,t){const n=Object.prototype.hasOwnProperty;if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(let o=0;o<a.length;o++)if(!n.call(t,a[o])||!Object.is(e[a[o]],t[a[o]]))return!1;return!0}function H(e,t){return null==e||"auto"===e?t:e}let W=!1;function P(e){W||(W=!0,console.warn("[ali-react-table] column.hidden \u5df2\u7ecf\u8fc7\u65f6\uff0c\u5982\u679c\u9700\u8981\u9690\u85cf\u8be5\u5217\uff0c\u8bf7\u5c06\u5176\u4ece columns \u6570\u7ec4\u4e2d\u79fb\u9664",e))}function V(e){let t=0;for(const a of e){if(!n(a))break;t+=1}return t;function n(e){return Object(j.a)(e)?e.lock:e.lock||e.children.some(n)}}function $(e,t){const{useVirtual:n,columns:a,dataSource:r,defaultColumnWidth:o}=e,l=function(e,t){return null!=e&&Array.isArray(e)||(console.warn("[ali-react-table] <BaseTable /> props.columns \u9700\u8981\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4",e),e=[]),function e(n){const a=[];for(let r of n)if(null==r.width&&null!=t&&(r={...r,width:t}),Object(j.a)(r))r.hidden?P(r):a.push(r);else{const t=e(r.children);t.length>0&&a.push({...r,children:t})}return a}(e)}(a,o),s=V(l),i=Object(x.a)(l,"leaf-only");if(s===l.length)return{flat:{left:[],right:[],full:i,center:i},nested:{left:[],right:[],full:l,center:l},useVirtual:{horizontal:!1,vertical:!1,header:!1},stickyLeftMap:new Map,stickyRightMap:new Map};const c=l.slice(0,s),d=V(l.slice().reverse()),u=l.slice(s,l.length-d),h=l.slice(l.length-d),p=i.length>=100&&i.every((e=>null!=e.width)),f=r.length>=100,m="object"!=typeof n?{horizontal:H(n,p),vertical:H(n,f),header:H(n,!1)}:{horizontal:H(n.horizontal,p),vertical:H(n.vertical,f),header:H(n.header,f)},b={left:Object(x.a)(c,"leaf-only"),full:i,right:Object(x.a)(h,"leaf-only"),center:Object(x.a)(u,"leaf-only")},g=b.full.length,v=b.left.length,y=b.right.length,k=new Map;let w=0;for(let j=0;j<v;j++)k.set(j,w),w+=b.full[j].width;const E=new Map;let S=0;for(let j=0;j<y;j++)E.set(g-1-j,S),S+=b.full[g-1-j].width;return{flat:b,nested:{left:c,full:l,right:h,center:u},useVirtual:m,stickyLeftMap:k,stickyRightMap:E}}var D=n(323);function Y(e){const t=[];for(let n=0;n<e;n++)t.push(n);return t}function K(e,t){const n=[];for(let r=0;r<t;r++)n.push([]);const a=[];return function e(t,r){let o=0;for(let l=0;l<t.length;l++){const s=t[l];if(Object(j.a)(s)){o+=1;const e={type:"normal",width:s.col.width,col:s.col,colIndex:s.colIndex,colSpan:1,isLeaf:!0};n[r].push(e),a.push(e)}else{const t=e(s.children,r+1);o+=t.leafCount,t.leafCount>0&&n[r].push({type:"normal",width:s.col.width,col:s.col,colIndex:s.colIndex,colSpan:t.leafCount,isLeaf:!1})}}return{leafCount:o}}(e,0),{flat:a,leveled:n}}function U(e,t){return function e(t,n){const a=[];let r=0;for(let o=0;o<t.length;o++){const l=t[o],s=n+r;if(Object(j.a)(l))r+=1,a.push({colIndex:s,col:l});else{const t=e(l.children,s);r+=t.leafCount,t.leafCount>0&&a.push({col:l,colIndex:s,children:t.result})}}return{result:a,leafCount:r}}(e,t).result}function A({flat:e,nested:t,hoz:n,useVirtual:a},r){if(a.header){const a=K(U(t.left,0),r),o=K(function(e,t,n){return function e(a,r){let o=0;const l=[];for(const s of a){const a=r+o;if(Object(j.a)(s))o+=1,n+t.leftIndex<=a&&a<n+t.rightIndex&&l.push({colIndex:a,col:s});else{const t=e(s.children,a);o+=t.leafCount,t.filtered.length>0&&l.push({colIndex:a,col:s,children:t.filtered})}}return{filtered:l,leafCount:o}}(e,n).filtered}(t.center,n,e.left.length),r),l=K(U(t.right,e.left.length+e.center.length),r);return{flat:[...a.flat,{type:"blank",width:n.leftBlank,blankSide:"left"},...o.flat,{type:"blank",width:n.rightBlank,blankSide:"right"},...l.flat],leveled:Y(r).map((e=>[...a.leveled[e],{type:"blank",width:n.leftBlank,blankSide:"left"},...o.leveled[e],{type:"blank",width:n.rightBlank,blankSide:"right"},...l.leveled[e]]))}}return K(U(t.full,0),r)}function F(e){const{nested:t,flat:n,stickyLeftMap:a,stickyRightMap:o}=e,s=Object(D.a)(t.full)+1,i=A(e,s),c=n.full.length,d=n.left.length,u=n.right.length,h=i.leveled.map(((e,t)=>{const n=e.map((e=>{if("normal"===e.type){var n,i;const{colIndex:h,colSpan:p,isLeaf:f,col:m}=e,b=null!==(n=m.headerCellProps)&&void 0!==n?n:{},g={};return h<d?(g.position="sticky",g.left=a.get(h)):h>=c-u&&(g.position="sticky",g.right=o.get(h)),l.a.createElement("th",Object.assign({key:h},b,{className:r()(y.b.tableHeaderCell,b.className,{first:0===h,last:h+p===c,"lock-left":h<d,"lock-right":h>=c-u}),colSpan:p,rowSpan:f?s-t:void 0,style:{textAlign:m.align,...b.style,...g}}),null!==(i=m.title)&&void 0!==i?i:m.name)}return e.width>0?l.a.createElement("th",{key:e.blankSide}):null}));return l.a.createElement("tr",{key:t,className:r()(y.b.tableHeaderRow,{first:0===t,last:t===s-1})},n)}));return l.a.createElement("table",null,l.a.createElement("colgroup",null,i.flat.map((e=>"blank"===e.type?e.width>0?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):null:l.a.createElement("col",{key:e.colIndex,style:{width:e.width}})))),l.a.createElement("thead",null,h))}function X(e,t){const n=new Array(e).fill(t);return{getRenderRange:function(e,a,r){return n.length!==r&&function(e){if(e<n.length)n.length=e;else{const a=n.length;n.length=e,n.fill(t,a)}}(r),a<=0?e<=0?function(){const e={topIndex:0,topBlank:0},t=l(0,e);return{...e,...t}}():function(){const e=s(r),t=o(e),n=l(e,t);return{...t,...n}}():function(){const t=o(e),n=l(e+a,t);return{...t,...n}}();function o(e){if(0===n.length)return{topIndex:0,topBlank:0};let t=0,a=0;for(;t<n.length;){const r=n[t];if(a+r>=e)break;a+=r,t+=1}return function(e,t){let a=0,r=0;for(;r<e&&a<M;)r+=1,a+=n[e-r];return{topIndex:e-r,topBlank:t-a}}(t,a)}function l(e,t){let a=t.topIndex,o=t.topBlank;for(;a<r&&o<e;)o+=n[a],a+=1;return function(e,t){let a=0,o=0;for(;o<r-e&&a<M;)a+=n[e+o],o+=1;return{bottomIndex:e+o,bottomBlank:t-a}}(a,s(r)-o)}function s(e){return L(n)+(e-n.length)*t}},updateRow:function(e,t,a){n[e]=a},cache:n}}var G=n(177),q=n(365),_=n(373),J=n(724);function Z(e){return e===window?{left:0,top:0,bottom:window.innerHeight,right:window.innerWidth}:e.getBoundingClientRect()}function Q(e){return e===window?Object(S.a)(e,"resize"):new _.a((t=>{const n=new q.a((()=>{t.next()}));return n.observe(e),()=>{n.disconnect()}}))}function ee(e,t){return Object(J.a)(Object(S.a)(t,"scroll"),Q(t),Q(e)).pipe(f.a((()=>function(e,t){const n=Z(e),a=Z(t);return{offsetY:Math.max(0,a.top-n.top),offsetX:Math.max(0,a.left-n.left),clipRect:{left:Math.max(n.left,a.left),top:Math.max(n.top,a.top),right:Math.min(n.right,a.right),bottom:Math.min(n.bottom,a.bottom)}}}(e,t))))}var te=n(170);let ne=!1;class ae extends l.a.Component{constructor(e){super(e),Object.defineProperty(this,"rowHeightManager",{enumerable:!0,configurable:!0,writable:!0,value:X(this.props.dataSource.length,this.props.estimatedRowHeight)}),Object.defineProperty(this,"artTableWrapperRef",{enumerable:!0,configurable:!0,writable:!0,value:l.a.createRef()}),Object.defineProperty(this,"doms",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rootSubscription",{enumerable:!0,configurable:!0,writable:!0,value:new s.a}),Object.defineProperty(this,"data$",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.state={...$(e),hasScroll:!0,needRenderLock:!0,offsetY:0,offsetX:0,maxRenderHeight:600,maxRenderWidth:800}}getDoms(){return this.doms}updateStickyScroll(){const{stickyScroll:e,artTable:t,stickyScrollItem:n}=this.doms;if(!t)return;const a=t.querySelector(`.${y.b.tableBody} table`).offsetWidth,r=t.offsetWidth,o=(null==N&&(N=new i.a(z()),T.pipe(Object(f.a)((()=>z()))).subscribe(N)),N.value);e.style.marginTop=`-${o.height}px`,r>=a?this.state.hasScroll&&this.setState({hasScroll:!1}):!this.state.hasScroll&&o.height>5&&this.setState({hasScroll:!0}),n.style.width=a+"px"}renderTableHeader({horizontal:e}){const{stickyTop:t,hasHeader:n}=this.props,{flat:a,nested:o,useVirtual:s,stickyLeftMap:i,stickyRightMap:c}=this.state;return l.a.createElement("div",{className:r()(y.b.tableHeader,"no-scrollbar"),style:{top:0===t?void 0:t,display:n?void 0:"none"}},l.a.createElement(F,{nested:o,flat:a,hoz:e,useVirtual:s,stickyLeftMap:i,stickyRightMap:c}))}updateOffsetX(e){this.state.useVirtual.horizontal&&Math.abs(e-this.state.offsetX)>=50&&this.setState({offsetX:e})}syncHorizontalScrollFromTableBody(){this.syncHorizontalScroll(this.doms.tableBody.scrollLeft)}syncHorizontalScroll(e){this.updateOffsetX(e);const{tableBody:t,artTableWrapper:n}=this.doms,{flat:a}=this.state,r=a.left.length>0&&this.state.needRenderLock&&e>0,o=I(n,y.b.leftLockShadow);r?o.classList.add("show-shadow"):o.classList.remove("show-shadow");const l=a.right.length>0&&this.state.needRenderLock&&e<t.scrollWidth-t.clientWidth,s=I(n,y.b.rightLockShadow);l?s.classList.add("show-shadow"):s.classList.remove("show-shadow")}getVerticalRenderRange(){const{dataSource:e}=this.props,{useVirtual:t,offsetY:n,maxRenderHeight:a}=this.state,r=e.length;return t.vertical?this.rowHeightManager.getRenderRange(n,a,r):function(e){return{topIndex:0,topBlank:0,bottomIndex:e,bottomBlank:0}}(r)}getHorizontalRenderRange(){const{offsetX:e,maxRenderWidth:t,useVirtual:n,flat:a}=this.state;if(!n.horizontal)return{leftIndex:0,leftBlank:0,rightIndex:a.full.length,rightBlank:0};let r=0,o=0,l=0,s=0;const i=Math.max(0,e-M);for(;r<a.center.length;){const e=a.center[r];if(!(e.width+l<i))break;r+=1,l+=e.width}const c=t+(i-l)+200;for(;r+o<a.center.length;){const e=a.center[r+o];if(!(e.width+s<c))break;s+=e.width,o+=1}const d=a.center.length-r-o;return{leftIndex:r,leftBlank:l,rightIndex:r+o,rightBlank:L(a.center.slice(a.center.length-d).map((e=>e.width)))}}getRenderRange(){return{vertical:this.getVerticalRenderRange(),horizontal:this.getHorizontalRenderRange()}}getFlatHozWrappedCols(e){const{flat:t}=this.state;return[...t.left.map(((e,t)=>({type:"normal",col:e,colIndex:t}))),e.leftBlank>0&&{type:"blank",blankSide:"left",width:e.leftBlank},...t.center.slice(e.leftIndex,e.rightIndex).map(((n,a)=>({type:"normal",col:n,colIndex:t.left.length+e.leftIndex+a}))),e.rightBlank>0&&{type:"blank",blankSide:"right",width:e.rightBlank},...t.right.map(((e,n)=>({type:"normal",col:e,colIndex:t.full.length-t.right.length+n})))].filter(Boolean)}renderTableBody(e){const{vertical:t,horizontal:n}=e,{dataSource:a,getRowProps:o,primaryKey:s,isLoading:i,emptyCellHeight:c}=this.props,d=this.getFlatHozWrappedCols(n),u=l.a.createElement("colgroup",null,d.map((e=>"blank"===e.type?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):l.a.createElement("col",{key:e.colIndex,style:{width:e.col.width}}))));if(t.bottomIndex-t.topIndex==0){const{components:e,emptyContent:t}=this.props;let n=e.EmptyContent;return null==n&&null!=t&&(ne||(ne=!0,console.warn("[ali-react-table] BaseTable props.emptyContent \u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u4f7f\u7528 props.components.EmptyContent \u6765\u81ea\u5b9a\u4e49\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u8868\u683c\u8868\u73b0")),n=()=>t),l.a.createElement("div",{className:y.b.tableBody},l.a.createElement(w,{colgroup:u,colSpan:d.length,isLoading:i,EmptyContent:n,emptyCellHeight:c}))}const{flat:h,stickyLeftMap:p,stickyRightMap:f}=this.state,m=h.full.length,b=h.left.length,g=h.right.length,k=new G.a,j=a.slice(t.topIndex,t.bottomIndex).map((function(e,i){const c=t.topIndex+i;k.stripUpwards(c);const u=o(e,c),h=r()(y.b.tableRow,{first:0===c,last:c===a.length-1,even:c%2==0,odd:c%2==1},null==u?void 0:u.className);return l.a.createElement("tr",Object.assign({},u,{className:h,key:v.a.safeGetRowKey(s,e,c),"data-rowindex":c}),d.map((a=>"blank"===a.type?l.a.createElement("td",{key:a.blankSide}):function(e,a,o,s){var i,c;if(k.testSkip(a,s))return null;const d=v.a.safeGetValue(o,e,a),u=null!==(i=null===(c=o.getCellProps)||void 0===c?void 0:c.call(o,d,e,a))&&void 0!==i?i:{};let h=d;o.render&&(h=o.render(d,e,a));let w=1,j=1;if(o.getSpanRect){const t=o.getSpanRect(d,e,a);w=null==t?1:t.right-s,j=null==t?1:t.bottom-a}else null!=u.colSpan&&(w=u.colSpan),null!=u.rowSpan&&(j=u.rowSpan);j=Math.min(j,t.bottomIndex-a),w=Math.min(w,b+n.rightIndex-s);const x=w>1||j>1;x&&k.add(a,s,w,j);const E={};s<b?(E.position="sticky",E.left=p.get(s)):s>=m-g&&(E.position="sticky",E.right=f.get(s));return l.a.createElement("td",{key:s,...u,className:r()(y.b.tableCell,u.className,{first:0===s,last:s+w===m,"lock-left":s<b,"lock-right":s>=m-g}),...x?{colSpan:w,rowSpan:j}:null,style:{textAlign:o.align,...u.style,...E}},h)}(e,c,a.col,a.colIndex))))}));return l.a.createElement("div",{className:y.b.tableBody},l.a.createElement("div",{key:"top-blank",className:r()(y.b.virtualBlank,"top"),style:{height:t.topBlank}}),l.a.createElement("table",null,u,l.a.createElement("tbody",null,j)),l.a.createElement("div",{key:"bottom-blank",className:r()(y.b.virtualBlank,"bottom"),style:{height:t.bottomBlank}}))}isLock(){const{nested:e}=this.state;return e.left.length>0||e.right.length>0}render(){const{dataSource:e,className:t,style:n,hasHeader:a,useOuterBorder:o,isStickyHead:s,isLoading:i,components:c}=this.props,{flat:d}=this.state,u=this.getRenderRange();return(i=>{const c={className:r()(y.b.artTableWrapper,{"use-outer-border":o,sticky:s,empty:0===e.length,lock:this.isLock(),"has-header":a},t),style:n,[R]:this.artTableWrapperRef};return l.a.createElement(y.d,Object.assign({},c),i)})(l.a.createElement(te.b,{visible:i,LoadingIcon:c.LoadingIcon,LoadingContentWrapper:c.LoadingContentWrapper},l.a.createElement("div",{className:y.b.artTable},this.renderTableHeader(u),this.renderTableBody(u),l.a.createElement("div",{className:y.b.lockShadowMask,style:{left:0,width:L(d.left.map((e=>e.width)))+y.c}},l.a.createElement("div",{className:r()(y.b.lockShadow,y.b.leftLockShadow)})),l.a.createElement("div",{className:y.b.lockShadowMask,style:{right:0,width:L(d.right.map((e=>e.width)))+y.c}},l.a.createElement("div",{className:r()(y.b.lockShadow,y.b.rightLockShadow)}))),l.a.createElement("div",{className:y.b.stickyScroll,style:{display:this.state.hasScroll?"block":"none",bottom:this.props.stickyBottom}},l.a.createElement("div",{className:y.b.stickyScrollItem}))))}componentDidMount(){this.updateDoms(),this.data$=new i.a({props:this.props,state:this.state,prevProps:null,prevState:null}),this.initSubscriptions(),this.didMountOrUpdate()}componentDidUpdate(e,t){this.updateDoms(),this.data$.next({props:this.props,state:this.state,prevProps:e,prevState:t}),this.didMountOrUpdate(e,t)}didMountOrUpdate(e,t){this.syncHorizontalScrollFromTableBody(),this.updateStickyScroll(),this.adjustNeedRenderLock(),this.updateRowHeightManager(e),this.resetStickyScrollIfNecessary(t)}resetStickyScrollIfNecessary(e){null!=e&&this.state.hasScroll&&!e.hasScroll&&(this.doms.stickyScroll.scrollLeft=0)}initSubscriptions(){const{tableHeader:e,tableBody:t,stickyScroll:n}=this.doms;this.rootSubscription.add(T.subscribe((()=>{this.updateStickyScroll(),this.adjustNeedRenderLock()}))),this.rootSubscription.add(function(e,t){const n=new Set;function a(t,a){n.clear();for(const r of e)r!==t&&(r.scrollLeft=a,n.add(r))}const r=new s.a;for(const o of e){const e=()=>{if(n.has(o))return void n.delete(o);const e=o.scrollLeft;a(o,e),t(e)};o.addEventListener("scroll",e,{passive:!0}),r.add((()=>o.removeEventListener("scroll",e)))}return r}([t,n,e],(e=>{this.syncHorizontalScroll(e)})));const a=this.data$.pipe(f.a((e=>e.props.flowRoot)),m.a((e=>{const t=this.artTableWrapperRef.current;if("auto"===e){const e=getComputedStyle(t);return Object(c.a)("visible"!==e.overflowY?t:window)}return"self"===e?Object(c.a)(t):"function"==typeof e?Object(d.a)(0,u.a).pipe(f.a(e)):Object(c.a)(e)})),b.a()).pipe(m.a((e=>ee(this.doms.artTable,e))));this.rootSubscription.add(Object(h.a)([a.pipe(f.a((e=>e.clipRect)),b.a(B)),this.data$.pipe(g.a((e=>{var t;return!(null===(t=e.prevProps)||void 0===t?void 0:t.isLoading)&&e.props.isLoading})))]).subscribe((([e])=>{const{artTableWrapper:t}=this.doms,n=I(t,y.b.loadingIndicator);if(!n)return;const a=e.bottom-e.top;n.style.top=a/2+"px",n.style.marginTop=a/2+"px"}))),this.rootSubscription.add(a.pipe(g.a((()=>{const{horizontal:e,vertical:t}=this.state.useVirtual;return e||t})),f.a((({clipRect:e,offsetY:t})=>({maxRenderHeight:e.bottom-e.top,maxRenderWidth:e.right-e.left,offsetY:t}))),b.a(((e,t)=>Math.abs(e.maxRenderWidth-t.maxRenderWidth)<50&&Math.abs(e.maxRenderHeight-t.maxRenderHeight)<50&&Math.abs(e.offsetY-t.offsetY)<50))).subscribe((e=>{this.setState(e)})))}componentWillUnmount(){this.rootSubscription.unsubscribe()}updateDoms(){const e=this.artTableWrapperRef.current,t=I(e,y.b.artTable);this.doms={artTableWrapper:e,artTable:t,tableHeader:I(t,y.b.tableHeader),tableBody:I(t,y.b.tableBody),stickyScroll:I(e,y.b.stickyScroll),stickyScrollItem:I(e,y.b.stickyScrollItem)}}updateRowHeightManager(e){var t;const n=this.doms.artTable.querySelector(`.${y.b.virtualBlank}.top`),a=null!==(t=null==n?void 0:n.clientHeight)&&void 0!==t?t:0;let r=-1,o=-1;for(const i of(l=this.doms.artTable,s=y.b.tableRow,null==l?void 0:l.querySelectorAll("."+s))){const e=Number(i.dataset.rowindex);if(isNaN(e))continue;r=Math.max(r,e);const t=i.offsetTop+a,n=i.offsetHeight;o=Math.max(o,t+n),this.rowHeightManager.updateRow(e,t,n)}var l,s;if(-1!==r&&o<this.state.offsetY+this.state.maxRenderHeight){this.getVerticalRenderRange().bottomIndex-1>r&&this.forceUpdate()}}adjustNeedRenderLock(){const{needRenderLock:e,flat:t}=this.state;if(this.isLock()){const n=L(t.full.map((e=>e.width)))>this.doms.artTable.clientWidth;e!==n&&this.setState({needRenderLock:n})}else e&&this.setState({needRenderLock:!1})}}Object.defineProperty(ae,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{isStickyHead:!0,stickyTop:0,stickyBottom:0,useVirtual:"auto",estimatedRowHeight:48,hasHeader:!0,isLoading:!1,components:{},getRowProps:p.a,flowRoot:"auto"}}),Object.defineProperty(ae,"getDerivedStateFromProps",{enumerable:!0,configurable:!0,writable:!0,value:$})},185:function(e,t,n){"use strict";n.r(t),n.d(t,"getAppTrafficData",(function(){return s})),n.d(t,"getIncomeData",(function(){return c})),n.d(t,"getNCoV2019Data",(function(){return u}));const a="https://gw.alipayobjects.com/os/bmw-prod/2eb02d0b-993f-4531-8424-a8df1899299e.json",r="https://gw.alipayobjects.com/os/bmw-prod/22986070-97e7-43a2-a3e4-200742c3d913.json",o="https://gw.alipayobjects.com/os/basement_prod/8e44b543-0764-411f-adfc-0dae716ef96a.csv";let l=null;function s(){return l||(l=fetch(a).then((e=>e.json()))),l}let i=null;function c(){return i||(i=fetch(r).then((e=>e.json()))),i}let d=null;function u(){return d||(d=fetch(o).then((e=>e.text())).then((e=>{const t=e.split("\n"),n=t[0],a=t.slice(1),r=n.split(","),o=[];for(const l of a){if(""===l)continue;const e=l.split(","),t={};r.forEach(((n,a)=>{t[n]=e[a]})),o.push(t)}return o}))),d}},322:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(147);function r(e,t="pre"){const n=[];return function e(r){if(null==r)return;for(const o of r)Object(a.a)(o)?n.push(o):"pre"===t?(n.push(o),e(o.children)):"post"===t?(e(o.children),n.push(o)):e(o.children)}(e),n}},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(147);function r(e){let t=-1;return function e(n,r){for(const o of n)Object(a.a)(o)?t=Math.max(t,r):e(o.children,r+1)}(e,0),t}},327:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var a=n(371),r=n(150),o=n(175);function l(e,t,{encode:n=o.a,totalValue:l="\u603b\u8ba1",includeTopWrapper:s=!1,isExpand:i=Object(r.a)(!0),enforceExpandTotalNode:c=!0}={}){const d=[],u=n(d);let h,p=!1;if(0===t.length?h=[]:c||i(u)?h=function e(r,o){const l=o.length,s=[],c=t[l],d=Object(a.a)(r,(e=>e[c]));for(const a of Object.keys(d)){o.push(a);const r={key:n(o),value:a,path:o.slice()};s.push(r);const c=d[a];c.length>0&&l<t.length-1&&(i(r.key)?r.children=e(c,o):r.hasChild=!0),o.pop()}return s}(e,[]):(h=[],p=e.length>0),s){const e={key:u,value:l,path:d,children:h};return p&&(e.hasChild=p),[e]}return s?[{key:u,value:l,path:d,children:h}]:h}},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a="rowKey"},340:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(147),r=n(371),o=n(150),l=n(327),s=n(175);function i(e){return 1===e.length?e[0]:{}}function c({data:e,leftCodes:t,topCodes:n,aggregate:c=i,encode:d=s.a,isLeftExpand:u=Object(o.a)(!0),isTopExpand:h=Object(o.a)(!0),prebuiltLeftTree:p,prebuiltTopTree:f}){const m={peculiarity:new Set},[b]=null!=p?p:Object(l.b)(e,t,{encode:d,includeTopWrapper:!0,isExpand:u}),[g]=null!=f?f:Object(l.b)(e,n,{encode:d,includeTopWrapper:!0,isExpand:h});return function(e){const t=new Map;return function e(t,r){const o=new Map;t.set(r.leftKey,o),n(o,r.col),Object(a.a)(r)||r.children.forEach((n=>{e(t,n)}))}(t,e),t;function n(e,t){e.set(t.topKey,t.record),Object(a.a)(t)||t.children.forEach((t=>{n(e,t)}))}}(function e(l,s,i,d){let u,h=null;if(Object(a.a)(i))u=v(l,s,g,0);else{h=[];const p=t[d],f=Object(r.a)(s,(e=>e[p]));l.peculiarity.add(p);for(const t of i.children){const n=f[t.value];n&&h.push(e(l,n,t,d+1))}l.peculiarity.delete(p),u=function(e,t){return r(e,t,g,0);function r(e,t,l,s){let i=null;const d=c(t.map((e=>e.record)),e);if(!Object(a.a)(l)){const a=n[s];e.peculiarity.add(a);const c=Object(o.d)(l.children.map((e=>[e.value,e]))),d=t.map((e=>Object(o.d)(e.children.map((e=>[e.topValue,e])))));i=l.children.map((t=>{const n=d.map((e=>e[t.value])).filter(Boolean);return r(e,n,c[t.value],s+1)})),e.peculiarity.delete(a)}return{topKey:l.key,topValue:l.value,record:d,children:i}}}(l,h.map((e=>e.col)))}return{leftKey:i.key,children:h,col:u}}(m,e,b,0));function v(e,t,o,l){let s,i=null;if(Object(a.a)(o))s=c(t,e);else{i=[];const a=n[l],d=Object(r.a)(t,(e=>e[a]));e.peculiarity.add(a);for(const t of o.children){const n=d[t.value];n&&i.push(v(e,n,t,l+1))}e.peculiarity.delete(a),s=c(i.map((e=>e.record)),e)}return{topKey:o.key,topValue:o.value,children:i,record:s}}}function d({codes:e,encode:t=s.a,data:n,aggregate:a,isExpand:r}){const o=c({data:n,leftCodes:[],topCodes:e,isTopExpand:r,aggregate:a,encode:t}),l=t([]);return o.get(l)}},343:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var a=n(323),r=n(147),o=n(339);function l(e){var t,n,l;const{leftTotalNode:s,topTotalNode:i}=e,c=null!==(t=e.leftTree)&&void 0!==t?t:[],d=null!==(n=e.topTree)&&void 0!==n?n:[],u=null!==(l=e.leftMetaColumns)&&void 0!==l?l:[],h=Math.max(u.length,Object(a.a)(c)+1);return{columns:function(){return[...function(){const e=[];for(let l=0;l<h;l++){var t;const s=null!==(t=u[l])&&void 0!==t?t:{},{getCellProps:i,render:c,...d}=s;e.push({columnType:"left",lock:!0,...d,getCellProps:n(s,l),getSpanRect:a(s,l),getValue:r(s,l),render:o(s,l)})}return e;function n(e,t){return(n,a,r)=>{var o;const l=a.nodes[t];return null===(o=e.getCellProps)||void 0===o?void 0:o.call(e,l,t)}}function a(e,t){return(e,n)=>n.rects[t]}function r(e,t){return(e,n)=>e.nodes[t].value}function o(e,t){return(n,a,r)=>{var o;const l=a.nodes[t];return e.render?e.render(l,t):null!==(o=l.title)&&void 0!==o?o:l.value}}}(),...function(){return d.length>0?e(d,{valuePath:[],depth:0}):i?e([i],{valuePath:[],depth:0}):[];function e(n,a){const o=[];for(const l of n){if(a.valuePath.push(l.value),Object(r.a)(l))o.push(t(l,a.depth));else{const{key:t,value:n,children:r,...s}=l;o.push({columnType:"data-parent",...s,name:n,children:e(r,{valuePath:a.valuePath,depth:a.depth+1})})}a.valuePath.pop()}return o}}()];function t(t,n){const{key:a,value:r,children:o,...l}=t;return{columnType:"data",...l,getValue:a=>{const r=a.nodes.length-1,o=a.nodes[r];return e.getValue(o,t,r,n)},name:r,children:null,render(a,r){if(e.render){const o=r.nodes.length-1,l=r.nodes[o];return e.render(a,l,t,o,n)}return a},getCellProps(a,r){if(e.getCellProps){const o=r.nodes.length-1,l=r.nodes[o];return e.getCellProps(a,l,t,o,n)}}}}}(),dataSource:function(){const e=[],t={depth:0,nodes:[],rects:[],rowIndex:0};c.length>0?n(c,t):s&&n([s],t);return e;function n(t,a){let l=0;for(const s of t){if(s.hidden)continue;const t={top:a.rowIndex+l,bottom:-1,left:a.depth,right:-1},i={[o.a]:s.key,rects:[...a.rects,t],nodes:[...a.nodes,s]};if(Object(r.a)(s))t.right=h,t.bottom=t.top+1,e.push(i),l+=1;else{a.rects.push(t),a.nodes.push(s);const e=n(s.children,{nodes:a.nodes,rects:a.rects,depth:a.depth+1,rowIndex:a.rowIndex+l});a.rects.pop(),a.nodes.pop(),l+=e.count,t.right=t.left+1,t.bottom=t.top+e.count}}return{count:l}}}()}}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(145),r=n(160),o=n(349),l=n(0),s=n.n(l),i=n(1);function c({exampleName:e}){return s.a.createElement("div",{style:{marginTop:16}},s.a.createElement("p",null,"\u65e0\u6cd5\u627e\u5230\u540d\u4e3a ",s.a.createElement("b",null,e)," \u7684\u793a\u4f8b"))}function d({stories:e,path:t}){var n,o;const l=Object(i.l)(),d=Object(i.k)(),u=Object.keys(e).filter((e=>"default"!==e)),h=new URLSearchParams(l.search),p=null!==(n=h.get("example"))&&void 0!==n?n:u[0],f=u.indexOf(p),m=null!==(o=e[p])&&void 0!==o?o:c,b=e=>{h.set("example",e),d.replace({search:String(h)})},g=()=>t?s.a.createElement(a.a,{component:"a",href:String(new URL(t,"https://github.com/alibaba/ali-react-table/blob/master/packages/website/examples/"))},"\u67e5\u770b\u6e90\u7801"):null;return s.a.createElement(s.a.Fragment,null,u.length>1?s.a.createElement("div",{style:{marginBottom:16,display:"flex",alignItems:"center",flexWrap:"wrap"}},s.a.createElement("span",null,"\u793a\u4f8b\uff08",f+1," / ",u.length,"\uff09\uff1a"),s.a.createElement(r.a,{style:{marginLeft:8,width:200},dataSource:u,value:p,onChange:b}),s.a.createElement(a.a.Group,{style:{marginLeft:8}},s.a.createElement(a.a,{onClick:()=>{-1===f?b(u[0]):-1!==f&&f>0&&b(u[f-1])},disabled:0===f},"\u4e0a\u4e00\u4e2a"),s.a.createElement(a.a,{onClick:()=>{-1===f?b(u[0]):f<u.length-1&&b(u[f+1])},disabled:f===u.length-1},"\u4e0b\u4e00\u4e2a"),g())):s.a.createElement("div",{style:{marginBottom:t?16:0}},g()),s.a.createElement(m,{exampleName:p}))}function u(e){return s.a.createElement(o.a,{fallback:"\u793a\u4f8b\u8f7d\u5165\u4e2d..."},(()=>s.a.createElement(d,Object.assign({},e))))}},357:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(182),l=n(343),s=n(339);t.b=function({BaseTableComponent:e=o.a,leftTree:t,leftTotalNode:n,topTree:a,topTotalNode:i,getValue:c,getCellProps:d,leftMetaColumns:u,render:h,baseTableRef:p,...f}){const{dataSource:m,columns:b}=Object(l.b)({leftTree:t,topTree:a,leftTotalNode:n,topTotalNode:i,getValue:c,getCellProps:d,render:h,leftMetaColumns:u});return r.a.createElement(e,Object.assign({ref:p},f,{primaryKey:s.a,dataSource:m,columns:b}))}},371:function(e,t,n){"use strict";function a(e,t){const n={};for(const a of e){const e=t(a);null==n[e]&&(n[e]=[]),n[e].push(a)}return n}n.d(t,"a",(function(){return a}))},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(145),r=n(0),o=n.n(r);const l=n(141).b.div`
  .designer-row {
    min-height: 36px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .label {
      width: 160px;
    }

    .prompt {
      color: #999;
    }

    .spare-dim {
      text-decoration: underline;
      margin-left: 8px;
      cursor: pointer;
      :hover {
        outline: 1px dashed #ccc;
        outline-offset: 4px;
      }
    }
  }
`;function s({dimensions:e,leftCodes:t,topCodes:n,indicatorSide:r,onChangeIndicatorSide:s,onChangeLeftCodes:i,onChangeTopCodes:c,showSubtotal:d,onChangeShowSubtotal:u,showSupportsExpandToggle:h,supportsExpand:p,onChangeSupportsExpand:f}){const m=new Map(e.map((e=>[e.code,e]))),b=e.filter((e=>!t.includes(e.code)&&!n.includes(e.code)));return o.a.createElement(l,null,o.a.createElement("div",{className:"designer-row"},o.a.createElement("span",{className:"label"},"\u8868\u683c\u7ed3\u6784\uff1a"),o.a.createElement(a.a.Group,null,o.a.createElement(a.a,{type:"left"===r?"primary":"normal",onClick:()=>s("left")},"\u6307\u6807\u653e\u5728\u5de6\u4fa7"),o.a.createElement(a.a,{type:"top"===r?"primary":"normal",onClick:()=>s("top")},"\u6307\u6807\u653e\u5728\u4e0a\u65b9")),o.a.createElement(a.a.Group,{style:{marginLeft:16}},o.a.createElement(a.a,{onClick:()=>u(!0),type:d?"primary":"normal"},"\u663e\u793a\u603b\u8ba1/\u5c0f\u8ba1"),o.a.createElement(a.a,{onClick:()=>u(!1),type:d?"normal":"primary"},"\u9690\u85cf\u603b\u8ba1/\u5c0f\u8ba1")),h&&o.a.createElement(a.a.Group,{style:{marginLeft:16}},o.a.createElement(a.a,{onClick:()=>f(!0),type:p?"primary":"normal"},"\u5f00\u542f\u5c55\u5f00/\u6536\u62e2"),o.a.createElement(a.a,{onClick:()=>f(!1),type:p?"normal":"primary"},"\u5173\u95ed\u5c55\u5f00/\u6536\u62e2"))),o.a.createElement("div",{className:"designer-row"},o.a.createElement("span",{className:"label"},"\u6e05\u7a7a\u7ef4\u5ea6\uff1a"),o.a.createElement(a.a.Group,null,o.a.createElement(a.a,{onClick:()=>i([]),disabled:0===t.length},"\u6e05\u7a7a\u5de6\u4fa7\u7ef4\u5ea6"),o.a.createElement(a.a,{onClick:()=>c([]),disabled:0===n.length},"\u6e05\u7a7a\u4e0a\u65b9\u7ef4\u5ea6"))),o.a.createElement("div",{className:"designer-row"},o.a.createElement("span",{className:"label"},"\u5de6\u4fa7\u7684\u7ef4\u5ea6\u5e8f\u5217\uff1a"),0===t.length&&o.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),t.map(((e,t)=>o.a.createElement(o.a.Fragment,{key:t},t>0&&o.a.createElement("span",{style:{margin:"0 4px"}},">"),o.a.createElement("span",null,m.get(e).name))))),o.a.createElement("div",{className:"designer-row"},o.a.createElement("span",{className:"label"},"\u5de6\u4fa7\u7684\u53ef\u6dfb\u52a0\u7684\u7ef4\u5ea6\uff1a"),0===b.length&&o.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),b.map((e=>o.a.createElement("span",{key:e.code,className:"spare-dim",onClick:()=>i(t.concat([e.code]))},e.name)))),o.a.createElement("div",{className:"designer-row"},o.a.createElement("span",{className:"label"},"\u4e0a\u65b9\u7ef4\u5ea6\u5e8f\u5217\uff1a"),0===n.length&&o.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),n.map(((e,t)=>o.a.createElement(o.a.Fragment,{key:t},t>0&&o.a.createElement("span",{style:{margin:"0 4px"}},">"),o.a.createElement("span",null,m.get(e).name))))),o.a.createElement("div",{className:"designer-row"},o.a.createElement("span",{className:"label"},"\u4e0a\u65b9\u7684\u53ef\u6dfb\u52a0\u7684\u7ef4\u5ea6\uff1a"),0===b.length&&o.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),b.map((e=>o.a.createElement("span",{key:e.code,className:"spare-dim",onClick:()=>c(n.concat([e.code]))},e.name)))))}},379:function(e,t,n){var a={"./af":187,"./af.js":187,"./ar":188,"./ar-dz":189,"./ar-dz.js":189,"./ar-kw":190,"./ar-kw.js":190,"./ar-ly":191,"./ar-ly.js":191,"./ar-ma":192,"./ar-ma.js":192,"./ar-sa":193,"./ar-sa.js":193,"./ar-tn":194,"./ar-tn.js":194,"./ar.js":188,"./az":195,"./az.js":195,"./be":196,"./be.js":196,"./bg":197,"./bg.js":197,"./bm":198,"./bm.js":198,"./bn":199,"./bn-bd":200,"./bn-bd.js":200,"./bn.js":199,"./bo":201,"./bo.js":201,"./br":202,"./br.js":202,"./bs":203,"./bs.js":203,"./ca":204,"./ca.js":204,"./cs":205,"./cs.js":205,"./cv":206,"./cv.js":206,"./cy":207,"./cy.js":207,"./da":208,"./da.js":208,"./de":209,"./de-at":210,"./de-at.js":210,"./de-ch":211,"./de-ch.js":211,"./de.js":209,"./dv":212,"./dv.js":212,"./el":213,"./el.js":213,"./en-au":214,"./en-au.js":214,"./en-ca":215,"./en-ca.js":215,"./en-gb":216,"./en-gb.js":216,"./en-ie":217,"./en-ie.js":217,"./en-il":218,"./en-il.js":218,"./en-in":219,"./en-in.js":219,"./en-nz":220,"./en-nz.js":220,"./en-sg":221,"./en-sg.js":221,"./eo":222,"./eo.js":222,"./es":223,"./es-do":224,"./es-do.js":224,"./es-mx":225,"./es-mx.js":225,"./es-us":226,"./es-us.js":226,"./es.js":223,"./et":227,"./et.js":227,"./eu":228,"./eu.js":228,"./fa":229,"./fa.js":229,"./fi":230,"./fi.js":230,"./fil":231,"./fil.js":231,"./fo":232,"./fo.js":232,"./fr":233,"./fr-ca":234,"./fr-ca.js":234,"./fr-ch":235,"./fr-ch.js":235,"./fr.js":233,"./fy":236,"./fy.js":236,"./ga":237,"./ga.js":237,"./gd":238,"./gd.js":238,"./gl":239,"./gl.js":239,"./gom-deva":240,"./gom-deva.js":240,"./gom-latn":241,"./gom-latn.js":241,"./gu":242,"./gu.js":242,"./he":243,"./he.js":243,"./hi":244,"./hi.js":244,"./hr":245,"./hr.js":245,"./hu":246,"./hu.js":246,"./hy-am":247,"./hy-am.js":247,"./id":248,"./id.js":248,"./is":249,"./is.js":249,"./it":250,"./it-ch":251,"./it-ch.js":251,"./it.js":250,"./ja":252,"./ja.js":252,"./jv":253,"./jv.js":253,"./ka":254,"./ka.js":254,"./kk":255,"./kk.js":255,"./km":256,"./km.js":256,"./kn":257,"./kn.js":257,"./ko":258,"./ko.js":258,"./ku":259,"./ku.js":259,"./ky":260,"./ky.js":260,"./lb":261,"./lb.js":261,"./lo":262,"./lo.js":262,"./lt":263,"./lt.js":263,"./lv":264,"./lv.js":264,"./me":265,"./me.js":265,"./mi":266,"./mi.js":266,"./mk":267,"./mk.js":267,"./ml":268,"./ml.js":268,"./mn":269,"./mn.js":269,"./mr":270,"./mr.js":270,"./ms":271,"./ms-my":272,"./ms-my.js":272,"./ms.js":271,"./mt":273,"./mt.js":273,"./my":274,"./my.js":274,"./nb":275,"./nb.js":275,"./ne":276,"./ne.js":276,"./nl":277,"./nl-be":278,"./nl-be.js":278,"./nl.js":277,"./nn":279,"./nn.js":279,"./oc-lnc":280,"./oc-lnc.js":280,"./pa-in":281,"./pa-in.js":281,"./pl":282,"./pl.js":282,"./pt":283,"./pt-br":284,"./pt-br.js":284,"./pt.js":283,"./ro":285,"./ro.js":285,"./ru":286,"./ru.js":286,"./sd":287,"./sd.js":287,"./se":288,"./se.js":288,"./si":289,"./si.js":289,"./sk":290,"./sk.js":290,"./sl":291,"./sl.js":291,"./sq":292,"./sq.js":292,"./sr":293,"./sr-cyrl":294,"./sr-cyrl.js":294,"./sr.js":293,"./ss":295,"./ss.js":295,"./sv":296,"./sv.js":296,"./sw":297,"./sw.js":297,"./ta":298,"./ta.js":298,"./te":299,"./te.js":299,"./tet":300,"./tet.js":300,"./tg":301,"./tg.js":301,"./th":302,"./th.js":302,"./tk":303,"./tk.js":303,"./tl-ph":304,"./tl-ph.js":304,"./tlh":305,"./tlh.js":305,"./tr":306,"./tr.js":306,"./tzl":307,"./tzl.js":307,"./tzm":308,"./tzm-latn":309,"./tzm-latn.js":309,"./tzm.js":308,"./ug-cn":310,"./ug-cn.js":310,"./uk":311,"./uk.js":311,"./ur":312,"./ur.js":312,"./uz":313,"./uz-latn":314,"./uz-latn.js":314,"./uz.js":313,"./vi":315,"./vi.js":315,"./x-pseudo":316,"./x-pseudo.js":316,"./yo":317,"./yo.js":317,"./zh-cn":318,"./zh-cn.js":318,"./zh-hk":319,"./zh-hk.js":319,"./zh-mo":320,"./zh-mo.js":320,"./zh-tw":321,"./zh-tw.js":321};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=379},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),o=n(718),l=n(141),s=n(155),i=n(147),c=n(175);const d=l.b.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px 2px 0;
  cursor: pointer;

  .icon {
    fill: #999;
    margin-right: 4px;

    &.expanded {
      transform-origin: center center;
      transform: rotate(90deg);
    }
  }
`;function u(e,{indicators:t,encode:n=c.a,generateSubtotalNode:a,enforceExpandTotalNode:l=!0,expandKeys:u,onChangeExpandKeys:h=o.a,supportsExpand:p}={}){const f=n([]);if(p&&null==u)throw new Error("[ali-react-table] convertDrillTreeToCrossTree(...) \u8bbe\u7f6e supportsExpand=true \u65f6\uff0cexpandKeys \u4e0d\u80fd\u4e3a null/undefined.");const m=new Set(u);return function e(o,c){const v=[];for(const y of o){const o={dataKey:y.key,dataPath:y.path};if(Object(i.a)(y)&&!y.hasChild)v.push(g(y,o));else{let i=!0,k={key:y.key,value:y.value,data:o};if(!p||l&&y.key===f?k.children=e(y.children,c+1):m.has(y.key)?(k.title=r.a.createElement(d,{onClick:()=>{h(u.filter((e=>e!==y.key)),y,"collapse")}},r.a.createElement(s.c.CaretRight,{className:"icon expanded"}),y.value),k.children=e(y.children,c+1)):(i=!1,k.title=r.a.createElement(d,{onClick:()=>{h(u.concat([y.key]),y,"expand")}},r.a.createElement(s.c.CaretRight,{className:"icon collapsed"}),y.value),null!=t&&(k.children=b(y,o))),i){const e=null==a?void 0:a(y);if(e){const{position:t="start",value:a}=e,r=y.path.concat([a]),l=g({key:n(r),path:r,value:a},o);"start"===t?k.children.unshift(l):k.children.push(l)}}v.push(k)}}return v}(e,0);function b(e,a){return t.map((t=>({key:n(e.path.concat([t.code])),value:t.name,data:{...a,indicator:t},...t})))}function g(e,n){return null!=t?{key:e.key,value:e.value,data:n,children:b(e,n)}:{key:e.key,value:e.value,data:n}}}}}]);