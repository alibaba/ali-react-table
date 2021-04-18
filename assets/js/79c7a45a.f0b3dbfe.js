(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(165)),i={id:"auto-row-span",title:"\u81ea\u52a8\u5408\u5e76\u591a\u884c"},u={unversionedId:"pipeline/features/auto-row-span",id:"pipeline/features/auto-row-span",isDocsHomePage:!1,title:"\u81ea\u52a8\u5408\u5e76\u591a\u884c",description:"\u6839\u636e\u4e0a\u4e0b\u5355\u5143\u683c\u7684\u503c\u76f8\u7b49 \u81ea\u52a8\u5408\u5e76\u5355\u5143\u683c\u3002",source:"@site/docs/pipeline/features/auto-row-span.mdx",slug:"/pipeline/features/auto-row-span",permalink:"/docs/pipeline/features/auto-row-span",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/auto-row-span.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u5217\u8303\u56f4\u9ad8\u4eae",permalink:"/docs/pipeline/features/column-range-hover"},next:{title:"\u63d0\u793a\u4fe1\u606f",permalink:"/docs/pipeline/features/tips"}},c=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6839\u636e\u4e0a\u4e0b\u5355\u5143\u683c\u7684\u503c\u76f8\u7b49 \u81ea\u52a8\u5408\u5e76\u5355\u5143\u683c\u3002"),Object(o.b)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"pipeline.use(features.autoRowSpan())\n")),Object(o.b)("p",null,"\u5728\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"column.features.autoRowSpan")," \u4e4b\u540e\uff0c\u5982\u679c\u8be5\u5217\u4e2d\u76f8\u8fde\u7684\u4e24\u4e2a\u5355\u5143\u683c\u7684\u503c\u76f8\u7b49\uff0c\u5219\u81ea\u52a8\u5408\u5e76\u8fd9\u4e24\u4e2a\u5355\u5143\u683c\u3002\u5982\u679c\u8fde\u7eed\u7684\u591a\u4e2a\u5355\u5143\u683c\u7684\u503c\u90fd\u76f8\u7b49\uff0c\u5219\u5408\u5e76\u8fd9\u4e9b\u5355\u5143\u683c\u3002 autoRowSpan \u4f1a\u8986\u76d6\u539f\u6709\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"column.getSpanRect"),"\uff0c\u6ce8\u610f\u907f\u514d\u51b2\u7a81\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"column.features.autoRowSpan")," \u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u6bd4\u8f83\u51fd\u6570\uff0c\u7528\u6765\u81ea\u5b9a\u4e49\u300c\u4e24\u4e2a\u5355\u5143\u683c\u4e2d\u7684\u503c\u76f8\u7b49\u300d\u7684\u5224\u65ad\u903b\u8f91\u3002\u5176\u51fd\u6570\u7b7e\u540d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"(v1: any, v2: any. row1: any, row2: any) => boolean")),Object(o.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const { dataSource: cityData, isLoading } = assets.ncov19.useCityDataSource()\n  const dataSource = cityData.slice(16, 19).flatMap((d) => d.children.slice(0, 4))\n\n  const columns = [\n    { code: 'provinceName', name: '\u7701\u4efd', width: 150, features: { autoRowSpan: true, sortable: true } },\n    { code: 'cityName', name: '\u57ce\u5e02', width: 150, features: { autoRowSpan: true, sortable: true } },\n    { code: 'confirmedCount', name: '\u786e\u8bca', align: 'right', features: { autoRowSpan: true, sortable: true } },\n    { code: 'curedCount', name: '\u6cbb\u6108', align: 'right', features: { autoRowSpan: true, sortable: true } },\n    { code: 'deadCount', name: '\u6b7b\u4ea1', align: 'right', features: { autoRowSpan: true, sortable: true } },\n  ]\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .use(features.sort({ mode: 'single', defaultSorts: [{ code: 'provinceName', order: 'desc' }] }))\n    .use(features.autoRowSpan())\n\n  return <BaseTable defaultColumnWidth={100} isLoading={isLoading} {...pipeline.getProps()} />\n}\n")))}l.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return n?a.a.createElement(b,u(u({ref:t},p),{},{components:n})):a.a.createElement(b,u({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);