"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"$cacheMembers",description:"Updates the cache for the current guild members"},o=void 0,c={unversionedId:"functions/cachemembers",id:"version-5.5.5/functions/cachemembers",title:"$cacheMembers",description:"Updates the cache for the current guild members",source:"@site/versioned_docs/version-5.5.5/functions/cachemembers.md",sourceDirName:"functions",slug:"/functions/cachemembers",permalink:"/docs/5.5.5/functions/cachemembers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1688327456,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$cacheMembers",description:"Updates the cache for the current guild members"},sidebar:"docs",previous:{title:"$broadcastEval",permalink:"/docs/5.5.5/functions/broadcasteval"},next:{title:"$categoryChannels",permalink:"/docs/5.5.5/functions/categorychannels"}},i={},s=[{value:"Usage",id:"usage",level:3},{value:"Field",id:"field",level:3},{value:"Examples",id:"examples",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function is responsible for saving each new user that has not been registered before in your bot's database."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$cacheMembers[guildID?;returnCount?]\n")),(0,a.kt)("h3",{id:"field"},"Field"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"guild ID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The guild we're caching the members for"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"return count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The amount of members cached"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes/no"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Without optional fields")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "update",\n    code: `\n    Members cached.\n    $cacheMembers\n    `\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With optional fields")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "update",\n    code: `\n    $cacheMembers[773352845738115102;yes] members cached.\n    \n    `\n});\n')))}m.isMDXComponent=!0}}]);