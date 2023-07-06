"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[m]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"$mentionedUsersCount",description:"$mentionedUsersCount will return the amount of user mentions within a message.",id:"mentionedUsersCount"},s=void 0,a={unversionedId:"functions/util-related/mentionedUsersCount",id:"version-6.3.0/functions/util-related/mentionedUsersCount",title:"$mentionedUsersCount",description:"$mentionedUsersCount will return the amount of user mentions within a message.",source:"@site/versioned_docs/version-6.3.0/functions/util-related/mentionedUsersCount.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedUsersCount",permalink:"/docs/functions/util-related/mentionedUsersCount",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688672656,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$mentionedUsersCount",description:"$mentionedUsersCount will return the amount of user mentions within a message.",id:"mentionedUsersCount"},sidebar:"docs",previous:{title:"$mentionedRolesCount",permalink:"/docs/functions/util-related/mentionedRolesCount"},next:{title:"$messageExists",permalink:"/docs/functions/util-related/messageExists"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$mentionedUsersCount")," will return the amount of user mentions within a message."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$mentionedUsersCount\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will return the amount of user mentions in the given text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'mentionedUsersCount',\n    code: `\n  Amount of user mentions: $mentionedUsersCount\n`\n});\n")))}d.isMDXComponent=!0}}]);