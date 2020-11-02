(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return w})),r.d(t,"metadata",(function(){return x})),r.d(t,"rightToc",(function(){return S})),r.d(t,"default",(function(){return R}));var a={};r.r(a),r.d(a,"default",(function(){return y})),r.d(a,"RemainMatrix",(function(){return k}));var n=r(2),o=r(6),l=r(0),i=r.n(l),s=r(146),c=r(148),d=r(356),h=r(176),u=r(181),f=r(707),b=r(141);const p=["#E8F3FF","#D6E9FF","#ADD1FF","#85B6FF","#5790F2","#2E6BE6","#1D4DBF","#0F3499","#061F73","#03124D"],m=[{date:"1\u670804\u53f7",user_cnt:300,day1:.4,day2:.4,day3:.35,day4:.4,day5:.35,day6:.3,day7:.25},{date:"1\u670805\u53f7",user_cnt:350,day1:.4,day2:.36,day3:.45,day4:.3,day5:.3,day6:.2,day7:-1},{date:"1\u670806\u53f7",user_cnt:400,day1:.4,day2:.4,day3:.5,day4:.4,day5:.3,day6:-1,day7:-1},{date:"1\u670807\u53f7",user_cnt:350,day1:.45,day2:.4,day3:.3,day4:.2,day5:-1,day6:-1,day7:-1},{date:"1\u670808\u53f7",user_cnt:400,day1:.5,day2:.5,day3:.4,day4:-1,day5:-1,day6:-1,day7:-1},{date:"1\u670809\u53f7",user_cnt:500,day1:.6,day2:.48,day3:-1,day4:-1,day5:-1,day6:-1,day7:-1},{date:"1\u670810\u53f7",user_cnt:400,day1:.52,day2:-1,day3:-1,day4:-1,day5:-1,day6:-1,day7:-1}],g=f.a().domain([.2,.6]).range(p.map(((e,t)=>t)));var y={title:"\u4e1a\u52a1\u793a\u4f8b / \u7528\u6237\u7559\u5b58\u77e9\u9635"};const v=Object(b.b)(u.a)`
  --border-color: none;
  --header-bgcolor: var(--ifm-background-surface-color);

  .${c.b.tableHeader} {
    border-top: 1px solid #dfe3e8;
    border-bottom: 1px solid #dfe3e8;
  }

  .${c.b.tableHeaderCell} {
    height: 48px;
  }
`;function k(){const e=d.a.array({align:"right",render:function(e,t){if(-1==e)return null;return i.a.createElement("div",{style:{lineHeight:"20px"}},i.a.createElement("div",null,Object(h.ratio)(e)),i.a.createElement("div",null,Object(h.amount)(e*t.user_cnt)))},getCellProps:function(e){if(-1==e)return;const t=g(e);return{style:{backgroundColor:p[t],color:t<=4?"#03124D":"white"}}}});return i.a.createElement(v,{defaultColumnWidth:100,columns:[{code:"date",name:"\u65e5\u671f"},{code:"user_cnt",name:"\u7528\u6237\u6570"},...e([{code:"day1",name:"\u7b2c\u4e00\u65e5"},{code:"day2",name:"\u7b2c\u4e8c\u65e5"},{code:"day3",name:"\u7b2c\u4e09\u65e5"},{code:"day4",name:"\u7b2c\u56db\u65e5"},{code:"day5",name:"\u7b2c\u4e94\u65e5"},{code:"day6",name:"\u7b2c\u516d\u65e5"},{code:"day7",name:"\u7b2c\u4e03\u65e5"}])],dataSource:m})}var j=r(354),w={id:"remain-matrix",title:"\u7528\u6237\u7559\u5b58\u77e9\u9635",hide_table_of_contents:!0,hide_title:!0},x={unversionedId:"biz/remain-matrix",id:"biz/remain-matrix",isDocsHomePage:!1,title:"\u7528\u6237\u7559\u5b58\u77e9\u9635",source:"@site/examples/biz/remain-matrix.mdx",slug:"/biz/remain-matrix",permalink:"/examples/biz/remain-matrix",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/examples/biz/remain-matrix.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u5546\u54c1\u6392\u884c\u699c",permalink:"/examples/biz/rank-table"},next:{title:"\u6295\u5165\u4ea7\u51fa\u5206\u6790\u8868\u683c",permalink:"/examples/biz/ROI-analysis-table"}},S=[],E={rightToc:S};function R(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},E,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)(j.a,{stories:a,path:"biz/remain-matrix.stories.tsx",mdxType:"Stories"}))}R.isMDXComponent=!0},144:function(e,t,r){"use strict";function a(e,t,r){return e.getValue?e.getValue(t,r):t[e.code]}r.d(t,"a",(function(){return n}));const n={safeRenderHeader:function(e){var t;return null!==(t=e.title)&&void 0!==t?t:e.name},safeGetValue:a,safeGetRowKey:function(e,t,r){let a;return"string"==typeof e?a=t[e]:"function"==typeof e&&(a=e(t)),null==a&&(a=String(r)),a},safeGetCellProps:function(e,t,r){if(e.getCellProps){const n=a(e,t,r);return e.getCellProps(n,t,r)||{}}return{}},safeRender:function(e,t,r){const n=a(e,t,r);return e.render?e.render(n,t,r):n}}},147:function(e,t,r){"use strict";function a(e){return null==e.children||0===e.children.length}r.d(t,"a",(function(){return a}))},148:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return h}));var a=r(141);const n=20,o={artTableWrapper:"art-table-wrapper",artTable:"art-table",tableHeader:"art-table-header",tableBody:"art-table-body",tableRow:"art-table-row",tableHeaderRow:"art-table-header-row",tableCell:"art-table-cell",tableHeaderCell:"art-table-header-cell",virtualBlank:"art-virtual-blank",stickyScroll:"art-sticky-scroll",stickyScrollItem:"art-sticky-scroll-item",lockShadowMask:"art-lock-shadow-mask",lockShadow:"art-lock-shadow",leftLockShadow:"art-left-lock-shadow",rightLockShadow:"art-right-lock-shadow",emptyWrapper:"art-empty-wrapper",loadingWrapper:"art-loading-wrapper",loadingIndicatorWrapper:"art-loading-indicator-wrapper",loadingIndicator:"art-loading-indicator"},l=5,i=10,s=20,c=30,d=40,h=a.b.div`
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
      margin-right: ${n}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-right: var(--cell-border-vertical);
      }
    }

    .${o.rightLockShadow} {
      margin-left: ${n}px;
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
`},170:function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a),o=r(148);const l=n.a.memo((()=>n.a.createElement("svg",{style:{margin:"auto",display:"block",width:40,height:40},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},n.a.createElement("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#23a7fa",strokeDasharray:"188 64",strokeLinecap:"round",strokeWidth:"10"},n.a.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})))));function i({children:e,visible:t}){return n.a.createElement("div",{className:"art-loading-content-wrapper",style:{filter:t?"blur(1px)":"none"}},e)}function s({visible:e,children:t,LoadingContentWrapper:r=i,LoadingIcon:a=l}){return n.a.createElement("div",{className:o.b.loadingWrapper},e&&n.a.createElement("div",{className:o.b.loadingIndicatorWrapper},n.a.createElement("div",{className:o.b.loadingIndicator},n.a.createElement(a,null))),n.a.createElement(r,{visible:e,children:t}))}},176:function(e,t,r){"use strict";r.r(t),r.d(t,"plain",(function(){return c})),r.d(t,"amount0",(function(){return d})),r.d(t,"amount",(function(){return h})),r.d(t,"time",(function(){return u})),r.d(t,"amount1",(function(){return f})),r.d(t,"amount2",(function(){return b})),r.d(t,"ratio",(function(){return p})),r.d(t,"lfl",(function(){return y})),r.d(t,"money",(function(){return v}));var a=r(391),n=r.n(a),o=r(137),l=r.n(o),i=r(0),s=r.n(i);const c=e=>"-"===e||null==e?"-":String(e),d=e=>"-"===e||null==e?"-":n()(e).format("0,0"),h=d;function u(e){return l()(e,"YYYY-MM-DD HH:mm:ss.sss").format("YYYY\u5e74MM\u6708DD\u65e5 HH:mm:ss")}const f=e=>"-"===e||null==e?"-":n()(e).format("0,0.0"),b=e=>"-"===e||null==e?"-":n()(e).format("0,0.00"),p=e=>"-"===e||null==e?"-":n()(e).format("0.00%"),m=Object(i.memo)((({size:e=12,style:t})=>s.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},s.a.createElement("path",{d:"M682.667 512v426.667H341.333V512h-256L512 0l426.667 512h-256z"})))),g=Object(i.memo)((({size:e=12,style:t})=>s.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},s.a.createElement("path",{d:"M682.667 426.667V0H341.333v426.667h-256l426.667 512 426.667-512h-256z"})))),y=e=>{return null==e||"-"===e||isNaN(e)||e===1/0||e===-1/0?t("-"):t((e=Number(e))>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{style:{color:"#f4485c"}},n()(e).format("0.00%")),s.a.createElement(m,{style:{marginLeft:4,color:"#f4485c"}})):e<0?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{style:{color:"#00a854"}},n()(e).format("0.00%")),s.a.createElement(g,{style:{marginLeft:4,color:"#00a854"}})):s.a.createElement("span",{style:{color:"#838383"}},"0"));function t(e){return s.a.createElement("div",{className:"lfl-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"flex-end"}},e)}},v=e=>"-"===e||null==e?"-":(e=Number(e))<0?"-"+v(-e):0===e?String(e):e<1e4?n()(e).format("0,0"):e<1e5?n()(e/1e4).format("0.0")+"\u4e07":e<1e8?n()(e/1e4).format("0")+"\u4e07":e<1e9?n()(e/1e8).format("0.0")+"\u4ebf":n()(e/1e8).format("0")+"\u4ebf"},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class a{constructor(){Object.defineProperty(this,"rects",{enumerable:!0,configurable:!0,writable:!0,value:[]})}testSkip(e,t){return this.rects.some((({left:r,right:a,top:n,bottom:o})=>r<=t&&t<a&&n<=e&&e<o))}stripUpwards(e){this.rects=this.rects.filter((t=>t.bottom>e))}add(e,t,r,a){this.rects.push({left:t,right:t+r,top:e,bottom:e+a})}}},181:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(172),n=r(182),o=r(0),l=r.n(o),i=r(141);const s=Object(i.b)(n.a)`
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
`,c=l.a.forwardRef(((e,t)=>{const{isDarkTheme:r}=Object(a.a)(),o=r?s:n.a;return l.a.createElement(o,Object.assign({ref:t},e))}))},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return ae}));var a=r(131),n=r.n(a),o=r(0),l=r.n(o),i=r(463),s=r(721),c=r(715),d=r(726),h=r(723),u=r(722),f=r(718),b=r(548),p=r(714),m=r(716),g=r(717),y=r(144),v=r(148);const k=l.a.memo((()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{alt:"empty-image",className:"empty-image",src:"//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"}),l.a.createElement("div",{className:"empty-tips"},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",l.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2"))));function j({colgroup:e,colSpan:t,isLoading:r,emptyCellHeight:a,EmptyContent:o=k}){const i=!r;return l.a.createElement("table",null,e,l.a.createElement("tbody",null,l.a.createElement("tr",{className:n()(v.b.tableRow,"first","last","no-hover"),"data-rowindex":0},l.a.createElement("td",{className:n()(v.b.tableCell,"first","last"),colSpan:t,style:{height:null!=a?a:200}},i&&l.a.createElement("div",{className:v.b.emptyWrapper},l.a.createElement(o,null))))))}var w=r(147),x=r(322),S=r(725),E=r(713),R=r(582),z=r(727);const O="v3"===(null!=r(141).a?"v5":"v3")?"innerRef":"ref",L=100;function I(e){let t=0;return e.forEach((e=>{t+=e})),t}const H=Object(S.a)((()=>Object(E.a)(window,"resize").pipe(Object(z.a)(150,R.b,{leading:!0,trailing:!0}))));function M(){const e=document.createElement("div");e.style.position="absolute",e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.top="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,r=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{width:t,height:r}}let B;function C(e,t){return null==e?void 0:e.querySelector("."+t)}function N(e,t){const r=Object.prototype.hasOwnProperty;if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(let o=0;o<a.length;o++)if(!r.call(t,a[o])||!Object.is(e[a[o]],t[a[o]]))return!1;return!0}function T(e,t){return null==e||"auto"===e?t:e}let W=!1;function $(e){W||(W=!0,console.warn("[ali-react-table] column.hidden \u5df2\u7ecf\u8fc7\u65f6\uff0c\u5982\u679c\u9700\u8981\u9690\u85cf\u8be5\u5217\uff0c\u8bf7\u5c06\u5176\u4ece columns \u6570\u7ec4\u4e2d\u79fb\u9664",e))}function D(e){let t=0;for(const a of e){if(!r(a))break;t+=1}return t;function r(e){return Object(w.a)(e)?e.lock:e.lock||e.children.some(r)}}function P(e,t){const{useVirtual:r,columns:a,dataSource:n,defaultColumnWidth:o}=e,l=function(e,t){return null!=e&&Array.isArray(e)||(console.warn("[ali-react-table] <BaseTable /> props.columns \u9700\u8981\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4",e),e=[]),function e(r){const a=[];for(let n of r)if(null==n.width&&null!=t&&(n={...n,width:t}),Object(w.a)(n))n.hidden?$(n):a.push(n);else{const t=e(n.children);t.length>0&&a.push({...n,children:t})}return a}(e)}(a,o),i=D(l),s=Object(x.a)(l,"leaf-only");if(i===l.length)return{flat:{left:[],right:[],full:s,center:s},nested:{left:[],right:[],full:l,center:l},useVirtual:{horizontal:!1,vertical:!1,header:!1},stickyLeftMap:new Map,stickyRightMap:new Map};const c=l.slice(0,i),d=D(l.slice().reverse()),h=l.slice(i,l.length-d),u=l.slice(l.length-d),f=s.length>=100&&s.every((e=>null!=e.width)),b=n.length>=100,p="object"!=typeof r?{horizontal:T(r,f),vertical:T(r,b),header:T(r,!1)}:{horizontal:T(r.horizontal,f),vertical:T(r.vertical,b),header:T(r.header,b)},m={left:Object(x.a)(c,"leaf-only"),full:s,right:Object(x.a)(u,"leaf-only"),center:Object(x.a)(h,"leaf-only")},g=m.full.length,y=m.left.length,v=m.right.length,k=new Map;let j=0;for(let w=0;w<y;w++)k.set(w,j),j+=m.full[w].width;const S=new Map;let E=0;for(let w=0;w<v;w++)S.set(g-1-w,E),E+=m.full[g-1-w].width;return{flat:m,nested:{left:c,full:l,right:u,center:h},useVirtual:p,stickyLeftMap:k,stickyRightMap:S}}var F=r(323);function V(e){const t=[];for(let r=0;r<e;r++)t.push(r);return t}function Y(e,t){const r=[];for(let n=0;n<t;n++)r.push([]);const a=[];return function e(t,n){let o=0;for(let l=0;l<t.length;l++){const i=t[l];if(Object(w.a)(i)){o+=1;const e={type:"normal",width:i.col.width,col:i.col,colIndex:i.colIndex,colSpan:1,isLeaf:!0};r[n].push(e),a.push(e)}else{const t=e(i.children,n+1);o+=t.leafCount,t.leafCount>0&&r[n].push({type:"normal",width:i.col.width,col:i.col,colIndex:i.colIndex,colSpan:t.leafCount,isLeaf:!1})}}return{leafCount:o}}(e,0),{flat:a,leveled:r}}function _(e,t){return function e(t,r){const a=[];let n=0;for(let o=0;o<t.length;o++){const l=t[o],i=r+n;if(Object(w.a)(l))n+=1,a.push({colIndex:i,col:l});else{const t=e(l.children,i);n+=t.leafCount,t.leafCount>0&&a.push({col:l,colIndex:i,children:t.result})}}return{result:a,leafCount:n}}(e,t).result}function U({flat:e,nested:t,hoz:r,useVirtual:a},n){if(a.header){const a=Y(_(t.left,0),n),o=Y(function(e,t,r){return function e(a,n){let o=0;const l=[];for(const i of a){const a=n+o;if(Object(w.a)(i))o+=1,r+t.leftIndex<=a&&a<r+t.rightIndex&&l.push({colIndex:a,col:i});else{const t=e(i.children,a);o+=t.leafCount,t.filtered.length>0&&l.push({colIndex:a,col:i,children:t.filtered})}}return{filtered:l,leafCount:o}}(e,r).filtered}(t.center,r,e.left.length),n),l=Y(_(t.right,e.left.length+e.center.length),n);return{flat:[...a.flat,{type:"blank",width:r.leftBlank,blankSide:"left"},...o.flat,{type:"blank",width:r.rightBlank,blankSide:"right"},...l.flat],leveled:V(n).map((e=>[...a.leveled[e],{type:"blank",width:r.leftBlank,blankSide:"left"},...o.leveled[e],{type:"blank",width:r.rightBlank,blankSide:"right"},...l.leveled[e]]))}}return Y(_(t.full,0),n)}function X(e){const{nested:t,flat:r,stickyLeftMap:a,stickyRightMap:o}=e,i=Object(F.a)(t.full)+1,s=U(e,i),c=r.full.length,d=r.left.length,h=r.right.length,u=s.leveled.map(((e,t)=>{const r=e.map((e=>{if("normal"===e.type){var r,s;const{colIndex:u,colSpan:f,isLeaf:b,col:p}=e,m=null!==(r=p.headerCellProps)&&void 0!==r?r:{},g={};return u<d?(g.position="sticky",g.left=a.get(u)):u>=c-h&&(g.position="sticky",g.right=o.get(u)),l.a.createElement("th",Object.assign({key:u},m,{className:n()(v.b.tableHeaderCell,m.className,{first:0===u,last:u+f===c,"lock-left":u<d,"lock-right":u>=c-h}),colSpan:f,rowSpan:b?i-t:void 0,style:{textAlign:p.align,...m.style,...g}}),null!==(s=p.title)&&void 0!==s?s:p.name)}return e.width>0?l.a.createElement("th",{key:e.blankSide}):null}));return l.a.createElement("tr",{key:t,className:n()(v.b.tableHeaderRow,{first:0===t,last:t===i-1})},r)}));return l.a.createElement("table",null,l.a.createElement("colgroup",null,s.flat.map((e=>"blank"===e.type?e.width>0?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):null:l.a.createElement("col",{key:e.colIndex,style:{width:e.width}})))),l.a.createElement("thead",null,u))}function A(e,t){const r=new Array(e).fill(t);return{getRenderRange:function(e,a,n){return r.length!==n&&function(e){if(e<r.length)r.length=e;else{const a=r.length;r.length=e,r.fill(t,a)}}(n),a<=0?e<=0?function(){const e={topIndex:0,topBlank:0},t=l(0,e);return{...e,...t}}():function(){const e=i(n),t=o(e),r=l(e,t);return{...t,...r}}():function(){const t=o(e),r=l(e+a,t);return{...t,...r}}();function o(e){if(0===r.length)return{topIndex:0,topBlank:0};let t=0,a=0;for(;t<r.length;){const n=r[t];if(a+n>=e)break;a+=n,t+=1}return function(e,t){let a=0,n=0;for(;n<e&&a<L;)n+=1,a+=r[e-n];return{topIndex:e-n,topBlank:t-a}}(t,a)}function l(e,t){let a=t.topIndex,o=t.topBlank;for(;a<n&&o<e;)o+=r[a],a+=1;return function(e,t){let a=0,o=0;for(;o<n-e&&a<L;)a+=r[e+o],o+=1;return{bottomIndex:e+o,bottomBlank:t-a}}(a,i(n)-o)}function i(e){return I(r)+(e-r.length)*t}},updateRow:function(e,t,a){r[e]=a},cache:r}}var q=r(177),G=r(365),K=r(373),J=r(724);function Z(e){return e===window?{left:0,top:0,bottom:window.innerHeight,right:window.innerWidth}:e.getBoundingClientRect()}function Q(e){return e===window?Object(E.a)(e,"resize"):new K.a((t=>{const r=new G.a((()=>{t.next()}));return r.observe(e),()=>{r.disconnect()}}))}function ee(e,t){return Object(J.a)(Object(E.a)(t,"scroll"),Q(t),Q(e)).pipe(b.a((()=>function(e,t){const r=Z(e),a=Z(t);return{offsetY:Math.max(0,a.top-r.top),offsetX:Math.max(0,a.left-r.left),clipRect:{left:Math.max(r.left,a.left),top:Math.max(r.top,a.top),right:Math.min(r.right,a.right),bottom:Math.min(r.bottom,a.bottom)}}}(e,t))))}var te=r(170);let re=!1;class ae extends l.a.Component{constructor(e){super(e),Object.defineProperty(this,"rowHeightManager",{enumerable:!0,configurable:!0,writable:!0,value:A(this.props.dataSource.length,this.props.estimatedRowHeight)}),Object.defineProperty(this,"artTableWrapperRef",{enumerable:!0,configurable:!0,writable:!0,value:l.a.createRef()}),Object.defineProperty(this,"doms",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rootSubscription",{enumerable:!0,configurable:!0,writable:!0,value:new i.a}),Object.defineProperty(this,"data$",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.state={...P(e),hasScroll:!0,needRenderLock:!0,offsetY:0,offsetX:0,maxRenderHeight:600,maxRenderWidth:800}}getDoms(){return this.doms}updateStickyScroll(){const{stickyScroll:e,artTable:t,stickyScrollItem:r}=this.doms;if(!t)return;const a=t.querySelector(`.${v.b.tableBody} table`).offsetWidth,n=t.offsetWidth,o=(null==B&&(B=new s.a(M()),H.pipe(Object(b.a)((()=>M()))).subscribe(B)),B.value);e.style.marginTop=`-${o.height}px`,n>=a?this.state.hasScroll&&this.setState({hasScroll:!1}):!this.state.hasScroll&&o.height>5&&this.setState({hasScroll:!0}),r.style.width=a+"px"}renderTableHeader({horizontal:e}){const{stickyTop:t,hasHeader:r}=this.props,{flat:a,nested:o,useVirtual:i,stickyLeftMap:s,stickyRightMap:c}=this.state;return l.a.createElement("div",{className:n()(v.b.tableHeader,"no-scrollbar"),style:{top:0===t?void 0:t,display:r?void 0:"none"}},l.a.createElement(X,{nested:o,flat:a,hoz:e,useVirtual:i,stickyLeftMap:s,stickyRightMap:c}))}updateOffsetX(e){this.state.useVirtual.horizontal&&Math.abs(e-this.state.offsetX)>=50&&this.setState({offsetX:e})}syncHorizontalScrollFromTableBody(){this.syncHorizontalScroll(this.doms.tableBody.scrollLeft)}syncHorizontalScroll(e){this.updateOffsetX(e);const{tableBody:t,artTableWrapper:r}=this.doms,{flat:a}=this.state,n=a.left.length>0&&this.state.needRenderLock&&e>0,o=C(r,v.b.leftLockShadow);n?o.classList.add("show-shadow"):o.classList.remove("show-shadow");const l=a.right.length>0&&this.state.needRenderLock&&e<t.scrollWidth-t.clientWidth,i=C(r,v.b.rightLockShadow);l?i.classList.add("show-shadow"):i.classList.remove("show-shadow")}getVerticalRenderRange(){const{dataSource:e}=this.props,{useVirtual:t,offsetY:r,maxRenderHeight:a}=this.state,n=e.length;return t.vertical?this.rowHeightManager.getRenderRange(r,a,n):function(e){return{topIndex:0,topBlank:0,bottomIndex:e,bottomBlank:0}}(n)}getHorizontalRenderRange(){const{offsetX:e,maxRenderWidth:t,useVirtual:r,flat:a}=this.state;if(!r.horizontal)return{leftIndex:0,leftBlank:0,rightIndex:a.full.length,rightBlank:0};let n=0,o=0,l=0,i=0;const s=Math.max(0,e-L);for(;n<a.center.length;){const e=a.center[n];if(!(e.width+l<s))break;n+=1,l+=e.width}const c=t+(s-l)+200;for(;n+o<a.center.length;){const e=a.center[n+o];if(!(e.width+i<c))break;i+=e.width,o+=1}const d=a.center.length-n-o;return{leftIndex:n,leftBlank:l,rightIndex:n+o,rightBlank:I(a.center.slice(a.center.length-d).map((e=>e.width)))}}getRenderRange(){return{vertical:this.getVerticalRenderRange(),horizontal:this.getHorizontalRenderRange()}}getFlatHozWrappedCols(e){const{flat:t}=this.state;return[...t.left.map(((e,t)=>({type:"normal",col:e,colIndex:t}))),e.leftBlank>0&&{type:"blank",blankSide:"left",width:e.leftBlank},...t.center.slice(e.leftIndex,e.rightIndex).map(((r,a)=>({type:"normal",col:r,colIndex:t.left.length+e.leftIndex+a}))),e.rightBlank>0&&{type:"blank",blankSide:"right",width:e.rightBlank},...t.right.map(((e,r)=>({type:"normal",col:e,colIndex:t.full.length-t.right.length+r})))].filter(Boolean)}renderTableBody(e){const{vertical:t,horizontal:r}=e,{dataSource:a,getRowProps:o,primaryKey:i,isLoading:s,emptyCellHeight:c}=this.props,d=this.getFlatHozWrappedCols(r),h=l.a.createElement("colgroup",null,d.map((e=>"blank"===e.type?l.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):l.a.createElement("col",{key:e.colIndex,style:{width:e.col.width}}))));if(t.bottomIndex-t.topIndex==0){const{components:e,emptyContent:t}=this.props;let r=e.EmptyContent;return null==r&&null!=t&&(re||(re=!0,console.warn("[ali-react-table] BaseTable props.emptyContent \u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u4f7f\u7528 props.components.EmptyContent \u6765\u81ea\u5b9a\u4e49\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u8868\u683c\u8868\u73b0")),r=()=>t),l.a.createElement("div",{className:v.b.tableBody},l.a.createElement(j,{colgroup:h,colSpan:d.length,isLoading:s,EmptyContent:r,emptyCellHeight:c}))}const{flat:u,stickyLeftMap:f,stickyRightMap:b}=this.state,p=u.full.length,m=u.left.length,g=u.right.length,k=new q.a,w=a.slice(t.topIndex,t.bottomIndex).map((function(e,s){const c=t.topIndex+s;k.stripUpwards(c);const h=o(e,c),u=n()(v.b.tableRow,{first:0===c,last:c===a.length-1,even:c%2==0,odd:c%2==1},null==h?void 0:h.className);return l.a.createElement("tr",Object.assign({},h,{className:u,key:y.a.safeGetRowKey(i,e,c),"data-rowindex":c}),d.map((a=>"blank"===a.type?l.a.createElement("td",{key:a.blankSide}):function(e,a,o,i){var s,c;if(k.testSkip(a,i))return null;const d=y.a.safeGetValue(o,e,a),h=null!==(s=null===(c=o.getCellProps)||void 0===c?void 0:c.call(o,d,e,a))&&void 0!==s?s:{};let u=d;o.render&&(u=o.render(d,e,a));let j=1,w=1;if(o.getSpanRect){const t=o.getSpanRect(d,e,a);j=null==t?1:t.right-i,w=null==t?1:t.bottom-a}else null!=h.colSpan&&(j=h.colSpan),null!=h.rowSpan&&(w=h.rowSpan);w=Math.min(w,t.bottomIndex-a),j=Math.min(j,m+r.rightIndex-i);const x=j>1||w>1;x&&k.add(a,i,j,w);const S={};i<m?(S.position="sticky",S.left=f.get(i)):i>=p-g&&(S.position="sticky",S.right=b.get(i));return l.a.createElement("td",{key:i,...h,className:n()(v.b.tableCell,h.className,{first:0===i,last:i+j===p,"lock-left":i<m,"lock-right":i>=p-g}),...x?{colSpan:j,rowSpan:w}:null,style:{textAlign:o.align,...h.style,...S}},u)}(e,c,a.col,a.colIndex))))}));return l.a.createElement("div",{className:v.b.tableBody},l.a.createElement("div",{key:"top-blank",className:n()(v.b.virtualBlank,"top"),style:{height:t.topBlank}}),l.a.createElement("table",null,h,l.a.createElement("tbody",null,w)),l.a.createElement("div",{key:"bottom-blank",className:n()(v.b.virtualBlank,"bottom"),style:{height:t.bottomBlank}}))}isLock(){const{nested:e}=this.state;return e.left.length>0||e.right.length>0}render(){const{dataSource:e,className:t,style:r,hasHeader:a,useOuterBorder:o,isStickyHead:i,isLoading:s,components:c}=this.props,{flat:d}=this.state,h=this.getRenderRange();return(s=>{const c={className:n()(v.b.artTableWrapper,{"use-outer-border":o,sticky:i,empty:0===e.length,lock:this.isLock(),"has-header":a},t),style:r,[O]:this.artTableWrapperRef};return l.a.createElement(v.d,Object.assign({},c),s)})(l.a.createElement(te.b,{visible:s,LoadingIcon:c.LoadingIcon,LoadingContentWrapper:c.LoadingContentWrapper},l.a.createElement("div",{className:v.b.artTable},this.renderTableHeader(h),this.renderTableBody(h),l.a.createElement("div",{className:v.b.lockShadowMask,style:{left:0,width:I(d.left.map((e=>e.width)))+v.c}},l.a.createElement("div",{className:n()(v.b.lockShadow,v.b.leftLockShadow)})),l.a.createElement("div",{className:v.b.lockShadowMask,style:{right:0,width:I(d.right.map((e=>e.width)))+v.c}},l.a.createElement("div",{className:n()(v.b.lockShadow,v.b.rightLockShadow)}))),l.a.createElement("div",{className:v.b.stickyScroll,style:{display:this.state.hasScroll?"block":"none",bottom:this.props.stickyBottom}},l.a.createElement("div",{className:v.b.stickyScrollItem}))))}componentDidMount(){this.updateDoms(),this.data$=new s.a({props:this.props,state:this.state,prevProps:null,prevState:null}),this.initSubscriptions(),this.didMountOrUpdate()}componentDidUpdate(e,t){this.updateDoms(),this.data$.next({props:this.props,state:this.state,prevProps:e,prevState:t}),this.didMountOrUpdate(e,t)}didMountOrUpdate(e,t){this.syncHorizontalScrollFromTableBody(),this.updateStickyScroll(),this.adjustNeedRenderLock(),this.updateRowHeightManager(e),this.resetStickyScrollIfNecessary(t)}resetStickyScrollIfNecessary(e){null!=e&&this.state.hasScroll&&!e.hasScroll&&(this.doms.stickyScroll.scrollLeft=0)}initSubscriptions(){const{tableHeader:e,tableBody:t,stickyScroll:r}=this.doms;this.rootSubscription.add(H.subscribe((()=>{this.updateStickyScroll(),this.adjustNeedRenderLock()}))),this.rootSubscription.add(function(e,t){const r=new Set;function a(t,a){r.clear();for(const n of e)n!==t&&(n.scrollLeft=a,r.add(n))}const n=new i.a;for(const o of e){const e=()=>{if(r.has(o))return void r.delete(o);const e=o.scrollLeft;a(o,e),t(e)};o.addEventListener("scroll",e,{passive:!0}),n.add((()=>o.removeEventListener("scroll",e)))}return n}([t,r,e],(e=>{this.syncHorizontalScroll(e)})));const a=this.data$.pipe(b.a((e=>e.props.flowRoot)),p.a((e=>{const t=this.artTableWrapperRef.current;if("auto"===e){const e=getComputedStyle(t);return Object(c.a)("visible"!==e.overflowY?t:window)}return"self"===e?Object(c.a)(t):"function"==typeof e?Object(d.a)(0,h.a).pipe(b.a(e)):Object(c.a)(e)})),m.a()).pipe(p.a((e=>ee(this.doms.artTable,e))));this.rootSubscription.add(Object(u.a)([a.pipe(b.a((e=>e.clipRect)),m.a(N)),this.data$.pipe(g.a((e=>{var t;return!(null===(t=e.prevProps)||void 0===t?void 0:t.isLoading)&&e.props.isLoading})))]).subscribe((([e])=>{const{artTableWrapper:t}=this.doms,r=C(t,v.b.loadingIndicator);if(!r)return;const a=e.bottom-e.top;r.style.top=a/2+"px",r.style.marginTop=a/2+"px"}))),this.rootSubscription.add(a.pipe(g.a((()=>{const{horizontal:e,vertical:t}=this.state.useVirtual;return e||t})),b.a((({clipRect:e,offsetY:t})=>({maxRenderHeight:e.bottom-e.top,maxRenderWidth:e.right-e.left,offsetY:t}))),m.a(((e,t)=>Math.abs(e.maxRenderWidth-t.maxRenderWidth)<50&&Math.abs(e.maxRenderHeight-t.maxRenderHeight)<50&&Math.abs(e.offsetY-t.offsetY)<50))).subscribe((e=>{this.setState(e)})))}componentWillUnmount(){this.rootSubscription.unsubscribe()}updateDoms(){const e=this.artTableWrapperRef.current,t=C(e,v.b.artTable);this.doms={artTableWrapper:e,artTable:t,tableHeader:C(t,v.b.tableHeader),tableBody:C(t,v.b.tableBody),stickyScroll:C(e,v.b.stickyScroll),stickyScrollItem:C(e,v.b.stickyScrollItem)}}updateRowHeightManager(e){var t;const r=this.doms.artTable.querySelector(`.${v.b.virtualBlank}.top`),a=null!==(t=null==r?void 0:r.clientHeight)&&void 0!==t?t:0;let n=-1,o=-1;for(const s of(l=this.doms.artTable,i=v.b.tableRow,null==l?void 0:l.querySelectorAll("."+i))){const e=Number(s.dataset.rowindex);if(isNaN(e))continue;n=Math.max(n,e);const t=s.offsetTop+a,r=s.offsetHeight;o=Math.max(o,t+r),this.rowHeightManager.updateRow(e,t,r)}var l,i;if(-1!==n&&o<this.state.offsetY+this.state.maxRenderHeight){this.getVerticalRenderRange().bottomIndex-1>n&&this.forceUpdate()}}adjustNeedRenderLock(){const{needRenderLock:e,flat:t}=this.state;if(this.isLock()){const r=I(t.full.map((e=>e.width)))>this.doms.artTable.clientWidth;e!==r&&this.setState({needRenderLock:r})}else e&&this.setState({needRenderLock:!1})}}Object.defineProperty(ae,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{isStickyHead:!0,stickyTop:0,stickyBottom:0,useVirtual:"auto",estimatedRowHeight:48,hasHeader:!0,isLoading:!1,components:{},getRowProps:f.a,flowRoot:"auto"}}),Object.defineProperty(ae,"getDerivedStateFromProps",{enumerable:!0,configurable:!0,writable:!0,value:P})},322:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(147);function n(e,t="pre"){const r=[];return function e(n){if(null==n)return;for(const o of n)Object(a.a)(o)?r.push(o):"pre"===t?(r.push(o),e(o.children)):"post"===t?(e(o.children),r.push(o)):e(o.children)}(e),r}},323:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(147);function n(e){let t=-1;return function e(r,n){for(const o of r)Object(a.a)(o)?t=Math.max(t,n):e(o.children,n+1)}(e,0),t}},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(145),n=r(160),o=r(349),l=r(0),i=r.n(l),s=r(1);function c({exampleName:e}){return i.a.createElement("div",{style:{marginTop:16}},i.a.createElement("p",null,"\u65e0\u6cd5\u627e\u5230\u540d\u4e3a ",i.a.createElement("b",null,e)," \u7684\u793a\u4f8b"))}function d({stories:e,path:t}){var r,o;const l=Object(s.l)(),d=Object(s.k)(),h=Object.keys(e).filter((e=>"default"!==e)),u=new URLSearchParams(l.search),f=null!==(r=u.get("example"))&&void 0!==r?r:h[0],b=h.indexOf(f),p=null!==(o=e[f])&&void 0!==o?o:c,m=e=>{u.set("example",e),d.replace({search:String(u)})},g=()=>t?i.a.createElement(a.a,{component:"a",href:String(new URL(t,"https://github.com/alibaba/ali-react-table/blob/master/packages/website/examples/"))},"\u67e5\u770b\u6e90\u7801"):null;return i.a.createElement(i.a.Fragment,null,h.length>1?i.a.createElement("div",{style:{marginBottom:16,display:"flex",alignItems:"center",flexWrap:"wrap"}},i.a.createElement("span",null,"\u793a\u4f8b\uff08",b+1," / ",h.length,"\uff09\uff1a"),i.a.createElement(n.a,{style:{marginLeft:8,width:200},dataSource:h,value:f,onChange:m}),i.a.createElement(a.a.Group,{style:{marginLeft:8}},i.a.createElement(a.a,{onClick:()=>{-1===b?m(h[0]):-1!==b&&b>0&&m(h[b-1])},disabled:0===b},"\u4e0a\u4e00\u4e2a"),i.a.createElement(a.a,{onClick:()=>{-1===b?m(h[0]):b<h.length-1&&m(h[b+1])},disabled:b===h.length-1},"\u4e0b\u4e00\u4e2a"),g())):i.a.createElement("div",{style:{marginBottom:t?16:0}},g()),i.a.createElement(p,{exampleName:f}))}function h(e){return i.a.createElement(o.a,{fallback:"\u793a\u4f8b\u8f7d\u5165\u4e2d..."},(()=>i.a.createElement(d,Object.assign({},e))))}},356:function(e,t,r){"use strict";const a=Symbol("factory-symbol");function n(e,t="auto"){const r=Object.keys(e);function o(t){const o=Object.assign({},t);return r.forEach((t=>{if(o[t]===n.empty)return void delete o[t];const r=e[t];var l,i;(i=r)&&i[a]?o[t]=r(o[t]):o[t]=null!==(l=o[t])&&void 0!==l?l:r})),o}function l(e){return("auto"===t?Array.isArray(e):t)?null==e?[]:e.map(o):o(e)}return l[a]=!0,l.extends=e=>{const r=n(e,t);return e=>l(r(e))},l}n.empty=Symbol("proto.empty"),n.string=e=>{if(null!=e&&"string"!=typeof e)throw new Error("must be string");return e},n.string[a]=!0,n.number=e=>{if(null!=e&&"number"!=typeof e)throw new Error("must be number");return e},n.number[a]=!0,n.notNull=e=>{if(null==e)throw new Error("must be not null");return e},n.notNull[a]=!0,n.object=e=>n(e,!1),n.array=e=>n(e,!0),t.a=n},379:function(e,t,r){var a={"./af":187,"./af.js":187,"./ar":188,"./ar-dz":189,"./ar-dz.js":189,"./ar-kw":190,"./ar-kw.js":190,"./ar-ly":191,"./ar-ly.js":191,"./ar-ma":192,"./ar-ma.js":192,"./ar-sa":193,"./ar-sa.js":193,"./ar-tn":194,"./ar-tn.js":194,"./ar.js":188,"./az":195,"./az.js":195,"./be":196,"./be.js":196,"./bg":197,"./bg.js":197,"./bm":198,"./bm.js":198,"./bn":199,"./bn-bd":200,"./bn-bd.js":200,"./bn.js":199,"./bo":201,"./bo.js":201,"./br":202,"./br.js":202,"./bs":203,"./bs.js":203,"./ca":204,"./ca.js":204,"./cs":205,"./cs.js":205,"./cv":206,"./cv.js":206,"./cy":207,"./cy.js":207,"./da":208,"./da.js":208,"./de":209,"./de-at":210,"./de-at.js":210,"./de-ch":211,"./de-ch.js":211,"./de.js":209,"./dv":212,"./dv.js":212,"./el":213,"./el.js":213,"./en-au":214,"./en-au.js":214,"./en-ca":215,"./en-ca.js":215,"./en-gb":216,"./en-gb.js":216,"./en-ie":217,"./en-ie.js":217,"./en-il":218,"./en-il.js":218,"./en-in":219,"./en-in.js":219,"./en-nz":220,"./en-nz.js":220,"./en-sg":221,"./en-sg.js":221,"./eo":222,"./eo.js":222,"./es":223,"./es-do":224,"./es-do.js":224,"./es-mx":225,"./es-mx.js":225,"./es-us":226,"./es-us.js":226,"./es.js":223,"./et":227,"./et.js":227,"./eu":228,"./eu.js":228,"./fa":229,"./fa.js":229,"./fi":230,"./fi.js":230,"./fil":231,"./fil.js":231,"./fo":232,"./fo.js":232,"./fr":233,"./fr-ca":234,"./fr-ca.js":234,"./fr-ch":235,"./fr-ch.js":235,"./fr.js":233,"./fy":236,"./fy.js":236,"./ga":237,"./ga.js":237,"./gd":238,"./gd.js":238,"./gl":239,"./gl.js":239,"./gom-deva":240,"./gom-deva.js":240,"./gom-latn":241,"./gom-latn.js":241,"./gu":242,"./gu.js":242,"./he":243,"./he.js":243,"./hi":244,"./hi.js":244,"./hr":245,"./hr.js":245,"./hu":246,"./hu.js":246,"./hy-am":247,"./hy-am.js":247,"./id":248,"./id.js":248,"./is":249,"./is.js":249,"./it":250,"./it-ch":251,"./it-ch.js":251,"./it.js":250,"./ja":252,"./ja.js":252,"./jv":253,"./jv.js":253,"./ka":254,"./ka.js":254,"./kk":255,"./kk.js":255,"./km":256,"./km.js":256,"./kn":257,"./kn.js":257,"./ko":258,"./ko.js":258,"./ku":259,"./ku.js":259,"./ky":260,"./ky.js":260,"./lb":261,"./lb.js":261,"./lo":262,"./lo.js":262,"./lt":263,"./lt.js":263,"./lv":264,"./lv.js":264,"./me":265,"./me.js":265,"./mi":266,"./mi.js":266,"./mk":267,"./mk.js":267,"./ml":268,"./ml.js":268,"./mn":269,"./mn.js":269,"./mr":270,"./mr.js":270,"./ms":271,"./ms-my":272,"./ms-my.js":272,"./ms.js":271,"./mt":273,"./mt.js":273,"./my":274,"./my.js":274,"./nb":275,"./nb.js":275,"./ne":276,"./ne.js":276,"./nl":277,"./nl-be":278,"./nl-be.js":278,"./nl.js":277,"./nn":279,"./nn.js":279,"./oc-lnc":280,"./oc-lnc.js":280,"./pa-in":281,"./pa-in.js":281,"./pl":282,"./pl.js":282,"./pt":283,"./pt-br":284,"./pt-br.js":284,"./pt.js":283,"./ro":285,"./ro.js":285,"./ru":286,"./ru.js":286,"./sd":287,"./sd.js":287,"./se":288,"./se.js":288,"./si":289,"./si.js":289,"./sk":290,"./sk.js":290,"./sl":291,"./sl.js":291,"./sq":292,"./sq.js":292,"./sr":293,"./sr-cyrl":294,"./sr-cyrl.js":294,"./sr.js":293,"./ss":295,"./ss.js":295,"./sv":296,"./sv.js":296,"./sw":297,"./sw.js":297,"./ta":298,"./ta.js":298,"./te":299,"./te.js":299,"./tet":300,"./tet.js":300,"./tg":301,"./tg.js":301,"./th":302,"./th.js":302,"./tk":303,"./tk.js":303,"./tl-ph":304,"./tl-ph.js":304,"./tlh":305,"./tlh.js":305,"./tr":306,"./tr.js":306,"./tzl":307,"./tzl.js":307,"./tzm":308,"./tzm-latn":309,"./tzm-latn.js":309,"./tzm.js":308,"./ug-cn":310,"./ug-cn.js":310,"./uk":311,"./uk.js":311,"./ur":312,"./ur.js":312,"./uz":313,"./uz-latn":314,"./uz-latn.js":314,"./uz.js":313,"./vi":315,"./vi.js":315,"./x-pseudo":316,"./x-pseudo.js":316,"./yo":317,"./yo.js":317,"./zh-cn":318,"./zh-cn.js":318,"./zh-hk":319,"./zh-hk.js":319,"./zh-mo":320,"./zh-mo.js":320,"./zh-tw":321,"./zh-tw.js":321};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=379}}]);