"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36159],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const i={title:"$mentioned",description:"Retrieve the mentioned User ID."},a=void 0,c={unversionedId:"functions/mentioned",id:"version-5.5.5/functions/mentioned",title:"$mentioned",description:"Retrieve the mentioned User ID.",source:"@site/versioned_docs/version-5.5.5/functions/mentioned.md",sourceDirName:"functions",slug:"/functions/mentioned",permalink:"/docs/5.5.5/functions/mentioned",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011650,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$mentioned",description:"Retrieve the mentioned User ID."},sidebar:"docs",previous:{title:"$membersCount",permalink:"/docs/5.5.5/functions/memberscount"},next:{title:"$mentionedChannels",permalink:"/docs/5.5.5/functions/mentionedchannels"}},s={},u=[],l={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the mentioned user ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$mentioned[arg]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "whois",\ncode: `$mentioned[1] - is the mentioned user ID.`\n/*\n    Arg Numbers\n1- Return the first mentioned\n2- Return the second mentioned\nand so on\n*/\n})\n')))}d.isMDXComponent=!0}}]);