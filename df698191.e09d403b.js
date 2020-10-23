(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ 109:
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
var frontMatter={id:'sort',title:'排序'};var metadata={"unversionedId":"pipeline/features/sort","id":"pipeline/features/sort","isDocsHomePage":false,"title":"排序","description":"对表格数据行进行排序，支持单列排序、多列排序、树形数据排序、自定义比较函数等功能。","source":"@site/docs/pipeline/features/sort.mdx","slug":"/pipeline/features/sort","permalink":"/docs/pipeline/features/sort","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/sort.mdx","version":"current","sidebar":"sidebar","previous":{"title":"行单选","permalink":"/docs/pipeline/features/single-select"},"next":{"title":"树状模式","permalink":"/docs/pipeline/features/tree-mode"}};/* @jsx mdx */var rightToc=[{value:'基本示例',id:'基本示例',children:[]},{value:'用法',id:'用法',children:[]},{value:'多列排序',id:'多列排序',children:[]},{value:'树形数据排序',id:'树形数据排序',children:[]},{value:'自定义比较函数',id:'自定义比较函数',children:[]},{value:'自定义切换顺序',id:'自定义切换顺序',children:[]},{value:'自定义列表头',id:'自定义列表头',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5BF9\u8868\u683C\u6570\u636E\u884C\u8FDB\u884C\u6392\u5E8F\uFF0C\u652F\u6301\u5355\u5217\u6392\u5E8F\u3001\u591A\u5217\u6392\u5E8F\u3001\u6811\u5F62\u6570\u636E\u6392\u5E8F\u3001\u81EA\u5B9A\u4E49\u6BD4\u8F83\u51FD\u6570\u7B49\u529F\u80FD\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"基本示例"},"\u57FA\u672C\u793A\u4F8B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u8868\u683C\u6392\u5E8F() {\n  const dataSource = assets.biz.dataSource3\n  const columns = [\n    { code: 'name', name: '\u516C\u53F8\u540D\u79F0', width: 200, features: { sortable: true } },\n    { code: 'entity', name: '\u652F\u4ED8\u5B9E\u4F53', width: 160 },\n    { code: 'dept', name: '\u91D1\u878D\u673A\u6784', width: 160, features: { sortable: true } },\n    { code: 'applier', name: '\u7533\u8BF7\u4EBA', width: 160, features: { sortable: true } },\n  ]\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .use(\n      features.sort({\n        mode: 'single',\n        defaultSorts: [{ code: 'name', order: 'desc' }],\n        highlightColumnWhenActive: true,\n      }),\n    )\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"用法"},"\u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"pipeline.use(features.sort(options))\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6CE8\u610F\u4E8B\u9879\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5217\u90FD\u662F\u4E0D\u53EF\u6392\u5E8F\u7684\uFF0C\u9700\u8981\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"column.features.sortable")," \u624D\u80FD\u5F00\u542F\u76F8\u5E94\u5217\u7684\u6392\u5E8F\u529F\u80FD",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"features.sortable=true")," \u8868\u793A\u542F\u7528\u9ED8\u8BA4\u7684\u6BD4\u8F83\u51FD\u6570\uFF08\u5B57\u7B26\u4E32\u4F7F\u7528\u5B57\u5178\u5E8F\uFF0C\u6570\u5B57\u4F7F\u7528\u81EA\u7136\u5E8F\uFF09"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"features.sortable=function")," \u8868\u793A\u9488\u5BF9\u8BE5\u5217\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u6BD4\u8F83\u51FD\u6570"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"sort \u652F\u6301\u4EE5\u4E0B\u6392\u5E8F\u884C\u4E3A\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\uFF08\u9ED8\u8BA4\u884C\u4E3A\uFF09",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"options.mode=multiple")," \u591A\u5B57\u6BB5\u6392\u5E8F\uFF0C\u6570\u636E\u5148\u6309\u5B57\u6BB5 1 \u6392\u5E8F\uFF0C\u7136\u540E\u6309\u5B57\u6BB5 2 \u6392\u5E8F\uFF0C\u4F9D\u6B21\u7C7B\u63A8"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"options.mode=single")," \u53EF\u4EE5\u4F7F\u7528\u5355\u5217\u6392\u5E8F",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u6CE8\u610F\u65E0\u8BBA\u662F\u591A\u5217\u6392\u5E8F\u8FD8\u662F\u5355\u5217\u6392\u5E8F\uFF0C",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"options.sorts \u59CB\u7EC8\u4E3A\u4E00\u4E2A\u6570\u7EC4")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"options.keepDataSource=true")," \u53EF\u4EE5\u300C\u4FDD\u6301 dataSource \u4E0D\u53D8\u300D",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5373 sort \u4E0D\u4F1A\u518D\u5BF9 dataSource \u8FDB\u884C\u5904\u7406\uFF0C\u9002\u7528\u4E8E\u300C\u540E\u7AEF\u5DF2\u8FD4\u56DE\u6392\u597D\u5E8F\u7684\u6570\u636E\u300D\u7684\u573A\u666F")))))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"options \u7ED3\u6784\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"export interface SortFeatureOptions {\n  /** \u6392\u5E8F\u5B57\u6BB5\u5217\u8868 */\n  sorts: SortItem[]\n\n  /** \u66F4\u65B0\u6392\u5E8F\u5B57\u6BB5\u5217\u8868\u7684\u56DE\u8C03\u51FD\u6570 */\n  onChangeSorts(nextSorts: SortItem[]): void\n\n  /** \u6392\u5E8F\u5207\u6362\u987A\u5E8F */\n  orders?: SortOrder[]\n\n  /** \u6392\u5E8F\u6A21\u5F0F\u3002\u5355\u9009 single\uFF0C\u591A\u9009 multiple\uFF0C\u9ED8\u8BA4\u4E3A\u591A\u9009 */\n  mode?: 'single' | 'multiple'\n\n  /** \u81EA\u5B9A\u4E49\u6392\u5E8F\u8868\u5934 */\n  SortHeaderCell?: React.ComponentType<SortHeaderCellProps>\n\n  /** \u662F\u5426\u4FDD\u6301 dataSource \u4E0D\u53D8 */\n  keepDataSource?: boolean\n\n  /** \u6392\u5E8F\u6FC0\u6D3B\u65F6 \u662F\u5426\u9AD8\u4EAE\u8FD9\u4E00\u5217\u7684\u5355\u5143\u683C */\n  highlightColumnWhenActive?: boolean\n\n  // todo \u6392\u5E8F\u70B9\u51FB\u89E6\u53D1\u4F4D\u7F6E clickArea\n\n  /** \u662F\u5426\u5BF9\u89E6\u53D1 onChangeOpenKeys \u7684 click \u4E8B\u4EF6\u8C03\u7528 event.stopPropagation() */\n  stopClickEventPropagation?: boolean\n}\n\nexport type SortOrder = 'desc' | 'asc' | 'none'\n\nexport type SortItem = { code: string; order: SortOrder }\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"多列排序"},"\u591A\u5217\u6392\u5E8F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u591A\u5217\u6392\u5E8F() {\n  const { amount, time } = assets.format\n  const { isLoading, dataSource } = assets.ncov19.useProvinceDataSource()\n\n  const columns = [\n    { code: 'provinceName', name: '\u7701\u4EFD', width: 150, features: { sortable: true } },\n    { code: 'confirmedCount', name: '\u786E\u8BCA', width: 100, render: amount, align: 'right', features: { sortable: true } },\n    { code: 'curedCount', name: '\u6CBB\u6108', width: 100, render: amount, align: 'right', features: { sortable: true } },\n    { code: 'deadCount', name: '\u6B7B\u4EA1', width: 100, render: amount, align: 'right', features: { sortable: true } },\n    { code: 'updateTime', name: '\u6700\u540E\u66F4\u65B0\u65F6\u95F4', width: 180, render: time },\n  ]\n\n  const [sorts, onChangeSorts] = useState([\n    { code: 'deadCount', order: 'asc' },\n    { code: 'confirmedCount', order: 'desc' },\n  ])\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ columns, dataSource })\n    .use(\n      features.sort({\n        mode: 'multiple',\n        highlightColumnWhenActive: true,\n        sorts,\n        onChangeSorts,\n      }),\n    )\n\n  return (\n    <div>\n      <button style={{ marginBottom: 8 }} onClick={() => onChangeSorts([])}>\n        \u6E05\u9664\u6392\u5E8F\n      </button>\n      <BaseTable\n        useOuterBorder\n        style={{ maxHeight: 400, overflow: 'auto' }}\n        isLoading={isLoading}\n        {...pipeline.getProps()}\n      />\n    </div>\n  )\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"树形数据排序"},"\u6811\u5F62\u6570\u636E\u6392\u5E8F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"features.sort \u4F1A\u81EA\u52A8\u8BC6\u522B\u6570\u636E\u4E2D\u7684 children \u5B57\u6BB5\uFF0C\u9ED8\u8BA4\u652F\u6301\u63D0\u4F9B\u6811\u5F62\u6570\u636E\u6392\u5E8F\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6811\u5F62\u6570\u636E\u6392\u5E8F\uFF1A\u5BF9\u4E8E\u6811\u4E2D\u7684\u67D0\u4E00\u4E2A\u7236\u8282\u70B9\uFF0C\u5BF9\u5176\u5B50\u8282\u70B9\u8FDB\u884C\u6392\u5E8F\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u6811\u72B6\u6A21\u5F0F\u4E0E\u5C42\u7EA7\u6392\u5E8F() {\n  const { ratio } = assets.format\n\n  const columns = [\n    { code: 'name', name: '\u6570\u636E\u7EF4\u5EA6', lock: true, width: 160 },\n    { code: 'shop_name', name: '\u95E8\u5E97', features: { sortable: true } },\n    { code: 'imp_uv_dau_pct', name: '\u66DD\u5149UV\u5360DAU\u6BD4\u4F8B', render: ratio, align: 'right', features: { sortable: true } },\n    { code: 'app_qty_pbt', name: 'APP\u4EF6\u5355\u4EF7', align: 'right', features: { sortable: true } },\n    { code: 'all_app_trd_amt_1d', name: 'APP\u6210\u4EA4\u91D1\u989D\u6C47\u603B', align: 'right', features: { sortable: true } },\n  ]\n\n  const [state, setState] = useState({ isLoading: true, data: [] })\n\n  useEffect(() => {\n    assets.cdnData.getAppTrafficData().then((data) => {\n      setState({ isLoading: false, data })\n    })\n  }, [])\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ columns, dataSource: state.data })\n    .primaryKey('id')\n    .use(features.buildTree('id', 'parent_id'))\n    .use(features.sort({ mode: 'single', highlightColumnWhenActive: true }))\n    .use(features.treeMode({ defaultOpenKeys: ['B2C'] }))\n\n  return <BaseTable defaultColumnWidth={100} isLoading={state.isLoading} {...pipeline.getProps()} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",{"className":"admonition admonition-note alert alert--secondary"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-heading"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h5",{parentName:"div"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("span",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"h5"},{"className":"admonition-icon"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("svg",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"span"},{"xmlns":"http://www.w3.org/2000/svg","width":"14","height":"16","viewBox":"0 0 14 16"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("path",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"svg"},{"fillRule":"evenodd","d":"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-content"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",{parentName:"div"},"\u6811\u5F62\u6570\u636E\u6392\u5E8F\u65F6\u8981\u6CE8\u610F sort \u7684\u4F7F\u7528\u987A\u5E8F\uFF08\u4E00\u822C\u8981\u5728 treeMode \u4E4B\u524D\u4F7F\u7528\uFF09\u3002"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"自定义比较函数"},"\u81EA\u5B9A\u4E49\u6BD4\u8F83\u51FD\u6570"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5F53\u4E3A\u67D0\u4E00\u5217\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"column.features.sortable = true")," \u65F6\uFF0C\u8BE5\u5217\u9ED8\u8BA4\u4F1A\u6309\u7167\u81EA\u7136\u5E8F\uFF08\u5BF9\u4E8E\u6570\u5B57\uFF09\u6216\u5B57\u5178\u5E8F\uFF08\u5BF9\u4E8E\u5B57\u7B26\u4E32\uFF09\u8FDB\u884C\u6392\u5E8F\u3002\n\u6211\u4EEC\u53EF\u4EE5\u4E3A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"column.features.sortable")," \u8BBE\u7F6E\u4E00\u4E2A\u51FD\u6570\u6765\u81EA\u5B9A\u4E49\u67D0\u4E00\u5217\u7684\u6BD4\u8F83\u89C4\u5219\uFF0C\u8BE5\u51FD\u6570\u5C06\u88AB\u4F5C\u4E3A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"Array#sort")," \u7684\u53C2\u6570\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5982\u679C\u53EA\u60F3\u4F7F\u7528 sort \u63D0\u4F9B\u7684\u4EA4\u4E92\u4E0E UI\uFF0C\u4F46\u4E0D\u60F3\u8BA9 sort \u6539\u53D8 dataSource\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"options.keepDataSource = true"),"\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"自定义切换顺序"},"\u81EA\u5B9A\u4E49\u5207\u6362\u987A\u5E8F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"SortFeatureOptions#orders")," \u53EF\u4EE5\u7528\u6765\u6307\u5B9A\u6392\u5E8F\u5207\u6362\u987A\u5E8F\u3002\u8BE5\u9009\u9879\u7684\u9ED8\u8BA4\u503C\u4E3A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"['desc', 'asc', 'none']"),"\uFF0C\u5373\u8FDE\u7EED\u70B9\u51FB\u67D0\u4E00\u5217\u7684\u8868\u5934\u65F6\uFF0C\u5148\u6309\u964D\u5E8F\u6392\u5E8F\uFF0C\u7136\u540E\u6309\u5347\u5E8F\u6392\u5E8F\uFF0C\u6700\u540E\u53D6\u6D88\u6392\u5E8F\uFF1B\u4F20\u5165\u81EA\u5B9A\u4E49\u7684 orders \u53EF\u4EE5\u8986\u76D6\u9ED8\u8BA4\u7684\u5207\u6362\u987A\u5E8F\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"自定义列表头"},"\u81EA\u5B9A\u4E49\u5217\u8868\u5934"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"SortFeatureOptions#SortHeaderCell")," \u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6392\u5E8F\u8868\u5934\u7684\u5185\u5BB9\u548C\u6837\u5F0F\uFF0C\u7EC4\u4EF6\u63A5\u53E3\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"interface SortHeaderCellProps {\n  /** \u8C03\u7528 features.sort(...) \u65F6\u7684\u53C2\u6570 */\n  sortOptions: object\n\n  /** \u5728\u6DFB\u52A0\u6392\u5E8F\u76F8\u5173\u7684\u5185\u5BB9\u4E4B\u524D \u8868\u5934\u539F\u6709\u7684\u6E32\u67D3\u5185\u5BB9 */\n  children: ReactNode\n\n  /** \u5F53\u524D\u6392\u5E8F */\n  sortOrder: SortOrder\n\n  /** \u591A\u5217\u6392\u5E8F\u4E0B\uFF0CsortIndex \u6307\u660E\u4E86\u5F53\u524D\u6392\u5E8F\u5B57\u6BB5\u8D77\u4F5C\u7528\u7684\u987A\u5E8F. \u5F53 sortOrder \u4E3A none \u65F6\uFF0CsortIndex \u4E3A -1 */\n  sortIndex: number\n\n  /** \u5F53\u524D\u5217\u7684\u914D\u7F6E */\n  column: ArtColumn\n\n  /** \u5207\u6362\u6392\u5E8F\u7684\u56DE\u8C03 */\n  onToggle(): void\n}\n")));};MDXContent.isMDXComponent=true;

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