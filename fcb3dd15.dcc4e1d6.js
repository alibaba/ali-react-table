(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ 112:
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
var frontMatter={id:'basic-usage',title:'基本用法'};var metadata={"unversionedId":"table/basic-usage","id":"table/basic-usage","isDocsHomePage":false,"title":"基本用法","description":"`` 是 ali-react-table 中最主要的表格组件，其提供了基本的表格渲染能力。BaseTable 自带了一些非常实用的特性（表头吸顶、加载动画、锁列、单元格合并等），并支持虚拟滚动，支持大数据量渲染。","source":"@site/docs/table/basic-usage.mdx","slug":"/table/basic-usage","permalink":"/docs/table/basic-usage","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/table/basic-usage.mdx","version":"current","sidebar":"sidebar","previous":{"title":"更新日志","permalink":"/docs/changelog"},"next":{"title":"表格示例","permalink":"/docs/table/examples"}};/* @jsx mdx */var rightToc=[{value:'基本用法',id:'基本用法',children:[]},{value:'更多用法',id:'更多用法',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"<BaseTable />")," \u662F ali-react-table \u4E2D\u6700\u4E3B\u8981\u7684\u8868\u683C\u7EC4\u4EF6\uFF0C\u5176\u63D0\u4F9B\u4E86\u57FA\u672C\u7684\u8868\u683C\u6E32\u67D3\u80FD\u529B\u3002BaseTable \u81EA\u5E26\u4E86\u4E00\u4E9B\u975E\u5E38\u5B9E\u7528\u7684\u7279\u6027\uFF08\u8868\u5934\u5438\u9876\u3001\u52A0\u8F7D\u52A8\u753B\u3001\u9501\u5217\u3001\u5355\u5143\u683C\u5408\u5E76\u7B49\uFF09\uFF0C\u5E76\u652F\u6301\u865A\u62DF\u6EDA\u52A8\uFF0C\u652F\u6301\u5927\u6570\u636E\u91CF\u6E32\u67D3\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"BaseTable \u53EA\u63D0\u4F9B\u57FA\u672C\u7684\u8868\u683C\u6E32\u67D3\u80FD\u529B\uFF0C\u4E0D\u9700\u8981\u4F9D\u8D56\u7279\u5B9A\u7EC4\u4EF6\u5E93\uFF0C\u6545\u5176\u6253\u5305\u4F53\u79EF\u5F88\u5C0F\uFF0C\u4F46\u8FD9\u4E5F\u610F\u5473\u7740\u4E00\u4E9B\u5E38\u89C1\u7684\u8868\u683C\u529F\u80FD\uFF08\u6392\u5E8F\u3001\u8FC7\u6EE4\u3001\u884C\u9009\u62E9\u3001\u6811\u72B6\u6A21\u5F0F\u7B49\uFF09\u9700\u8981",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"../pipeline"}),"\u5728\u4E0A\u5C42\u8FDB\u884C\u62D3\u5C55"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"基本用法"},"\u57FA\u672C\u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u57FA\u672C\u7684 Table \u5305\u542B\u884C\u548C\u5217\uFF0C\u4F7F\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"columns")," \u5C5E\u6027\u6765\u5B9A\u4E49\u5217\u7684\u4FE1\u606F\uFF0C\u4F7F\u7528\u4F20\u5165\u7684 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"dataSource")," \u5C5E\u6027\u6570\u636E\u6765\u521B\u5EFA\u884C\uFF0C\u8FD9\u4E24\u4E2A\u5C5E\u6027\u4E5F\u662F\u8868\u683C\u7EC4\u4EF6\u5FC5\u4F20\u7684 props\uFF08\u5176\u4ED6\u6240\u6709 props \u90FD\u662F\u53EF\u9009\u7684\uFF09\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"dataSource")," \u63D0\u4F9B\u8868\u683C\u6570\u636E\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u9879\u5BF9\u5E94\u8868\u683C\u7684\u4E00\u884C"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"columns")," \u6307\u5B9A\u8868\u683C\u4E2D\u5305\u542B\u54EA\u4E9B\u5217\uFF0C",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"column.code")," \u4E0E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"dataSource")," \u4E2D\u7684\u6570\u636E\u5B57\u6BB5\u5BF9\u5E94")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EE5\u4E0B\u662F BaseTable \u7684\u57FA\u672C\u7528\u6CD5\u793A\u4F8B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u7EC4\u4EF6\u5F15\u5165\uFF1A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"import { BaseTable } from 'ali-react-table'")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live open","live":true,"open":true}),"function \u57FA\u672C\u7528\u6CD5() {\n  const dataSource = [\n    { prov: '\u6E56\u5317\u7701', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },\n    { prov: '\u5E7F\u4E1C\u7701', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },\n    { prov: '\u6CB3\u5357\u7701', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },\n    { prov: '\u6D59\u6C5F\u7701', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },\n    { prov: '\u6E56\u5357\u7701', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' },\n  ]\n\n  const columns = [\n    { code: 'prov', name: '\u7701\u4EFD', width: 150 },\n    { code: 'confirmed', name: '\u786E\u8BCA', width: 100, align: 'right' },\n    { code: 'cured', name: '\u6CBB\u6108', width: 100, align: 'right' },\n    { code: 'dead', name: '\u6B7B\u4EA1', width: 100, align: 'right' },\n    { code: 't', name: '\u6700\u540E\u66F4\u65B0\u65F6\u95F4', width: 180 },\n  ]\n  return <BaseTable dataSource={dataSource} columns={columns} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"更多用法"},"\u66F4\u591A\u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4E0A\u8FF0\u7684\u4F8B\u5B50\u5C55\u793A\u4E86 BaseTable \u7684\u57FA\u672C\u7528\u6CD5\uFF0C\u66F4\u591A\u7684\u7528\u6CD5\uFF08\u9501\u5217\u3001\u8868\u5934\u5438\u9876\u3001\u5217\u5206\u7EC4\u3001\u5355\u5143\u683C\u5408\u5E76\u7B49\uFF09\u53EF\u53C2\u8003 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"examples"}),"\u8868\u683C\u793A\u4F8B"),"\u3002",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"BaseTable")," \u7684\u8BE6\u7EC6 API \u8BE6\u89C1 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"api"}),"BaseTable API")));};MDXContent.isMDXComponent=true;

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