(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/base-table-simple-case-preview-68d5df63406e4d61b93d23640123683e.png");

/***/ }),

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/table-virutal-scroll-944b72b9876274729a00388a61624c69.gif");

/***/ }),

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/pivot-table-demo-9f745468067f4f49ea499b88e4ba9811.gif");

/***/ }),

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/column-hover-and-sort-fe77933692e81f358661c85a44b57b65.gif");

/***/ }),

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/base-table-column-structure-9296e7eb08786550b1d0b206a5c156a3.png");

/***/ }),

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/tree-mode-and-custom-columns-608cb60deb736b79617a7aff31fc21fa.png");

/***/ }),

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/remain-matrix-and-rio-table-3f98890c80a1ea42a65f8cb3e48bbc9b.png");

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




/***/ }),

/***/ 96:
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
var frontMatter={title:'ali-react-table：高性能 React 表格组件',author:'feichao',authorURL:'https://shinima.pw/'};var metadata={"permalink":"/blog/2020/04/15/ali-react-table-introduction","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/blog/blog/2020-04-15-ali-react-table-introduction.md","source":"@site/blog/2020-04-15-ali-react-table-introduction.md","description":"简介","date":"2020-04-15T00:00:00.000Z","tags":[],"title":"ali-react-table：高性能 React 表格组件","readingTime":2.76,"truncated":true,"prevItem":{"title":"从 0.13 升级到 0.14","permalink":"/blog/2020/08/10/from-0.13-to-0.14"}};/* @jsx mdx */var rightToc=[{value:'简介',id:'简介',children:[]},{value:'虚拟滚动',id:'虚拟滚动',children:[]},{value:'锁列与单元格合并',id:'锁列与单元格合并',children:[]},{value:'表格功能拓展',id:'表格功能拓展',children:[]},{value:'交叉表',id:'交叉表',children:[]},{value:'小结',id:'小结',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"简介"},"\u7B80\u4ECB"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u524D\u7AEF\u5F00\u53D1\u4E2D\uFF0C\u8868\u683C\u4E00\u76F4\u90FD\u662F\u6700\u590D\u6742\u7684\u7EC4\u4EF6\u4E4B\u4E00\u3002\u8868\u683C\u4E0D\u4EC5\u8981\u652F\u6301\u4E30\u5BCC\u7684\u64CD\u4F5C\uFF08\u6392\u5E8F\u3001\u8FC7\u6EE4\u3001\u641C\u7D22\u3001\u5206\u9875\u3001\u81EA\u5B9A\u4E49\u5217\u7B49\uFF09\uFF0C\u8FD8\u8981\u6709\u975E\u5E38\u597D\u7684\u6027\u80FD\u4EE5\u5C55\u793A\u5927\u91CF\u6570\u636E\u3002\u5F88\u591A\u7EC4\u4EF6\u5E93\uFF08\u4F8B\u5982 fusion design\uFF0Cant design\uFF09\u63D0\u4F9B\u4E86\u529F\u80FD\u4E30\u5BCC\u7684\u8868\u683C\u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u8868\u683C\u4E00\u5F00\u59CB\u6CA1\u6709\u8FC7\u591A\u8003\u8651\u6027\u80FD\u95EE\u9898\uFF0C\u5F80\u5F80\u662F\u540E\u9762\u9047\u5230\u6027\u80FD\u74F6\u9888\u95EE\u9898\u65F6\u624D\u8003\u8651\u6DFB\u52A0\u865A\u62DF\u6EDA\u52A8\u7279\u6027\uFF0C\u4F46\u6B64\u65F6\u8FC7\u591A\u7684\u8868\u683C\u529F\u80FD\u4F7F\u5F97\u6027\u80FD\u4F18\u5316\u7684\u96BE\u5EA6\u975E\u5E38\u9AD8\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"ali-react-table \uFF08",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"https://github.com/alibaba/ali-react-table"}),"https://github.com/alibaba/ali-react-table"),"\uFF09\u662F\u6211\u4EEC\u5C0F\u7EC4\u5F00\u53D1\u7684\u9AD8\u6027\u80FD React \u8868\u683C\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u5728\u4E00\u5F00\u59CB\u5C31\u8003\u8651\u4E86\u8868\u683C\u7684\u6027\u80FD\uFF0C\u4E3A\u5176\u6DFB\u52A0\u4E86\u5185\u7F6E\u7684\u865A\u62DF\u6EDA\u52A8\u7279\u6027\u3002\u865A\u62DF\u6EDA\u52A8\u4F1A\u5728\u6570\u636E\u91CF\u8F83\u5927\u65F6\u81EA\u52A8\u5F00\u542F\uFF0C\u8F7B\u677E\u5C55\u793A\u4E00\u4E07\u884C/\u4E00\u4E07\u5217\u4EE5\u4E0A\u7684\u6570\u636E\u3002\u865A\u62DF\u6EDA\u52A8\u662F\u8868\u683C\u7684\u6838\u5FC3\u7279\u6027\u4E4B\u4E00\uFF0C\u5728\u4E3A\u8868\u683C\u5B9E\u73B0\u65B0\u529F\u80FD\u65F6\uFF0C\u6211\u4EEC\u4F1A\u786E\u4FDD\u65B0\u529F\u80FD\u4E0D\u4E0E\u865A\u62DF\u6EDA\u52A8\u51B2\u7A81\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8868\u683C\u7EC4\u4EF6\u7684\u57FA\u672C\u7528\u6CD5\u548C antd/fusion \u8868\u683C\u7C7B\u4F3C\uFF0C\u4F20\u5165 dataSource \u6765\u6307\u5B9A\u8868\u683C\u7684\u6570\u636E\u6E90\uFF0C\u4F20\u5165 columns \u6765\u5BF9\u8868\u683C\u7684\u5217\u8FDB\u884C\u914D\u7F6E\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"import { BaseTable } from 'ali-react-table'\n\nfunction BasicUsage() {\n  const dataSource = [\n    { prov: '\u6E56\u5317\u7701', confirm: 54406, cure: 4793, dead: 1457, t: '2020-02-15 19:52:02' },\n    { prov: '\u5E7F\u4E1C\u7701', confirm: 1294, cure: 409, dead: 2, t: '2020-02-15 19:52:02' },\n    { prov: '\u6CB3\u5357\u7701', confirm: 1212, cure: 390, dead: 13, t: '2020-02-15 19:52:02' },\n    { prov: '\u6D59\u6C5F\u7701', confirm: 1162, cure: 428, dead: 0, t: '2020-02-15 19:52:02' },\n    { prov: '\u6E56\u5357\u7701', confirm: 1001, cure: 417, dead: 2, t: '2020-02-15 19:52:02' },\n  ]\n\n  const columns = [\n    { code: 'prov', name: '\u7701\u4EFD', width: 150 },\n    { code: 'confirm', name: '\u786E\u8BCA', width: 100, align: 'right' },\n    { code: 'cure', name: '\u6CBB\u6108', width: 100, align: 'right' },\n    { code: 'dead', name: '\u6B7B\u4EA1', width: 100, align: 'right' },\n    { code: 't', name: '\u66F4\u65B0\u65F6\u95F4', width: 180 },\n  ]\n  return <BaseTable dataSource={dataSource} columns={columns} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"base-table-simple-case-preview.png",src:__webpack_require__(1049).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"虚拟滚动"},"\u865A\u62DF\u6EDA\u52A8"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5F53\u6570\u636E\u91CF\u8F83\u5927\u65F6\uFF0C\u8868\u683C\u4F1A\u81EA\u52A8\u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"table-virutal-scroll.gif",src:__webpack_require__(1050).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u2191 \u901A\u8FC7 dataSource \u4F20\u5165\u4E00\u4E2A\u957F\u5EA6\u8D85\u8FC7 5 \u4E07\u7684\u6570\u7EC4\uFF0C\u8868\u683C\u4F9D\u65E7\u6D41\u7545\u3002\u5F53\u8868\u683C\u5411\u4E0B\u6EDA\u52A8\u65F6\uFF0CBaseTable \u9ED8\u8BA4\u4F1A\u4E3A\u8868\u5934\u8BBE\u7F6E style.position=sticky\uFF0C\u8868\u5934\u5C06\u4F1A\u5438\u9644\u5728\u9875\u9762\u6216\u6EDA\u52A8\u5BB9\u5668\u7684\u9876\u90E8\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"锁列与单元格合并"},"\u9501\u5217\u4E0E\u5355\u5143\u683C\u5408\u5E76"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u7EF4\u5EA6\u3001\u6307\u6807\u6570\u91CF\u8F83\u591A\u60C5\u51B5\u4E0B\uFF0C\u8BBE\u7F6E column.lock=true \u53EF\u4EE5\u5728\u8868\u683C\u5DE6\u4FA7\u6216\u53F3\u4FA7\u9501\u5B9A\u6307\u5B9A\u7684\u5217\uFF0C\u63D0\u5347\u4EA4\u4E92\u4F53\u9A8C\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u66F4\u590D\u6742\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u8BBE\u7F6E column.getSpanRect \u6765\u6307\u5B9A\u5355\u5143\u683C\u7684\u5408\u5E76\u60C5\u51B5\uFF1Bcolumn.getSpanRect \u8FD4\u56DE\u6BCF\u4E2A\u5355\u5143\u683C\u88AB\u5408\u5E76\u4E4B\u540E\u7684\u77E9\u5F62\u4F4D\u7F6E\uFF0C\u5728\u6E32\u67D3\u8868\u683C\u65F6\uFF0CBaseTable \u4F1A\u6839\u636E\u5355\u5143\u683C\u7684\u4F4D\u7F6E\u548C\u5BF9\u5E94\u7684 spanRect\uFF0C\u6765\u4E3A\u5355\u5143\u683C\u52A8\u6001\u8BBE\u7F6E rowSpan/colSpan\uFF0C\u4F7F\u5F97\u5728\u865A\u62DF\u6EDA\u52A8\u573A\u666F\u4E0B\u5408\u5E76\u5355\u5143\u683C\u4F9D\u7136\u53EF\u4EE5\u751F\u6548\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u57FA\u4E8E\u8FD9\u4E9B\u5B9E\u7528\u7684\u8868\u683C\u7279\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8868\u683C\u4E0A\u8FDB\u884C\u6DF1\u5EA6\u5B9A\u5236\u4E0E\u4E8C\u6B21\u5F00\u53D1\uFF0C\u5B9E\u73B0\u4E0B\u94BB\u3001\u53F3\u952E\u83DC\u5355\u3001\u4EA4\u53C9\u8868/\u900F\u89C6\u8868\u3001\u6536\u62E2/\u5C55\u5F00\u7B49\u529F\u80FD\u3002\u540C\u65F6\u8868\u683C\u5185\u7F6E\u7684\u865A\u62DF\u6EDA\u52A8\u4FDD\u8BC1\u4E86\u5927\u6570\u636E\u91CF\u4E0B\u8868\u683C\u4ECD\u5177\u6709\u5F88\u597D\u7684\u6027\u80FD\uFF0C\u4E0A\u5C42\u4F7F\u7528\u8005\u4E0D\u9700\u8981\u62C5\u5FC3\u6027\u80FD\u95EE\u9898\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4E0B\u56FE\u662F\u57FA\u4E8E BaseTable \u7684\u4E00\u4E2A\u7B80\u5355\u7684\u900F\u89C6\u8868 demo\uFF08",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"https://ali-react-table.js.org/?path=/story/%E7%A4%BA%E4%BE%8B-%E5%9F%BA%E4%BA%8E-crosstable-%E7%9A%84%E9%80%8F%E8%A7%86%E8%A1%A8--pivot-table-based-on-cross-table"}),"\u5728\u7EBF demo"),"\uFF09"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"pivot-table-demo.gif",src:__webpack_require__(1051).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"表格功能拓展"},"\u8868\u683C\u529F\u80FD\u62D3\u5C55"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"BaseTable \u662F\u4E00\u4E2A\u76F8\u5BF9\u5E95\u5C42\u7684 React \u7EC4\u4EF6\uFF0C\u4EC5\u63D0\u4F9B\u4E86\u57FA\u672C\u7684\u8868\u683C\u6E32\u67D3\u529F\u80FD\u3002\u4E3A\u4E86\u65B9\u4FBF\u5BF9\u8868\u683C\u8FDB\u884C\u529F\u80FD\u62D3\u5C55\uFF0C\u6211\u4EEC\u4E3A BaseTable \u8BBE\u8BA1\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u62D3\u5C55\u65B9\u6848\uFF0C\u7136\u540E\u6211\u4EEC\u57FA\u4E8E\u8BE5\u65B9\u6848\u5B9E\u73B0\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u8868\u683C\u529F\u80FD\uFF0C\u5305\u62EC\u6392\u5E8F\u3001\u6811\u72B6\u6A21\u5F0F\u3001\u5217\u9AD8\u4EAE\u7B49\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6211\u4EEC\u77E5\u9053 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"BaseTable")," \u57FA\u4E8E dataSource \u548C columns \u6765\u6E32\u67D3\u8868\u683C\uFF0C\u6309\u7167\u4E00\u5B9A\u7684\u89C4\u5219\u5BF9 dataSource/columns \u8FDB\u884C\u5305\u88C5\u548C\u8F6C\u6362\uFF0C\u53EF\u4EE5\u6539\u53D8 dataSource/columns \u7684\u503C\u6216\u6E32\u67D3\u8F93\u51FA\uFF0C\u5B9E\u73B0\u7279\u5B9A\u7684\u529F\u80FD\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"type Transform<T> = (input: T) => T\n\ntype TableTransform = Transform<{\n  columns: ArtTableColumn[]\n  dataSource: any[]\n}>\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"TableTransform"),"\uFF08\u540E\u9762\u7B80\u79F0 transform\uFF09\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570\uFF0C\u8F93\u5165",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("em",{parentName:"strong"},"\u5217\u914D\u7F6E + \u6570\u636E\u6E90")),"\uFF0C\u8F93\u51FA\u4E00\u4EFD\u65B0\u7684",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("em",{parentName:"strong"},"\u5217\u914D\u7F6E + \u6570\u636E\u6E90")),"\u3002\u6BCF\u4E00\u4E2A transform \u901A\u8FC7\u5BF9 dataSource/columns \u7684\u5305\u88C5\u548C\u8F6C\u6362\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u65B0\u7684\u7279\u6027\u3002\u6CE8\u610F\u5230\u6BCF\u4E2A transform \u7684\u8F93\u5165\u548C\u8F93\u51FA\u7684\u7C7B\u578B\u76F8\u540C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u591A\u4E2A transform \u4E32\u8054\u4EE5\u5B9E\u73B0\u4E0D\u540C\u529F\u80FD\u7684\u7EC4\u5408\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"ali-react-table/biz \u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u89C1\u8868\u683C\u529F\u80FD\u7684 transform\uFF0C\u4E0B\u9762\u4EE5\u300C",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\u6392\u5E8F"),"\u548C",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\u5217\u9AD8\u4EAE"),"\u4E24\u4E2A\u529F\u80FD\u7684\u7EC4\u5408\u300D\u4E3A\u4F8B\u4ECB\u7ECD transform \u7684\u4F7F\u7528\u65B9\u5F0F\u3002 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"column-hover-and-sort.gif",src:__webpack_require__(1052).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5BF9\u5E94\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript","metastring":"jsx","jsx":true}),"import { ArtColumn, BaseTable } from 'ali-react-table'\nimport { applyTransforms, commonTransforms } from 'ali-react-table/biz'\nimport React, { useState } from 'react'\n\nfunction SingleSortExample() {\n  const { isLoading, dataSource } = useProvinceDataSource()\n\n  const columns: ArtTableColumn[] = [\n    // \u901A\u8FC7 features.sortable \u6765\u6807\u8BB0 \u53EF\u6392\u5E8F\u7684\u5217\n    { code: 'provinceName', name: '\u7701\u4EFD', features: { sortable: true } },\n    { code: 'confirmedCount', name: '\u786E\u8BCA', features: { sortable: true } },\n    { code: 'curedCount', name: '\u6CBB\u6108', features: { sortable: true } },\n    { code: 'deadCount', name: '\u6B7B\u4EA1', features: { sortable: true } },\n    { code: 'updateTime', name: '\u6700\u540E\u66F4\u65B0\u65F6\u95F4' },\n  ]\n\n  // transform \u90FD\u662F\u7EAF\u51FD\u6570\uFF0C\u6240\u9700\u7684\u989D\u5916\u72B6\u6001\u9700\u8981\u4E0A\u5C42\u63D0\u4F9B\uFF0C\u8FD9\u91CC\u4F7F\u7528 useState \u6765\u5FEB\u901F\u521B\u5EFA\u72B6\u6001\n  const [hoverColIndex, onChangeHoverColIndex] = useState(-1)\n  const [sorts, onChangeSorts] = useState([{ code: 'deadCount', order: 'desc' }])\n\n  const renderData = applyTransforms(\n    { columns, dataSource },\n    commonTransforms.columnHover({ hoverColIndex, onChangeHoverColIndex }),\n    // \u8BBE\u7F6E sort.mode=multiple \u53EF\u4EE5\u4F7F\u7528\u591A\u5217\u6392\u5E8F\n    commonTransforms.sort({ mode: 'single', sorts, onChangeSorts }),\n  )\n\n  // applyTransform \u662F\u4F7F\u7528\u591A\u4E2A transform \u7684\u8F85\u52A9\u51FD\u6570\n  // \u4E0A\u9762\u7684\u4EE3\u7801\u76F8\u5F53\u4E8E\uFF1A\n  // input = { dataSource, columns }\n  // t1 = commonTransforms.columnHover(...)\n  // t2 = commonTransforms.sort(...)\n  // renderData = t2(t1(input))\n\n  return <BaseTable dataSource={renderData.dataSource} columns={renderData.columns} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u76F8\u6BD4\u4E8E\u539F\u6765\u7684\u300C\u76F4\u63A5\u901A\u8FC7 props \u8BBE\u7F6E\u8868\u683C\u914D\u7F6E\u300D\u7684\u65B9\u5F0F\uFF0Ctransform \u4F7F\u7528\u8D77\u6765\u66F4\u9EBB\u70E6\u4E00\u4E9B\uFF0C\u4F46\u5B83\u7684\u4F18\u52BF\u4E5F\u975E\u5E38\u660E\u663E\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5BF9\u4E8E\u7528\u6237\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u6309\u9700\u5F15\u5165 transform\uFF0C\u591A\u4E2A transform \u53EF\u7EC4\u5408\u6027\u8F83\u597D\uFF0C\u964D\u4F4E\u591A\u4E2A\u529F\u80FD\u4E4B\u95F4\u7684\u51B2\u7A81\u6982\u7387",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u56E0\u4E3A\u539F\u6765\u8868\u683C\u5C01\u88C5\u4E86\u6240\u6709\u529F\u80FD\uFF0C\u591A\u4E2A\u529F\u80FD\u4E4B\u95F4\u975E\u5E38\u5BB9\u6613\u53D1\u751F\u51B2\u7A81"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8868\u683C\u529F\u80FD\u4E0D\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u65F6\uFF0C\u53EF\u81EA\u884C\u5B9E\u73B0\u81EA\u5B9A\u4E49 transform\uFF0C\u4E0E commonTransforms \u914D\u5408\u4F7F\u7528"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5BF9\u4E8E\u8868\u683C\u7EC4\u4EF6\u7EF4\u62A4\u8005\uFF08\u4E5F\u5C31\u662F\u6211\uFF09\uFF1A\u62D3\u5C55\u529F\u80FD\u6240\u9700\u7684\u72B6\u6001\u7531\u4E0A\u5C42\u63D0\u4F9B\uFF0C\u8868\u683C\u5185\u90E8\u7684\u72B6\u6001\u6570\u91CF\u53EF\u63A7\uFF0C\u964D\u4F4E\u8868\u683C\u6027\u80FD\u4F18\u5316\u7684\u96BE\u5EA6\uFF0C\u8868\u683C\u7EC4\u4EF6\u7EF4\u62A4\u8D77\u6765\u6BD4\u8F83\u5BB9\u6613")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u540C\u65F6\u8FD9\u4E5F\u5E26\u6765\u4E86\u66F4\u6E05\u6670\u7684\u8868\u683C\u529F\u80FD\u8BBE\u8BA1\u5206\u5C42\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"BaseTable \u63D0\u4F9B\u7075\u6D3B\u7684 column \u914D\u7F6E\u6765\u63D0\u4F9B\u9AD8\u53EF\u5B9A\u5236\u6027\uFF0C\u4E0A\u5C42\u5B9E\u73B0\u5404\u7C7B transform \u5B9E\u73B0\u62D3\u5C55\u529F\u80FD\u3002"),"\u8868\u683C\u7684\u57FA\u672C\u529F\u80FD\u7531 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"ali-react-table")," \u63D0\u4F9B\uFF0C\u800C\u62D3\u5C55\u529F\u80FD\u5219\u9700\u8981\u4ECE ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"ali-react-table/biz")," \u5F15\u5165",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\u3002"),"\u4E0B\u8868\u5C55\u793A\u4E86 BaseTable \u4E2D\u5217\u914D\u7F6E\u5BF9\u8C61\u7684\u7ED3\u6784\uFF0C\u53EF\u4EE5\u770B\u5230\u4E0A\u5C42\u53EF\u4EE5\u5B9A\u5236\u5217\u6807\u9898\u3001\u5BBD\u5EA6\u3001\u9501\u5217\u3001\u5355\u5143\u683C\u7B49\u5185\u5BB9\uFF0C\u51E0\u4E4E\u6DB5\u76D6\u4E86\u5217\u7684\u6BCF\u4E2A\u65B9\u9762\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"base-table-column-structure.png",src:__webpack_require__(1053).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"ali-react-table/biz \u8FD8\u901A\u8FC7 commonTransform \u63D0\u4F9B\u4E86\u6811\u72B6\u6A21\u5F0F\u3001\u81EA\u5B9A\u4E49\u5217\u3001\u8868\u683C\u64CD\u4F5C\u680F\u7B49\u529F\u80FD\uFF0C\u66F4\u591A\u7684\u529F\u80FD\u4E5F\u6B63\u5728\u4E0D\u65AD\u5F00\u53D1\u4E2D\uFF0C\u5C06\u901A\u8FC7\u7EDF\u4E00\u7684\u62D3\u5C55\u65B9\u5F0F\u8FDB\u884C\u63D0\u4F9B\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"imgs-2020-04-15/tree-mode-and-custom-columns.png",src:__webpack_require__(1054).default}),"\n\u2191 \u5DE6\uFF1A\u6811\u72B6\u6A21\u5F0F\uFF1B\u53F3\uFF1A\u81EA\u5B9A\u4E49\u5217"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5F53\u9047\u5230\u4E00\u4E9B\u4E0D\u5E38\u89C1\u7684\u8868\u683C\u9700\u6C42\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u624B\u52A8\u5B9A\u5236\u5217\u7684 render/getCellProps \u6765\u6EE1\u8DB3\u5B9A\u5236\u9700\u6C42\uFF1A\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("img",{alt:"imgs-2020-04-15/remain-matrix-and-rio-table.png",src:__webpack_require__(1055).default})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"交叉表"},"\u4EA4\u53C9\u8868"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u9664\u4E86\u5E38\u89C1\u7684\u884C\u5217\u6570\u636E\uFF0C\u5C55\u793A\u4EA4\u53C9\u6570\u636E\u6216\u900F\u89C6\u6570\u636E\u4E5F\u662F\u5E38\u89C1\u7684\u8868\u683C\u9700\u6C42\u3002\u524D\u8FF0\u7684 BaseTable \u53EA\u80FD\u591F\u5C55\u793A\u884C\u5217\u5F02\u6784\u7684\u6570\u636E\uFF1A\u884C\uFF08dataSource\uFF09\u8D1F\u8D23\u63D0\u4F9B\u6570\u636E\uFF0C\u5217\uFF08columns\uFF09\u63A7\u5236\u8868\u683C\u5982\u4F55\u5C55\u73B0\uFF1B\u800C\u4EA4\u53C9/\u900F\u89C6\u6570\u636E\u7684\u884C\u8868\u5934\u548C\u5217\u8868\u5934\u662F\u540C\u6784\u7684\uFF08\u884C\u8868\u5934\u548C\u5217\u8868\u5934\u90FD\u662F\u6811\u72B6\u7ED3\u6784\uFF09\u3002\u4E3A\u4E86\u65B9\u4FBF\u5C55\u793A\u884C\u5217\u540C\u6784\u6570\u636E\uFF0C\u6211\u4EEC\u57FA\u4E8E BaseTable \u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u4EA4\u53C9\u8868\u683C\uFF08CrossTable\uFF09\uFF0C\u4E13\u95E8\u5E94\u5BF9\u300C\u884C\u8868\u5934\u548C\u5217\u8868\u5934\u90FD\u662F\u4E00\u68F5\u6811\u300D \u7684\u573A\u666F\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"ali-react-table/pivot \u63D0\u4F9B\u7684\u4EA4\u53C9\u8868\uFF08CrossTable\uFF09\u4E5F\u662F\u4E00\u4E2A\u8F83\u4E3A\u5E95\u5C42\u7684 React \u7EC4\u4EF6\uFF0C\u4EC5\u63D0\u4F9B\u8868\u683C\u7ED3\u6784\u7684\u6E32\u67D3\u80FD\u529B\u3002CrossTable \u7684\u6E32\u67D3\u8FC7\u7A0B\u53EF\u8BA4\u4E3A\u662F\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"strong"},"\u5DE6\u6811 + \u4E0A\u6811 => \u8868\u683C")),"\u3002\u5927\u81F4\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"<CrossTable\n  // \u63A8\u8350\u4E3A\u4EA4\u53C9\u8868\u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u5217\u5BBD\n  defaultColumnWidth={100}\n  // leftTree, topTree \u5747\u4E3A { key, value, children } \u7684\u5D4C\u5957\u6811\u72B6\u7ED3\u6784\n  leftTree={leftTree}\n  topTree={topTree}\n  getValue={(leftNode, topNode) => {\n    // \u81EA\u5B9A\u4E49\u7684\u53D6\u6570\u903B\u8F91\uFF0C\u9488\u5BF9\u6BCF\u4E2A\u5355\u5143\u683C\u90FD\u4F1A\u8C03\u7528\u4E00\u6B21\n    // leftNode \u8868\u793A\u5F53\u524D\u5355\u5143\u683C\u5BF9\u5E94\u7684\u5DE6\u4FA7\u6811\u8282\u70B9\uFF0CtopNode \u662F\u5BF9\u5E94\u7684\u4E0A\u65B9\u6811\u8282\u70B9\n  }}\n  render={(value, leftNode, topNode) => {\n    // \u53EF\u9009\u7684 \u81EA\u5B9A\u4E49\u7684\u6E32\u67D3\u903B\u8F91\n    return value\n  }}\n/>\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"CrossTable \u8FD9\u91CC\u5C31\u4E0D\u518D\u8FC7\u591A\u4ECB\u7ECD\u4E86\uFF0C\u8868\u683C\u7684\u6548\u679C\u53EF\u89C1\u672C\u6587\u4E0A\u9762\u900F\u89C6\u8868 demo \u52A8\u56FE\u3002ali-react-table/pivot \u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u900F\u89C6\u6570\u636E\u5904\u7406\u65B9\u6CD5\uFF0C\u65B9\u4FBF\u5728\u524D\u7AEF\u8FDB\u884C\u4E00\u4E9B\u7B80\u5355\u7684\u6570\u636E\u805A\u5408\u8FD0\u7B97\u5E76\u5C06\u5176\u5C55\u793A\u5230\u8868\u683C\u4E0A\uFF0C\u5177\u4F53\u53EF\u89C1 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"https://ali-react-table.js.org/?path=/docs/%E4%BA%A4%E5%8F%89%E4%B8%8E%E9%80%8F%E8%A7%86"}),"\u76F8\u5173\u6587\u6863"),"\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"小结"},"\u5C0F\u7ED3"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"ali-react-table \u7684\u4E3B\u8981\u5B9A\u4F4D\u662F\u63D0\u4F9B\u9AD8\u6027\u80FD\u3001\u9AD8\u53EF\u5B9A\u5236\u6027\u7684 React \u8868\u683C\uFF0C\u65B9\u4FBF\u4E0A\u5C42\u8FDB\u884C\u5C01\u88C5\u548C\u5B9A\u5236\u5E76\u63A5\u5165\u5230\u4E0D\u540C\u7684\u7CFB\u7EDF\u548C\u4E1A\u52A1\u4E2D\u3002ali-react-table \u6CA1\u6709\u7ED1\u5B9A\u7279\u5B9A\u7684 React \u7EC4\u4EF6\u5E93\uFF0C\u4EC5\u4F9D\u8D56\u4E86\u4E00\u4E9B\u5DE5\u5177\u7C7B\u5E93\uFF08\u4F8B\u5982 rxjs\u3001styled-components\u3001classnames\uFF09\uFF0C\u914D\u5408 webpack/rollup \u7684 tree shaking \u7279\u6027\uFF0C\u5F15\u5165 ali-react-table \u6240\u4EA7\u751F\u7684\u989D\u5916 JS \u4F53\u79EF\u975E\u5E38\u6709\u9650\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u9664\u4E86\u4E0A\u9762\u4ECB\u7ECD\u7684\u4E00\u4E9B\u529F\u80FD\u4E4B\u5916\uFF0Cali-react-table \u8FD8\u63D0\u4F9B\u4E86\u8BB8\u591A\u5B9E\u7528\u529F\u80FD\uFF0C\u5305\u62EC\u8868\u683C\u64CD\u4F5C\u680F\u3001Excel \u5BFC\u51FA\u529F\u80FD\u7B49\uFF08\u90E8\u5206\u62D3\u5C55\u529F\u80FD\u9700\u8981\u5B89\u88C5 fusion \u7EC4\u4EF6\u5E93\uFF09\u3002\u7EC4\u4EF6\u5DF2\u7ECF",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"https://github.com/alibaba/ali-react-table"}),"\u5728 GitHub \u4E0A\u5F00\u6E90"),"\uFF0C\u540E\u7EED\u6211\u4EEC\u4E5F\u4F1A\u4E0D\u65AD\u66F4\u65B0\u548C\u7EF4\u62A4 ali-react-table \u7684\u6587\u6863\uFF0C\u6DFB\u52A0\u66F4\u591A\u7684\u4EE3\u7801\u793A\u4F8B\uFF0C\u6B22\u8FCE\u5927\u5BB6\u4F7F\u7528~"));};MDXContent.isMDXComponent=true;

/***/ })

}]);