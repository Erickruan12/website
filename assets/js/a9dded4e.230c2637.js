"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,m=p["".concat(s,".").concat(u)]||p[u]||f[u]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={title:"$endif",description:"$endif is used to end an if statement.",id:"endif"},o=void 0,l={unversionedId:"functions/misc-related/endif",id:"version-6.3.0/functions/misc-related/endif",title:"$endif",description:"$endif is used to end an if statement.",source:"@site/versioned_docs/version-6.3.0/functions/misc-related/endif.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/endif",permalink:"/docs/functions/misc-related/endif",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688672656,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$endif",description:"$endif is used to end an if statement.",id:"endif"},sidebar:"docs",previous:{title:"$endelseif",permalink:"/docs/functions/misc-related/endelseif"},next:{title:"$error",permalink:"/docs/functions/misc-related/error"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:d},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$endif")," is used to end an if statement."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$endif\n")),(0,i.kt)("admonition",{title:"Deprecation",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},'$if: "old"')," is deprecated and should no longer be used as it will be removed in the future.")),(0,i.kt)("h2",{id:"examples"},"Example(s)"),(0,i.kt)("p",null,"Example usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"$if: old"),' (will return "Hello" when the condition is true):'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "endif",\n    $if: "old",\n    code: `\n  $if[1==1]\n  Hello!\n  $endif\n  `\n});\n')))}f.isMDXComponent=!0}}]);