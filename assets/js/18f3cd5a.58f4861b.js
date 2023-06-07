"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56363],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),v=l(t),f=a,d=v["".concat(c,".").concat(f)]||v[f]||p[f]||o;return t?n.createElement(d,s(s({ref:r},u),{},{components:t})):n.createElement(d,s({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=v;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},25818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={title:"$resetServerVar",description:"Resets a server variable value"},s=void 0,i={unversionedId:"functions/resetservervar",id:"version-5.5.5/functions/resetservervar",title:"$resetServerVar",description:"Resets a server variable value",source:"@site/versioned_docs/version-5.5.5/functions/resetservervar.md",sourceDirName:"functions",slug:"/functions/resetservervar",permalink:"/docs/5.5.5/functions/resetservervar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686144978,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{title:"$resetServerVar",description:"Resets a server variable value"},sidebar:"docs",previous:{title:"$resetGlobalUserVar",permalink:"/docs/5.5.5/functions/resetgloaluservar"},next:{title:"$resetUserVar",permalink:"/docs/5.5.5/functions/resetuservar"}},c={},l=[],u={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function resets the variable to default value for the current guild"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$resetServerVar[variable]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "resetservervar",\ncode: `Resetted server xp\n$resetServerVar[serverxp]`\n})\n')))}p.isMDXComponent=!0}}]);