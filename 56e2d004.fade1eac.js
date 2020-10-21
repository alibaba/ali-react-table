(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ 75:
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
var frontMatter={id:'advanced-usage',title:'进阶用法'};var metadata={"unversionedId":"table/advanced-usage","id":"table/advanced-usage","isDocsHomePage":false,"title":"进阶用法","description":"虚拟滚动","source":"@site/docs/table/advanced-usage.mdx","slug":"/table/advanced-usage","permalink":"/docs/table/advanced-usage","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/table/advanced-usage.mdx","version":"current","sidebar":"sidebar","previous":{"title":"表格示例","permalink":"/docs/table/examples"},"next":{"title":"表格主题","permalink":"/docs/table/theming"}};/* @jsx mdx */var rightToc=[{value:'虚拟滚动',id:'虚拟滚动',children:[]},{value:'锁列与嵌套的列结构',id:'锁列与嵌套的列结构',children:[]},{value:'todo getValue 与 render',id:'todo-getvalue-与-render',children:[]},{value:'todo 表格样式覆盖',id:'todo-表格样式覆盖',children:[]},{value:'todo components 替换',id:'todo-components-替换',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"虚拟滚动"},"\u865A\u62DF\u6EDA\u52A8"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6570\u636E\u91CF\u8F83\u5927\u65F6\uFF0C\u8868\u683C\u4F1A\u81EA\u52A8\u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8868\u683C\u7684 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"useVirtual")," \u5C5E\u6027\u6765\u8C03\u6574\u865A\u62DF\u6EDA\u52A8\u529F\u80FD\uFF0C\u76EE\u524D ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"useVirtual")," \u652F\u6301\u4EE5\u4E0B\u51E0\u4E2A\u503C\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"'auto'")," \uFF08\u9ED8\u8BA4\u503C\uFF09\u8868\u793A\u6839\u636E\u8868\u683C\u7684\u884C\u6570\u6216\u5217\u6570\u81EA\u52A8\u8C03\u6574\u662F\u5426\u5F00\u542F\u865A\u62DF\u6EDA\u52A8",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u884C\u6570\u91CF\u8D85\u8FC7 100 \u65F6\uFF0C\u81EA\u52A8\u5F00\u542F\u7EB5\u5411\u865A\u62DF\u6EDA\u52A8"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5217\u6570\u91CF\u8D85\u8FC7 100 \u65F6\uFF0C\u81EA\u52A8\u5F00\u542F\u6A2A\u5411\u865A\u62DF\u6EDA\u52A8"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8868\u5934\u7684\u6A2A\u5411\u865A\u62DF\u6EDA\u52A8\u9ED8\u8BA4\u5173\u95ED"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"true")," \u5F00\u542F\u6240\u6709\u865A\u62DF\u6EDA\u52A8"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"false")," \u5173\u95ED\u6240\u6709\u865A\u62DF\u6EDA\u52A8"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u5206\u522B\u6307\u5B9A \u6A2A\u5411/\u7EB5\u5411/\u8868\u5934 \u662F\u5426\u5F00\u542F\u865A\u62DF\u6EDA\u52A8",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5BF9\u8C61\u7684\u7ED3\u6784\u4E3A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"{ horizontal?: boolean | 'auto', vertical?: boolean | 'auto', header?: boolean | 'auto' }"))))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\u865A\u62DF\u6EDA\u52A8\u6CE8\u610F\u4E8B\u9879\uFF1A")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u6C34\u5E73\u65B9\u5411\u7684\u865A\u62DF\u6EDA\u52A8 \u8981\u6C42\u300C\u6240\u6709\u7684\u5217\u90FD\u6709\u4E00\u4E2A\u6307\u5B9A\u7684\u5BBD\u5EA6\u300D\uFF0C\u63A8\u8350\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"defaultColumnWidth"),"\uFF0C\u907F\u514D\u90E8\u5206\u5217\u7F3A\u5931\u5BBD\u5EA6"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5982\u679C\u9700\u8981\u8BBE\u7F6E\u8868\u683C\u7684\u9AD8\u5EA6\u6216\u6700\u5927\u9AD8\u5EA6\uFF0C\u6CE8\u610F\u8981",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"li"},"\u5C06 height/maxHeight \u8BBE\u7F6E\u5728\u8868\u683C\u4E0A"),"\uFF0C\u4E0D\u8981\u8BBE\u7F6E\u5728\u7236\u8282\u70B9\u4E0A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"style.overflow = 'auto'")," \u65F6\uFF0C\u5FC5\u987B\u4E3A\u8868\u683C\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u6700\u5927\u9AD8\u5EA6\uFF1B",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u6B64\u65F6\u8868\u683C\u7684\u5916\u5C42 div \u4F1A\u88AB\u8BA4\u4E3A\u662F\u8868\u683C\u6240\u5904\u7684 BFC\uFF0C\u8BE5 div \u7684\u9AD8\u5EA6\u5C06\u51B3\u5B9A\u8868\u683C\u6E32\u67D3\u591A\u5C11\u884C\uFF0C\u6545\u8FD9\u4E2A div \u7684\u6700\u5927\u9AD8\u5EA6\u5FC5\u987B\u662F\u786E\u5B9A\u7684"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5728\u865A\u62DF\u6EDA\u52A8\u5F00\u542F\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u60F3\u8981\u8FDB\u884C\u5355\u5143\u683C\u5408\u5E76\uFF0C\u5219\u8981\u4F7F\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"column.getSpanRect")," \u6765\u8FDB\u884C\u8BBE\u5B9A\uFF1A",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"column.getSpanRect")," \u8FD4\u56DE\u4E00\u4E2A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"SpanRect")," \u7684\u5BF9\u8C61\u6765\u8868\u793A\u5BF9\u5E94\u5355\u5143\u6240\u5904\u7684\u5408\u5E76\u540E\u7684\u4F4D\u7F6E\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"SpanRect")," \u7684\u5177\u4F53\u7C7B\u578B\u4E3A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"{ left: number, right: number, top: number, bottom: number }"),"\uFF0C\u6CE8\u610F\u5176\u4E2D left/top \u662F inclusive \u7684\uFF0Cright/bottom \u662F exclusive \u7684\u3002")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"todo estimatedRowHeight")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"锁列与嵌套的列结构"},"\u9501\u5217\u4E0E\u5D4C\u5957\u7684\u5217\u7ED3\u6784"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"todo \u9501\u5217\u7684\u65B9\u5411\uFF1A\u5DE6\u4FA7\u9501\u5217 or \u53F3\u4FA7\u9501\u5217\uFF1F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u6709\u5217\u5D4C\u5957\u7684\u60C5\u51B5\u4E0B\uFF08\u901A\u8FC7 column.children \u8BBE\u7F6E\u5217\u7684\u5B50\u8282\u70B9\uFF0C\u5F62\u6210\u5217\u7684\u5D4C\u5957\u7ED3\u6784\uFF09\uFF0C\u9501\u5217\u5177\u6709\u4F20\u9012\u6027\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u9501\u5B9A\u5217\u4E0E\u975E\u9501\u5B9A\u5217\u51FA\u73B0\u5728\u540C\u4E00\u4E2A\u7236\u8282\u70B9\u4E0B\u7684\u60C5\u51B5\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5982\u679C\u4E00\u4E2A\u7236\u8282\u70B9\u8BBE\u7F6E\u4E86\u9501\u5217 lock=true\uFF0C\u5219\u5176\u6240\u6709\u5B50\u8282\u70B9\u5C06\u81EA\u52A8\u88AB\u8BBE\u7F6E\u4E3A lock=true"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5982\u679C\u4E00\u4E2A\u8282\u70B9\u8BBE\u7F6E\u4E86\u9501\u5217 lock=true\uFF0C\u5219\u5176\u7236\u8282\u70B9\u548C\u6240\u6709\u7956\u5148\u8282\u70B9\u5C06\u88AB\u8BBE\u7F6E\u4E3A lock=true")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6B64\u5916\uFF0C\u5982\u679C\u6240\u6709\u7684\u5217\u90FD\u8BBE\u7F6E\u4E86 lock=true\uFF0C\u5219\u6574\u4E2A\u8868\u683C\u7684\u9501\u5217\u5C06\u4E0D\u751F\u6548\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"todo-getvalue-与-render"},"todo getValue \u4E0E render"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"todo \u4ECB\u7ECD\u4E00\u4E0B\u4E24\u8005\u7684\u5DEE\u522B\uFF0C\u8BF4\u660E\u4E24\u8005\u7684\u7528\u9014"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"todo-表格样式覆盖"},"todo \u8868\u683C\u6837\u5F0F\u8986\u76D6"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"todo \u4ECB\u7ECD\u5982\u4F55\u8986\u76D6\u8868\u683C\u7684\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u4ECB\u7ECD --bgcolor, --hover-bgcolor, --highlight-bgcolor \u7684\u542B\u4E49\u4E0E\u4F5C\u7528"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"todo-components-替换"},"todo components \u66FF\u6362"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"todo \u4ECB\u7ECD\u8868\u683C\u7684\u53EF\u5B9A\u5236\u80FD\u529B"));};MDXContent.isMDXComponent=true;

/***/ })

}]);