(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(165)),l={id:"column-resize",title:"\u62d6\u62fd\u8c03\u6574\u5217\u5bbd"},o={unversionedId:"pipeline/features/column-resize",id:"pipeline/features/column-resize",isDocsHomePage:!1,title:"\u62d6\u62fd\u8c03\u6574\u5217\u5bbd",description:"\u5728\u8868\u5934\u7684\u53f3\u4fa7\u653e\u7f6e\u4e00\u4e2a\u300c\u628a\u624b\u300d\uff0c\u5141\u8bb8\u7528\u6237\u62d6\u52a8\u628a\u624b\u6765\u8c03\u6574\u8be5\u5217\u7684\u5bbd\u5ea6\u3002",source:"@site/docs/pipeline/features/column-resize.mdx",slug:"/pipeline/features/column-resize",permalink:"/docs/pipeline/features/column-resize",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/column-resize.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u63d0\u793a\u4fe1\u606f",permalink:"/docs/pipeline/features/tips"},next:{title:"\u8fc7\u6ee4(todo)",permalink:"/docs/pipeline/features/filter"}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",children:[]}],u={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5728\u8868\u5934\u7684\u53f3\u4fa7\u653e\u7f6e\u4e00\u4e2a\u300c\u628a\u624b\u300d\uff0c\u5141\u8bb8\u7528\u6237\u62d6\u52a8\u628a\u624b\u6765\u8c03\u6574\u8be5\u5217\u7684\u5bbd\u5ea6\u3002"),Object(a.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo() {\n  const dataSource = assets.biz.dataSource6\n  const columns = assets.biz.columns6\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .use(\n      features.columnResize({\n        fallbackSize: 120,\n        handleBackground: '#ddd',\n        handleHoverBackground: '#aaa',\n        handleActiveBackground: '#89bff7',\n      }),\n    )\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(a.b)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"pipeline.use(features.columnResize(options))\n")),Object(a.b)("p",null,"options \u7ed3\u6784\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"export interface ColumnResizeFeatureOptions {\n  /** \u975e\u53d7\u63a7\u7528\u6cd5\uff1a\u9ed8\u8ba4\u7684\u5217\u5bbd\u6570\u7ec4 */\n  defaultSizes?: number[]\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u5217\u5bbd\u6570\u7ec4 */\n  sizes?: number[]\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u4fee\u6539\u5bbd\u5ea6\u7684\u56de\u8c03\u51fd\u6570 */\n  onChangeSizes?(nextSizes: number[]): void\n\n  /** \u5217\u7684\u6700\u5c0f\u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 60 */\n  minSize?: number\n  /** \u5982\u679c\u5217\u5bbd\u6570\u7ec4\u4e2d\u6ca1\u6709\u63d0\u4f9b\u6709\u6548\u7684\u5bbd\u5ea6\uff0cfallbackSize \u5c06\u4f5c\u4e3a\u8be5\u5217\u7684\u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 150 */\n  fallbackSize?: number\n  /** \u5217\u7684\u6700\u5927\u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 1000 */\n  maxSize?: number\n\n  /** \u662f\u5426\u5728\u8c03\u6574\u5217\u5bbd\u65f6\u7981\u7528 user-select\uff0c\u9ed8\u8ba4\u4e3a true */\n  disableUserSelectWhenResizing?: boolean\n\n  /** \u628a\u624b\u7684\u80cc\u666f\u8272 */\n  handleBackground?: string\n  /** \u9f20\u6807\u60ac\u505c\u65f6\uff0c\u628a\u624b\u7684\u80cc\u666f\u8272 */\n  handleHoverBackground?: string\n  /** \u628a\u624b\u6fc0\u6d3b\u65f6\u7684\u80cc\u666f\u8272 */\n  handleActiveBackground?: string\n}\n")),Object(a.b)("h3",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e3a\u53f6\u5b50\u8282\u70b9\u7684\u8bbe\u7f6e\u5217\u5bbd\u624d\u4f1a\u751f\u6548\uff0c\u975e\u53f6\u8282\u70b9\u7684\u5217\u5bbd\u7531\u5176\u5b50\u8282\u70b9\u5bbd\u5ea6\u7d2f\u52a0\u5f97\u5230",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u62d6\u52a8\u53f6\u5b50\u8282\u70b9\u65f6\uff0c\u300c\u62d6\u52a8\u7684\u8ddd\u79bb\u300d\u7b49\u4e8e\u300c\u5bbd\u5ea6\u53d8\u5316\u91cf\u300d"),Object(a.b)("li",{parentName:"ul"},"\u62d6\u52a8\u975e\u53f6\u8282\u70b9\u65f6\uff0c\u300c\u62d6\u52a8\u7684\u8ddd\u79bb\u300d\u4f1a\u5206\u7ed9\u300c\u5b50\u8282\u70b9\u300d\uff0c\u8d8a\u5bbd\u7684\u5b50\u8282\u70b9 \u4f1a\u5206\u5230\u66f4\u591a\u7684\u8ddd\u79bb"))),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 columnResize \u65f6\uff0c columnResize \u603b\u662f\u4f1a\u7b97\u51fa\u4e00\u4e2a\u5217\u5bbd\u6570\u7ec4 ",Object(a.b)("inlineCode",{parentName:"li"},"sizes"),"\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u4f5c\u4e3a\u6bcf\u4e00\u4e2a\u53f6\u5b50\u8282\u70b9\u7684\u5b9e\u9645\u5bbd\u5ea6",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u63d0\u4f9b\u4e86 ",Object(a.b)("inlineCode",{parentName:"li"},"options.sizes"),"\uff0c\u5219\u4f7f\u7528\u8be5\u6570\u7ec4\u4f5c\u4e3a sizes"),Object(a.b)("li",{parentName:"ul"},"\u5426\u5219\u4f7f\u7528 pipeline \u5185\u90e8\u7684\u975e\u53d7\u63a7\u72b6\u6001\u4f5c\u4e3a sizes\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"li"},"options.defaultSizes")," \u6307\u5b9a\u975e\u53d7\u63a7\u72b6\u6001\u7684\u9ed8\u8ba4\u503c"),Object(a.b)("li",{parentName:"ul"},"\u5f53 sizes \u6570\u7ec4\u8fc7\u77ed\u65f6\uff08\u4f8b\u5982\u8868\u683c\u5b9e\u9645\u5305\u542b 4 \u5217\uff0c\u4f46 sizes \u7684\u957f\u5ea6\u53ea\u6709 2\uff09\uff0c\u4f1a\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"column.width")," \u6765\u8fdb\u884c\u586b\u5145\uff0c\u5982\u679c\u67d0\u4e00\u5217\u6ca1\u6709\u8bbe\u7f6e width\uff0c\u5219\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"options.fallbackSize")," \u6765\u586b\u5145\u5bbd\u5ea6\u3002"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 columnResize \u540e\uff0c ",Object(a.b)("inlineCode",{parentName:"li"},"BaseTableProps#defaultColumnWidth")," \u4f1a\u5931\u6548"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"\u603b\u4e4b\uff0c\u5728\u62d6\u52a8\u4e4b\u524d\uff0c\u5bf9\u4e8e columnResize \u6765\u8bf4\uff0c\u6240\u6709\u7684\u5217\u7684\u5bbd\u5ea6\u90fd\u662f\u5df2\u77e5\u7684")))),Object(a.b)("li",{parentName:"ul"},"\u62d6\u52a8\u65f6\uff0c\u4e00\u5217\u7684\u5bbd\u5ea6\u53ea\u80fd\u5728 ",Object(a.b)("inlineCode",{parentName:"li"},"options.minSize")," \u81f3 ",Object(a.b)("inlineCode",{parentName:"li"},"options.maxSize")," \u4e4b\u95f4")),Object(a.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u628a\u624b\u662f\u900f\u660e\u7684\uff0c\u4f60\u53ef\u4ee5\u901a\u77e5 ",Object(a.b)("inlineCode",{parentName:"p"},"options.handleBackground")," \u6765\u4e3a\u628a\u624b\u8bbe\u7f6e\u80cc\u666f\u8272\u3002"))}s.isMDXComponent=!0},165:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),s=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||a;return t?i.a.createElement(d,o(o({ref:n},u),{},{components:t})):i.a.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);