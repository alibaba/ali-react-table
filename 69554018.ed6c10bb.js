(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return w})),n.d(t,"metadata",(function(){return x})),n.d(t,"rightToc",(function(){return S})),n.d(t,"default",(function(){return O}));var r={};n.r(r),n.d(r,"default",(function(){return g})),n.d(r,"\u5178\u578b\u6570\u636e\u62a5\u8868",(function(){return k}));var a=n(2),o=n(6),l=n(0),i=n.n(l),s=n(146),c=n(381),d=n(186),u=n(147),h=n(327),p=n(340),f=n(185),b=n(181),m=n(578),g={title:"\u4e1a\u52a1\u793a\u4f8b / \u5178\u578b\u6570\u636e\u62a5\u8868"};const y=e=>Number(e).toFixed(2),v=e=>(100*Number(e)).toFixed(2)+"%";function k(){const e=[{name:"APP\u6307\u6807",code:"app_qty_pbt",render:String,children:[{code:"imp_uv_dau_pct",name:"\u66dd\u5149UV\u5360DAU\u6bd4\u4f8b",render:v},{code:"all_app_trd_amt_1d",name:"APP\u6210\u4ea4\u91d1\u989d\u6c47\u603b",render:(e,t,n)=>y(e),getCellProps(e,t,n){if(e>30)return{style:{color:"red"}}}},{code:"app_trd_usr_cnt_1d",name:"APP\u6210\u4ea4\u7528\u6237\u6570",render:y}]},{name:"\u8f6c\u6362\u7387",code:"all_imp2pay_rate",render:v,children:[{code:"all_imp2pay_rate",name:"\u6574\u4f53\u66dd\u5149\u81f3\u6210\u4ea4\u8f6c\u5316\u7387",render:v},{code:"search_imp2pay_rate",name:"\u641c\u7d22\u66dd\u5149\u81f3\u6210\u4ea4\u8f6c\u5316\u7387",render:v},{code:"classis_imp2pay_rate",name:"\u5206\u7c7b\u66dd\u5149\u81f3\u6210\u4ea4\u8f6c\u5316\u7387",render:v},{code:"cart_imp2pay_rate",name:"\u8d2d\u7269\u8f66\u66dd\u5149\u81f3\u6210\u4ea4\u8f6c\u5316\u7387",render:v}]}],t={name:"\u6307\u6807",width:200,lock:!0,render:(e,t,n)=>t.name},[n,r]=Object(l.useState)({isLoading:!0,columns:[]});Object(l.useEffect)((()=>{Object(f.getAppTrafficData)().then((e=>{const t=["city_name","shop_name"],n=Object(h.b)(e,t),a=g(Object(p.b)({data:e,codes:t}),n);r({isLoading:!1,columns:a})}))}),[]);const[a,o]=Object(l.useState)(["APP\u6307\u6807","\u8f6c\u6362\u7387"]),s=Object(c.a)({columns:[t,...n.columns],dataSource:e},Object(d.b)({primaryKey:"name",openKeys:a,onChangeOpenKeys:o,indentSize:20}));return i.a.createElement(b.a,{dataSource:s.dataSource,columns:s.columns,isLoading:n.isLoading});function g(e,t){const n=[];for(const r of t)n.push({name:r.value,code:r.key,render(t,{code:n,render:a}){const o=e.get(r.key);return(null!=a?a:m.a)(null==o?void 0:o[n])},getCellProps(t,{code:n,getCellProps:a}){const o=e.get(r.key);if(null!=a)return a(null==o?void 0:o[n])},width:150,children:Object(u.a)(r)?null:g(e,r.children)});return n}}var j=n(354),w={id:"data-report",title:"\u5178\u578b\u6570\u636e\u62a5\u8868",hide_table_of_contents:!0,hide_title:!0},x={unversionedId:"biz/data-report",id:"biz/data-report",isDocsHomePage:!1,title:"\u5178\u578b\u6570\u636e\u62a5\u8868",source:"@site/examples/biz/data-report.mdx",slug:"/biz/data-report",permalink:"/examples/biz/data-report",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/examples/biz/data-report.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u8868\u683c\u4e3b\u9898\u5207\u6362",permalink:"/examples/theme"},next:{title:"\u5546\u54c1\u6392\u884c\u699c",permalink:"/examples/biz/rank-table"}},S=[],E={rightToc:S};function O(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},E,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)(j.a,{stories:r,path:"biz/data-report.stories.tsx",mdxType:"Stories"}))}O.isMDXComponent=!0},144:function(e,t,n){"use strict";function r(e,t,n){return e.getValue?e.getValue(t,n):t[e.code]}n.d(t,"a",(function(){return a}));const a={safeRenderHeader:function(e){var t;return null!==(t=e.title)&&void 0!==t?t:e.name},safeGetValue:r,safeGetRowKey:function(e,t,n){let r;return"string"==typeof e?r=t[e]:"function"==typeof e&&(r=e(t)),null==r&&(r=String(n)),r},safeGetCellProps:function(e,t,n){if(e.getCellProps){const a=r(e,t,n);return e.getCellProps(a,t,n)||{}}return{}},safeRender:function(e,t,n){const a=r(e,t,n);return e.render?e.render(a,t,n):a}}},147:function(e,t,n){"use strict";function r(e){return null==e.children||0===e.children.length}n.d(t,"a",(function(){return r}))},148:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u}));var r=n(141);const a=20,o={artTableWrapper:"art-table-wrapper",artTable:"art-table",tableHeader:"art-table-header",tableBody:"art-table-body",tableRow:"art-table-row",tableHeaderRow:"art-table-header-row",tableCell:"art-table-cell",tableHeaderCell:"art-table-header-cell",virtualBlank:"art-virtual-blank",stickyScroll:"art-sticky-scroll",stickyScrollItem:"art-sticky-scroll-item",lockShadowMask:"art-lock-shadow-mask",lockShadow:"art-lock-shadow",leftLockShadow:"art-left-lock-shadow",rightLockShadow:"art-right-lock-shadow",emptyWrapper:"art-empty-wrapper",loadingWrapper:"art-loading-wrapper",loadingIndicatorWrapper:"art-loading-indicator-wrapper",loadingIndicator:"art-loading-indicator"},l=5,i=10,s=20,c=30,d=40,u=r.b.div`
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
  .${o.lockShadowMask} {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: ${s};
    pointer-events: none;
    overflow: hidden;

    .${o.lockShadow} {
      height: 100%;
    }

    .${o.leftLockShadow} {
      margin-right: ${a}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-right: var(--cell-border-vertical);
      }
    }

    .${o.rightLockShadow} {
      margin-left: ${a}px;
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
`},150:function(e,t,n){"use strict";function r(e,t){const n=[];return e.forEach(((r,a)=>{n.push(...t(r,a,e))})),n}function a(e){const t={};for(const[n,r]of e)t[n]=r;return t}n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));const o={diff(e,t){const n=new Set(t);return e.filter((e=>!n.has(e)))},merge(e,t){const n=new Set(e);return e.concat(t.filter((e=>!n.has(e))))}};function l(e){return(...t)=>e}},155:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s}));var r=n(0),a=n.n(r),o=n(141);const l=o.b.div`
  display: inline-flex;
  align-items: center;
`,i=Object(o.b)(l)`
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
`;const s={Loading:function(e){return a.a.createElement("svg",Object.assign({width:"16",height:"16",fill:"currentColor",viewBox:"0 0 1024 1024"},e),a.a.createElement("path",{d:"M512 74.667c-17.067 0-32 14.933-32 32V256c0 17.067 14.933 32 32 32s32-14.933 32-32V106.667c0-17.067-14.933-32-32-32zm181.333 288c8.534 0 17.067-2.134 23.467-8.534L821.333 249.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L672 309.333c-12.8 12.8-12.8 32 0 44.8 4.267 6.4 12.8 8.534 21.333 8.534zm224 117.333H768c-17.067 0-32 14.933-32 32s14.933 32 32 32h149.333c17.067 0 32-14.933 32-32s-14.933-32-32-32zM714.667 669.867c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8L774.4 819.2c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L714.667 669.867zM512 736c-17.067 0-32 14.933-32 32v149.333c0 17.067 14.933 32 32 32s32-14.933 32-32V768c0-17.067-14.933-32-32-32zm-202.667-66.133L204.8 774.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l104.534-104.533c12.8-12.8 12.8-32 0-44.8s-36.267-12.8-46.934 0zM288 512c0-17.067-14.933-32-32-32H106.667c-17.067 0-32 14.933-32 32s14.933 32 32 32H256c17.067 0 32-14.933 32-32zm-40.533-309.333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L307.2 352c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L247.467 202.667z"}))},CaretDown:function(e){return a.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),a.a.createElement("path",{d:"M24 12L16 22 8 12z"}))},CaretRight:function(e){return a.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),a.a.createElement("path",{d:"M12 8L22 16 12 24z"}))},Info:function(e){return a.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 16 16"},e),a.a.createElement("path",{d:"M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"}),a.a.createElement("path",{d:"M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"}))}}},170:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),o=n(148);const l=a.a.memo((()=>a.a.createElement("svg",{style:{margin:"auto",display:"block",width:40,height:40},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},a.a.createElement("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#23a7fa",strokeDasharray:"188 64",strokeLinecap:"round",strokeWidth:"10"},a.a.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})))));function i({children:e,visible:t}){return a.a.createElement("div",{className:"art-loading-content-wrapper",style:{filter:t?"blur(1px)":"none"}},e)}function s({visible:e,children:t,LoadingContentWrapper:n=i,LoadingIcon:r=l}){return a.a.createElement("div",{className:o.b.loadingWrapper},e&&a.a.createElement("div",{className:o.b.loadingIndicatorWrapper},a.a.createElement("div",{className:o.b.loadingIndicator},a.a.createElement(r,null))),a.a.createElement(n,{visible:e,children:t}))}},175:function(e,t,n){"use strict";function r(e){return 0===e.length?"key:@total@":"key:"+e.join(" ")}n.d(t,"a",(function(){return r}))},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(){Object.defineProperty(this,"rects",{enumerable:!0,configurable:!0,writable:!0,value:[]})}testSkip(e,t){return this.rects.some((({left:n,right:r,top:a,bottom:o})=>n<=t&&t<r&&a<=e&&e<o))}stripUpwards(e){this.rects=this.rects.filter((t=>t.bottom>e))}add(e,t,n,r){this.rects.push({left:t,right:t+n,top:e,bottom:e+r})}}},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(172),a=n(182),o=n(0),l=n.n(o),i=n(141);const s=Object(i.b)(a.a)`
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
`,c=l.a.forwardRef(((e,t)=>{const{isDarkTheme:n}=Object(r.a)(),o=n?s:a.a;return l.a.createElement(o,Object.assign({ref:t},e))}))},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return re}));var r=n(131),a=n.n(r),o=n(0),l=n.n(o),i=n(463),s=n(721),c=n(715),d=n(726),u=n(723),h=n(722),p=n(718),f=n(548),b=n(714),m=n(716),g=n(717),y=n(144),v=n(148);const k=l.a.memo((()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{alt:"empty-image",className:"empty-image",src:"//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"}),l.a.createElement("div",{className:"empty-tips"},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",l.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2"))));function j({colgroup:e,colSpan:t,isLoading:n,emptyCellHeight:r,EmptyContent:o=k}){const i=!n;return l.a.createElement("table",null,e,l.a.createElement("tbody",null,l.a.createElement("tr",{className:a()(v.b.tableRow,"first","last","no-hover"),"data-rowindex":0},l.a.createElement("td",{className:a()(v.b.tableCell,"first","last"),colSpan:t,style:{height:null!=r?r:200}},i&&l.a.createElement("div",{className:v.b.emptyWrapper},l.a.createElement(o,null))))))}var w=n(147),x=n(322),S=n(725),E=n(713),O=n(582),z=n(727);const R="v3"===(null!=n(141).a?"v5":"v3")?"innerRef":"ref",L=100;function C(e){let t=0;return e.forEach((e=>{t+=e})),t}const M=Object(S.a)((()=>Object(E.a)(window,"resize").pipe(Object(z.a)(150,O.b,{leading:!0,trailing:!0}))));function I(){const e=document.createElement("div");e.style.position="absolute",e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.top="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{width:t,height:n}}let B;function H(e,t){return null==e?void 0:e.querySelector("."+t)}function N(e,t){const n=Object.prototype.hasOwnProperty;if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let o=0;o<r.length;o++)if(!n.call(t,r[o])||!Object.is(e[r[o]],t[r[o]]))return!1;return!0}function T(e,t){return null==e||"auto"===e?t:e}let W=!1;function P(e){W||(W=!0,console.warn("[ali-react-table] column.hidden \u5df2\u7ecf\u8fc7\u65f6\uff0c\u5982\u679c\u9700\u8981\u9690\u85cf\u8be5\u5217\uff0c\u8bf7\u5c06\u5176\u4ece columns \u6570\u7ec4\u4e2d\u79fb\u9664",e))}function _(e){let t=0;for(const r of e){if(!n(r))break;t+=1}return t;function n(e){return Object(w.a)(e)?e.lock:e.lock||e.children.some(n)}}function $(e,t){const{useVirtual:n,columns:r,dataSource:a,defaultColumnWidth:o}=e,l=function(e,t){return null!=e&&Array.isArray(e)||(console.warn("[ali-react-table] <BaseTable /> props.columns \u9700\u8981\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4",e),e=[]),function e(n){const r=[];for(let a of n)if(null==a.width&&null!=t&&(a={...a,width:t}),Object(w.a)(a))a.hidden?P(a):r.push(a);else{const t=e(a.children);t.length>0&&r.push({...a,children:t})}return r}(e)}(r,o),i=_(l),s=Object(x.a)(l,"leaf-only");if(i===l.length)return{flat:{left:[],right:[],full:s,center:s},nested:{left:[],right:[],full:l,center:l},useVirtual:{horizontal:!1,vertical:!1,header:!1},stickyLeftMap:new Map,stickyRightMap:new Map};const c=l.slice(0,i),d=_(l.slice().reverse()),u=l.slice(i,l.length-d),h=l.slice(l.length-d),p=s.length>=100&&s.every((e=>null!=e.width)),f=a.length>=100,b="object"!=typeof n?{horizontal:T(n,p),vertical:T(n,f),header:T(n,!1)}:{horizontal:T(n.horizontal,p),vertical:T(n.vertical,f),header:T(n.header,f)},m={left:Object(x.a)(c,"leaf-only"),full:s,right:Object(x.a)(h,"leaf-only"),center:Object(x.a)(u,"leaf-only")},g=m.full.length,y=m.left.length,v=m.right.length,k=new Map;let j=0;for(let w=0;w<y;w++)k.set(w,j),j+=m.full[w].width;const S=new Map;let E=0;for(let w=0;w<v;w++)S.set(g-1-w,E),E+=m.full[g-1-w].width;return{flat:m,nested:{left:c,full:l,right:h,center:u},useVirtual:b,stickyLeftMap:k,stickyRightMap:S}}var V=n(323);function K(e){const t=[];for(let n=0;n<e;n++)t.push(n);return t}function D(e,t){const n=[];for(let a=0;a<t;a++)n.push([]);const r=[];return function e(t,a){let o=0;for(let l=0;l<t.length;l++){const i=t[l];if(Object(w.a)(i)){o+=1;const e={type:"normal",width:i.col.width,col:i.col,colIndex:i.colIndex,colSpan:1,isLeaf:!0};n[a].push(e),r.push(e)}else{const t=e(i.children,a+1);o+=t.leafCount,t.leafCount>0&&n[a].push({type:"normal",width:i.col.width,col:i.col,colIndex:i.colIndex,colSpan:t.leafCount,isLeaf:!1})}}return{leafCount:o}}(e,0),{flat:r,leveled:n}}function A(e,t){return function e(t,n){const r=[];let a=0;for(let o=0;o<t.length;o++){const l=t[o],i=n+a;if(Object(w.a)(l))a+=1,r.push({colIndex:i,col:l});else{const t=e(l.children,i);a+=t.leafCount,t.leafCount>0&&r.push({col:l,colIndex:i,children:t.result})}}return{result:r,leafCount:a}}(e,t).result}function U({flat:e,nested:t,hoz:n,useVirtual:r},a){if(r.header){const r=D(A(t.left,0),a),o=D(function(e,t,n){return function e(r,a){let o=0;const l=[];for(const i of r){const r=a+o;if(Object(w.a)(i))o+=1,n+t.leftIndex<=r&&r<n+t.rightIndex&&l.push({colIndex:r,col:i});else{const t=e(i.children,r);o+=t.leafCount,t.filtered.length>0&&l.push({colIndex:r,col:i,children:t.filtered})}}return{filtered:l,leafCount:o}}(e,n).filtered}(t.center,n,e.left.length),a),l=D(A(t.right,e.left.length+e.center.length),a);return{flat:[...r.flat,{type:"blank",width:n.leftBlank,blankSide:"left"},...o.flat,{type:"blank",width:n.rightBlank,blankSide:"right"},...l.flat],leveled:K(a).map((e=>[...r.leveled[e],{type:"blank",width:n.leftBlank,blankSide:"left"},...o.leveled[e],{type:"blank",width:n.rightBlank,blankSide:"right"},...l.leveled[e]]))}}return D(A(t.full,0),a)}function Y(e){const{nested:t,flat:n,stickyLeftMap:r,stickyRightMap:o}=e,i=Object(V.a)(t.full)+1,s=U(e,i),c=n.full.length,d=n.left.length,u=n.right.length,h=s.leveled.map(((e,t)=>{const n=e.map((e=>{if("normal"===e.type){var n,s;const{colIndex:h,colSpan:p,isLeaf:f,col:b}=e,m=null!==(n=b.headerCellProps)&&void 0!==n?n:{},g={};return h<d?(g.position="sticky",g.left=r.get(h)):h>=c-u&&(g.position="sticky",g.right=o.get(h)),l.a.createElement("th",Object.assign({key:h},m,{className:a()(v.b.tableHeaderCell,m.className,{first:0===h,last:h+p===c,"lock-left":h<d,"lock-right":h>=c-u}),colSpan:p,rowSpan:f?i-t:void 0,style:{textAlign:b.align,...m.style,...g}}),null!==(s=b.title)&&void 0!==s?s:b.name)}return e.width>0?l.a.createElement("th",{key:e.blankSide}):null}));return l.a.createElement("tr",{key:t,className:a()(v.b.tableHeaderRow,{first:0===t,last:t===i-1})},n)}));return l.a.createElement("table",null,l.a.createElement("colgroup",null,s.flat.map((e=>"blank"===e.type?e.width>0?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):null:l.a.createElement("col",{key:e.colIndex,style:{width:e.width}})))),l.a.createElement("thead",null,h))}function X(e,t){const n=new Array(e).fill(t);return{getRenderRange:function(e,r,a){return n.length!==a&&function(e){if(e<n.length)n.length=e;else{const r=n.length;n.length=e,n.fill(t,r)}}(a),r<=0?e<=0?function(){const e={topIndex:0,topBlank:0},t=l(0,e);return{...e,...t}}():function(){const e=i(a),t=o(e),n=l(e,t);return{...t,...n}}():function(){const t=o(e),n=l(e+r,t);return{...t,...n}}();function o(e){if(0===n.length)return{topIndex:0,topBlank:0};let t=0,r=0;for(;t<n.length;){const a=n[t];if(r+a>=e)break;r+=a,t+=1}return function(e,t){let r=0,a=0;for(;a<e&&r<L;)a+=1,r+=n[e-a];return{topIndex:e-a,topBlank:t-r}}(t,r)}function l(e,t){let r=t.topIndex,o=t.topBlank;for(;r<a&&o<e;)o+=n[r],r+=1;return function(e,t){let r=0,o=0;for(;o<a-e&&r<L;)r+=n[e+o],o+=1;return{bottomIndex:e+o,bottomBlank:t-r}}(r,i(a)-o)}function i(e){return C(n)+(e-n.length)*t}},updateRow:function(e,t,r){n[e]=r},cache:n}}var F=n(177),q=n(365),G=n(373),J=n(724);function Z(e){return e===window?{left:0,top:0,bottom:window.innerHeight,right:window.innerWidth}:e.getBoundingClientRect()}function Q(e){return e===window?Object(E.a)(e,"resize"):new G.a((t=>{const n=new q.a((()=>{t.next()}));return n.observe(e),()=>{n.disconnect()}}))}function ee(e,t){return Object(J.a)(Object(E.a)(t,"scroll"),Q(t),Q(e)).pipe(f.a((()=>function(e,t){const n=Z(e),r=Z(t);return{offsetY:Math.max(0,r.top-n.top),offsetX:Math.max(0,r.left-n.left),clipRect:{left:Math.max(n.left,r.left),top:Math.max(n.top,r.top),right:Math.min(n.right,r.right),bottom:Math.min(n.bottom,r.bottom)}}}(e,t))))}var te=n(170);let ne=!1;class re extends l.a.Component{constructor(e){super(e),Object.defineProperty(this,"rowHeightManager",{enumerable:!0,configurable:!0,writable:!0,value:X(this.props.dataSource.length,this.props.estimatedRowHeight)}),Object.defineProperty(this,"artTableWrapperRef",{enumerable:!0,configurable:!0,writable:!0,value:l.a.createRef()}),Object.defineProperty(this,"doms",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rootSubscription",{enumerable:!0,configurable:!0,writable:!0,value:new i.a}),Object.defineProperty(this,"data$",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.state={...$(e),hasScroll:!0,needRenderLock:!0,offsetY:0,offsetX:0,maxRenderHeight:600,maxRenderWidth:800}}getDoms(){return this.doms}updateStickyScroll(){const{stickyScroll:e,artTable:t,stickyScrollItem:n}=this.doms;if(!t)return;const r=t.querySelector(`.${v.b.tableBody} table`).offsetWidth,a=t.offsetWidth,o=(null==B&&(B=new s.a(I()),M.pipe(Object(f.a)((()=>I()))).subscribe(B)),B.value);e.style.marginTop=`-${o.height}px`,a>=r?this.state.hasScroll&&this.setState({hasScroll:!1}):!this.state.hasScroll&&o.height>5&&this.setState({hasScroll:!0}),n.style.width=r+"px"}renderTableHeader({horizontal:e}){const{stickyTop:t,hasHeader:n}=this.props,{flat:r,nested:o,useVirtual:i,stickyLeftMap:s,stickyRightMap:c}=this.state;return l.a.createElement("div",{className:a()(v.b.tableHeader,"no-scrollbar"),style:{top:0===t?void 0:t,display:n?void 0:"none"}},l.a.createElement(Y,{nested:o,flat:r,hoz:e,useVirtual:i,stickyLeftMap:s,stickyRightMap:c}))}updateOffsetX(e){this.state.useVirtual.horizontal&&Math.abs(e-this.state.offsetX)>=50&&this.setState({offsetX:e})}syncHorizontalScrollFromTableBody(){this.syncHorizontalScroll(this.doms.tableBody.scrollLeft)}syncHorizontalScroll(e){this.updateOffsetX(e);const{tableBody:t,artTableWrapper:n}=this.doms,{flat:r}=this.state,a=r.left.length>0&&this.state.needRenderLock&&e>0,o=H(n,v.b.leftLockShadow);a?o.classList.add("show-shadow"):o.classList.remove("show-shadow");const l=r.right.length>0&&this.state.needRenderLock&&e<t.scrollWidth-t.clientWidth,i=H(n,v.b.rightLockShadow);l?i.classList.add("show-shadow"):i.classList.remove("show-shadow")}getVerticalRenderRange(){const{dataSource:e}=this.props,{useVirtual:t,offsetY:n,maxRenderHeight:r}=this.state,a=e.length;return t.vertical?this.rowHeightManager.getRenderRange(n,r,a):function(e){return{topIndex:0,topBlank:0,bottomIndex:e,bottomBlank:0}}(a)}getHorizontalRenderRange(){const{offsetX:e,maxRenderWidth:t,useVirtual:n,flat:r}=this.state;if(!n.horizontal)return{leftIndex:0,leftBlank:0,rightIndex:r.full.length,rightBlank:0};let a=0,o=0,l=0,i=0;const s=Math.max(0,e-L);for(;a<r.center.length;){const e=r.center[a];if(!(e.width+l<s))break;a+=1,l+=e.width}const c=t+(s-l)+200;for(;a+o<r.center.length;){const e=r.center[a+o];if(!(e.width+i<c))break;i+=e.width,o+=1}const d=r.center.length-a-o;return{leftIndex:a,leftBlank:l,rightIndex:a+o,rightBlank:C(r.center.slice(r.center.length-d).map((e=>e.width)))}}getRenderRange(){return{vertical:this.getVerticalRenderRange(),horizontal:this.getHorizontalRenderRange()}}getFlatHozWrappedCols(e){const{flat:t}=this.state;return[...t.left.map(((e,t)=>({type:"normal",col:e,colIndex:t}))),e.leftBlank>0&&{type:"blank",blankSide:"left",width:e.leftBlank},...t.center.slice(e.leftIndex,e.rightIndex).map(((n,r)=>({type:"normal",col:n,colIndex:t.left.length+e.leftIndex+r}))),e.rightBlank>0&&{type:"blank",blankSide:"right",width:e.rightBlank},...t.right.map(((e,n)=>({type:"normal",col:e,colIndex:t.full.length-t.right.length+n})))].filter(Boolean)}renderTableBody(e){const{vertical:t,horizontal:n}=e,{dataSource:r,getRowProps:o,primaryKey:i,isLoading:s,emptyCellHeight:c}=this.props,d=this.getFlatHozWrappedCols(n),u=l.a.createElement("colgroup",null,d.map((e=>"blank"===e.type?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):l.a.createElement("col",{key:e.colIndex,style:{width:e.col.width}}))));if(t.bottomIndex-t.topIndex==0){const{components:e,emptyContent:t}=this.props;let n=e.EmptyContent;return null==n&&null!=t&&(ne||(ne=!0,console.warn("[ali-react-table] BaseTable props.emptyContent \u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u4f7f\u7528 props.components.EmptyContent \u6765\u81ea\u5b9a\u4e49\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u8868\u683c\u8868\u73b0")),n=()=>t),l.a.createElement("div",{className:v.b.tableBody},l.a.createElement(j,{colgroup:u,colSpan:d.length,isLoading:s,EmptyContent:n,emptyCellHeight:c}))}const{flat:h,stickyLeftMap:p,stickyRightMap:f}=this.state,b=h.full.length,m=h.left.length,g=h.right.length,k=new F.a,w=r.slice(t.topIndex,t.bottomIndex).map((function(e,s){const c=t.topIndex+s;k.stripUpwards(c);const u=o(e,c),h=a()(v.b.tableRow,{first:0===c,last:c===r.length-1,even:c%2==0,odd:c%2==1},null==u?void 0:u.className);return l.a.createElement("tr",Object.assign({},u,{className:h,key:y.a.safeGetRowKey(i,e,c),"data-rowindex":c}),d.map((r=>"blank"===r.type?l.a.createElement("td",{key:r.blankSide}):function(e,r,o,i){var s,c;if(k.testSkip(r,i))return null;const d=y.a.safeGetValue(o,e,r),u=null!==(s=null===(c=o.getCellProps)||void 0===c?void 0:c.call(o,d,e,r))&&void 0!==s?s:{};let h=d;o.render&&(h=o.render(d,e,r));let j=1,w=1;if(o.getSpanRect){const t=o.getSpanRect(d,e,r);j=null==t?1:t.right-i,w=null==t?1:t.bottom-r}else null!=u.colSpan&&(j=u.colSpan),null!=u.rowSpan&&(w=u.rowSpan);w=Math.min(w,t.bottomIndex-r),j=Math.min(j,m+n.rightIndex-i);const x=j>1||w>1;x&&k.add(r,i,j,w);const S={};i<m?(S.position="sticky",S.left=p.get(i)):i>=b-g&&(S.position="sticky",S.right=f.get(i));return l.a.createElement("td",{key:i,...u,className:a()(v.b.tableCell,u.className,{first:0===i,last:i+j===b,"lock-left":i<m,"lock-right":i>=b-g}),...x?{colSpan:j,rowSpan:w}:null,style:{textAlign:o.align,...u.style,...S}},h)}(e,c,r.col,r.colIndex))))}));return l.a.createElement("div",{className:v.b.tableBody},l.a.createElement("div",{key:"top-blank",className:a()(v.b.virtualBlank,"top"),style:{height:t.topBlank}}),l.a.createElement("table",null,u,l.a.createElement("tbody",null,w)),l.a.createElement("div",{key:"bottom-blank",className:a()(v.b.virtualBlank,"bottom"),style:{height:t.bottomBlank}}))}isLock(){const{nested:e}=this.state;return e.left.length>0||e.right.length>0}render(){const{dataSource:e,className:t,style:n,hasHeader:r,useOuterBorder:o,isStickyHead:i,isLoading:s,components:c}=this.props,{flat:d}=this.state,u=this.getRenderRange();return(s=>{const c={className:a()(v.b.artTableWrapper,{"use-outer-border":o,sticky:i,empty:0===e.length,lock:this.isLock(),"has-header":r},t),style:n,[R]:this.artTableWrapperRef};return l.a.createElement(v.d,Object.assign({},c),s)})(l.a.createElement(te.b,{visible:s,LoadingIcon:c.LoadingIcon,LoadingContentWrapper:c.LoadingContentWrapper},l.a.createElement("div",{className:v.b.artTable},this.renderTableHeader(u),this.renderTableBody(u),l.a.createElement("div",{className:v.b.lockShadowMask,style:{left:0,width:C(d.left.map((e=>e.width)))+v.c}},l.a.createElement("div",{className:a()(v.b.lockShadow,v.b.leftLockShadow)})),l.a.createElement("div",{className:v.b.lockShadowMask,style:{right:0,width:C(d.right.map((e=>e.width)))+v.c}},l.a.createElement("div",{className:a()(v.b.lockShadow,v.b.rightLockShadow)}))),l.a.createElement("div",{className:v.b.stickyScroll,style:{display:this.state.hasScroll?"block":"none",bottom:this.props.stickyBottom}},l.a.createElement("div",{className:v.b.stickyScrollItem}))))}componentDidMount(){this.updateDoms(),this.data$=new s.a({props:this.props,state:this.state,prevProps:null,prevState:null}),this.initSubscriptions(),this.didMountOrUpdate()}componentDidUpdate(e,t){this.updateDoms(),this.data$.next({props:this.props,state:this.state,prevProps:e,prevState:t}),this.didMountOrUpdate(e,t)}didMountOrUpdate(e,t){this.syncHorizontalScrollFromTableBody(),this.updateStickyScroll(),this.adjustNeedRenderLock(),this.updateRowHeightManager(e),this.resetStickyScrollIfNecessary(t)}resetStickyScrollIfNecessary(e){null!=e&&this.state.hasScroll&&!e.hasScroll&&(this.doms.stickyScroll.scrollLeft=0)}initSubscriptions(){const{tableHeader:e,tableBody:t,stickyScroll:n}=this.doms;this.rootSubscription.add(M.subscribe((()=>{this.updateStickyScroll(),this.adjustNeedRenderLock()}))),this.rootSubscription.add(function(e,t){const n=new Set;function r(t,r){n.clear();for(const a of e)a!==t&&(a.scrollLeft=r,n.add(a))}const a=new i.a;for(const o of e){const e=()=>{if(n.has(o))return void n.delete(o);const e=o.scrollLeft;r(o,e),t(e)};o.addEventListener("scroll",e,{passive:!0}),a.add((()=>o.removeEventListener("scroll",e)))}return a}([t,n,e],(e=>{this.syncHorizontalScroll(e)})));const r=this.data$.pipe(f.a((e=>e.props.flowRoot)),b.a((e=>{const t=this.artTableWrapperRef.current;if("auto"===e){const e=getComputedStyle(t);return Object(c.a)("visible"!==e.overflowY?t:window)}return"self"===e?Object(c.a)(t):"function"==typeof e?Object(d.a)(0,u.a).pipe(f.a(e)):Object(c.a)(e)})),m.a()).pipe(b.a((e=>ee(this.doms.artTable,e))));this.rootSubscription.add(Object(h.a)([r.pipe(f.a((e=>e.clipRect)),m.a(N)),this.data$.pipe(g.a((e=>{var t;return!(null===(t=e.prevProps)||void 0===t?void 0:t.isLoading)&&e.props.isLoading})))]).subscribe((([e])=>{const{artTableWrapper:t}=this.doms,n=H(t,v.b.loadingIndicator);if(!n)return;const r=e.bottom-e.top;n.style.top=r/2+"px",n.style.marginTop=r/2+"px"}))),this.rootSubscription.add(r.pipe(g.a((()=>{const{horizontal:e,vertical:t}=this.state.useVirtual;return e||t})),f.a((({clipRect:e,offsetY:t})=>({maxRenderHeight:e.bottom-e.top,maxRenderWidth:e.right-e.left,offsetY:t}))),m.a(((e,t)=>Math.abs(e.maxRenderWidth-t.maxRenderWidth)<50&&Math.abs(e.maxRenderHeight-t.maxRenderHeight)<50&&Math.abs(e.offsetY-t.offsetY)<50))).subscribe((e=>{this.setState(e)})))}componentWillUnmount(){this.rootSubscription.unsubscribe()}updateDoms(){const e=this.artTableWrapperRef.current,t=H(e,v.b.artTable);this.doms={artTableWrapper:e,artTable:t,tableHeader:H(t,v.b.tableHeader),tableBody:H(t,v.b.tableBody),stickyScroll:H(e,v.b.stickyScroll),stickyScrollItem:H(e,v.b.stickyScrollItem)}}updateRowHeightManager(e){var t;const n=this.doms.artTable.querySelector(`.${v.b.virtualBlank}.top`),r=null!==(t=null==n?void 0:n.clientHeight)&&void 0!==t?t:0;let a=-1,o=-1;for(const s of(l=this.doms.artTable,i=v.b.tableRow,null==l?void 0:l.querySelectorAll("."+i))){const e=Number(s.dataset.rowindex);if(isNaN(e))continue;a=Math.max(a,e);const t=s.offsetTop+r,n=s.offsetHeight;o=Math.max(o,t+n),this.rowHeightManager.updateRow(e,t,n)}var l,i;if(-1!==a&&o<this.state.offsetY+this.state.maxRenderHeight){this.getVerticalRenderRange().bottomIndex-1>a&&this.forceUpdate()}}adjustNeedRenderLock(){const{needRenderLock:e,flat:t}=this.state;if(this.isLock()){const n=C(t.full.map((e=>e.width)))>this.doms.artTable.clientWidth;e!==n&&this.setState({needRenderLock:n})}else e&&this.setState({needRenderLock:!1})}}Object.defineProperty(re,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{isStickyHead:!0,stickyTop:0,stickyBottom:0,useVirtual:"auto",estimatedRowHeight:48,hasHeader:!0,isLoading:!1,components:{},getRowProps:p.a,flowRoot:"auto"}}),Object.defineProperty(re,"getDerivedStateFromProps",{enumerable:!0,configurable:!0,writable:!0,value:$})},185:function(e,t,n){"use strict";n.r(t),n.d(t,"getAppTrafficData",(function(){return i})),n.d(t,"getIncomeData",(function(){return c})),n.d(t,"getNCoV2019Data",(function(){return u}));const r="https://gw.alipayobjects.com/os/bmw-prod/2eb02d0b-993f-4531-8424-a8df1899299e.json",a="https://gw.alipayobjects.com/os/bmw-prod/22986070-97e7-43a2-a3e4-200742c3d913.json",o="https://gw.alipayobjects.com/os/basement_prod/8e44b543-0764-411f-adfc-0dae716ef96a.csv";let l=null;function i(){return l||(l=fetch(r).then((e=>e.json()))),l}let s=null;function c(){return s||(s=fetch(a).then((e=>e.json()))),s}let d=null;function u(){return d||(d=fetch(o).then((e=>e.text())).then((e=>{const t=e.split("\n"),n=t[0],r=t.slice(1),a=n.split(","),o=[];for(const l of r){if(""===l)continue;const e=l.split(","),t={};a.forEach(((n,r)=>{t[n]=e[r]})),o.push(t)}return o}))),d}},186:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return p}));var r=n(131),a=n.n(r),o=n(0),l=n.n(o),i=n(155),s=n(144),c=n(147),d=n(362);const u=Symbol("treeMetaSymbol");function h({onChangeOpenKeys:e,openKeys:t,primaryKey:n,iconIndent:r=-6,iconGap:o=0,indentSize:h=16,isLeafNode:p=c.a,clickArea:f="cell",treeMetaKey:b=u,stopClickEventPropagation:m}){const g=new Set(t),y=n=>{g.has(n)?e(t.filter((e=>e!==n)),n,"collapse"):e([...t,n],n,"expand")};return({columns:e,dataSource:t})=>({columns:function(e){if(0===e.length)return e;const[t,...n]=e;return[{...t,title:l.a.createElement("span",{style:{marginLeft:r+16+o}},s.a.safeRenderHeader(t)),render:(e,n,c)=>{const d=s.a.safeRender(t,n,c);if(null==n[b])return d;const{rowKey:u,depth:p,isLeaf:g,expanded:v}=n[b],k=r+p*h;if(g)return l.a.createElement(i.b,{className:"expansion-cell leaf"},l.a.createElement("span",{style:{marginLeft:k+16+o}},d));const j=e=>{m&&e.stopPropagation(),y(u)},w=v?"expanded":"collapsed";return l.a.createElement(i.a,{className:a()("expansion-cell",w),style:{cursor:"content"===f?"pointer":void 0},onClick:"content"===f?j:void 0},l.a.createElement(i.c.CaretRight,{className:a()("expansion-icon",w),style:{cursor:"icon"===f?"pointer":void 0,marginLeft:k,marginRight:o},onClick:"icon"===f?j:void 0}),d)},getCellProps:"cell"===f?(e,n,r)=>{const a=s.a.safeGetCellProps(t,n,r);if(null==n[b])return a;const{isLeaf:o,rowKey:l}=n[b];return o?a:Object(d.a)(a,{onClick(e){m&&e.stopPropagation(),y(l)},style:{cursor:"pointer"}})}:t.getCellProps},...n]}(e),dataSource:function(e){const t=[];return function e(r,a){if(null==r)return;for(const o of r){const r=o[n],l=g.has(r),i=p(o,{depth:a,expanded:l,rowKey:r}),s={depth:a,isLeaf:i,expanded:l,rowKey:r};t.push({[b]:s,...o}),!i&&l&&e(o.children,a+1)}}(e,0),t}(t)})}function p({defaultOpenKeys:e=[],...t}){const[n,r]=Object(o.useState)(e);return h({openKeys:n,onChangeOpenKeys:r,...t})}},322:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(147);function a(e,t="pre"){const n=[];return function e(a){if(null==a)return;for(const o of a)Object(r.a)(o)?n.push(o):"pre"===t?(n.push(o),e(o.children)):"post"===t?(e(o.children),n.push(o)):e(o.children)}(e),n}},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(147);function a(e){let t=-1;return function e(n,a){for(const o of n)Object(r.a)(o)?t=Math.max(t,a):e(o.children,a+1)}(e,0),t}},327:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var r=n(371),a=n(150),o=n(175);function l(e,t,{encode:n=o.a,totalValue:l="\u603b\u8ba1",includeTopWrapper:i=!1,isExpand:s=Object(a.a)(!0),enforceExpandTotalNode:c=!0}={}){const d=[],u=n(d);let h,p=!1;if(0===t.length?h=[]:c||s(u)?h=function e(a,o){const l=o.length,i=[],c=t[l],d=Object(r.a)(a,(e=>e[c]));for(const r of Object.keys(d)){o.push(r);const a={key:n(o),value:r,path:o.slice()};i.push(a);const c=d[r];c.length>0&&l<t.length-1&&(s(a.key)?a.children=e(c,o):a.hasChild=!0),o.pop()}return i}(e,[]):(h=[],p=e.length>0),i){const e={key:u,value:l,path:d,children:h};return p&&(e.hasChild=p),[e]}return i?[{key:u,value:l,path:d,children:h}]:h}},340:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(147),a=n(371),o=n(150),l=n(327),i=n(175);function s(e){return 1===e.length?e[0]:{}}function c({data:e,leftCodes:t,topCodes:n,aggregate:c=s,encode:d=i.a,isLeftExpand:u=Object(o.a)(!0),isTopExpand:h=Object(o.a)(!0),prebuiltLeftTree:p,prebuiltTopTree:f}){const b={peculiarity:new Set},[m]=null!=p?p:Object(l.b)(e,t,{encode:d,includeTopWrapper:!0,isExpand:u}),[g]=null!=f?f:Object(l.b)(e,n,{encode:d,includeTopWrapper:!0,isExpand:h});return function(e){const t=new Map;return function e(t,a){const o=new Map;t.set(a.leftKey,o),n(o,a.col),Object(r.a)(a)||a.children.forEach((n=>{e(t,n)}))}(t,e),t;function n(e,t){e.set(t.topKey,t.record),Object(r.a)(t)||t.children.forEach((t=>{n(e,t)}))}}(function e(l,i,s,d){let u,h=null;if(Object(r.a)(s))u=y(l,i,g,0);else{h=[];const p=t[d],f=Object(a.a)(i,(e=>e[p]));l.peculiarity.add(p);for(const t of s.children){const n=f[t.value];n&&h.push(e(l,n,t,d+1))}l.peculiarity.delete(p),u=function(e,t){return a(e,t,g,0);function a(e,t,l,i){let s=null;const d=c(t.map((e=>e.record)),e);if(!Object(r.a)(l)){const r=n[i];e.peculiarity.add(r);const c=Object(o.d)(l.children.map((e=>[e.value,e]))),d=t.map((e=>Object(o.d)(e.children.map((e=>[e.topValue,e])))));s=l.children.map((t=>{const n=d.map((e=>e[t.value])).filter(Boolean);return a(e,n,c[t.value],i+1)})),e.peculiarity.delete(r)}return{topKey:l.key,topValue:l.value,record:d,children:s}}}(l,h.map((e=>e.col)))}return{leftKey:s.key,children:h,col:u}}(b,e,m,0));function y(e,t,o,l){let i,s=null;if(Object(r.a)(o))i=c(t,e);else{s=[];const r=n[l],d=Object(a.a)(t,(e=>e[r]));e.peculiarity.add(r);for(const t of o.children){const n=d[t.value];n&&s.push(y(e,n,t,l+1))}e.peculiarity.delete(r),i=c(s.map((e=>e.record)),e)}return{topKey:o.key,topValue:o.value,children:s,record:i}}}function d({codes:e,encode:t=i.a,data:n,aggregate:r,isExpand:a}){const o=c({data:n,leftCodes:[],topCodes:e,isTopExpand:a,aggregate:r,encode:t}),l=t([]);return o.get(l)}},349:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10);t.a=function({children:e,fallback:t}){return o.a.canUseDOM&&null!=e?a.a.createElement(a.a.Fragment,null,e()):t||null}},354:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(145),a=n(160),o=n(349),l=n(0),i=n.n(l),s=n(1);function c({exampleName:e}){return i.a.createElement("div",{style:{marginTop:16}},i.a.createElement("p",null,"\u65e0\u6cd5\u627e\u5230\u540d\u4e3a ",i.a.createElement("b",null,e)," \u7684\u793a\u4f8b"))}function d({stories:e,path:t}){var n,o;const l=Object(s.l)(),d=Object(s.k)(),u=Object.keys(e).filter((e=>"default"!==e)),h=new URLSearchParams(l.search),p=null!==(n=h.get("example"))&&void 0!==n?n:u[0],f=u.indexOf(p),b=null!==(o=e[p])&&void 0!==o?o:c,m=e=>{h.set("example",e),d.replace({search:String(h)})},g=()=>t?i.a.createElement(r.a,{component:"a",href:String(new URL(t,"https://github.com/alibaba/ali-react-table/blob/master/packages/website/examples/"))},"\u67e5\u770b\u6e90\u7801"):null;return i.a.createElement(i.a.Fragment,null,u.length>1?i.a.createElement("div",{style:{marginBottom:16,display:"flex",alignItems:"center",flexWrap:"wrap"}},i.a.createElement("span",null,"\u793a\u4f8b\uff08",f+1," / ",u.length,"\uff09\uff1a"),i.a.createElement(a.a,{style:{marginLeft:8,width:200},dataSource:u,value:p,onChange:m}),i.a.createElement(r.a.Group,{style:{marginLeft:8}},i.a.createElement(r.a,{onClick:()=>{-1===f?m(u[0]):-1!==f&&f>0&&m(u[f-1])},disabled:0===f},"\u4e0a\u4e00\u4e2a"),i.a.createElement(r.a,{onClick:()=>{-1===f?m(u[0]):f<u.length-1&&m(u[f+1])},disabled:f===u.length-1},"\u4e0b\u4e00\u4e2a"),g())):i.a.createElement("div",{style:{marginBottom:t?16:0}},g()),i.a.createElement(b,{exampleName:p}))}function u(e){return i.a.createElement(o.a,{fallback:"\u793a\u4f8b\u8f7d\u5165\u4e2d..."},(()=>i.a.createElement(d,Object.assign({},e))))}},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(131),a=n.n(r);function o(e,t){return(...n)=>{e(n),t(n)}}function l(e,t){if(null==e)return t;if(null==t)return e;const n=Object.assign({},e);for(const r of Object.keys(t)){const e=t[r],l=typeof e;if(null===e)n[r]=null;else if(void 0===e);else if("number"===l||"string"===l||"boolean"===l)n[r]="className"===r?a()(n[r],e):e;else if("function"===l){const t=n[r];n[r]=null==t?e:o(t,e)}else"object"===l&&(n[r]=Object.assign({},n[r],e))}return n}},371:function(e,t,n){"use strict";function r(e,t){const n={};for(const r of e){const e=t(r);null==n[e]&&(n[e]=[]),n[e].push(r)}return n}n.d(t,"a",(function(){return r}))},379:function(e,t,n){var r={"./af":187,"./af.js":187,"./ar":188,"./ar-dz":189,"./ar-dz.js":189,"./ar-kw":190,"./ar-kw.js":190,"./ar-ly":191,"./ar-ly.js":191,"./ar-ma":192,"./ar-ma.js":192,"./ar-sa":193,"./ar-sa.js":193,"./ar-tn":194,"./ar-tn.js":194,"./ar.js":188,"./az":195,"./az.js":195,"./be":196,"./be.js":196,"./bg":197,"./bg.js":197,"./bm":198,"./bm.js":198,"./bn":199,"./bn-bd":200,"./bn-bd.js":200,"./bn.js":199,"./bo":201,"./bo.js":201,"./br":202,"./br.js":202,"./bs":203,"./bs.js":203,"./ca":204,"./ca.js":204,"./cs":205,"./cs.js":205,"./cv":206,"./cv.js":206,"./cy":207,"./cy.js":207,"./da":208,"./da.js":208,"./de":209,"./de-at":210,"./de-at.js":210,"./de-ch":211,"./de-ch.js":211,"./de.js":209,"./dv":212,"./dv.js":212,"./el":213,"./el.js":213,"./en-au":214,"./en-au.js":214,"./en-ca":215,"./en-ca.js":215,"./en-gb":216,"./en-gb.js":216,"./en-ie":217,"./en-ie.js":217,"./en-il":218,"./en-il.js":218,"./en-in":219,"./en-in.js":219,"./en-nz":220,"./en-nz.js":220,"./en-sg":221,"./en-sg.js":221,"./eo":222,"./eo.js":222,"./es":223,"./es-do":224,"./es-do.js":224,"./es-mx":225,"./es-mx.js":225,"./es-us":226,"./es-us.js":226,"./es.js":223,"./et":227,"./et.js":227,"./eu":228,"./eu.js":228,"./fa":229,"./fa.js":229,"./fi":230,"./fi.js":230,"./fil":231,"./fil.js":231,"./fo":232,"./fo.js":232,"./fr":233,"./fr-ca":234,"./fr-ca.js":234,"./fr-ch":235,"./fr-ch.js":235,"./fr.js":233,"./fy":236,"./fy.js":236,"./ga":237,"./ga.js":237,"./gd":238,"./gd.js":238,"./gl":239,"./gl.js":239,"./gom-deva":240,"./gom-deva.js":240,"./gom-latn":241,"./gom-latn.js":241,"./gu":242,"./gu.js":242,"./he":243,"./he.js":243,"./hi":244,"./hi.js":244,"./hr":245,"./hr.js":245,"./hu":246,"./hu.js":246,"./hy-am":247,"./hy-am.js":247,"./id":248,"./id.js":248,"./is":249,"./is.js":249,"./it":250,"./it-ch":251,"./it-ch.js":251,"./it.js":250,"./ja":252,"./ja.js":252,"./jv":253,"./jv.js":253,"./ka":254,"./ka.js":254,"./kk":255,"./kk.js":255,"./km":256,"./km.js":256,"./kn":257,"./kn.js":257,"./ko":258,"./ko.js":258,"./ku":259,"./ku.js":259,"./ky":260,"./ky.js":260,"./lb":261,"./lb.js":261,"./lo":262,"./lo.js":262,"./lt":263,"./lt.js":263,"./lv":264,"./lv.js":264,"./me":265,"./me.js":265,"./mi":266,"./mi.js":266,"./mk":267,"./mk.js":267,"./ml":268,"./ml.js":268,"./mn":269,"./mn.js":269,"./mr":270,"./mr.js":270,"./ms":271,"./ms-my":272,"./ms-my.js":272,"./ms.js":271,"./mt":273,"./mt.js":273,"./my":274,"./my.js":274,"./nb":275,"./nb.js":275,"./ne":276,"./ne.js":276,"./nl":277,"./nl-be":278,"./nl-be.js":278,"./nl.js":277,"./nn":279,"./nn.js":279,"./oc-lnc":280,"./oc-lnc.js":280,"./pa-in":281,"./pa-in.js":281,"./pl":282,"./pl.js":282,"./pt":283,"./pt-br":284,"./pt-br.js":284,"./pt.js":283,"./ro":285,"./ro.js":285,"./ru":286,"./ru.js":286,"./sd":287,"./sd.js":287,"./se":288,"./se.js":288,"./si":289,"./si.js":289,"./sk":290,"./sk.js":290,"./sl":291,"./sl.js":291,"./sq":292,"./sq.js":292,"./sr":293,"./sr-cyrl":294,"./sr-cyrl.js":294,"./sr.js":293,"./ss":295,"./ss.js":295,"./sv":296,"./sv.js":296,"./sw":297,"./sw.js":297,"./ta":298,"./ta.js":298,"./te":299,"./te.js":299,"./tet":300,"./tet.js":300,"./tg":301,"./tg.js":301,"./th":302,"./th.js":302,"./tk":303,"./tk.js":303,"./tl-ph":304,"./tl-ph.js":304,"./tlh":305,"./tlh.js":305,"./tr":306,"./tr.js":306,"./tzl":307,"./tzl.js":307,"./tzm":308,"./tzm-latn":309,"./tzm-latn.js":309,"./tzm.js":308,"./ug-cn":310,"./ug-cn.js":310,"./uk":311,"./uk.js":311,"./ur":312,"./ur.js":312,"./uz":313,"./uz-latn":314,"./uz-latn.js":314,"./uz.js":313,"./vi":315,"./vi.js":315,"./x-pseudo":316,"./x-pseudo.js":316,"./yo":317,"./yo.js":317,"./zh-cn":318,"./zh-cn.js":318,"./zh-hk":319,"./zh-hk.js":319,"./zh-mo":320,"./zh-mo.js":320,"./zh-tw":321,"./zh-tw.js":321};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=379},381:function(e,t,n){"use strict";function r(e,...t){return t.reduce(((e,t)=>t(e)),e)}n.d(t,"a",(function(){return r}))}}]);