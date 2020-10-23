(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
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

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useDocusaurusContext(){const docusaurusContext=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);if(docusaurusContext===null){// should not happen normally
throw new Error('Docusaurus context not provided');}return docusaurusContext;}/* harmony default export */ __webpack_exports__["a"] = (useDocusaurusContext);

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useThemeConfig; });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useThemeConfig(){return Object(_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])().siteConfig.themeConfig;}

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.useDocVersionSuggestions=exports.useActiveDocContext=exports.useActiveVersion=exports.useLatestVersion=exports.useVersions=exports.useActivePluginAndVersion=exports.useActivePlugin=exports.useDocsData=exports.useAllDocsData=void 0;const router_1=__webpack_require__(232);const useGlobalData_1=__webpack_require__(780);const docsClientUtils_1=__webpack_require__(781);exports.useAllDocsData=()=>useGlobalData_1.useAllPluginInstancesData('docusaurus-plugin-content-docs');exports.useDocsData=pluginId=>useGlobalData_1.usePluginData('docusaurus-plugin-content-docs',pluginId);exports.useActivePlugin=(options={})=>{const data=exports.useAllDocsData();const{pathname}=router_1.useLocation();return docsClientUtils_1.getActivePlugin(data,pathname,options);};exports.useActivePluginAndVersion=(options={})=>{const activePlugin=exports.useActivePlugin(options);const{pathname}=router_1.useLocation();if(activePlugin){const activeVersion=docsClientUtils_1.getActiveVersion(activePlugin.pluginData,pathname);return{activePlugin,activeVersion};}return undefined;};// versions are returned ordered (most recent first)
exports.useVersions=pluginId=>{const data=exports.useDocsData(pluginId);return data.versions;};exports.useLatestVersion=pluginId=>{const data=exports.useDocsData(pluginId);return docsClientUtils_1.getLatestVersion(data);};// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
exports.useActiveVersion=pluginId=>{const data=exports.useDocsData(pluginId);const{pathname}=router_1.useLocation();return docsClientUtils_1.getActiveVersion(data,pathname);};exports.useActiveDocContext=pluginId=>{const data=exports.useDocsData(pluginId);const{pathname}=router_1.useLocation();return docsClientUtils_1.getActiveDocContext(data,pathname);};// Useful to say "hey, you are not on the latest docs version, please switch"
exports.useDocVersionSuggestions=pluginId=>{const data=exports.useDocsData(pluginId);const{pathname}=router_1.useLocation();return docsClientUtils_1.getDocVersionSuggestions(data,pathname);};

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(14);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(429);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(10);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/LinksCollector.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const createStatefulLinksCollector=()=>{// Set to dedup, as it's not useful to collect multiple times the same link
const allLinks=new Set();return{collectLink:link=>{allLinks.add(link);},getCollectedLinks:()=>{return[...allLinks];}};};const Context=/*#__PURE__*/Object(react["createContext"])({collectLink:()=>{// noop by default for client
// we only use the broken links checker server-side
}});const useLinksCollector=()=>{return Object(react["useContext"])(Context);};const ProvideLinksCollector=({children,linksCollector})=>{return/*#__PURE__*/react_default.a.createElement(Context.Provider,{value:linksCollector},children);};
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(231);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/Link.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
const shouldAddBaseUrlAutomatically=to=>to.startsWith('/');function Link(_a){var _b;var{isNavLink,to,href,activeClassName,isActive,'data-noBrokenLinkCheck':noBrokenLinkCheck}=_a,props=__rest(_a,["isNavLink","to","href","activeClassName","isActive",'data-noBrokenLinkCheck']);const{withBaseUrl}=Object(useBaseUrl["b" /* useBaseUrlUtils */])();const linksCollector=useLinksCollector();// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
const targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}const isInternal=Object(isInternalUrl["a" /* default */])(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
const targetLinkWithoutPathnameProtocol=targetLinkUnprefixed===null||targetLinkUnprefixed===void 0?void 0:targetLinkUnprefixed.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
const targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;const preloaded=Object(react["useRef"])(false);const LinkComponent=isNavLink?react_router_dom["e" /* NavLink */]:react_router_dom["c" /* Link */];const IOSupported=ExecutionEnvironment["a" /* default */].canUseIntersectionObserver;let io;const handleIntersection=(el,cb)=>{io=new window.IntersectionObserver(entries=>{entries.forEach(entry=>{if(el===entry.target){// If element is in viewport, stop listening/observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(el);io.disconnect();cb();}}});});// Add element to the observer.
io.observe(el);};const handleRef=ref=>{if(IOSupported&&ref&&isInternal){// If IO supported and element reference found, setup Observer functionality.
handleIntersection(ref,()=>{window.docusaurus.prefetch(targetLink);});}};const onMouseEnter=()=>{if(!preloaded.current){window.docusaurus.preload(targetLink);preloaded.current=true;}};Object(react["useEffect"])(()=>{// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal){window.docusaurus.prefetch(targetLink);}// When unmounting, stop intersection observer from watching.
return()=>{if(IOSupported&&io){io.disconnect();}};},[targetLink,IOSupported,isInternal]);const isAnchorLink=(_b=targetLink===null||targetLink===void 0?void 0:targetLink.startsWith('#'))!==null&&_b!==void 0?_b:false;const isRegularHtmlLink=!targetLink||!isInternal||isAnchorLink;if(targetLink&&isInternal&&!isAnchorLink&&!noBrokenLinkCheck){linksCollector.collectLink(targetLink);}return isRegularHtmlLink?/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
react_default.a.createElement("a",Object.assign({href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'},props)):/*#__PURE__*/react_default.a.createElement(LinkComponent,Object.assign({},props,{onMouseEnter:onMouseEnter,innerRef:handleRef,to:targetLink||''},isNavLink&&{isActive,activeClassName}));}/* harmony default export */ var exports_Link = __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useBaseUrlUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useBaseUrl; });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl(siteUrl,baseUrl,url,{forcePrependBaseUrl=false,absolute=false}={}){if(!url){return url;}// it never makes sense to add a base url to a local anchor url
if(url.startsWith('#')){return url;}// it never makes sense to add a base url to an url with a protocol
if(Object(_isInternalUrl__WEBPACK_IMPORTED_MODULE_1__[/* hasProtocol */ "b"])(url)){return url;}if(forcePrependBaseUrl){return baseUrl+url;}// We should avoid adding the baseurl twice if it's already there
const shouldAddBaseUrl=!url.startsWith(baseUrl);const basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){const{siteConfig:{baseUrl='/',url:siteUrl}={}}=Object(_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();return{withBaseUrl:(url,options)=>{return addBaseUrl(siteUrl,baseUrl,url,options);}};}function useBaseUrl(url,options={}){const{withBaseUrl}=useBaseUrlUtils();return withBaseUrl(url,options);}

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return react_router_dom__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useDocsPreferredVersion; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useDocsPreferredVersionByPluginId; });

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/docsPreferredVersion/DocsPreferredVersionProvider.js + 2 modules
var DocsPreferredVersionProvider = __webpack_require__(509);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/plugin-content-docs/lib/theme/hooks/useDocs.js
var useDocs = __webpack_require__(220);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/constants.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
// eslint-disable-next-line no-restricted-imports
export {
  // constants were only available on node
  // this makes some useful constants available to frontend/themes too
  // import {DEFAULT_PLUGIN_ID} '@docusaurus/constants'
  DEFAULT_PLUGIN_ID,
} from '../../constants';
 */ // Not duplicating the constants seems to produce
// weird TS compilation side-effects
const DEFAULT_PLUGIN_ID='default';
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/docsPreferredVersion/useDocsPreferredVersion.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note, the preferredVersion attribute will always be null before mount
function useDocsPreferredVersion(pluginId=DEFAULT_PLUGIN_ID){const docsData=Object(useDocs["useDocsData"])(pluginId);const[state,api]=Object(DocsPreferredVersionProvider["b" /* useDocsPreferredVersionContext */])();const{preferredVersionName}=state[pluginId];const preferredVersion=preferredVersionName?docsData.versions.find(version=>version.name===preferredVersionName):null;const savePreferredVersionName=Object(react["useCallback"])(versionName=>{api.savePreferredVersion(pluginId,versionName);},[api]);return{preferredVersion,savePreferredVersionName};}function useDocsPreferredVersionByPluginId(){const allDocsData=Object(useDocs["useAllDocsData"])();const[state]=Object(DocsPreferredVersionProvider["b" /* useDocsPreferredVersionContext */])();function getPluginIdPreferredVersion(pluginId){const docsData=allDocsData[pluginId];const{preferredVersionName}=state[pluginId];return preferredVersionName?docsData.versions.find(version=>version.name===preferredVersionName):null;}const pluginIds=Object.keys(allDocsData);const result={};pluginIds.forEach(pluginId=>{result[pluginId]=getPluginIdPreferredVersion(pluginId);});return result;}

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isInternalUrl; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hasProtocol(url){return /^(\w*:|\/\/)/.test(url)===true;}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Head(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[/* Helmet */ "a"],Object.assign({},props));}/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(199);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(230);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(231);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(232);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(786);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavLink({activeBasePath,activeBaseRegex,to,href,label,activeClassName='navbar__link--active',prependBaseUrlToHref,...props}){// TODO all this seems hacky
// {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
const toUrl=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(to);const activeBaseUrl=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(activeBasePath);const normalizedHref=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(href,{forcePrependBaseUrl:true});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},href?{target:'_blank',rel:'noopener noreferrer',href:prependBaseUrlToHref?normalizedHref:href}:{isNavLink:true,activeClassName,to:toUrl,...(activeBasePath||activeBaseRegex?{isActive:(_match,location)=>activeBaseRegex?new RegExp(activeBaseRegex).test(location.pathname):location.pathname.startsWith(activeBaseUrl)}:null)},props),label);}function NavItemDesktop({items,position,className,...props}){const dropdownRef=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);const dropdownMenuRef=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);const[showDropdown,setShowDropdown]=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(()=>{const handleClickOutside=event=>{if(!dropdownRef.current||dropdownRef.current.contains(event.target)){return;}setShowDropdown(false);};document.addEventListener('mousedown',handleClickOutside);document.addEventListener('touchstart',handleClickOutside);return()=>{document.removeEventListener('mousedown',handleClickOutside);document.removeEventListener('touchstart',handleClickOutside);};},[dropdownRef]);const navLinkClassNames=(extraClassName,isDropdownItem=false)=>Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({'navbar__item navbar__link':!isDropdownItem,dropdown__link:isDropdownItem},extraClassName);if(!items){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({className:navLinkClassNames(className)},props));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{ref:dropdownRef,className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('navbar__item','dropdown','dropdown--hoverable',{'dropdown--left':position==='left','dropdown--right':position==='right','dropdown--show':showDropdown})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({className:navLinkClassNames(className)},props,{onClick:props.to?undefined:e=>e.preventDefault(),onKeyDown:e=>{if(e.key==='Enter'){e.preventDefault();setShowDropdown(!showDropdown);}}}),props.label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{ref:dropdownMenuRef,className:"dropdown__menu"},items.map(({className:childItemClassName,...childItemProps},i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({onKeyDown:e=>{if(i===items.length-1&&e.key==='Tab'){e.preventDefault();setShowDropdown(false);const nextNavbarItem=dropdownRef.current.nextElementSibling;if(nextNavbarItem){nextNavbarItem.focus();}}},activeClassName:"dropdown__link--active",className:navLinkClassNames(childItemClassName,true)},childItemProps))))));}function NavItemMobile({items,className,position:_position,// Need to destructure position from props so that it doesn't get passed on.
...props}){const{pathname}=Object(_docusaurus_router__WEBPACK_IMPORTED_MODULE_5__["useLocation"])();const[collapsed,setCollapsed]=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(()=>{var _items$some;return(_items$some=!(items===null||items===void 0?void 0:items.some(item=>Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* isSamePath */ "a"])(item.to,pathname))))!==null&&_items$some!==void 0?_items$some:true;});const navLinkClassNames=(extraClassName,isSubList=false)=>Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('menu__link',{'menu__link--sublist':isSubList},extraClassName);if(!items){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{className:"menu__list-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({className:navLinkClassNames(className)},props)));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('menu__list-item',{'menu__list-item--collapsed':collapsed})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({role:"button",className:navLinkClassNames(className,true)},props,{onClick:()=>{setCollapsed(state=>!state);}}),props.label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:"menu__list"},items.map(({className:childItemClassName,...childItemProps},i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{className:"menu__list-item",key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({activeClassName:"menu__link--active",className:navLinkClassNames(childItemClassName)},childItemProps,{onClick:props.onClick}))))));}function DefaultNavbarItem({mobile=false,...props}){const Comp=mobile?NavItemMobile:NavItemDesktop;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comp,props);}/* harmony default export */ __webpack_exports__["a"] = (DefaultNavbarItem);

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_SEARCH_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return docVersionSearchTag; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DEFAULT_SEARCH_TAG='default';function docVersionSearchTag(pluginId,versionName){return`docs-${pluginId}-${versionName}`;}

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DocsPreferredVersionContextProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useDocsPreferredVersionContext; });

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(206);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/plugin-content-docs/lib/theme/hooks/useDocs.js
var useDocs = __webpack_require__(220);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/docsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO not ideal, see also "useDocs"
const isDocsPluginEnabled=!!useDocs["useAllDocsData"];
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/docsPreferredVersion/DocsPreferredVersionStorage.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const storageKey=pluginId=>`docs-preferred-version-${pluginId}`;const DocsPreferredVersionStorage={save:(pluginId,persistence,versionName)=>{if(persistence==='none'){// noop
}else{window.localStorage.setItem(storageKey(pluginId),versionName);}},read:(pluginId,persistence)=>{if(persistence==='none'){return null;}else{return window.localStorage.getItem(storageKey(pluginId));}},clear:(pluginId,persistence)=>{if(persistence==='none'){// noop
}else{window.localStorage.removeItem(storageKey(pluginId));}}};/* harmony default export */ var docsPreferredVersion_DocsPreferredVersionStorage = (DocsPreferredVersionStorage);
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/docsPreferredVersion/DocsPreferredVersionProvider.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Initial state is always null as we can't read localstorage from node SSR
function getInitialState(pluginIds){const initialState={};pluginIds.forEach(pluginId=>{initialState[pluginId]={preferredVersionName:null};});return initialState;}// Read storage for all docs plugins
// Assign to each doc plugin a preferred version (if found)
function readStorageState({pluginIds,versionPersistence,allDocsData}){// The storage value we read might be stale,
// and belong to a version that does not exist in the site anymore
// In such case, we remove the storage value to avoid downstream errors
function restorePluginState(pluginId){const preferredVersionNameUnsafe=docsPreferredVersion_DocsPreferredVersionStorage.read(pluginId,versionPersistence);const pluginData=allDocsData[pluginId];const versionExists=pluginData.versions.some(version=>version.name===preferredVersionNameUnsafe);if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}else{docsPreferredVersion_DocsPreferredVersionStorage.clear(pluginId,versionPersistence);return{preferredVersionName:null};}}const initialState={};pluginIds.forEach(pluginId=>{initialState[pluginId]=restorePluginState(pluginId);});return initialState;}function useVersionPersistence(){return Object(useThemeConfig["a" /* default */])().docs.versionPersistence;}// Value that  will be accessible through context: [state,api]
function useContextValue(){const allDocsData=Object(useDocs["useAllDocsData"])();const versionPersistence=useVersionPersistence();const pluginIds=Object(react["useMemo"])(()=>Object.keys(allDocsData),[allDocsData]);// Initial state is empty, as  we can't read browser storage in node/SSR
const[state,setState]=Object(react["useState"])(()=>getInitialState(pluginIds));// On mount, we set the state read from browser storage
Object(react["useEffect"])(()=>{setState(readStorageState({allDocsData,versionPersistence,pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
const api=Object(react["useMemo"])(()=>{function savePreferredVersion(pluginId,versionName){docsPreferredVersion_DocsPreferredVersionStorage.save(pluginId,versionPersistence,versionName);setState(s=>({...s,[pluginId]:{preferredVersionName:versionName}}));}return{savePreferredVersion};},[setState]);return[state,api];}const Context=/*#__PURE__*/Object(react["createContext"])(null);function DocsPreferredVersionContextProvider({children}){if(isDocsPluginEnabled){return/*#__PURE__*/react_default.a.createElement(DocsPreferredVersionContextProviderUnsafe,null,children);}else{return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,children);}}function DocsPreferredVersionContextProviderUnsafe({children}){const contextValue=useContextValue();return/*#__PURE__*/react_default.a.createElement(Context.Provider,{value:contextValue},children);}function useDocsPreferredVersionContext(){const value=Object(react["useContext"])(Context);if(!value){throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");}return value;}

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const UserPreferencesContext=/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);/* harmony default export */ __webpack_exports__["a"] = (UserPreferencesContext);

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(199);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(206);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useUserPreferencesContext.js
var useUserPreferencesContext = __webpack_require__(779);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/styles.module.css
var styles_module = __webpack_require__(49);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBar(){const{isAnnouncementBarClosed,closeAnnouncementBar}=Object(useUserPreferencesContext["a" /* default */])();const{announcementBar}=Object(useThemeConfig["a" /* default */])();if(!announcementBar){return null;}const{content,backgroundColor,textColor,isCloseable}=announcementBar;if(!content||isCloseable&&isAnnouncementBarClosed){return null;}return/*#__PURE__*/react_default.a.createElement("div",{className:styles_module_default.a.announcementBar,style:{backgroundColor,color:textColor},role:"banner"},/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])(styles_module_default.a.announcementBarContent,{[styles_module_default.a.announcementBarCloseable]:isCloseable})// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:content}}),isCloseable?/*#__PURE__*/react_default.a.createElement("button",{type:"button",className:styles_module_default.a.announcementBarClose,onClick:closeAnnouncementBar,"aria-label":"Close"},/*#__PURE__*/react_default.a.createElement("span",{"aria-hidden":"true"},"\xD7")):null);}/* harmony default export */ var theme_AnnouncementBar = (AnnouncementBar);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(200);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(230);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(204);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/node_modules/@babel/runtime/helpers/esm/extends.js
var helpers_esm_extends = __webpack_require__(2);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-dom/index.js
var react_dom = __webpack_require__(20);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/router.js
var router = __webpack_require__(232);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(231);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(430);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-search-algolia/src/theme/hooks/useSearchQuery.js
var useSearchQuery = __webpack_require__(797);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docsearch/react/dist/esm/useDocSearchKeyboardEvents.js


function isEditingContent(event) {
  var element = event.target;
  var tagName = element.tagName;
  return element.isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA';
}

function useDocSearchKeyboardEvents(_ref) {
  var isOpen = _ref.isOpen,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onInput = _ref.onInput,
      searchButtonRef = _ref.searchButtonRef;
  react_default.a.useEffect(function () {
    function onKeyDown(event) {
      function open() {
        // We check that no other DocSearch modal is showing before opening
        // another one.
        if (!document.body.classList.contains('DocSearch--active')) {
          onOpen();
        }
      }

      if (event.keyCode === 27 && isOpen || // The `Cmd+K` shortcut both opens and closes the modal.
      event.key === 'k' && (event.metaKey || event.ctrlKey) || // The `/` shortcut opens but doesn't close the modal because it's
      // a character.
      !isEditingContent(event) && event.key === '/' && !isOpen) {
        event.preventDefault();

        if (isOpen) {
          onClose();
        } else if (!document.body.classList.contains('DocSearch--active')) {
          open();
        }
      }

      if (searchButtonRef && searchButtonRef.current === document.activeElement && onInput) {
        if (/[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
          onInput(event);
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onOpen, onClose, onInput, searchButtonRef]);
}
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docsearch/react/dist/esm/icons/ControlKeyIcon.js

function ControlKeyIcon() {
  return /*#__PURE__*/react_default.a.createElement("svg", {
    width: "15",
    height: "15",
    className: "DocSearch-Control-Key-Icon"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
    strokeWidth: "1.2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "square"
  }));
}
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docsearch/react/dist/esm/icons/SearchIcon.js
var SearchIcon = __webpack_require__(798);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docsearch/react/dist/esm/DocSearchButton.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ACTION_KEY_DEFAULT = 'Ctrl';
var ACTION_KEY_APPLE = '⌘';

function isAppleDevice() {
  if (typeof navigator === 'undefined') {
    return ACTION_KEY_DEFAULT;
  }

  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}

var DocSearchButton = react_default.a.forwardRef(function (props, ref) {
  var _useState = Object(react["useState"])(function () {
    return isAppleDevice() ? ACTION_KEY_APPLE : ACTION_KEY_DEFAULT;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  Object(react["useEffect"])(function () {
    if (isAppleDevice()) {
      setKey(ACTION_KEY_APPLE);
    }
  }, []);
  return /*#__PURE__*/react_default.a.createElement("button", _extends({
    type: "button",
    className: "DocSearch DocSearch-Button",
    "aria-label": "Search"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react_default.a.createElement(SearchIcon["a" /* SearchIcon */], null), /*#__PURE__*/react_default.a.createElement("span", {
    className: "DocSearch-Button-Placeholder"
  }, "Search"), /*#__PURE__*/react_default.a.createElement("span", {
    className: "DocSearch-Button-Key"
  }, key === ACTION_KEY_DEFAULT ? /*#__PURE__*/react_default.a.createElement(ControlKeyIcon, null) : key), /*#__PURE__*/react_default.a.createElement("span", {
    className: "DocSearch-Button-Key"
  }, "K"));
});
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/plugin-content-docs/lib/theme/hooks/useDocs.js
var useDocs = __webpack_require__(220);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/docsPreferredVersion/useDocsPreferredVersion.js + 1 modules
var useDocsPreferredVersion = __webpack_require__(420);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/searchUtils.js
var searchUtils = __webpack_require__(499);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useContextualSearchFilters.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We may want to support multiple search engines, don't couple that to Algolia/DocSearch
// Maybe users will want to use its own search engine solution
function useContextualSearchFilters(){const allDocsData=Object(useDocs["useAllDocsData"])();const activePluginAndVersion=Object(useDocs["useActivePluginAndVersion"])();const docsPreferredVersionByPluginId=Object(useDocsPreferredVersion["b" /* useDocsPreferredVersionByPluginId */])();function getDocPluginTags(pluginId){var _activePluginAndVersi,_ref;const activeVersion=(activePluginAndVersion===null||activePluginAndVersion===void 0?void 0:(_activePluginAndVersi=activePluginAndVersion.activePlugin)===null||_activePluginAndVersi===void 0?void 0:_activePluginAndVersi.pluginId)===pluginId?activePluginAndVersion.activeVersion:undefined;const preferredVersion=docsPreferredVersionByPluginId[pluginId];const latestVersion=allDocsData[pluginId].versions.find(v=>v.isLast);const version=(_ref=activeVersion!==null&&activeVersion!==void 0?activeVersion:preferredVersion)!==null&&_ref!==void 0?_ref:latestVersion;return Object(searchUtils["b" /* docVersionSearchTag */])(pluginId,version.name);}const language='en';// TODO i18n
const tags=[searchUtils["a" /* DEFAULT_SEARCH_TAG */],...Object.keys(allDocsData).map(getDocPluginTags)];return{language,tags};}
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-search-algolia/src/utils/algoliaSearchUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Translate search-engine agnostic seach filters to Algolia search filters
function useAlgoliaContextualSearchParameters(){const{language,tags}=useContextualSearchFilters();const languageFilter=`language:${language}`;const tagsFilter=tags.map(tag=>`docusaurus_tag:${tag}`);return{facetFilters:[languageFilter,tagsFilter]};}
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */let DocSearchModal=null;function Hit({hit,children}){return/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{to:hit.url},children);}function ResultsFooter({state,onClose}){const{generateSearchPageLink}=Object(useSearchQuery["a" /* default */])();return/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{to:generateSearchPageLink(state.query),onClick:onClose},"See all ",state.context.nbHits," results");}function DocSearch({contextualSearch,...props}){const{siteMetadata}=Object(useDocusaurusContext["a" /* default */])();const contextualSearchParameters=useAlgoliaContextualSearchParameters();// we let user override default searchParameters if he wants to
const searchParameters={...(contextualSearch?contextualSearchParameters:{}),...props.searchParameters};const{withBaseUrl}=Object(useBaseUrl["b" /* useBaseUrlUtils */])();const history=Object(router["useHistory"])();const searchButtonRef=Object(react["useRef"])(null);const[isOpen,setIsOpen]=Object(react["useState"])(false);const[initialQuery,setInitialQuery]=Object(react["useState"])(null);const importDocSearchModalIfNeeded=Object(react["useCallback"])(()=>{if(DocSearchModal){return Promise.resolve();}return Promise.all([__webpack_require__.e(/* import() */ 69).then(__webpack_require__.bind(null, 1072)),Promise.all(/* import() */[__webpack_require__.e(3), __webpack_require__.e(70)]).then(__webpack_require__.bind(null, 1071)),__webpack_require__.e(/* import() */ 3).then(__webpack_require__.t.bind(null, 126, 7))]).then(([{DocSearchModal:Modal}])=>{DocSearchModal=Modal;});},[]);const onOpen=Object(react["useCallback"])(()=>{importDocSearchModalIfNeeded().then(()=>{setIsOpen(true);});},[importDocSearchModalIfNeeded,setIsOpen]);const onClose=Object(react["useCallback"])(()=>{setIsOpen(false);},[setIsOpen]);const onInput=Object(react["useCallback"])(event=>{importDocSearchModalIfNeeded().then(()=>{setIsOpen(true);setInitialQuery(event.key);});},[importDocSearchModalIfNeeded,setIsOpen,setInitialQuery]);const navigator=Object(react["useRef"])({navigate({suggestionUrl}){history.push(suggestionUrl);}}).current;const transformItems=Object(react["useRef"])(items=>{return items.map(item=>{// We transform the absolute URL into a relative URL.
// Alternatively, we can use `new URL(item.url)` but it's not
// supported in IE.
const a=document.createElement('a');a.href=item.url;return{...item,url:withBaseUrl(`${a.pathname}${a.hash}`)};});}).current;const resultsFooterComponent=Object(react["useMemo"])(()=>footerProps=>/*#__PURE__*/react_default.a.createElement(ResultsFooter,Object(helpers_esm_extends["a" /* default */])({},footerProps,{onClose:onClose})),[onClose]);const transformSearchClient=Object(react["useCallback"])(searchClient=>{searchClient.addAlgoliaAgent('docusaurus',siteMetadata.docusaurusVersion);return searchClient;},[siteMetadata.docusaurusVersion]);useDocSearchKeyboardEvents({isOpen,onOpen,onClose,onInput,searchButtonRef});return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,/*#__PURE__*/react_default.a.createElement("link",{rel:"preconnect",href:`https://${props.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),/*#__PURE__*/react_default.a.createElement(DocSearchButton,{onTouchStart:importDocSearchModalIfNeeded,onFocus:importDocSearchModalIfNeeded,onMouseOver:importDocSearchModalIfNeeded,onClick:onOpen,ref:searchButtonRef}),isOpen&&/*#__PURE__*/Object(react_dom["createPortal"])(/*#__PURE__*/react_default.a.createElement(DocSearchModal,Object(helpers_esm_extends["a" /* default */])({onClose:onClose,initialScrollY:window.scrollY,initialQuery:initialQuery,navigator:navigator,transformItems:transformItems,hitComponent:Hit,resultsFooterComponent:resultsFooterComponent,transformSearchClient:transformSearchClient},props,{searchParameters:searchParameters})),document.body));}function SearchBar(){const{siteConfig}=Object(useDocusaurusContext["a" /* default */])();return/*#__PURE__*/react_default.a.createElement(DocSearch,siteConfig.themeConfig.algolia);}/* harmony default export */ var theme_SearchBar = (SearchBar);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-toggle/dist/component/index.js
var component = __webpack_require__(800);
var component_default = /*#__PURE__*/__webpack_require__.n(component);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/Toggle/styles.module.css
var Toggle_styles_module = __webpack_require__(50);
var Toggle_styles_module_default = /*#__PURE__*/__webpack_require__.n(Toggle_styles_module);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/Toggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Dark=({icon,style})=>/*#__PURE__*/react_default.a.createElement("span",{className:Object(clsx_m["a" /* default */])(Toggle_styles_module_default.a.toggle,Toggle_styles_module_default.a.dark),style:style},icon);const Light=({icon,style})=>/*#__PURE__*/react_default.a.createElement("span",{className:Object(clsx_m["a" /* default */])(Toggle_styles_module_default.a.toggle,Toggle_styles_module_default.a.light),style:style},icon);/* harmony default export */ var Toggle = (function(props){const{colorMode:{switchConfig:{darkIcon,darkIconStyle,lightIcon,lightIconStyle}}}=Object(useThemeConfig["a" /* default */])();const{isClient}=Object(useDocusaurusContext["a" /* default */])();return/*#__PURE__*/react_default.a.createElement(component_default.a,Object(esm_extends["a" /* default */])({disabled:!isClient,icons:{checked:/*#__PURE__*/react_default.a.createElement(Dark,{icon:darkIcon,style:darkIconStyle}),unchecked:/*#__PURE__*/react_default.a.createElement(Light,{icon:lightIcon,style:lightIconStyle})}},props));});
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(239);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useLocationHash.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useLocationHash(initialHash){const[hash,setHash]=Object(react["useState"])(initialHash);Object(react["useEffect"])(()=>{const handleHashChange=()=>setHash(window.location.hash);window.addEventListener('hashchange',handleHashChange);return()=>window.removeEventListener('hashchange',handleHashChange);},[]);return[hash,setHash];}/* harmony default export */ var hooks_useLocationHash = (useLocationHash);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useScrollPosition.js
var useScrollPosition = __webpack_require__(782);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useHideableNavbar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const useHideableNavbar=hideOnScroll=>{const[isNavbarVisible,setIsNavbarVisible]=Object(react["useState"])(true);const[isFocusedAnchor,setIsFocusedAnchor]=Object(react["useState"])(false);const[lastScrollTop,setLastScrollTop]=Object(react["useState"])(0);const[navbarHeight,setNavbarHeight]=Object(react["useState"])(0);const navbarRef=Object(react["useCallback"])(node=>{if(node!==null){setNavbarHeight(node.getBoundingClientRect().height);}},[]);const location=Object(router["useLocation"])();const[hash,setHash]=hooks_useLocationHash(location.hash);Object(useScrollPosition["a" /* default */])(({scrollY:scrollTop})=>{if(!hideOnScroll){return;}if(scrollTop===0){setIsNavbarVisible(true);}if(scrollTop<navbarHeight){return;}if(isFocusedAnchor){setIsFocusedAnchor(false);setIsNavbarVisible(false);setLastScrollTop(scrollTop);return;}const documentHeight=document.documentElement.scrollHeight-navbarHeight;const windowHeight=window.innerHeight;if(lastScrollTop&&scrollTop>=lastScrollTop){setIsNavbarVisible(false);}else if(scrollTop+windowHeight<documentHeight){setIsNavbarVisible(true);}setLastScrollTop(scrollTop);},[lastScrollTop,navbarHeight]);Object(react["useEffect"])(()=>{if(!hideOnScroll){return;}setIsNavbarVisible(true);setHash(location.hash);},[location]);Object(react["useEffect"])(()=>{if(!hideOnScroll){return;}if(!hash){return;}setIsFocusedAnchor(true);},[hash]);return{navbarRef,isNavbarVisible};};/* harmony default export */ var hooks_useHideableNavbar = (useHideableNavbar);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useLockBodyScroll.js
var useLockBodyScroll = __webpack_require__(783);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(784);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useLogo.js
var useLogo = __webpack_require__(785);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/Navbar/styles.module.css
var Navbar_styles_module = __webpack_require__(51);
var Navbar_styles_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_styles_module);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DefaultNavbarItem.js
var DefaultNavbarItem = __webpack_require__(431);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const NavbarItemComponents={default:()=>DefaultNavbarItem["a" /* default */],// Need to lazy load these items as we don't know for sure the docs plugin is loaded
// See https://github.com/facebook/docusaurus/issues/3360
docsVersion:()=>// eslint-disable-next-line @typescript-eslint/no-var-requires
__webpack_require__(804).default,docsVersionDropdown:()=>// eslint-disable-next-line @typescript-eslint/no-var-requires
__webpack_require__(805).default,doc:()=>// eslint-disable-next-line @typescript-eslint/no-var-requires
__webpack_require__(806).default};const getNavbarItemComponent=(type='default')=>{const navbarItemComponent=NavbarItemComponents[type];if(!navbarItemComponent){throw new Error(`No NavbarItem component found for type=${type}.`);}return navbarItemComponent();};function NavbarItem({type,...props}){const NavbarItemComponent=getNavbarItemComponent(type);return/*#__PURE__*/react_default.a.createElement(NavbarItemComponent,props);}
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/Navbar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// retrocompatible with v1
const DefaultNavItemPosition='right';// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items){const leftItems=items.filter(item=>{var _item$position;return((_item$position=item.position)!==null&&_item$position!==void 0?_item$position:DefaultNavItemPosition)==='left';});const rightItems=items.filter(item=>{var _item$position2;return((_item$position2=item.position)!==null&&_item$position2!==void 0?_item$position2:DefaultNavItemPosition)==='right';});return{leftItems,rightItems};}function Navbar(){const{isClient}=Object(useDocusaurusContext["a" /* default */])();const{navbar:{title,items,hideOnScroll,style},colorMode:{disableSwitch:disableColorModeSwitch}}=Object(useThemeConfig["a" /* default */])();const[sidebarShown,setSidebarShown]=Object(react["useState"])(false);const[isSearchBarExpanded,setIsSearchBarExpanded]=Object(react["useState"])(false);const{isDarkTheme,setLightTheme,setDarkTheme}=Object(useThemeContext["a" /* default */])();const{navbarRef,isNavbarVisible}=hooks_useHideableNavbar(hideOnScroll);const{logoLink,logoLinkProps,logoImageUrl,logoAlt}=Object(useLogo["a" /* default */])();Object(useLockBodyScroll["a" /* default */])(sidebarShown);const showSidebar=Object(react["useCallback"])(()=>{setSidebarShown(true);},[setSidebarShown]);const hideSidebar=Object(react["useCallback"])(()=>{setSidebarShown(false);},[setSidebarShown]);const onToggleChange=Object(react["useCallback"])(e=>e.target.checked?setDarkTheme():setLightTheme(),[setLightTheme,setDarkTheme]);const windowSize=Object(useWindowSize["a" /* default */])();Object(react["useEffect"])(()=>{if(windowSize===useWindowSize["b" /* windowSizes */].desktop){setSidebarShown(false);}},[windowSize]);const{leftItems,rightItems}=splitNavItemsByPosition(items);return/*#__PURE__*/react_default.a.createElement("nav",{ref:navbarRef,className:Object(clsx_m["a" /* default */])('navbar','navbar--fixed-top',{'navbar--dark':style==='dark','navbar--primary':style==='primary','navbar-sidebar--show':sidebarShown,[Navbar_styles_module_default.a.navbarHideable]:hideOnScroll,[Navbar_styles_module_default.a.navbarHidden]:!isNavbarVisible})},/*#__PURE__*/react_default.a.createElement("div",{className:"navbar__inner"},/*#__PURE__*/react_default.a.createElement("div",{className:"navbar__items"},items!=null&&items.length!==0&&/*#__PURE__*/react_default.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:showSidebar,onKeyDown:showSidebar},/*#__PURE__*/react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},/*#__PURE__*/react_default.a.createElement("title",null,"Menu"),/*#__PURE__*/react_default.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],Object(esm_extends["a" /* default */])({className:"navbar__brand",to:logoLink},logoLinkProps),logoImageUrl!=null&&/*#__PURE__*/react_default.a.createElement("img",{key:isClient,className:"navbar__logo",src:logoImageUrl,alt:logoAlt}),title!=null&&/*#__PURE__*/react_default.a.createElement("strong",{className:Object(clsx_m["a" /* default */])('navbar__title',{[Navbar_styles_module_default.a.hideLogoText]:isSearchBarExpanded})},title)),leftItems.map((item,i)=>/*#__PURE__*/react_default.a.createElement(NavbarItem,Object(esm_extends["a" /* default */])({},item,{key:i})))),/*#__PURE__*/react_default.a.createElement("div",{className:"navbar__items navbar__items--right"},rightItems.map((item,i)=>/*#__PURE__*/react_default.a.createElement(NavbarItem,Object(esm_extends["a" /* default */])({},item,{key:i}))),!disableColorModeSwitch&&/*#__PURE__*/react_default.a.createElement(Toggle,{className:Navbar_styles_module_default.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:isDarkTheme,onChange:onToggleChange}),/*#__PURE__*/react_default.a.createElement(theme_SearchBar,{handleSearchBarToggle:setIsSearchBarExpanded,isSearchBarExpanded:isSearchBarExpanded}))),/*#__PURE__*/react_default.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:hideSidebar}),/*#__PURE__*/react_default.a.createElement("div",{className:"navbar-sidebar"},/*#__PURE__*/react_default.a.createElement("div",{className:"navbar-sidebar__brand"},/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],Object(esm_extends["a" /* default */])({className:"navbar__brand",onClick:hideSidebar,to:logoLink},logoLinkProps),logoImageUrl!=null&&/*#__PURE__*/react_default.a.createElement("img",{key:isClient,className:"navbar__logo",src:logoImageUrl,alt:logoAlt}),title!=null&&/*#__PURE__*/react_default.a.createElement("strong",{className:"navbar__title"},title)),!disableColorModeSwitch&&sidebarShown&&/*#__PURE__*/react_default.a.createElement(Toggle,{"aria-label":"Dark mode toggle in sidebar",checked:isDarkTheme,onChange:onToggleChange})),/*#__PURE__*/react_default.a.createElement("div",{className:"navbar-sidebar__items"},/*#__PURE__*/react_default.a.createElement("div",{className:"menu"},/*#__PURE__*/react_default.a.createElement("ul",{className:"menu__list"},items.map((item,i)=>/*#__PURE__*/react_default.a.createElement(NavbarItem,Object(esm_extends["a" /* default */])({mobile:true},item,{onClick:hideSidebar,key:i}))))))));}/* harmony default export */ var theme_Navbar = (Navbar);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/Footer/styles.module.css
var Footer_styles_module = __webpack_require__(52);
var Footer_styles_module_default = /*#__PURE__*/__webpack_require__.n(Footer_styles_module);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLink({to,href,label,prependBaseUrlToHref,...props}){const toUrl=Object(useBaseUrl["a" /* default */])(to);const normalizedHref=Object(useBaseUrl["a" /* default */])(href,{forcePrependBaseUrl:true});return/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],Object(esm_extends["a" /* default */])({className:"footer__link-item"},href?{target:'_blank',rel:'noopener noreferrer',href:prependBaseUrlToHref?normalizedHref:href}:{to:toUrl},props),label);}const FooterLogo=({url,alt})=>/*#__PURE__*/react_default.a.createElement("img",{className:"footer__logo",alt:alt,src:url});function Footer(){const{footer}=Object(useThemeConfig["a" /* default */])();const{copyright,links=[],logo={}}=footer||{};const logoUrl=Object(useBaseUrl["a" /* default */])(logo.src);if(!footer){return null;}return/*#__PURE__*/react_default.a.createElement("footer",{className:Object(clsx_m["a" /* default */])('footer',{'footer--dark':footer.style==='dark'})},/*#__PURE__*/react_default.a.createElement("div",{className:"container"},links&&links.length>0&&/*#__PURE__*/react_default.a.createElement("div",{className:"row footer__links"},links.map((linkItem,i)=>/*#__PURE__*/react_default.a.createElement("div",{key:i,className:"col footer__col"},linkItem.title!=null?/*#__PURE__*/react_default.a.createElement("h4",{className:"footer__title"},linkItem.title):null,linkItem.items!=null&&Array.isArray(linkItem.items)&&linkItem.items.length>0?/*#__PURE__*/react_default.a.createElement("ul",{className:"footer__items"},linkItem.items.map((item,key)=>item.html?/*#__PURE__*/react_default.a.createElement("li",{key:key,className:"footer__item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/react_default.a.createElement("li",{key:item.href||item.to,className:"footer__item"},/*#__PURE__*/react_default.a.createElement(FooterLink,item)))):null))),(logo||copyright)&&/*#__PURE__*/react_default.a.createElement("div",{className:"text--center"},logo&&logo.src&&/*#__PURE__*/react_default.a.createElement("div",{className:"margin-bottom--sm"},logo.href?/*#__PURE__*/react_default.a.createElement("a",{href:logo.href,target:"_blank",rel:"noopener noreferrer",className:Footer_styles_module_default.a.footerLogoLink},/*#__PURE__*/react_default.a.createElement(FooterLogo,{alt:logo.alt,url:logoUrl})):/*#__PURE__*/react_default.a.createElement(FooterLogo,{alt:logo.alt,url:logoUrl})),/*#__PURE__*/react_default.a.createElement("div",{// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
dangerouslySetInnerHTML:{__html:copyright}}))));}/* harmony default export */ var theme_Footer = (Footer);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(10);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const themes={light:'light',dark:'dark'};// Ensure to always return a valid theme even if input is invalid
const coerceToTheme=theme=>{return theme===themes.dark?themes.dark:themes.light;};const getInitialTheme=()=>{if(!ExecutionEnvironment["a" /* default */].canUseDOM){return themes.light;// SSR: we don't care
}return coerceToTheme(document.documentElement.getAttribute('data-theme'));};const storeTheme=newTheme=>{try{localStorage.setItem('theme',coerceToTheme(newTheme));}catch(err){console.error(err);}};const useTheme=()=>{const{colorMode:{disableSwitch=false}}=Object(useThemeConfig["a" /* default */])();const[theme,setTheme]=Object(react["useState"])(getInitialTheme);const setLightTheme=Object(react["useCallback"])(()=>{setTheme(themes.light);storeTheme(themes.light);},[]);const setDarkTheme=Object(react["useCallback"])(()=>{setTheme(themes.dark);storeTheme(themes.dark);},[]);Object(react["useEffect"])(()=>{document.documentElement.setAttribute('data-theme',coerceToTheme(theme));},[theme]);Object(react["useEffect"])(()=>{if(disableSwitch){return;}try{const localStorageTheme=localStorage.getItem('theme');if(localStorageTheme!==null){setTheme(coerceToTheme(localStorageTheme));}}catch(err){console.error(err);}},[setTheme]);Object(react["useEffect"])(()=>{if(disableSwitch){return;}window.matchMedia('(prefers-color-scheme: dark)').addListener(({matches})=>{setTheme(matches?themes.dark:themes.light);});},[]);return{isDarkTheme:theme===themes.dark,setLightTheme,setDarkTheme};};/* harmony default export */ var hooks_useTheme = (useTheme);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/ThemeContext.js
var ThemeContext = __webpack_require__(776);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/ThemeProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ThemeProvider(props){const{isDarkTheme,setLightTheme,setDarkTheme}=hooks_useTheme();return/*#__PURE__*/react_default.a.createElement(ThemeContext["a" /* default */].Provider,{value:{isDarkTheme,setLightTheme,setDarkTheme}},props.children);}/* harmony default export */ var theme_ThemeProvider = (ThemeProvider);
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useTabGroupChoice.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const TAB_CHOICE_PREFIX='docusaurus.tab.';const useTabGroupChoice=()=>{const[tabGroupChoices,setChoices]=Object(react["useState"])({});const setChoiceSyncWithLocalStorage=Object(react["useCallback"])((groupId,newChoice)=>{try{localStorage.setItem(`${TAB_CHOICE_PREFIX}${groupId}`,newChoice);}catch(err){console.error(err);}},[]);Object(react["useEffect"])(()=>{try{const localStorageChoices={};for(let i=0;i<localStorage.length;i+=1){const storageKey=localStorage.key(i);if(storageKey.startsWith(TAB_CHOICE_PREFIX)){const groupId=storageKey.substring(TAB_CHOICE_PREFIX.length);localStorageChoices[groupId]=localStorage.getItem(storageKey);}}setChoices(localStorageChoices);}catch(err){console.error(err);}},[]);return{tabGroupChoices,setTabGroupChoices:(groupId,newChoice)=>{setChoices(oldChoices=>({...oldChoices,[groupId]:newChoice}));setChoiceSyncWithLocalStorage(groupId,newChoice);}};};/* harmony default export */ var hooks_useTabGroupChoice = (useTabGroupChoice);
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useAnnouncementBar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const STORAGE_DISMISS_KEY='docusaurus.announcement.dismiss';const STORAGE_ID_KEY='docusaurus.announcement.id';const useAnnouncementBar=()=>{const{announcementBar}=Object(useThemeConfig["a" /* default */])();const[isClosed,setClosed]=Object(react["useState"])(true);const handleClose=Object(react["useCallback"])(()=>{localStorage.setItem(STORAGE_DISMISS_KEY,'true');setClosed(true);},[]);Object(react["useEffect"])(()=>{if(!announcementBar){return;}const{id}=announcementBar;let viewedId=localStorage.getItem(STORAGE_ID_KEY);// retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}const isNewAnnouncement=id!==viewedId;localStorage.setItem(STORAGE_ID_KEY,id);if(isNewAnnouncement){localStorage.setItem(STORAGE_DISMISS_KEY,'false');}if(isNewAnnouncement||localStorage.getItem(STORAGE_DISMISS_KEY)==='false'){setClosed(false);}},[]);return{isAnnouncementBarClosed:isClosed,closeAnnouncementBar:handleClose};};/* harmony default export */ var hooks_useAnnouncementBar = (useAnnouncementBar);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/UserPreferencesContext.js
var UserPreferencesContext = __webpack_require__(514);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/UserPreferencesProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UserPreferencesProvider(props){const{tabGroupChoices,setTabGroupChoices}=hooks_useTabGroupChoice();const{isAnnouncementBarClosed,closeAnnouncementBar}=hooks_useAnnouncementBar();return/*#__PURE__*/react_default.a.createElement(UserPreferencesContext["a" /* default */].Provider,{value:{tabGroupChoices,setTabGroupChoices,isAnnouncementBarClosed,closeAnnouncementBar}},props.children);}/* harmony default export */ var theme_UserPreferencesProvider = (UserPreferencesProvider);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/docsPreferredVersion/DocsPreferredVersionProvider.js + 2 modules
var DocsPreferredVersionProvider = __webpack_require__(509);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/LayoutProviders/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LayoutProviders({children}){return/*#__PURE__*/react_default.a.createElement(theme_ThemeProvider,null,/*#__PURE__*/react_default.a.createElement(theme_UserPreferencesProvider,null,/*#__PURE__*/react_default.a.createElement(DocsPreferredVersionProvider["a" /* default */],null,children)));}
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchMetadatas/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Override default/agnostic SearchMetas to use Algolia-specific metadatas
function AlgoliaSearchMetadatas({language,version,tag}){return/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,language&&/*#__PURE__*/react_default.a.createElement("meta",{name:"docsearch:language",content:`${language}`}),version&&/*#__PURE__*/react_default.a.createElement("meta",{name:"docsearch:version",content:version}),tag&&/*#__PURE__*/react_default.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:tag}));}
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/LayoutHead/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LayoutHead(props){const{siteConfig}=Object(useDocusaurusContext["a" /* default */])();const{favicon,title:siteTitle,themeConfig:{image:defaultImage,metadatas},url:siteUrl,titleDelimiter}=siteConfig;const{title,description,image,keywords,permalink,searchMetadatas}=props;const metaTitle=title?`${title} ${titleDelimiter} ${siteTitle}`:siteTitle;const metaImage=image||defaultImage;const metaImageUrl=Object(useBaseUrl["a" /* default */])(metaImage,{absolute:true});const faviconUrl=Object(useBaseUrl["a" /* default */])(favicon);return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,/*#__PURE__*/react_default.a.createElement("html",{lang:"en"}),metaTitle&&/*#__PURE__*/react_default.a.createElement("title",null,metaTitle),metaTitle&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:title",content:metaTitle}),favicon&&/*#__PURE__*/react_default.a.createElement("link",{rel:"shortcut icon",href:faviconUrl}),description&&/*#__PURE__*/react_default.a.createElement("meta",{name:"description",content:description}),description&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:description",content:description}),keywords&&keywords.length&&/*#__PURE__*/react_default.a.createElement("meta",{name:"keywords",content:keywords.join(',')}),metaImage&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:image",content:metaImageUrl}),metaImage&&/*#__PURE__*/react_default.a.createElement("meta",{property:"twitter:image",content:metaImageUrl}),metaImage&&/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${metaTitle}`}),permalink&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:url",content:siteUrl+permalink}),permalink&&/*#__PURE__*/react_default.a.createElement("link",{rel:"canonical",href:siteUrl+permalink}),/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),/*#__PURE__*/react_default.a.createElement(AlgoliaSearchMetadatas,Object(esm_extends["a" /* default */])({tag:searchUtils["a" /* DEFAULT_SEARCH_TAG */],language:"en"// TODO i18n
},searchMetadatas)),/*#__PURE__*/react_default.a.createElement(Head["a" /* default */]// it's important to have an additional <Head> element here,
// as it allows react-helmet to override values set in previous <Head>
// ie we can override default metadatas such as "twitter:card"
// In same Head, the same meta would appear twice instead of overriding
// See react-helmet doc
,null,metadatas.map((metadata,i)=>/*#__PURE__*/react_default.a.createElement("meta",Object(esm_extends["a" /* default */])({key:`metadata_${i}`},metadata)))));}
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/Layout/styles.css
var styles = __webpack_require__(53);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){const{children,noFooter,wrapperClassName}=props;return/*#__PURE__*/react_default.a.createElement(LayoutProviders,null,/*#__PURE__*/react_default.a.createElement(LayoutHead,props),/*#__PURE__*/react_default.a.createElement(theme_AnnouncementBar,null),/*#__PURE__*/react_default.a.createElement(theme_Navbar,null),/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])('main-wrapper',wrapperClassName)},children),!noFooter&&/*#__PURE__*/react_default.a.createElement(theme_Footer,null));}/* harmony default export */ var theme_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_UserPreferencesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useUserPreferencesContext(){const context=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_theme_UserPreferencesContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);if(context==null){throw new Error('`useUserPreferencesContext` is used outside of `Layout` Component.');}return context;}/* harmony default export */ __webpack_exports__["a"] = (useUserPreferencesContext);

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGlobalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllPluginInstancesData", function() { return useAllPluginInstancesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePluginData", function() { return usePluginData; });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO annoying constant duplication
// if we import something from outside the /client folder,
// the tsc directory structure is affected
// import {DEFAULT_PLUGIN_ID} from '../../constants';
const DEFAULT_PLUGIN_ID='default';function useGlobalData(){const{globalData}=Object(_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();if(!globalData){throw new Error('Docusaurus global data not found');}return globalData;}function useAllPluginInstancesData(pluginName){const globalData=useGlobalData();const pluginGlobalData=globalData[pluginName];if(!pluginGlobalData){throw new Error(`Docusaurus plugin global data not found for pluginName=${pluginName}`);}return pluginGlobalData;}function usePluginData(pluginName,pluginId=DEFAULT_PLUGIN_ID){const pluginGlobalData=useAllPluginInstancesData(pluginName);const pluginInstanceGlobalData=pluginGlobalData[pluginId];if(!pluginInstanceGlobalData){throw new Error(`Docusaurus plugin global data not found for pluginName=${pluginName} and pluginId=${pluginId}`);}return pluginInstanceGlobalData;}

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports,"__esModule",{value:true});exports.getDocVersionSuggestions=exports.getActiveDocContext=exports.getActiveVersion=exports.getLatestVersion=exports.getActivePlugin=void 0;const router_1=__webpack_require__(232);function getActivePlugin(allPluginDatas,pathname,options={}){const activeEntry=Object.entries(allPluginDatas).find(([_id,pluginData])=>{return!!router_1.matchPath(pathname,{path:pluginData.path,exact:false,strict:false});});const activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error(`Can't find active docs plugin for pathname=${pathname}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(allPluginDatas).map(plugin=>plugin.path).join(', ')}`);}return activePlugin;}exports.getActivePlugin=getActivePlugin;exports.getLatestVersion=data=>{return data.versions.find(version=>version.isLast);};// Note: return undefined on doc-unrelated pages,
// because there's no version currently considered as active
exports.getActiveVersion=(data,pathname)=>{const lastVersion=exports.getLatestVersion(data);// Last version is a route like /docs/*,
// we need to try to match it last or it would match /docs/version-1.0/* as well
const orderedVersionsMetadata=[...data.versions.filter(version=>version!==lastVersion),lastVersion];return orderedVersionsMetadata.find(version=>{return!!router_1.matchPath(pathname,{path:version.path,exact:false,strict:false});});};exports.getActiveDocContext=(data,pathname)=>{const activeVersion=exports.getActiveVersion(data,pathname);const activeDoc=activeVersion===null||activeVersion===void 0?void 0:activeVersion.docs.find(doc=>!!router_1.matchPath(pathname,{path:doc.path,exact:true,strict:false}));function getAlternateVersionDocs(docId){const result={};data.versions.forEach(version=>{version.docs.forEach(doc=>{if(doc.id===docId){result[version.name]=doc;}});});return result;}const alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion,activeDoc,alternateDocVersions:alternateVersionDocs};};exports.getDocVersionSuggestions=(data,pathname)=>{const latestVersion=exports.getLatestVersion(data);const activeDocContext=exports.getActiveDocContext(data,pathname);// We only suggest another doc/version if user is not using the latest version
const isNotOnLatestVersion=activeDocContext.activeVersion!==latestVersion;const latestDocSuggestion=isNotOnLatestVersion?activeDocContext===null||activeDocContext===void 0?void 0:activeDocContext.alternateDocVersions[latestVersion.name]:undefined;const latestVersionSuggestion=isNotOnLatestVersion?latestVersion:undefined;return{latestDocSuggestion,latestVersionSuggestion};};

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const getScrollPosition=()=>({scrollX:_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].canUseDOM?window.pageXOffset:0,scrollY:_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].canUseDOM?window.pageYOffset:0});const useScrollPosition=(effect,deps=[])=>{const[scrollPosition,setScrollPosition]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getScrollPosition());const handleScroll=()=>{const currentScrollPosition=getScrollPosition();setScrollPosition(currentScrollPosition);if(effect){effect(currentScrollPosition);}};Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{window.addEventListener('scroll',handleScroll);return()=>window.removeEventListener('scroll',handleScroll,{// @ts-expect-error: See https://github.com/microsoft/TypeScript/issues/32912
passive:true});},deps);return scrollPosition;};/* harmony default export */ __webpack_exports__["a"] = (useScrollPosition);

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useLockBodyScroll(lock=true){Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{document.body.style.overflow=lock?'hidden':'visible';return()=>{document.body.style.overflow='visible';};},[lock]);}/* harmony default export */ __webpack_exports__["a"] = (useLockBodyScroll);

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return windowSizes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const desktopThresholdWidth=996;const windowSizes={desktop:'desktop',mobile:'mobile'};function useWindowSize(){const isClient=typeof window!=='undefined';function getSize(){if(!isClient){return undefined;}return window.innerWidth>desktopThresholdWidth?windowSizes.desktop:windowSizes.mobile;}const[windowSize,setWindowSize]=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{if(!isClient){return undefined;}function handleResize(){setWindowSize(getSize());}window.addEventListener('resize',handleResize);return()=>window.removeEventListener('resize',handleResize);},[]);return windowSize;}/* harmony default export */ __webpack_exports__["a"] = (useWindowSize);

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _theme_hooks_useThemeContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(231);
/* harmony import */ var _docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(429);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(206);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const useLogo=()=>{const{navbar:{logo}}=Object(_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();const{isDarkTheme}=Object(_theme_hooks_useThemeContext__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();const logoLink=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(logo.href||'/');let logoLinkProps={};if(logo.target){logoLinkProps={target:logo.target};}else if(!Object(_docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(logoLink)){logoLinkProps={rel:'noopener noreferrer',target:'_blank'};}const logoSrc=logo.srcDark&&isDarkTheme?logo.srcDark:logo.src;const logoImageUrl=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(logoSrc);return{logoLink,logoLinkProps,logoImageUrl,logoAlt:logo.alt};};/* harmony default export */ __webpack_exports__["a"] = (useLogo);

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isSamePath; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Compare the 2 paths, ignoring trailing /
const isSamePath=(path1,path2)=>{const normalize=str=>str.endsWith('/')?str:`${str}/`;return normalize(path1)===normalize(path2);};

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(232);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(204);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const SEARCH_PARAM_QUERY='q';function useSearchQuery(){const history=Object(_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__["useHistory"])();const location=Object(_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__["useLocation"])();const{siteConfig:{baseUrl}={}}=Object(_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();return{searchValue:_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].canUseDOM&&new URLSearchParams(location.search).get(SEARCH_PARAM_QUERY)||'',updateSearchPath:searchValue=>{const searchParams=new URLSearchParams(location.search);if(searchValue){searchParams.set(SEARCH_PARAM_QUERY,searchValue);}else{searchParams.delete(SEARCH_PARAM_QUERY);}history.replace({search:searchParams.toString()});},generateSearchPageLink:searchValue=>{// Refer to https://github.com/facebook/docusaurus/pull/2838
return`${baseUrl}search?q=${encodeURIComponent(searchValue)}`;}};}/* harmony default export */ __webpack_exports__["a"] = (useSearchQuery);

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SearchIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "20",
    height: "20",
    className: "DocSearch-Search-Icon",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(127);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _check = __webpack_require__(801);

var _check2 = _interopRequireDefault(_check);

var _x = __webpack_require__(802);

var _x2 = _interopRequireDefault(_x);

var _util = __webpack_require__(803);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_PureComponent) {
  _inherits(Toggle, _PureComponent);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.previouslyChecked = !!(props.checked || props.defaultChecked);
    _this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.checked !== this.props.checked) {
        this.setState({ checked: !!this.props.checked });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var checkbox = this.input;
      if (event.target !== checkbox && !this.moved) {
        this.previouslyChecked = checkbox.checked;
        event.preventDefault();
        checkbox.focus();
        checkbox.click();
        return;
      }

      var checked = this.props.hasOwnProperty('checked') ? this.props.checked : checkbox.checked;

      this.setState({ checked: checked });
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      this.startX = (0, _util.pointerCoord)(event).x;
      this.activated = true;
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      if (!this.activated) return;
      this.moved = true;

      if (this.startX) {
        var currentX = (0, _util.pointerCoord)(event).x;
        if (this.state.checked && currentX + 15 < this.startX) {
          this.setState({ checked: false });
          this.startX = currentX;
          this.activated = true;
        } else if (currentX - 15 > this.startX) {
          this.setState({ checked: true });
          this.startX = currentX;
          this.activated = currentX < this.startX + 5;
        }
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      if (!this.moved) return;
      var checkbox = this.input;
      event.preventDefault();

      if (this.startX) {
        var endX = (0, _util.pointerCoord)(event).x;
        if (this.previouslyChecked === true && this.startX + 4 > endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: false });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        } else if (this.startX - 4 < endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: true });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        }

        this.activated = false;
        this.startX = null;
        this.moved = false;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      var onFocus = this.props.onFocus;


      if (onFocus) {
        onFocus(event);
      }

      this.setState({ hasFocus: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var onBlur = this.props.onBlur;


      if (onBlur) {
        onBlur(event);
      }

      this.setState({ hasFocus: false });
    }
  }, {
    key: 'getIcon',
    value: function getIcon(type) {
      var icons = this.props.icons;

      if (!icons) {
        return null;
      }
      return icons[type] === undefined ? Toggle.defaultProps.icons[type] : icons[type];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          _icons = _props.icons,
          inputProps = _objectWithoutProperties(_props, ['className', 'icons']);

      var classes = (0, _classnames2.default)('react-toggle', {
        'react-toggle--checked': this.state.checked,
        'react-toggle--focus': this.state.hasFocus,
        'react-toggle--disabled': this.props.disabled
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes,
          onClick: this.handleClick,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd },
        _react2.default.createElement(
          'div',
          { className: 'react-toggle-track' },
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-check' },
            this.getIcon('checked')
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-x' },
            this.getIcon('unchecked')
          )
        ),
        _react2.default.createElement('div', { className: 'react-toggle-thumb' }),
        _react2.default.createElement('input', _extends({}, inputProps, {
          ref: function ref(_ref) {
            _this2.input = _ref;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: 'react-toggle-screenreader-only',
          type: 'checkbox' }))
      );
    }
  }]);

  return Toggle;
}(_react.PureComponent);

exports.default = Toggle;


Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
  icons: {
    checked: _react2.default.createElement(_check2.default, null),
    unchecked: _react2.default.createElement(_x2.default, null)
  }
};

Toggle.propTypes = {
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  id: _propTypes2.default.string,
  'aria-labelledby': _propTypes2.default.string,
  'aria-label': _propTypes2.default.string,
  icons: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    checked: _propTypes2.default.node,
    unchecked: _propTypes2.default.node
  })])
};

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'svg',
    { width: '14', height: '11', viewBox: '0 0 14 11' },
    _react2.default.createElement(
      'title',
      null,
      'switch-check'
    ),
    _react2.default.createElement('path', { d: 'M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'svg',
    { width: '10', height: '10', viewBox: '0 0 10 10' },
    _react2.default.createElement(
      'title',
      null,
      'switch-x'
    ),
    _react2.default.createElement('path', { d: 'M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointerCoord = pointerCoord;
// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts

function pointerCoord(event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    var changedTouches = event.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      var touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    var pageX = event.pageX;
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
}

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocsVersionNavbarItem; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(431);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(220);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_docsPreferredVersion_useDocsPreferredVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(420);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);function DocsVersionNavbarItem({label:staticLabel,to:staticTo,docsPluginId,...props}){var _ref;const activeVersion=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useActiveVersion"])(docsPluginId);const{preferredVersion}=Object(_utils_docsPreferredVersion_useDocsPreferredVersion__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(docsPluginId);const latestVersion=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useLatestVersion"])(docsPluginId);const version=(_ref=activeVersion!==null&&activeVersion!==void 0?activeVersion:preferredVersion)!==null&&_ref!==void 0?_ref:latestVersion;const label=staticLabel!==null&&staticLabel!==void 0?staticLabel:version.label;const path=staticTo!==null&&staticTo!==void 0?staticTo:getVersionMainDoc(version).path;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},props,{label:label,to:path}));}

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocsVersionDropdownNavbarItem; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(431);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(220);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_docsPreferredVersion_useDocsPreferredVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(420);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);function DocsVersionDropdownNavbarItem({mobile,docsPluginId,dropdownActiveClassDisabled,dropdownItemsBefore,dropdownItemsAfter,...props}){var _ref,_activeDocContext$act;const activeDocContext=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useActiveDocContext"])(docsPluginId);const versions=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useVersions"])(docsPluginId);const latestVersion=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useLatestVersion"])(docsPluginId);const{preferredVersion,savePreferredVersionName}=Object(_utils_docsPreferredVersion_useDocsPreferredVersion__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(docsPluginId);function getItems(){const versionLinks=versions.map(version=>{// We try to link to the same doc, in another version
// When not possible, fallback to the "main doc" of the version
const versionDoc=(activeDocContext===null||activeDocContext===void 0?void 0:activeDocContext.alternateDocVersions[version.name])||getVersionMainDoc(version);return{isNavLink:true,label:version.label,to:versionDoc.path,isActive:()=>version===(activeDocContext===null||activeDocContext===void 0?void 0:activeDocContext.activeVersion),onClick:()=>{savePreferredVersionName(version.name);}};});const items=[...dropdownItemsBefore,...versionLinks,...dropdownItemsAfter];// We don't want to render a version dropdown with 0 or 1 item
// If we build the site with a single docs version (onlyIncludeVersions: ['1.0.0'])
// We'd rather render a button instead of a dropdown
if(items.length<=1){return undefined;}return items;}const dropdownVersion=(_ref=(_activeDocContext$act=activeDocContext.activeVersion)!==null&&_activeDocContext$act!==void 0?_activeDocContext$act:preferredVersion)!==null&&_ref!==void 0?_ref:latestVersion;// Mobile is handled a bit differently
const dropdownLabel=mobile?'Versions':dropdownVersion.label;const dropdownTo=mobile?undefined:getVersionMainDoc(dropdownVersion).path;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({},props,{mobile:mobile,label:dropdownLabel,to:dropdownTo,items:getItems(),isActive:dropdownActiveClassDisabled?()=>false:undefined}));}

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocNavbarItem; });
/* harmony import */ var _Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(431);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(220);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(199);
/* harmony import */ var _utils_docsPreferredVersion_useDocsPreferredVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(420);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocNavbarItem({docId,activeSidebarClassName,label:staticLabel,docsPluginId,...props}){var _ref;const{activeVersion,activeDoc}=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useActiveDocContext"])(docsPluginId);const{preferredVersion}=Object(_utils_docsPreferredVersion_useDocsPreferredVersion__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(docsPluginId);const latestVersion=Object(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__["useLatestVersion"])(docsPluginId);const version=(_ref=activeVersion!==null&&activeVersion!==void 0?activeVersion:preferredVersion)!==null&&_ref!==void 0?_ref:latestVersion;const doc=version.docs.find(versionDoc=>versionDoc.id===docId);if(!doc){throw new Error(`DocNavbarItem: couldn't find any doc with id=${docId} in version ${version.name}.
Available docIds=\n- ${version.docs.join('\n- ')}`);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object(_Users_feichao_sfc_code_github_alibaba_ali_react_table_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({exact:true},props,{className:Object(clsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(props.className,{[activeSidebarClassName]:activeDoc&&activeDoc.sidebar===doc.sidebar}),label:staticLabel!==null&&staticLabel!==void 0?staticLabel:doc.id,to:doc.path}));}

/***/ })

}]);