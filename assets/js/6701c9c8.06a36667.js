"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,m=s["".concat(p,".").concat(d)]||s[d]||g[d]||l;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const l={title:"$getTextSplitLength",description:"$getTextSplitLength will return the amount of split arguments in $textSplit",id:"getTextSplitLength"},a=void 0,o={unversionedId:"functions/util-related/getTextSplitLength",id:"version-6.3.0/functions/util-related/getTextSplitLength",title:"$getTextSplitLength",description:"$getTextSplitLength will return the amount of split arguments in $textSplit",source:"@site/versioned_docs/version-6.3.0/functions/util-related/getTextSplitLength.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/getTextSplitLength",permalink:"/docs/functions/util-related/getTextSplitLength",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011650,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$getTextSplitLength",description:"$getTextSplitLength will return the amount of split arguments in $textSplit",id:"getTextSplitLength"},sidebar:"docs",previous:{title:"$get",permalink:"/docs/functions/util-related/get"},next:{title:"$guildRoleIconURL",permalink:"/docs/functions/util-related/guildRoleIconURL"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:u},s="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$getTextSplitLength")," will return the amount of split arguments in ",(0,i.kt)("inlineCode",{parentName:"p"},"$textSplit"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$getTextSplitLength\n")),(0,i.kt)("h2",{id:"examples"},"Example(s)"),(0,i.kt)("p",null,"This will return ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," as there are five arguments separated by commas given in ",(0,i.kt)("inlineCode",{parentName:"p"},"$textSplit")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'getTextSplitLength',\n    code: `\n  $getTextSplitLength\n  $textSplit[Hello, my, name, is, Leref;, ]\n  `\n});\n")))}g.isMDXComponent=!0}}]);