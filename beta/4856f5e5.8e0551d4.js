(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{126:function(e,t,n){"use strict";function a(e,t,n){return e.getValue?e.getValue(t,n):t[e.code]}n.d(t,"a",(function(){return r}));var r={safeRenderHeader:function(e){var t;return null!==(t=e.title)&&void 0!==t?t:e.name},safeGetValue:a,safeGetRowKey:function(e,t,n){var a;return"string"==typeof e?a=t[e]:"function"==typeof e&&(a=e(t)),null==a&&(a=String(n)),a},safeGetCellProps:function(e,t,n){if(e.getCellProps){var r=a(e,t,n);return e.getCellProps(r,t,n)||{}}return{}},safeRender:function(e,t,n){var r=a(e,t,n);return e.render?e.render(r,t,n):r}}},127:function(e,t,n){"use strict";function a(e){return null==e.children||0===e.children.length}n.d(t,"a",(function(){return a}))},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return m}));var a=n(131),r=n(122);function o(){var e=Object(a.a)(["\n  --row-height: 48px;\n  --color: #333;\n  --bgcolor: white;\n  --hover-bgcolor: var(--hover-color, #f5f5f5);\n  --highlight-bgcolor: #eee;\n\n  --header-row-height: 32px;\n  --header-color: #5a6c84;\n  --header-bgcolor: #e9edf2;\n  --header-hover-bgcolor: #ddd;\n  --header-highlight-bgcolor: #e4e8ed;\n\n  --cell-padding: 8px 12px;\n  --font-size: 12px;\n  --line-height: 1.28571;\n  --lock-shadow: rgba(152, 152, 152, 0.5) 0 0 6px 2px;\n\n  --border-color: #dfe3e8;\n  --cell-border: 1px solid var(--border-color);\n  --cell-border-horizontal: var(--cell-border);\n  --cell-border-vertical: var(--cell-border);\n  --header-cell-border: 1px solid var(--border-color);\n  --header-cell-border-horizontal: var(--header-cell-border);\n  --header-cell-border-vertical: var(--header-cell-border);\n\n  box-sizing: border-box;\n  * {\n    box-sizing: border-box;\n  }\n  cursor: default;\n  color: var(--color);\n  font-size: var(--font-size);\n  line-height: var(--line-height);\n  position: relative;\n\n  // \u8868\u683c\u5916\u8fb9\u6846\u7531 art-table-wrapper \u63d0\u4f9b\uff0c\u800c\u4e0d\u662f\u7531\u5355\u5143\u683c\u63d0\u4f9b\n  &.use-outer-border {\n    border-top: var(--cell-border-horizontal);\n    border-right: var(--cell-border-vertical);\n    border-bottom: var(--cell-border-horizontal);\n    border-left: var(--cell-border-vertical);\n\n    td.first,\n    th.first {\n      border-left: none;\n    }\n    td.last,\n    th.last {\n      border-right: none;\n    }\n    tr.first th,\n    tr.first td {\n      border-top: none;\n    }\n    tr.last td {\n      border-bottom: none;\n    }\n  }\n\n  .no-scrollbar {\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  ."," {\n    overflow-x: auto;\n    overflow-y: hidden;\n    background: var(--header-bgcolor);\n  }\n\n  ."," {\n    overflow-x: auto;\n    overflow-y: hidden;\n    background: var(--bgcolor);\n  }\n\n  &.sticky ."," {\n    position: sticky;\n    top: 0;\n    z-index: ",";\n  }\n\n  table {\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: separate;\n    border-spacing: 0;\n    display: table;\n    margin: 0;\n    padding: 0;\n  }\n\n  // \u5728 tr \u4e0a\u8bbe\u7f6e .no-hover \u53ef\u4ee5\u7981\u7528\u9f20\u6807\u60ac\u505c\u6548\u679c\n  tr:not(.no-hover):hover > td {\n    background: var(--hover-bgcolor);\n  }\n  // \u5728 tr \u8bbe\u7f6e highlight \u53ef\u4ee5\u4e3a\u5e95\u4e0b\u7684 td \u8bbe\u7f6e\u4e3a\u9ad8\u4eae\u8272\n  // \u800c\u8bbe\u7f6e .no-highlight \u7684\u8bdd\u5219\u53ef\u4ee5\u7981\u7528\u9ad8\u4eae\u6548\u679c\uff1b\n  tr:not(.no-highlight).highlight > td {\n    background: var(--highlight-bgcolor);\n  }\n\n  th {\n    font-weight: normal;\n    text-align: left;\n    padding: var(--cell-padding);\n    height: var(--header-row-height);\n    color: var(--header-color);\n    background: var(--header-bgcolor);\n    border: none;\n    border-right: var(--header-cell-border-vertical);\n    border-bottom: var(--header-cell-border-horizontal);\n  }\n  tr.first th {\n    border-top: var(--header-cell-border-horizontal);\n  }\n  th.first {\n    border-left: var(--header-cell-border-vertical);\n  }\n\n  td {\n    padding: var(--cell-padding);\n    background: var(--bgcolor);\n    height: var(--row-height);\n    border: none;\n    border-right: var(--cell-border-vertical);\n    border-bottom: var(--cell-border-horizontal);\n  }\n  td.first {\n    border-left: var(--cell-border-vertical);\n  }\n  tr.first td {\n    border-top: var(--cell-border-horizontal);\n  }\n  &.has-header tr.first td {\n    border-top: none;\n  }\n\n  .lock-left,\n  .lock-right {\n    z-index: ",";\n  }\n\n  //#region \u9501\u5217\u9634\u5f71\n  ."," {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    z-index: ",";\n    pointer-events: none;\n    overflow: hidden;\n\n    ."," {\n      height: 100%;\n    }\n\n    ."," {\n      margin-right: ","px;\n      box-shadow: none;\n\n      &.show-shadow {\n        box-shadow: var(--lock-shadow);\n        border-right: var(--cell-border-vertical);\n      }\n    }\n\n    ."," {\n      margin-left: ","px;\n      box-shadow: none;\n\n      &.show-shadow {\n        box-shadow: var(--lock-shadow);\n        border-left: var(--cell-border-vertical);\n      }\n    }\n  }\n  //#endregion\n\n  //#region \u7a7a\u8868\u683c\u5c55\u73b0\n  ."," {\n    pointer-events: none;\n    color: #99a3b3;\n    font-size: 12px;\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n\n    .empty-image {\n      width: 50px;\n      height: 50px;\n    }\n\n    .empty-tips {\n      margin-top: 16px;\n      line-height: 1.5;\n    }\n  }\n  //#endregion\n\n  //#region \u7c98\u6027\u6eda\u52a8\u6761\n  ."," {\n    overflow: auto;\n    position: sticky;\n    bottom: 0;\n    z-index: ",";\n    margin-top: -17px;\n  }\n\n  ."," {\n    // \u5fc5\u987b\u6709\u9ad8\u5ea6\u624d\u80fd\u51fa\u73b0\u6eda\u52a8\u6761\n    height: 1px;\n    visibility: hidden;\n  }\n  //#endregion\n\n  //#region \u52a0\u8f7d\u6837\u5f0f\n  ."," {\n    position: relative;\n\n    ."," {\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      pointer-events: none;\n    }\n\n    ."," {\n      position: sticky;\n      z-index: ",";\n      transform: translateY(-50%);\n    }\n  }\n  //#endregion\n"]);return o=function(){return e},e}var i=20,l={artTableWrapper:"art-table-wrapper",artTable:"art-table",tableHeader:"art-table-header",tableBody:"art-table-body",tableRow:"art-table-row",tableHeaderRow:"art-table-header-row",tableCell:"art-table-cell",tableHeaderCell:"art-table-header-cell",virtualBlank:"art-virtual-blank",stickyScroll:"art-sticky-scroll",stickyScrollItem:"art-sticky-scroll-item",lockShadowMask:"art-lock-shadow-mask",lockShadow:"art-lock-shadow",leftLockShadow:"art-left-lock-shadow",rightLockShadow:"art-right-lock-shadow",emptyWrapper:"art-empty-wrapper",loadingWrapper:"art-loading-wrapper",loadingIndicatorWrapper:"art-loading-indicator-wrapper",loadingIndicator:"art-loading-indicator"},s=5,c=10,d=20,u=30,h=40,m=r.b.div(o(),l.tableHeader,l.tableBody,l.tableHeader,c,s,l.lockShadowMask,d,l.lockShadow,l.leftLockShadow,i,l.rightLockShadow,i,l.emptyWrapper,l.stickyScroll,u,l.stickyScrollItem,l.loadingWrapper,l.loadingIndicatorWrapper,l.loadingIndicator,h)},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(0),r=n.n(a),o=n(122);const i=o.b.div`
  display: inline-flex;
  align-items: center;
`,l=Object(o.b)(i)`
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
`;const s={Loading:function(e){return r.a.createElement("svg",Object.assign({width:"16",height:"16",fill:"currentColor",viewBox:"0 0 1024 1024"},e),r.a.createElement("path",{d:"M512 74.667c-17.067 0-32 14.933-32 32V256c0 17.067 14.933 32 32 32s32-14.933 32-32V106.667c0-17.067-14.933-32-32-32zm181.333 288c8.534 0 17.067-2.134 23.467-8.534L821.333 249.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L672 309.333c-12.8 12.8-12.8 32 0 44.8 4.267 6.4 12.8 8.534 21.333 8.534zm224 117.333H768c-17.067 0-32 14.933-32 32s14.933 32 32 32h149.333c17.067 0 32-14.933 32-32s-14.933-32-32-32zM714.667 669.867c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8L774.4 819.2c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L714.667 669.867zM512 736c-17.067 0-32 14.933-32 32v149.333c0 17.067 14.933 32 32 32s32-14.933 32-32V768c0-17.067-14.933-32-32-32zm-202.667-66.133L204.8 774.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l104.534-104.533c12.8-12.8 12.8-32 0-44.8s-36.267-12.8-46.934 0zM288 512c0-17.067-14.933-32-32-32H106.667c-17.067 0-32 14.933-32 32s14.933 32 32 32H256c17.067 0 32-14.933 32-32zm-40.533-309.333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L307.2 352c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L247.467 202.667z"}))},CaretDown:function(e){return r.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),r.a.createElement("path",{d:"M24 12L16 22 8 12z"}))},CaretRight:function(e){return r.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},e),r.a.createElement("path",{d:"M12 8L22 16 12 24z"}))},Info:function(e){return r.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 16 16"},e),r.a.createElement("path",{d:"M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"}),r.a.createElement("path",{d:"M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"}))}}},143:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),o=n(128),i=r.a.memo((function(){return r.a.createElement("svg",{style:{margin:"auto",display:"block",width:40,height:40},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},r.a.createElement("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#23a7fa",strokeDasharray:"188 64",strokeLinecap:"round",strokeWidth:"10"},r.a.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})))}));function l(e){var t=e.children,n=e.visible;return r.a.createElement("div",{className:"art-loading-content-wrapper",style:{filter:n?"blur(1px)":"none"}},t)}function s(e){var t=e.visible,n=e.children,a=e.LoadingContentWrapper,s=void 0===a?l:a,c=e.LoadingIcon,d=void 0===c?i:c;return r.a.createElement("div",{className:o.a.loadingWrapper},t&&r.a.createElement("div",{className:o.a.loadingIndicatorWrapper},r.a.createElement("div",{className:o.a.loadingIndicator},r.a.createElement(d,null))),r.a.createElement(s,{visible:t,children:n}))}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return re}));var a=n(115),r=n.n(a),o=n(0),i=n.n(o),l=n(312),s=n(600),c=n(594),d=n(606),u=n(602),h=n(601),m=n(597),p=n(363),f=n(593),g=n(595),b=n(596),v=n(126),y=n(128),k=i.a.memo((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{alt:"empty-image",className:"empty-image",src:"//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"}),i.a.createElement("div",{className:"empty-tips"},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",i.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2"))}));function w(e){var t=e.colgroup,n=e.colSpan,a=e.isLoading,o=e.emptyCellHeight,l=e.EmptyContent,s=void 0===l?k:l,c=!a;return i.a.createElement("table",null,t,i.a.createElement("tbody",null,i.a.createElement("tr",{className:r()(y.a.tableRow,"first","last","no-hover"),"data-rowindex":0},i.a.createElement("td",{className:r()(y.a.tableCell,"first","last"),colSpan:n,style:{height:null!=o?o:200}},c&&i.a.createElement("div",{className:y.a.emptyWrapper},i.a.createElement(s,null))))))}var j=n(127),x=n(150),E=n(604),S=n(592),C=n(409),N=n(605);const z="v3"===(null!=n(122).a?"v5":"v3")?"innerRef":"ref",L=100;function R(e){let t=0;return e.forEach((e=>{t+=e})),t}const O=Object(E.a)((()=>Object(S.a)(window,"resize").pipe(Object(N.a)(150,C.b,{leading:!0,trailing:!0}))));function M(){const e=document.createElement("div");e.style.position="absolute",e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.top="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{width:t,height:n}}let I;function T(e,t){return null==e?void 0:e.querySelector("."+t)}function B(e,t){const n=Object.prototype.hasOwnProperty;if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(let o=0;o<a.length;o++)if(!n.call(t,a[o])||!Object.is(e[a[o]],t[a[o]]))return!1;return!0}function D(e,t){return null==e||"auto"===e?t:e}let H=!1;function _(e){H||(H=!0,console.warn("[ali-react-table] column.hidden \u5df2\u7ecf\u8fc7\u65f6\uff0c\u5982\u679c\u9700\u8981\u9690\u85cf\u8be5\u5217\uff0c\u8bf7\u5c06\u5176\u4ece columns \u6570\u7ec4\u4e2d\u79fb\u9664",e))}function W(e){let t=0;for(const a of e){if(!n(a))break;t+=1}return t;function n(e){return Object(j.a)(e)?e.lock:e.lock||e.children.some(n)}}function V(e,t){const{useVirtual:n,columns:a,dataSource:r,defaultColumnWidth:o}=e,i=function(e,t){return null!=e&&Array.isArray(e)||(console.warn("[ali-react-table] <BaseTable /> props.columns \u9700\u8981\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4",e),e=[]),function e(n){const a=[];for(let r of n)if(null==r.width&&null!=t&&(r={...r,width:t}),Object(j.a)(r))r.hidden?_(r):a.push(r);else{const t=e(r.children);t.length>0&&a.push({...r,children:t})}return a}(e)}(a,o),l=W(i),s=Object(x.a)(i,"leaf-only");if(l===i.length)return{flat:{left:[],right:[],full:s,center:s},nested:{left:[],right:[],full:i,center:i},useVirtual:{horizontal:!1,vertical:!1,header:!1},stickyLeftMap:new Map,stickyRightMap:new Map};const c=i.slice(0,l),d=W(i.slice().reverse()),u=i.slice(l,i.length-d),h=i.slice(i.length-d),m=s.length>=100&&s.every((e=>null!=e.width)),p=r.length>=100,f="object"!=typeof n?{horizontal:D(n,m),vertical:D(n,p),header:D(n,!1)}:{horizontal:D(n.horizontal,m),vertical:D(n.vertical,p),header:D(n.header,p)},g={left:Object(x.a)(c,"leaf-only"),full:s,right:Object(x.a)(h,"leaf-only"),center:Object(x.a)(u,"leaf-only")},b=g.full.length,v=g.left.length,y=g.right.length,k=new Map;let w=0;for(let j=0;j<v;j++)k.set(j,w),w+=g.full[j].width;const E=new Map;let S=0;for(let j=0;j<y;j++)E.set(b-1-j,S),S+=g.full[b-1-j].width;return{flat:g,nested:{left:c,full:i,right:h,center:u},useVirtual:f,stickyLeftMap:k,stickyRightMap:E}}var U=n(124),P=n(151);function Y(e){for(var t=[],n=0;n<e;n++)t.push(n);return t}function A(e,t){for(var n=[],a=0;a<t;a++)n.push([]);var r=[];return function e(t,a){for(var o=0,i=0;i<t.length;i++){var l=t[i];if(Object(j.a)(l)){o+=1;var s={type:"normal",width:l.col.width,col:l.col,colIndex:l.colIndex,colSpan:1,isLeaf:!0};n[a].push(s),r.push(s)}else{var c=e(l.children,a+1);o+=c.leafCount,c.leafCount>0&&n[a].push({type:"normal",width:l.col.width,col:l.col,colIndex:l.colIndex,colSpan:c.leafCount,isLeaf:!1})}}return{leafCount:o}}(e,0),{flat:r,leveled:n}}function $(e,t){return function e(t,n){for(var a=[],r=0,o=0;o<t.length;o++){var i=t[o],l=n+r;if(Object(j.a)(i))r+=1,a.push({colIndex:l,col:i});else{var s=e(i.children,l);r+=s.leafCount,s.leafCount>0&&a.push({col:i,colIndex:l,children:s.result})}}return{result:a,leafCount:r}}(e,t).result}function F(e,t){var n=e.flat,a=e.nested,r=e.hoz;if(e.useVirtual.header){var o=A($(a.left,0),t),i=A(function(e,t,n){return function e(a,r){for(var o,i=0,l=[],s=Object(U.a)(a);!(o=s()).done;){var c=o.value,d=r+i;if(Object(j.a)(c))i+=1,n+t.leftIndex<=d&&d<n+t.rightIndex&&l.push({colIndex:d,col:c});else{var u=e(c.children,d);i+=u.leafCount,u.filtered.length>0&&l.push({colIndex:d,col:c,children:u.filtered})}}return{filtered:l,leafCount:i}}(e,n).filtered}(a.center,r,n.left.length),t),l=A($(a.right,n.left.length+n.center.length),t);return{flat:[].concat(o.flat,[{type:"blank",width:r.leftBlank,blankSide:"left"}],i.flat,[{type:"blank",width:r.rightBlank,blankSide:"right"}],l.flat),leveled:Y(t).map((function(e){return[].concat(o.leveled[e],[{type:"blank",width:r.leftBlank,blankSide:"left"}],i.leveled[e],[{type:"blank",width:r.rightBlank,blankSide:"right"}],l.leveled[e])}))}}return A($(a.full,0),t)}function K(e){var t=e.nested,n=e.flat,a=e.stickyLeftMap,o=e.stickyRightMap,l=Object(P.a)(t.full)+1,s=F(e,l),c=n.full.length,d=n.left.length,u=n.right.length,h=s.leveled.map((function(e,t){var n=e.map((function(e){if("normal"===e.type){var n,s,h=e.colIndex,m=e.colSpan,p=e.isLeaf,f=e.col,g=null!==(n=f.headerCellProps)&&void 0!==n?n:{},b={};return h<d?(b.position="sticky",b.left=a.get(h)):h>=c-u&&(b.position="sticky",b.right=o.get(h)),i.a.createElement("th",Object.assign({key:h},g,{className:r()(y.a.tableHeaderCell,g.className,{first:0===h,last:h+m===c,"lock-left":h<d,"lock-right":h>=c-u}),colSpan:m,rowSpan:p?l-t:void 0,style:Object.assign({textAlign:f.align},g.style,b)}),null!==(s=f.title)&&void 0!==s?s:f.name)}return e.width>0?i.a.createElement("th",{key:e.blankSide}):null}));return i.a.createElement("tr",{key:t,className:r()(y.a.tableHeaderRow,{first:0===t,last:t===l-1})},n)}));return i.a.createElement("table",null,i.a.createElement("colgroup",null,s.flat.map((function(e){return"blank"===e.type?e.width>0?i.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):null:i.a.createElement("col",{key:e.colIndex,style:{width:e.width}})}))),i.a.createElement("thead",null,h))}class q{constructor(e){this.cache=[],this.estimatedRowHeight=e}static getFullRenderRange(e){return{topIndex:0,topBlank:0,bottomIndex:e,bottomBlank:0}}getRenderRangeWhenBelowView(e){const t={topIndex:0,topBlank:0},n=this.getEnd(0,t,e);return Object.assign(Object.assign({},t),n)}getRenderRangeWhenAboveView(e){const t=this.getEstimatedTotalSize(e),n=this.getStart(t,e),a=this.getEnd(t,n,e);return Object.assign(Object.assign({},n),a)}getRenderRangeWhenInView(e,t,n){const a=this.getStart(e,n),r=this.getEnd(e+t,a,n);return Object.assign(Object.assign({},a),r)}binarySearchStart(e){let t=0,n=this.cache.length-1;for(;t<n;){const a=Math.ceil((t+n)/2);this.cache[a].offset<=e?t=a:n=a-1}return n}getStart(e,t){if(0===this.cache.length)return{topIndex:0,topBlank:0};const n=this.getMaxBottom();if(n<e){const a=e-n,r=t-this.cache.length,o=Math.min(Math.floor(a/this.estimatedRowHeight),r);for(let e=0,t=n;e<o;e+=1,t+=this.estimatedRowHeight)this.cache.push({offset:t,size:this.estimatedRowHeight});const i=this.cache.length-1,l=this.cache[i].offset;return this.overscanUpwards(i,l)}{const t=this.binarySearchStart(e),n=this.cache[t].offset;return this.overscanUpwards(t,n)}}overscanUpwards(e,t){let n=0,a=0;for(;a<e&&n<L;)a+=1,n+=this.getItemSize(e-a);return{topIndex:e-a,topBlank:t-n}}getEnd(e,t,n){let a=t.topIndex,r=t.topBlank;for(;a<n&&r<e;)r+=this.getItemSize(a),a+=1;const o=this.getEstimatedTotalSize(n)-r;return this.overscanDownwards(a,o,n)}overscanDownwards(e,t,n){let a=0,r=0;for(;r<n-e&&a<L;)a+=this.getItemSize(e+r),r+=1;return{bottomIndex:e+r,bottomBlank:t-a}}getItemSize(e){return e<this.cache.length?this.cache[e].size:this.estimatedRowHeight}setMaxItemCount(e){e<this.cache.length&&(this.cache.length=e)}updateItem(e,t,n){this.cache[e]={offset:t,size:n}}getEstimatedTotalSize(e){let t=0,n=0;const a=this.cache.length;if(a>0){const e=this.cache[a-1];t=e.offset+e.size,n=a}return t+(e-n)*this.estimatedRowHeight}getMaxBottom(){if(0===this.cache.length)return 0;const e=this.cache[this.cache.length-1];return e.offset+e.size}}var X=n(152),G=n(318),J=n(156),Z=n(603);function Q(e){return e===window?{left:0,top:0,bottom:window.innerHeight,right:window.innerWidth}:e.getBoundingClientRect()}function ee(e){return e===window?Object(S.a)(e,"resize"):new J.a((function(t){var n=new G.a((function(){t.next()}));return n.observe(e),function(){n.disconnect()}}))}function te(e,t){return Object(Z.a)(Object(S.a)(t,"scroll"),ee(t),ee(e)).pipe(p.a((function(){return function(e,t){var n=Q(e),a=Q(t);return{offsetY:Math.max(0,a.top-n.top),offsetX:Math.max(0,a.left-n.left),clipRect:{left:Math.max(n.left,a.left),top:Math.max(n.top,a.top),right:Math.min(n.right,a.right),bottom:Math.min(n.bottom,a.bottom)}}}(e,t)})))}var ne=n(143);let ae=!1;class re extends i.a.Component{constructor(e){super(e),this.store=new q(this.props.estimatedRowHeight),this.artTableWrapperRef=i.a.createRef(),this.rootSubscription=new l.a,this.state=Object.assign(Object.assign({},V(e)),{hasScroll:!0,needRenderLock:!0,offsetY:0,offsetX:0,maxRenderHeight:600,maxRenderWidth:800})}getDoms(){return this.doms}updateStickyScroll(){const{stickyScroll:e,artTable:t,stickyScrollItem:n}=this.doms;if(!t)return;const a=t.querySelector(`.${y.a.tableBody} table`).offsetWidth,r=t.offsetWidth,o=(null==I&&(I=new s.a(M()),O.pipe(Object(p.a)((()=>M()))).subscribe(I)),I.value);e.style.marginTop=`-${o.height}px`,r>=a?this.state.hasScroll&&this.setState({hasScroll:!1}):!this.state.hasScroll&&o.height>5&&this.setState({hasScroll:!0}),n.style.width=a+"px"}renderTableHeader({horizontal:e}){const{stickyTop:t,hasHeader:n}=this.props,{flat:a,nested:o,useVirtual:l,stickyLeftMap:s,stickyRightMap:c}=this.state;return i.a.createElement("div",{className:r()(y.a.tableHeader,"no-scrollbar"),style:{top:0===t?void 0:t,display:n?void 0:"none"}},i.a.createElement(K,{nested:o,flat:a,hoz:e,useVirtual:l,stickyLeftMap:s,stickyRightMap:c}))}updateOffsetX(e){this.state.useVirtual.horizontal&&Math.abs(e-this.state.offsetX)>=50&&this.setState({offsetX:e})}syncHorizontalScrollFromTableBody(){this.syncHorizontalScroll(this.doms.tableBody.scrollLeft)}syncHorizontalScroll(e){this.updateOffsetX(e);const{tableBody:t,artTableWrapper:n}=this.doms,{flat:a}=this.state,r=a.left.length>0&&this.state.needRenderLock&&e>0,o=T(n,y.a.leftLockShadow);r?o.classList.add("show-shadow"):o.classList.remove("show-shadow");const i=a.right.length>0&&this.state.needRenderLock&&e<t.scrollWidth-t.clientWidth,l=T(n,y.a.rightLockShadow);i?l.classList.add("show-shadow"):l.classList.remove("show-shadow")}getVerticalRenderRange(){const{dataSource:e}=this.props,{useVirtual:t,offsetY:n,maxRenderHeight:a}=this.state,r=e.length;return t.vertical?a<=0?n<=0?this.store.getRenderRangeWhenBelowView(r):this.store.getRenderRangeWhenAboveView(r):this.store.getRenderRangeWhenInView(n,a,r):q.getFullRenderRange(r)}getHorizontalRenderRange(){const{offsetX:e,maxRenderWidth:t,useVirtual:n,flat:a}=this.state;if(!n.horizontal)return{leftIndex:0,leftBlank:0,rightIndex:a.full.length,rightBlank:0};let r=0,o=0,i=0,l=0;const s=Math.max(0,e-L);for(;r<a.center.length;){const e=a.center[r];if(!(e.width+i<s))break;r+=1,i+=e.width}const c=t+(s-i)+200;for(;r+o<a.center.length;){const e=a.center[r+o];if(!(e.width+l<c))break;l+=e.width,o+=1}const d=a.center.length-r-o;return{leftIndex:r,leftBlank:i,rightIndex:r+o,rightBlank:R(a.center.slice(a.center.length-d).map((e=>e.width)))}}getRenderRange(){return{vertical:this.getVerticalRenderRange(),horizontal:this.getHorizontalRenderRange()}}getFlatHozWrappedCols(e){const{flat:t}=this.state;return[...t.left.map(((e,t)=>({type:"normal",col:e,colIndex:t}))),e.leftBlank>0&&{type:"blank",blankSide:"left",width:e.leftBlank},...t.center.slice(e.leftIndex,e.rightIndex).map(((n,a)=>({type:"normal",col:n,colIndex:t.left.length+e.leftIndex+a}))),e.rightBlank>0&&{type:"blank",blankSide:"right",width:e.rightBlank},...t.right.map(((e,n)=>({type:"normal",col:e,colIndex:t.full.length-t.right.length+n})))].filter(Boolean)}renderTableBody(e){const{vertical:t,horizontal:n}=e,{dataSource:a,getRowProps:o,primaryKey:l,isLoading:s,emptyCellHeight:c}=this.props,d=this.getFlatHozWrappedCols(n),u=i.a.createElement("colgroup",null,d.map((e=>"blank"===e.type?i.a.createElement("col",{key:e.blankSide,style:{width:e.width}}):i.a.createElement("col",{key:e.colIndex,style:{width:e.col.width}}))));if(t.bottomIndex-t.topIndex==0){const{components:e,emptyContent:t}=this.props;let n=e.EmptyContent;return null==n&&null!=t&&(ae||(ae=!0,console.warn("[ali-react-table] BaseTable props.emptyContent \u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u4f7f\u7528 props.components.EmptyContent \u6765\u81ea\u5b9a\u4e49\u6570\u636e\u4e3a\u7a7a\u65f6\u7684\u8868\u683c\u8868\u73b0")),n=()=>t),i.a.createElement("div",{className:y.a.tableBody},i.a.createElement(w,{colgroup:u,colSpan:d.length,isLoading:s,EmptyContent:n,emptyCellHeight:c}))}const{flat:h,stickyLeftMap:m,stickyRightMap:p}=this.state,f=h.full.length,g=h.left.length,b=h.right.length,k=new X.a,j=a.slice(t.topIndex,t.bottomIndex).map((function(e,s){const c=t.topIndex+s;k.stripUpwards(c);const u=o(e,c),h=r()(y.a.tableRow,{first:0===c,last:c===a.length-1,even:c%2==0,odd:c%2==1},null==u?void 0:u.className);return i.a.createElement("tr",Object.assign({},u,{className:h,key:v.a.safeGetRowKey(l,e,c),"data-rowindex":c}),d.map((a=>"blank"===a.type?i.a.createElement("td",{key:a.blankSide}):function(e,a,o,l){var s,c;if(k.testSkip(a,l))return null;const d=v.a.safeGetValue(o,e,a),u=null!==(c=null===(s=o.getCellProps)||void 0===s?void 0:s.call(o,d,e,a))&&void 0!==c?c:{};let h=d;o.render&&(h=o.render(d,e,a));let w=1,j=1;if(o.getSpanRect){const t=o.getSpanRect(d,e,a);w=null==t?1:t.right-l,j=null==t?1:t.bottom-a}else null!=u.colSpan&&(w=u.colSpan),null!=u.rowSpan&&(j=u.rowSpan);j=Math.min(j,t.bottomIndex-a),w=Math.min(w,g+n.rightIndex-l);const x=w>1||j>1;x&&k.add(a,l,w,j);const E={};l<g?(E.position="sticky",E.left=m.get(l)):l>=f-b&&(E.position="sticky",E.right=p.get(l));return i.a.createElement("td",Object.assign(Object.assign(Object.assign(Object.assign({key:l},u),{className:r()(y.a.tableCell,u.className,{first:0===l,last:l+w===f,"lock-left":l<g,"lock-right":l>=f-b})}),x?{colSpan:w,rowSpan:j}:null),{style:Object.assign(Object.assign({textAlign:o.align},u.style),E)}),h)}(e,c,a.col,a.colIndex))))}));return i.a.createElement("div",{className:y.a.tableBody},i.a.createElement("div",{key:"top-blank",className:r()(y.a.virtualBlank,"top"),style:{height:t.topBlank}}),i.a.createElement("table",null,u,i.a.createElement("tbody",null,j)),i.a.createElement("div",{key:"bottom-blank",className:r()(y.a.virtualBlank,"bottom"),style:{height:t.bottomBlank}}))}isLock(){const{nested:e}=this.state;return e.left.length>0||e.right.length>0}render(){const{dataSource:e,className:t,style:n,hasHeader:a,useOuterBorder:o,isStickyHead:l,isLoading:s,components:c}=this.props,{flat:d}=this.state,u=this.getRenderRange();return(s=>{const c={className:r()(y.a.artTableWrapper,{"use-outer-border":o,sticky:l,empty:0===e.length,lock:this.isLock(),"has-header":a},t),style:n,[z]:this.artTableWrapperRef};return i.a.createElement(y.c,Object.assign({},c),s)})(i.a.createElement(ne.b,{visible:s,LoadingIcon:c.LoadingIcon,LoadingContentWrapper:c.LoadingContentWrapper},i.a.createElement("div",{className:y.a.artTable},this.renderTableHeader(u),this.renderTableBody(u),i.a.createElement("div",{className:y.a.lockShadowMask,style:{left:0,width:R(d.left.map((e=>e.width)))+y.b}},i.a.createElement("div",{className:r()(y.a.lockShadow,y.a.leftLockShadow)})),i.a.createElement("div",{className:y.a.lockShadowMask,style:{right:0,width:R(d.right.map((e=>e.width)))+y.b}},i.a.createElement("div",{className:r()(y.a.lockShadow,y.a.rightLockShadow)}))),i.a.createElement("div",{className:y.a.stickyScroll,style:{display:this.state.hasScroll?"block":"none",bottom:this.props.stickyBottom}},i.a.createElement("div",{className:y.a.stickyScrollItem}))))}componentDidMount(){this.updateDoms(),this.data$=new s.a({props:this.props,state:this.state,prevProps:null,prevState:null}),this.initSubscriptions(),this.didMountOrUpdate()}componentDidUpdate(e,t){this.updateDoms(),this.data$.next({props:this.props,state:this.state,prevProps:e,prevState:t}),this.didMountOrUpdate(e,t)}didMountOrUpdate(e,t){this.syncHorizontalScrollFromTableBody(),this.updateStickyScroll(),this.adjustNeedRenderLock(),this.updateItemSizeStoreAndTriggerRerenderIfNecessary(e),this.resetStickyScrollIfNecessary(t)}resetStickyScrollIfNecessary(e){null!=e&&this.state.hasScroll&&!e.hasScroll&&(this.doms.stickyScroll.scrollLeft=0)}initSubscriptions(){const{tableHeader:e,tableBody:t,stickyScroll:n}=this.doms;this.rootSubscription.add(O.subscribe((()=>{this.updateStickyScroll(),this.adjustNeedRenderLock()}))),this.rootSubscription.add(function(e,t){const n=new Set;function a(t,a){n.clear();for(const r of e)r!==t&&(r.scrollLeft=a,n.add(r))}const r=new l.a;for(const o of e){const e=()=>{if(n.has(o))return void n.delete(o);const e=o.scrollLeft;a(o,e),t(e)};o.addEventListener("scroll",e,{passive:!0}),r.add((()=>o.removeEventListener("scroll",e)))}return r}([t,n,e],(e=>{this.syncHorizontalScroll(e)})));const a=this.data$.pipe(p.a((e=>e.props.flowRoot)),f.a((e=>{const t=this.artTableWrapperRef.current;if("auto"===e){const e=getComputedStyle(t);return Object(c.a)("visible"!==e.overflowY?t:window)}return"self"===e?Object(c.a)(t):"function"==typeof e?Object(d.a)(0,u.a).pipe(p.a(e)):Object(c.a)(e)})),g.a()).pipe(f.a((e=>te(this.doms.artTable,e))));this.rootSubscription.add(Object(h.a)([a.pipe(p.a((e=>e.clipRect)),g.a(B)),this.data$.pipe(b.a((e=>{var t;return!(null===(t=e.prevProps)||void 0===t?void 0:t.isLoading)&&e.props.isLoading})))]).subscribe((([e])=>{const{artTableWrapper:t}=this.doms,n=T(t,y.a.loadingIndicator);if(!n)return;const a=e.bottom-e.top;n.style.top=a/2+"px",n.style.marginTop=a/2+"px"}))),this.rootSubscription.add(a.pipe(b.a((()=>{const{horizontal:e,vertical:t}=this.state.useVirtual;return e||t})),p.a((({clipRect:e,offsetY:t})=>({maxRenderHeight:e.bottom-e.top,maxRenderWidth:e.right-e.left,offsetY:t}))),g.a(((e,t)=>Math.abs(e.maxRenderWidth-t.maxRenderWidth)<50&&Math.abs(e.maxRenderHeight-t.maxRenderHeight)<50&&Math.abs(e.offsetY-t.offsetY)<50))).subscribe((e=>{this.setState(e)})))}componentWillUnmount(){this.rootSubscription.unsubscribe()}updateDoms(){const e=this.artTableWrapperRef.current,t=T(e,y.a.artTable);this.doms={artTableWrapper:e,artTable:t,tableHeader:T(t,y.a.tableHeader),tableBody:T(t,y.a.tableBody),stickyScroll:T(e,y.a.stickyScroll),stickyScrollItem:T(e,y.a.stickyScrollItem)}}updateItemSizeStoreAndTriggerRerenderIfNecessary(e){var t;null!=e&&e.dataSource.length!==this.props.dataSource.length&&this.store.setMaxItemCount(this.props.dataSource.length);const n=this.doms.artTable.querySelector(`.${y.a.virtualBlank}.top`),a=null!==(t=null==n?void 0:n.clientHeight)&&void 0!==t?t:0;let r=-1,o=-1;for(const s of(i=this.doms.artTable,l=y.a.tableRow,null==i?void 0:i.querySelectorAll("."+l))){const e=Number(s.dataset.rowindex);if(isNaN(e))continue;r=Math.max(r,e);const t=s.offsetTop+a,n=s.offsetHeight;o=Math.max(o,t+n),this.store.updateItem(e,t,n)}var i,l;if(-1!==r&&o<this.state.offsetY+this.state.maxRenderHeight){const{vertical:e}=this.getRenderRange();e.bottomIndex-1>r&&this.forceUpdate()}}adjustNeedRenderLock(){const{needRenderLock:e,flat:t}=this.state;if(this.isLock()){const n=R(t.full.map((e=>e.width)))>this.doms.artTable.clientWidth;e!==n&&this.setState({needRenderLock:n})}else e&&this.setState({needRenderLock:!1})}}re.defaultProps={isStickyHead:!0,stickyTop:0,stickyBottom:0,useVirtual:"auto",estimatedRowHeight:48,hasHeader:!0,isLoading:!1,components:{},getRowProps:m.a,flowRoot:"auto"},re.getDerivedStateFromProps=V},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(124),r=n(127);function o(e,t){var n=[];return function e(o){for(var i,l=Object(a.a)(o);!(i=l()).done;){var s=i.value;Object(r.a)(s)?n.push(s):"pre"===t?(n.push(s),e(s.children)):"post"===t?(e(s.children),n.push(s)):e(s.children)}}(e),n}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(124),r=n(127);function o(e){var t=-1;return function e(n,o){for(var i,l=Object(a.a)(n);!(i=l()).done;){var s=i.value;Object(r.a)(s)?t=Math.max(t,o):e(s.children,o+1)}}(e,0),t}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){function e(){this.rects=[]}var t=e.prototype;return t.testSkip=function(e,t){return this.rects.some((function(n){var a=n.left,r=n.right,o=n.top,i=n.bottom;return a<=t&&t<r&&o<=e&&e<i}))},t.stripUpwards=function(e){this.rects=this.rects.filter((function(t){return t.bottom>e}))},t.add=function(e,t,n,a){this.rects.push({left:t,right:t+n,top:e,bottom:e+a})},e}()},155:function(e,t,n){"use strict";n.r(t),n.d(t,"AntdBaseTable",(function(){return k})),n.d(t,"cdnData",(function(){return a})),n.d(t,"MinimumPivotTableDesigner",(function(){return B})),n.d(t,"format",(function(){return r})),n.d(t,"HippoBaseTable",(function(){return re})),n.d(t,"biz",(function(){return o})),n.d(t,"ncov19",(function(){return i})),n.d(t,"RadioButtonGroup",(function(){return We})),n.d(t,"BaseTableThemeContext",(function(){return Ue})),n.d(t,"FusionStyles",(function(){return Ye})),n.d(t,"AntdStyles",(function(){return Pe})),n.d(t,"HippoStyles",(function(){return Ae})),n.d(t,"MockTreeDataService",(function(){return qe}));var a={};n.r(a),n.d(a,"getAppTrafficData",(function(){return C})),n.d(a,"getIncomeData",(function(){return z})),n.d(a,"getNCoV2019Data",(function(){return R}));var r={};n.r(r),n.d(r,"plain",(function(){return V})),n.d(r,"amount0",(function(){return U})),n.d(r,"amount",(function(){return P})),n.d(r,"time",(function(){return Y})),n.d(r,"amount1",(function(){return A})),n.d(r,"amount2",(function(){return $})),n.d(r,"ratio",(function(){return F})),n.d(r,"lfl",(function(){return X})),n.d(r,"money",(function(){return G}));var o={};n.r(o),n.d(o,"repeat",(function(){return se})),n.d(o,"randomPick",(function(){return ce})),n.d(o,"operationCol",(function(){return ue})),n.d(o,"dataSource1",(function(){return he})),n.d(o,"columns1",(function(){return me})),n.d(o,"dataSource2",(function(){return pe})),n.d(o,"columns2",(function(){return fe})),n.d(o,"dataSource3",(function(){return ge})),n.d(o,"columns3",(function(){return be})),n.d(o,"makeChildren",(function(){return ve})),n.d(o,"dataSource4",(function(){return ke})),n.d(o,"columns4",(function(){return we})),n.d(o,"dataSource5",(function(){return je})),n.d(o,"columns5",(function(){return xe})),n.d(o,"dataSource6",(function(){return Se})),n.d(o,"columns6",(function(){return Ce}));var i={};n.r(i),n.d(i,"cols",(function(){return Te})),n.d(i,"testProvColumns",(function(){return Be})),n.d(i,"useAllDataSource",(function(){return De})),n.d(i,"useProvinceDataSource",(function(){return He})),n.d(i,"useCityDataSource",(function(){return _e}));var l=n(148),s=n(128),c=n(151),d=n(599),u=n(115),h=n.n(u),m=n(0),p=n.n(m),f=n(122);const g=Object(f.b)(l.a)`
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

  .${s.a.lockShadowMask} {
    .${s.a.lockShadow} {
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

  &.compact {
    --row-height: 48px;
    --header-row-height: 48px;
    --cell-padding: 12px 8px;
  }

  //&.zebra tr.odd,
  //tr.alternative {
  //  --bgcolor: #f9f9f9;
  //  // 仍然需要 hover 效果，故 --hover-bgcolor 还是保持原样
  //}
`,b=p.a.memo((()=>p.a.createElement(p.a.Fragment,null,p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"41",className:"ant-empty-img-simple",viewBox:"0 0 64 41"},p.a.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(0 1)"},p.a.createElement("ellipse",{cx:"32",cy:"33",className:"ant-empty-img-simple-ellipse",rx:"32",ry:"7"}),p.a.createElement("g",{fillRule:"nonzero",className:"ant-empty-img-simple-g"},p.a.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),p.a.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",className:"ant-empty-img-simple-path"})))),p.a.createElement("div",{className:"empty-tips",style:{marginTop:8,color:"rgba(0,0,0,.25)",fontSize:14}},"\u6682\u65e0\u6570\u636e"))));class v extends p.a.Component{render(){const{children:e,visible:t}=this.props;return p.a.createElement("div",{className:"ant-loading-content-wrapper",style:{opacity:t?.6:void 0}},e)}}function y(){return p.a.createElement(d.a,{style:{display:"block"}})}const k=p.a.forwardRef((function(e,t){const n=Object(c.a)(e.columns);return p.a.createElement(g,Object.assign({ref:t},e,{className:h()(e.className,{"header-depth-0":0===n,"header-depth-1":1===n}),components:{EmptyContent:b,LoadingContentWrapper:v,LoadingIcon:y,...e.components}}))}));var w=n(124),j="https://gw.alipayobjects.com/os/bmw-prod/2eb02d0b-993f-4531-8424-a8df1899299e.json",x="https://gw.alipayobjects.com/os/bmw-prod/22986070-97e7-43a2-a3e4-200742c3d913.json",E="https://gw.alipayobjects.com/os/basement_prod/8e44b543-0764-411f-adfc-0dae716ef96a.csv",S=null;function C(){return S||(S=fetch(j).then((function(e){return e.json()}))),S}var N=null;function z(){return N||(N=fetch(x).then((function(e){return e.json()}))),N}var L=null;function R(){return L||(L=fetch(E).then((function(e){return e.text()})).then((function(e){for(var t,n=e.split("\n"),a=n[0],r=n.slice(1),o=a.split(","),i=[],l=function(){var e=t.value;if(""===e)return"continue";var n=e.split(","),a={};o.forEach((function(e,t){a[e]=n[t]})),i.push(a)},s=Object(w.a)(r);!(t=s()).done;)l();return i}))),L}var O=n(131),M=n(149);function I(){var e=Object(O.a)(["\n  .designer-row {\n    height: 36px;\n    display: flex;\n    align-items: center;\n\n    .label {\n      width: 160px;\n    }\n\n    .prompt {\n      color: #999;\n    }\n\n    .spare-dim {\n      text-decoration: underline;\n      margin-left: 8px;\n      cursor: pointer;\n      :hover {\n        outline: 1px dashed #ccc;\n        outline-offset: 4px;\n      }\n    }\n  }\n"]);return I=function(){return e},e}var T=f.b.div(I());function B(e){var t=e.dimensions,n=e.leftCodes,a=e.topCodes,r=e.indicatorSide,o=e.onChangeIndicatorSide,i=e.onChangeLeftCodes,l=e.onChangeTopCodes,s=e.showSubtotal,c=e.onChangeShowSubtotal,d=e.showSupportsExpandToggle,u=e.supportsExpand,h=e.onChangeSupportsExpand,m=new Map(t.map((function(e){return[e.code,e]}))),f=t.filter((function(e){return!n.includes(e.code)&&!a.includes(e.code)}));return p.a.createElement(T,null,p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u8868\u683c\u7ed3\u6784\uff1a"),p.a.createElement(M.a.Group,null,p.a.createElement(M.a,{type:"left"===r?"primary":"normal",onClick:function(){return o("left")}},"\u6307\u6807\u653e\u5728\u5de6\u4fa7"),p.a.createElement(M.a,{type:"top"===r?"primary":"normal",onClick:function(){return o("top")}},"\u6307\u6807\u653e\u5728\u4e0a\u65b9")),p.a.createElement(M.a.Group,{style:{marginLeft:16}},p.a.createElement(M.a,{onClick:function(){return c(!0)},type:s?"primary":"normal"},"\u663e\u793a\u603b\u8ba1/\u5c0f\u8ba1"),p.a.createElement(M.a,{onClick:function(){return c(!1)},type:s?"normal":"primary"},"\u9690\u85cf\u603b\u8ba1/\u5c0f\u8ba1")),d&&p.a.createElement(M.a.Group,{style:{marginLeft:16}},p.a.createElement(M.a,{onClick:function(){return h(!0)},type:u?"primary":"normal"},"\u5f00\u542f\u5c55\u5f00/\u6536\u62e2"),p.a.createElement(M.a,{onClick:function(){return h(!1)},type:u?"normal":"primary"},"\u5173\u95ed\u5c55\u5f00/\u6536\u62e2"))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u6e05\u7a7a\u7ef4\u5ea6\uff1a"),p.a.createElement(M.a.Group,null,p.a.createElement(M.a,{onClick:function(){return i([])},disabled:0===n.length},"\u6e05\u7a7a\u5de6\u4fa7\u7ef4\u5ea6"),p.a.createElement(M.a,{onClick:function(){return l([])},disabled:0===a.length},"\u6e05\u7a7a\u4e0a\u65b9\u7ef4\u5ea6"))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u5de6\u4fa7\u7684\u7ef4\u5ea6\u5e8f\u5217\uff1a"),0===n.length&&p.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),n.map((function(e,t){return p.a.createElement(p.a.Fragment,{key:t},t>0&&p.a.createElement("span",{style:{margin:"0 4px"}},">"),p.a.createElement("span",null,m.get(e).name))}))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u5de6\u4fa7\u7684\u53ef\u6dfb\u52a0\u7684\u7ef4\u5ea6\uff1a"),0===f.length&&p.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),f.map((function(e){return p.a.createElement("span",{key:e.code,className:"spare-dim",onClick:function(){return i(n.concat([e.code]))}},e.name)}))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u4e0a\u65b9\u7ef4\u5ea6\u5e8f\u5217\uff1a"),0===a.length&&p.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),a.map((function(e,t){return p.a.createElement(p.a.Fragment,{key:t},t>0&&p.a.createElement("span",{style:{margin:"0 4px"}},">"),p.a.createElement("span",null,m.get(e).name))}))),p.a.createElement("div",{className:"designer-row"},p.a.createElement("span",{className:"label"},"\u4e0a\u65b9\u7684\u53ef\u6dfb\u52a0\u7684\u7ef4\u5ea6\uff1a"),0===f.length&&p.a.createElement("span",{className:"prompt"},"\u6682\u65e0\u7ef4\u5ea6"),f.map((function(e){return p.a.createElement("span",{key:e.code,className:"spare-dim",onClick:function(){return l(a.concat([e.code]))}},e.name)}))))}var D=n(325),H=n.n(D),_=n(116),W=n.n(_);const V=e=>"-"===e||null==e?"-":String(e),U=e=>"-"===e||null==e?"-":H()(e).format("0,0"),P=U;function Y(e){return W()(e,"YYYY-MM-DD HH:mm:ss.sss").format("YYYY\u5e74MM\u6708DD\u65e5 HH:mm:ss")}const A=e=>"-"===e||null==e?"-":H()(e).format("0,0.0"),$=e=>"-"===e||null==e?"-":H()(e).format("0,0.00"),F=e=>"-"===e||null==e?"-":H()(e).format("0.00%"),K=Object(m.memo)((({size:e=12,style:t})=>p.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},p.a.createElement("path",{d:"M682.667 512v426.667H341.333V512h-256L512 0l426.667 512h-256z"})))),q=Object(m.memo)((({size:e=12,style:t})=>p.a.createElement("svg",{viewBox:"0 0 1024 1024",width:e,height:e,fill:"currentColor",style:t},p.a.createElement("path",{d:"M682.667 426.667V0H341.333v426.667h-256l426.667 512 426.667-512h-256z"})))),X=e=>{return null==e||"-"===e||isNaN(e)||e===1/0||e===-1/0?t("-"):t((e=Number(e))>0?p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{style:{color:"#f4485c"}},H()(e).format("0.00%")),p.a.createElement(K,{style:{marginLeft:4,color:"#f4485c"}})):e<0?p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{style:{color:"#00a854"}},H()(e).format("0.00%")),p.a.createElement(q,{style:{marginLeft:4,color:"#00a854"}})):p.a.createElement("span",{style:{color:"#838383"}},"0"));function t(e){return p.a.createElement("div",{className:"lfl-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"flex-end"}},e)}},G=e=>"-"===e||null==e?"-":(e=Number(e))<0?"-"+G(-e):0===e?String(e):e<1e4?H()(e).format("0,0"):e<1e5?H()(e/1e4).format("0.0")+"\u4e07":e<1e8?H()(e/1e4).format("0")+"\u4e07":e<1e9?H()(e/1e8).format("0.0")+"\u4ebf":H()(e/1e8).format("0")+"\u4ebf";var J=n(130);const Z=f.c`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Q=Object(f.b)(l.a)`
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
  --highlight-bgcolor: #e2e6ef; // todo 该颜色需要调整
  --header-highlight-bgcolor: #e2e6ef; // todo 该颜色需要调整

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
`,ee=p.a.memo((()=>p.a.createElement(p.a.Fragment,null,p.a.createElement("img",{alt:"hippo-table-empty",width:"160",height:"160",src:"https://img.alicdn.com/tfs/TB1s7zrWeL2gK0jSZFmXXc7iXXa-240-240.svg"}),p.a.createElement("div",{className:"empty-tips",style:{marginTop:-24}},"\u6ca1\u6709\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e",p.a.createElement("br",null),"\u8bf7\u4fee\u6539\u6761\u4ef6\u540e\u91cd\u65b0\u67e5\u8be2"))));class te extends p.a.Component{constructor(){super(...arguments),this.state={warming:!1,prevVisible:!1}}static getDerivedStateFromProps(e,t){return!t.prevVisible&&e.visible?{warming:!0,prevVisible:!0}:e.visible?null:{warming:!1,prevVisible:!1}}componentDidUpdate(e){!e.visible&&this.props.visible?this.handle=setTimeout((()=>{this.setState({warming:!1})}),1e3):this.props.visible||clearTimeout(this.handle)}componentWillUnmount(){clearTimeout(this.handle)}render(){const{visible:e,children:t}=this.props,{warming:n}=this.state;return p.a.createElement("div",{className:"hippo-loading-content-wrapper",style:{filter:e?n?"blur(0.5px)":"blur(1px)":"none",transition:"filter 300ms cubic-bezier(0, 0.4, 0.6, 1)"}},t)}}const ne=Object(f.b)(J.c.Loading)`
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
  animation: 1.5s linear 0s infinite ${Z};
  opacity: 1;
  transition: opacity 300ms;
`,ae=p.a.memo((()=>{const[e,t]=Object(m.useState)(!1);return Object(m.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),1e3);return()=>clearTimeout(e)}),[]),p.a.createElement(ne,{type:"loading",className:"hippo-table-loading",style:{opacity:e?1:0}})})),re=p.a.forwardRef((function(e,t){const n=Object(c.a)(e.columns);return p.a.createElement(Q,Object.assign({ref:t},e,{className:h()(e.className,{"header-depth-0":0===n,"header-depth-1":1===n}),components:{EmptyContent:ee,LoadingContentWrapper:te,LoadingIcon:ae,...e.components}}))}));var oe=n(339),ie=n(140),le=n(294);function se(e,t){let n=[];for(let a=0;a<t;a++)n=n.concat(e);return n}function ce(e){return e[Math.floor(Math.random()*e.length)]}const de=f.b.div`
  display: flex;
  height: 20px;
  align-items: center;

  .item {
    height: 20px;
    cursor: pointer;
    color: #3858cf;
    display: flex;
    align-items: center;

    &.danger {
      color: #eb4141;
    }
  }

  .sep {
    height: 10px;
    width: 1px;
    margin-left: 12px;
    margin-right: 12px;
    background: #eeeeee;
  }
`;const ue={lock:!0,name:"\u64cd\u4f5c",render:function(){return p.a.createElement(de,null,p.a.createElement("div",{className:"item"},"\u7f16\u8f91"),p.a.createElement("div",{className:"sep"}),p.a.createElement("div",{className:"item danger"},"\u5220\u9664"),p.a.createElement("div",{className:"sep"}),p.a.createElement(oe.a,{trigger:p.a.createElement("div",{className:"item"},"\u66f4\u591a",p.a.createElement(J.c.CaretDown,{style:{color:"#A6A6A6"}})),triggerType:"click"},p.a.createElement(ie.a,null,p.a.createElement(ie.a.Item,null,"Option 1"),p.a.createElement(ie.a.Item,null,"Option 2"),p.a.createElement(ie.a.Item,null,"Option 3"),p.a.createElement(ie.a.Item,null,"Option 4"))))},width:200},he=[{id:"1",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u62db\u5546\u94f6\u884c\u4e28\u676d\u5dde\u5206\u884c",applier:"James Collier"},{id:"2",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u5efa\u8bbe\u94f6\u884c\u4e28\u672a\u6765\u79d1\u6280\u57ce",applier:"Philip Burke"},{id:"3",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u4ea4\u901a\u94f6\u884c\u4e28\u6d59\u5927\u8def\u652f\u884c",applier:"Wesley Cruz"},{id:"4",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u62db\u5546\u94f6\u884c\u4e28\u5e86\u6625\u8def\u652f\u884c",applier:"Billy Horton"},{id:"5",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u62db\u5546\u94f6\u884c\u4e28\u6587\u4e00\u8def\u5206\u884c",applier:"Paul Tran"},{id:"6",name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",amount:"600,000.00(CNY)",dept:"\u519c\u4e1a\u94f6\u884c\u4e28\u676d\u5dde\u5206\u884c",applier:"Anna Poole"}],me=[{code:"name",width:220,name:"\u516c\u53f8\u540d\u79f0"},{code:"amount",width:160,align:"right",name:"\u91d1\u989d"},{code:"dept",width:160,name:"\u91d1\u878d\u673a\u6784"},{code:"applier",width:120,name:"\u7533\u8bf7\u4eba"}],pe=[{name:"\u8682\u8681\u91d1\u670d",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"South Maddison",guide:"Don Moreno"},{name:"\u963f\u91cc\u5df4\u5df4(\u4e2d\u56fd)\u6709\u9650\u516c\u53f8",dept:"\u822a\u65c5\u4e8b\u4e1a\u90e8-\u9152\u5e97\u4e1a\u52a1",dest:"Emilhaven",guide:"Douglas Richards"},{name:"\u83dc\u9e1f\u7f51\u7edc",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{name:"\u8682\u8681\u91d1\u670d",dept:"\u4fe1\u606f\u5e73\u53f0\u90e8-\u7528\u6237\u4f53\u9a8c\u90e8",dest:"\u676d\u5dde\u5343\u5c9b\u6e56",guide:"Eric Castillo"},{name:"\u963f\u91cc\u5df4\u5df4(\u4e2d\u56fd)\u6709\u9650\u516c\u53f8",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"East Karl",guide:"Herbert Patton"}],fe=[{code:"name",name:"\u516c\u53f8\u540d\u79f0",width:200},{code:"dept",name:"\u90e8\u95e8\u540d\u79f0",width:180},{code:"dest",name:"\u56e2\u5efa\u76ee\u7684\u5730",width:160},{code:"guide",name:"\u5f53\u5730\u5bfc\u6e38",width:160}],ge=[{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f81",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u62db\u5546\u94f6\u884c\u4e28\u676d\u5dde\u5206\u884c",applier:"Don Moreno"},{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f82",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u5efa\u8bbe\u94f6\u884c\u4e28\u672a\u6765\u79d1\u6280\u57ce",applier:"Douglas Richards"},{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f83",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u4ea4\u901a\u94f6\u884c\u4e28\u6d59\u5927\u8def\u652f\u884c",applier:"Douglas Lee"},{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f84",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u62db\u5546\u94f6\u884c\u4e28\u5e86\u6625\u8def\u652f\u884c",applier:"Eric Castillo"},{name:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f85",entity:"\u8682\u8681\u91d1\u670d\uff08\u4e2d\u56fd\uff09",dept:"\u62db\u5546\u94f6\u884c\u4e28\u6587\u4e00\u8def\u5206\u884c",applier:"Herbert Patton"}],be=[{code:"name",name:"\u516c\u53f8\u540d\u79f0",width:200,features:{sortable:!0}},{code:"entity",name:"\u652f\u4ed8\u5b9e\u4f53",width:160},{code:"dept",name:"\u91d1\u878d\u673a\u6784",width:160,features:{sortable:!0}},{code:"applier",name:"\u7533\u8bf7\u4eba",width:160,features:{sortable:!0}},ue];function ve(e){return[{id:e+"-1",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:[{id:e+"-1-1",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{id:e+"-1-2",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-\u524d\u7aef",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]},{id:e+"-2",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:[{id:e+"-2-1",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{id:e+"-2-2",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-\u524d\u7aef",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]},{id:e+"-3",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]}function ye(e){return[{id:e+"-1",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:[{id:e+"-1-1",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{id:e+"-1-2",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-\u524d\u7aef",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]},{id:e+"-2",title:"\u4e8c\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:[{id:e+"-2-1",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"},{id:e+"-2-2",title:"\u4e09\u7ea7\u6807\u9898",dept:"\u76d2\u9a6c\u4ea7\u54c1\u6280\u672f\u90e8-\u524d\u7aef",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee"}]}]}const ke=[{id:"1",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"South Maddison",guide:"Don Moreno",children:ve("1")},{id:"2",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u822a\u65c5\u4e8b\u4e1a\u90e8-\u9152\u5e97\u4e1a\u52a1",dest:"Emilhaven",guide:"Douglas Richards",children:ve("2")},{id:"3",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"\u4e91\u5357\u5927\u7406",guide:"Douglas Lee",children:ve("3")},{id:"4",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u4fe1\u606f\u5e73\u53f0\u90e8-\u7528\u6237\u4f53\u9a8c\u90e8",dest:"\u676d\u5dde\u5343\u5c9b\u6e56",guide:"Eric Castillo",children:ve("4")},{id:"5",title:"\u4e00\u7ea7\u6807\u9898",dept:"\u6d88\u8d39\u8005\u4e8b\u4e1a\u90e8-\u6dd8\u5b9d-UED",dest:"East Karl",guide:"Herbert Patton"}],we=[{code:"title",name:"\u6807\u9898",width:200},{code:"dept",name:"\u90e8\u95e8\u540d\u79f0",width:180},{code:"dest",name:"\u56e2\u5efa\u76ee\u7684\u5730",width:160},{code:"guide",name:"\u5f53\u5730\u5bfc\u6e38",width:160},ue],je=[{id:"1",title:"\u963f\u91cc\u5df4\u5df4\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",children:ye("1")},{id:"2",title:"\u8682\u8681\u91d1\u670d\u6709\u9650\u516c\u53f8",children:ye("2")},{id:"3",title:"\u5176\u4ed6",children:ye("3")}],xe=[{code:"title",name:"\u6807\u9898",width:200},{code:"dept",name:"\u90e8\u95e8\u540d\u79f0",width:180},{code:"dest",name:"\u56e2\u5efa\u76ee\u7684\u5730",width:160},{code:"guide",name:"\u5f53\u5730\u5bfc\u6e38",width:160}],Ee=le.a.array({align:"center",width:80,headerCellProps:{style:{textAlign:"center",padding:0}}}),Se=["UED","\u5ba2\u670d","\u4ea7\u54c1","\u8fd0\u8425","\u524d\u7aef","\u6570\u636e"].map((e=>({occupation:e,hc_2014:104,hc_2015:168,hc_lfl:50,age_2014:30,age_2015:32,age_lfl:15,rate_2014:.3,rate_2015:.45,rate2_2014:.33,rate2_2015:.48}))),Ce=Ee([{lock:!0,code:"occupation",name:"\u804c\u52a1",width:120},{name:"\u4eba\u6570",children:Ee([{code:"hc_2014",name:"2014\u5e74"},{code:"hc_2015",name:"2015\u5e74"},{code:"hc_lfl",name:"\u540c\u6bd4\u589e\u957f"}])},{name:"\u5e74\u9f84",children:Ee([{code:"age_2014",name:"2014\u5e74"},{code:"age_2015",name:"2015\u5e74"},{code:"age_lfl",name:"\u540c\u6bd4\u589e\u957f"}])},{name:"\u5360\u6bd4",children:Ee([{code:"rate_2014",name:"2014\u5e74"},{code:"rate_2015",name:"2015\u5e74"}])},{name:"\u5360\u6bd42",children:Ee([{code:"rate_2014",name:"2014\u5e74"},{code:"rate_2015",name:"2015\u5e74"}])}]);var Ne=n(326),ze=n.n(Ne);const Le={provinceName:{code:"provinceName",name:"\u7701\u4efd",width:150},cityName:{code:"cityName",name:"\u57ce\u5e02",width:150},confirmedCount:{code:"confirmedCount",name:"\u786e\u8bca",width:100,render:P,align:"right"},suspectedCount:{code:"suspectedCount",name:"\u7591\u4f3c",width:100,render:P,align:"right"},curedCount:{code:"curedCount",name:"\u6cbb\u6108",width:100,render:P,align:"right"},deadCount:{code:"deadCount",name:"\u6b7b\u4ea1",width:100,render:P,align:"right"},updateTime:{code:"updateTime",name:"\u6700\u540e\u66f4\u65b0\u65f6\u95f4",width:180,render:Y}},Re={lock:!0,...Le.provinceName},Oe={lock:!0,...Le.cityName},Me={lock:!0,...Le.updateTime},Ie=[Le.confirmedCount,Le.curedCount,Le.deadCount],Te={...Le,indCols:Ie,lockProvCol:Re,lockCityCol:Oe,lockTimeCol:Me},Be=[Te.provinceName,...Te.indCols,Te.updateTime];function De(){const[{dataSource:e,isLoading:t},n]=Object(m.useState)({dataSource:[],isLoading:!0});return Object(m.useEffect)((()=>{R().then((e=>{n({dataSource:ze.a.sortBy(e.map((e=>({provinceName:e.provinceName,cityName:e.cityName,confirmedCount:Number(e.city_confirmedCount),suspectedCount:Number(e.city_suspectedCount),curedCount:Number(e.city_curedCount),deadCount:Number(e.city_deadCount),updateTime:e.updateTime}))),(e=>e.updateTime)),isLoading:!1})}))}),[]),{dataSource:e,isLoading:t}}function He(){const[{dataSource:e,isLoading:t},n]=Object(m.useState)({dataSource:[],isLoading:!0});return Object(m.useEffect)((()=>{R().then((e=>{const t=ze.a.uniqBy(e,(e=>e.provinceName+"--"+e.updateTime)).map((e=>({provinceName:e.provinceName,confirmedCount:Number(e.province_confirmedCount),suspectedCount:Number(e.province_suspectedCount),curedCount:Number(e.province_curedCount),deadCount:Number(e.province_deadCount),updateTime:e.updateTime})));n({dataSource:ze.a.orderBy(Object.values(ze.a.groupBy(t,(e=>e.provinceName))).map((e=>ze.a.maxBy(e,(e=>e.updateTime)))),(e=>-e.confirmedCount)),isLoading:!1})}))}),[]),{dataSource:e,isLoading:t}}function _e(){const[{dataSource:e,isLoading:t},n]=Object(m.useState)({dataSource:[],isLoading:!0});return Object(m.useEffect)((()=>{R().then((e=>{const t=Object.values(ze.a.groupBy(e,(e=>e.provinceName))).map((e=>{const t=ze.a.maxBy(e,(e=>e.updateTime)),n=Object.values(ze.a.groupBy(e,(e=>e.cityName))).map((e=>{const t=ze.a.maxBy(e,(e=>e.updateTime));return{provinceName:t.provinceName,cityName:t.cityName,confirmedCount:Number(t.city_confirmedCount),suspectedCount:Number(t.city_suspectedCount),curedCount:Number(t.city_curedCount),deadCount:Number(t.city_deadCount),updateTime:t.updateTime}}));return{provinceName:t.provinceName,confirmedCount:Number(t.province_confirmedCount),suspectedCount:Number(t.province_suspectedCount),curedCount:Number(t.province_curedCount),deadCount:Number(t.province_deadCount),updateTime:t.updateTime,children:n}}));n({dataSource:ze.a.sortBy(t,(e=>-e.confirmedCount)).flat(),isLoading:!1})}))}),[]),{dataSource:e,isLoading:t}}function We({dataSource:e,value:t,onChange:n,style:a,className:r,size:o}){return p.a.createElement(M.a.Group,{style:a,className:r,size:o},e.map((e=>p.a.createElement(M.a,{key:e.value,type:e.value===t?"primary":"normal",disabled:e.disabled,onClick:()=>{e.value!==t&&n(e.value)}},e.label))))}var Ve=n(313);const Ue=p.a.createContext("default"),Pe=()=>p.a.createElement(Ve.a,null,p.a.createElement("link",{rel:"stylesheet",href:"https://gw.alipayobjects.com/os/lib/antd/4.6.6/dist/antd.css"})),Ye=()=>p.a.createElement(Ve.a,null,p.a.createElement("link",{rel:"stylesheet",href:"https://gw.alipayobjects.com/os/lib/alifd/next/1.21.6/dist/next.css"})),Ae=()=>p.a.createElement(Ve.a,null,p.a.createElement("link",{rel:"stylesheet",href:"https://gw.alipayobjects.com/os/lib/alife/hippo/2.12.11/dist/hippo.css"})),$e=[{key:"key:@total@",parentKey:null,name:"\u603b\u8ba1",childCount:1,a:126434.47,b:90437.96,c:86279.48,d:59811.81,lfl:.31,rate:.66},...Fe("\u676d\u5dde"),...Fe("\u4e0a\u6d77"),...Fe("\u5317\u4eac"),...Fe("\u6b66\u6c49"),...Fe("\u6210\u90fd")];function Fe(e){return[{key:"key:"+e,parentKey:"key:@total@",name:e,childCount:1,a:69665.75,b:46072.06,c:43819.82,d:30336.13,lfl:.37,rate:.65},{key:`key:${e} \u4e00\u5b63\u5ea6`,parentKey:"key:"+e,name:"\u4e00\u5b63\u5ea6",childCount:3,a:14438.76,b:9822.21,c:8724.7,d:5929.93,lfl:.39,rate:.6},{key:`key:${e} \u4e00\u5b63\u5ea6 2022-01`,parentKey:`key:${e} \u4e00\u5b63\u5ea6`,name:"2022-01",childCount:0,a:4349.64,b:3072.48,c:2412.92,d:1840.75,lfl:.44,rate:.59},{key:`key:${e} \u4e00\u5b63\u5ea6 2022-02`,parentKey:`key:${e} \u4e00\u5b63\u5ea6`,name:"2022-02",childCount:0,a:4873.01,b:3239.29,c:3072.48,d:1931.65,lfl:.36,rate:.59},{key:`key:${e} \u4e00\u5b63\u5ea6 2022-03`,parentKey:`key:${e} \u4e00\u5b63\u5ea6`,name:"2022-03",childCount:0,a:5216.1,b:3510.44,c:3239.29,d:2157.52,lfl:.37,rate:.61},{key:`key:${e} \u4e8c\u5b63\u5ea6`,parentKey:"key:"+e,name:"\u4e8c\u5b63\u5ea6",childCount:3,a:16870.42,b:10983.12,c:10585.88,d:7037.24,lfl:.37,rate:.64},{key:`key:${e} \u4e8c\u5b63\u5ea6 2022-04`,parentKey:`key:${e} \u4e8c\u5b63\u5ea6`,name:"2022-04",childCount:0,a:5214.15,b:3411.93,c:3510.44,d:2110.52,lfl:.32,rate:.61},{key:`key:${e} \u4e8c\u5b63\u5ea6 2022-05`,parentKey:`key:${e} \u4e8c\u5b63\u5ea6`,name:"2022-05",childCount:0,a:5749.32,b:3663.5,c:3411.93,d:2376.51,lfl:.4,rate:.64},{key:`key:${e} \u4e8c\u5b63\u5ea6 2022-06`,parentKey:`key:${e} \u4e8c\u5b63\u5ea6`,name:"2022-06",childCount:0,a:5906.94,b:3907.68,c:3663.5,d:2550.21,lfl:.37,rate:.65}]}function Ke(e,t){return new Promise((n=>{setTimeout(n,e,t)}))}class qe{constructor(){this.count=0}async loadRootNodeData(){return Ke(1e3,$e.find((e=>null==e.parentKey)))}async loadNodeDataByParentKey(e){const t=$e.filter((t=>t.parentKey==e));return Ke([500,500,2e3,5e3,1e3,800,3e3][this.count++%7],t)}}},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(328),r=n(0),o=n.n(r),i=n(155);const l=n(122).a,s=l`
  // 放到 body 内增加 CSS 优先级
  body {
    a {
      &,
      :link,
      :hover,
      :visited {
        color: var(--ifm-link-color);
        text-decoration: var(--ifm-link-decoration);
      }
    }

    .menu__link {
      &,
      :link,
      :hover,
      :visited {
        color: var(--ifm-menu-color);
      }
    }

    .menu__link--active {
      &,
      :link,
      :hover,
      :visited {
        color: var(--ifm-menu-color-active);
      }
    }

    a.navbar__link {
      color: var(--ifm-navbar-link-color);
    }

    a.navbar__link:hover,
    a.navbar__link--active {
      color: var(--ifm-navbar-link-hover-color);
      text-decoration: none;
    }

    strong {
      font-weight: var(--ifm-font-weight-bold);
    }

    a.table-of-contents__link {
      color: var(--ifm-toc-link-color);
    }

    a.table-of-contents__link:hover,
    a.table-of-contents__link--active {
      color: var(--ifm-color-primary);
      text-decoration: none;
    }

    a.navbar__brand {
      color: var(--ifm-navbar-link-color);
    }

    .alert a {
      &,
      :hover,
      :link,
      :visited {
        color: var(--ifm-alert-color);
        text-decoration: underline;
      }
    }
  }

  body {
    p {
      font-size: inherit;
      line-height: inherit;
    }

    ul,
    ol {
      margin-bottom: var(--ifm-list-margin);
      margin-top: 0;
      padding-left: var(--ifm-list-left-padding);
    }

    ul {
      list-style: disc;
    }
    ol {
      list-style: decimal;
    }

    ol ul {
      list-style-type: circle;
    }

    ul,
    ol {
      margin-bottom: var(--ifm-list-margin);
      margin-top: 0;
      padding-left: var(--ifm-list-left-padding);
    }
    ol ol,
    ul ol {
      list-style-type: lower-roman;
    }
    ul ul,
    ul ol,
    ol ol,
    ol ul {
      margin-bottom: 0;
      margin-top: 0;
    }
    ul ul ol,
    ul ol ol,
    ol ul ol,
    ol ol ol {
      list-style-type: lower-alpha;
    }
  }

  html body {
    font-family: var(--ifm-font-family-base);
    color: var(--ifm-font-color-base);
    line-height: var(--ifm-line-height-base);
    font-size: var(--ifm-font-size-base);
  }
`,c=l`
  // 放到 body 内增加 CSS 优先级
  body {
    code {
      background-color: var(--ifm-code-background);
      border-radius: var(--ifm-code-border-radius);
      color: var(--ifm-code-color);
      font-family: var(--ifm-font-family-monospace);
      font-size: var(--ifm-code-font-size);
      margin: 0;
      padding: var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal);
    }
    a code {
      color: inherit;
    }
    pre {
      background-color: var(--ifm-pre-background);
      border-radius: var(--ifm-pre-border-radius);
      color: var(--ifm-pre-color);
      font-family: var(--ifm-font-family-monospace);
      font-size: var(--ifm-code-font-size);
      line-height: var(--ifm-pre-line-height);
      margin-bottom: var(--ifm-spacing-vertical);
      margin-top: 0;
      overflow: auto;
      padding: var(--ifm-pre-padding);
      word-wrap: normal;
    }
    pre code {
      background-color: transparent;
      border: 0;
      display: inline;
      font-size: 100%;
      line-height: inherit;
      margin: 0;
      overflow: visible;
      padding: 0;
      white-space: pre;
      word-break: normal;
      word-wrap: normal;
    }
    kbd {
      background-color: var(--ifm-color-emphasis-0);
      border: 1px solid var(--ifm-color-emphasis-400);
      border-radius: 0.2rem;
      box-shadow: inset 0 -1px 0 var(--ifm-color-emphasis-400);
      color: var(--ifm-color-emphasis-800);
      font: 80% var(--ifm-font-family-monospace);
      padding: 0.15rem 0.3rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--ifm-heading-color);
      font-weight: var(--ifm-heading-font-weight);
      line-height: var(--ifm-heading-line-height);
      margin-bottom: var(--ifm-heading-margin-bottom);
      margin-top: var(--ifm-heading-margin-top);
    }
    h1 {
      font-size: var(--ifm-h1-font-size);
    }
    h2 {
      font-size: var(--ifm-h2-font-size);
    }
    h3 {
      font-size: var(--ifm-h3-font-size);
    }
    h4 {
      font-size: var(--ifm-h4-font-size);
    }
    h5 {
      font-size: var(--ifm-h5-font-size);
    }
    h6 {
      font-size: var(--ifm-h6-font-size);
    }

    strong {
      font-weight: var(--ifm-font-weight-bold);
    }
    a {
      color: var(--ifm-link-color);
      text-decoration: var(--ifm-link-decoration);
    }
    a:hover {
      color: var(--ifm-link-hover-color);
      text-decoration: var(--ifm-link-hover-decoration);
    }
    a:active,
    a:hover {
      outline-width: 0;
    }
    a:not([href]) {
      text-decoration: none;
    }
    p {
      margin-top: 0;
      margin-bottom: var(--ifm-paragraph-margin-bottom);
    }
    blockquote {
      border-left: 6px solid var(--ifm-color-emphasis-300);
      color: var(--ifm-blockquote-color);
      font-size: var(--ifm-blockquote-font-size);
      margin: 0;
      margin-bottom: var(--ifm-spacing-vertical);
      padding: var(--ifm-blockquote-padding-vertical) var(--ifm-blockquote-padding-horizontal);
    }
    blockquote > :first-child {
      margin-top: 0;
    }
    blockquote > :last-child {
      margin-bottom: 0;
    }
    hr {
      border-color: var(--ifm-hr-border-color);
      border-style: solid;
      border-width: var(--ifm-hr-border-width);
      box-sizing: content-box;
      margin: var(--ifm-hr-margin-vertical) 0;
      overflow: hidden;
      padding: 0;
    }
    hr:before {
      content: '';
      display: table;
    }
    hr:after {
      clear: both;
      content: '';
      display: table;
    }
  }
`;function d(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null),o.a.createElement(c,null))}function u(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,e),o.a.createElement(i.FusionStyles,null),o.a.createElement(d,null))}},294:function(e,t,n){"use strict";var a=Symbol("factory-symbol");function r(e,t){void 0===t&&(t="auto");var n=Object.keys(e);function o(t){var o=Object.assign({},t);return n.forEach((function(t){if(o[t]!==r.empty){var n,i,l=e[t];if((i=l)&&i[a])o[t]=l(o[t]);else o[t]=null!==(n=o[t])&&void 0!==n?n:l}else delete o[t]})),o}function i(e){return("auto"===t?Array.isArray(e):t)?null==e?[]:e.map(o):o(e)}return i[a]=!0,i.extends=function(e){var n=r(e,t);return function(e){return i(n(e))}},i}r.empty=Symbol("proto.empty"),r.string=function(e){if(null!=e&&"string"!=typeof e)throw new Error("must be string");return e},r.string[a]=!0,r.number=function(e){if(null!=e&&"number"!=typeof e)throw new Error("must be number");return e},r.number[a]=!0,r.notNull=function(e){if(null==e)throw new Error("must be not null");return e},r.notNull[a]=!0,r.object=function(e){return r(e,!1)},r.array=function(e){return r(e,!0)},t.a=r},324:function(e,t,n){var a={"./af":157,"./af.js":157,"./ar":158,"./ar-dz":159,"./ar-dz.js":159,"./ar-kw":160,"./ar-kw.js":160,"./ar-ly":161,"./ar-ly.js":161,"./ar-ma":162,"./ar-ma.js":162,"./ar-sa":163,"./ar-sa.js":163,"./ar-tn":164,"./ar-tn.js":164,"./ar.js":158,"./az":165,"./az.js":165,"./be":166,"./be.js":166,"./bg":167,"./bg.js":167,"./bm":168,"./bm.js":168,"./bn":169,"./bn-bd":170,"./bn-bd.js":170,"./bn.js":169,"./bo":171,"./bo.js":171,"./br":172,"./br.js":172,"./bs":173,"./bs.js":173,"./ca":174,"./ca.js":174,"./cs":175,"./cs.js":175,"./cv":176,"./cv.js":176,"./cy":177,"./cy.js":177,"./da":178,"./da.js":178,"./de":179,"./de-at":180,"./de-at.js":180,"./de-ch":181,"./de-ch.js":181,"./de.js":179,"./dv":182,"./dv.js":182,"./el":183,"./el.js":183,"./en-au":184,"./en-au.js":184,"./en-ca":185,"./en-ca.js":185,"./en-gb":186,"./en-gb.js":186,"./en-ie":187,"./en-ie.js":187,"./en-il":188,"./en-il.js":188,"./en-in":189,"./en-in.js":189,"./en-nz":190,"./en-nz.js":190,"./en-sg":191,"./en-sg.js":191,"./eo":192,"./eo.js":192,"./es":193,"./es-do":194,"./es-do.js":194,"./es-mx":195,"./es-mx.js":195,"./es-us":196,"./es-us.js":196,"./es.js":193,"./et":197,"./et.js":197,"./eu":198,"./eu.js":198,"./fa":199,"./fa.js":199,"./fi":200,"./fi.js":200,"./fil":201,"./fil.js":201,"./fo":202,"./fo.js":202,"./fr":203,"./fr-ca":204,"./fr-ca.js":204,"./fr-ch":205,"./fr-ch.js":205,"./fr.js":203,"./fy":206,"./fy.js":206,"./ga":207,"./ga.js":207,"./gd":208,"./gd.js":208,"./gl":209,"./gl.js":209,"./gom-deva":210,"./gom-deva.js":210,"./gom-latn":211,"./gom-latn.js":211,"./gu":212,"./gu.js":212,"./he":213,"./he.js":213,"./hi":214,"./hi.js":214,"./hr":215,"./hr.js":215,"./hu":216,"./hu.js":216,"./hy-am":217,"./hy-am.js":217,"./id":218,"./id.js":218,"./is":219,"./is.js":219,"./it":220,"./it-ch":221,"./it-ch.js":221,"./it.js":220,"./ja":222,"./ja.js":222,"./jv":223,"./jv.js":223,"./ka":224,"./ka.js":224,"./kk":225,"./kk.js":225,"./km":226,"./km.js":226,"./kn":227,"./kn.js":227,"./ko":228,"./ko.js":228,"./ku":229,"./ku.js":229,"./ky":230,"./ky.js":230,"./lb":231,"./lb.js":231,"./lo":232,"./lo.js":232,"./lt":233,"./lt.js":233,"./lv":234,"./lv.js":234,"./me":235,"./me.js":235,"./mi":236,"./mi.js":236,"./mk":237,"./mk.js":237,"./ml":238,"./ml.js":238,"./mn":239,"./mn.js":239,"./mr":240,"./mr.js":240,"./ms":241,"./ms-my":242,"./ms-my.js":242,"./ms.js":241,"./mt":243,"./mt.js":243,"./my":244,"./my.js":244,"./nb":245,"./nb.js":245,"./ne":246,"./ne.js":246,"./nl":247,"./nl-be":248,"./nl-be.js":248,"./nl.js":247,"./nn":249,"./nn.js":249,"./oc-lnc":250,"./oc-lnc.js":250,"./pa-in":251,"./pa-in.js":251,"./pl":252,"./pl.js":252,"./pt":253,"./pt-br":254,"./pt-br.js":254,"./pt.js":253,"./ro":255,"./ro.js":255,"./ru":256,"./ru.js":256,"./sd":257,"./sd.js":257,"./se":258,"./se.js":258,"./si":259,"./si.js":259,"./sk":260,"./sk.js":260,"./sl":261,"./sl.js":261,"./sq":262,"./sq.js":262,"./sr":263,"./sr-cyrl":264,"./sr-cyrl.js":264,"./sr.js":263,"./ss":265,"./ss.js":265,"./sv":266,"./sv.js":266,"./sw":267,"./sw.js":267,"./ta":268,"./ta.js":268,"./te":269,"./te.js":269,"./tet":270,"./tet.js":270,"./tg":271,"./tg.js":271,"./th":272,"./th.js":272,"./tk":273,"./tk.js":273,"./tl-ph":274,"./tl-ph.js":274,"./tlh":275,"./tlh.js":275,"./tr":276,"./tr.js":276,"./tzl":277,"./tzl.js":277,"./tzm":278,"./tzm-latn":279,"./tzm-latn.js":279,"./tzm.js":278,"./ug-cn":280,"./ug-cn.js":280,"./uk":281,"./uk.js":281,"./ur":282,"./ur.js":282,"./uz":283,"./uz-latn":284,"./uz-latn.js":284,"./uz.js":283,"./vi":285,"./vi.js":285,"./x-pseudo":286,"./x-pseudo.js":286,"./yo":287,"./yo.js":287,"./zh-cn":288,"./zh-cn.js":288,"./zh-hk":289,"./zh-hk.js":289,"./zh-mo":290,"./zh-mo.js":290,"./zh-tw":291,"./zh-tw.js":291};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=324},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(292),i=n(134);function l(){return r.a.createElement("iframe",{src:"https://ali-react-table.js.org/beta/storybook/",style:{display:"block",width:"100%",height:"calc(100vh - 60px)",border:"none"}})}t.default=function(e){const t=Object(i.a)(),{siteConfig:n={}}=t;return r.a.createElement(o.a,{title:"\u793a\u4f8b",description:"ali-react-table \u793a\u4f8b\uff08powered by storybook\uff09",noFooter:!0},r.a.createElement(l,null))}}}]);