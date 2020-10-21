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

/***/ 74:
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
var frontMatter={id:'extends',title:'实现自定义的表格拓展'};var metadata={"unversionedId":"pipeline/extends","id":"pipeline/extends","isDocsHomePage":false,"title":"实现自定义的表格拓展","description":"pipeline 内部保存了一份「当前」的 dataSource 与 columns。调用 pipeline.getProps() 时，「当前」的这份数据将被返回，并作为 `` 的 props。","source":"@site/docs/pipeline/extends.mdx","slug":"/pipeline/extends","permalink":"/docs/pipeline/extends","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/extends.mdx","version":"current","sidebar":"sidebar","previous":{"title":"过滤(todo)","permalink":"/docs/pipeline/features/filter"},"next":{"title":"已过时","permalink":"/docs/transforms/"}};/* @jsx mdx */var rightToc=[{value:'处理数据的 API',id:'处理数据的-api',children:[]},{value:'pipeline 操作示例',id:'pipeline-操作示例',children:[]},{value:'使用 pipeline 上下文',id:'使用-pipeline-上下文',children:[]},{value:'表格拓展封装',id:'表格拓展封装',children:[]},{value:'状态管理',id:'状态管理',children:[{value:'状态管理 API',id:'状态管理-api',children:[]}]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"pipeline \u5185\u90E8\u4FDD\u5B58\u4E86\u4E00\u4EFD",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("strong",{parentName:"p"},"\u300C\u5F53\u524D\u300D"),"\u7684 dataSource \u4E0E columns\u3002\u8C03\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.getProps()")," \u65F6\uFF0C\u300C\u5F53\u524D\u300D\u7684\u8FD9\u4EFD\u6570\u636E\u5C06\u88AB\u8FD4\u56DE\uFF0C\u5E76\u4F5C\u4E3A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"<BaseTable />")," \u7684 props\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6309\u7167\u7279\u5B9A\u65B9\u5F0F\uFF0C\u5BF9\u5F53\u524D\u6570\u636E\u8FDB\u884C\u66F4\u65B0\uFF0C\u53EF\u4EE5\u6539\u53D8\u8868\u683C\u7684\u5C55\u73B0\u3002\u4F8B\u5982\u4EE5\u4E0B\u4EE3\u7801\u5C31\u53EF\u4EE5\u4F7F\u5F97\u8868\u683C\u884C\u7684\u6570\u91CF\u53D8\u4E3A\u539F\u6765\u7684\u4E24\u500D\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-js"}),"dataSource = dataSource.concat(dataSource)\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"处理数据的-api"},"\u5904\u7406\u6570\u636E\u7684 API"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728 pipeline \u4E2D\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u7684 API \u8BFB\u53D6\u6216\u66F4\u65B0\u6570\u636E\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinegetdatasourcename-string"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.getDataSource(name?: string)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u83B7\u53D6\u5F53\u524D\u7684 dataSource\u3002\u5982\u679C\u63D0\u4F9B\u4E86 name \u53C2\u6570\uFF0C\u5219\u83B7\u53D6 name \u5BF9\u5E94\u7684 dataSource\uFF0C\u5373\u4E0A\u6B21\u8C03\u7528 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.snapshot(name)")," \u65F6 pipeline \u4E2D\u7684 dataSource\uFF09\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinegetcolumnsname-string"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.getColumns(name?: string)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u83B7\u53D6\u5F53\u524D\u7684 columns\uFF1B\u5982\u679C\u63D0\u4F9B\u4E86 name \u53C2\u6570\uFF0C\u5219\u83B7\u53D6 name \u5BF9\u5E94\u7684 columns"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinedatasourcerows"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.dataSource(rows)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8BBE\u7F6E\u5F53\u524D dataSource\uFF0C\u5E76\u8FD4\u56DE pipeline \u5BF9\u8C61\u672C\u8EAB"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinecolumnscols"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.columns(cols)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8BBE\u7F6E\u5F53\u524D columns\uFF0C\u5E76\u8FD4\u56DE pipeline \u5BF9\u8C61\u672C\u8EAB"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinemapdatasourcemapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.mapDataSource(mapper)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5BF9 dataSource \u8FDB\u884C\u53D8\u6362\uFF0Cmapper \u4F1A\u63A5\u53D7\u5F53\u524D dataSource \u4F5C\u4E3A\u53C2\u6570\uFF0C\u9700\u8981\u8FD4\u56DE\u4E00\u4EFD\u65B0\u7684 dataSource\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE pipeline \u5BF9\u8C61\u672C\u8EAB"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinemapcolumnsmapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.mapColumns(mapper)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5BF9 columns \u8FDB\u884C\u53D8\u6362\uFF0Cmapper \u4F1A\u63A5\u53D7\u5F53\u524D columns \u4F5C\u4E3A\u53C2\u6570\uFF0C\u9700\u8981\u8FD4\u56DE\u4E00\u4EFD\u65B0\u7684 columns\u3002\u6CE8\u610F columns \u4E0D\u4E00\u5B9A\u662F\u7B80\u5355\u7684\u6570\u7EC4\uFF0C\u53EF\u80FD\u5B58\u5728\u5D4C\u5957\u7684\u60C5\u51B5\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE pipeline \u5BF9\u8C61\u672C\u8EAB"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinesnapshotname-string"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.snapshot(name: string)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5C06\u5F53\u524D\u7684 dataSource/columns \u4FDD\u5B58\u4E3A\u5FEB\u7167\uFF0C\u540E\u7EED\u53EF\u4EE5\u6839\u636E name \u6765\u83B7\u53D6\u6B64\u65F6\u7684 dataSource/columns"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelineappendrowpropsgetterfn"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.appendRowPropsGetter(fn)")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8003\u8651\u5230\u4E00\u4E2A pipeline \u4E0A\u53EF\u80FD\u4F1A\u6709\u591A\u4E2A\u62D3\u5C55\u5B9A\u5236\u4E86\u8868\u683C\u884C\u7684 props \uFF0Cpipeline \u5185\u90E8\u7EF4\u62A4\u4E86\u4E00\u4E2A ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"getRowProps")," \u7684\u6570\u7EC4\u3002\u8BE5\u6570\u7EC4\u4F1A\u6536\u96C6\u6240\u6709\u7684 getRowProps \u56DE\u8C03\uFF0C\u5E76\u5728 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.getProps()")," \u65F6\u5C06\u8FD9\u4E9B\u56DE\u8C03\u5408\u5E76\u4E3A\u4E00\u4E2A\u5B8C\u6574\u7684 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"getRowProps"),"\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.appendRowPropsGetter(...)")," \u53EF\u5411 pipeline \u4E2D\u6DFB\u52A0\u4E00\u4E2A getRowProps \u56DE\u8C03\u51FD\u6570\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u8868\u683C\u884C\u7684 props\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE pipeline \u5BF9\u8C61\u672C\u8EAB"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"pipeline-操作示例"},"pipeline \u64CD\u4F5C\u793A\u4F8B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5229\u7528\u4E0A\u9762\u7684 API \u5B9E\u73B0\u4E86\u300Ccolumns \u66F4\u65B0\u300D\u548C\u300C\u7EA2\u7EFF\u76F8\u95F4\u80CC\u666F\u8272\u300D\u7B49\u6548\u679C\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u884C\u591A\u9009() {\n  const dataSource = assets.biz.dataSource4\n  const columns = assets.biz.columns4\n\n  const pipeline = useTablePipeline({ components: fusion })\n  pipeline.input({ dataSource, columns })\n  pipeline.primaryKey('id') // \u6BCF\u4E00\u884C\u6570\u636E\u7531 id \u5B57\u6BB5\u552F\u4E00\u6807\u8BB0\n\n  // \u81EA\u5B9A\u4E49\u6570\u636E\u5904\u7406\u903B\u8F911: \u5C06\u6240\u6709\u5217\u7684 lock \u8BBE\u7F6E false\uFF0C\u5E76\u5C06 align \u8BBE\u7F6E\u4E3A right\n  const columns1 = pipeline.getColumns()\n  const columns2 = columns1.map((col) => ({ ...col, lock: false, align: 'right' }))\n  pipeline.columns(columns2)\n\n  // \u81EA\u5B9A\u4E49\u6570\u636E\u5904\u7406\u903B\u8F912: \u91CD\u590D dataSource\n  // pipeline.mapDataSource((arr) => arr.flatMap((d) => [d, { ...d, id: d.id + '_copy' }]))\n\n  // \u81EA\u5B9A\u4E49\u6570\u636E\u5904\u7406\u903B\u8F913: \u7EA2\u7EFF\u76F8\u95F4\u7684\u80CC\u666F\u8272\n  pipeline.appendRowPropsGetter((row, rowIndex) => {\n    const color = rowIndex % 2 === 0 ? 'rgba(253, 32, 32, 0.32)' : 'rgba(128, 243, 87, 0.32)'\n    return {\n      style: { '--bgcolor': color, '--hover-bgcolor': color },\n    }\n  })\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"使用-pipeline-上下文"},"\u4F7F\u7528 pipeline \u4E0A\u4E0B\u6587"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u9664\u4E86\u5BF9 dataSource/columns \u7684\u7BA1\u7406\u4E4B\u5916\uFF0Cpipeline \u5185\u90E8\u8FD8\u5305\u542B\u4E86\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF08\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.ctx")," \u6765\u83B7\u53D6\uFF09\uFF0C\u4E0D\u540C\u7684 pipeline \u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7 ctx \u6765\u5171\u4EAB\u4E00\u4E9B\u4FE1\u606F\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.ctx")," \u4E2D\u7684\u90E8\u5206\u5B57\u6BB5\u6709\u7279\u5B9A\u7684\u542B\u4E49\uFF0C\u5177\u4F53\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"pipeline.ctx.primaryKey")," \u8868\u683C\u7684\u4E3B\u952E\u914D\u7F6E",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",{parentName:"li"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u8F85\u52A9\u65B9\u6CD5 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"pipeline.ensurePrimaryKey(hint?: string): PrimaryKey")," \u53EF\u7528\u4E8E\u786E\u4FDD primaryKey \u5DF2\u88AB\u8BBE\u7F6E\uFF1B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u5982\u679C\u5C1A\u672A\u88AB\u8BBE\u7F6E\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u6839\u636E hint \u53C2\u6570\u751F\u6210\u62A5\u9519\u4FE1\u606F"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"pipeline.ctx.indents")," \u7F29\u8FDB\u914D\u7F6E"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"li"},"pipeline.ctx.components")," \u5728 pipeline \u4E2D\u6CE8\u518C\u7684\u7EC4\u4EF6")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"表格拓展封装"},"\u8868\u683C\u62D3\u5C55\u5C01\u88C5"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8868\u683C\u62D3\u5C55\u7684\u672C\u8D28\u662F\u4E00\u4E2A\u7B26\u5408 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"(pipeline: TablePipeline) => TablePipeline")," \u7684\u51FD\u6570\u3002\u5C06\u300C\u9488\u5BF9 pipeline \u7684\u4E00\u4E9B\u64CD\u4F5C\u300D\u653E\u5230\u4E00\u4E2A\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86\u76F8\u5E94\u7684\u8868\u683C\u62D3\u5C55\u529F\u80FD\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u4EE5\u524D\u9762\u7684 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"#pipeline-%E6%93%8D%E4%BD%9C%E7%A4%BA%E4%BE%8B"}),"pipeline \u64CD\u4F5C\u793A\u4F8B")," \u4E3A\u4F8B\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u300C\u5C06\u6240\u6709\u5217\u7684 lock \u8BBE\u7F6E false\uFF0C\u5E76\u5C06 align \u8BBE\u7F6E\u4E3A right\u300D\u8FD9\u4E9B\u64CD\u4F5C\u653E\u5728\u4E00\u4E2A\u51FD\u6570\u4E2D\uFF0C\u5E76\u8BA9\u51FD\u6570\u8FD4\u56DE pipeline \u5BF9\u8C61\uFF0C\u5373\u5B8C\u6210\u4E86\u8868\u683C\u62D3\u5C55\u7684\u5C01\u88C5\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"// \u5B9A\u4E49\u8868\u683C\u62D3\u5C55\nfunction noLockAndAlignRight(pipeline) {\n  // \u81EA\u5B9A\u4E49\u6570\u636E\u5904\u7406\u903B\u8F911: \u5C06\u6240\u6709\u5217\u7684 lock \u8BBE\u7F6E false\uFF0C\u5E76\u5C06 align \u8BBE\u7F6E\u4E3A right\n  const columns1 = pipeline.getColumns()\n  const columns2 = columns1.map((col) => ({ ...col, lock: false, align: 'right' }))\n  pipeline.columns(columns2)\n\n  return pipeline\n}\n\n// \u4F7F\u7528\u8868\u683C\u62D3\u5C55\npipeline.use(noLockAndAlignRight)\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h2",{"id":"状态管理"},"\u72B6\u6001\u7BA1\u7406"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5728\u5B9E\u73B0\u4E00\u4E9B\u8F83\u4E3A\u590D\u6742\u7684\u62D3\u5C55\u529F\u80FD\u65F6\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u4F7F\u7528\u4E00\u4E9B\u975E\u53D7\u63A7\u7684\u72B6\u6001\uFF0C\u4EE5\u4FBF\u5C4F\u853D\u4E00\u4E9B\u5185\u90E8\u5B9E\u73B0\u7EC6\u8282\uFF0C\u65B9\u4FBF\u4E0A\u5C42\u7528\u6237\u4F7F\u7528\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u62D3\u5C55\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u6765\u4ECE ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"pipeline.state")," \u83B7\u53D6\u4E00\u4EFD\u81EA\u5DF1\u7684\u72B6\u6001\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"function myCustomTableFeature(pipeline) {\n  const stateKey = 'myCustomTableFeature'\n\n  // \u83B7\u53D6\u72B6\u6001\n  const value = pipeline.getStateAtKey(stateKey, defaultValue)\n\n  // \u5728\u67D0\u4E2A\u56DE\u8C03\u51FD\u6570\u4E2D\u8BBE\u7F6E\u72B6\u6001\n  const onClick = () => pipeline.setStateAtKey(stateKey, nextValue)\n\n  // \u5BF9 dataSource/columns \u8FDB\u884C\u5904\u7406...\n\n  return pipeline\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"状态管理-api"},"\u72B6\u6001\u7BA1\u7406 API"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinegetstateatkeystatekey-string-defaultvalue-any-any"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.getStateAtKey(stateKey: string, defaultValue?: any): any")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u8BFB\u53D6 stateKey \u5BF9\u5E94\u7684\u72B6\u6001"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h4",{"id":"pipelinesetstateatkeystatekey-string-partialstate-any-void"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"h4"},"pipeline.setStateAtKey(stateKey: string, partialState: any): void")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5C06 stateKey \u5BF9\u5E94\u7684\u72B6\u6001\u8BBE\u7F6E\u4E3A partialState"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",{"className":"admonition admonition-note alert alert--secondary"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-heading"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h5",{parentName:"div"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("span",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"h5"},{"className":"admonition-icon"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("svg",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"span"},{"xmlns":"http://www.w3.org/2000/svg","width":"14","height":"16","viewBox":"0 0 14 16"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("path",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"svg"},{"fillRule":"evenodd","d":"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("div",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"div"},{"className":"admonition-content"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",{parentName:"div"},"pipeline \u4E2D\u6240\u6709\u7684 stateKey \u5171\u4EAB\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\uFF0C\u63A8\u8350\u4E3A\u62D3\u5C55\u8BBE\u7F6E\u4E00\u4E2A\u4E0E\u62D3\u5C55\u540D\u79F0\u76F8\u540C\u7684 stateKey\uFF0C\u907F\u514D\u4E0D\u540C\u62D3\u5C55\u4E4B\u95F4\u53D1\u751F\u51B2\u7A81\u3002"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("hr",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u6240\u6709 ali-react-table \u63D0\u4F9B\u7684\u62D3\u5C55\u90FD\u662F\u901A\u8FC7\u4E0A\u8FF0\u65B9\u5F0F\u6765\u5B9E\u73B0\u7684\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u8868\u683C\u62D3\u5C55\u65F6",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"https://github.com/alibaba/ali-react-table/tree/master/packages/ali-react-table/src/pipeline/features"}),"\u53EF\u4F9B\u53C2\u8003"),"\u3002"));};MDXContent.isMDXComponent=true;

/***/ })

}]);