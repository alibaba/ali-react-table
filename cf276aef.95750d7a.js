(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightToc", function() { return rightToc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(180);
var frontMatter={id:'tree-mode',title:'树状模式'};var metadata={"unversionedId":"pipeline/features/tree-mode","id":"pipeline/features/tree-mode","isDocsHomePage":false,"title":"树状模式","description":"让表格支持树形数据的展示，当数据中有 children 字段时会自动展示为树形表格。可以通过设置 indentSize 以控制每一层的缩进宽度。","source":"@site/docs/pipeline/features/tree-mode.mdx","slug":"/pipeline/features/tree-mode","permalink":"/docs/pipeline/features/tree-mode","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/tree-mode.mdx","version":"current","sidebar":"sidebar","previous":{"title":"排序","permalink":"/docs/pipeline/features/sort"},"next":{"title":"树形选择","permalink":"/docs/pipeline/features/tree-select"}};/* @jsx mdx */var rightToc=[{value:'示例',id:'示例',children:[]},{value:'用法',id:'用法',children:[]},{value:'<code>features.buildTree</code>',id:'featuresbuildtree',children:[]},{value:'异步数据加载',id:'异步数据加载',children:[]},{value:'对上次展开位置进行标记',id:'对上次展开位置进行标记',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8BA9\u8868\u683C\u652F\u6301\u6811\u5F62\u6570\u636E\u7684\u5C55\u793A\uFF0C\u5F53\u6570\u636E\u4E2D\u6709 children \u5B57\u6BB5\u65F6\u4F1A\u81EA\u52A8\u5C55\u793A\u4E3A\u6811\u5F62\u8868\u683C\u3002\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E indentSize \u4EE5\u63A7\u5236\u6BCF\u4E00\u5C42\u7684\u7F29\u8FDB\u5BBD\u5EA6\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"示例"},"\u793A\u4F8B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u6811\u5F62\u8868\u683C() {\n  const { dataSource4, columns4 } = assets.biz\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource: dataSource4, columns: columns4 })\n    .primaryKey('id')\n    .use(\n      features.treeMode({\n        defaultOpenKeys: ['4', '4-2'],\n        clickArea: 'cell',\n      }),\n    )\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"用法"},"\u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u542F\u7528\u884C\u591A\u9009\u529F\u80FD\u4E4B\u524D\uFF0Cpipeline \u5FC5\u987B\u5DF2\u7ECF\u8BBE\u7F6E\u4E86 primaryKey\u3002")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"pipeline.use(features.treeMode(options))\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"options \u7ED3\u6784\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"export interface TreeModeFeatureOptions {\n  /** \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u9ED8\u8BA4\u5C55\u5F00\u7684 keys */\n  defaultOpenKeys?: string[]\n\n  /** \u53D7\u63A7\u7528\u6CD5\uFF1A\u5F53\u524D\u5C55\u5F00\u7684 keys */\n  openKeys?: string[]\n\n  /** \u53D7\u63A7\u7528\u6CD5\uFF1A\u5C55\u5F00 keys \u6539\u53D8\u7684\u56DE\u8C03 */\n  onChangeOpenKeys?(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void\n\n  /** \u81EA\u5B9A\u4E49\u53F6\u5B50\u8282\u70B9\u7684\u5224\u5B9A\u903B\u8F91 */\n  isLeafNode?(node: any, nodeMeta: { depth: number; expanded: boolean; rowKey: string }): boolean\n\n  /** icon \u7684\u7F29\u8FDB\u503C\u3002\u4E00\u822C\u4E3A\u8D1F\u6570\uFF0C\u6B64\u65F6 icon \u5C06\u5411\u5DE6\u504F\u79FB\uFF0C\u9ED8\u8BA4\u4ECE pipeline.ctx.indents \u4E2D\u83B7\u53D6 */\n  iconIndent?: number\n\n  /** icon \u4E0E\u53F3\u4FA7\u6587\u672C\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u4ECE pipeline.ctx.indents \u4E2D\u83B7\u53D6 */\n  iconGap?: number\n\n  /** \u6BCF\u4E00\u7EA7\u7F29\u8FDB\u4EA7\u751F\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u4ECE pipeline.ctx.indents \u4E2D\u83B7\u53D6 */\n  indentSize?: number\n\n  /** \u70B9\u51FB\u4E8B\u4EF6\u7684\u54CD\u5E94\u533A\u57DF\uFF0C\u9ED8\u8BA4\u4E3A cell */\n  clickArea?: 'cell' | 'content' | 'icon'\n\n  /** \u662F\u5426\u5BF9\u89E6\u53D1\u5C55\u5F00/\u6536\u62E2\u7684 click \u4E8B\u4EF6\u8C03\u7528 event.stopPropagation() */\n  stopClickEventPropagation?: boolean\n\n  /** \u6307\u5B9A\u8868\u683C\u6BCF\u4E00\u884C\u5143\u4FE1\u606F\u7684\u8BB0\u5F55\u5B57\u6BB5 */\n  treeMetaKey?: string | symbol\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"featuresbuildtree"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"features.buildTree")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u7528\u6CD5\uFF1A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.use(features.buildTree(idProp, parentIdProp))")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6839\u636E\u6570\u636E\u4E2D\u7684 idProp/parentIdProp\uFF0C\u5C06 \u5E73\u94FA\u7684\u6570\u636E \u8F6C\u6362\u4E3A\u6811\u72B6\u7ED3\u6784\u3002\u6811\u72B6\u7ED3\u6784\u4E0B\uFF0C\u7236\u8282\u70B9\u4E2D\u7684 children \u5B57\u6BB5\u4F1A\u5305\u542B\u5176\u5B50\u8282\u70B9\u7684\u5217\u8868\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"ali-react-table \u8FD8\u5BFC\u51FA\u4E86\u4E00\u4E2A\u9759\u6001\u7684 buildTree \u51FD\u6570\uFF0C\u5982\u679C\u4F60\u53EA\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u53EF\u4EE5\u4F7F\u7528\u9759\u6001\u7684 buildTree \u51FD\u6570\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5982\u679C\u4F60\u5DF2\u7ECF\u6709\u4E86\u6811\u72B6\u7ED3\u6784\u7684\u6570\u636E\uFF0C\u90A3\u5C31\u53EF\u4EE5\u8DF3\u8FC7 features.buildTree\uFF0C\u76F4\u63A5\u4F7F\u7528 treeMode \u5373\u53EF\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"异步数据加载"},"\u5F02\u6B65\u6570\u636E\u52A0\u8F7D"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5F02\u6B65\u6570\u636E\u52A0\u8F7D\u573A\u666F\u4E0B\uFF0C\u56E0\u4E3A\u524D\u7AEF\u53EA\u4FDD\u5B58\u4E86\u6574\u68F5\u6811\u4E2D\u7684\u5176\u4E2D\u4E00\u90E8\u5206\u6570\u636E\uFF0C\u6211\u4EEC\u9700\u8981\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"isLeafNode")," \u8986\u76D6\u9ED8\u8BA4\u7684\u5224\u65AD\u65B9\u5F0F\uFF0C\u544A\u8BC9\u8868\u683C\u54EA\u4E9B\u8282\u70B9\u662F\u7236\u8282\u70B9\uFF08\u53EF\u88AB\u5C55\u5F00\uFF09\uFF0C\u54EA\u4E9B\u8282\u70B9\u662F\u5B50\u8282\u70B9\uFF08\u4E0D\u53EF\u88AB\u5C55\u5F00\uFF09\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"onChangeOpenKeys")," \u4E2D\u6839\u636E\u5C55\u5F00\u7684\u8282\u70B9\u5224\u65AD\u662F\u5426\u9700\u8981\u52A0\u8F7D\u66F4\u591A\u6570\u636E\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u6811\u72B6\u6A21\u5F0F\u4E0B\u5F02\u6B65\u6570\u636E\u52A0\u8F7D\u529F\u80FD\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u5F02\u6B65\u6811\u72B6\u8868\u683C() {\n  const { amount, lfl, ratio } = assets.format\n\n  const [state, setState] = useState({ isLoading: true, data: [] })\n\n  const dataServiceRef = useRef()\n\n  useEffect(() => {\n    dataServiceRef.current = new assets.MockTreeDataService()\n\n    dataServiceRef.current.loadRootNodeData().then((rootNodeData) => {\n      setState({ data: [rootNodeData], isLoading: false })\n    })\n  }, [])\n\n  function loadNodeDataByParentKey(parentKey) {\n    setState((prev) => ({ isLoading: true, data: prev.data }))\n    dataServiceRef.current.loadNodeDataByParentKey(parentKey).then((newData) => {\n      setState((prev) => {\n        return {\n          isLoading: false,\n          data: prev.data.concat(newData),\n        }\n      })\n    })\n  }\n\n  const [openKeys, onChangeOpenKeys] = useState([])\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({\n      dataSource: state.data,\n      columns: [\n        { name: '\u540D\u79F0', code: 'name', width: 180, lock: true },\n        { code: 'a', name: '\u76EE\u6807\u6536\u5165', render: amount, align: 'right' },\n        { code: 'b', name: '\u5B9E\u9645\u6536\u5165', render: amount, align: 'right' },\n        { code: 'd', name: '\u91CD\u70B9\u5546\u54C1\u6536\u5165', render: amount, align: 'right' },\n        { code: 'lfl', name: '\u6536\u5165\u6708\u73AF\u6BD4', render: lfl, align: 'right' },\n        { code: 'rate', name: '\u91CD\u70B9\u5546\u54C1\u6536\u5165\u5360\u6BD4', render: ratio, align: 'right' },\n      ],\n    })\n    .primaryKey('key')\n    .mapColumns(([firstCol, ...rest]) => [\n      firstCol,\n      // \u91CD\u590D\u51E0\u6B21 columns\uFF0C\u770B\u8D77\u6765\u66F4\u52A0\u4E30\u6EE1\n      ...rest,\n      ...rest,\n      ...rest,\n      ...rest,\n    ])\n    .use(features.buildTree('key', 'parentKey'))\n    .use(\n      features.treeMode({\n        openKeys,\n\n        onChangeOpenKeys(nextKeys, key, action) {\n          if (state.isLoading) {\n            return\n          }\n          onChangeOpenKeys(nextKeys)\n\n          const needLoadData = state.data.every((d) => d.parentKey !== key)\n          if (action === 'expand' && needLoadData) {\n            // \u5982\u679C\u5F53\u524D\u5C55\u5F00\u4E86\u67D0\u4E00\u4E2A\u8282\u70B9\uFF0C\u4E14\u8BE5\u8282\u70B9\u7684\u5B50\u8282\u70B9\u6570\u636E\u5C1A\u672A\u52A0\u8F7D\uFF0C\n            //  \u5219\u8C03\u7528 loadNodeDataByParentKey \u52A0\u8F7D\u66F4\u591A\u6570\u636E\n            loadNodeDataByParentKey(key)\n          }\n        },\n\n        // \u63D0\u4F9B\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 isLeafNode \u65B9\u6CD5\uFF0C\u4F7F\u5F97\u8868\u683C\u4E3A\u7236\u8282\u70B9\u6B63\u786E\u6E32\u67D3\u6536\u62E2/\u5C55\u5F00\u6309\u94AE\n        isLeafNode(node) {\n          return node.childCount === 0\n        },\n      }),\n    )\n\n  return <BaseTable defaultColumnWidth={120} isLoading={state.isLoading} {...pipeline.getProps()} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"对上次展开位置进行标记"},"\u5BF9\u4E0A\u6B21\u5C55\u5F00\u4F4D\u7F6E\u8FDB\u884C\u6807\u8BB0"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728 onChangeOpenKeys \u8BB0\u5F55\u4E0A\u4E00\u6B21\u7528\u6237\u5C55\u5F00\u7684\u8282\u70B9\u7684 key\uFF0C\u5E76\u4F7F\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.appendRowPropsGetter")," \u4E3A\u76F8\u5E94\u7684\u884C\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"className=\"last-open\""),"\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7 CSS \u6765\u65B9\u4FBF\u7684\u63A7\u5236\u300C\u4E0A\u6B21\u5C55\u5F00\u7684\u4F4D\u7F6E\u300D\u7684\u6837\u5F0F\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u6811\u72B6\u8868\u683C\u4E2D\u7684\u6700\u8FD1\u5C55\u5F00\u6807\u8BB0() {\n  const { ratio } = assets.format\n\n  const columns = [\n    { code: 'name', name: '\u6570\u636E\u7EF4\u5EA6', width: 200 },\n    { code: 'shop_name', name: '\u95E8\u5E97' },\n    { code: 'imp_uv_dau_pct', name: '\u66DD\u5149UV\u5360DAU\u6BD4\u4F8B', render: ratio, align: 'right' },\n    { code: 'app_qty_pbt', name: 'APP\u4EF6\u5355\u4EF7', align: 'right' },\n    { code: 'all_app_trd_amt_1d', name: 'APP\u6210\u4EA4\u91D1\u989D\u6C47\u603B', align: 'right' },\n  ]\n\n  const [state, setState] = useState({\n    isLoading: true,\n    data: [],\n    lastOpenKey: '',\n    lastCollapseKey: '',\n  })\n\n  useEffect(() => {\n    assets.cdnData.getAppTrafficData().then((data) => {\n      setState({ isLoading: false, data, lastOpenKey: 'B2C', lastCollapseKey: '' })\n    })\n  }, [])\n\n  const [openKeys, onChangeOpenKeys] = useState(['B2C'])\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ columns: columns, dataSource: state.data })\n    .primaryKey('id')\n    .use(features.buildTree('id', 'parent_id'))\n    .use(\n      features.treeMode({\n        openKeys,\n        onChangeOpenKeys(nextKeys, key, action) {\n          onChangeOpenKeys(nextKeys)\n          if (action === 'expand') {\n            setState({ ...state, lastOpenKey: key, lastCollapseKey: '' })\n          } else {\n            setState({ ...state, lastOpenKey: '', lastCollapseKey: key })\n          }\n        },\n      }),\n    )\n    .appendRowPropsGetter((record) => {\n      if (record.id === state.lastOpenKey) {\n        return { className: 'last-open' }\n      } else if (record.id === state.lastCollapseKey) {\n        return { className: 'last-collapse' }\n      }\n    })\n\n  /*\n    const StyledBaseTable = styled(art.BaseTable)`\n      tr.last-open {\n        --bgcolor: rgba(128, 243, 87, 0.32);\n        --hover-bgcolor: rgba(128, 243, 87, 0.32);\n\n        .expansion-icon {\n          fill: #4de247;\n        }\n      }\n\n      tr.last-collapse {\n        --bgcolor: rgba(253, 32, 32, 0.32);\n        --hover-bgcolor: rgba(253, 32, 32, 0.32);\n\n        .expansion-icon {\n          fill: #e54950;\n        }\n      }\n    `\n   */\n\n  return (\n    <docHelpers.StyledWebsiteBaseTable defaultColumnWidth={150} isLoading={state.isLoading} {...pipeline.getProps()} />\n  )\n}\n")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDXContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export useMDXComponents */
/* unused harmony export withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ })

}]);