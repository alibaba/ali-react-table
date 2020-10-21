(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

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

/***/ 97:
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
var frontMatter={id:'cross-table',title:'交叉表'};var metadata={"unversionedId":"pivot/cross-table","id":"pivot/cross-table","isDocsHomePage":false,"title":"交叉表","description":"交叉表是一个比较底层的 React 组件，仅提供相应表格结构的渲染能力。注意交叉表...","source":"@site/docs/pivot/cross-table.mdx","slug":"/pivot/cross-table","permalink":"/docs/pivot/cross-table","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pivot/cross-table.mdx","version":"current","sidebar":"sidebar","previous":{"title":"通用工具函数","permalink":"/docs/tools/utils"},"next":{"title":"交叉树状表格","permalink":"/docs/pivot/cross-tree-table"}};/* @jsx mdx */var rightToc=[{value:'主要特性',id:'主要特性',children:[]},{value:'基本用法',id:'基本用法',children:[]},{value:'leftTree 的结构',id:'lefttree-的结构',children:[]},{value:'topTree 的结构',id:'toptree-的结构',children:[]},{value:'其他 props',id:'其他-props',children:[]},{value:'复杂场景下的交叉表',id:'复杂场景下的交叉表',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EA4\u53C9\u8868\u662F\u4E00\u4E2A\u6BD4\u8F83\u5E95\u5C42\u7684 React \u7EC4\u4EF6\uFF0C\u4EC5\u63D0\u4F9B\u76F8\u5E94\u8868\u683C\u7ED3\u6784\u7684\u6E32\u67D3\u80FD\u529B\u3002\u6CE8\u610F\u4EA4\u53C9\u8868..."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("em",{parentName:"strong"},"\u6CA1\u6709"))," \u900F\u89C6\u80FD\u529B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("em",{parentName:"strong"},"\u6CA1\u6709"))," \u6536\u62E2\u5C55\u5F00\u529F\u80FD")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"主要特性"},"\u4E3B\u8981\u7279\u6027"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4E0D\u4F9D\u8D56\u7279\u5B9A\u7EC4\u4EF6\u5E93\uFF0C\u53EF\u72EC\u7ACB\u4F7F\u7528"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u7B80\u5355\u3001\u4E00\u81F4\u7684 API \u4E0E\u6E32\u67D3\u6A21\u578B\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"strong"},"\u5DE6\u6811 + \u4E0A\u6811 => \u8868\u683C"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u9AD8\u6027\u80FD\uFF1A\u6570\u636E\u91CF\u8F83\u5927\u65F6\uFF0C\u81EA\u52A8\u5F00\u542F\u865A\u62DF\u6EDA\u52A8")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"基本用法"},"\u57FA\u672C\u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u7B80\u5355\u7684\u573A\u666F\u4E0B\uFF0C\u4EA4\u53C9\u8868\u7684\u7528\u6CD5\u5F88\u7B80\u5355\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"leftTree")," \u63CF\u8FF0\u8868\u683C\u5DE6\u4FA7\u7684\u6811\u72B6\u7ED3\u6784\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"topTree")," \u63CF\u8FF0\u8868\u683C\u4E0A\u65B9\u7684\u6811\u72B6\u7ED3\u6784\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"getValue")," \u6765\u5B9A\u4E49\u6BCF\u4E2A\u5355\u5143\u683C\u7684\u5185\u5BB9\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4EA4\u53C9\u8868\u7EC4\u4EF6\u4F1A\u6839\u636E leftTree/topTree \u6765\u6E32\u67D3\u8868\u683C\u7ED3\u6784\uFF0C\u5E76\u8C03\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"getValue")," \u83B7\u53D6\u5355\u5143\u683C\u7684\u5185\u5BB9")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),"<CrossTable\n  // \u63A8\u8350\u4E3A\u4EA4\u53C9\u8868\u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u5217\u5BBD\n  defaultColumnWidth={100}\n  leftTree={leftTree}\n  topTree={topTree}\n  getValue={(leftNode, topNode) => {\n    // \u81EA\u5B9A\u4E49\u7684\u53D6\u6570\u903B\u8F91\uFF0C\u9488\u5BF9\u6BCF\u4E2A\u5355\u5143\u683C\u90FD\u4F1A\u8C03\u7528\u4E00\u6B21\n    // leftNode \u8868\u793A\u5F53\u524D\u5355\u5143\u683C\u5BF9\u5E94\u7684\u5DE6\u4FA7\u6811\u8282\u70B9\uFF0CtopNode \u662F\u5BF9\u5E94\u7684\u4E0A\u65B9\u6811\u8282\u70B9\n  }}\n  render={(value, leftNode, topNode) => {\n    // \u53EF\u9009\u7684 \u81EA\u5B9A\u4E49\u7684\u6E32\u67D3\u903B\u8F91\n    return value\n  }}\n/>\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function BasicUsage() {\n  const leftTree = [\n    {\n      key: 'forenoon',\n      value: '\u4E0A\u5348',\n      children: [\n        { key: '9', value: '9:00-10:00' },\n        { key: '10', value: '10:00-11:00' },\n        { key: '11', value: '11:00-12:00' },\n      ],\n    },\n    { key: 'lunch', value: '\u5348\u9910' },\n    {\n      key: 'afternoon',\n      value: '\u4E0B\u5348',\n      children: [\n        { key: '14', value: '14:00-15:00' },\n        { key: '15', value: '15:00-16:00' },\n        { key: '16', value: '16:00-17:00' },\n      ],\n    },\n    { key: 'dinner', value: '\u665A\u9910' },\n    {\n      key: 'evening',\n      value: '\u665A\u4E0A',\n      children: [\n        { key: '20', value: '20:00-21:00' },\n        { key: '21', value: '21:00-22:00' },\n      ],\n    },\n  ]\n\n  const makeTopChildren = (keyPrefix) => [\n    { key: `${keyPrefix}-week-0`, value: '\u7B2C\u4E00\u5468', width: 80 },\n    { key: `${keyPrefix}-week-1`, value: '\u7B2C\u4E8C\u5468', width: 80 },\n    { key: `${keyPrefix}-week-2`, value: '\u7B2C\u4E09\u5468', width: 80 },\n    { key: `${keyPrefix}-week-3`, value: '\u7B2C\u56DB\u5468', width: 80 },\n  ]\n  const topTree = [\n    { key: '2020-01', value: '2020-01', children: makeTopChildren('2020-01') },\n    { key: '2020-02', value: '2020-02', children: makeTopChildren('2020-02') },\n    { key: '2020-03', value: '2020-03', children: makeTopChildren('2020-03') },\n    { key: '2020-04', value: '2020-04', children: makeTopChildren('2020-04') },\n    { key: '2020-05', value: '2020-05', children: makeTopChildren('2020-05') },\n    { key: '2020-06', value: '2020-06', children: makeTopChildren('2020-06') },\n  ]\n\n  const getValue = (leftNode, topNode) => {\n    if (leftNode.key === 'lunch') {\n      if (topNode.key.endsWith('week-0')) {\n        return '\u80AF\u5FB7\u57FA'\n      } else if (topNode.key.endsWith('week-1')) {\n        return '\u9EA6\u5F53\u52B3'\n      } else if (topNode.key.endsWith('week-2')) {\n        return '\u6C49\u5821\u738B'\n      } else {\n        return '\u70E7\u70E4'\n      }\n    } else if (leftNode.key === 'dinner') {\n      if (topNode.key.endsWith('week-0')) {\n        return '\u76D2\u9A6C'\n      } else if (topNode.key.endsWith('week-1')) {\n        return '\u6D77\u5E95\u635E'\n      } else if (topNode.key.endsWith('week-2')) {\n        return '\u9EA6\u5F53\u52B3'\n      } else {\n        return '\u4F53\u91CD+1'\n      }\n    }\n  }\n\n  return (\n    <div>\n      <p style={{ fontSize: 16, marginTop: 0 }}>2020\u5E74 \u517B\u732A\u8BA1\u5212</p>\n      <CrossTable\n        defaultColumnWidth={100}\n        leftTree={leftTree}\n        topTree={topTree}\n        // \u81EA\u5B9A\u4E49\u7684\u53D6\u6570\u903B\u8F91\n        getValue={getValue}\n        // \u53EF\u9009\u7684 \u81EA\u5B9A\u4E49\u7684\u6E32\u67D3\u903B\u8F91\n        render={(value, leftNode, topNode) => {\n          return value\n        }}\n      />\n    </div>\n  )\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"lefttree-的结构"},"leftTree \u7684\u7ED3\u6784"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EA4\u53C9\u8868\u5DE6\u4FA7\u7684\u6811\uFF08leftTree\uFF09\u662F\u4E00\u4E2A\u6811\u8282\u70B9\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u6811\u8282\u70B9\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"/** \u4EA4\u53C9\u8868\u5DE6\u4FA7\u6216\u4E0A\u65B9\u7684\u6811\u8282\u70B9\u57FA\u7C7B */\ninterface CrossTreeNode {\n  key: string\n  value: string\n  title?: ReactNode\n  data?: any\n  hidden?: boolean\n  children?: CrossTreeNode[]\n}\n\n/** \u4EA4\u53C9\u8868\u5DE6\u4FA7\u6811\u72B6\u7ED3\u6784\u7684\u6811\u8282\u70B9 */\ninterface LeftCrossTreeNode extends CrossTreeNode {\n  children?: CrossTreeNode[]\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4E3B\u8981\u5C5E\u6027\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"key")," \u7528\u4E8E\u5728\u6811\u4E2D\u552F\u4E00\u6807\u8BB0\u4E00\u4E2A\u8282\u70B9\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"value")," \u8868\u793A\u8282\u70B9\u4E2D\u7684\u6587\u672C\u503C\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"children")," \u4E3A\u5B50\u8282\u70B9\u6570\u7EC4\uFF1B"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u53EF\u9009\u5C5E\u6027\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"title")," \u82E5\u975E\u7A7A\uFF0C\u88AB\u6E32\u67D3\u5728\u9875\u9762\u4E2D\u65F6\uFF0C\u8282\u70B9\u5185\u5BB9\u5C06\u7531 title \u63D0\u4F9B",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5728\u4E0D\u662F\u9875\u9762\u6E32\u67D3\u7684\u60C5\u51B5\u4E0B\uFF08\u4F8B\u5982\u5BFC\u51FA\u5230\u6587\u4EF6\uFF09\uFF0Ctitle \u5C06\u88AB\u5FFD\u7565"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"hidden")," \u8868\u793A\u662F\u5426\u9690\u85CF\u8282\u70B9"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"data")," \u4E3A\u9644\u52A0\u5728\u8282\u70B9\u4E0A\u7684\u6570\u636E",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"data")," \u4E2D\u53EF\u4EE5\u653E\u4EFB\u4F55\u5185\u5BB9"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u653E\u5728\u8282\u70B9\u4E2D\u7684\u6570\u636E\uFF0C\u53EF\u5728\u6E32\u67D3\u5355\u5143\u683C\u65F6\u53D6\u51FA\uFF0C\u7528\u4E8E\u51B3\u5B9A\u6E32\u67D3\u7ED3\u679C")))))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"toptree-的结构"},"topTree \u7684\u7ED3\u6784"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"topTree \u7684\u7ED3\u6784\u4E0E leftTree \u7C7B\u4F3C\uFF0C\u4F46\u5176\u6811\u8282\u70B9\u7684\u914D\u7F6E\u8F83\u4E3A\u4E30\u5BCC\uFF0C\u7ED3\u6784\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"/** \u4EA4\u53C9\u8868\u4E0A\u65B9\u6811\u72B6\u7ED3\u6784\u7684\u6811\u8282\u70B9\n * \u5217\u7684\u540D\u79F0\u73B0\u7531 value \u5B57\u6BB5\u63D0\u4F9B\uFF0C\u6545\u4ECE ArtColumnStaticPart \u79FB\u9664\u4E86 name \u5B57\u6BB5 */\ninterface TopCrossTreeNode extends CrossTreeNode, Omit<ArtColumnStaticPart, 'name'> {\n  children?: TopCrossTreeNode[]\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4E0A\u65B9\u7684\u6811\u8282\u70B9\u7EE7\u627F\uFF08extends\uFF09\u4E86\u5DE6\u4FA7\u6811\u8282\u70B9\u7684\u7ED3\u6784\uFF0C\u62E5\u6709\u76F8\u540C\u7684 key/value/data/title/hidden/children \u5B57\u6BB5\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EA4\u53C9\u8868\u5E95\u5C42\u4F7F\u7528\u4E86 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"BaseTable")," \u8FDB\u884C\u6E32\u67D3\uFF0C\u800C ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"BaseTable")," \u4E2D\u4E3B\u8981\u7684\u8868\u683C\u914D\u7F6E\u662F\u653E\u5728\u6BCF\u4E00\u5217\u4E4B\u4E0A\u7684\u3002\u5728 topTree \u4E2D\uFF0C\u6BCF\u4E2A\u53F6\u5B50\u8282\u70B9\u90FD\u5BF9\u5E94\u7684\u4E86\u8868\u683C\u4E2D\u7684\u4E00\u5217\uFF0C\u6240\u4EE5\u6BCF\u4E2A\u8282\u70B9\u9664\u4E86\u5305\u542B key/value/data/children \u4E4B\u5916\uFF0C\u8FD8\u5305\u542B\u4E86\u90E8\u5206\u5217\u914D\u7F6E\uFF08\u5373 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"ArtColumnStaticPart"),"\uFF09\u3002",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"ArtColumnStaticPart")," \u7684\u7ED3\u6784\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"name")," \u5217\u7684\u540D\u79F0\uFF1B\u6CE8\u610F\u56E0\u4E3A\u6811\u8282\u70B9\u5DF2\u7ECF\u542B\u6709 value \u5B57\u6BB5\uFF0C\u6545 name \u5B57\u6BB5\u5728 TopCrossTreeNode \u4E2D\u662F\u4E0D\u8D77\u4F5C\u7528\u7684\uFF09"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"code")," \u5728\u6570\u636E\u4E2D\u7684\u5B57\u6BB5 code\uFF1B\u6CE8\u610F\u4EA4\u53C9\u8868\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 getValue/render \u8FDB\u884C\u53D6\u503C\u6216\u6E32\u67D3\uFF0C\u4F1A\u5C4F\u853D\u6389 code \u7684\u9ED8\u8BA4\u53D6\u503C\u65B9\u5F0F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"title")," \u5217\u6807\u9898\uFF0C\u5982\u679C\u8BE5\u5B57\u6BB5\u975E\u7A7A\uFF0C\u5728\u6E32\u67D3\u65F6\u4F1A\u8986\u76D6 value \u5B57\u6BB5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"width")," \u5217\u7684\u5BBD\u5EA6"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"align")," \u5355\u5143\u683C\u4E2D\u7684\u6587\u672C\u6216\u5185\u5BB9\u7684 \u5BF9\u5176\u65B9\u5411"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"hidden")," \u662F\u5426\u9501\u5217\uFF1B",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"\u4E0D\u63A8\u8350"),"\u4E3A\u4EA4\u53C9\u8868\u7684\u6570\u636E\u5217\u8BBE\u7F6E\u9690\u85CF"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"lock")," \u662F\u5426\u9501\u5217\uFF1B",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"\u4E0D\u63A8\u8350"),"\u4E3A\u4EA4\u53C9\u8868\u7684\u6570\u636E\u5217\u8BBE\u7F6E\u9501\u5217"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"features")," \u529F\u80FD\u5F00\u5173")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"其他-props"},"\u5176\u4ED6 props"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EA4\u53C9\u8868\u7684\u5E95\u5C42\u4F9D\u8D56\u4E86 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"BaseTable"),"\uFF0C\u6545\u4E24\u8005\u7684 props \u5927\u90E8\u5206\u662F\u76F8\u540C\u7684\u3002\u4E24\u8005\u7684\u4E0D\u540C\u70B9\u5177\u4F53\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4EA4\u53C9\u8868\u6CA1\u6709 dataSource \u548C columns",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8868\u683C\u7ED3\u6784\u7531 leftTree \u548C rightTree \u63D0\u4F9B\uFF0C\u800C\u5355\u5143\u683C\u5185\u5BB9\u7531 getValue \u63D0\u4F9B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5355\u5143\u683C\u6E32\u67D3\u5185\u5BB9\u53EF\u4F7F\u7528 render \u8FDB\u884C\u81EA\u5B9A\u4E49\uFF1B\u5355\u5143\u683C\u7684 props\uFF08\u5373\u8868\u683C\u5185\u7684 td \u5143\u7D20\uFF09\u53EF\u4F7F\u7528 getCellProps \u8FDB\u884C\u81EA\u5B9A\u4E49"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4EA4\u53C9\u8868\u6CA1\u6709 primaryKey",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4EA4\u53C9\u8868\u5DE6\u4FA7\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684 key \u503C\uFF0C\u6545\u4E0D\u518D\u9700\u8981\u4E0A\u5C42\u6307\u5B9A primaryKey"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5176\u4ED6\u65B0\u589E\u7684 props",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4EA4\u53C9\u8868\u4F7F\u7528 leftMetaColumns \u6765\u63CF\u8FF0 leftTree \u6240\u5904\u7684\u5217\u7684\u914D\u7F6E",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4EA4\u53C9\u8868\u6E32\u67D3\u65F6\uFF0C\u5DE6\u4FA7\u7684\u6811\u4F1A\u5360\u636E\u8868\u683C\u7684\u524D\u51E0\u5217\uFF0C\u5E76\u81EA\u52A8\u8BBE\u7F6E lock=true\uFF0CleftMetaColumns \u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u8FD9\u4E9B\u5217"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"leftTotalNode\uFF1A\u5F53 leftTree \u4E3A\u7A7A\u65F6\uFF0CleftTotalNode \u7528\u4E8E\u6E32\u67D3\u300C\u603B\u8BA1\u884C\u300D\uFF0C\u907F\u514D\u8868\u683C\u4E2D\u6CA1\u6709\u6570\u636E\u884C"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"topTotalNode\uFF1A\u5F53 topTree \u4E3A\u7A7A\u65F6\uFF0CtopTotalNode \u7528\u4E8E\u6E32\u67D3\u300C\u603B\u8BA1\u5217\u300D\uFF0C\u907F\u514D\u8868\u683C\u4E2D\u6CA1\u6709\u6570\u636E\u5217")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EA4\u53C9\u8868\u7684 props \u5177\u4F53\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"interface CrossTableProps extends Omit<BaseTableProps, 'dataSource' | 'columns' | 'primaryKey'> {\n  leftTree: LeftCrossTreeNode[]\n  topTree: TopCrossTreeNode[]\n  leftMetaColumns?: CrossTableLeftMetaColumn[]\n  leftTotalNode?: LeftCrossTreeNode\n  topTotalNode?: TopCrossTreeNode\n\n  getValue(leftNode: LeftCrossTreeNode, topNode: TopCrossTreeNode, leftDepth: number, topDepth: number): any\n\n  render?(\n    value: any,\n    leftNode: LeftCrossTreeNode,\n    topNode: TopCrossTreeNode,\n    leftDepth: number,\n    topDepth: number,\n  ): ReactNode\n\n  getCellProps?(\n    value: any,\n    leftNode: LeftCrossTreeNode,\n    topNode: TopCrossTreeNode,\n    leftDepth: number,\n    topDepth: number,\n  ): CellProps\n}\n\nexport interface CrossTableLeftMetaColumn extends Omit<ArtColumnStaticPart, 'hidden'> {\n  /** \u81EA\u5B9A\u4E49\u6E32\u67D3\u65B9\u6CD5 */\n  render?(leftNode: LeftCrossTreeNode, leftDepth: number): ReactNode\n\n  /** \u81EA\u5B9A\u4E49\u7684\u83B7\u53D6\u5355\u5143\u683C props \u7684\u65B9\u6CD5 */\n  getCellProps?(leftNode: LeftCrossTreeNode, leftDepth: number): CellProps\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4E0D\u8981\u88AB\u957F\u957F\u7684 TypeScript \u7C7B\u578B\u4EE3\u7801\u5413\u5230\uFF0C\u4EA4\u53C9\u8868\u7684 props \u5176\u5B9E\u548C BaseTable \u5DEE\u522B\u4E0D\u5927\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"复杂场景下的交叉表"},"\u590D\u6742\u573A\u666F\u4E0B\u7684\u4EA4\u53C9\u8868"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EA4\u53C9\u8868\u7684\u5DE6\u6811/\u4E0A\u6811\u7684\u7ED3\u6784\u88AB\u8BBE\u8BA1\u4E3A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"{ key, value, children }")," \u7684\u7B80\u5355\u7ED3\u6784\uFF0C\u65B9\u4FBF\u4E0A\u5C42\u8C03\u7528\u8005\u80FD\u591F\u4ECE\u4E0D\u540C\u7684\u6570\u636E\u6E90\u4E2D\u751F\u6210 leftTree/topTree\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u590D\u6742\u573A\u666F\u4E0B\uFF0C\u9700\u8981\u4E0A\u5C42\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u624B\u52A8\u751F\u6210 leftTree/topTree/getValue\u3002ali-react-table \u4E5F\u63D0\u4F9B\u4E86\u4E00\u5B9A\u7684\u900F\u89C6\u80FD\u529B\uFF0C\u53EF\u5728\u4EA4\u53C9\u8868\u7684\u57FA\u7840\u4E0A\u5B9E\u73B0\u524D\u7AEF\u805A\u5408\u7684\u900F\u89C6\u8868\uFF0C\u53EF\u4F9B\u4F7F\u7528\u548C\u53C2\u8003\u3002"));};MDXContent.isMDXComponent=true;

/***/ })

}]);