(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ 177:
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

/***/ 88:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(177);
var frontMatter={id:'proto',title:'proto'};var metadata={"unversionedId":"tools/proto","id":"tools/proto","isDocsHomePage":false,"title":"proto","description":"在实际开发中过程中，一个表格可能会包含大量维度和指标（在盒马内部，超过 50 列的表格十分常见），列配置的书写工作量会很大。这其中很多的列往往具有相同的宽度、对齐方向或是类似的格式化方法，重复配置较多。ali-react-table 导出了 proto 来简化这些重复配置的书写，有效减少列配置的工作量。","source":"@site/docs/tools/proto.mdx","slug":"/tools/proto","permalink":"/docs/tools/proto","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/tools/proto.mdx","version":"current","sidebar":"sidebar","previous":{"title":"Internal Getters","permalink":"/docs/tools/internals"},"next":{"title":"通用工具函数","permalink":"/docs/tools/utils"}};/* @jsx mdx */var rightToc=[{value:'创建对象原型',id:'创建对象原型',children:[]},{value:'创建数组原型',id:'创建数组原型',children:[]},{value:'嵌套原型',id:'嵌套原型',children:[]},{value:'<code>proto.string</code> 与 <code>proto.number</code>',id:'protostring-与-protonumber',children:[]},{value:'原型的继承',id:'原型的继承',children:[]},{value:'<code>proto.empty</code>',id:'protoempty',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u8FC7\u7A0B\u4E2D\uFF0C\u4E00\u4E2A\u8868\u683C\u53EF\u80FD\u4F1A\u5305\u542B\u5927\u91CF\u7EF4\u5EA6\u548C\u6307\u6807\uFF08\u5728\u76D2\u9A6C\u5185\u90E8\uFF0C\u8D85\u8FC7 50 \u5217\u7684\u8868\u683C\u5341\u5206\u5E38\u89C1\uFF09\uFF0C\u5217\u914D\u7F6E\u7684\u4E66\u5199\u5DE5\u4F5C\u91CF\u4F1A\u5F88\u5927\u3002\u8FD9\u5176\u4E2D\u5F88\u591A\u7684\u5217\u5F80\u5F80\u5177\u6709\u76F8\u540C\u7684\u5BBD\u5EA6\u3001\u5BF9\u9F50\u65B9\u5411\u6216\u662F\u7C7B\u4F3C\u7684\u683C\u5F0F\u5316\u65B9\u6CD5\uFF0C\u91CD\u590D\u914D\u7F6E\u8F83\u591A\u3002",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"ali-react-table")," \u5BFC\u51FA\u4E86 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto")," \u6765\u7B80\u5316\u8FD9\u4E9B\u91CD\u590D\u914D\u7F6E\u7684\u4E66\u5199\uFF0C\u6709\u6548\u51CF\u5C11\u5217\u914D\u7F6E\u7684\u5DE5\u4F5C\u91CF\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6CE8\uFF1A\u672C\u9875\u6587\u6863\u4E2D\uFF0C\u300C\u539F\u578B\u300D\u6307\u7684\u662F\u4F7F\u7528 proto \u521B\u5EFA\u51FA\u6765\u7684\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u6307 JavaScript \u4E2D\u7684\u51FD\u6570\u539F\u578B\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"创建对象原型"},"\u521B\u5EFA\u5BF9\u8C61\u539F\u578B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto.object(baseObject)")," \u662F\u4E00\u4E2A\u5DE5\u5382\u65B9\u6CD5\uFF0C\u63A5\u53D7\u4E00\u4E2A\u57FA\u7840\u5BF9\u8C61 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"baseRecord"),"\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF1B\u8C03\u7528\u8BE5\u51FD\u6570\u65F6\uFF0C\u5C06\u4EE5 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"baseRecord")," \u4E3A\u300C\u539F\u578B\u300D\u5E76\u6839\u636E\u8F93\u5165\u7684\u53C2\u6570\u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"columnProto"),"\uFF0C\u5E76\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"columnProto")," \u6765\u751F\u6210\u5176\u4ED6\u7684\u5217\uFF0C\u907F\u514D\u4E66\u5199\u76F8\u540C\u7684\u9ED8\u8BA4\u914D\u7F6E\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),"import { proto } from 'ali-react-table'\n\nconst columnProto = proto.object({ width: 120, align: 'right' })\n\nconst col1 = columnProto({})\n// \u53C2\u6570\u4E3A\u7A7A\u5BF9\u8C61\uFF0C\u5219\u6240\u6709\u5B57\u6BB5\u90FD\u6765\u81EA\u4E8E baseRecord\n// { width: 120, align: 'right' }\n\nconst col2 = columnProto({ width: 150 })\n// \u53C2\u6570\u63D0\u4F9B\u4E86 width \u5B57\u6BB5\uFF0C\u5176\u4ED6\u5B57\u6BB5\u6765\u81EA\u4E8E baseRecord\n// { width: 150, align: 'right' }\n\nconst col3 = columnProto({ code: 'code-1', align: 'left', lock: false })\n// { code: 'code-1', align: 'left', lock: false, width: 120 }\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"创建数组原型"},"\u521B\u5EFA\u6570\u7EC4\u539F\u578B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto.array(baseRecord)")," \u4E0E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto.object")," \u975E\u5E38\u7C7B\u4F3C\uFF0C\u4E5F\u4F1A\u751F\u6210\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F46\u51FD\u6570\u7684\u8F93\u5165\u53C2\u6570\u4E3A\u4E00\u4E2A\u6570\u7EC4\u3002\u8BE5\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0C\u4F1A\u904D\u5386\u8F93\u5165\u7684\u6570\u7EC4\uFF0C\u5E76\u6839\u636E baseRecord \u6765\u751F\u6210\u5BF9\u8C61\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),"import { proto } from 'ali-react-table'\n\nconst columnProto = proto.array({ width: 120, align: 'right', format: amount })\n\nconst columns = columnProto([\n  { code: 'code-1' },\n  { code: 'code-2' },\n  { code: 'code-3', width: 200 },\n  { code: 'code-4', align: 'left' },\n])\n// [\n//   { code: 'code-1', width: 120, align: 'right', format: amount },\n//   { code: 'code-2', width: 120, align: 'right', format: amount },\n//   { code: 'code-3', width: 200, align: 'right', format: amount },\n//   { code: 'code-4', width: 120, align: 'left',  format: amount }\n// ]\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"嵌套原型"},"\u5D4C\u5957\u539F\u578B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u751F\u6210\u5BF9\u8C61\u539F\u578B\u6216\u6570\u7EC4\u539F\u578B\u65F6\uFF0CbaseRecord \u4E2D\u7684\u5B57\u6BB5\u503C(",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"subProto"),")\u4E5F\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u539F\u578B\u6216\u6570\u7EC4\u539F\u578B\uFF0C\u751F\u6210\u65B0\u5BF9\u8C61\u65F6 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"subProto")," \u5C06\u88AB\u8C03\u7528\u7528\u4E8E\u5BF9\u5E94\u5B57\u6BB5\u7684\u503C\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),"const columnProto = proto.array({\n  width: 120,\n  align: 'right',\n  features: proto.object({ defaultVisible: true }),\n})\n\nconst columns = columnProto([\n  { code: 'code-1' },\n  { code: 'code-2', features: { defaultVisible: false } },\n  { code: 'code-3', features: { sortable: true } },\n])\n// [\n//   { code: 'code-1', width: 120, align: 'right', features: { defaultVisible: true } },\n//   { code: 'code-2', width: 120, align: 'right', features: { defaultVisible: false } },\n//   { code: 'code-3', width: 120, align: 'right', features: { defaultVisible: true, sortable: true } },\n// ]\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"protostring-与-protonumber"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h2"},"proto.string")," \u4E0E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h2"},"proto.number")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6709\u7684\u65F6\u5019\u67D0\u4E2A\u5B57\u6BB5\u5E76\u6CA1\u6709\u9ED8\u8BA4\u503C\uFF0C\u4F46\u6211\u4EEC\u53C8\u5E0C\u671B\u521B\u5EFA\u51FA\u6765\u7684\u5BF9\u8C61\u5FC5\u987B\u5305\u542B\u67D0\u4E2A\u5BF9\u8C61\uFF0C\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto.string")," \u6216 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto.number")," \u6765\u521B\u5EFA\u539F\u578B\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),"const columnProto = proto.array({\n  code: proto.string,\n  width: proto.number,\n  align: 'right',\n})\n\n// \u8C03\u7528 columnProto \u65F6\uFF0C\u8F93\u5165\u53C2\u6570\u4E2D\u7684 code \u5B57\u6BB5\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\uFF0Cwidth \u5B57\u6BB5\u5FC5\u987B\u4E3A\u6570\u5B57\nconst columns = columnProto([\n  { code: 'code-1', width: 100 },\n  { code: 'code-2', width: 120, features: { defaultVisible: false } },\n  { code: 'code-3', width: 120, features: { sortable: true } },\n])\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6B64\u5916\uFF0C",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto.notNull")," \u7528\u4E8E\u786E\u4FDD\u8F93\u5165\u53C2\u6570\u4E2D\u67D0\u4E2A\u5B57\u6BB5\u4E0D\u80FD\u4E3A null/undefine\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"原型的继承"},"\u539F\u578B\u7684\u7EE7\u627F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto.object")," / ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto.array")," \u751F\u6210\u7684\u5BF9\u8C61\u4E0A\u6709\u4E00\u4E2A extends \u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u5DF2\u6709\u7684\u539F\u578B\u57FA\u7840\u4E0A\u751F\u6210\u65B0\u7684\u539F\u578B\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),"const column = proto.object({ width: 120, align: 'left' })\nconst alignRightColumn = column.extends({ align: 'right' })\nconst wideColumn = column.extends({ width: 200 })\n\nconst col1 = alignRightColumn({}) // { align: \"right\", width: 120 }\n\nconst col2 = wideColumn({}) // { width: 200, align: \"left\" }\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u7528\u7EE7\u627F\u7684\u539F\u578B\u751F\u6210\u6700\u7EC8\u7684\u5BF9\u8C61\u65F6\uFF0C\u4F1A\u5148\u6839\u636E\u7EE7\u627F\u7684\u914D\u7F6E\u5904\u7406\u6570\u636E\uFF0C\u7136\u540E\u8C03\u7528\u57FA\u7840\u7684\u914D\u7F6E\u5904\u7406\u6570\u636E\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"protoempty"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h2"},"proto.empty")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"proto.empty")," \u662F\u4E00\u4E2A\u7279\u6B8A\u7684 symbol\uFF0C\u5176\u4F5C\u7528\u662F\u4ECE\u7ED3\u679C\u4E2D\u79FB\u9664\u7279\u5B9A\u5B57\u6BB5\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),"const columnProto = proto.array({\n  width: 120,\n  align: 'right',\n  features: proto.object({ defaultVisible: true }),\n})\n\nconst columns = columnProto([\n  { code: 'code-1' },\n  { code: 'code-2', align: proto.empty },\n  { code: 'code-3', features: proto.empty },\n])\n// [\n//   { code: 'code-1', width: 120, align: 'right', features: { defaultVisible: true } },\n//   { code: 'code-2', width: 120, features: { defaultVisible: true } },\n//   { code: 'code-3', width: 120, align: 'right' },\n// ]\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);