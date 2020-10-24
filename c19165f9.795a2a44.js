(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

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

/***/ 99:
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
var frontMatter={id:'row-detail',title:'行详情'};var metadata={"unversionedId":"pipeline/features/row-detail","id":"pipeline/features/row-detail","isDocsHomePage":false,"title":"行详情","description":"示例","source":"@site/docs/pipeline/features/row-detail.mdx","slug":"/pipeline/features/row-detail","permalink":"/docs/pipeline/features/row-detail","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/row-detail.mdx","version":"current","sidebar":"sidebar","previous":{"title":"行多选","permalink":"/docs/pipeline/features/multi-select"},"next":{"title":"行分组","permalink":"/docs/pipeline/features/row-grouping"}};/* @jsx mdx */var rightToc=[{value:'示例',id:'示例',children:[]},{value:'使用方式',id:'使用方式',children:[]},{value:'表格嵌套示例',id:'表格嵌套示例',children:[]},{value:'表格套娃',id:'表格套娃',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"示例"},"\u793A\u4F8B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u884C\u8BE6\u60C5() {\n  const dataSource = assets.biz.dataSource1\n  const columns = assets.biz.columns1.slice(0, 4)\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .primaryKey('id')\n    .use(\n      features.rowDetail({\n        defaultOpenKeys: ['2'],\n        hasDetail(row) {\n          return ['1', '2', '3'].includes(row.id)\n        },\n        renderDetail(row) {\n          return (\n            <docHelpers.DetailDiv style={{ margin: 8 }}>\n              <div className=\"left\">\n                <p>\u6700\u8FD1\u5DE5\u4F5C\uFF1A\u9AD8\u7EA7\u7ECF\u7406\uFF5C{row.dept}\uFF5C2009-07-01 \u81F3\u4ECA</p>\n                <p>\u5DE5\u4F5C\u804C\u8D23\uFF1A\u5DF4\u62C9\u5DF4\u62C9\u5C0F\u9B54\u4ED9</p>\n                <p>\u8054\u7CFB\u65B9\u5F0F\uFF1A67676767\uFF5C1212121@163.con</p>\n              </div>\n              <div className=\"right\">\n                <p>\u6559\u80B2\u7ECF\u7406\uFF1A\u5317\u4EAC\u5927\u5B66\uFF5C\u5DE5\u5546\u7BA1\u7406\uFF5C2007-09-01 \u81F3 2006-06-01</p>\n                <p>\u4E2D\u592E\u8D22\u7ECF\u5927\u5B66\uFF5C2004-09-01 \u81F3 2007-06-01</p>\n              </div>\n            </docHelpers.DetailDiv>\n          )\n        },\n      }),\n    )\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"使用方式"},"\u4F7F\u7528\u65B9\u5F0F"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("li",{parentName:"ul"},"\u542F\u7528\u884C\u591A\u9009\u529F\u80FD\u4E4B\u524D\uFF0Cpipeline \u5FC5\u987B\u5DF2\u7ECF\u8BBE\u7F6E\u4E86 primaryKey\uFF0C\u4E14 primaryKey \u53EA\u80FD\u4E3A\u5B57\u7B26\u4E32\u3002")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx"}),"pipeline.use(features.rowDetail(options))\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"options \u7ED3\u6784\u5982\u4E0B\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-ts"}),"export interface RowDetailFeatureOptions {\n  /** \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u8BE6\u60C5\u5355\u5143\u683C */\n  defaultOpenAll?: boolean\n\n  /** \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u9ED8\u8BA4\u5C55\u5F00\u7684 keys */\n  defaultOpenKeys?: string[]\n\n  /** \u53D7\u63A7\u7528\u6CD5\uFF1A\u5F53\u524D\u5C55\u5F00\u7684 keys */\n  openKeys?: string[]\n\n  /** \u53D7\u63A7\u7528\u6CD5\uFF1AopenKeys \u6539\u53D8\u7684\u56DE\u8C03 */\n  onChangeOpenKeys?(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void\n\n  /** \u8BE6\u60C5\u5355\u5143\u683C\u7684\u6E32\u67D3\u65B9\u6CD5 */\n  renderDetail?(row: any, rowIndex: number): ReactNode\n\n  /** \u662F\u5426\u5305\u542B\u8BE6\u60C5\u5355\u5143\u683C */\n  hasDetail?(row: any, rowIndex: number): ReactNode\n\n  /** \u83B7\u53D6\u8BE6\u60C5\u5355\u5143\u683C\u6240\u5728\u884C\u7684 key\uFF0C\u9ED8\u8BA4\u4E3A `(row) => row[primaryKey] + '_detail'` */\n  getDetailKey?(row: any, rowIndex: number): string\n\n  /** \u8BE6\u60C5\u5355\u5143\u683C td \u7684\u989D\u5916\u6837\u5F0F */\n  detailCellStyle?: React.CSSProperties\n\n  /** \u70B9\u51FB\u4E8B\u4EF6\u7684\u54CD\u5E94\u533A\u57DF */\n  clickArea?: 'cell' | 'content' | 'icon'\n\n  /** \u662F\u5426\u5BF9\u89E6\u53D1\u5C55\u5F00/\u6536\u62E2\u7684 click \u4E8B\u4EF6\u8C03\u7528 event.stopPropagation() */\n  stopClickEventPropagation?: boolean\n\n  /** \u6307\u5B9A\u8868\u683C\u6BCF\u4E00\u884C\u5143\u4FE1\u606F\u7684\u8BB0\u5F55\u5B57\u6BB5 */\n  rowDetailMetaKey?: string | symbol\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"表格嵌套示例"},"\u8868\u683C\u5D4C\u5957\u793A\u4F8B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u901A\u8FC7 ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"options.renderDetail")," \u6E32\u67D3 BaseTable \u53EF\u4EE5\u5B9E\u73B0\u8868\u683C\u5D4C\u5957\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u8868\u683C\u5D4C\u5957() {\n  const dataSource = assets.biz.dataSource1.slice(0, 3)\n  const columns = assets.biz.columns1.slice(0, 4)\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .primaryKey('id')\n    .use(\n      features.rowDetail({\n        defaultOpenKeys: ['2'],\n        renderDetail() {\n          return (\n            <BaseTable\n              style={{ boxShadow: '0 0 4px 1px #33333333', margin: 8 }}\n              hasHeader={false}\n              className=\"bordered compact\"\n              dataSource={dataSource}\n              columns={columns}\n            />\n          )\n        },\n      }),\n    )\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"表格套娃"},"\u8868\u683C\u5957\u5A03"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u9012\u5F52\u7684\u8868\u683C\u5D4C\u5957\u3002\u6CE8\u610F\u6B64\u65F6\u8981\u8BBE\u7F6E ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"isStickyHead={false}"),"\uFF0C\u907F\u514D\u591A\u4E2A\u8868\u5934\u5438\u9644\u5728\u540C\u4E00\u4E2A\u4F4D\u7F6E\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function NestedTableExample({ depth = 0 }) {\n  function renderDetail() {\n    let msg\n    if (depth < 2) {\n    } else if (depth <= 4) {\n      msg = '\u52A0\u6CB9\uFF0C\u9A6C\u4E0A\u5C31\u5230\u5E95\u4E86'\n    } else if (depth <= 6) {\n      msg = '\u8FD8\u5269\u6700\u540E\u51E0\u5C42\u4E86'\n    } else if (depth <= 8) {\n      msg = '\u52A0\u6CB9\uFF0C\u8FD8\u5DEE\u4E00\u70B9\u70B9'\n    } else {\n      return <div>\u5230\u5E95\u4E86~</div>\n    }\n\n    return (\n      <div style={{ margin: 8 }}>\n        {msg}\n        <NestedTableExample depth={depth + 1} />\n      </div>\n    )\n  }\n\n  const dataSource = assets.biz.dataSource1.slice(0, 3)\n  const columns = assets.biz.columns1.slice(0, 4)\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .primaryKey('id')\n    .use(features.rowDetail({ renderDetail }))\n\n  return <BaseTable isStickyHead={false} {...pipeline.getProps()} />\n}\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);