"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"$if",description:"$if will check a condition and return either true or false depending on the condition being true or false.",id:"if"},i=void 0,o={unversionedId:"functions/misc-related/if",id:"version-6.3.0/functions/misc-related/if",title:"$if",description:"$if will check a condition and return either true or false depending on the condition being true or false.",source:"@site/versioned_docs/version-6.3.0/functions/misc-related/if.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/if",permalink:"/docs/functions/misc-related/if",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011650,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$if",description:"$if will check a condition and return either true or false depending on the condition being true or false.",id:"if"},sidebar:"docs",previous:{title:"$humanizeMs",permalink:"/docs/functions/misc-related/humanizeMs"},next:{title:"$ifAwaited",permalink:"/docs/functions/misc-related/ifAwaited"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Valid Mathematical Operators",id:"valid-mathematical-operators",level:4},{value:"Example(s)",id:"examples",level:2}],u={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$if")," will check a condition and return either true or false depending on the condition being true or false."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$if[condition;true;false?]\n")),(0,r.kt)("admonition",{title:"Deprecation",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'$if: "old"')," is deprecated and should no longer be used as it will be removed in the future.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"condition"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Condition to check."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"What to return when the condition is true."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"false?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"What to return when the condition is false."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h4",{id:"valid-mathematical-operators"},"Valid Mathematical Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Mathematical Expression"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"=="),(0,r.kt)("td",{parentName:"tr",align:null},"equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"!="),(0,r.kt)("td",{parentName:"tr",align:null},"not equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<="),(0,r.kt)("td",{parentName:"tr",align:null},"less than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">","="),(0,r.kt)("td",{parentName:"tr",align:null},"greater than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null},"greater than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<"),(0,r.kt)("td",{parentName:"tr",align:null},"less than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"|","|"),(0,r.kt)("td",{parentName:"tr",align:null},"logical OR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&&"),(0,r.kt)("td",{parentName:"tr",align:null},"logical AND")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"That's false!")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," doesn't equal ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: \"if\",\n    code: `\n    $if[1==2;That's true!;That's false!]\n    `\n});\n")),(0,r.kt)("p",null,"This will do the exact same just different usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"$if")," by using ",(0,r.kt)("inlineCode",{parentName:"p"},'$if: "old"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "if",\n    $if: "old",\n    code: `\n    $if[1==2]\n    That\'s true!\n    $else\n    That\'s false!\n    $endif\n    `\n});\n')))}c.isMDXComponent=!0}}]);