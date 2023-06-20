"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[70898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"$hasPermsInChannel",description:"Checks whether the specified user or role has given perms"},i=void 0,s={unversionedId:"functions/haspermsinchannel",id:"version-5.5.5/functions/haspermsinchannel",title:"$hasPermsInChannel",description:"Checks whether the specified user or role has given perms",source:"@site/versioned_docs/version-5.5.5/functions/haspermsinchannel.md",sourceDirName:"functions",slug:"/functions/haspermsinchannel",permalink:"/docs/5.5.5/functions/haspermsinchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687300492,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$hasPermsInChannel",description:"Checks whether the specified user or role has given perms"},sidebar:"docs",previous:{title:"$hasPerms",permalink:"/docs/5.5.5/functions/hasperms"},next:{title:"$hasRoles",permalink:"/docs/5.5.5/functions/hasroles"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns whether or not the specified user/role has the given perms in the specified channel. Returns boolean."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$hasPermsInChannel[channelID;uorrID;perms...]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"channel ID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The id of the channel"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"uorr ID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The id of the role or user whose perms are to be checked"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"perms"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The perms that are to be checked"),(0,a.kt)("td",{parentName:"tr",align:"left"},"str & num"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With user ID")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "has-perm",\n  code: `\n  $hasPermsInChannel[$channelID;$userID[Ayaka];admin]\n  `\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With role ID")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "has-perm",\n  code: `\n  $hasPermsInChannel[$channelID;$roleID[Developer];admin]\n  `\n});\n')))}u.isMDXComponent=!0}}]);