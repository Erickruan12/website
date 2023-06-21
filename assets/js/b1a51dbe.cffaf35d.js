"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||l[p]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"$memberJoinedDate",description:"Returns when the User Joined the Guild."},a=void 0,c={unversionedId:"functions/memberjoineddate",id:"version-5.5.5/functions/memberjoineddate",title:"$memberJoinedDate",description:"Returns when the User Joined the Guild.",source:"@site/versioned_docs/version-5.5.5/functions/memberjoineddate.md",sourceDirName:"functions",slug:"/functions/memberjoineddate",permalink:"/docs/5.5.5/functions/memberjoineddate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687324382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$memberJoinedDate",description:"Returns when the User Joined the Guild."},sidebar:"docs",previous:{title:"$memberExists",permalink:"/docs/5.5.5/functions/memberexists"},next:{title:"$memberJoinPosition",permalink:"/docs/5.5.5/functions/memberjoinposition"}},s={},u=[],m={toc:u},d="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns when the user joined the current guild"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$memberJoinedDate[userID;time/date/ms]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "joinndate",\ncode: `$memberJoinedDate[$authorID;time]`\n/*\ntime - 2 years 1 month 3 weeks 3 days 6 hours 42 minutes and 6 seconds\ndate - Thu Jan 17 2019 21:09:19 GMT+0000 (Greenwich Mean Time)\n*/\n})\n')))}l.isMDXComponent=!0}}]);