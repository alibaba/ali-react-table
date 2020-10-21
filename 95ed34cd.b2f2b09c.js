(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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

/***/ 91:
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
var frontMatter={id:'theming',title:'表格主题'};var metadata={"unversionedId":"table/theming","id":"table/theming","isDocsHomePage":false,"title":"表格主题","description":"`` 中大部分样式都是通过 CSS variables 来定义的。 通过覆盖 CSS variables 的值，可以快速定制出一套新的表格主题。","source":"@site/docs/table/theming.mdx","slug":"/table/theming","permalink":"/docs/table/theming","editUrl":"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/table/theming.mdx","version":"current","sidebar":"sidebar","previous":{"title":"进阶用法","permalink":"/docs/table/advanced-usage"},"next":{"title":"BaseTable API","permalink":"/docs/table/api"}};/* @jsx mdx */var rightToc=[{value:'主题切换示例',id:'主题切换示例',children:[]}];var layoutProps={rightToc:rightToc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])(MDXLayout,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("inlineCode",{parentName:"p"},"<BaseTable />")," \u4E2D\u5927\u90E8\u5206\u6837\u5F0F\u90FD\u662F\u901A\u8FC7 CSS variables \u6765\u5B9A\u4E49\u7684\u3002 \u901A\u8FC7\u8986\u76D6 CSS variables \u7684\u503C\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5B9A\u5236\u51FA\u4E00\u5957\u65B0\u7684\u8868\u683C\u4E3B\u9898\u3002"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"BaseTable \u9ED8\u8BA4\u53EA\u63D0\u4F9B\u4E86\u4EAE\u8272\u4E3B\u9898\uFF0C\u4E0B\u9762\u7684 WebsiteBaseTable.js \u5C55\u793A\u4E86\u5728\u6587\u6863\u7F51\u7AD9\u4E2D\uFF0C\u6211\u4EEC\u662F\u5982\u4F55\u5B9E\u73B0\u6697\u8272\u4E3B\u9898\u7684\uFF1A"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-typescript","metastring":"title=\"WebsiteBaseTable.js\"","title":"\"WebsiteBaseTable.js\""}),"import React from 'react'\nimport { BaseTable } from 'ali-react-table'\nimport styled from 'styled-components'\nimport useThemeContext from '@theme/hooks/useThemeContext'\n\nconst DarkBaseTable = styled(BaseTable)`\n  --bgcolor: #333;\n  --header-bgcolor: #45494f;\n  --hover-bgcolor: #46484a;\n  --header-hover-bgcolor: #606164;\n  --highlight-bgcolor: #191a1b;\n  --header-highlight-bgcolor: #191a1b;\n  --color: #dadde1;\n  --header-color: #dadde1;\n  --lock-shadow: rgb(37 37 37 / 0.5) 0 0 6px 2px;\n  --border-color: #3c4045;\n`\n\nexport const WebsiteBaseTable = React.forwardRef((props, ref) => {\n  const { isDarkTheme } = useThemeContext()\n\n  // \u4E0B\u9762\u7684\u5199\u6CD5\u4E0B\uFF0C\u5207\u6362\u4E3B\u9898\u5C06\u5BFC\u81F4\u7EC4\u4EF6\u91CD\u65B0\u52A0\u8F7D\n  // \u5982\u679C\u8981\u907F\u514D\u91CD\u65B0\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u4F7F\u7528 styled-components \u63D0\u4F9B\u7684 css \u65B9\u6CD5\n  const Table = isDarkTheme ? DarkBaseTable : BaseTable\n\n  return <Table ref={ref} {...props} />\n})\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("h3",{"id":"主题切换示例"},"\u4E3B\u9898\u5207\u6362\u793A\u4F8B"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("code",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"pre"},{"className":"language-jsx","metastring":"live","live":true}),"function \u9650\u5B9A\u8868\u683C\u5BB9\u5668\u5927\u5C0F() {\n  const { dataSource1, operationCol } = assets.biz\n\n  const nameCol = { lock: true, code: 'name', width: 200, name: '\u516C\u53F8\u540D\u79F0' }\n  const repeats = [\n    { code: 'amount', width: 160, align: 'right', name: '\u91D1\u989D' },\n    { code: 'dept', width: 160, name: '\u91D1\u878D\u673A\u6784' },\n    { code: 'applier', width: 120, name: '\u7533\u8BF7\u4EBA' },\n  ]\n\n  function repeat(arr, n) {\n    let result = []\n    for (let i = 0; i < n; i++) {\n      result = result.concat(arr)\n    }\n    return result\n  }\n\n  const [theme, setTheme] = useState('default')\n\n  let Table = BaseTable\n  if (theme === 'antd') {\n    Table = assets.AntdBaseTable\n  } else if (theme === 'hippo') {\n    Table = assets.HippoBaseTable\n  }\n\n  return (\n    <div>\n      <div>\n        <span style={{ marginRight: 24 }}>\u9009\u62E9\u4E3B\u9898\uFF08\u6CE8\u610F\u53EA\u6709 default \u652F\u6301\u6697\u8272\u6A21\u5F0F\uFF09\uFF1A</span>\n        <assets.RadioButtonGroup\n          value={theme}\n          onChange={setTheme}\n          dataSource={['default', 'antd', 'hippo'].map((v) => ({ label: v, value: v }))}\n        />\n      </div>\n      <Table\n        style={{ marginTop: 12, maxWidth: 800, height: 400, overflow: 'auto' }}\n        dataSource={repeat(dataSource1, 5)}\n        columns={[\n          {\n            name: '\u5E8F\u53F7',\n            width: 70,\n            align: 'right',\n            lock: true,\n            getValue(_, rowIndex) {\n              return String(rowIndex + 1)\n            },\n          },\n          nameCol,\n          ...repeat(repeats, 5),\n          operationCol,\n        ]}\n      />\n    </div>\n  )\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("p",null,"\u5982\u679C\u4F60\u662F antd \u7528\u6237\uFF0C\u53EF\u4EE5\u53C2\u8003",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[/* mdx */ "b"])("a",Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_docusaurus_core_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({parentName:"p"},{"href":"https://github.com/alibaba/ali-react-table/blob/master/packages/assets/src/AntdBaseTable.tsx"}),"\u8BE5\u6587\u4EF6"),"\u6765\u5B9E\u73B0 antd \u6837\u5F0F\u7684\u8868\u683C\u7EC4\u4EF6\u3002"));};MDXContent.isMDXComponent=true;

/***/ })

}]);