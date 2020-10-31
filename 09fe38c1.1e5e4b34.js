(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return internals; });
function safeRenderHeader(column){var _column$title;return(_column$title=column.title)!==null&&_column$title!==void 0?_column$title:column.name;}function safeGetValue(column,record,rowIndex){if(column.getValue){return column.getValue(record,rowIndex);}return record[column.code];}function safeGetRowKey(primaryKey,record,rowIndex){var key;if(typeof primaryKey==='string'){key=record[primaryKey];}else if(typeof primaryKey==='function'){key=primaryKey(record);}if(key==null){key=String(rowIndex);}return key;}function safeGetCellProps(column,record,rowIndex){if(column.getCellProps){var value=safeGetValue(column,record,rowIndex);return column.getCellProps(value,record,rowIndex)||{};}return{};}function safeRender(column,record,rowIndex){var value=safeGetValue(column,record,rowIndex);if(column.render){return column.render(value,record,rowIndex);}return value;}var internals={safeRenderHeader:safeRenderHeader,safeGetValue:safeGetValue,safeGetRowKey:safeGetRowKey,safeGetCellProps:safeGetCellProps,safeRender:safeRender};

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCK_SHADOW_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StyledArtTableWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLeafNode; });
function isLeafNode(node){return node.children==null||node.children.length===0;}

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InlineFlexCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return icons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(172);
const InlineFlexCell=styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"].div`
  display: inline-flex;
  align-items: center;
`;const ExpansionCell=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"])(InlineFlexCell)`
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
`;function CaretDownIcon(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M24 12L16 22 8 12z"}));}function InfoIcon(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 16 16"},props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"}));}function CaretRightIcon(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",Object.assign({focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32"},props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M12 8L22 16 12 24z"}));}function LoadingIcon(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",Object.assign({width:"16",height:"16",fill:"currentColor",viewBox:"0 0 1024 1024"},props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M512 74.667c-17.067 0-32 14.933-32 32V256c0 17.067 14.933 32 32 32s32-14.933 32-32V106.667c0-17.067-14.933-32-32-32zm181.333 288c8.534 0 17.067-2.134 23.467-8.534L821.333 249.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L672 309.333c-12.8 12.8-12.8 32 0 44.8 4.267 6.4 12.8 8.534 21.333 8.534zm224 117.333H768c-17.067 0-32 14.933-32 32s14.933 32 32 32h149.333c17.067 0 32-14.933 32-32s-14.933-32-32-32zM714.667 669.867c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8L774.4 819.2c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L714.667 669.867zM512 736c-17.067 0-32 14.933-32 32v149.333c0 17.067 14.933 32 32 32s32-14.933 32-32V768c0-17.067-14.933-32-32-32zm-202.667-66.133L204.8 774.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l104.534-104.533c12.8-12.8 12.8-32 0-44.8s-36.267-12.8-46.934 0zM288 512c0-17.067-14.933-32-32-32H106.667c-17.067 0-32 14.933-32 32s14.933 32 32 32H256c17.067 0 32-14.933 32-32zm-40.533-309.333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L307.2 352c6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533c12.8-12.8 12.8-32 0-44.8L247.467 202.667z"}));}const icons={Loading:LoadingIcon,CaretDown:CaretDownIcon,CaretRight:CaretRightIcon,Info:InfoIcon};

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(183);
var DefaultLoadingIcon=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{style:{margin:'auto',display:'block',width:40,height:40},viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"#23a7fa",strokeDasharray:"188 64",strokeLinecap:"round",strokeWidth:"10"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})));});function DefaultLoadingContentWrapper(_ref){var children=_ref.children,visible=_ref.visible;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"art-loading-content-wrapper",style:{filter:visible?'blur(1px)':'none'}},children);}function Loading(_ref2){var visible=_ref2.visible,children=_ref2.children,_ref2$LoadingContentW=_ref2.LoadingContentWrapper,LoadingContentWrapper=_ref2$LoadingContentW===void 0?DefaultLoadingContentWrapper:_ref2$LoadingContentW,_ref2$LoadingIcon=_ref2.LoadingIcon,LoadingIcon=_ref2$LoadingIcon===void 0?DefaultLoadingIcon:_ref2$LoadingIcon;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles__WEBPACK_IMPORTED_MODULE_1__[/* Classes */ "b"].loadingWrapper},visible&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles__WEBPACK_IMPORTED_MODULE_1__[/* Classes */ "b"].loadingIndicatorWrapper},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles__WEBPACK_IMPORTED_MODULE_1__[/* Classes */ "b"].loadingIndicator},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingIcon,null))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingContentWrapper,{visible:visible,children:children}));}

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpanManager; });
/** 在表格的单元格的渲染过程中，先渲染的单元格的 colSpan/rowSpan 会影响到后续单元格是否被渲染
 * `SpanManager` 会在内部维护一份状态来记录最近渲染单元格的 colSpan/rowSpan，
 * 方便后续的单元格快速判断 "是否需要跳过渲染" */var SpanManager=/*#__PURE__*/function(){function SpanManager(){this.rects=[];}var _proto=SpanManager.prototype;_proto.testSkip=function testSkip(rowIndex,colIndex){return this.rects.some(function(_ref){var left=_ref.left,right=_ref.right,top=_ref.top,bottom=_ref.bottom;return left<=colIndex&&colIndex<right&&top<=rowIndex&&rowIndex<bottom;});};_proto.stripUpwards=function stripUpwards(rowIndex){this.rects=this.rects.filter(function(rect){return rect.bottom>rowIndex;});};_proto.add=function add(rowIndex,colIndex,colSpan,rowSpan){this.rects.push({left:colIndex,right:colIndex+colSpan,top:rowIndex,bottom:rowIndex+rowSpan});};return SpanManager;}();

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ table_BaseTable; });

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelperLoose.js
var createForOfIteratorHelperLoose = __webpack_require__(215);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(3);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/classnames/index.js
var classnames = __webpack_require__(127);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(818);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/BehaviorSubject.js + 3 modules
var BehaviorSubject = __webpack_require__(1073);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/of.js
var of = __webpack_require__(1067);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/timer.js + 1 modules
var timer = __webpack_require__(1078);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js + 2 modules
var animationFrame = __webpack_require__(1075);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/combineLatest.js + 3 modules
var combineLatest = __webpack_require__(1074);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/util/noop.js
var noop = __webpack_require__(1070);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/map.js
var map = __webpack_require__(899);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/switchMap.js
var switchMap = __webpack_require__(1066);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__(1068);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/filter.js
var filter = __webpack_require__(1069);

// EXTERNAL MODULE: ../ali-react-table/src/internals.ts
var internals = __webpack_require__(177);

// EXTERNAL MODULE: ../ali-react-table/src/base-table/styles.ts
var styles = __webpack_require__(183);

// CONCATENATED MODULE: ../ali-react-table/src/base-table/empty.tsx
var DefaultEmptyContent=/*#__PURE__*/react_default.a.memo(function(){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("img",{alt:"empty-image",className:"empty-image",src:"//img.alicdn.com/tfs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg"}),/*#__PURE__*/react_default.a.createElement("div",{className:"empty-tips"},"\u6CA1\u6709\u7B26\u5408\u67E5\u8BE2\u6761\u4EF6\u7684\u6570\u636E",/*#__PURE__*/react_default.a.createElement("br",null),"\u8BF7\u4FEE\u6539\u6761\u4EF6\u540E\u91CD\u65B0\u67E5\u8BE2"));});function EmptyTable(_ref){var colgroup=_ref.colgroup,colSpan=_ref.colSpan,isLoading=_ref.isLoading,emptyCellHeight=_ref.emptyCellHeight,_ref$EmptyContent=_ref.EmptyContent,EmptyContent=_ref$EmptyContent===void 0?DefaultEmptyContent:_ref$EmptyContent;var show=!isLoading;return/*#__PURE__*/react_default.a.createElement("table",null,colgroup,/*#__PURE__*/react_default.a.createElement("tbody",null,/*#__PURE__*/react_default.a.createElement("tr",{className:classnames_default()(styles["b" /* Classes */].tableRow,'first','last','no-hover'),"data-rowindex":0},/*#__PURE__*/react_default.a.createElement("td",{className:classnames_default()(styles["b" /* Classes */].tableCell,'first','last'),colSpan:colSpan,style:{height:emptyCellHeight!==null&&emptyCellHeight!==void 0?emptyCellHeight:200}},show&&/*#__PURE__*/react_default.a.createElement("div",{className:styles["b" /* Classes */].emptyWrapper},/*#__PURE__*/react_default.a.createElement(EmptyContent,null))))));}
// EXTERNAL MODULE: ../ali-react-table/src/utils/isLeafNode.ts
var isLeafNode = __webpack_require__(186);

// EXTERNAL MODULE: ../ali-react-table/src/utils/collectNodes.ts
var collectNodes = __webpack_require__(423);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/defer.js + 1 modules
var defer = __webpack_require__(1077);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/fromEvent.js
var fromEvent = __webpack_require__(1065);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/scheduler/async.js
var scheduler_async = __webpack_require__(933);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/operators/throttleTime.js + 1 modules
var throttleTime = __webpack_require__(1079);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(172);

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
var esm_createForOfIteratorHelperLoose = __webpack_require__(210);

// EXTERNAL MODULE: ../ali-react-table/src/utils/getTreeDepth.ts
var getTreeDepth = __webpack_require__(424);

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
var SpanManager = __webpack_require__(254);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(224);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/Observable.js + 3 modules
var Observable = __webpack_require__(520);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/rxjs/_esm5/internal/observable/merge.js + 2 modules
var merge = __webpack_require__(1076);

// CONCATENATED MODULE: ../ali-react-table/src/base-table/helpers/visible-part.ts
function getRect(ele){if(ele===window){return{left:0,top:0,bottom:window.innerHeight,right:window.innerWidth};}else{return ele.getBoundingClientRect();}}function getVisiblePart(target,flowRoot){var targetRect=getRect(target);var rootRect=getRect(flowRoot);return{offsetY:Math.max(0,rootRect.top-targetRect.top),offsetX:Math.max(0,rootRect.left-targetRect.left),clipRect:{left:Math.max(targetRect.left,rootRect.left),top:Math.max(targetRect.top,rootRect.top),right:Math.min(targetRect.right,rootRect.right),bottom:Math.min(targetRect.bottom,rootRect.bottom)}};}function fromResizeEvent(element){if(element===window){return Object(fromEvent["a" /* fromEvent */])(element,'resize');}return new Observable["a" /* Observable */](function(subscriber){var resizeObserver=new ResizeObserver_es["default"](function(){subscriber.next();});resizeObserver.observe(element);return function(){resizeObserver.disconnect();};});}/** 基于 ResizeObserver 和 scroll event 封装的 RxJS observable；
 * 用于监听一个元素的在页面中的「可见范围」的不断变化 */function getVisiblePartObservable(target,flowRoot){return Object(merge["a" /* merge */])(Object(fromEvent["a" /* fromEvent */])(flowRoot,'scroll'),fromResizeEvent(flowRoot),fromResizeEvent(target)).pipe(map["a" /* map */](function(){return getVisiblePart(target,flowRoot);}));}
// EXTERNAL MODULE: ../ali-react-table/src/base-table/loading.tsx
var loading = __webpack_require__(238);

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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AntdBaseTable; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(285);
/* harmony import */ var ali_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(258);
/* harmony import */ var ali_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(183);
/* harmony import */ var ali_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(424);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(234);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(127);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(172);
function _templateObject(){var data=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(["\n  --highlight-bgcolor: #fafafa;\n  --header-highlight-bgcolor: #f5f5f5;\n\n  --lock-shadow: rgba(0, 0, 0, 0.2) 0 0 10px 0px;\n  --row-height: 32px;\n  --header-row-height: 36px;\n  --cell-padding: 16px;\n  --color: rgba(0, 0, 0, 0.85);\n  --header-color: rgba(0, 0, 0, 0.85);\n  --header-bgcolor: #fafafa;\n  --hover-bgcolor: #fafafa;\n  --header-hover-bgcolor: #f5f5f5;\n  --line-height: 1.5715;\n  --font-size: 14px;\n  --border-color: #f0f0f0;\n\n  td {\n    transition: background 0.3s;\n  }\n\n  ."," {\n    ."," {\n      transition: box-shadow 0.3s;\n    }\n  }\n\n  &:not(.bordered) {\n    --cell-border-vertical: none;\n    --header-cell-border-vertical: none;\n\n    thead > tr.first th {\n      border-top: none;\n    }\n  }\n\n  th {\n    font-weight: 500;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var StyledBaseTable=Object(styled_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"])(ali_react_table__WEBPACK_IMPORTED_MODULE_2__[/* BaseTable */ "a"])(_templateObject(),ali_react_table__WEBPACK_IMPORTED_MODULE_3__[/* Classes */ "b"].lockShadowMask,ali_react_table__WEBPACK_IMPORTED_MODULE_3__[/* Classes */ "b"].lockShadow);var AntEmptyContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.memo(function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"41",className:"ant-empty-img-simple",viewBox:"0 0 64 41"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(0 1)"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ellipse",{cx:"32",cy:"33",className:"ant-empty-img-simple-ellipse",rx:"32",ry:"7"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g",{fillRule:"nonzero",className:"ant-empty-img-simple-g"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",className:"ant-empty-img-simple-path"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"empty-tips",style:{marginTop:8,color:'rgba(0,0,0,.25)',fontSize:14}},"\u6682\u65E0\u6570\u636E"));});var AntLoadingContentWrapper=/*#__PURE__*/function(_React$Component){Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(AntLoadingContentWrapper,_React$Component);function AntLoadingContentWrapper(){return _React$Component.apply(this,arguments)||this;}var _proto=AntLoadingContentWrapper.prototype;_proto.render=function render(){var _this$props=this.props,children=_this$props.children,visible=_this$props.visible;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"ant-loading-content-wrapper",style:{opacity:visible?0.6:undefined}},children);};return AntLoadingContentWrapper;}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);function BlockSpin(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],{style:{display:'block'}});}/** Ant Design 基础表格组件
 *
 * AntdBaseTable 在 ali-react-table 提供的 BaseTable 基础上定制了默认的表格样式。  */var AntdBaseTable=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.forwardRef(function(props,ref){var headerDepth=Object(ali_react_table__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(props.columns);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledBaseTable,Object.assign({ref:ref},props,{className:classnames__WEBPACK_IMPORTED_MODULE_6___default()(props.className,{// 根据表头的深度设置 className，可以用于调整表头单元格的高度
'header-depth-0':headerDepth===0,'header-depth-1':headerDepth===1}),components:Object.assign({EmptyContent:AntEmptyContent,LoadingContentWrapper:AntLoadingContentWrapper,LoadingIcon:BlockSpin},props.components)}));});

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HippoBaseTable; });
/* harmony import */ var ali_react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
/* harmony import */ var ali_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(424);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(172);
/* harmony import */ var ali_react_table_src_common_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(204);
const loadingIconRotate=styled_components__WEBPACK_IMPORTED_MODULE_4__[/* keyframes */ "c"]`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;const StyledBaseTable=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"])(ali_react_table__WEBPACK_IMPORTED_MODULE_0__[/* BaseTable */ "a"])`
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
`;const HippoEmptyContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img",{alt:"hippo-table-empty",width:"160",height:"160",src:"https://img.alicdn.com/tfs/TB1s7zrWeL2gK0jSZFmXXc7iXXa-240-240.svg"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"empty-tips",style:{marginTop:-24}},"\u6CA1\u6709\u7B26\u5408\u67E5\u8BE2\u6761\u4EF6\u7684\u6570\u636E",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br",null),"\u8BF7\u4FEE\u6539\u6761\u4EF6\u540E\u91CD\u65B0\u67E5\u8BE2")));// 加载过程 持续一秒钟之后 再展示 加载按钮
const LOADING_SHOW_DELAY=1000;class HippoLoadingContentWrapper extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component{constructor(){super(...arguments);Object.defineProperty(this,"handle",{enumerable:true,configurable:true,writable:true,value:void 0});Object.defineProperty(this,"state",{enumerable:true,configurable:true,writable:true,value:{warming:false,prevVisible:false}});}static getDerivedStateFromProps(props,state){if(!state.prevVisible&&props.visible){return{warming:true,prevVisible:true};}if(!props.visible){return{warming:false,prevVisible:false};}return null;}componentDidUpdate(prevProps){if(!prevProps.visible&&this.props.visible){this.handle=setTimeout(()=>{this.setState({warming:false});},LOADING_SHOW_DELAY);}else if(!this.props.visible){clearTimeout(this.handle);}}componentWillUnmount(){clearTimeout(this.handle);}render(){const{visible,children}=this.props;const{warming}=this.state;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"hippo-loading-content-wrapper",style:{filter:visible?warming?'blur(0.5px)':'blur(1px)':'none',transition:'filter 300ms cubic-bezier(0, 0.4, 0.6, 1)'}},children);}}const StyledSvgIcon=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"])(ali_react_table_src_common_views__WEBPACK_IMPORTED_MODULE_5__[/* icons */ "c"].Loading)`
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
  animation: 1.5s linear 0s infinite ${loadingIconRotate};
  opacity: 1;
  transition: opacity 300ms;
`;const HippoLoadingIcon=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(()=>{const[show,setShow]=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(()=>{const handle=setTimeout(()=>{setShow(true);},LOADING_SHOW_DELAY);return()=>clearTimeout(handle);},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledSvgIcon,{type:"loading",className:"hippo-table-loading",style:{opacity:show?1:0}});});/** Hippo Design 基础表格组件
 *
 * HippoBaseTable 在 ali-react-table 提供的 BaseTable 基础上定制了默认的表格样式。  */const HippoBaseTable=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function(props,ref){const headerDepth=Object(ali_react_table__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props.columns);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledBaseTable,Object.assign({ref:ref},props,{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className,{'header-depth-0':headerDepth===0,'header-depth-1':headerDepth===1}),components:{EmptyContent:HippoEmptyContent,LoadingContentWrapper:HippoLoadingContentWrapper,LoadingIcon:HippoLoadingIcon,...props.components}}));});

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collectNodes; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _isLeafNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/** 遍历所有节点，并将节点收集到一个数组中.
 * order 参数可用于指定遍历规则：
 * * `pre` 前序遍历
 * * `post` 后续遍历
 * * `leaf-only` 忽略内部节点，只收集叶子节点
 * */function collectNodes(nodes,order){var result=[];dfs(nodes);return result;function dfs(nodes){for(var _iterator=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(nodes),_step;!(_step=_iterator()).done;){var node=_step.value;if(Object(_isLeafNode__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(node)){result.push(node);}else{if(order==='pre'){result.push(node);dfs(node.children);}else if(order==='post'){dfs(node.children);result.push(node);}else{dfs(node.children);}}}}}

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTreeDepth; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _isLeafNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/** 获取一棵树的高度/深度 (0-based) */function getTreeDepth(nodes){var maxDepth=-1;dfs(nodes,0);return maxDepth;function dfs(columns,depth){for(var _iterator=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(columns),_step;!(_step=_iterator()).done;){var column=_step.value;if(Object(_isLeafNode__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(column)){maxDepth=Math.max(maxDepth,depth);}else{dfs(column.children,depth+1);}}}}

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataSource", function() { return dataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(180);
/* harmony import */ var ali_react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(258);
/* harmony import */ var assets_AntdBaseTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(266);
/* harmony import */ var assets_HippoBaseTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(267);
var frontMatter={id:'theme',title:'表格主题切换'};var metadata={"unversionedId":"theme","id":"theme","isDocsHomePage":false,"title":"表格主题切换","description":"export const dataSource = [","source":"@site/examples/theme.mdx","slug":"/theme","permalink":"/examples/theme","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/examples/theme.mdx","version":"current","sidebar":"sidebar","previous":{"title":"大数据量测试","permalink":"/examples/big-data"},"next":{"title":"典型数据报表","permalink":"/examples/biz/data-report"}};/* @jsx mdx */var rightToc=[{value:'默认表格主题',id:'默认表格主题',children:[]},{value:'Ant Design',id:'ant-design',children:[]},{value:'Hippo Design',id:'hippo-design',children:[]}];var dataSource=[{prov:'湖北省',confirmed:54406,cured:4793,dead:1457,t:'2020-02-15 19:52:02'},{prov:'广东省',confirmed:1294,cured:409,dead:2,t:'2020-02-15 19:52:02'},{prov:'河南省',confirmed:1212,cured:390,dead:13,t:'2020-02-15 19:52:02'},{prov:'浙江省',confirmed:1162,cured:428,dead:0,t:'2020-02-15 19:52:02'},{prov:'湖南省',confirmed:1001,cured:417,dead:2,t:'2020-02-15 19:52:02'}];var columns=[{code:'prov',name:'省份',width:150},{code:'confirmed',name:'确诊',width:100,align:'right'},{code:'cured',name:'治愈',width:100,align:'right'},{code:'dead',name:'死亡',width:100,align:'right'},{code:'t',name:'最后更新时间',width:180}];var layoutProps={rightToc:rightToc,dataSource:dataSource,columns:columns};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"(todo \u9700\u8981\u4E00\u4E9B\u66F4\u52A0\u590D\u6742\u7684\u793A\u4F8B)"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",{"className":"admonition admonition-note alert alert--secondary"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-heading"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h5",{parentName:"div"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("span",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"h5"},{"className":"admonition-icon"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("svg",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"span"},{"xmlns":"http://www.w3.org/2000/svg","width":"14","height":"16","viewBox":"0 0 14 16"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("path",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"svg"},{"fillRule":"evenodd","d":"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-content"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",{parentName:"div"},"\u76EE\u524D\u6587\u6863\u7F51\u7AD9\u4E2D\u7684\u4E3B\u9898\u5207\u6362\u8FD8\u4E0D\u652F\u6301\u6697\u8272\u6A21\u5F0F"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"默认表格主题"},"\u9ED8\u8BA4\u8868\u683C\u4E3B\u9898"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(ali_react_table__WEBPACK_IMPORTED_MODULE_4__[/* BaseTable */ "a"],{dataSource:dataSource,columns:columns,mdxType:"BaseTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"ant-design"},"Ant Design"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(assets_AntdBaseTable__WEBPACK_IMPORTED_MODULE_5__[/* AntdBaseTable */ "a"],{dataSource:dataSource,columns:columns,mdxType:"AntdBaseTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"hippo-design"},"Hippo Design"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(assets_HippoBaseTable__WEBPACK_IMPORTED_MODULE_6__[/* HippoBaseTable */ "a"],{dataSource:dataSource,columns:columns,mdxType:"HippoBaseTable"}));};MDXContent.isMDXComponent=true;

/***/ })

}]);