(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

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

/***/ 86:
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
var frontMatter={id:'multi-select',title:'行多选'};var metadata={"unversionedId":"pipeline/features/multi-select","id":"pipeline/features/multi-select","isDocsHomePage":false,"title":"行多选","description":"行多选：在每一行的左侧或右侧 渲染一个复选框，表示当前行是否被选中。","source":"@site/docs/pipeline/features/multi-select.mdx","slug":"/pipeline/features/multi-select","permalink":"/docs/pipeline/features/multi-select","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/multi-select.mdx","version":"current","sidebar":"sidebar","previous":{"title":"拓展机制介绍","permalink":"/docs/pipeline/"},"next":{"title":"行详情","permalink":"/docs/pipeline/features/row-detail"}};/* @jsx mdx */var rightToc=[{value:'示例',id:'示例',children:[]},{value:'使用方式',id:'使用方式',children:[]},{value:'受控用法',id:'受控用法',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u884C\u591A\u9009\uFF1A\u5728\u6BCF\u4E00\u884C\u7684\u5DE6\u4FA7\u6216\u53F3\u4FA7 \u6E32\u67D3\u4E00\u4E2A\u590D\u9009\u6846\uFF0C\u8868\u793A\u5F53\u524D\u884C\u662F\u5426\u88AB\u9009\u4E2D\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",{"className":"admonition admonition-tip alert alert--success"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-heading"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h5",{parentName:"div"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("span",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"h5"},{"className":"admonition-icon"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("svg",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"span"},{"xmlns":"http://www.w3.org/2000/svg","width":"12","height":"16","viewBox":"0 0 12 16"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("path",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"svg"},{"fillRule":"evenodd","d":"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u6279\u91CF\u9009\u62E9")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-content"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",{parentName:"div"},"\u70B9\u51FB\u590D\u9009\u6846\u65F6\uFF0C\u6309\u4F4F shift \u952E\u53EF\u4EE5\u8FDB\u884C\u6279\u91CF\u9009\u62E9/\u53CD\u9009\u3002"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"示例"},"\u793A\u4F8B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u884C\u591A\u9009() {\n  const { dataSource4, columns4 } = assets.biz\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource: dataSource4, columns: columns4 })\n    .primaryKey('id') // \u6BCF\u4E00\u884C\u6570\u636E\u7531 id \u5B57\u6BB5\u552F\u4E00\u6807\u8BB0\n    .use(\n      features.multiSelect({\n        highlightRowWhenSelected: true,\n        defaultValue: ['1', '2'],\n        defaultLastKey: '1',\n        checkboxPlacement: 'start',\n        checkboxColumn: { lock: true },\n        clickArea: 'cell',\n      }),\n    )\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"使用方式"},"\u4F7F\u7528\u65B9\u5F0F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u542F\u7528\u884C\u591A\u9009\u529F\u80FD\u4E4B\u524D\uFF0Cpipeline \u5FC5\u987B\u5DF2\u7ECF\u8BBE\u7F6E\u4E86 primaryKey"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u884C\u591A\u9009\u4F9D\u8D56\u590D\u9009\u6846\u7EC4\u4EF6\uFF0C\u4F7F\u7528\u4E4B\u524D\u9700\u8981\u5148\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"pipeline.ctx.components.Checkbox"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"pipeline.use(features.multiSelect(options))\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"options \u7ED3\u6784\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),"export interface MultiSelectFeatureOptions {\n  /** \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C */\n  defaultValue?: string[]\n\n  /** \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u9ED8\u8BA4 lastKey */\n  defaultLastKey?: string\n\n  /** \u53D7\u63A7\u7528\u6CD5\uFF1A\u5F53\u524D\u9009\u4E2D\u7684 keys */\n  value?: string[]\n\n  /** \u53D7\u63A7\u7528\u6CD5\uFF1A\u4E0A\u4E00\u6B21\u64CD\u4F5C\u5BF9\u5E94\u7684 rowKey */\n  lastKey?: string\n\n  /** \u53D7\u63A7\u7528\u6CD5\uFF1A\u72B6\u6001\u6539\u53D8\u56DE\u8C03  */\n  onChange?: (\n    nextValue: string[],\n    key: string,\n    keys: string[],\n    action: 'check' | 'uncheck' | 'check-all' | 'uncheck-all',\n  ) => void\n\n  /** \u590D\u9009\u6846\u6240\u5728\u5217\u7684\u4F4D\u7F6E */\n  checkboxPlacement?: 'start' | 'end'\n\n  /** \u590D\u9009\u6846\u6240\u5728\u5217\u7684 column \u914D\u7F6E\uFF0C\u53EF\u6307\u5B9A width\uFF0Clock, title, align, features \u7B49\u5C5E\u6027 */\n  checkboxColumn?: Partial<ArtColumnStaticPart>\n\n  /** \u662F\u5426\u9AD8\u4EAE\u88AB\u9009\u4E2D\u7684\u884C */\n  highlightRowWhenSelected?: boolean\n\n  /** \u5224\u65AD\u4E00\u884C\u4E2D\u7684 checkbox \u662F\u5426\u8981\u7981\u7528 */\n  isDisabled?(row: any, rowIndex: number): boolean\n\n  /** \u70B9\u51FB\u4E8B\u4EF6\u7684\u54CD\u5E94\u533A\u57DF */\n  clickArea?: 'checkbox' | 'cell' | 'row'\n\n  /** \u662F\u5426\u5BF9\u89E6\u53D1 onChange \u7684 click \u4E8B\u4EF6\u8C03\u7528 event.stopPropagation() */\n  stopClickEventPropagation?: boolean\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u53D7\u63A7\u7528\u6CD5\u4E0B\uFF0C \u72B6\u6001\u6539\u53D8\u56DE\u8C03 onChange \u4F1A\u63A5\u53D7 4 \u4E2A\u53C2\u6570\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"nextValue")," \u5373\u5C06\u88AB\u9009\u4E2D\u7684 keys \u6570\u7EC4"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"key")," \u89E6\u53D1\u672C\u6B21\u72B6\u6001\u6539\u53D8\u7684\u8868\u683C\u884C\u7684 key"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"keys")," \u672C\u6B21\u72B6\u6001\u6539\u53D8\u76F8\u5173\u7684 keys \u6570\u7EC4\u3002",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4E00\u822C\u60C5\u51B5\u4E0B\u8BE5\u6570\u7EC4\u957F\u5EA6\u4E3A 1"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u591A\u9009\uFF08\u6309\u4F4F shift \u952E\uFF09\u6216\u5168\u9009\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u6570\u7EC4\u957F\u5EA6\u53EF\u80FD\u8D85\u8FC7 1"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"action")," \u4EA4\u4E92\u884C\u4E3A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"'check'")," \u9009\u4E2D\u4E00\u4E2A\u6216\u591A\u4E2A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"'uncheck'")," \u53D6\u6D88\u9009\u4E2D\u4E00\u4E2A\u6216\u591A\u4E2A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"'check-all'")," \u9009\u62E9\u5168\u90E8"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"'uncheck-all'")," \u53CD\u9009\u5168\u90E8")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"受控用法"},"\u53D7\u63A7\u7528\u6CD5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u53D7\u63A7\u7528\u6CD5\u4E0B\u53EF\u4EE5\u5BF9\u72B6\u6001\u8FDB\u884C\u66F4\u591A\u7684\u63A7\u5236\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u4EA4\u4E92\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8986\u76D6 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"checkboxColumn.title")," \u53EF\u4EE5\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u5217\u8868\u5934\uFF0C\u65B9\u4FBF\u5B9E\u73B0\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u4EA4\u4E92\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6B64\u5916\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"options.clickArea='row'")," \u53EF\u4EE5\u5C06\u70B9\u51FB\u4E8B\u4EF6\u7684\u56DE\u8C03\u653E\u5728\u8868\u683C\u884C\u4E0A\uFF0C\u8BA9\u591A\u9009\u4EA4\u4E92\u66F4\u6613\u7528\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u53D7\u63A7\u7528\u6CD5() {\n  const dataSource = assets.biz.dataSource1\n  const columns = assets.biz.columns1\n\n  const [value, onChange] = useState(['1', '2'])\n\n  const allKeys = dataSource.map((row) => row.id)\n  const isAllChecked = value.length === allKeys.length\n  const isAnyChecked = value.length > 0\n\n  const title = (\n    <>\n      <Checkbox\n        checked={isAllChecked}\n        indeterminate={!isAllChecked && isAnyChecked}\n        onChange={() => {\n          onChange(isAllChecked ? [] : allKeys)\n        }}\n      />\n      <MenuButton size=\"small\" text>\n        <Menu.Item onClick={() => onChange(allKeys)}>\u5168\u9009</Menu.Item>\n        <Menu.Item onClick={() => onChange([])}>\u6E05\u7A7A</Menu.Item>\n        <Menu.Item onClick={() => onChange(allKeys.filter((key) => !value.includes(key)))}>\u53CD\u9009</Menu.Item>\n        <Menu.Item onClick={() => onChange(allKeys.filter(() => Math.random() < 0.4))}>\u968F\u673A\u9009\u62E9</Menu.Item>\n      </MenuButton>\n    </>\n  )\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .primaryKey('id') // \u6BCF\u4E00\u884C\u6570\u636E\u7531 id \u5B57\u6BB5\u552F\u4E00\u6807\u8BB0\n    .use(\n      features.multiSelect({\n        value,\n        onChange,\n        clickArea: 'row',\n        checkboxColumn: { width: 60, title },\n      }),\n    )\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);