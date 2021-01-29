(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return m})),r.d(t,"metadata",(function(){return g})),r.d(t,"toc",(function(){return y})),r.d(t,"default",(function(){return v}));var a={};r.r(a),r.d(a,"default",(function(){return u})),r.d(a,"RankTable",(function(){return f}));var o=r(3),n=r(7),l=r(0),i=r.n(l),s=r(157),c=r(180),d=r(151),h=r(327),u={title:"\u4e1a\u52a1\u793a\u4f8b / \u5546\u54c1\u6392\u884c\u699c"};const b=Object(d.c)(h.a)`
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
`;function f(){return i.a.createElement(b,{style:{paddingRight:16},columns:[{name:"\u6392\u540d",code:"rank",width:50},{name:"\u5546\u54c1\u540d\u79f0",code:"sku_name"},{name:"\u6307\u6807",code:"value",render:c.amount,width:100,align:"right"},{name:"\u73af\u6bd4",code:"rated",render:c.lfl,width:100,align:"right"},{name:"\u5468\u6bd4",code:"ratew",render:c.lfl,width:100,align:"right"}],dataSource:[{rank:1,sku_name:"\u9752\u6d66\u767d\u9e64\u7ea2\u989c\u8349\u8393300g",value:1234567,rated:.0123456,ratew:.087654},{rank:2,sku_name:"\u51e4\u8fbe\u8349\u9e21\u86cb12\u679a",value:1234567,rated:.0123456,ratew:.087654},{rank:3,sku_name:"Dole\u8fdb\u53e3\u751c\u9999\u8549650g",value:1234567,rated:0,ratew:-.087654},{rank:4,sku_name:"\u5d07\u660e\u82a6\u7b0b350g",value:1234567,rated:.0123456,ratew:.087654},{rank:5,sku_name:"\u5317\u6d77\u9053\u539f\u5473\u5410\u53f8\u9762\u5305210g",value:1234567,rated:-.0123456,ratew:-.087654},{rank:6,sku_name:"\u76d2\u9a6c\u73cd\u73e0\u751f\u867e\u4ec1150g",value:1234567,rated:.0123456,ratew:.087654},{rank:7,sku_name:"\u6d1b\u5ddd\u7ea2\u5bcc\u58eb\u82f9\u679c4\u4e2a",value:1234567,rated:-.0123456,ratew:-.087654},{rank:8,sku_name:"\u6e7e\u4ed4\u7801\u5934\u5927\u767d\u83dc\u732a\u8089\u6c34\u997a300g",value:1234567,rated:.0123456,ratew:.087654},{rank:9,sku_name:"\u725b\u5976\u5c0f\u86cb\u7cd5",value:1234567,rated:.0123456,ratew:0},{rank:10,sku_name:"\u516d\u8bb0\u96c4\u6f6e\u6c55\u725b\u8089\u4e38250g",value:1234567,rated:.0123456,ratew:.087654}]})}var p=r(355),m={id:"rank-table",title:"\u5546\u54c1\u6392\u884c\u699c",hide_table_of_contents:!0,hide_title:!0},g={unversionedId:"biz/rank-table",id:"biz/rank-table",isDocsHomePage:!1,title:"\u5546\u54c1\u6392\u884c\u699c",source:"@site/examples/biz/rank-table.mdx",slug:"/biz/rank-table",permalink:"/examples/biz/rank-table",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/examples/biz/rank-table.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u5178\u578b\u6570\u636e\u62a5\u8868",permalink:"/examples/biz/data-report"},next:{title:"\u7528\u6237\u7559\u5b58\u77e9\u9635",permalink:"/examples/biz/remain-matrix"}},y=[],k={toc:y};function v(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},k,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)(p.a,{stories:a,path:"biz/rank-table.stories.tsx",mdxType:"Stories"}))}v.isMDXComponent=!0},152:function(e,t,r){"use strict";function a(e,t,r){return e.getValue?e.getValue(t,r):t[e.code]}r.d(t,"a",(function(){return o}));const o={safeRenderHeader:function(e){var t;return null!==(t=e.title)&&void 0!==t?t:e.name},safeGetValue:a,safeGetRowKey:function(e,t,r){let a;return"string"==typeof e?a=t[e]:"function"==typeof e&&(a=e(t)),null==a&&(a=String(r)),a},safeGetCellProps:function(e,t,r){if(e.getCellProps){const o=a(e,t,r);return e.getCellProps(o,t,r)||{}}return{}},safeRender:function(e,t,r){const o=a(e,t,r);return e.render?e.render(o,t,r):o}}},153:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"d",(function(){return b}));var a=r(151);const o=20,n={artTableWrapper:"art-table-wrapper",artTable:"art-table",tableHeader:"art-table-header",tableBody:"art-table-body",tableFooter:"art-table-footer",tableRow:"art-table-row",tableHeaderRow:"art-table-header-row",tableCell:"art-table-cell",tableHeaderCell:"art-table-header-cell",virtualBlank:"art-virtual-blank",stickyScroll:"art-sticky-scroll",stickyScrollItem:"art-sticky-scroll-item",horizontalScrollContainer:"art-horizontal-scroll-container",lockShadowMask:"art-lock-shadow-mask",lockShadow:"art-lock-shadow",leftLockShadow:"art-left-lock-shadow",rightLockShadow:"art-right-lock-shadow",emptyWrapper:"art-empty-wrapper",loadingWrapper:"art-loading-wrapper",loadingIndicatorWrapper:"art-loading-indicator-wrapper",loadingIndicator:"art-loading-indicator"},l=5,i=15,s=10,c=20,d=30,h=40,u=a.b`
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

  thead tr.first th,
  tbody tr.first td {
    border-top: none;
  }
  &.has-footer tfoot tr.last td {
    border-bottom: none;
  }
  &:not(.has-footer) tbody tr.last td {
    border-bottom: none;
  }
`,b=a.c.div`
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
    ${u};
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

  .${n.tableBody}, .${n.tableFooter} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--bgcolor);
  }

  &.sticky-header .${n.tableHeader} {
    position: sticky;
    top: 0;
    z-index: ${i};
  }

  &.sticky-footer .${n.tableFooter} {
    position: sticky;
    bottom: 0;
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
  &.has-header tbody tr.first td {
    border-top: none;
  }
  &.has-footer tbody tr.last td {
    border-bottom: none;
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
    z-index: ${d};
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
      z-index: ${h};
      transform: translateY(-50%);
    }
  }
  //#endregion
`},158:function(e,t,r){"use strict";function a(e){return null==e.children||0===e.children.length}r.d(t,"a",(function(){return a}))},178:function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var a=r(0),o=r.n(a),n=r(153);const l=o.a.memo(()=>o.a.createElement("svg",{style:{margin:"auto",display:"block",width:40,height:40},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},o.a.createElement("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#23a7fa",strokeDasharray:"188 64",strokeLinecap:"round",strokeWidth:"10"},o.a.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"}))));function i({children:e,visible:t}){return o.a.createElement("div",{className:"art-loading-content-wrapper",style:{filter:t?"blur(1px)":"none"}},e)}function s({visible:e,children:t,LoadingContentWrapper:r=i,LoadingIcon:a=l}){return o.a.createElement("div",{className:n.b.loadingWrapper},e&&o.a.createElement("div",{className:n.b.loadingIndicatorWrapper},o.a.createElement("div",{className:n.b.loadingIndicator},o.a.createElement(a,null))),o.a.createElement(r,{visible:e,children:t}))}},180:function(e,t,r){"use strict";r.r(t),r.d(t,"plain",(function(){return c})),r.d(t,"amount0",(function(){return d})),r.d(t,"amount",(function(){return h})),r.d(t,"time",(function(){return u})),r.d(t,"amount1",(function(){return b})),r.d(t,"amount2",(function(){return f})),r.d(t,"ratio",(function(){return p})),r.d(t,"lfl",(function(){return y})),r.d(t,"money",(function(){return k}));var a=r(357),o=r.n(a),n=r(148),l=r.n(n),i=r(0),s=r.n(i);const c=e=>"-"===e||null==e?"-":String(e),d=e=>"-"===e||null==e?"-":o()(e).format("0,0"),h=d;function u(e){return l()(e,"YYYY-MM-DD HH:mm:ss.sss").format("YYYY\u5e74MM\u6708DD\u65e5 HH:mm:ss")}const b=e=>"-"===e||null==e?"-":o()(e).format("0,0.0"),f=e=>"-"===e||null==e?"-":o()(e).format("0,0.00"),p=e=>"-"===e||null==e?"-":o()(e).format("0.00%"),m=Object(i.memo)(({size:e=12,style:t})=>s.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},s.a.createElement("path",{d:"M682.667 512v426.667H341.333V512h-256L512 0l426.667 512h-256z"}))),g=Object(i.memo)(({size:e=12,style:t})=>s.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},s.a.createElement("path",{d:"M682.667 426.667V0H341.333v426.667h-256l426.667 512 426.667-512h-256z"}))),y=e=>{return null==e||"-"===e||isNaN(e)||e===1/0||e===-1/0?t("-"):t((e=Number(e))>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{style:{color:"#f4485c"}},o()(e).format("0.00%")),s.a.createElement(m,{style:{marginLeft:4,color:"#f4485c"}})):e<0?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{style:{color:"#00a854"}},o()(e).format("0.00%")),s.a.createElement(g,{style:{marginLeft:4,color:"#00a854"}})):s.a.createElement("span",{style:{color:"#838383"}},"0"));function t(e){return s.a.createElement("div",{className:"lfl-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"flex-end"}},e)}},k=e=>"-"===e||null==e?"-":(e=Number(e))<0?"-"+k(-e):0===e?String(e):e<1e4?o()(e).format("0,0"):e<1e5?o()(e/1e4).format("0.0")+"\u4e07":e<1e8?o()(e/1e4).format("0")+"\u4e07":e<1e9?o()(e/1e8).format("0.0")+"\u4ebf":o()(e/1e8).format("0")+"\u4ebf"},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class a{constructor(){Object.defineProperty(this,"rects",{enumerable:!0,configurable:!0,writable:!0,value:[]})}testSkip(e,t){return this.rects.some(({left:r,right:a,top:o,bottom:n})=>r<=t&&t<a&&o<=e&&e<n)}stripUpwards(e){this.rects=this.rects.filter(t=>t.bottom>e)}add(e,t,r,a){this.rects.push({left:t,right:t+r,top:e,bottom:e+a})}}},327:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(350),o=r(179),n=r(333),l=r(142),i=r.n(l),s=r(0),c=r.n(s),d=r(151);function h(){var e=Object(a.a)(["\n  ",";\n\n  &.dark {\n    --bgcolor: #333;\n    --header-bgcolor: #45494f;\n    --hover-bgcolor: #46484a;\n    --header-hover-bgcolor: #606164;\n    --highlight-bgcolor: #191a1b;\n    --header-highlight-bgcolor: #191a1b;\n    --color: #dadde1;\n    --header-color: #dadde1;\n    --lock-shadow: rgb(37 37 37 / 0.5) 0 0 6px 2px;\n    --border-color: #3c4045;\n  }\n"]);return h=function(){return e},e}var u=Object(d.c)(n.a)(h(),(function(e){return e.css})),b=c.a.forwardRef((function(e,t){var r=Object(o.a)().isDarkTheme;return c.a.createElement(u,Object.assign({ref:t,className:i()({dark:r},e.className)},e))}))},333:function(e,t,r){"use strict";r.d(t,"a",(function(){return ne}));var a=r(142),o=r.n(a),n=r(0),l=r.n(n),i=r(467),s=r(778),c=r(771),d=r(783),h=r(780),u=r(779),b=r(775),f=r(573),p=r(770),m=r(772),g=r(773),y=r(774),k=r(158),v=r(342),w=r(782),j=r(769),S=r(616),x=r(784);const R="v3"===(null!=r(151).a?"v5":"v3")?"innerRef":"ref";function E(e){let t=0;return e.forEach(e=>{t+=e}),t}const H=Object(w.a)(()=>Object(j.a)(window,"resize").pipe(Object(x.a)(150,S.b,{leading:!0,trailing:!0})));function z(){const e=document.createElement("div");e.style.position="absolute",e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.top="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,r=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{width:t,height:r}}let L;function O(e,t){const r=Object.prototype.hasOwnProperty;if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(let n=0;n<a.length;n++)if(!r.call(t,a[n])||!Object.is(e[a[n]],t[a[n]]))return!1;return!0}function I(e,t){return null==e||"auto"===e?t:e}let T=!1;function B(e){T||(T=!0,console.warn("[ali-react-table] column.hidden \u5df2\u7ecf\u8fc7\u65f6\uff0c\u5982\u679c\u9700\u8981\u9690\u85cf\u8be5\u5217\uff0c\u8bf7\u5c06\u5176\u4ece columns \u6570\u7ec4\u4e2d\u79fb\u9664",e))}function M(e){let t=0;for(const a of e){if(!r(a))break;t+=1}return t;function r(e){return Object(k.a)(e)?e.lock:e.lock||e.children.some(r)}}function C(e){const{offsetX:t,maxRenderWidth:r}=e.state,{useVirtual:a,columns:o,dataSource:n,defaultColumnWidth:l}=e.props,i=function(e,t){return null!=e&&Array.isArray(e)||(console.warn("[ali-react-table] <BaseTable /> props.columns \u9700\u8981\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4",e),e=[]),function e(r){const a=[];for(let o of r)if(null==o.width&&null!=t&&(o={...o,width:t}),Object(k.a)(o))o.hidden?B(o):a.push(o);else{const t=e(o.children);t.length>0&&a.push({...o,children:t})}return a}(e)}(o,l),s=M(i),c=Object(v.a)(i,"leaf-only");let d,h,u;if(s===i.length)d={left:[],right:[],full:c,center:c},h={left:[],right:[],full:i,center:i},u={horizontal:!1,vertical:!1,header:!1};else{const e=i.slice(0,s),t=M(i.slice().reverse()),r=i.slice(s,i.length-t),o=i.slice(i.length-t),l=c.length>=100&&c.every(e=>null!=e.width),b=n.length>=100;u={horizontal:I("object"==typeof a?a.horizontal:a,l),vertical:I("object"==typeof a?a.vertical:a,b),header:I("object"==typeof a?a.header:a,!1)},d={left:Object(v.a)(e,"leaf-only"),full:c,right:Object(v.a)(o,"leaf-only"),center:Object(v.a)(r,"leaf-only")},h={left:e,full:i,right:o,center:r}}const b=function({offsetX:e,maxRenderWidth:t,flat:r,useVirtual:a}){if(!a.horizontal)return{leftIndex:0,leftBlank:0,rightIndex:r.full.length,rightBlank:0};let o=0,n=0,l=0,i=0;const s=Math.max(0,e-100);for(;o<r.center.length;){const e=r.center[o];if(!(e.width+l<s))break;o+=1,l+=e.width}const c=t+(s-l)+200;for(;o+n<r.center.length;){const e=r.center[o+n];if(!(e.width+i<c))break;i+=e.width,n+=1}const d=r.center.length-o-n;return{leftIndex:o,leftBlank:l,rightIndex:o+n,rightBlank:E(r.center.slice(r.center.length-d).map(e=>e.width))}}({maxRenderWidth:r,offsetX:t,useVirtual:u,flat:d}),f=e.getVerticalRenderRange(u),{leftBlank:p,leftIndex:m,rightBlank:g,rightIndex:y}=b,w=[...d.left.map((e,t)=>({type:"normal",col:e,colIndex:t})),p>0&&{type:"blank",blankSide:"left",width:p},...d.center.slice(m,y).map((e,t)=>({type:"normal",col:e,colIndex:d.left.length+m+t})),g>0&&{type:"blank",blankSide:"right",width:g},...d.right.map((e,t)=>({type:"normal",col:e,colIndex:d.full.length-d.right.length+t}))].filter(Boolean),j=d.full.length,S=d.left.length,x=d.right.length,R=new Map;let H=0;for(let k=0;k<S;k++)R.set(k,H),H+=d.full[k].width;const z=new Map;let L=0;for(let k=0;k<x;k++)z.set(j-1-k,L),L+=d.full[j-1-k].width;const O=E(d.left.map(e=>e.width)),T=E(d.right.map(e=>e.width));return{horizontalRenderRange:b,verticalRenderRange:f,visible:w,flat:d,nested:h,useVirtual:u,stickyLeftMap:R,stickyRightMap:z,leftLockTotalWidth:O,rightLockTotalWidth:T,hasLockColumn:h.left.length>0||h.right.length>0}}function N({descriptors:e}){return l.a.createElement("colgroup",null,e.map(e=>"blank"===e.type?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):l.a.createElement("col",{key:e.colIndex,style:{width:e.col.width}})))}var W=r(153);const $=l.a.memo(()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{alt:"empty-image",className:"empty-image",src:"//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"}),l.a.createElement("div",{className:"empty-tips"},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",l.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2")));function P({descriptors:e,isLoading:t,emptyCellHeight:r,EmptyContent:a=$}){const n=!t;return l.a.createElement("table",null,l.a.createElement(N,{descriptors:e}),l.a.createElement("tbody",null,l.a.createElement("tr",{className:o()(W.b.tableRow,"first","last","no-hover"),"data-rowindex":0},l.a.createElement("td",{className:o()(W.b.tableCell,"first","last"),colSpan:e.length,style:{height:null!=r?r:200}},n&&l.a.createElement("div",{className:W.b.emptyWrapper},l.a.createElement(a,null))))))}var D=r(341);function F(e){const t=[];for(let r=0;r<e;r++)t.push(r);return t}function V(e,t){const r=[];for(let o=0;o<t;o++)r.push([]);const a=[];return function e(t,o){let n=0;for(let l=0;l<t.length;l++){const i=t[l];if(Object(k.a)(i)){n+=1;const e={type:"normal",width:i.col.width,col:i.col,colIndex:i.colIndex,colSpan:1,isLeaf:!0};r[o].push(e),a.push(e)}else{const t=e(i.children,o+1);n+=t.leafCount,t.leafCount>0&&r[o].push({type:"normal",width:i.col.width,col:i.col,colIndex:i.colIndex,colSpan:t.leafCount,isLeaf:!1})}}return{leafCount:n}}(e,0),{flat:a,leveled:r}}function Y(e,t){return function e(t,r){const a=[];let o=0;for(let n=0;n<t.length;n++){const l=t[n],i=r+o;if(Object(k.a)(l))o+=1,a.push({colIndex:i,col:l});else{const t=e(l.children,i);o+=t.leafCount,t.leafCount>0&&a.push({col:l,colIndex:i,children:t.result})}}return{result:a,leafCount:o}}(e,t).result}function _({flat:e,nested:t,horizontalRenderRange:r,useVirtual:a},o){if(a.header){const a=V(Y(t.left,0),o),n=V(function(e,t,r){return function e(a,o){let n=0;const l=[];for(const i of a){const a=o+n;if(Object(k.a)(i))n+=1,r+t.leftIndex<=a&&a<r+t.rightIndex&&l.push({colIndex:a,col:i});else{const t=e(i.children,a);n+=t.leafCount,t.filtered.length>0&&l.push({colIndex:a,col:i,children:t.filtered})}}return{filtered:l,leafCount:n}}(e,r).filtered}(t.center,r,e.left.length),o),l=V(Y(t.right,e.left.length+e.center.length),o);return{flat:[...a.flat,{type:"blank",width:r.leftBlank,blankSide:"left"},...n.flat,{type:"blank",width:r.rightBlank,blankSide:"right"},...l.flat],leveled:F(o).map(e=>[...a.leveled[e],{type:"blank",width:r.leftBlank,blankSide:"left"},...n.leveled[e],{type:"blank",width:r.rightBlank,blankSide:"right"},...l.leveled[e]])}}return V(Y(t.full,0),o)}function q({info:e}){const{nested:t,flat:r,stickyLeftMap:a,stickyRightMap:n}=e,i=Object(D.a)(t.full)+1,s=_(e,i),c=r.full.length,d=r.left.length,h=r.right.length,u=s.leveled.map((e,t)=>{const r=e.map(e=>{if("normal"===e.type){var r,s;const{colIndex:u,colSpan:b,isLeaf:f,col:p}=e,m=null!==(r=p.headerCellProps)&&void 0!==r?r:{},g={};return u<d?(g.position="sticky",g.left=a.get(u)):u>=c-h&&(g.position="sticky",g.right=n.get(u)),l.a.createElement("th",Object.assign({key:u},m,{className:o()(W.b.tableHeaderCell,m.className,{first:0===u,last:u+b===c,"lock-left":u<d,"lock-right":u>=c-h}),colSpan:b,rowSpan:f?i-t:void 0,style:{textAlign:p.align,...m.style,...g}}),null!==(s=p.title)&&void 0!==s?s:p.name)}return e.width>0?l.a.createElement("th",{key:e.blankSide}):null});return l.a.createElement("tr",{key:t,className:o()(W.b.tableHeaderRow,{first:0===t,last:t===i-1})},r)});return l.a.createElement("table",null,l.a.createElement("colgroup",null,s.flat.map(e=>"blank"===e.type?e.width>0?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):null:l.a.createElement("col",{key:e.colIndex,style:{width:e.width}}))),l.a.createElement("thead",null,u))}function U(e,t){const r=new Array(e).fill(t);return{getRenderRange:function(e,a,o){return r.length!==o&&function(e){if(e<r.length)r.length=e;else{const a=r.length;r.length=e,r.fill(t,a)}}(o),a<=0?e<=0?function(){const e={topIndex:0,topBlank:0},t=l(0,e);return{...e,...t}}():function(){const e=i(o),t=n(e),r=l(e,t);return{...t,...r}}():function(){const t=n(e),r=l(e+a,t);return{...t,...r}}();function n(e){if(0===r.length)return{topIndex:0,topBlank:0};let t=0,a=0;for(;t<r.length;){const o=r[t];if(a+o>=e)break;a+=o,t+=1}return function(e,t){let a=0,o=0;for(;o<e&&a<100;)o+=1,a+=r[e-o];return{topIndex:e-o,topBlank:t-a}}(t,a)}function l(e,t){let a=t.topIndex,n=t.topBlank;for(;a<o&&n<e;)n+=r[a],a+=1;return function(e,t){let a=0,n=0;for(;n<o-e&&a<100;)a+=r[e+n],n+=1;return{bottomIndex:e+n,bottomBlank:t-a}}(a,i(o)-n)}function i(e){return E(r)+(e-r.length)*t}},updateRow:function(e,t,a){r[e]=a},cache:r}}class X{constructor(e){Object.defineProperty(this,"artTableWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"artTable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tableHeader",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tableBody",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tableFooter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"stickyScroll",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"stickyScrollItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.artTableWrapper=e,this.artTable=e.querySelector("."+W.b.artTable),this.tableHeader=this.artTable.querySelector(":scope > ."+W.b.tableHeader),this.tableBody=this.artTable.querySelector(":scope > ."+W.b.tableBody),this.tableFooter=this.artTable.querySelector(":scope > ."+W.b.tableFooter);const t=`.${W.b.artTable} + .${W.b.stickyScroll}`;this.stickyScroll=e.querySelector(t),this.stickyScrollItem=this.stickyScroll.querySelector("."+W.b.stickyScrollItem)}getVirtualTop(){return this.tableBody.querySelector(`.${W.b.virtualBlank}.top`)}getTableRows(){return this.getTableBodyHtmlTable().querySelectorAll(":scope > tbody > ."+W.b.tableRow)}getTableBodyHtmlTable(){return this.artTable.querySelector(`.${W.b.tableBody} table`)}getLeftLockShadow(){const e=`:scope > .${W.b.lockShadowMask} .${W.b.leftLockShadow}`;return this.artTable.querySelector(e)}getRightLockShadow(){const e=`:scope > .${W.b.lockShadowMask} .${W.b.rightLockShadow}`;return this.artTable.querySelector(e)}getLoadingIndicator(){return this.artTableWrapper.querySelector("."+W.b.loadingIndicator)}}var K=r(356),A=r(378),G=r(781);function J(e){return e===window?{left:0,top:0,bottom:window.innerHeight,right:window.innerWidth}:e.getBoundingClientRect()}function Z(e){return e===window?Object(j.a)(e,"resize"):new A.a(t=>{const r=new K.a(()=>{t.next()});return r.observe(e),()=>{r.disconnect()}})}function Q(e,t){return Object(G.a)(Object(j.a)(t,"scroll",{passive:!0}),Z(t),Z(e)).pipe(f.a(()=>function(e,t){const r=J(e),a=J(t);return{offsetY:Math.max(0,a.top-r.top),offsetX:Math.max(0,a.left-r.left),clipRect:{left:Math.max(r.left,a.left),top:Math.max(r.top,a.top),right:Math.min(r.right,a.right),bottom:Math.min(r.bottom,a.bottom)}}}(e,t)))}var ee=r(152),te=r(184);function re({tbodyHtmlTag:e,getRowProps:t,primaryKey:r,data:a,verticalRenderInfo:n,horizontalRenderInfo:i}){const{flat:s,horizontalRenderRange:c}=i,d=new te.a,h=s.full.length,u=s.left.length,b=s.right.length;return l.a.createElement("table",null,l.a.createElement(N,{descriptors:i.visible}),l.a.createElement(e,null,a.map((function(e,a){const s=n.offset+a;d.stripUpwards(s);const f=t(e,s),p=o()(W.b.tableRow,{first:s===n.first,last:s===n.last,even:s%2==0,odd:s%2==1},null==f?void 0:f.className);return l.a.createElement("tr",Object.assign({},f,{className:p,key:ee.a.safeGetRowKey(r,e,s),"data-rowindex":s}),i.visible.map(t=>"blank"===t.type?l.a.createElement("td",{key:t.blankSide}):function(e,t,r,a){var s,f;if(d.testSkip(t,a))return null;const p=ee.a.safeGetValue(r,e,t),m=null!==(s=null===(f=r.getCellProps)||void 0===f?void 0:f.call(r,p,e,t))&&void 0!==s?s:{};let g=p;r.render&&(g=r.render(p,e,t));let y=1,k=1;if(r.getSpanRect){const o=r.getSpanRect(p,e,t);y=null==o?1:o.right-a,k=null==o?1:o.bottom-t}else null!=m.colSpan&&(y=m.colSpan),null!=m.rowSpan&&(k=m.rowSpan);k=Math.min(k,n.limit-t),y=Math.min(y,u+c.rightIndex-a);const v=y>1||k>1;v&&d.add(t,a,y,k);const w={};a<u?(w.position="sticky",w.left=i.stickyLeftMap.get(a)):a>=h-b&&(w.position="sticky",w.right=i.stickyRightMap.get(a));return l.a.createElement("td",{key:a,...m,className:o()(W.b.tableCell,m.className,{first:0===a,last:a+y===h,"lock-left":a<u,"lock-right":a>=h-b}),...v?{colSpan:y,rowSpan:k}:null,style:{textAlign:r.align,...m.style,...w}},g)}(e,s,t.col,t.colIndex)))}))))}var ae=r(178);let oe=!1;class ne extends l.a.Component{constructor(e){super(e),Object.defineProperty(this,"rowHeightManager",{enumerable:!0,configurable:!0,writable:!0,value:U(this.props.dataSource.length,this.props.estimatedRowHeight)}),Object.defineProperty(this,"artTableWrapperRef",{enumerable:!0,configurable:!0,writable:!0,value:l.a.createRef()}),Object.defineProperty(this,"domHelper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rootSubscription",{enumerable:!0,configurable:!0,writable:!0,value:new i.a}),Object.defineProperty(this,"lastInfo",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"props$",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.state={hasScroll:!0,needRenderLock:!0,offsetY:0,offsetX:0,maxRenderHeight:600,maxRenderWidth:800}}getDoms(){return console.warn("[ali-react-table] BaseTable.getDoms() \u5df2\u7ecf\u8fc7\u65f6"),this.domHelper}updateStickyScroll(){const{stickyScroll:e,artTable:t,stickyScrollItem:r}=this.domHelper;if(!t)return;const a=this.domHelper.getTableBodyHtmlTable().offsetWidth,o=t.offsetWidth,n=this.props.stickyScrollHeight,l="auto"===n?(null==L&&(L=new s.a(z()),H.pipe(Object(f.a)(()=>z())).subscribe(L)),L.value).height:n;e.style.marginTop=`-${l+1}px`,o>=a?this.state.hasScroll&&this.setState({hasScroll:!1}):!this.state.hasScroll&&l>5&&this.setState({hasScroll:!0}),r.style.width=a+"px"}renderTableHeader(e){const{stickyTop:t,hasHeader:r}=this.props;return l.a.createElement("div",{className:o()(W.b.tableHeader,"no-scrollbar"),style:{top:0===t?void 0:t,display:r?void 0:"none"}},l.a.createElement(q,{info:e}))}updateOffsetX(e){this.lastInfo.useVirtual.horizontal&&Math.abs(e-this.state.offsetX)>=50&&this.setState({offsetX:e})}syncHorizontalScrollFromTableBody(){this.syncHorizontalScroll(this.domHelper.tableBody.scrollLeft)}syncHorizontalScroll(e){this.updateOffsetX(e);const{tableBody:t}=this.domHelper,{flat:r}=this.lastInfo,a=this.domHelper.getLeftLockShadow();if(a){r.left.length>0&&this.state.needRenderLock&&e>0?a.classList.add("show-shadow"):a.classList.remove("show-shadow")}const o=this.domHelper.getRightLockShadow();if(o){r.right.length>0&&this.state.needRenderLock&&e<t.scrollWidth-t.clientWidth?o.classList.add("show-shadow"):o.classList.remove("show-shadow")}}getVerticalRenderRange(e){const{dataSource:t}=this.props,{offsetY:r,maxRenderHeight:a}=this.state,o=t.length;return e.vertical?this.rowHeightManager.getRenderRange(r,a,o):function(e){return{topIndex:0,topBlank:0,bottomIndex:e,bottomBlank:0}}(o)}renderTableBody(e){const{dataSource:t,getRowProps:r,primaryKey:a,isLoading:n,emptyCellHeight:i,footerDataSource:s}=this.props,c=o()(W.b.tableBody,W.b.horizontalScrollContainer,{"no-scrollbar":s.length>0});if(0===t.length){const{components:t,emptyContent:r}=this.props;let a=t.EmptyContent;return null==a&&null!=r&&(oe||(oe=!0,console.warn("[ali-react-table] BaseTable props.emptyContent \u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u4f7f\u7528 props.components.EmptyContent \u6765\u81ea\u5b9a\u4e49\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u8868\u683c\u8868\u73b0")),a=()=>r),l.a.createElement("div",{className:c},l.a.createElement(P,{descriptors:e.visible,isLoading:n,EmptyContent:a,emptyCellHeight:i}))}const{topIndex:d,bottomBlank:h,topBlank:u,bottomIndex:b}=e.verticalRenderRange;return l.a.createElement("div",{className:c},u>0&&l.a.createElement("div",{key:"top-blank",className:o()(W.b.virtualBlank,"top"),style:{height:u}}),l.a.createElement(re,{tbodyHtmlTag:"tbody",getRowProps:r,primaryKey:a,data:t.slice(d,b),horizontalRenderInfo:e,verticalRenderInfo:{first:0,offset:d,limit:b,last:t.length-1}}),h>0&&l.a.createElement("div",{key:"bottom-blank",className:o()(W.b.virtualBlank,"bottom"),style:{height:h}}))}renderTableFooter(e){const{footerDataSource:t=[],getRowProps:r,primaryKey:a,stickyBottom:n}=this.props;return l.a.createElement("div",{className:o()(W.b.tableFooter,W.b.horizontalScrollContainer),style:{bottom:0===n?void 0:n}},l.a.createElement(re,{tbodyHtmlTag:"tfoot",data:t,horizontalRenderInfo:e,getRowProps:r,primaryKey:a,verticalRenderInfo:{offset:0,first:0,last:t.length-1,limit:1/0}}))}renderLockShadows(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:W.b.lockShadowMask,style:{left:0,width:e.leftLockTotalWidth+W.c}},l.a.createElement("div",{className:o()(W.b.lockShadow,W.b.leftLockShadow)})),l.a.createElement("div",{className:W.b.lockShadowMask,style:{right:0,width:e.rightLockTotalWidth+W.c}},l.a.createElement("div",{className:o()(W.b.lockShadow,W.b.rightLockShadow)})))}renderStickyScroll(e){const{hasStickyScroll:t,stickyBottom:r}=this.props,{hasScroll:a}=this.state;return l.a.createElement("div",{className:o()(W.b.stickyScroll,W.b.horizontalScrollContainer),style:{display:t&&a?"block":"none",bottom:r}},l.a.createElement("div",{className:W.b.stickyScrollItem}))}render(){const e=C(this);this.lastInfo=e;const{dataSource:t,className:r,style:a,hasHeader:n,useOuterBorder:i,isStickyHead:s,isStickyHeader:c,isStickyFooter:d,isLoading:h,footerDataSource:u,components:b}=this.props,f={className:o()(W.b.artTableWrapper,{"use-outer-border":i,empty:0===t.length,lock:e.hasLockColumn,"has-header":n,"sticky-header":null!=c?c:s,"has-footer":u.length>0,"sticky-footer":d},r),style:a,[R]:this.artTableWrapperRef};return l.a.createElement(W.d,Object.assign({},f),l.a.createElement(ae.b,{visible:h,LoadingIcon:b.LoadingIcon,LoadingContentWrapper:b.LoadingContentWrapper},l.a.createElement("div",{className:W.b.artTable},this.renderTableHeader(e),this.renderTableBody(e),this.renderTableFooter(e),this.renderLockShadows(e)),this.renderStickyScroll(e)))}componentDidMount(){this.updateDOMHelper(),this.props$=new s.a(this.props),this.initSubscriptions(),this.didMountOrUpdate()}componentDidUpdate(e,t){this.updateDOMHelper(),this.props$.next(this.props),this.didMountOrUpdate(e,t)}didMountOrUpdate(e,t){this.syncHorizontalScrollFromTableBody(),this.updateStickyScroll(),this.adjustNeedRenderLock(),this.updateRowHeightManager(),this.updateScrollLeftWhenLayoutChanged(e,t)}updateScrollLeftWhenLayoutChanged(e,t){if(null!=t&&!t.hasScroll&&this.state.hasScroll&&(this.domHelper.stickyScroll.scrollLeft=0),null!=e){const t=e.footerDataSource.length>0,r=this.props.footerDataSource.length>0;!t&&r&&(this.domHelper.tableFooter.scrollLeft=this.domHelper.tableBody.scrollLeft)}}initSubscriptions(){const{tableHeader:e,tableBody:t,tableFooter:r,stickyScroll:a}=this.domHelper;this.rootSubscription.add(H.subscribe(()=>{this.updateStickyScroll(),this.adjustNeedRenderLock()})),this.rootSubscription.add(function(e,t){const r=new Set;function a(t,a){r.clear();for(const o of e)o!==t&&(o.scrollLeft=a,r.add(o))}const o=new i.a;for(const n of e){const e=()=>{if(r.has(n))return void r.delete(n);const e=n.scrollLeft;a(n,e),t(e)};n.addEventListener("scroll",e,{passive:!0}),o.add(()=>n.removeEventListener("scroll",e))}return o}([e,t,r,a],e=>{this.syncHorizontalScroll(e)}));const o=this.props$.pipe(f.a(e=>e.flowRoot),p.a(e=>{const t=this.artTableWrapperRef.current;if("auto"===e){const e=getComputedStyle(t);return Object(c.a)("visible"!==e.overflowY?t:window)}return"self"===e?Object(c.a)(t):"function"==typeof e?Object(d.a)(0,h.a).pipe(f.a(e)):Object(c.a)(e)}),m.a()).pipe(p.a(e=>Q(this.domHelper.artTable,e)));this.rootSubscription.add(Object(u.a)([o.pipe(f.a(e=>e.clipRect),m.a(O)),this.props$.pipe(g.a(),y.a(([e,t])=>!(null!=e&&e.isLoading)&&t.isLoading))]).subscribe(([e])=>{const t=this.domHelper.getLoadingIndicator();if(!t)return;const r=e.bottom-e.top;t.style.top=r/2+"px",t.style.marginTop=r/2+"px"})),this.rootSubscription.add(o.pipe(y.a(()=>{const{horizontal:e,vertical:t}=this.lastInfo.useVirtual;return e||t}),f.a(({clipRect:e,offsetY:t})=>({maxRenderHeight:e.bottom-e.top,maxRenderWidth:e.right-e.left,offsetY:t})),m.a((e,t)=>Math.abs(e.maxRenderWidth-t.maxRenderWidth)<50&&Math.abs(e.maxRenderHeight-t.maxRenderHeight)<50&&Math.abs(e.offsetY-t.offsetY)<50)).subscribe(e=>{this.setState(e)}))}componentWillUnmount(){this.rootSubscription.unsubscribe()}updateDOMHelper(){this.domHelper=new X(this.artTableWrapperRef.current)}updateRowHeightManager(){var e;const t=this.domHelper.getVirtualTop(),r=null!==(e=null==t?void 0:t.clientHeight)&&void 0!==e?e:0;let a=-1,o=-1;for(const n of this.domHelper.getTableRows()){const e=Number(n.dataset.rowindex);if(isNaN(e))continue;a=Math.max(a,e);const t=n.offsetTop+r,l=n.offsetHeight;o=Math.max(o,t+l),this.rowHeightManager.updateRow(e,t,l)}if(-1!==a&&o<this.state.offsetY+this.state.maxRenderHeight){this.getVerticalRenderRange(this.lastInfo.useVirtual).bottomIndex-1>a&&this.forceUpdate()}}adjustNeedRenderLock(){const{needRenderLock:e}=this.state,{flat:t,hasLockColumn:r}=this.lastInfo;if(r){const r=E(t.full.map(e=>e.width))>this.domHelper.artTable.clientWidth;e!==r&&this.setState({needRenderLock:r})}else e&&this.setState({needRenderLock:!1})}}Object.defineProperty(ne,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{hasHeader:!0,isStickyHeader:!0,stickyTop:0,footerDataSource:[],isStickyFooter:!0,stickyBottom:0,hasStickyScroll:!0,stickyScrollHeight:"auto",useVirtual:"auto",estimatedRowHeight:48,isLoading:!1,components:{},getRowProps:b.a,flowRoot:"auto",dataSource:[]}})},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(158);function o(e){let t=-1;return function e(r,o){for(const n of r)Object(a.a)(n)?t=Math.max(t,o):e(n.children,o+1)}(e,0),t}},342:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(158);function o(e,t="pre"){const r=[];return function e(o){if(null==o)return;for(const n of o)Object(a.a)(n)?r.push(n):"pre"===t?(r.push(n),e(n.children)):"post"===t?(e(n.children),r.push(n)):e(n.children)}(e),r}},352:function(e,t,r){"use strict";var a=r(0),o=r.n(a),n=r(10);t.a=function({children:e,fallback:t}){return n.a.canUseDOM&&null!=e?o.a.createElement(o.a.Fragment,null,e()):t||null}},355:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(159),o=r(175),n=r(352),l=r(0),i=r.n(l),s=r(2);function c({exampleName:e}){return i.a.createElement("div",{style:{marginTop:16}},i.a.createElement("p",null,"\u65e0\u6cd5\u627e\u5230\u540d\u4e3a ",i.a.createElement("b",null,e)," \u7684\u793a\u4f8b"))}function d({stories:e,path:t}){var r,n;const l=Object(s.l)(),d=Object(s.k)(),h=Object.keys(e).filter(e=>"default"!==e),u=new URLSearchParams(l.search),b=null!==(r=u.get("example"))&&void 0!==r?r:h[0],f=h.indexOf(b),p=null!==(n=e[b])&&void 0!==n?n:c,m=e=>{u.set("example",e),d.replace({search:String(u)})},g=()=>t?i.a.createElement(a.a,{component:"a",href:String(new URL(t,"https://github.com/alibaba/ali-react-table/blob/master/packages/website/examples/"))},"\u67e5\u770b\u6e90\u7801"):null;return i.a.createElement(i.a.Fragment,null,h.length>1?i.a.createElement("div",{style:{marginBottom:16,display:"flex",alignItems:"center",flexWrap:"wrap"}},i.a.createElement("span",null,"\u793a\u4f8b\uff08",f+1," / ",h.length,"\uff09\uff1a"),i.a.createElement(o.a,{style:{marginLeft:8,width:200},dataSource:h,value:b,onChange:m}),i.a.createElement(a.a.Group,{style:{marginLeft:8}},i.a.createElement(a.a,{onClick:()=>{-1===f?m(h[0]):-1!==f&&f>0&&m(h[f-1])},disabled:0===f},"\u4e0a\u4e00\u4e2a"),i.a.createElement(a.a,{onClick:()=>{-1===f?m(h[0]):f<h.length-1&&m(h[f+1])},disabled:f===h.length-1},"\u4e0b\u4e00\u4e2a"),g())):i.a.createElement("div",{style:{marginBottom:t?16:0}},g()),i.a.createElement(p,{exampleName:b}))}function h(e){return i.a.createElement(n.a,{fallback:"\u793a\u4f8b\u8f7d\u5165\u4e2d..."},()=>i.a.createElement(d,Object.assign({},e)))}},384:function(e,t,r){var a={"./af":192,"./af.js":192,"./ar":193,"./ar-dz":194,"./ar-dz.js":194,"./ar-kw":195,"./ar-kw.js":195,"./ar-ly":196,"./ar-ly.js":196,"./ar-ma":197,"./ar-ma.js":197,"./ar-sa":198,"./ar-sa.js":198,"./ar-tn":199,"./ar-tn.js":199,"./ar.js":193,"./az":200,"./az.js":200,"./be":201,"./be.js":201,"./bg":202,"./bg.js":202,"./bm":203,"./bm.js":203,"./bn":204,"./bn-bd":205,"./bn-bd.js":205,"./bn.js":204,"./bo":206,"./bo.js":206,"./br":207,"./br.js":207,"./bs":208,"./bs.js":208,"./ca":209,"./ca.js":209,"./cs":210,"./cs.js":210,"./cv":211,"./cv.js":211,"./cy":212,"./cy.js":212,"./da":213,"./da.js":213,"./de":214,"./de-at":215,"./de-at.js":215,"./de-ch":216,"./de-ch.js":216,"./de.js":214,"./dv":217,"./dv.js":217,"./el":218,"./el.js":218,"./en-au":219,"./en-au.js":219,"./en-ca":220,"./en-ca.js":220,"./en-gb":221,"./en-gb.js":221,"./en-ie":222,"./en-ie.js":222,"./en-il":223,"./en-il.js":223,"./en-in":224,"./en-in.js":224,"./en-nz":225,"./en-nz.js":225,"./en-sg":226,"./en-sg.js":226,"./eo":227,"./eo.js":227,"./es":228,"./es-do":229,"./es-do.js":229,"./es-mx":230,"./es-mx.js":230,"./es-us":231,"./es-us.js":231,"./es.js":228,"./et":232,"./et.js":232,"./eu":233,"./eu.js":233,"./fa":234,"./fa.js":234,"./fi":235,"./fi.js":235,"./fil":236,"./fil.js":236,"./fo":237,"./fo.js":237,"./fr":238,"./fr-ca":239,"./fr-ca.js":239,"./fr-ch":240,"./fr-ch.js":240,"./fr.js":238,"./fy":241,"./fy.js":241,"./ga":242,"./ga.js":242,"./gd":243,"./gd.js":243,"./gl":244,"./gl.js":244,"./gom-deva":245,"./gom-deva.js":245,"./gom-latn":246,"./gom-latn.js":246,"./gu":247,"./gu.js":247,"./he":248,"./he.js":248,"./hi":249,"./hi.js":249,"./hr":250,"./hr.js":250,"./hu":251,"./hu.js":251,"./hy-am":252,"./hy-am.js":252,"./id":253,"./id.js":253,"./is":254,"./is.js":254,"./it":255,"./it-ch":256,"./it-ch.js":256,"./it.js":255,"./ja":257,"./ja.js":257,"./jv":258,"./jv.js":258,"./ka":259,"./ka.js":259,"./kk":260,"./kk.js":260,"./km":261,"./km.js":261,"./kn":262,"./kn.js":262,"./ko":263,"./ko.js":263,"./ku":264,"./ku.js":264,"./ky":265,"./ky.js":265,"./lb":266,"./lb.js":266,"./lo":267,"./lo.js":267,"./lt":268,"./lt.js":268,"./lv":269,"./lv.js":269,"./me":270,"./me.js":270,"./mi":271,"./mi.js":271,"./mk":272,"./mk.js":272,"./ml":273,"./ml.js":273,"./mn":274,"./mn.js":274,"./mr":275,"./mr.js":275,"./ms":276,"./ms-my":277,"./ms-my.js":277,"./ms.js":276,"./mt":278,"./mt.js":278,"./my":279,"./my.js":279,"./nb":280,"./nb.js":280,"./ne":281,"./ne.js":281,"./nl":282,"./nl-be":283,"./nl-be.js":283,"./nl.js":282,"./nn":284,"./nn.js":284,"./oc-lnc":285,"./oc-lnc.js":285,"./pa-in":286,"./pa-in.js":286,"./pl":287,"./pl.js":287,"./pt":288,"./pt-br":289,"./pt-br.js":289,"./pt.js":288,"./ro":290,"./ro.js":290,"./ru":291,"./ru.js":291,"./sd":292,"./sd.js":292,"./se":293,"./se.js":293,"./si":294,"./si.js":294,"./sk":295,"./sk.js":295,"./sl":296,"./sl.js":296,"./sq":297,"./sq.js":297,"./sr":298,"./sr-cyrl":299,"./sr-cyrl.js":299,"./sr.js":298,"./ss":300,"./ss.js":300,"./sv":301,"./sv.js":301,"./sw":302,"./sw.js":302,"./ta":303,"./ta.js":303,"./te":304,"./te.js":304,"./tet":305,"./tet.js":305,"./tg":306,"./tg.js":306,"./th":307,"./th.js":307,"./tk":308,"./tk.js":308,"./tl-ph":309,"./tl-ph.js":309,"./tlh":310,"./tlh.js":310,"./tr":311,"./tr.js":311,"./tzl":312,"./tzl.js":312,"./tzm":313,"./tzm-latn":314,"./tzm-latn.js":314,"./tzm.js":313,"./ug-cn":315,"./ug-cn.js":315,"./uk":316,"./uk.js":316,"./ur":317,"./ur.js":317,"./uz":318,"./uz-latn":319,"./uz-latn.js":319,"./uz.js":318,"./vi":320,"./vi.js":320,"./x-pseudo":321,"./x-pseudo.js":321,"./yo":322,"./yo.js":322,"./zh-cn":323,"./zh-cn.js":323,"./zh-hk":324,"./zh-hk.js":324,"./zh-mo":325,"./zh-mo.js":325,"./zh-tw":326,"./zh-tw.js":326};function o(e){var t=n(e);return r(t)}function n(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=n,e.exports=o,o.id=384}}]);