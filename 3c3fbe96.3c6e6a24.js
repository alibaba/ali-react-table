(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ 73:
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
var frontMatter={id:'utils',title:'通用工具函数'};var metadata={"unversionedId":"tools/utils","id":"tools/utils","isDocsHomePage":false,"title":"通用工具函数","description":"ali-react-table 导出的通用工具函数","source":"@site/docs/tools/utils.mdx","slug":"/tools/utils","permalink":"/docs/tools/utils","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/tools/utils.mdx","version":"current","sidebar":"sidebar","previous":{"title":"proto","permalink":"/docs/tools/proto"},"next":{"title":"交叉表","permalink":"/docs/pivot/cross-table"}};/* @jsx mdx */var rightToc=[{value:'<code>applyTransforms</code>',id:'applytransforms',children:[]},{value:'<code>buildTree</code>',id:'buildtree',children:[]},{value:'<code>collectNodes</code>',id:'collectnodes',children:[]},{value:'<code>exportTableAsExcel</code>',id:'exporttableasexcel',children:[]},{value:'<code>getTreeDepth</code>',id:'gettreedepth',children:[]},{value:'<code>groupBy</code>',id:'groupby',children:[]},{value:'<code>isLeafNode</code>',id:'isleafnode',children:[]},{value:'<code>layeredSort</code>',id:'layeredsort',children:[]},{value:'<code>mergeCellProps</code>',id:'mergecellprops',children:[]},{value:'<code>proto</code>',id:'proto',children:[]},{value:'<code>smartCompare</code>',id:'smartcompare',children:[]},{value:'<code>traverseColumn</code>',id:'traversecolumn',children:[]},{value:'<code>makeRecursiveMapper</code>',id:'makerecursivemapper',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"ali-react-table")," \u5BFC\u51FA\u7684\u901A\u7528\u5DE5\u5177\u51FD\u6570"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("hr",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"applytransforms"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"applyTransforms")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"API: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"function applyTransforms<T>(input: T, ...transforms: Transform<T>[]): T")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EE5 input \u4F5C\u4E3A\u8F93\u5165\uFF0C\u6309\u5E8F\u4F7F\u7528 transform\u3002transform \u662F\u4E00\u4E2A\u7B80\u5355\u7684\u7EAF\u51FD\u6570\uFF0Ctransform \u7684\u53C2\u6570\u7C7B\u578B\u4E0E\u8FD4\u56DE\u503C\u7C7B\u578B\u76F8\u540C"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"applyTransform(input, f1, f2, f3)")," \u7B49\u4EF7\u4E8E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"f3(f2(f1(input)))"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"// \u76F8\u5173\u6E90\u7801\u53C2\u8003\ntype Transform<T> = (input: T) => T\n\nfunction applyTransforms<T>(input: T, ...transforms: Transform<T>[]) {\n  return transforms.reduce((v, fn) => fn(v), input)\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"buildtree"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"buildTree")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"API: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"function buildTree<T>(idProp: string, parentIdProp: string, items: T[]): WithChildren<T>[]")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6839\u636E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"idProp")," \u4E0E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"parentIdProp")," \u4ECE",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\u5E73\u94FA\u7684\u5BF9\u8C61\u6570\u7EC4"),"\u4E2D\u6784\u5EFA\u5BF9\u5E94\u7684",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\u6811"),"\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5F53 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"A[parentIdProp] === B[idProp]")," \u65F6\uFF0C\u5BF9\u8C61 A \u4F1A\u88AB\u79FB\u52A8\u5230\u5BF9\u8C61 B \u7684 children \u5B57\u6BB5\u4E2D\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7684 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"parentIdProp")," \u4E0D\u4E0E\u5176\u4ED6\u5BF9\u8C61\u7684 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"idProp")," \u5B57\u6BB5\u76F8\u7B49\u65F6\uFF0C\u8BE5\u5BF9\u8C61\u88AB\u4F5C\u4E3A\u6811\u7684\u9876\u5C42\u8282\u70B9\u3002")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"const array = [\n  { id: 'node-1', parent: 'root', name: '\u6211\u662F\u8282\u70B91' },\n  { id: 'node-2', parent: 'root', name: '\u6211\u662F\u8282\u70B92' },\n  { id: 'node-3', parent: 'node-2', name: '\u6211\u662F\u8282\u70B93' },\n  { id: 'node-4', parent: 'node-2', name: '\u6211\u662F\u8282\u70B94' },\n  { id: 'node-5', parent: 'node-4', name: '\u6211\u662F\u8282\u70B95' },\n]\n\nconst tree = buildTree('id', 'parent', array)\n\nexpect(tree).toEqual([\n  { id: 'node-1', parent: 'root', name: '\u6211\u662F\u8282\u70B91' },\n  {\n    id: 'node-2',\n    parent: 'root',\n    name: '\u6211\u662F\u8282\u70B92',\n    children: [\n      { id: 'node-3', parent: 'node-2', name: '\u6211\u662F\u8282\u70B93' },\n      {\n        id: 'node-4',\n        parent: 'node-2',\n        name: '\u6211\u662F\u8282\u70B94',\n        children: [{ id: 'node-5', parent: 'node-3', name: '\u6211\u662F\u8282\u70B95' }],\n      },\n    ],\n  },\n])\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"collectnodes"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"collectNodes")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6536\u96C6\u4E00\u68F5\u6811\u4E0A\u7684\u8282\u70B9"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"API: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"function collectNodes<T extends AbstractTreeNode>(nodes: T[], order: 'pre' | 'post' | 'leaf-only'): T[]")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"pre: \u524D\u5E8F\u904D\u5386"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"post: \u540E\u7EED\u904D\u5386"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"leaf-only: \u4EC5\u6536\u96C6\u53F6\u5B50\u8282\u70B9")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"const tree = [\n  { id: 'node-1', parent: 'root', name: '\u6211\u662F\u8282\u70B91' },\n  {\n    id: 'node-2',\n    parent: 'root',\n    name: '\u6211\u662F\u8282\u70B92',\n    children: [\n      { id: 'node-3', parent: 'node-2', name: '\u6211\u662F\u8282\u70B93' },\n      {\n        id: 'node-4',\n        parent: 'node-2',\n        name: '\u6211\u662F\u8282\u70B94',\n        children: [{ id: 'node-5', parent: 'node-3', name: '\u6211\u662F\u8282\u70B95' }],\n      },\n    ],\n  },\n]\n\nconst result = collectNodes(tree, 'pre')\n\nexpect(result).toEqual([\n  { id: 'node-1', parent: 'root', name: '\u6211\u662F\u8282\u70B91' },\n  {\n    id: 'node-2',\n    parent: 'root',\n    name: '\u6211\u662F\u8282\u70B92',\n    children: [\n      { id: 'node-3', ...others },\n      { id: 'node-4', ...others },\n    ],\n  },\n  { id: 'node-3', parent: 'node-2', name: '\u6211\u662F\u8282\u70B93' },\n  { id: 'node-4', parent: 'node-2', name: '\u6211\u662F\u8282\u70B94', ...others },\n  { id: 'node-5', parent: 'node-3', name: '\u6211\u662F\u8282\u70B95' },\n])\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"exporttableasexcel"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"exportTableAsExcel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5C06\u8868\u683C\u6570\u636E\u5BFC\u51FA\u4E3A Excel \u6587\u4EF6\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"function exportTableAsExcel(\n  // \u4E00\u822C\u60C5\u51B5\u4E0B\u4E3A xlsxPackage \u53C2\u6570\u4F20\u5165 require('xlsx') \u5373\u53EF\n  xlsxPackage: typeof XLSX_NS,\n  dataSource: any[],\n  columns: ArtColumn[],\n  filename: string,\n): void\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u300C\u8868\u683C\u5BFC\u51FA\u300D\u4E0E\u300C\u8868\u683C\u6E32\u67D3\u300D\u7684\u4E0D\u540C\u70B9\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5355\u5143\u683C\u5185\u5BB9\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"BaseTable \u6E32\u67D3\u65F6\uFF0C\u4F1A\u4F7F\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"column.render")," \u6765\u6E32\u67D3\u5355\u5143\u683C\u4E2D\u7684\u5185\u5BB9"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"exportTableAsExcel \u53EA\u4F1A\u4F7F\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"column.code")," \u6216\u662F ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"column.getValue")," \u6765\u83B7\u53D6\u8868\u683C\u4E2D\u6BCF\u4E2A\u5355\u5143\u683C\u7684\u5185\u5BB9"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5217\u9690\u85CF\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5F53 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"column.hidden")," \u4E3A true \u65F6\uFF0CBaseTable \u4F1A\u9690\u85CF\u76F8\u5E94\u7684\u5217"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"exportTableAsExcel \u603B\u662F\u4F1A\u5BFC\u51FA\u6240\u6709\u7684\u5217"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u652F\u6301\u7684\u8868\u683C\u7279\u6027\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"BaseTable \u652F\u6301\u6240\u6709\u8868\u683C\u7279\u6027"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8868\u683C\u5BFC\u51FA\u4EC5\u652F\u6301\u4E00\u90E8\u5206\u8868\u683C\u7279\u6027\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u652F\u6301 \u8868\u5934\u5206\u7EC4"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u652F\u6301 \u5355\u5143\u683C\u5408\u5E76"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"\u4E0D\u652F\u6301")," \u5355\u5143\u683C\u6837\u5F0F")))))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"gettreedepth"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"getTreeDepth")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"API: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"function getTreeDepth(nodes: AbstractTreeNode[]): number")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u83B7\u53D6\u4E00\u68F5\u6811\u7684\u9AD8\u5EA6/\u6DF1\u5EA6"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"groupby"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"groupBy")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"API: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"function groupBy<T, K extends string>(list: T[], iteratee: (t: T) => K): { [key in K]: T[] }")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5BF9 list \u4E2D\u7684\u5143\u7D20\u8FDB\u884C\u5206\u7EC4\uFF0Citeratee \u7684\u8FD4\u56DE\u503C\u76F8\u540C\u7684\u5143\u7D20\u5C06\u88AB\u5206\u5230\u540C\u4E00\u4E2A\u5206\u7EC4\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"isleafnode"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"isLeafNode")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5224\u65AD\u4E00\u4E2A\u8282\u70B9\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript"}),"// \u76F8\u5173\u6E90\u7801\u53C2\u8003\ninterface AbstractTreeNode {\n  children?: AbstractTreeNode[]\n}\n\nfunction isLeafNode<N extends AbstractTreeNode>(node: N) {\n  return node.children == null || node.children.length === 0\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"layeredsort"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"layeredSort")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"API: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"function layeredSort<T extends AbstractTreeNode>(array: T[], compare: (x: T, y: T) => number): T[]")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5BF9\u6811\u72B6\u7ED3\u6784\u7684\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"layeredSort")," \u4E0E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"Array#sort")," \u7C7B\u4F3C\u3002\u4F46 layeredSort \u662F\u4E00\u4E2A\u9012\u5F52\u7684\u8FC7\u7A0B\uFF0C\u9488\u5BF9\u6811\u4E0A\u7684\u6BCF\u4E00\u4E2A\u7236\u8282\u70B9\uFF0C\u8BE5\u51FD\u6570\u90FD\u4F1A\u5BF9\u5176\u5B50\u8282\u70B9\u6570\u7EC4\uFF08children) \u8FDB\u884C\u6392\u5E8F."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"mergecellprops"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"mergeCellProps")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"API: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"function mergeCellProps(base: CellProps, extra: CellProps): CellProps")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5408\u5E76\u4E24\u4E2A cellProps\uFF08\u5355\u5143\u683C\u5C5E\u6027\uFF09\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5408\u5E76\u540E\u7684\u5168\u65B0\u5BF9\u8C61"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"mergeCellProps \u4F1A\u6309\u7167\u4EE5\u4E0B\u89C4\u5219\u6765\u5408\u5E76\u4E24\u4E2A\u5BF9\u8C61\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5BF9\u4E8E \u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\u7C7B\u578B\u7684\u5B57\u6BB5\uFF0Cextra \u4E2D\u7684\u5B57\u6BB5\u503C\u5C06\u76F4\u63A5\u8986\u76D6 base \u4E2D\u7684\u5B57\u6BB5\u503C\uFF08className \u662F\u4E2A\u7279\u4F8B\uFF0C\u4F1A\u8FDB\u884C\u5B57\u7B26\u4E32\u62FC\u63A5\uFF09",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u6CE8\u610F\u5728 v1.2 \u4E4B\u524D className \u4F1A\u88AB\u8986\u76D6"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5BF9\u4E8E\u51FD\u6570/\u65B9\u6CD5\u7C7B\u578B\u7684\u5B57\u6BB5\uFF08\u5BF9\u5E94\u5355\u5143\u683C\u7684\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\uFF09\uFF0CmergeCellProps \u5C06\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u65B0\u51FD\u6570\u5C06\u6309\u5E8F\u8C03\u7528 base \u548C extra \u4E2D\u7684\u65B9\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5BF9\u4E8E\u666E\u901A\u5BF9\u8C61\u7C7B\u578B\u7684\u5B57\u6BB5\uFF08\u4E00\u822C\u5BF9\u5E94\u5355\u5143\u683C\u7684\u6837\u5F0F\uFF09\uFF0CmergeCellProps \u5C06\u8C03\u7528 lodash.merge \u6765\u5408\u5E76\u5B57\u6BB5\u503C")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"proto"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"proto")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8BE6\u89C1 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"proto"}),"proto")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"smartcompare"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"smartCompare")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"API: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"(x: any, y: any) => number")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6BD4\u8F83\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001null \u6216\u662F\u6570\u7EC4\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u8D1F\u6570\u8868\u793A\u300Cx \u5C0F\u4E8E y\u300D\uFF0C\u8FD4\u56DE 0 \u8868\u793A\u300Cx \u7B49\u4E8E y\u300D\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6B63\u6570\u8868\u793A\u300Cx \u5927\u4E8E y\u300D\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5BF9\u4E8E\u5B57\u7B26\u4E32\u5C06\u6BD4\u8F83\u4E24\u8005\u7684\u5B57\u5178\u5E8F\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5BF9\u6570\u5B57\u5C06\u6BD4\u8F83\u4E24\u8005\u5927\u5C0F\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"null \u503C\u5728\u6BD4\u8F83\u65F6\u603B\u662F\u5C0F\u4E8E\u53E6\u4E00\u4E2A\u503C\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5BF9\u4E8E\u6570\u7EC4\u6765\u8BF4\uFF0C\u5C06\u9010\u4E2A\u6BD4\u8F83\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\uFF0C\u7B2C\u4E00\u4E2A\u4E0D\u76F8\u7B49\u7684\u6BD4\u8F83\u7ED3\u679C\u5C06\u4F5C\u4E3A\u6574\u4E2A\u6570\u7EC4\u7684\u6BD4\u8F83\u7ED3\u679C",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u6570\u7EC4\u7684\u6BD4\u8F83\u53EF\u53C2\u8003 python \u4E2D\u7684\u5143\u7956\u6BD4\u8F83\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"li"},{"href":"https://stackoverflow.com/questions/5292303/how-does-tuple-comparison-work-in-python"}),"https://stackoverflow.com/questions/5292303/how-does-tuple-comparison-work-in-python"))))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"traversecolumn"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"traverseColumn")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",{"className":"admonition admonition-danger alert alert--danger"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-heading"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h5",{parentName:"div"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("span",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"h5"},{"className":"admonition-icon"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("svg",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"span"},{"xmlns":"http://www.w3.org/2000/svg","width":"12","height":"16","viewBox":"0 0 12 16"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("path",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"svg"},{"fillRule":"evenodd","d":"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"deprecated")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-content"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",{parentName:"div"},"\u8BE5 API \u5DF2\u7ECF\u8FC7\u65F6\uFF0C\u8BF7\u4F7F\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"makeRecursiveMapper")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"API: ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"(fn: (column, ctx) => NormalizeAsArrayInput<ArtColumn>) => TableTransform")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"traverseColumn")," \u65B9\u6CD5\u53EF\u7528\u6765\u7B80\u5316\u300C\u521B\u5EFA\u9488\u5BF9\u5217\u7684 transform\u300D\u3002\u63D0\u4F9B\u4E00\u4E2A\u9488\u5BF9\u5355\u4E2A column \u914D\u7F6E\u7684\u8F6C\u6362\u51FD\u6570\uFF0C\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u751F\u6210\u5BF9\u5E94\u7684 TableTransform\u3002fn \u7684\u8868\u73B0\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"fn \u88AB\u8C03\u7528\u65F6\u7684\u53C2\u6570\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"column \u53C2\u6570\uFF1A\u8868\u683C\u7684\u5217\u914D\u7F6E"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"ctx\uFF1A\u4E0E column \u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"ctx.range\uFF1A\u5217\u7684\u4E0B\u6807\uFF0C\u5305\u542B ctx.range.start, ctx.range.end \u4E24\u4E2A\u4E0B\u6807"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"ctx.dataSource\uFF1A\u8868\u683C\u7684\u6570\u636E\u6E90"))))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"fn \u7684\u8FD4\u56DE\u7ED3\u679C\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8FD4\u56DE ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"null")," \u65F6\uFF0C\u5BF9\u5E94\u7684\u5217\u5C06\u88AB\u79FB\u9664\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8FD4\u56DE ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"ArtColumn")," \u6216\u4E00\u4E2A\u6570\u7EC4\u65F6\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u4F1A\u66FF\u6362\u5BF9\u5E94\u7684\u5217\u3002")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"makerecursivemapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h3"},"makeRecursiveMapper")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"(todo)"));};MDXContent.isMDXComponent=true;

/***/ })

}]);