"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&u(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$if",description:"$if will check a condition and return either true or false depending on the condition being true or false.",id:"if"},k=void 0,g={unversionedId:"functions/misc-related/if",id:"version-6.4.0/functions/misc-related/if",title:"$if",description:"$if will check a condition and return either true or false depending on the condition being true or false.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/if.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/if",permalink:"/ru/docs/functions/misc-related/if",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$if",description:"$if will check a condition and return either true or false depending on the condition being true or false.",id:"if"},sidebar:"docs",previous:{title:"$humanizeMs",permalink:"/ru/docs/functions/misc-related/humanizeMs"},next:{title:"$ifAwaited",permalink:"/ru/docs/functions/misc-related/ifAwaited"}},N={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Valid Mathematical Operators",id:"valid-mathematical-operators",level:4},{value:"Example(s)",id:"examples",level:2}],b={toc:h},y="wrapper";function v(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(y,s(c(c({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$if")," will check a condition and return either true or false depending on the condition being true or false."),(0,a.kt)("h2",c({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$if[condition;true;false?]\n")),(0,a.kt)("admonition",c({},{title:"Deprecation",type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},'$if: "old"')," is deprecated and should no longer be used as it will be removed in the future.")),(0,a.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"condition"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Condition to check."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"true"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"What to return when the condition is true."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"false?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"What to return when the condition is false."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h4",c({},{id:"valid-mathematical-operators"}),"Valid Mathematical Operators"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Operator"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Mathematical Expression"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"=="),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"not equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"less than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),">","="),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"greater than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"greater than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"<"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"less than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"|","|"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"logical OR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"&&"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"logical AND")))),(0,a.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"That's false!")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," doesn't equal ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: \"if\",\n    code: `\n    $if[1==2;That's true!;That's false!]\n    `\n});\n")),(0,a.kt)("p",null,"This will do the exact same just different usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"$if")," by using ",(0,a.kt)("inlineCode",{parentName:"p"},'$if: "old"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "if",\n    $if: "old",\n    code: `\n    $if[1==2]\n    That\'s true!\n    $else\n    That\'s false!\n    $endif\n    `\n});\n')))}v.isMDXComponent=!0}}]);