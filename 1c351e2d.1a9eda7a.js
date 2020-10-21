(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "frontMatter", function() { return /* binding */ frontMatter; });
__webpack_require__.d(__webpack_exports__, "metadata", function() { return /* binding */ metadata; });
__webpack_require__.d(__webpack_exports__, "rightToc", function() { return /* binding */ rightToc; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MDXContent; });

// NAMESPACE OBJECT: ./examples/biz/remain-matrix.stories.tsx
var remain_matrix_stories_namespaceObject = {};
__webpack_require__.r(remain_matrix_stories_namespaceObject);
__webpack_require__.d(remain_matrix_stories_namespaceObject, "default", function() { return remain_matrix_stories; });
__webpack_require__.d(remain_matrix_stories_namespaceObject, "RemainMatrix", function() { return RemainMatrix; });

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(6);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(177);

// EXTERNAL MODULE: ../ali-react-table/src/base-table/styles.ts
var styles = __webpack_require__(180);

// EXTERNAL MODULE: ../ali-react-table/src/utils/proto.ts
var proto = __webpack_require__(452);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/d3/index.js + 142 modules
var d3 = __webpack_require__(1024);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(166);

// EXTERNAL MODULE: ./src/assets/format.tsx
var format = __webpack_require__(205);

// EXTERNAL MODULE: ./src/theme/ReactLiveScope/WebsiteBaseTable.js
var WebsiteBaseTable = __webpack_require__(255);

// CONCATENATED MODULE: ./examples/biz/remain-matrix.stories.tsx
const COLORS=['#E8F3FF','#D6E9FF','#ADD1FF','#85B6FF','#5790F2',// 从这里开始字体颜色要变为白色
'#2E6BE6','#1D4DBF','#0F3499','#061F73','#03124D'];const data=[{date:'1月04号',user_cnt:300,day1:0.4,day2:0.4,day3:0.35,day4:0.4,day5:0.35,day6:0.3,day7:0.25},{date:'1月05号',user_cnt:350,day1:0.4,day2:0.36,day3:0.45,day4:0.3,day5:0.3,day6:0.2,day7:-1},{date:'1月06号',user_cnt:400,day1:0.4,day2:0.4,day3:0.5,day4:0.4,day5:0.3,day6:-1,day7:-1},{date:'1月07号',user_cnt:350,day1:0.45,day2:0.4,day3:0.3,day4:0.2,day5:-1,day6:-1,day7:-1},{date:'1月08号',user_cnt:400,day1:0.5,day2:0.5,day3:0.4,day4:-1,day5:-1,day6:-1,day7:-1},{date:'1月09号',user_cnt:500,day1:0.6,day2:0.48,day3:-1,day4:-1,day5:-1,day6:-1,day7:-1},{date:'1月10号',user_cnt:400,day1:0.52,day2:-1,day3:-1,day4:-1,day5:-1,day6:-1,day7:-1}];const colorIdx=d3["a" /* scaleQuantize */]().domain([0.2,0.6]).range(COLORS.map((c,i)=>i));/* harmony default export */ var remain_matrix_stories = ({title:'业务示例 / 用户留存矩阵'});const StyledBaseTable=Object(styled_components_browser_esm["b" /* default */])(WebsiteBaseTable["a" /* WebsiteBaseTable */])`
  --border-color: none;
  --header-bgcolor: var(--ifm-background-surface-color);

  .${styles["b" /* Classes */].tableHeader} {
    border-top: 1px solid #dfe3e8;
    border-bottom: 1px solid #dfe3e8;
  }

  .${styles["b" /* Classes */].tableHeaderCell} {
    height: 48px;
  }
`;function RemainMatrix(){const remainCol=proto["a" /* default */].array({align:'right',render:remainRateWithCount,getCellProps:getRemainCellProps});return/*#__PURE__*/react_default.a.createElement(StyledBaseTable,{defaultColumnWidth:100,columns:[{code:'date',name:'日期'},{code:'user_cnt',name:'用户数'},...remainCol([{code:'day1',name:'第一日'},{code:'day2',name:'第二日'},{code:'day3',name:'第三日'},{code:'day4',name:'第四日'},{code:'day5',name:'第五日'},{code:'day6',name:'第六日'},{code:'day7',name:'第七日'}])],dataSource:data});function getRemainCellProps(rate){if(rate==-1){return;}const i=colorIdx(rate);return{style:{backgroundColor:COLORS[i],color:i<=4?'#03124D':'white'}};}function remainRateWithCount(rate,record){if(rate==-1){return null;}return/*#__PURE__*/react_default.a.createElement("div",{style:{lineHeight:'20px'}},/*#__PURE__*/react_default.a.createElement("div",null,Object(format["ratio"])(rate)),/*#__PURE__*/react_default.a.createElement("div",null,Object(format["amount"])(rate*record.user_cnt)));}}
// EXTERNAL MODULE: ./examples/helpers/Stories.tsx
var Stories = __webpack_require__(493);

// CONCATENATED MODULE: ./examples/biz/remain-matrix.mdx
var frontMatter={id:'remain-matrix',title:'用户留存矩阵',hide_table_of_contents:true,hide_title:true};var metadata={"unversionedId":"biz/remain-matrix","id":"biz/remain-matrix","isDocsHomePage":false,"title":"用户留存矩阵","source":"@site/examples/biz/remain-matrix.mdx","slug":"/biz/remain-matrix","permalink":"/examples/biz/remain-matrix","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/examples/biz/remain-matrix.mdx","version":"current","sidebar":"sidebar","previous":{"title":"商品排行榜","permalink":"/examples/biz/rank-table"},"next":{"title":"投入产出分析表格","permalink":"/examples/biz/ROI-analysis-table"}};/* @jsx mdx */var rightToc=[];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(objectWithoutPropertiesLoose["a" /* default */])(_ref,["components"]);return Object(esm["b" /* mdx */])(MDXLayout,Object(esm_extends["a" /* default */])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm["b" /* mdx */])(Stories["a" /* Stories */],{stories:remain_matrix_stories_namespaceObject,path:"biz/remain-matrix.stories.tsx",mdxType:"Stories"}));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return internals; });
function safeRenderHeader(column){var _column$title;return(_column$title=column.title)!==null&&_column$title!==void 0?_column$title:column.name;}function safeGetValue(column,record,rowIndex){if(column.getValue){return column.getValue(record,rowIndex);}return record[column.code];}function safeGetRowKey(primaryKey,record,rowIndex){var key;if(typeof primaryKey==='string'){key=record[primaryKey];}else if(typeof primaryKey==='function'){key=primaryKey(record);}if(key==null){key=String(rowIndex);}return key;}function safeGetCellProps(column,record,rowIndex){if(column.getCellProps){var value=safeGetValue(column,record,rowIndex);return column.getCellProps(value,record,rowIndex)||{};}return{};}function safeRender(column,record,rowIndex){var value=safeGetValue(column,record,rowIndex);if(column.render){return column.render(value,record,rowIndex);}return value;}var internals={safeRenderHeader:safeRenderHeader,safeGetValue:safeGetValue,safeGetRowKey:safeGetRowKey,safeGetCellProps:safeGetCellProps,safeRender:safeRender};

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCK_SHADOW_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StyledArtTableWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
const LOCK_SHADOW_PADDING=20;const prefix='art-';const Classes={/** BaseTable 表格组件的外层包裹 div */artTableWrapper:`${prefix}table-wrapper`,artTable:`${prefix}table`,tableHeader:`${prefix}table-header`,tableBody:`${prefix}table-body`,/** 表格行 */tableRow:`${prefix}table-row`,/** 表头行 */tableHeaderRow:`${prefix}table-header-row`,/** 单元格 */tableCell:`${prefix}table-cell`,/** 表头的单元格 */tableHeaderCell:`${prefix}table-header-cell`,virtualBlank:`${prefix}virtual-blank`,stickyScroll:`${prefix}sticky-scroll`,stickyScrollItem:`${prefix}sticky-scroll-item`,lockShadowMask:`${prefix}lock-shadow-mask`,lockShadow:`${prefix}lock-shadow`,leftLockShadow:`${prefix}left-lock-shadow`,rightLockShadow:`${prefix}right-lock-shadow`,/** 数据为空时表格内容的外层 div */emptyWrapper:`${prefix}empty-wrapper`,loadingWrapper:`${prefix}loading-wrapper`,loadingIndicatorWrapper:`${prefix}loading-indicator-wrapper`,loadingIndicator:`${prefix}loading-indicator`};const Z={lock:5,header:10,lockShadow:20,scrollItem:30,loadingIndicator:40};const StyledArtTableWrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].div`
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

  .${Classes.tableHeader} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--header-bgcolor);
  }

  .${Classes.tableBody} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--bgcolor);
  }

  &.sticky .${Classes.tableHeader} {
    position: sticky;
    top: 0;
    z-index: ${Z.header};
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
    z-index: ${Z.lock};
  }

  //#region 锁列阴影
  .${Classes.lockShadowMask} {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: ${Z.lockShadow};
    pointer-events: none;
    overflow: hidden;

    .${Classes.lockShadow} {
      height: 100%;
    }

    .${Classes.leftLockShadow} {
      margin-right: ${LOCK_SHADOW_PADDING}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-right: var(--cell-border-vertical);
      }
    }

    .${Classes.rightLockShadow} {
      margin-left: ${LOCK_SHADOW_PADDING}px;
      box-shadow: none;

      &.show-shadow {
        box-shadow: var(--lock-shadow);
        border-left: var(--cell-border-vertical);
      }
    }
  }
  //#endregion

  //#region 空表格展现
  .${Classes.emptyWrapper} {
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
  .${Classes.stickyScroll} {
    overflow: auto;
    position: sticky;
    bottom: 0;
    z-index: ${Z.scrollItem};
    margin-top: -17px;
  }

  .${Classes.stickyScrollItem} {
    // 必须有高度才能出现滚动条
    height: 1px;
    visibility: hidden;
  }
  //#endregion

  //#region 加载样式
  .${Classes.loadingWrapper} {
    position: relative;

    .${Classes.loadingIndicatorWrapper} {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
    }

    .${Classes.loadingIndicator} {
      position: sticky;
      z-index: ${Z.loadingIndicator};
      transform: translateY(-50%);
    }
  }
  //#endregion
`;

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLeafNode; });
function isLeafNode(node){return node.children==null||node.children.length===0;}

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plain", function() { return plain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amount0", function() { return amount0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amount", function() { return amount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amount1", function() { return amount1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amount2", function() { return amount2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratio", function() { return ratio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lfl", function() { return lfl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "money", function() { return money; });
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
const plain=v=>{if(v==='-'||v==null){return'-';}return String(v);};/** 数字格式化：千分位 & 保留到个位数 */const amount0=v=>{if(v==='-'||v==null){return'-';}return numeral__WEBPACK_IMPORTED_MODULE_0___default()(v).format('0,0');};const amount=amount0;function time(d){// 2020-02-15 19:52:02.225
return moment__WEBPACK_IMPORTED_MODULE_1___default()(d,'YYYY-MM-DD HH:mm:ss.sss').format('YYYY年MM月DD日 HH:mm:ss');}/** 数字格式化：千分位 & 保留到一位小数 */const amount1=v=>{if(v==='-'||v==null){return'-';}return numeral__WEBPACK_IMPORTED_MODULE_0___default()(v).format('0,0.0');};/** 数字格式化：千分位 & 保留两位小数 */const amount2=v=>{if(v==='-'||v==null){return'-';}return numeral__WEBPACK_IMPORTED_MODULE_0___default()(v).format('0,0.00');};const ratio=v=>{if(v==='-'||v==null){return'-';}return numeral__WEBPACK_IMPORTED_MODULE_0___default()(v).format('0.00%');};const BeautifulUpIcon=/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(({size=12,style})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg",{viewBox:"0 0 1024 1024",width:size,height:size,fill:"currentColor",style:style},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path",{d:"M682.667 512v426.667H341.333V512h-256L512 0l426.667 512h-256z"})));const BeautifulDownIcon=/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(({size=12,style})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg",{viewBox:"0 0 1024 1024",width:size,height:size,fill:"currentColor",style:style},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path",{d:"M682.667 426.667V0H341.333v426.667h-256l426.667 512 426.667-512h-256z"})));/** 环比/同比格式化函数，注意 lfl 并不是一个 React 组件. 注意 lfl 生成的 div 样式 */const lfl=value=>{if(value==null||value==='-'||isNaN(value)||value===Infinity||value===-Infinity){return render('-');}value=Number(value);if(value>0){return render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span",{style:{color:'#f4485c'}},numeral__WEBPACK_IMPORTED_MODULE_0___default()(value).format('0.00%')),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BeautifulUpIcon,{style:{marginLeft:4,color:'#f4485c'}})));}if(value<0){return render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span",{style:{color:'#00a854'}},numeral__WEBPACK_IMPORTED_MODULE_0___default()(value).format('0.00%')),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BeautifulDownIcon,{style:{marginLeft:4,color:'#00a854'}})));}// value === 0
return render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span",{style:{color:'#838383'}},"0"));function render(children){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"lfl-cell",style:{display:'inline-flex',alignItems:'center',justifyContent:'flex-end'}},children);}};const money=v=>{if(v==='-'||v==null){return'-';}v=Number(v);if(v<0){return`-${money(-v)}`;}if(v===0){return String(v);}if(v<1e4){return numeral__WEBPACK_IMPORTED_MODULE_0___default()(v).format('0,0');}else if(v<10e4){return`${numeral__WEBPACK_IMPORTED_MODULE_0___default()(v/1e4).format('0.0')}万`;}else if(v<1e8){return`${numeral__WEBPACK_IMPORTED_MODULE_0___default()(v/1e4).format('0')}万`;}else if(v<10e8){return`${numeral__WEBPACK_IMPORTED_MODULE_0___default()(v/1e8).format('0.0')}亿`;}else{return`${numeral__WEBPACK_IMPORTED_MODULE_0___default()(v/1e8).format('0')}亿`;}};

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(180);
var DefaultLoadingIcon=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{style:{margin:'auto',display:'block',width:40,height:40},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#23a7fa",strokeDasharray:"188 64",strokeLinecap:"round",strokeWidth:"10"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})));});function DefaultLoadingContentWrapper(_ref){var children=_ref.children,visible=_ref.visible;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"art-loading-content-wrapper",style:{filter:visible?'blur(1px)':'none'}},children);}function Loading(_ref2){var visible=_ref2.visible,children=_ref2.children,_ref2$LoadingContentW=_ref2.LoadingContentWrapper,LoadingContentWrapper=_ref2$LoadingContentW===void 0?DefaultLoadingContentWrapper:_ref2$LoadingContentW,_ref2$LoadingIcon=_ref2.LoadingIcon,LoadingIcon=_ref2$LoadingIcon===void 0?DefaultLoadingIcon:_ref2$LoadingIcon;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles__WEBPACK_IMPORTED_MODULE_1__[/* Classes */ "b"].loadingWrapper},visible&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles__WEBPACK_IMPORTED_MODULE_1__[/* Classes */ "b"].loadingIndicatorWrapper},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles__WEBPACK_IMPORTED_MODULE_1__[/* Classes */ "b"].loadingIndicator},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingIcon,null))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingContentWrapper,{visible:visible,children:children}));}

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpanManager; });
/** 在表格的单元格的渲染过程中，先渲染的单元格的 colSpan/rowSpan 会影响到后续单元格是否被渲染
 * `SpanManager` 会在内部维护一份状态来记录最近渲染单元格的 colSpan/rowSpan，
 * 方便后续的单元格快速判断 "是否需要跳过渲染" */var SpanManager=/*#__PURE__*/function(){function SpanManager(){this.rects=[];}var _proto=SpanManager.prototype;_proto.testSkip=function testSkip(rowIndex,colIndex){return this.rects.some(function(_ref){var left=_ref.left,right=_ref.right,top=_ref.top,bottom=_ref.bottom;return left<=colIndex&&colIndex<right&&top<=rowIndex&&rowIndex<bottom;});};_proto.stripUpwards=function stripUpwards(rowIndex){this.rects=this.rects.filter(function(rect){return rect.bottom>rowIndex;});};_proto.add=function add(rowIndex,colIndex,colSpan,rowSpan){this.rects.push({left:colIndex,right:colIndex+colSpan,top:rowIndex,bottom:rowIndex+rowSpan});};return SpanManager;}();

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteBaseTable; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ali_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(256);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(166);
/* harmony import */ var _theme_hooks_useThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(246);
const DarkBaseTable=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"])(ali_react_table__WEBPACK_IMPORTED_MODULE_2__[/* BaseTable */ "a"])`
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
`;/** @type {typeof BaseTable} */const WebsiteBaseTable=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props,ref)=>{const{isDarkTheme}=Object(_theme_hooks_useThemeContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();// 下面的写法下，切换主题将导致组件重新加载
// 如果要避免重新加载，可以使用 styled-components 提供的 css 方法
const Table=isDarkTheme?DarkBaseTable:ali_react_table__WEBPACK_IMPORTED_MODULE_2__[/* BaseTable */ "a"];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Table,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({ref:ref},props));});

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ table_BaseTable; });

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelperLoose.js
var createForOfIteratorHelperLoose = __webpack_require__(508);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(3);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/classnames/index.js
var classnames = __webpack_require__(123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(808);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/BehaviorSubject.js + 3 modules
var BehaviorSubject = __webpack_require__(1033);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/of.js
var of = __webpack_require__(1029);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/timer.js + 1 modules
var timer = __webpack_require__(1038);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js + 2 modules
var animationFrame = __webpack_require__(1035);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/combineLatest.js + 3 modules
var combineLatest = __webpack_require__(1034);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/util/noop.js
var noop = __webpack_require__(1032);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/map.js
var map = __webpack_require__(887);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/switchMap.js
var switchMap = __webpack_require__(1028);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__(1030);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/filter.js
var filter = __webpack_require__(1031);

// EXTERNAL MODULE: ../ali-react-table/src/internals.ts
var internals = __webpack_require__(173);

// EXTERNAL MODULE: ../ali-react-table/src/base-table/styles.ts
var styles = __webpack_require__(180);

// CONCATENATED MODULE: ../ali-react-table/src/base-table/empty.tsx
var DefaultEmptyContent=/*#__PURE__*/react_default.a.memo(function(){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("img",{alt:"empty-image",className:"empty-image",src:"//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"}),/*#__PURE__*/react_default.a.createElement("div",{className:"empty-tips"},"\u6CA1\u6709\u7B26\u5408\u67E5\u8BE2\u6761\u4EF6\u7684\u6570\u636E",/*#__PURE__*/react_default.a.createElement("br",null),"\u8BF7\u4FEE\u6539\u6761\u4EF6\u540E\u91CD\u65B0\u67E5\u8BE2"));});function EmptyTable(_ref){var colgroup=_ref.colgroup,colSpan=_ref.colSpan,isLoading=_ref.isLoading,emptyCellHeight=_ref.emptyCellHeight,_ref$EmptyContent=_ref.EmptyContent,EmptyContent=_ref$EmptyContent===void 0?DefaultEmptyContent:_ref$EmptyContent;var show=!isLoading;return/*#__PURE__*/react_default.a.createElement("table",null,colgroup,/*#__PURE__*/react_default.a.createElement("tbody",null,/*#__PURE__*/react_default.a.createElement("tr",{className:classnames_default()(styles["b" /* Classes */].tableRow,'first','last','no-hover'),"data-rowindex":0},/*#__PURE__*/react_default.a.createElement("td",{className:classnames_default()(styles["b" /* Classes */].tableCell,'first','last'),colSpan:colSpan,style:{height:emptyCellHeight!==null&&emptyCellHeight!==void 0?emptyCellHeight:200}},show&&/*#__PURE__*/react_default.a.createElement("div",{className:styles["b" /* Classes */].emptyWrapper},/*#__PURE__*/react_default.a.createElement(EmptyContent,null))))));}
// EXTERNAL MODULE: ../ali-react-table/src/utils/isLeafNode.ts
var isLeafNode = __webpack_require__(183);

// EXTERNAL MODULE: ../ali-react-table/src/utils/collectNodes.ts
var collectNodes = __webpack_require__(416);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/defer.js + 1 modules
var defer = __webpack_require__(1037);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/fromEvent.js
var fromEvent = __webpack_require__(1027);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/scheduler/async.js
var scheduler_async = __webpack_require__(918);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/throttleTime.js + 1 modules
var throttleTime = __webpack_require__(1039);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(166);

// CONCATENATED MODULE: ../ali-react-table/src/base-table/utils.tsx
/** styled-components 类库的版本，ali-react-table 同时支持 v3 和 v5 */const STYLED_VERSION=styled_components_browser_esm["a" /* createGlobalStyle */]!=null?'v5':'v3';const STYLED_REF_PROP=STYLED_VERSION==='v3'?'innerRef':'ref';const OVERSCAN_SIZE=100;const AUTO_VIRTUAL_THRESHOLD=100;function sum(arr){let result=0;arr.forEach(x=>{result+=x;});return result;}// 使用 defer 避免过早引用 window，导致在 SSR 场景下报错
const throttledWindowResize$=Object(defer["a" /* defer */])(()=>Object(fromEvent["a" /* fromEvent */])(window,'resize').pipe(Object(throttleTime["a" /* throttleTime */])(150,scheduler_async["b" /* asyncScheduler */],{leading:true,trailing:true})));/** 获取默认的滚动条大小 */function getScrollbarSizeImpl(){const scrollDiv=document.createElement('div');scrollDiv.style.position='absolute';scrollDiv.style.width='100px';scrollDiv.style.height='100px';scrollDiv.style.overflow='scroll';scrollDiv.style.top='-9999px';document.body.appendChild(scrollDiv);const scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;const scrollbarHeight=scrollDiv.offsetHeight-scrollDiv.clientHeight;document.body.removeChild(scrollDiv);return{width:scrollbarWidth,height:scrollbarHeight};}let scrollBarSize$;function getScrollbarSize(){if(scrollBarSize$==null){scrollBarSize$=new BehaviorSubject["a" /* BehaviorSubject */](getScrollbarSizeImpl());throttledWindowResize$.pipe(Object(map["a" /* map */])(()=>getScrollbarSizeImpl())).subscribe(scrollBarSize$);}return scrollBarSize$.value;}/** 同步多个元素之间的 scrollLeft, 每当 scrollLeft 发生变化时 callback 会被调用 */function syncScrollLeft(elements,callback){const bypassSet=new Set();function publishScrollLeft(origin,scrollLeft){bypassSet.clear();for(const elem of elements){if(elem===origin){continue;}elem.scrollLeft=scrollLeft;bypassSet.add(elem);}}const subscription=new Subscription["a" /* Subscription */]();for(const ele of elements){const listener=()=>{if(bypassSet.has(ele)){bypassSet.delete(ele);return;}const scrollLeft=ele.scrollLeft;publishScrollLeft(ele,scrollLeft);callback(scrollLeft);};ele.addEventListener('scroll',listener,{passive:true});subscription.add(()=>ele.removeEventListener('scroll',listener));}return subscription;}function query(elem,className){return elem===null||elem===void 0?void 0:elem.querySelector('.'+className);}function queryAll(elem,className){return elem===null||elem===void 0?void 0:elem.querySelectorAll('.'+className);}/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */function shallowEqual(objA,objB){const hasOwnProperty=Object.prototype.hasOwnProperty;if(Object.is(objA,objB)){return true;}if(typeof objA!=='object'||objA===null||typeof objB!=='object'||objB===null){return false;}const keysA=Object.keys(objA);const keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
for(let i=0;i<keysA.length;i++){if(!hasOwnProperty.call(objB,keysA[i])||!Object.is(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}
// CONCATENATED MODULE: ../ali-react-table/src/base-table/getDerivedStateFromProps.tsx
function resolveVirtualEnabled(virtualEnum,defaultValue){if(virtualEnum==null||virtualEnum==='auto'){return defaultValue;}return virtualEnum;}let lockColumnNeedSpecifiedWidthWarned=false;function warnLockColumnNeedSpecifiedWidth(column){if(!lockColumnNeedSpecifiedWidthWarned){lockColumnNeedSpecifiedWidthWarned=true;console.warn('[ali-react-table] lock=true 的列需要指定宽度',column);}}let columnHiddenDeprecatedWarned=false;function warnColumnHiddenDeprecated(column){if(!columnHiddenDeprecatedWarned){columnHiddenDeprecatedWarned=true;console.warn('[ali-react-table] column.hidden 已经过时，如果需要隐藏该列，请将其从 columns 数组中移除',column);}}/** 检查列配置 & 设置默认宽度 & 剔除隐藏的列 */function processColumns(columns,defaultColumnWidth){if(columns==null||!Array.isArray(columns)){console.warn('[ali-react-table] <BaseTable /> props.columns 需要传入一个数组',columns);columns=[];}function dfs(columns){const result=[];for(let column of columns){if(column.width==null){if(defaultColumnWidth!=null){column={...column,width:defaultColumnWidth};}else if(false){}}if(Object(isLeafNode["a" /* default */])(column)){if(column.hidden){// 被隐藏的列 会在这里被剔除
warnColumnHiddenDeprecated(column);}else{result.push(column);}}else{const nextChildren=dfs(column.children);// 如果 nextChildren 为空，说明所有的子节点均被隐藏了，在这里隐藏父节点
if(nextChildren.length>0){result.push({...column,children:nextChildren});}}}return result;}return dfs(columns);}function getLeftNestedLockCount(columns){let nestedCount=0;for(const col of columns){if(isLock(col)){nestedCount+=1;}else{break;}}return nestedCount;function isLock(col){if(Object(isLeafNode["a" /* default */])(col)){return col.lock;}else{return col.lock||col.children.some(isLock);}}}function getDerivedStateFromProps(props,state){const{useVirtual:useVirtualProp,columns:columnsProp,dataSource:dataSourceProp,defaultColumnWidth}=props;const columns=processColumns(columnsProp,defaultColumnWidth);const leftNestedLockCount=getLeftNestedLockCount(columns);const fullFlat=Object(collectNodes["a" /* default */])(columns,'leaf-only');if(leftNestedLockCount===columns.length){// 处理所有的列均为 lock
return{flat:{left:[],right:[],full:fullFlat,center:fullFlat},nested:{left:[],right:[],full:columns,center:columns},useVirtual:{horizontal:false,vertical:false,header:false},stickyLeftMap:new Map(),stickyRightMap:new Map()};}const leftNested=columns.slice(0,leftNestedLockCount);const rightNestedLockCount=getLeftNestedLockCount(columns.slice().reverse());const centerNested=columns.slice(leftNestedLockCount,columns.length-rightNestedLockCount);const rightNested=columns.slice(columns.length-rightNestedLockCount);const shouldEnableHozVirtual=fullFlat.length>=AUTO_VIRTUAL_THRESHOLD&&fullFlat.every(col=>col.width!=null);const shouldEnableVerVirtual=dataSourceProp.length>=AUTO_VIRTUAL_THRESHOLD;const useVirtual=typeof useVirtualProp!=='object'?{horizontal:resolveVirtualEnabled(useVirtualProp,shouldEnableHozVirtual),vertical:resolveVirtualEnabled(useVirtualProp,shouldEnableVerVirtual),header:resolveVirtualEnabled(useVirtualProp,false)}:{horizontal:resolveVirtualEnabled(useVirtualProp.horizontal,shouldEnableHozVirtual),vertical:resolveVirtualEnabled(useVirtualProp.vertical,shouldEnableVerVirtual),header:resolveVirtualEnabled(useVirtualProp.header,shouldEnableVerVirtual)};const flat={left:Object(collectNodes["a" /* default */])(leftNested,'leaf-only'),full:fullFlat,right:Object(collectNodes["a" /* default */])(rightNested,'leaf-only'),center:Object(collectNodes["a" /* default */])(centerNested,'leaf-only')};const fullFlatCount=flat.full.length;const leftFlatCount=flat.left.length;const rightFlatCount=flat.right.length;const stickyLeftMap=new Map();let stickyLeft=0;for(let i=0;i<leftFlatCount;i++){stickyLeftMap.set(i,stickyLeft);stickyLeft+=flat.full[i].width;}const stickyRightMap=new Map();let stickyRight=0;for(let i=0;i<rightFlatCount;i++){stickyRightMap.set(fullFlatCount-1-i,stickyRight);stickyRight+=flat.full[fullFlatCount-1-i].width;}return{flat,nested:{left:leftNested,full:columns,right:rightNested,center:centerNested},useVirtual,stickyLeftMap,stickyRightMap};}
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelperLoose.js
var esm_createForOfIteratorHelperLoose = __webpack_require__(174);

// EXTERNAL MODULE: ../ali-react-table/src/utils/getTreeDepth.ts
var getTreeDepth = __webpack_require__(417);

// CONCATENATED MODULE: ../ali-react-table/src/base-table/header.tsx
function range(n){var array=[];for(var i=0;i<n;i++){array.push(i);}return array;}/** 根据当前横向虚拟滚动 对 nested.center 进行过滤，结果只保留当前视野内可见的那些列配置 */function filterNestedCenter(centerNested,hoz,leftFlatCount){return dfs(centerNested,leftFlatCount).filtered;function dfs(cols,startColIndex){var leafCount=0;var filtered=[];for(var _iterator=Object(esm_createForOfIteratorHelperLoose["a" /* default */])(cols),_step;!(_step=_iterator()).done;){var col=_step.value;var colIndex=startColIndex+leafCount;if(Object(isLeafNode["a" /* default */])(col)){leafCount+=1;if(leftFlatCount+hoz.leftIndex<=colIndex&&colIndex<leftFlatCount+hoz.rightIndex){filtered.push({colIndex:colIndex,col:col});}}else{var dfsRes=dfs(col.children,colIndex);leafCount+=dfsRes.leafCount;if(dfsRes.filtered.length>0){filtered.push({colIndex:colIndex,col:col,children:dfsRes.filtered});}}}return{filtered:filtered,leafCount:leafCount};}}/** 根据输入的 nested 列配置，算出相应的 leveled & flat 配置方便渲染 */function calculateLeveledAndFlat(inputNested,rowCount){var leveled=[];for(var depth=0;depth<rowCount;depth++){leveled.push([]);}var flat=[];dfs(inputNested,0);return{flat:flat,leveled:leveled};function dfs(input,depth){var leafCount=0;for(var i=0;i<input.length;i++){var indexedCol=input[i];if(Object(isLeafNode["a" /* default */])(indexedCol)){leafCount+=1;var wrapped={type:'normal',width:indexedCol.col.width,col:indexedCol.col,colIndex:indexedCol.colIndex,colSpan:1,isLeaf:true};leveled[depth].push(wrapped);flat.push(wrapped);}else{var dfsRes=dfs(indexedCol.children,depth+1);leafCount+=dfsRes.leafCount;if(dfsRes.leafCount>0){leveled[depth].push({type:'normal',width:indexedCol.col.width,col:indexedCol.col,colIndex:indexedCol.colIndex,colSpan:dfsRes.leafCount,isLeaf:false});}}}return{leafCount:leafCount};}}/** 包装列配置，附加上 colIndex 属性 */function attachColIndex(inputNested,colIndexOffset){return dfs(inputNested,colIndexOffset).result;function dfs(input,startColIndex){var result=[];var leafCount=0;for(var i=0;i<input.length;i++){var col=input[i];var colIndex=startColIndex+leafCount;if(Object(isLeafNode["a" /* default */])(col)){leafCount+=1;result.push({colIndex:colIndex,col:col});}else{var sub=dfs(col.children,colIndex);leafCount+=sub.leafCount;if(sub.leafCount>0){result.push({col:col,colIndex:colIndex,children:sub.result});}}}return{result:result,leafCount:leafCount};}}/** 计算用于渲染表头的数据结构 */function calculateRenderInfo(_ref,rowCount){var flat=_ref.flat,nested=_ref.nested,hoz=_ref.hoz,useVirtual=_ref.useVirtual;if(useVirtual.header){var leftPart=calculateLeveledAndFlat(attachColIndex(nested.left,0),rowCount);var filtered=filterNestedCenter(nested.center,hoz,flat.left.length);var centerPart=calculateLeveledAndFlat(filtered,rowCount);var rightPart=calculateLeveledAndFlat(attachColIndex(nested.right,flat.left.length+flat.center.length),rowCount);return{flat:[].concat(leftPart.flat,[{type:'blank',width:hoz.leftBlank,blankSide:'left'}],centerPart.flat,[{type:'blank',width:hoz.rightBlank,blankSide:'right'}],rightPart.flat),leveled:range(rowCount).map(function(depth){return[].concat(leftPart.leveled[depth],[{type:'blank',width:hoz.leftBlank,blankSide:'left'}],centerPart.leveled[depth],[{type:'blank',width:hoz.rightBlank,blankSide:'right'}],rightPart.leveled[depth]);})};}return calculateLeveledAndFlat(attachColIndex(nested.full,0),rowCount);}function TableHeader(props){var nested=props.nested,flat=props.flat,stickyLeftMap=props.stickyLeftMap,stickyRightMap=props.stickyRightMap;var rowCount=Object(getTreeDepth["a" /* default */])(nested.full)+1;var renderInfo=calculateRenderInfo(props,rowCount);var fullFlatCount=flat.full.length;var leftFlatCount=flat.left.length;var rightFlatCount=flat.right.length;var thead=renderInfo.leveled.map(function(wrappedCols,level){var headerCells=wrappedCols.map(function(wrapped){if(wrapped.type==='normal'){var _col$headerCellProps,_col$title;var colIndex=wrapped.colIndex,colSpan=wrapped.colSpan,isLeaf=wrapped.isLeaf,col=wrapped.col;var headerCellProps=(_col$headerCellProps=col.headerCellProps)!==null&&_col$headerCellProps!==void 0?_col$headerCellProps:{};var positionStyle={};if(colIndex<leftFlatCount){positionStyle.position='sticky';positionStyle.left=stickyLeftMap.get(colIndex);}else if(colIndex>=fullFlatCount-rightFlatCount){positionStyle.position='sticky';positionStyle.right=stickyRightMap.get(colIndex);}return/*#__PURE__*/react_default.a.createElement("th",Object.assign({key:colIndex},headerCellProps,{className:classnames_default()(styles["b" /* Classes */].tableHeaderCell,headerCellProps.className,{first:colIndex===0,last:colIndex+colSpan===fullFlatCount,'lock-left':colIndex<leftFlatCount,'lock-right':colIndex>=fullFlatCount-rightFlatCount}),colSpan:colSpan,rowSpan:isLeaf?rowCount-level:undefined,style:Object.assign({textAlign:col.align},headerCellProps.style,positionStyle)}),(_col$title=col.title)!==null&&_col$title!==void 0?_col$title:col.name);}else{if(wrapped.width>0){return/*#__PURE__*/react_default.a.createElement("th",{key:wrapped.blankSide});}else{return null;}}});return/*#__PURE__*/react_default.a.createElement("tr",{key:level,className:classnames_default()(styles["b" /* Classes */].tableHeaderRow,{first:level===0,last:level===rowCount-1})},headerCells);});return/*#__PURE__*/react_default.a.createElement("table",null,/*#__PURE__*/react_default.a.createElement("colgroup",null,renderInfo.flat.map(function(wrapped){if(wrapped.type==='blank'){if(wrapped.width>0){return/*#__PURE__*/react_default.a.createElement("col",{key:wrapped.blankSide,style:{width:wrapped.width}});}else{return null;}}else{return/*#__PURE__*/react_default.a.createElement("col",{key:wrapped.colIndex,style:{width:wrapped.width}});}})),/*#__PURE__*/react_default.a.createElement("thead",null,thead));}
// CONCATENATED MODULE: ../ali-react-table/src/base-table/helpers/rowHeightManager.ts
function getFullRenderRange(rowCount){return{topIndex:0,topBlank:0,bottomIndex:rowCount,bottomBlank:0};}function makeRowHeightManager(initRowCount,estimatedRowHeight){const cache=new Array(initRowCount).fill(estimatedRowHeight);function getRenderRange(offset,maxRenderHeight,rowCount){if(cache.length!==rowCount){setRowCount(rowCount);}if(maxRenderHeight<=0){// maxRenderHeight <= 0 说明表格目前在 viewport 之外
if(offset<=0){// 表格在 viewport 下方
return getRenderRangeWhenBelowView();}else{// 表格在 viewport 上方
return getRenderRangeWhenAboveView();}}else{// 表格与 viewport 相交
return getRenderRangeWhenInView();}function getRenderRangeWhenBelowView(){const start={topIndex:0,topBlank:0};const end=getEnd(0,start);return Object.assign(Object.assign({},start),end);}function getRenderRangeWhenAboveView(){const totalSize=getEstimatedTotalSize(rowCount);const start=getStart(totalSize);const end=getEnd(totalSize,start);return Object.assign(Object.assign({},start),end);}function getRenderRangeWhenInView(){const start=getStart(offset);const end=getEnd(offset+maxRenderHeight,start);return Object.assign(Object.assign({},start),end);}/** 获取虚拟滚动在 开始位置上的信息 */function getStart(offset){if(cache.length===0){return{topIndex:0,topBlank:0};}let topIndex=0;let topBlank=0;while(topIndex<cache.length){const h=cache[topIndex];if(topBlank+h>=offset){break;}topBlank+=h;topIndex+=1;}return overscanUpwards(topIndex,topBlank);}function overscanUpwards(topIndex,topBlank){let overscanSize=0;let overscanCount=0;while(overscanCount<topIndex&&overscanSize<OVERSCAN_SIZE){overscanCount+=1;overscanSize+=cache[topIndex-overscanCount];}return{topIndex:topIndex-overscanCount,topBlank:topBlank-overscanSize};}/** 获取虚拟滚动 在结束位置上的信息 */function getEnd(endOffset,startInfo){let bottomIndex=startInfo.topIndex;let offset=startInfo.topBlank;while(bottomIndex<rowCount&&offset<endOffset){offset+=cache[bottomIndex];bottomIndex+=1;}const bottomBlank=getEstimatedTotalSize(rowCount)-offset;return overscanDownwards(bottomIndex,bottomBlank);}function overscanDownwards(bottomIndex,bottomBlank){let overscanSize=0;let overscanCount=0;while(overscanCount<rowCount-bottomIndex&&overscanSize<OVERSCAN_SIZE){overscanSize+=cache[bottomIndex+overscanCount];overscanCount+=1;}return{bottomIndex:bottomIndex+overscanCount,bottomBlank:bottomBlank-overscanSize};}function getEstimatedTotalSize(rowCount){return sum(cache)+(rowCount-cache.length)*estimatedRowHeight;}function setRowCount(count){// 将 cache 的长度设置为 count
if(count<cache.length){cache.length=count;}else{const prevSize=cache.length;cache.length=count;cache.fill(estimatedRowHeight,prevSize);}}}function updateRow(index,offset,size){cache[index]=size;}return{getRenderRange,updateRow,// 导出 cache，方便调试；上层在实际使用时 并不需要使用 cache 字段
cache};}
// EXTERNAL MODULE: ../ali-react-table/src/base-table/helpers/SpanManager.ts
var SpanManager = __webpack_require__(251);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(220);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/Observable.js + 3 modules
var Observable = __webpack_require__(514);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/merge.js + 2 modules
var merge = __webpack_require__(1036);

// CONCATENATED MODULE: ../ali-react-table/src/base-table/helpers/visible-part.ts
function getRect(ele){if(ele===window){return{left:0,top:0,bottom:window.innerHeight,right:window.innerWidth};}else{return ele.getBoundingClientRect();}}function getVisiblePart(target,flowRoot){var targetRect=getRect(target);var rootRect=getRect(flowRoot);return{offsetY:Math.max(0,rootRect.top-targetRect.top),offsetX:Math.max(0,rootRect.left-targetRect.left),clipRect:{left:Math.max(targetRect.left,rootRect.left),top:Math.max(targetRect.top,rootRect.top),right:Math.min(targetRect.right,rootRect.right),bottom:Math.min(targetRect.bottom,rootRect.bottom)}};}function fromResizeEvent(element){if(element===window){return Object(fromEvent["a" /* fromEvent */])(element,'resize');}return new Observable["a" /* Observable */](function(subscriber){var resizeObserver=new ResizeObserver_es["default"](function(){subscriber.next();});resizeObserver.observe(element);return function(){resizeObserver.disconnect();};});}/** 基于 ResizeObserver 和 scroll event 封装的 RxJS observable；
 * 用于监听一个元素的在页面中的「可见范围」的不断变化 */function getVisiblePartObservable(target,flowRoot){return Object(merge["a" /* merge */])(Object(fromEvent["a" /* fromEvent */])(flowRoot,'scroll'),fromResizeEvent(flowRoot),fromResizeEvent(target)).pipe(map["a" /* map */](function(){return getVisiblePart(target,flowRoot);}));}
// EXTERNAL MODULE: ../ali-react-table/src/base-table/loading.tsx
var loading = __webpack_require__(235);

// CONCATENATED MODULE: ../ali-react-table/src/base-table/table.tsx
var propsDotEmptyContentDeprecatedWarned=false;function warnPropsDotEmptyContentIsDeprecated(){if(!propsDotEmptyContentDeprecatedWarned){propsDotEmptyContentDeprecatedWarned=true;console.warn('[ali-react-table] BaseTable props.emptyContent 已经过时，请使用 props.components.EmptyContent 来自定义数据为空时的表格表现');}}var table_BaseTable=/*#__PURE__*/function(_React$Component){Object(inheritsLoose["a" /* default */])(BaseTable,_React$Component);function BaseTable(props){var _this;_this=_React$Component.call(this,props)||this;_this.rowHeightManager=makeRowHeightManager(_this.props.dataSource.length,_this.props.estimatedRowHeight);_this.artTableWrapperRef=/*#__PURE__*/react_default.a.createRef();_this.rootSubscription=new Subscription["a" /* Subscription */]();_this.state=Object.assign(Object.assign({},getDerivedStateFromProps(props,null)),{hasScroll:true,needRenderLock:true,offsetY:0,offsetX:0,// 因为 ResizeObserver 在一开始总是会调用一次所提供的回调函数
// 故这里为 maxRenderHeight/maxRenderWidth 设置一个默认值即可（因为这两个默认值很快就会被覆盖）
// https://stackoverflow.com/questions/60026223/does-resizeobserver-invokes-initially-on-page-load
maxRenderHeight:600,maxRenderWidth:800});return _this;}var _proto=BaseTable.prototype;_proto.getDoms=function getDoms(){return this.doms;}/** 自定义滚动条宽度为table宽度，使滚动条滑块宽度相同 */;_proto.updateStickyScroll=function updateStickyScroll(){var _this$doms=this.doms,stickyScroll=_this$doms.stickyScroll,artTable=_this$doms.artTable,stickyScrollItem=_this$doms.stickyScrollItem;if(!artTable){return;}var tableBodyInnerTable=artTable.querySelector("."+styles["b" /* Classes */].tableBody+" table");var innerTableWidth=tableBodyInnerTable.offsetWidth;var artTableWidth=artTable.offsetWidth;var scrollbarSize=getScrollbarSize();stickyScroll.style.marginTop="-"+scrollbarSize.height+"px";if(artTableWidth>=innerTableWidth){if(this.state.hasScroll){this.setState({hasScroll:false});}}else{if(!this.state.hasScroll&&scrollbarSize.height>5){// 考虑下mac下面隐藏滚动条的情况
this.setState({hasScroll:true});}}// 设置子节点宽度
stickyScrollItem.style.width=innerTableWidth+"px";};_proto.renderTableHeader=function renderTableHeader(_ref){var hoz=_ref.horizontal;var _this$props=this.props,stickyTop=_this$props.stickyTop,hasHeader=_this$props.hasHeader;var _this$state=this.state,flat=_this$state.flat,nested=_this$state.nested,useVirtual=_this$state.useVirtual,stickyLeftMap=_this$state.stickyLeftMap,stickyRightMap=_this$state.stickyRightMap;return/*#__PURE__*/react_default.a.createElement("div",{className:classnames_default()(styles["b" /* Classes */].tableHeader,'no-scrollbar'),style:{top:stickyTop===0?undefined:stickyTop,display:hasHeader?undefined:'none'}},/*#__PURE__*/react_default.a.createElement(TableHeader,{nested:nested,flat:flat,hoz:hoz,useVirtual:useVirtual,stickyLeftMap:stickyLeftMap,stickyRightMap:stickyRightMap}));};_proto.updateOffsetX=function updateOffsetX(nextOffsetX){if(this.state.useVirtual.horizontal){if(Math.abs(nextOffsetX-this.state.offsetX)>=OVERSCAN_SIZE/2){this.setState({offsetX:nextOffsetX});}}};_proto.syncHorizontalScrollFromTableBody=function syncHorizontalScrollFromTableBody(){this.syncHorizontalScroll(this.doms.tableBody.scrollLeft);}/** 同步横向滚动偏移量 */;_proto.syncHorizontalScroll=function syncHorizontalScroll(x){this.updateOffsetX(x);var _this$doms2=this.doms,tableBody=_this$doms2.tableBody,artTableWrapper=_this$doms2.artTableWrapper;var flat=this.state.flat;var showLeftLockShadow=flat.left.length>0&&this.state.needRenderLock&&x>0;var leftLockShadow=query(artTableWrapper,styles["b" /* Classes */].leftLockShadow);if(showLeftLockShadow){leftLockShadow.classList.add('show-shadow');}else{leftLockShadow.classList.remove('show-shadow');}var showRightLockShadow=flat.right.length>0&&this.state.needRenderLock&&x<tableBody.scrollWidth-tableBody.clientWidth;var rightLockShadow=query(artTableWrapper,styles["b" /* Classes */].rightLockShadow);if(showRightLockShadow){rightLockShadow.classList.add('show-shadow');}else{rightLockShadow.classList.remove('show-shadow');}};_proto.getVerticalRenderRange=function getVerticalRenderRange(){var dataSource=this.props.dataSource;var _this$state2=this.state,useVirtual=_this$state2.useVirtual,offsetY=_this$state2.offsetY,maxRenderHeight=_this$state2.maxRenderHeight;var rowCount=dataSource.length;if(useVirtual.vertical){return this.rowHeightManager.getRenderRange(offsetY,maxRenderHeight,rowCount);}else{return getFullRenderRange(rowCount);}};_proto.getHorizontalRenderRange=function getHorizontalRenderRange(){var _this$state3=this.state,offsetX=_this$state3.offsetX,maxRenderWidth=_this$state3.maxRenderWidth,useVirtual=_this$state3.useVirtual,flat=_this$state3.flat;if(!useVirtual.horizontal){return{leftIndex:0,leftBlank:0,rightIndex:flat.full.length,rightBlank:0};}var leftIndex=0;var centerCount=0;var leftBlank=0;var centerRenderWidth=0;var overscannedOffsetX=Math.max(0,offsetX-OVERSCAN_SIZE);while(leftIndex<flat.center.length){var col=flat.center[leftIndex];if(col.width+leftBlank<overscannedOffsetX){leftIndex+=1;leftBlank+=col.width;}else{break;}}// 考虑 over scan 之后，中间部分的列至少需要渲染的宽度
var minCenterRenderWidth=maxRenderWidth+(overscannedOffsetX-leftBlank)+2*OVERSCAN_SIZE;while(leftIndex+centerCount<flat.center.length){var _col=flat.center[leftIndex+centerCount];if(_col.width+centerRenderWidth<minCenterRenderWidth){centerRenderWidth+=_col.width;centerCount+=1;}else{break;}}var rightBlankCount=flat.center.length-leftIndex-centerCount;var rightBlank=sum(flat.center.slice(flat.center.length-rightBlankCount).map(function(col){return col.width;}));return{leftIndex:leftIndex,leftBlank:leftBlank,rightIndex:leftIndex+centerCount,rightBlank:rightBlank};};_proto.getRenderRange=function getRenderRange(){return{vertical:this.getVerticalRenderRange(),horizontal:this.getHorizontalRenderRange()};};_proto.getFlatHozWrappedCols=function getFlatHozWrappedCols(hoz){var flat=this.state.flat;var wrappedCols=[].concat(flat.left.map(function(col,i){return{type:'normal',col:col,colIndex:i};}),[hoz.leftBlank>0&&{type:'blank',blankSide:'left',width:hoz.leftBlank}],flat.center.slice(hoz.leftIndex,hoz.rightIndex).map(function(col,i){return{type:'normal',col:col,colIndex:flat.left.length+hoz.leftIndex+i};}),[hoz.rightBlank>0&&{type:'blank',blankSide:'right',width:hoz.rightBlank}],flat.right.map(function(col,i){return{type:'normal',col:col,colIndex:flat.full.length-flat.right.length+i};}));return wrappedCols.filter(Boolean);};_proto.renderTableBody=function renderTableBody(renderRange){var ver=renderRange.vertical,hoz=renderRange.horizontal;var _this$props2=this.props,dataSource=_this$props2.dataSource,getRowProps=_this$props2.getRowProps,primaryKey=_this$props2.primaryKey,isLoading=_this$props2.isLoading,emptyCellHeight=_this$props2.emptyCellHeight;var wrappedCols=this.getFlatHozWrappedCols(hoz);var colgroup=/*#__PURE__*/react_default.a.createElement("colgroup",null,wrappedCols.map(function(wrapped){if(wrapped.type==='blank'){return/*#__PURE__*/react_default.a.createElement("col",{key:wrapped.blankSide,style:{width:wrapped.width}});}return/*#__PURE__*/react_default.a.createElement("col",{key:wrapped.colIndex,style:{width:wrapped.col.width}});}));if(ver.bottomIndex-ver.topIndex===0){var _this$props3=this.props,components=_this$props3.components,emptyContent=_this$props3.emptyContent;var EmptyContent=components.EmptyContent;if(EmptyContent==null&&emptyContent!=null){warnPropsDotEmptyContentIsDeprecated();EmptyContent=function EmptyContent(){return emptyContent;};}return/*#__PURE__*/react_default.a.createElement("div",{className:styles["b" /* Classes */].tableBody},/*#__PURE__*/react_default.a.createElement(EmptyTable,{colgroup:colgroup,colSpan:wrappedCols.length,isLoading:isLoading,EmptyContent:EmptyContent,emptyCellHeight:emptyCellHeight}));}var _this$state4=this.state,flat=_this$state4.flat,stickyLeftMap=_this$state4.stickyLeftMap,stickyRightMap=_this$state4.stickyRightMap;var fullFlatCount=flat.full.length;var leftFlatCount=flat.left.length;var rightFlatCount=flat.right.length;var spanManager=new SpanManager["a" /* default */]();var rows=dataSource.slice(ver.topIndex,ver.bottomIndex).map(renderRow);return/*#__PURE__*/react_default.a.createElement("div",{className:styles["b" /* Classes */].tableBody},/*#__PURE__*/react_default.a.createElement("div",{key:"top-blank",className:classnames_default()(styles["b" /* Classes */].virtualBlank,'top'),style:{height:ver.topBlank}}),/*#__PURE__*/react_default.a.createElement("table",null,colgroup,/*#__PURE__*/react_default.a.createElement("tbody",null,rows)),/*#__PURE__*/react_default.a.createElement("div",{key:"bottom-blank",className:classnames_default()(styles["b" /* Classes */].virtualBlank,'bottom'),style:{height:ver.bottomBlank}}));function renderRow(record,i){var rowIndex=ver.topIndex+i;spanManager.stripUpwards(rowIndex);var rowProps=getRowProps(record,rowIndex);var rowClass=classnames_default()(styles["b" /* Classes */].tableRow,{first:rowIndex===0,last:rowIndex===dataSource.length-1,even:rowIndex%2===0,odd:rowIndex%2===1},rowProps===null||rowProps===void 0?void 0:rowProps.className);return/*#__PURE__*/react_default.a.createElement("tr",Object.assign({},rowProps,{className:rowClass,key:internals["a" /* internals */].safeGetRowKey(primaryKey,record,rowIndex),"data-rowindex":rowIndex}),wrappedCols.map(function(wrapped){if(wrapped.type==='blank'){return/*#__PURE__*/react_default.a.createElement("td",{key:wrapped.blankSide});}return renderCell(record,rowIndex,wrapped.col,wrapped.colIndex);}));}function renderCell(record,rowIndex,column,colIndex){var _a,_b;if(spanManager.testSkip(rowIndex,colIndex)){return null;}var value=internals["a" /* internals */].safeGetValue(column,record,rowIndex);var cellProps=(_b=(_a=column.getCellProps)===null||_a===void 0?void 0:_a.call(column,value,record,rowIndex))!==null&&_b!==void 0?_b:{};var cellContent=value;if(column.render){cellContent=column.render(value,record,rowIndex);}var colSpan=1;var rowSpan=1;if(column.getSpanRect){var spanRect=column.getSpanRect(value,record,rowIndex);colSpan=spanRect==null?1:spanRect.right-colIndex;rowSpan=spanRect==null?1:spanRect.bottom-rowIndex;}else{if(cellProps.colSpan!=null){colSpan=cellProps.colSpan;}if(cellProps.rowSpan!=null){rowSpan=cellProps.rowSpan;}}// rowSpan/colSpan 不能过大，避免 rowSpan/colSpan 影响因虚拟滚动而未渲染的单元格
rowSpan=Math.min(rowSpan,ver.bottomIndex-rowIndex);colSpan=Math.min(colSpan,leftFlatCount+hoz.rightIndex-colIndex);var hasSpan=colSpan>1||rowSpan>1;if(hasSpan){spanManager.add(rowIndex,colIndex,colSpan,rowSpan);}var positionStyle={};if(colIndex<leftFlatCount){positionStyle.position='sticky';positionStyle.left=stickyLeftMap.get(colIndex);}else if(colIndex>=fullFlatCount-rightFlatCount){positionStyle.position='sticky';positionStyle.right=stickyRightMap.get(colIndex);}return/*#__PURE__*/react_default.a.createElement('td',Object.assign(Object.assign(Object.assign(Object.assign({key:colIndex},cellProps),{className:classnames_default()(styles["b" /* Classes */].tableCell,cellProps.className,{first:colIndex===0,last:colIndex+colSpan===fullFlatCount,'lock-left':colIndex<leftFlatCount,'lock-right':colIndex>=fullFlatCount-rightFlatCount})}),hasSpan?{colSpan:colSpan,rowSpan:rowSpan}:null),{style:Object.assign(Object.assign({textAlign:column.align},cellProps.style),positionStyle)}),cellContent);}};_proto.isLock=function isLock(){var nested=this.state.nested;return nested.left.length>0||nested.right.length>0;};_proto.render=function render(){var _this2=this;var _this$props4=this.props,dataSource=_this$props4.dataSource,className=_this$props4.className,style=_this$props4.style,hasHeader=_this$props4.hasHeader,useOuterBorder=_this$props4.useOuterBorder,isStickyHead=_this$props4.isStickyHead,isLoading=_this$props4.isLoading,components=_this$props4.components;var flat=this.state.flat;var styleWrapper=function styleWrapper(node){var _artTableWrapperProps;var artTableWrapperClassName=classnames_default()(styles["b" /* Classes */].artTableWrapper,{'use-outer-border':useOuterBorder,sticky:isStickyHead,empty:dataSource.length===0,lock:_this2.isLock(),'has-header':hasHeader},className);var artTableWrapperProps=(_artTableWrapperProps={className:artTableWrapperClassName,style:style},_artTableWrapperProps[STYLED_REF_PROP]=_this2.artTableWrapperRef,_artTableWrapperProps);return/*#__PURE__*/react_default.a.createElement(styles["d" /* StyledArtTableWrapper */],Object.assign({},artTableWrapperProps),node);};var renderRange=this.getRenderRange();return styleWrapper(/*#__PURE__*/react_default.a.createElement(loading["b" /* default */],{visible:isLoading,LoadingIcon:components.LoadingIcon,LoadingContentWrapper:components.LoadingContentWrapper},/*#__PURE__*/react_default.a.createElement("div",{className:styles["b" /* Classes */].artTable},this.renderTableHeader(renderRange),this.renderTableBody(renderRange),/*#__PURE__*/react_default.a.createElement("div",{className:styles["b" /* Classes */].lockShadowMask,style:{left:0,width:sum(flat.left.map(function(col){return col.width;}))+styles["c" /* LOCK_SHADOW_PADDING */]}},/*#__PURE__*/react_default.a.createElement("div",{className:classnames_default()(styles["b" /* Classes */].lockShadow,styles["b" /* Classes */].leftLockShadow)})),/*#__PURE__*/react_default.a.createElement("div",{className:styles["b" /* Classes */].lockShadowMask,style:{right:0,width:sum(flat.right.map(function(col){return col.width;}))+styles["c" /* LOCK_SHADOW_PADDING */]}},/*#__PURE__*/react_default.a.createElement("div",{className:classnames_default()(styles["b" /* Classes */].lockShadow,styles["b" /* Classes */].rightLockShadow)}))),/*#__PURE__*/react_default.a.createElement("div",{className:styles["b" /* Classes */].stickyScroll,style:{display:this.state.hasScroll?'block':'none',bottom:this.props.stickyBottom}},/*#__PURE__*/react_default.a.createElement("div",{className:styles["b" /* Classes */].stickyScrollItem}))));};_proto.componentDidMount=function componentDidMount(){this.updateDoms();this.data$=new BehaviorSubject["a" /* BehaviorSubject */]({props:this.props,state:this.state,prevProps:null,prevState:null});this.initSubscriptions();this.didMountOrUpdate();};_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState){this.updateDoms();this.data$.next({props:this.props,state:this.state,prevProps:prevProps,prevState:prevState});this.didMountOrUpdate(prevProps,prevState);};_proto.didMountOrUpdate=function didMountOrUpdate(prevProps,prevState){this.syncHorizontalScrollFromTableBody();this.updateStickyScroll();this.adjustNeedRenderLock();this.updateRowHeightManager(prevProps);this.resetStickyScrollIfNecessary(prevState);};_proto.resetStickyScrollIfNecessary=function resetStickyScrollIfNecessary(prevState){if(prevState!=null&&this.state.hasScroll&&!prevState.hasScroll){this.doms.stickyScroll.scrollLeft=0;}};_proto.initSubscriptions=function initSubscriptions(){var _this3=this;var _this$doms3=this.doms,tableHeader=_this$doms3.tableHeader,tableBody=_this$doms3.tableBody,stickyScroll=_this$doms3.stickyScroll;this.rootSubscription.add(throttledWindowResize$.subscribe(function(){_this3.updateStickyScroll();_this3.adjustNeedRenderLock();}));// 滚动同步
this.rootSubscription.add(syncScrollLeft([tableBody,stickyScroll,tableHeader],function(scrollLeft){_this3.syncHorizontalScroll(scrollLeft);}));// 表格所处的 flowRoot / BFC
var resolvedFlowRoot$=this.data$.pipe(map["a" /* map */](function(data){return data.props.flowRoot;}),switchMap["a" /* switchMap */](function(flowRoot){var wrapper=_this3.artTableWrapperRef.current;if(flowRoot==='auto'){var computedStyle=getComputedStyle(wrapper);return Object(of["a" /* of */])(computedStyle.overflowY!=='visible'?wrapper:window);}else if(flowRoot==='self'){return Object(of["a" /* of */])(wrapper);}else{if(typeof flowRoot==='function'){// 在一些情况下 flowRoot 需要在父组件 didMount 时才会准备好
// 故这里使用 animationFrameScheduler 等下一个动画帧
return Object(timer["a" /* timer */])(0,animationFrame["a" /* animationFrameScheduler */]).pipe(map["a" /* map */](flowRoot));}else{return Object(of["a" /* of */])(flowRoot);}}}),distinctUntilChanged["a" /* distinctUntilChanged */]());// 表格在 flowRoot 中的可见部分
var visiblePart$=resolvedFlowRoot$.pipe(switchMap["a" /* switchMap */](function(resolvedFlowRoot){return getVisiblePartObservable(_this3.doms.artTable,resolvedFlowRoot);}));// 每当可见部分发生变化的时候，调整 loading icon 的未知（如果 loading icon 存在的话）
this.rootSubscription.add(Object(combineLatest["a" /* combineLatest */])([visiblePart$.pipe(map["a" /* map */](function(p){return p.clipRect;}),distinctUntilChanged["a" /* distinctUntilChanged */](shallowEqual)),this.data$.pipe(filter["a" /* filter */](function(data){var _a;return!((_a=data.prevProps)===null||_a===void 0?void 0:_a.isLoading)&&data.props.isLoading;}))]).subscribe(function(_ref2){var clipRect=_ref2[0];var artTableWrapper=_this3.doms.artTableWrapper;var loadingIndicator=query(artTableWrapper,styles["b" /* Classes */].loadingIndicator);if(!loadingIndicator){return;}var height=clipRect.bottom-clipRect.top;loadingIndicator.style.top=height/2+"px";loadingIndicator.style.marginTop=height/2+"px";}));// 每当可见部分发生变化的时候，如果开启了虚拟滚动，则重新触发 render
this.rootSubscription.add(visiblePart$.pipe(filter["a" /* filter */](function(){var _this3$state$useVirtu=_this3.state.useVirtual,horizontal=_this3$state$useVirtu.horizontal,vertical=_this3$state$useVirtu.vertical;return horizontal||vertical;}),map["a" /* map */](function(_ref3){var clipRect=_ref3.clipRect,offsetY=_ref3.offsetY;return{maxRenderHeight:clipRect.bottom-clipRect.top,maxRenderWidth:clipRect.right-clipRect.left,offsetY:offsetY};}),distinctUntilChanged["a" /* distinctUntilChanged */](function(x,y){// 因为 overscan 的存在，滚动较小的距离时不需要触发组件重渲染
return Math.abs(x.maxRenderWidth-y.maxRenderWidth)<OVERSCAN_SIZE/2&&Math.abs(x.maxRenderHeight-y.maxRenderHeight)<OVERSCAN_SIZE/2&&Math.abs(x.offsetY-y.offsetY)<OVERSCAN_SIZE/2;})).subscribe(function(sizeAndOffset){_this3.setState(sizeAndOffset);}));};_proto.componentWillUnmount=function componentWillUnmount(){this.rootSubscription.unsubscribe();}/** 更新 DOM 节点的引用，方便其他方法直接操作 DOM */;_proto.updateDoms=function updateDoms(){var artTableWrapper=this.artTableWrapperRef.current;var artTable=query(artTableWrapper,styles["b" /* Classes */].artTable);this.doms={artTableWrapper:artTableWrapper,artTable:artTable,tableHeader:query(artTable,styles["b" /* Classes */].tableHeader),tableBody:query(artTable,styles["b" /* Classes */].tableBody),stickyScroll:query(artTableWrapper,styles["b" /* Classes */].stickyScroll),stickyScrollItem:query(artTableWrapper,styles["b" /* Classes */].stickyScrollItem)};};_proto.updateRowHeightManager=function updateRowHeightManager(prevProps){var _a;var virtualTop=this.doms.artTable.querySelector("."+styles["b" /* Classes */].virtualBlank+".top");var virtualTopHeight=(_a=virtualTop===null||virtualTop===void 0?void 0:virtualTop.clientHeight)!==null&&_a!==void 0?_a:0;var maxTrRowIndex=-1;var maxTrBottom=-1;for(var _iterator=Object(createForOfIteratorHelperLoose["a" /* default */])(queryAll(this.doms.artTable,styles["b" /* Classes */].tableRow)),_step;!(_step=_iterator()).done;){var tr=_step.value;var rowIndex=Number(tr.dataset.rowindex);if(isNaN(rowIndex)){continue;}maxTrRowIndex=Math.max(maxTrRowIndex,rowIndex);var offset=tr.offsetTop+virtualTopHeight;var size=tr.offsetHeight;maxTrBottom=Math.max(maxTrBottom,offset+size);this.rowHeightManager.updateRow(rowIndex,offset,size);}// 当 estimatedRowHeight 过大时，可能出现「渲染行数过少，无法覆盖可视范围」的情况
// 出现这种情况时，我们判断「下一次渲染能够渲染更多行」是否满足，满足的话就直接调用 forceUpdate
if(maxTrRowIndex!==-1){if(maxTrBottom<this.state.offsetY+this.state.maxRenderHeight){var vertical=this.getVerticalRenderRange();if(vertical.bottomIndex-1>maxTrRowIndex){this.forceUpdate();}}}}/** 计算表格所有列的渲染宽度之和，判断表格是否需要渲染锁列 */;_proto.adjustNeedRenderLock=function adjustNeedRenderLock(){var _this$state5=this.state,needRenderLock=_this$state5.needRenderLock,flat=_this$state5.flat;if(this.isLock()){var sumOfColWidth=sum(flat.full.map(function(col){return col.width;}));var nextNeedRenderLock=sumOfColWidth>this.doms.artTable.clientWidth;if(needRenderLock!==nextNeedRenderLock){this.setState({needRenderLock:nextNeedRenderLock});}}else{if(needRenderLock){this.setState({needRenderLock:false});}}};return BaseTable;}(react_default.a.Component);table_BaseTable.defaultProps={isStickyHead:true,stickyTop:0,stickyBottom:0,useVirtual:'auto',estimatedRowHeight:48,hasHeader:true,isLoading:false,components:{},getRowProps:noop["a" /* noop */],flowRoot:'auto'};table_BaseTable.getDerivedStateFromProps=getDerivedStateFromProps;

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collectNodes; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _isLeafNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(183);
/** 遍历所有节点，并将节点收集到一个数组中.
 * order 参数可用于指定遍历规则：
 * * `pre` 前序遍历
 * * `post` 后续遍历
 * * `leaf-only` 忽略内部节点，只收集叶子节点
 * */function collectNodes(nodes,order){var result=[];dfs(nodes);return result;function dfs(nodes){for(var _iterator=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nodes),_step;!(_step=_iterator()).done;){var node=_step.value;if(Object(_isLeafNode__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(node)){result.push(node);}else{if(order==='pre'){result.push(node);dfs(node.children);}else if(order==='post'){dfs(node.children);result.push(node);}else{dfs(node.children);}}}}}

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTreeDepth; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _isLeafNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(183);
/** 获取一棵树的高度/深度 (0-based) */function getTreeDepth(nodes){var maxDepth=-1;dfs(nodes,0);return maxDepth;function dfs(columns,depth){for(var _iterator=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(columns),_step;!(_step=_iterator()).done;){var column=_step.value;if(Object(_isLeafNode__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(column)){maxDepth=Math.max(maxDepth,depth);}else{dfs(column.children,depth+1);}}}}

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var factorySymbol=Symbol('factory-symbol');function isProtoFactory(v){return v&&v[factorySymbol];}function proto(baseRecord,ensureArray){if(ensureArray===void 0){ensureArray='auto';}var baseKeys=Object.keys(baseRecord);function process(record){var result=Object.assign({},record);baseKeys.forEach(function(key){if(result[key]===proto.empty){delete result[key];return;}var base=baseRecord[key];if(isProtoFactory(base)){result[key]=base(result[key]);}else{var _result$key;result[key]=(_result$key=result[key])!==null&&_result$key!==void 0?_result$key:base;}});return result;}function factory(arg){var isEnsureArray=ensureArray==='auto'?Array.isArray(arg):ensureArray;if(isEnsureArray){if(arg==null){return[];}return arg.map(process);}else{return process(arg);}}// @ts-ignore
factory[factorySymbol]=true;factory.extends=function(extRecord){var extFactory=proto(extRecord,ensureArray);return function(arg){return factory(extFactory(arg));};};return factory;}proto.empty=Symbol('proto.empty');proto.string=function(v){if(v!=null&&typeof v!=='string'){throw new Error('must be string');}return v;};proto.string[factorySymbol]=true;proto.number=function(v){if(v!=null&&typeof v!=='number'){throw new Error('must be number');}return v;};proto.number[factorySymbol]=true;proto.notNull=function(v){if(v==null){throw new Error('must be not null');}return v;};proto.notNull[factorySymbol]=true;proto.object=function(baseRecord){return proto(baseRecord,false);};proto.array=function(baseRecord){return proto(baseRecord,true);};/* harmony default export */ __webpack_exports__["a"] = (proto);

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stories; });
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(494);
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alifd_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162);
/* harmony import */ var _alifd_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(182);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
function FallbackStory(_ref){var exampleName=_ref.exampleName;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{marginTop:16}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p",null,"\u65E0\u6CD5\u627E\u5230\u540D\u4E3A ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b",null,exampleName)," \u7684\u793A\u4F8B"));}var base='https://github.com/alibaba/ali-react-table/blob/master/packages/website/examples/';function Stories(_ref2){var _searchParams$get,_stories$exampleName;var stories=_ref2.stories,path=_ref2.path;var location=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[/* useLocation */ "l"])();var history=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[/* useHistory */ "k"])();var allExampleNames=Object.keys(stories).filter(function(key){return key!=='default';});var searchParams=new URLSearchParams(location.search);var exampleName=(_searchParams$get=searchParams.get('example'))!==null&&_searchParams$get!==void 0?_searchParams$get:allExampleNames[0];var exampleIndex=allExampleNames.indexOf(exampleName);var StoryComp=(_stories$exampleName=stories[exampleName])!==null&&_stories$exampleName!==void 0?_stories$exampleName:FallbackStory;var gotoExample=function gotoExample(name){searchParams.set('example',name);history.replace({search:String(searchParams)});};var selectNext=function selectNext(){if(exampleIndex===-1){gotoExample(allExampleNames[0]);}else if(exampleIndex<allExampleNames.length-1){gotoExample(allExampleNames[exampleIndex+1]);}};var selectPrev=function selectPrev(){if(exampleIndex===-1){gotoExample(allExampleNames[0]);}else if(exampleIndex!==-1&&exampleIndex>0){gotoExample(allExampleNames[exampleIndex-1]);}};var renderSourceButton=function renderSourceButton(){if(path){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_alifd_next__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{onClick:function onClick(){var url=new URL(path,base);window.open(String(url),'_blank');}},"\u67E5\u770B\u6E90\u7801");}return null;};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,allExampleNames.length>1?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{marginBottom:16,display:'flex',alignItems:'center',flexWrap:'wrap'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",null,"\u9009\u62E9\u793A\u4F8B\uFF1A"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_alifd_next__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{style:{marginLeft:8,width:200},dataSource:allExampleNames,value:exampleName,onChange:gotoExample}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_alifd_next__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Group,{style:{marginLeft:8}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_alifd_next__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{onClick:selectPrev,disabled:exampleIndex===0},"\u4E0A\u4E00\u4E2A"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_alifd_next__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{onClick:selectNext,disabled:exampleIndex===allExampleNames.length-1},"\u4E0B\u4E00\u4E2A"),renderSourceButton())):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{marginBottom:path?16:0}},renderSourceButton()),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StoryComp,{exampleName:exampleName}));}

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 259,
	"./af.js": 259,
	"./ar": 260,
	"./ar-dz": 261,
	"./ar-dz.js": 261,
	"./ar-kw": 262,
	"./ar-kw.js": 262,
	"./ar-ly": 263,
	"./ar-ly.js": 263,
	"./ar-ma": 264,
	"./ar-ma.js": 264,
	"./ar-sa": 265,
	"./ar-sa.js": 265,
	"./ar-tn": 266,
	"./ar-tn.js": 266,
	"./ar.js": 260,
	"./az": 267,
	"./az.js": 267,
	"./be": 268,
	"./be.js": 268,
	"./bg": 269,
	"./bg.js": 269,
	"./bm": 270,
	"./bm.js": 270,
	"./bn": 271,
	"./bn-bd": 272,
	"./bn-bd.js": 272,
	"./bn.js": 271,
	"./bo": 273,
	"./bo.js": 273,
	"./br": 274,
	"./br.js": 274,
	"./bs": 275,
	"./bs.js": 275,
	"./ca": 276,
	"./ca.js": 276,
	"./cs": 277,
	"./cs.js": 277,
	"./cv": 278,
	"./cv.js": 278,
	"./cy": 279,
	"./cy.js": 279,
	"./da": 280,
	"./da.js": 280,
	"./de": 281,
	"./de-at": 282,
	"./de-at.js": 282,
	"./de-ch": 283,
	"./de-ch.js": 283,
	"./de.js": 281,
	"./dv": 284,
	"./dv.js": 284,
	"./el": 285,
	"./el.js": 285,
	"./en-au": 286,
	"./en-au.js": 286,
	"./en-ca": 287,
	"./en-ca.js": 287,
	"./en-gb": 288,
	"./en-gb.js": 288,
	"./en-ie": 289,
	"./en-ie.js": 289,
	"./en-il": 290,
	"./en-il.js": 290,
	"./en-in": 291,
	"./en-in.js": 291,
	"./en-nz": 292,
	"./en-nz.js": 292,
	"./en-sg": 293,
	"./en-sg.js": 293,
	"./eo": 294,
	"./eo.js": 294,
	"./es": 295,
	"./es-do": 296,
	"./es-do.js": 296,
	"./es-mx": 297,
	"./es-mx.js": 297,
	"./es-us": 298,
	"./es-us.js": 298,
	"./es.js": 295,
	"./et": 299,
	"./et.js": 299,
	"./eu": 300,
	"./eu.js": 300,
	"./fa": 301,
	"./fa.js": 301,
	"./fi": 302,
	"./fi.js": 302,
	"./fil": 303,
	"./fil.js": 303,
	"./fo": 304,
	"./fo.js": 304,
	"./fr": 305,
	"./fr-ca": 306,
	"./fr-ca.js": 306,
	"./fr-ch": 307,
	"./fr-ch.js": 307,
	"./fr.js": 305,
	"./fy": 308,
	"./fy.js": 308,
	"./ga": 309,
	"./ga.js": 309,
	"./gd": 310,
	"./gd.js": 310,
	"./gl": 311,
	"./gl.js": 311,
	"./gom-deva": 312,
	"./gom-deva.js": 312,
	"./gom-latn": 313,
	"./gom-latn.js": 313,
	"./gu": 314,
	"./gu.js": 314,
	"./he": 315,
	"./he.js": 315,
	"./hi": 316,
	"./hi.js": 316,
	"./hr": 317,
	"./hr.js": 317,
	"./hu": 318,
	"./hu.js": 318,
	"./hy-am": 319,
	"./hy-am.js": 319,
	"./id": 320,
	"./id.js": 320,
	"./is": 321,
	"./is.js": 321,
	"./it": 322,
	"./it-ch": 323,
	"./it-ch.js": 323,
	"./it.js": 322,
	"./ja": 324,
	"./ja.js": 324,
	"./jv": 325,
	"./jv.js": 325,
	"./ka": 326,
	"./ka.js": 326,
	"./kk": 327,
	"./kk.js": 327,
	"./km": 328,
	"./km.js": 328,
	"./kn": 329,
	"./kn.js": 329,
	"./ko": 330,
	"./ko.js": 330,
	"./ku": 331,
	"./ku.js": 331,
	"./ky": 332,
	"./ky.js": 332,
	"./lb": 333,
	"./lb.js": 333,
	"./lo": 334,
	"./lo.js": 334,
	"./lt": 335,
	"./lt.js": 335,
	"./lv": 336,
	"./lv.js": 336,
	"./me": 337,
	"./me.js": 337,
	"./mi": 338,
	"./mi.js": 338,
	"./mk": 339,
	"./mk.js": 339,
	"./ml": 340,
	"./ml.js": 340,
	"./mn": 341,
	"./mn.js": 341,
	"./mr": 342,
	"./mr.js": 342,
	"./ms": 343,
	"./ms-my": 344,
	"./ms-my.js": 344,
	"./ms.js": 343,
	"./mt": 345,
	"./mt.js": 345,
	"./my": 346,
	"./my.js": 346,
	"./nb": 347,
	"./nb.js": 347,
	"./ne": 348,
	"./ne.js": 348,
	"./nl": 349,
	"./nl-be": 350,
	"./nl-be.js": 350,
	"./nl.js": 349,
	"./nn": 351,
	"./nn.js": 351,
	"./oc-lnc": 352,
	"./oc-lnc.js": 352,
	"./pa-in": 353,
	"./pa-in.js": 353,
	"./pl": 354,
	"./pl.js": 354,
	"./pt": 355,
	"./pt-br": 356,
	"./pt-br.js": 356,
	"./pt.js": 355,
	"./ro": 357,
	"./ro.js": 357,
	"./ru": 358,
	"./ru.js": 358,
	"./sd": 359,
	"./sd.js": 359,
	"./se": 360,
	"./se.js": 360,
	"./si": 361,
	"./si.js": 361,
	"./sk": 362,
	"./sk.js": 362,
	"./sl": 363,
	"./sl.js": 363,
	"./sq": 364,
	"./sq.js": 364,
	"./sr": 365,
	"./sr-cyrl": 366,
	"./sr-cyrl.js": 366,
	"./sr.js": 365,
	"./ss": 367,
	"./ss.js": 367,
	"./sv": 368,
	"./sv.js": 368,
	"./sw": 369,
	"./sw.js": 369,
	"./ta": 370,
	"./ta.js": 370,
	"./te": 371,
	"./te.js": 371,
	"./tet": 372,
	"./tet.js": 372,
	"./tg": 373,
	"./tg.js": 373,
	"./th": 374,
	"./th.js": 374,
	"./tk": 375,
	"./tk.js": 375,
	"./tl-ph": 376,
	"./tl-ph.js": 376,
	"./tlh": 377,
	"./tlh.js": 377,
	"./tr": 378,
	"./tr.js": 378,
	"./tzl": 379,
	"./tzl.js": 379,
	"./tzm": 380,
	"./tzm-latn": 381,
	"./tzm-latn.js": 381,
	"./tzm.js": 380,
	"./ug-cn": 382,
	"./ug-cn.js": 382,
	"./uk": 383,
	"./uk.js": 383,
	"./ur": 384,
	"./ur.js": 384,
	"./uz": 385,
	"./uz-latn": 386,
	"./uz-latn.js": 386,
	"./uz.js": 385,
	"./vi": 387,
	"./vi.js": 387,
	"./x-pseudo": 388,
	"./x-pseudo.js": 388,
	"./yo": 389,
	"./yo.js": 389,
	"./zh-cn": 390,
	"./zh-cn.js": 390,
	"./zh-hk": 391,
	"./zh-hk.js": 391,
	"./zh-mo": 392,
	"./zh-mo.js": 392,
	"./zh-tw": 393,
	"./zh-tw.js": 393
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 510;

/***/ })

}]);