(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),c=(n(0),n(164));const a={id:"tree-select",title:"\u6811\u5f62\u9009\u62e9"},o={unversionedId:"pipeline/features/tree-select",id:"pipeline/features/tree-select",isDocsHomePage:!1,title:"\u6811\u5f62\u9009\u62e9",description:"\u5728\u6811\u72b6\u6a21\u5f0f\u7684\u57fa\u7840\u4e0a\u652f\u6301\u590d\u9009\u529f\u80fd\u3002\u529f\u80fd\u53ef\u4ee5\u53c2\u8003 antd \u7ec4\u4ef6\u5e93\u4e2d\u7684 `` \u7ec4\u4ef6\u3002",source:"@site/docs/pipeline/features/tree-select.mdx",slug:"/pipeline/features/tree-select",permalink:"/docs/pipeline/features/tree-select",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/tree-select.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u6811\u72b6\u6a21\u5f0f",permalink:"/docs/pipeline/features/tree-mode"},next:{title:"\u5217\u9ad8\u4eae",permalink:"/docs/pipeline/features/column-hover"}},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"checkStrictly \u4e0e detach",id:"checkstrictly-\u4e0e-detach",children:[]}],l={toc:i};function p({components:e,...t}){return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728\u6811\u72b6\u6a21\u5f0f\u7684\u57fa\u7840\u4e0a\u652f\u6301\u590d\u9009\u529f\u80fd\u3002\u529f\u80fd\u53ef\u4ee5\u53c2\u8003 ",Object(c.b)("a",{parentName:"p",href:"https://ant-design.gitee.io/components/tree-select-cn/"},"antd \u7ec4\u4ef6\u5e93\u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"a"},"<TreeSelect />")," \u7ec4\u4ef6"),"\u3002"),Object(c.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function \u6811\u5f62\u53ef\u9009\u62e9\u8868\u683c() {\n  const dataSource = assets.biz.dataSource4\n  const columns = assets.biz.columns4\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .primaryKey('id')\n    .use(features.treeMode())\n    .use(\n      features.treeSelect({\n        tree: dataSource,\n        rootKey: 'root',\n        checkboxPlacement: 'start',\n        clickArea: 'cell',\n        defaultValue: ['1', '3'],\n        checkboxColumn: { lock: true },\n        highlightRowWhenSelected: true,\n      }),\n    )\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(c.b)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 treeSelect \u4e4b\u524d\uff0cpipeline \u5fc5\u987b\u5df2\u7ecf\u8bbe\u7f6e\u4e86 primaryKey\uff0c\u4e14 primaryKey \u53ea\u80fd\u4e3a\u5b57\u7b26\u4e32\u3002"),Object(c.b)("li",{parentName:"ul"},"treeSelect \u4f9d\u8d56\u590d\u9009\u6846\u7ec4\u4ef6\uff0c\u4f7f\u7528\u4e4b\u524d\u9700\u8981\u5148\u8bbe\u7f6e ",Object(c.b)("inlineCode",{parentName:"li"},"pipeline.ctx.components.Checkbox"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"pipeline.use(features.treeSelect(options))\n")),Object(c.b)("p",null,"options \u7ed3\u6784\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"export interface TreeSelectFeatureOptions {\n  /** \u5b8c\u6574\u7684\u6811 */\n  tree: any[]\n\n  /** \u865a\u62df\u7684\u6839\u8282\u70b9\u503c\uff1b\u8be5\u53c2\u6570\u975e\u7a7a\u65f6\uff0ctreeSelect \u5c06\u4f1a\u5728 tree \u53c2\u6570\u4e4b\u4e0a\u518d\u6dfb\u52a0\u4e00\u4e2a\u7236\u8282\u70b9 */\n  rootKey?: string\n\n  /** \u7236\u5b50\u8282\u70b9\u9009\u4e2d\u72b6\u6001\u662f\u5426\u4e0d\u518d\u5173\u8054\u3002\u8bbe\u7f6e\u4e3a true \u4e4b\u540e\uff0c\u7236\u8282\u70b9\u548c\u5b50\u8282\u70b9\u7684 value \u72ec\u7acb\u7ba1\u7406\uff0c\u4e0d\u518d\u8054\u52a8 */\n  checkStrictly?: boolean\n\n  /**\n   * \u5b9a\u4e49\u9009\u4e2d\u65f6\u56de\u586b\u7684\u65b9\u5f0f\uff0c\u53ef\u9009\u503c:\n   * - 'all'(\u8fd4\u56de\u6240\u6709\u9009\u4e2d\u7684\u8282\u70b9)\n   * - 'parent'(\u7236\u5b50\u8282\u70b9\u90fd\u9009\u4e2d\u65f6\u53ea\u8fd4\u56de\u7236\u8282\u70b9)\n   * - 'child'(\u7236\u5b50\u8282\u70b9\u90fd\u9009\u4e2d\u65f6\u53ea\u8fd4\u56de\u5b50\u8282\u70b9)\n   */\n  checkedStrategy?: 'all' | 'parent' | 'child'\n\n  /** \u590d\u9009\u6846\u6240\u5728\u5217\u7684\u4f4d\u7f6e */\n  checkboxPlacement?: 'start' | 'end'\n\n  /** \u590d\u9009\u6846\u6240\u5728\u5217\u7684 column \u914d\u7f6e\uff0c\u53ef\u6307\u5b9a width\uff0clock, title, align, features \u7b49\u5c5e\u6027 */\n  checkboxColumn?: Partial<ArtColumn>\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u5f53\u524d\u9009\u4e2d\u7684\u503c */\n  value?: string[]\n\n  /** \u975e\u53d7\u63a7\u7528\u6cd5\uff1a\u9ed8\u8ba4\u9009\u4e2d\u7684\u503c */\n  defaultValue?: string[]\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u72b6\u6001\u6539\u53d8\u56de\u8c03 */\n  onChange?(nextValue: string[]): void\n\n  /** \u70b9\u51fb\u4e8b\u4ef6\u7684\u54cd\u5e94\u533a\u57df */\n  clickArea?: 'checkbox' | 'cell' | 'row'\n\n  /** \u662f\u5426\u5bf9\u89e6\u53d1 onChange \u7684 click \u4e8b\u4ef6\u8c03\u7528 event.stopPropagation() */\n  stopClickEventPropagation?: boolean\n\n  /** \u88ab\u9009\u4e2d\u65f6\u662f\u5426\u9ad8\u4eae\u6574\u884c */\n  highlightRowWhenSelected?: boolean\n\n  /** \u662f\u5426\u7981\u7528\u8be5\u8282\u70b9\u7684\u4ea4\u4e92 */\n  isDisabled?(row: any): boolean\n\n  /** \u662f\u5426\u8ba9\u8be5\u8282\u70b9\u5bf9\u5e94\u7684\u5b50\u6811 \u4e0e\u5176\u7236\u8282\u70b9\u8131\u79bb\u8054\u52a8 */\n  idDetached?(row: any): boolean\n}\n")),Object(c.b)("h3",{id:"checkstrictly-\u4e0e-detach"},"checkStrictly \u4e0e detach"),Object(c.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6811\u5f62\u9009\u62e9\u7236\u5b50\u8282\u70b9\u7684\u9009\u4e2d\u72b6\u6001\u662f\u5173\u8054\u7684\uff0c\u5373\u300c\u7236\u8282\u70b9\u88ab\u9009\u4e2d\u300d\u4e0e\u300c\u6240\u6709\u5b50\u8282\u70b9\u88ab\u9009\u4e2d\u300d\u8fd9\u4e24\u8005\u662f\u7b49\u4ef7\u7684\uff0c\u6b64\u65f6\u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"options.checkedStrategy")," \u6765\u63a7\u5236\u9009\u4e2d\u65f6\u56de\u586b\u7684\u65b9\u5f0f\u3002"),Object(c.b)("p",null,"\u5982\u679c\u4e0d\u60f3\u8981\u7236\u5b50\u8282\u70b9\u72b6\u6001\u5173\u8054\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},"options.checkStrictly = true"),"\u3002"),Object(c.b)("p",null,"\u5982\u679c\u4f60\u53ea\u9700\u8981\u8ba9\u90e8\u5206\u8282\u70b9\u4e0e\u5176\u7236\u8282\u70b9\u8131\u79bb\u5173\u8054\uff0c\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"options.isDetached")," \u56de\u8c03\u51fd\u6570\u6765\u8fdb\u884c\u8bbe\u7f6e\u3002"))}p.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?c.a.createElement(m,i(i({ref:t},p),{},{components:n})):c.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);