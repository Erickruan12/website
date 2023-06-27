"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(t),p=o,f=s["".concat(d,".").concat(p)]||s[p]||u[p]||a;return t?r.createElement(f,c(c({ref:n},m),{},{components:t})):r.createElement(f,c({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"$commandCode",description:"Returns the current command's code"},c=void 0,i={unversionedId:"functions/commandcode",id:"version-5.5.5/functions/commandcode",title:"$commandCode",description:"Returns the current command's code",source:"@site/versioned_docs/version-5.5.5/functions/commandcode.md",sourceDirName:"functions",slug:"/functions/commandcode",permalink:"/docs/5.5.5/functions/commandcode",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687864109,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{title:"$commandCode",description:"Returns the current command's code"},sidebar:"docs",previous:{title:"$color",permalink:"/docs/5.5.5/functions/color"},next:{title:"$commandInfo",permalink:"/docs/5.5.5/functions/commandinfo"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],m={toc:l},s="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the current commands code."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$commandCode\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "expose-code",\ncode: `Command Code: $commandCode`\n/*\nBot would return\n"Command Code: $commandCode"\n*/\n})\n')))}u.isMDXComponent=!0}}]);