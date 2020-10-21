(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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

/***/ 82:
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
var frontMatter={id:'pipeline',title:'拓展机制介绍',slug:'/pipeline/'};var metadata={"unversionedId":"pipeline/pipeline","id":"pipeline/pipeline","isDocsHomePage":false,"title":"拓展机制介绍","description":"pipeline 特点：","source":"@site/docs/pipeline/pipeline.mdx","slug":"/pipeline/","permalink":"/docs/pipeline/","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/pipeline.mdx","version":"current","sidebar":"sidebar","previous":{"title":"BaseTable API","permalink":"/docs/table/api"},"next":{"title":"行多选","permalink":"/docs/pipeline/features/multi-select"}};/* @jsx mdx */var rightToc=[{value:'创建 pipeline',id:'创建-pipeline',children:[{value:'hooks 用法',id:'hooks-用法',children:[]},{value:'非 hooks 用法',id:'非-hooks-用法',children:[]}]},{value:'使用 pipeline',id:'使用-pipeline',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"pipeline \u7279\u70B9\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u6309\u9700\u5F15\u5165\u8868\u683C\u62D3\u5C55\uFF0C\u66F4\u597D\u5730\u652F\u6301 tree shaking"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u9ED8\u8BA4\u63D0\u4F9B ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"li"},{"href":"features/multi-select"}),"\u591A\u79CD\u62D3\u5C55\u529F\u80FD"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u652F\u6301 antd \u6216 fusion \u7EC4\u4EF6\u5E93\uFF08\u4E8C\u9009\u4E00\uFF09"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u652F\u6301\u300C\u53D7\u63A7\u7528\u6CD5\u300D\u4E0E\u300C\u975E\u53D7\u63A7\u7528\u6CD5\u300D"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u652F\u6301\u300Chooks \u7528\u6CD5\u300D\u4E0E\u300C\u975E hooks \u7528\u6CD5\u300D"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u652F\u6301 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"li"},{"href":"extends"}),"\u81EA\u5B9A\u4E49\u7684\u8868\u683C\u62D3\u5C55"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"创建-pipeline"},"\u521B\u5EFA pipeline"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"hooks-用法"},"hooks \u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u5F15\u5165 hooks ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"useTablePipeline")," \u6765\u521B\u5EFA pipeline\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"{6}","{6}":true}),"import { useTablePipeline, features, BaseTable } from 'ali-react-table'\nimport { Checkbox } from '@alifd/next'\n// or...  import { Checkbox } from 'antd'\n\nfunction SomeFunctionComponent() {\n  const pipeline = useTablePipeline({ components: { Checkbox } })\n    .input({ dataSource, columns })\n    .primaryKey('id')\n    .use(features.sort(sortOptions))\n    .use(features.multiSelect(selectOptions))\n\n  // pipeline.getProps() \u5C06\u751F\u6210\u4EE5\u4E0B props\n  //    dataSource, columns, primaryKey, getRowProps\n  // \u4F7F\u7528\u65F6\u6CE8\u610F\u4E0D\u8981\u8986\u76D6\u8FD9\u4E9B props\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u521B\u5EFA pipeline \u65F6\uFF0C\u8981\u6839\u636E\u540E\u7EED\u7528\u5230\u7684\u8868\u683C\u62D3\u5C55\u4E3A pipeline \u63D0\u4F9B components\u3002\u6BCF\u4E2A\u62D3\u5C55\u6240\u9700\u6C42\u7684\u7EC4\u4EF6\u53EF\u80FD\u4E0D\u540C\uFF0C\u4F8B\u5982 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"features/multi-select"}),"\u884C\u591A\u9009")," \u9700\u8981 Checkbox \u7EC4\u4EF6\uFF0C",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"features/single-select"}),"\u884C\u5355\u9009")," \u5219\u9700\u8981 Radio \u7EC4\u4EF6\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u521B\u5EFA\u4E4B\u540E\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ali-react-table \u63D0\u4F9B\u7684 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"features/multi-select"}),"\u62D3\u5C55\u529F\u80FD"),"\uFF0C\u6216\u662F ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"extends"}),"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u8868\u683C\u62D3\u5C55"),"\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",{"className":"admonition admonition-warning alert alert--danger"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-heading"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h5",{parentName:"div"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("span",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"h5"},{"className":"admonition-icon"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("svg",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"span"},{"xmlns":"http://www.w3.org/2000/svg","width":"12","height":"16","viewBox":"0 0 12 16"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("path",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"svg"},{"fillRule":"evenodd","d":"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-content"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",{parentName:"div"},"\u5982\u679C\u4F60\u60F3\u8981\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"getRowProps"),"\uFF0C\u8981\u8C03\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.appendRowPropsGetter(getRowProps)")," \u6765\u5C06\u8BE5\u65B9\u6CD5\u6DFB\u52A0\u52A0 pipeline \u4E2D\u3002"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":""}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5982\u679C\u5BF9\u6253\u5305\u4F53\u79EF\u8981\u6C42\u4E0D\u9AD8\uFF0C\u53EF\u4EE5\u91C7\u7528\u4E0B\u9762\u7684\u5199\u6CD5\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"// \u5BF9\u4E8E fusion \u7528\u6237...\nimport * as fusion from '@alifd/next'\nuseTablePipeline({ components: fusion })\n\n// \u5BF9\u4E8E antd \u7528\u6237...\nimport * as antd from 'antd'\nuseTablePipeline({ components: antd })\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"非-hooks-用法"},"\u975E hooks \u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u7C7B\u7EC4\u4EF6\u4E2D\uFF0C\u9700\u8981\u8C03\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"new TablePipeline(...)")," \u6765\u521B\u5EFA pipeline\u3002\u521B\u5EFA\u65F6\uFF0C\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"state / setState")," \u4E3A pipeline \u63D0\u4F9B\u72B6\u6001\u7BA1\u7406\u80FD\u529B\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"{18-22}","{18-22}":true}),"import * as fusion from '@alifd/next'\nimport { TablePipeline, features } from 'ali-react-table'\n\nclass MyComponent extends React.Component {\n  state = {\n    pipelineState: {}, // pipelineState \u7684\u9ED8\u8BA4\u503C\u5FC5\u987B\u4E3A\u4E00\u4E2A\u5BF9\u8C61\n  }\n\n  setPipelineState = (updater) => {\n    // this.setPipelineState \u88AB\u8C03\u7528\u65F6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570 updater \u662F\u4E00\u4E2A\u51FD\u6570\n    // updater \u63A5\u53D7\u539F\u6765\u7684 pipelineState\uFF0C\u8FD4\u56DE\u65B0\u7684 pipelineState\n    this.setState((prev) => ({\n      pipelineState: updater(prev.pipelineState),\n    }))\n  }\n\n  render() {\n    const pipeline = new TablePipeline({\n      state: this.state.pipelineState,\n      setState: this.setPipelineState,\n      ctx: { components: fusion },\n    })\n\n    pipeline.input({ dataSource, columns })\n    pipeline.primaryKey('id')\n    pipeline.use(features.autoRowSpan())\n    pipeline.use(features.someOtherFeature())\n\n    return <BaseTable {...pipeline.getProps()} />\n  }\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"使用-pipeline"},"\u4F7F\u7528 pipeline"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",{"className":"admonition admonition-tip alert alert--success"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-heading"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h5",{parentName:"div"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("span",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"h5"},{"className":"admonition-icon"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("svg",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"span"},{"xmlns":"http://www.w3.org/2000/svg","width":"12","height":"16","viewBox":"0 0 12 16"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("path",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"svg"},{"fillRule":"evenodd","d":"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-content"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",{parentName:"div"},"\u5E38\u89C4\u7528\u6CD5\u63A8\u8350\u76F4\u63A5\u53C2\u8003 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"features/multi-select"}),"\u5177\u4F53\u62D3\u5C55\u529F\u80FD")," \u4E2D\u7684\u793A\u4F8B\u3002"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u521B\u5EFA pipeline \u4E4B\u540E\uFF0C\u4E00\u822C\u9700\u8981\u5148\u8BBE\u7F6E input \u548C primaryKey\uFF0C\u7136\u540E\u53EF\u4EE5\u4F7F\u7528\u5404\u4E2A\u8868\u683C\u62D3\u5C55\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelineinput-datasource-columns-"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.input({ dataSource, columns })")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"input \u65B9\u6CD5\u7528\u4E8E\u8BBE\u7F6E pipeline \u7684\u8F93\u5165\uFF0C\u8C03\u7528\u540E pipeline \u4E2D\u5F53\u524D\u7684 dataSource/columns \u5C06\u88AB\u66F4\u65B0\u3002\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE pipeline \u5BF9\u8C61\uFF0C\u65B9\u4FBF\u94FE\u5F0F\u8C03\u7528\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelineprimarykeyprimarykey"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.primaryKey(primaryKey)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8BBE\u7F6E primaryKey\u3002primaryKey \u4E00\u822C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4F8B\u5982 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"'id'"),"\uFF0C\u8868\u793A\u6570\u636E\u4E2D\u7684 id \u5B57\u6BB5\u53EF\u4EE5\u552F\u4E00\u786E\u5B9A\u4E00\u884C\u3002primaryKey \u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"../table/api"}),"BaseTable api"),"\u3002\u5F88\u591A\u8868\u683C\u62D3\u5C55\u529F\u4F1A\u8981\u6C42 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"primaryKey")," \u9884\u5148\u88AB\u8BBE\u7F6E\uFF0C\u90E8\u5206\u62D3\u5C55\u8FD8\u8981\u6C42 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"primaryKey")," \u5FC5\u987B\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE pipeline \u5BF9\u8C61\uFF0C\u65B9\u4FBF\u94FE\u5F0F\u8C03\u7528\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelineusesometablefeature"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.use(someTableFeature)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4F7F\u7528\u6307\u5B9A\u7684\u8868\u683C\u529F\u80FD\u62D3\u5C55\u3002\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE pipeline \u5BF9\u8C61\uFF0C\u65B9\u4FBF\u94FE\u5F0F\u8C03\u7528\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinegetprops"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.getProps()")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u83B7\u53D6 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"<BaseTable />")," \u7684 props\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4F1A\u5305\u542B ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"{ dataSource, columns, primaryKey, getRowProps }")," \u8FD9\u56DB\u4E2A\u5B57\u6BB5\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("hr",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EE5\u4E0A 4 \u4E2A API \u53EF\u4EE5\u6EE1\u8DB3\u5927\u90E8\u5206\u7684\u65E5\u5E38\u4F7F\u7528\uFF0C\u5982\u679C\u4F60\u60F3\u5BF9 pipeline \u4E2D\u7684\u6570\u636E\u8FDB\u884C\u52A0\u5DE5\uFF0C\u8BE6\u89C1 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"extends"}),"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u8868\u683C\u62D3\u5C55"),"\u3002"));};MDXContent.isMDXComponent=true;

/***/ })

}]);