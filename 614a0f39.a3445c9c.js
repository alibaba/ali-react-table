(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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




/***/ }),

/***/ 79:
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
var frontMatter={id:'examples',title:'表格示例'};var metadata={"unversionedId":"table/examples","id":"table/examples","isDocsHomePage":false,"title":"表格示例","description":"组件引入方式：","source":"@site/docs/table/examples.mdx","slug":"/table/examples","permalink":"/docs/table/examples","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/table/examples.mdx","version":"current","sidebar":"sidebar","previous":{"title":"基本用法","permalink":"/docs/table/basic-usage"},"next":{"title":"进阶用法","permalink":"/docs/table/advanced-usage"}};/* @jsx mdx */var rightToc=[{value:'基本用法',id:'基本用法',children:[]},{value:'数据为空状态',id:'数据为空状态',children:[]},{value:'数据加载状态',id:'数据加载状态',children:[]},{value:'左侧锁列',id:'左侧锁列',children:[]},{value:'表头吸顶',id:'表头吸顶',children:[]},{value:'表头分组',id:'表头分组',children:[]},{value:'单元格合并与自定义单元格样式',id:'单元格合并与自定义单元格样式',children:[]},{value:'自定义表格行样式',id:'自定义表格行样式',children:[]},{value:'限定表格容器大小',id:'限定表格容器大小',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u7EC4\u4EF6\u5F15\u5165\u65B9\u5F0F\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"import { BaseTable } from 'ali-react-table'\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"基本用法"},"\u57FA\u672C\u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"dataSource")," \u8BBE\u7F6E\u8868\u683C\u7684\u6570\u636E\u6E90\uFF0C\u901A\u8FC7 columns \u8BBE\u7F6E\u8868\u683C\u7684\u5217\u3002 \u6CE8\u610F ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"column.code")," \u8981\u4E0E dataSource \u4E2D\u7684\u6570\u636E\u5B57\u6BB5\u76F8\u5BF9\u5E94\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u57FA\u672C\u7528\u6CD5() {\n  const dataSource = [\n    { prov: '\u6E56\u5317\u7701', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },\n    { prov: '\u5E7F\u4E1C\u7701', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },\n    { prov: '\u6CB3\u5357\u7701', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },\n    { prov: '\u6D59\u6C5F\u7701', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },\n    { prov: '\u6E56\u5357\u7701', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },\n  ]\n\n  const columns = [\n    { code: 'prov', name: '\u7701\u4EFD', width: 150 },\n    { code: 'confirmed', name: '\u786E\u8BCA', width: 100, align: 'right' },\n    { code: 'cured', name: '\u6CBB\u6108', width: 100, align: 'right' },\n    { code: 'dead', name: '\u6B7B\u4EA1', width: 100, align: 'right' },\n    { code: 't', name: '\u6700\u540E\u66F4\u65B0\u65F6\u95F4', width: 180 },\n  ]\n\n  return <BaseTable dataSource={dataSource} columns={columns} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"数据为空状态"},"\u6570\u636E\u4E3A\u7A7A\u72B6\u6001"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"dataSource")," \u7684\u957F\u5EA6\u4E3A 0 \u65F6\uFF0C\u8868\u683C\u5C06\u5C55\u73B0\u7A7A\u72B6\u6001\u3002\u4E0A\u5C42\u53EF\u4EE5\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"components.EmptyContent")," \u5BF9\u7A7A\u72B6\u6001\u8FDB\u884C\u5B9A\u5236\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u6570\u636E\u4E3A\u7A7A() {\n  return (\n    <BaseTable\n      dataSource={[]}\n      columns={assets.biz.columns2}\n      // components={{ EmptyContent: () => <h1>\u6570\u636E\u4E3A\u7A7A~~</h1> }}\n    />\n  )\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"数据加载状态"},"\u6570\u636E\u52A0\u8F7D\u72B6\u6001"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"isLoading=true")," \u5373\u53EF\u5C55\u793A\u52A0\u8F7D\u52A8\u753B\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4E0A\u5C42\u53EF\u4EE5\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"components.LoadingContentWrapper")," \u4E0E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"components.LoadingIcon")," \u6765\u5B9A\u5236\u52A0\u8F7D\u52A8\u753B\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u8868\u683C\u6570\u636E\u52A0\u8F7D() {\n  return <BaseTable isLoading dataSource={assets.biz.dataSource2} columns={assets.biz.columns2} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"左侧锁列"},"\u5DE6\u4FA7\u9501\u5217"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"column.lock=true")," \u5373\u53EF\u9501\u5217\uFF0C\u9501\u5217\u7684\u65B9\u5411\u4E0E\u5D4C\u5957\u5173\u7CFB\u8BE6\u89C1 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"advanced-usage#%E9%94%81%E5%88%97%E4%B8%8E%E5%B5%8C%E5%A5%97%E7%9A%84%E5%88%97%E7%BB%93%E6%9E%84"}),"\u8BE5\u6587\u6863")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u5DE6\u4FA7\u9501\u5217() {\n  const { dataSource, isLoading } = assets.ncov19.useProvinceDataSource()\n  const { time, amount } = assets.format\n\n  return (\n    <BaseTable\n      style={{ width: 500, height: 300, overflow: 'auto' }}\n      useOuterBorder\n      isLoading={isLoading}\n      dataSource={dataSource}\n      columns={[\n        { lock: true, code: 'provinceName', name: '\u7701\u4EFD', width: 150 },\n        { code: 'confirmedCount', name: '\u786E\u8BCA', width: 100, render: amount, align: 'right' },\n        { code: 'suspectedCount', name: '\u7591\u4F3C', width: 100, render: amount, align: 'right' },\n        { code: 'curedCount', name: '\u6CBB\u6108', width: 100, render: amount, align: 'right' },\n        { code: 'deadCount', name: '\u6B7B\u4EA1', width: 100, render: amount, align: 'right' },\n        { code: 'updateTime', name: '\u6700\u540E\u66F4\u65B0\u65F6\u95F4', width: 180, render: time },\n      ]}\n    />\n  )\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"表头吸顶"},"\u8868\u5934\u5438\u9876"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8868\u683C\u5DF2\u7ECF\u5F00\u542F\u4E86\u8868\u5934\u5438\u9876\u529F\u80FD\u3002\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"isStickyHead=false")," \u53EF\u4EE5\u5173\u95ED\u5438\u9876\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u8868\u5934\u5438\u9876() {\n  const { dataSource, isLoading } = assets.ncov19.useProvinceDataSource()\n\n  const WEBSITE_NAV_HEIGHT = 60\n\n  return (\n    <div>\n      <div\n        style={{\n          position: 'sticky',\n          top: WEBSITE_NAV_HEIGHT,\n          height: 48,\n          border: '1px solid #ccc',\n          zIndex: 30,\n          background: 'var(--ifm-background-surface-color)',\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n        }}\n      >\n        <div>\u8868\u683C\u64CD\u4F5C\u680F\uFF0C\u8FD9\u91CC\u9002\u5408\u653E\u7F6E\u4E00\u4E9B\u529F\u80FD\u6309\u94AE</div>\n      </div>\n      <BaseTable\n        isStickyHead // isStickyHead \u7684\u9ED8\u8BA4\u503C\u4E3A true\uFF1B\u8BBE\u7F6E\u4E3A false \u53EF\u4EE5\u5173\u95ED\u8868\u5934\u5438\u9876\n        stickyTop={WEBSITE_NAV_HEIGHT + 48}\n        isLoading={isLoading}\n        dataSource={dataSource.slice(0, 6)}\n        columns={assets.ncov19.testProvColumns}\n      />\n    </div>\n  )\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"表头分组"},"\u8868\u5934\u5206\u7EC4"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"columns.children=[...]")," \u4E2D\u6DFB\u52A0\u5B50\u8282\u70B9\uFF0C",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"<BaseTable />")," \u4F1A\u7ED8\u5236\u76F8\u5E94\u7684\u5D4C\u5957\u8868\u5934\u7ED3\u6784\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u8868\u5934\u5206\u7EC4() {\n  const WEBSITE_NAV_HEIGHT = 60\n  const { useProvinceDataSource, cols } = assets.ncov19\n  const { dataSource, isLoading } = useProvinceDataSource()\n\n  return (\n    <BaseTable\n      stickyTop={WEBSITE_NAV_HEIGHT}\n      isLoading={isLoading}\n      dataSource={dataSource.slice(0, 6)}\n      columns={[\n        {\n          name: '\u57FA\u672C\u4FE1\u606F',\n          lock: true,\n          children: [cols.provinceName, cols.updateTime],\n        },\n        {\n          name: '\u6307\u6807\u5206\u7EC4',\n          children: [\n            { name: '\u6307\u6807\u5206\u7EC41', children: [cols.confirmedCount, cols.suspectedCount] },\n            { name: '\u6307\u6807\u5206\u7EC42', children: [cols.curedCount, cols.deadCount] },\n          ],\n        },\n      ]}\n    />\n  )\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"单元格合并与自定义单元格样式"},"\u5355\u5143\u683C\u5408\u5E76\u4E0E\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6837\u5F0F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"column.getCellProps(...)")," \u8FD4\u56DE colSpan/rowSpan \u53EF\u5B9E\u73B0\u5355\u5143\u683C\u5408\u5E76\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u9664\u4E86 colSpan, rowSpan \u4E4B\u5916\uFF0CgetCellProps \u4E5F\u53EF\u4EE5\u8FD4\u56DE td \u5143\u7D20\u7684\u5176\u4ED6 props\uFF0C\u4F8B\u5982 className, style, onClick \u7B49\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u5355\u5143\u683C\u5408\u5E76() {\n  const dataSource = [\n    { prov: '\u6E56\u5317\u7701', confirmed: 54406, cured: 4793, t: '2020-02-15 19:52:02' },\n    { prov: '\u5E7F\u4E1C\u7701', confirmed: 1294, cured: 409, t: '2020-02-15 19:52:02' },\n    { prov: '\u6CB3\u5357\u7701', confirmed: 1212, cured: 390, t: '2020-02-15 19:52:02' },\n    { prov: '\u6D59\u6C5F\u7701', confirmed: 1162, cured: 428, t: '2020-02-15 19:52:02' },\n    { prov: '\u6E56\u5357\u7701', confirmed: 1001, cured: 417, t: '2020-02-15 19:52:02' },\n  ]\n\n  const columns = [\n    {\n      code: 'prov',\n      name: '\u7701\u4EFD',\n      getCellProps(value, record, rowIndex) {\n        if (rowIndex === 3) {\n          return {\n            colSpan: 2,\n            rowSpan: 2,\n            style: { background: '#141414', color: '#ccc', fontWeight: 'bold' },\n          }\n        }\n      },\n    },\n    { code: 'confirmed', name: '\u786E\u8BCA', align: 'right' },\n    { code: 'cured', name: '\u6CBB\u6108', align: 'right' },\n    {\n      code: 't',\n      name: '\u6700\u540E\u66F4\u65B0\u65F6\u95F4',\n      getCellProps(value, record, rowIndex) {\n        if (rowIndex === 1) {\n          return { rowSpan: 3 }\n        }\n      },\n    },\n  ]\n  return <BaseTable defaultColumnWidth={100} dataSource={dataSource} columns={columns} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"自定义表格行样式"},"\u81EA\u5B9A\u4E49\u8868\u683C\u884C\u6837\u5F0F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"getRowProps(...)")," \u8BBE\u7F6E tr \u5143\u7D20\u4E0A\u7684 props\uFF0C\u4F8B\u5982 className, style, onClick \u7B49\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u81EA\u5B9A\u4E49\u8868\u683C\u884Cprops() {\n  const { useProvinceDataSource, testProvColumns } = assets.ncov19\n  const { isLoading, dataSource } = useProvinceDataSource()\n\n  const [lastClickRowIndex, setLastClickRowIndex] = useState(2)\n\n  return (\n    <div>\n      <p>\u70B9\u51FB\u8868\u683C\u884C\u4EE5\u6539\u53D8\u8BE5\u884C\u6837\u5F0F</p>\n      <BaseTable\n        style={{ '--bgcolor': 'transparent' }}\n        isLoading={isLoading}\n        dataSource={dataSource.slice(0, 6)}\n        columns={testProvColumns}\n        getRowProps={(record, rowIndex) => {\n          return {\n            style:\n              rowIndex === lastClickRowIndex\n                ? {\n                    outlineOffset: -2,\n                    outline: '2px solid gold',\n                    '--hover-bgcolor': 'transparent',\n                    background: 'linear-gradient(140deg, #ff000038, #009cff3d)',\n                  }\n                : {\n                    // \u8986\u76D6 website \u4E2D\u81EA\u5E26\u7684 style\uFF0C\u5B9E\u9645\u4F7F\u7528\u65F6\u53EF\u4EE5\u5FFD\u7565\n                    backgroundColor: 'transparent',\n                  },\n            onClick() {\n              setLastClickRowIndex(rowIndex)\n            },\n          }\n        }}\n      />\n    </div>\n  )\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"限定表格容器大小"},"\u9650\u5B9A\u8868\u683C\u5BB9\u5668\u5927\u5C0F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u901A\u8FC7 style.width/style.maxWidth \u6765\u9650\u5B9A\u8868\u683C\u7684\u5BBD\u5EA6\uFF1B\u901A\u8FC7 style.height/style.maxHeight \u6765\u9650\u5B9A\u9AD8\u5EA6\u3002\u9650\u5B9A\u5BBD\u5EA6\u6216\u9AD8\u5EA6\u65F6\uFF0C\u8981\u540C\u65F6\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"style.overflow=auto"),"\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u9650\u5B9A\u8868\u683C\u5BB9\u5668\u5927\u5C0F() {\n  const { dataSource1, operationCol } = assets.biz\n\n  const nameCol = { lock: true, code: 'name', width: 200, name: '\u516C\u53F8\u540D\u79F0' }\n  const repeats = [\n    { code: 'amount', width: 160, align: 'right', name: '\u91D1\u989D' },\n    { code: 'dept', width: 160, name: '\u91D1\u878D\u673A\u6784' },\n    { code: 'applier', width: 120, name: '\u7533\u8BF7\u4EBA' },\n  ]\n\n  function repeat(arr, n) {\n    let result = []\n    for (let i = 0; i < n; i++) {\n      result = result.concat(arr)\n    }\n    return result\n  }\n\n  return (\n    <BaseTable\n      style={{ maxWidth: 800, height: 385, overflow: 'auto' }}\n      dataSource={repeat(dataSource1, 5)}\n      columns={[\n        {\n          name: '\u5E8F\u53F7',\n          width: 70,\n          align: 'right',\n          lock: true,\n          getValue(_, rowIndex) {\n            return String(rowIndex + 1)\n          },\n        },\n        nameCol,\n        ...repeat(repeats, 5),\n        operationCol,\n      ]}\n    />\n  )\n}\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);