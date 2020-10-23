(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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

/***/ 81:
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
var frontMatter={id:'cross-tree-table',title:'交叉树状表格'};var metadata={"unversionedId":"pivot/cross-tree-table","id":"pivot/cross-tree-table","isDocsHomePage":false,"title":"交叉树状表格","description":"交叉树状表格（CrossTreeTable）与交叉表（CrossTable）类似，但在表格左侧提供了树状展开/收拢的能力，更适用于日常业务开发。","source":"@site/docs/pivot/cross-tree-table.mdx","slug":"/pivot/cross-tree-table","permalink":"/docs/pivot/cross-tree-table","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pivot/cross-tree-table.mdx","version":"current","sidebar":"sidebar","previous":{"title":"交叉表","permalink":"/docs/pivot/cross-table"},"next":{"title":"透视工具","permalink":"/docs/pivot/pivot-utils"}};/* @jsx mdx */var rightToc=[{value:'主要特性',id:'主要特性',children:[]},{value:'用法',id:'用法',children:[]},{value:'leftTree 的结构 / topTree 的结构',id:'lefttree-的结构--toptree-的结构',children:[]},{value:'其他 props',id:'其他-props',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EA4\u53C9\u6811\u72B6\u8868\u683C\uFF08CrossTreeTable\uFF09\u4E0E\u4EA4\u53C9\u8868\uFF08CrossTable\uFF09\u7C7B\u4F3C\uFF0C\u4F46\u5728\u8868\u683C\u5DE6\u4FA7\u63D0\u4F9B\u4E86\u6811\u72B6\u5C55\u5F00/\u6536\u62E2\u7684\u80FD\u529B\uFF0C\u66F4\u9002\u7528\u4E8E\u65E5\u5E38\u4E1A\u52A1\u5F00\u53D1\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"主要特性"},"\u4E3B\u8981\u7279\u6027"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4E0D\u4F9D\u8D56\u7279\u5B9A\u7EC4\u4EF6\u5E93\uFF0C\u53EF\u72EC\u7ACB\u4F7F\u7528"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u7B80\u5355\u3001\u4E00\u81F4\u7684 API \u4E0E\u6E32\u67D3\u6A21\u578B\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"strong"},"\u5DE6\u6811 + \u4E0A\u6811 => \u8868\u683C"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u9AD8\u6027\u80FD\uFF1A\u6570\u636E\u91CF\u8F83\u5927\u65F6\uFF0C\u81EA\u52A8\u5F00\u542F\u865A\u62DF\u6EDA\u52A8")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"用法"},"\u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"CrossTreeTable \u4E3B\u8981\u7531\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\u7EC4\u6210\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"primaryColumn")," \u63CF\u8FF0\u8868\u683C\u7B2C\u4E00\u5217"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"leftTree")," \u63CF\u8FF0\u8868\u683C\u5DE6\u4FA7\u7684\u6811\u72B6\u7ED3\u6784\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"topTree")," \u63CF\u8FF0\u8868\u683C\u4E0A\u65B9\u7684\u6811\u72B6\u7ED3\u6784\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"getValue")," \u6765\u5B9A\u4E49\u6BCF\u4E2A\u5355\u5143\u683C\u5185\u5BB9\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"CrossTreeTable \u4F1A\u6839\u636E leftTree/topTree \u6765\u6E32\u67D3\u8868\u683C\u7ED3\u6784\uFF0C\u5E76\u8C03\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"getValue")," \u83B7\u53D6\u5355\u5143\u683C\u7684\u5185\u5BB9")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),"// prettier-ignore\n<CrossTreeTable\n  // \u63A8\u8350\u4E3A CrossTreeTable \u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u5217\u5BBD\n  defaultColumnWidth={100}\n\n  // \u975E\u53D7\u63A7\u7528\u6CD5\n  defaultOpenKeys={[leftTree[0].key]}\n\n  // \u53D7\u63A7\u7528\u6CD5\n  // openKeys={openKeys}\n  // onChangeOpenKeys={nextOpenKeys => { /* update openKeys */ }}\n\n  // \u8868\u683C\u7B2C\u4E00\u5217\u7684\u914D\u7F6E\n  primaryColumn={{ lock: true, name: '\u6570\u636E\u7EF4\u5EA6', width: 200 }}\n\n  leftTree={leftTree}\n  topTree={topTree}\n  getValue={(leftNode, topNode) => {\n    // \u81EA\u5B9A\u4E49\u7684\u53D6\u6570\u903B\u8F91\uFF0C\u9488\u5BF9\u6BCF\u4E2A\u5355\u5143\u683C\u90FD\u4F1A\u8C03\u7528\u4E00\u6B21\n    // leftNode \u8868\u793A\u5F53\u524D\u5355\u5143\u683C\u5BF9\u5E94\u7684\u5DE6\u4FA7\u6811\u8282\u70B9\uFF0CtopNode \u662F\u5BF9\u5E94\u7684\u4E0A\u65B9\u6811\u8282\u70B9\n  }}\n\n  // \u53EF\u9009\u7684\u81EA\u5B9A\u4E49\u7684\u6E32\u67D3\u903B\u8F91\n  render={(value, leftNode, topNode) => {\n    return value\n  }}\n/>\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function BasicCrossTreeTableUsage() {\n  const leftTree = [\n    {\n      key: 'forenoon',\n      value: '\u4E0A\u5348',\n      data: { parent: true },\n      children: [\n        { key: '9', value: '9:00-10:00', data: { x: 0 } },\n        { key: '10', value: '10:00-11:00', data: { x: 1 } },\n        { key: '11', value: '11:00-12:00', data: { x: 2 } },\n      ],\n    },\n    {\n      key: 'afternoon',\n      value: '\u4E0B\u5348',\n      data: { parent: true },\n      children: [\n        { key: '14', value: '14:00-15:00', data: { x: 3 } },\n        { key: '15', value: '15:00-16:00', data: { x: 4 } },\n        { key: '16', value: '16:00-17:00', data: { x: 5 } },\n      ],\n    },\n    {\n      key: 'evening',\n      value: '\u665A\u4E0A',\n      data: { parent: true },\n      children: [\n        { key: '20', value: '20:00-21:00', data: { x: 7 } },\n        { key: '21', value: '21:00-22:00', data: { x: 8 } },\n      ],\n    },\n  ]\n  const makeTopChildren = (keyPrefix) => [\n    { key: `${keyPrefix}-week-0`, value: '\u7B2C\u4E00\u5468', data: { y: 0 } },\n    { key: `${keyPrefix}-week-1`, value: '\u7B2C\u4E8C\u5468', data: { y: 1 } },\n    { key: `${keyPrefix}-week-2`, value: '\u7B2C\u4E09\u5468', data: { y: 2 } },\n    { key: `${keyPrefix}-week-3`, value: '\u7B2C\u56DB\u5468', data: { y: 3 } },\n  ]\n  const topTree = [\n    { key: '2020-01', value: '2020-01', children: makeTopChildren('2020-01') },\n    { key: '2020-02', value: '2020-02', children: makeTopChildren('2020-02') },\n    { key: '2020-03', value: '2020-03', children: makeTopChildren('2020-03') },\n    { key: '2020-04', value: '2020-04', children: makeTopChildren('2020-04') },\n    { key: '2020-05', value: '2020-05', children: makeTopChildren('2020-05') },\n    { key: '2020-06', value: '2020-06', children: makeTopChildren('2020-06') },\n  ]\n  const getValue = (leftNode, topNode) => {\n    if (leftNode.data.parent) {\n      const map = {\n        forenoon: '\u4E07\u4E8B\u5F00\u5934\u96BE',\n        afternoon: '\u7136\u540E\u4E2D\u95F4\u96BE',\n        evening: '\u6700\u540E\u7ED3\u675F\u96BE',\n      }\n      return map[leftNode.key]\n    }\n    const courses = ['\u6570\u5B66', '\u82F1\u8BED', '\u8BA1\u7B97\u673A\u57FA\u7840', '\u6570\u636E\u7ED3\u6784', '\u7EBF\u6027\u4EE3\u6570', '\u5FAE\u79EF\u5206', '\u6982\u7387\u8BBA']\n    const i = (leftNode.data.x + topNode.data.y) % courses.length\n    return courses[i]\n  }\n  return (\n    <div>\n      <p style={{ fontSize: 16, marginTop: 0 }}>2020\u5E74 \u5B66\u4E60\u8BA1\u5212</p>\n      <CrossTreeTable\n        // \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\n        defaultOpenKeys={[leftTree[0].key]}\n        // \u53D7\u63A7\u7528\u6CD5\uFF1A\n        // const [openKeys, onChangeOpenKeys] = useState([leftTree[0].key])\n        // openKeys={openKeys}\n        // onChangeOpenKeys={onChangeOpenKeys}\n        // \u8868\u683C\u7B2C\u4E00\u5217\u7684\u914D\u7F6E\n        primaryColumn={{ lock: true, name: '\u6570\u636E\u7EF4\u5EA6', width: 200 }}\n        defaultColumnWidth={100}\n        leftTree={leftTree}\n        topTree={topTree}\n        getValue={getValue}\n      />\n    </div>\n  )\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"lefttree-的结构--toptree-的结构"},"leftTree \u7684\u7ED3\u6784 / topTree \u7684\u7ED3\u6784"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"leftTree/topTree \u90FD\u662F\u4E00\u4E2A\u5177\u6709 key/value/children \u5D4C\u5957\u7ED3\u6784\u7684\u6570\u7EC4\uFF0C\u8BE6\u89C1 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"cross-table"}),"\u4EA4\u53C9\u8868\u6587\u6863"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6CE8\u610F CrossTreeTable \u5BF9\u4E8E leftTree \u548C topTree \u7684\u5904\u7406\u6709\u6240\u4E0D\u540C\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"leftTree \u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u5BF9\u5E94\u8868\u683C\u4E2D\u7684\u4E00\u884C\uFF0C\u5305\u62EC\u53F6\u5B50\u8282\u70B9\u548C\u975E\u53F6\u8282\u70B9"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"topTree \u4E2D\u7684\u53F6\u5B50\u8282\u70B9\u5BF9\u5E94 \u8868\u683C\u4E0A\u7684\u4E00\u5217")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"其他-props"},"\u5176\u4ED6 props"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"CrossTreeTable \u7684\u5E95\u5C42\u4F9D\u8D56\u4E86 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"BaseTable"),"\uFF0C\u6545\u4E24\u8005\u7684 props \u5927\u90E8\u5206\u662F\u76F8\u540C\u7684\u3002\u4E24\u8005\u7684\u4E0D\u540C\u70B9\u5177\u4F53\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"CrossTreeTable \u6CA1\u6709 dataSource \u548C columns",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8868\u683C\u7ED3\u6784\u7531 leftTree \u548C rightTree \u63D0\u4F9B\uFF0C\u800C\u5355\u5143\u683C\u5185\u5BB9\u7531 getValue \u63D0\u4F9B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5355\u5143\u683C\u6E32\u67D3\u5185\u5BB9\u53EF\u4F7F\u7528 render \u8FDB\u884C\u81EA\u5B9A\u4E49\uFF1B\u5355\u5143\u683C\u7684 props\uFF08\u5373\u8868\u683C\u5185\u7684 td \u5143\u7D20\uFF09\u53EF\u4F7F\u7528 getCellProps \u8FDB\u884C\u81EA\u5B9A\u4E49"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"CrossTreeTable \u6CA1\u6709 primaryKey",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"CrossTreeTable \u5DE6\u4FA7\u6811\u4E2D\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684 key \u503C\uFF0C\u6545\u4E0D\u518D\u9700\u8981\u4E0A\u5C42\u6307\u5B9A primaryKey"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5176\u4ED6\u65B0\u589E\u7684 props",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"CrossTreeTable \u4F7F\u7528 primaryColumn \u6765\u63CF\u8FF0 \u8868\u683C\u7B2C\u4E00\u5217\u7684\u914D\u7F6E"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"openKeys/onChangeOpenKeys/defaultOpenKeys\uFF1A\u6811\u72B6\u6A21\u5F0F\u4E0B\u5C55\u5F00\u8282\u70B9\u7684 key \u6570\u7EC4")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"CrossTreeTable props \u5177\u4F53\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"export interface CrossTreeTableProps extends Omit<BaseTableProps, 'dataSource' | 'columns' | 'primaryKey'> {\n  primaryColumn: CrossTableLeftMetaColumn\n  leftTree: LeftCrossTreeNode[]\n  topTree: TopCrossTreeNode[]\n\n  defaultOpenKeys?: string[]\n  openKeys?: string[]\n  onChangeOpenKeys?(nextOpenKeys: string[]): void\n\n  getValue(leftNode: LeftCrossTreeNode, topNode: TopCrossTreeNode, leftDepth: number, topDepth: number): any\n  render?(\n    value: any,\n    leftNode: LeftCrossTreeNode\n    topNode: TopCrossTreeNode,\n    leftDepth: number,\n    topDepth: number,\n  ): ReactNode\n  getCellProps?(\n    value: any,\n    leftNode: LeftCrossTreeNode,\n    topNode: TopCrossTreeNode,\n    leftDepth: number,\n    topDepth: number,\n  ): CellProps\n}\n\nexport interface CrossTableLeftMetaColumn extends Omit<ArtColumnStaticPart, 'hidden'> {\n  /** \u81EA\u5B9A\u4E49\u6E32\u67D3\u65B9\u6CD5 */\n  render?(leftNode: LeftCrossTreeNode, leftDepth: number): ReactNode\n\n  /** \u81EA\u5B9A\u4E49\u7684\u83B7\u53D6\u5355\u5143\u683C props \u7684\u65B9\u6CD5 */\n  getCellProps?(leftNode: LeftCrossTreeNode, leftDepth: number): CellProps\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4E0D\u8981\u88AB\u957F\u957F\u7684 TypeScript \u7C7B\u578B\u4EE3\u7801\u5413\u5230\uFF0CCrossTreeTable \u7684 props \u5176\u5B9E\u548C BaseTable \u5DEE\u522B\u4E0D\u5927\uFF08\u597D\u5427\uFF0C\u8FD8\u662F\u6709\u70B9\u5927\u7684\uFF09\u3002"));};MDXContent.isMDXComponent=true;

/***/ })

}]);