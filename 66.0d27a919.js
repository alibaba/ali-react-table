(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(430);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(204);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(231);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(230);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){const{metadata}=props;return/*#__PURE__*/react_default.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__item"},metadata.previous&&/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{className:"pagination-nav__link",to:metadata.previous.permalink},/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__label"},"\xAB ",metadata.previous.title))),/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},metadata.next&&/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{className:"pagination-nav__link",to:metadata.next.permalink},/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__label"},metadata.next.title," \xBB"))));}/* harmony default export */ var theme_DocPaginator = (DocPaginator);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/plugin-content-docs/lib/theme/hooks/useDocs.js
var useDocs = __webpack_require__(220);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/utils/docsPreferredVersion/useDocsPreferredVersion.js + 1 modules
var useDocsPreferredVersion = __webpack_require__(420);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/DocVersionSuggestions/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);function DocVersionSuggestions(){const{siteConfig:{title:siteTitle}}=Object(useDocusaurusContext["a" /* default */])();const{pluginId}=Object(useDocs["useActivePlugin"])({failfast:true});const{savePreferredVersionName}=Object(useDocsPreferredVersion["a" /* default */])(pluginId);const activeVersion=Object(useDocs["useActiveVersion"])(pluginId);const{latestDocSuggestion,latestVersionSuggestion}=Object(useDocs["useDocVersionSuggestions"])(pluginId);// No suggestion to be made
if(!latestVersionSuggestion){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null);}// try to link to same doc in latest version (not always possible)
// fallback to main doc of latest version
const latestVersionSuggestedDoc=latestDocSuggestion!==null&&latestDocSuggestion!==void 0?latestDocSuggestion:getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react_default.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},// TODO need refactoring
activeVersion.name==='current'?/*#__PURE__*/react_default.a.createElement("div",null,"This is unreleased documentation for ",siteTitle,' ',/*#__PURE__*/react_default.a.createElement("strong",null,activeVersion.label)," version."):/*#__PURE__*/react_default.a.createElement("div",null,"This is documentation for ",siteTitle,' ',/*#__PURE__*/react_default.a.createElement("strong",null,activeVersion.label),", which is no longer actively maintained."),/*#__PURE__*/react_default.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the",' ',/*#__PURE__*/react_default.a.createElement("strong",null,/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{to:latestVersionSuggestedDoc.path,onClick:()=>savePreferredVersionName(latestVersionSuggestion.name)},"latest version")),' ',"(",latestVersionSuggestion.label,")."));}/* harmony default export */ var theme_DocVersionSuggestions = (DocVersionSuggestions);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(921);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(199);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/styles.module.css
var styles_module = __webpack_require__(71);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItem(props){const{siteConfig}=Object(useDocusaurusContext["a" /* default */])();const{url:siteUrl,title:siteTitle,titleDelimiter}=siteConfig;const{content:DocContent}=props;const{metadata}=DocContent;const{description,title,permalink,editUrl,lastUpdatedAt,lastUpdatedBy}=metadata;const{frontMatter:{image:metaImage,keywords,hide_title:hideTitle,hide_table_of_contents:hideTableOfContents}}=DocContent;const{pluginId}=Object(useDocs["useActivePlugin"])({failfast:true});const versions=Object(useDocs["useVersions"])(pluginId);const version=Object(useDocs["useActiveVersion"])(pluginId);// If site is not versioned or only one version is included
// we don't show the version badge
// See https://github.com/facebook/docusaurus/issues/3362
const showVersionBadge=versions.length>1;const metaTitle=title?`${title} ${titleDelimiter} ${siteTitle}`:siteTitle;const metaImageUrl=Object(useBaseUrl["a" /* default */])(metaImage,{absolute:true});return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(Head["a" /* default */],null,/*#__PURE__*/react_default.a.createElement("title",null,metaTitle),/*#__PURE__*/react_default.a.createElement("meta",{property:"og:title",content:metaTitle}),description&&/*#__PURE__*/react_default.a.createElement("meta",{name:"description",content:description}),description&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:description",content:description}),keywords&&keywords.length&&/*#__PURE__*/react_default.a.createElement("meta",{name:"keywords",content:keywords.join(',')}),metaImage&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:image",content:metaImageUrl}),metaImage&&/*#__PURE__*/react_default.a.createElement("meta",{property:"twitter:image",content:metaImageUrl}),metaImage&&/*#__PURE__*/react_default.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${title}`}),permalink&&/*#__PURE__*/react_default.a.createElement("meta",{property:"og:url",content:siteUrl+permalink}),permalink&&/*#__PURE__*/react_default.a.createElement("link",{rel:"canonical",href:siteUrl+permalink})),/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])('container padding-vert--lg',styles_module_default.a.docItemWrapper)},/*#__PURE__*/react_default.a.createElement("div",{className:"row"},/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])('col',{[styles_module_default.a.docItemCol]:!hideTableOfContents})},/*#__PURE__*/react_default.a.createElement(theme_DocVersionSuggestions,null),/*#__PURE__*/react_default.a.createElement("div",{className:styles_module_default.a.docItemContainer},/*#__PURE__*/react_default.a.createElement("article",null,showVersionBadge&&/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("span",{className:"badge badge--secondary"},"Version: ",version.label)),!hideTitle&&/*#__PURE__*/react_default.a.createElement("header",null,/*#__PURE__*/react_default.a.createElement("h1",{className:styles_module_default.a.docTitle},title)),/*#__PURE__*/react_default.a.createElement("div",{className:"markdown"},/*#__PURE__*/react_default.a.createElement(DocContent,null))),(editUrl||lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react_default.a.createElement("div",{className:"margin-vert--xl"},/*#__PURE__*/react_default.a.createElement("div",{className:"row"},/*#__PURE__*/react_default.a.createElement("div",{className:"col"},editUrl&&/*#__PURE__*/react_default.a.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener"},/*#__PURE__*/react_default.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:'0.3em',verticalAlign:'sub'}},/*#__PURE__*/react_default.a.createElement("g",null,/*#__PURE__*/react_default.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react_default.a.createElement("div",{className:"col text--right"},/*#__PURE__*/react_default.a.createElement("em",null,/*#__PURE__*/react_default.a.createElement("small",null,"Last updated",' ',lastUpdatedAt&&/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,"on",' ',/*#__PURE__*/react_default.a.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString(),className:styles_module_default.a.docLastUpdatedAt},new Date(lastUpdatedAt*1000).toLocaleDateString()),lastUpdatedBy&&' '),lastUpdatedBy&&/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,"by ",/*#__PURE__*/react_default.a.createElement("strong",null,lastUpdatedBy)), false&&/*#__PURE__*/false))))),/*#__PURE__*/react_default.a.createElement("div",{className:"margin-vert--lg"},/*#__PURE__*/react_default.a.createElement(theme_DocPaginator,{metadata:metadata})))),!hideTableOfContents&&DocContent.rightToc&&/*#__PURE__*/react_default.a.createElement("div",{className:"col col--3"},/*#__PURE__*/react_default.a.createElement(TOC["a" /* default */],{headings:DocContent.rightToc})))));}/* harmony default export */ var theme_DocItem = __webpack_exports__["default"] = (DocItem);

/***/ }),

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
var DocsPreferredVersionProvider = __webpack_require__(510);

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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(496);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Head(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[/* Helmet */ "a"],Object.assign({},props));}/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ 510:
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

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useTOCHighlight(linkClassName,linkActiveClassName,topOffset){const[lastActiveLink,setLastActiveLink]=Object(react["useState"])(undefined);Object(react["useEffect"])(()=>{function setActiveLink(){function getActiveHeaderAnchor(){const headersAnchors=Array.from(document.getElementsByClassName('anchor'));const firstAnchorUnderViewportTop=headersAnchors.find(anchor=>{const{top}=anchor.getBoundingClientRect();return top>=topOffset;});if(firstAnchorUnderViewportTop){// If first anchor in viewport is under a certain threshold, we consider it's not the active anchor.
// In such case, the active anchor is the previous one (if it exists), that may be above the viewport
if(firstAnchorUnderViewportTop.getBoundingClientRect().top>=topOffset){const previousAnchor=headersAnchors[headersAnchors.indexOf(firstAnchorUnderViewportTop)-1];return previousAnchor!==null&&previousAnchor!==void 0?previousAnchor:firstAnchorUnderViewportTop;}// If the anchor is at the top of the viewport, we consider it's the first anchor
else{return firstAnchorUnderViewportTop;}}// no anchor under viewport top? (ie we are at the bottom of the page)
else{// highlight the last anchor found
return headersAnchors[headersAnchors.length-1];}}const activeHeaderAnchor=getActiveHeaderAnchor();if(activeHeaderAnchor){let index=0;let itemHighlighted=false;// @ts-expect-error: Must be <a> tags.
const links=document.getElementsByClassName(linkClassName);while(index<links.length&&!itemHighlighted){const link=links[index];const{href}=link;const anchorValue=decodeURIComponent(href.substring(href.indexOf('#')+1));if(activeHeaderAnchor.id===anchorValue){if(lastActiveLink){lastActiveLink.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);setLastActiveLink(link);itemHighlighted=true;}index+=1;}}}document.addEventListener('scroll',setActiveLink);document.addEventListener('resize',setActiveLink);setActiveLink();return()=>{document.removeEventListener('scroll',setActiveLink);document.removeEventListener('resize',setActiveLink);};});}/* harmony default export */ var hooks_useTOCHighlight = (useTOCHighlight);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
var styles_module = __webpack_require__(60);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const LINK_CLASS_NAME='table-of-contents__link';const ACTIVE_LINK_CLASS_NAME='table-of-contents__link--active';const TOP_OFFSET=100;/* eslint-disable jsx-a11y/control-has-associated-label */function Headings({headings,isChild}){if(!headings.length){return null;}return/*#__PURE__*/react_default.a.createElement("ul",{className:isChild?'':'table-of-contents table-of-contents__left-border'},headings.map(heading=>/*#__PURE__*/react_default.a.createElement("li",{key:heading.id},/*#__PURE__*/react_default.a.createElement("a",{href:`#${heading.id}`,className:LINK_CLASS_NAME// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react_default.a.createElement(Headings,{isChild:true,headings:heading.children}))));}function TOC({headings}){hooks_useTOCHighlight(LINK_CLASS_NAME,ACTIVE_LINK_CLASS_NAME,TOP_OFFSET);return/*#__PURE__*/react_default.a.createElement("div",{className:styles_module_default.a.tableOfContents},/*#__PURE__*/react_default.a.createElement(Headings,{headings:headings}));}/* harmony default export */ var theme_TOC = __webpack_exports__["a"] = (TOC);

/***/ })

}]);