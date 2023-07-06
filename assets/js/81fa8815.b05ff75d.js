"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return r?a.createElement(m,u(u({ref:t},c),{},{components:r})):a.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,u=new Array(l);u[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,u[1]=s;for(var o=2;o<l;o++)u[o]=r[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={title:"$userDefaultAvatar",description:"$userDefaultAvatar will return the given user's default Discord User Avatar.",id:"userDefaultAvatar"},u=void 0,s={unversionedId:"functions/user-related/userDefaultAvatar",id:"version-6.3.0/functions/user-related/userDefaultAvatar",title:"$userDefaultAvatar",description:"$userDefaultAvatar will return the given user's default Discord User Avatar.",source:"@site/versioned_docs/version-6.3.0/functions/user-related/userDefaultAvatar.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/userDefaultAvatar",permalink:"/docs/functions/user-related/userDefaultAvatar",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688672656,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$userDefaultAvatar",description:"$userDefaultAvatar will return the given user's default Discord User Avatar.",id:"userDefaultAvatar"},sidebar:"docs",previous:{title:"$userCustomStatus",permalink:"/docs/functions/user-related/userCustomStatus"},next:{title:"$userExists",permalink:"/docs/functions/user-related/userExists"}},i={},o=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:o},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$userDefaultAvatar")," will return the given user's default Discord User Avatar."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$userDefaultAvatar[userID?]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID?"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the user."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)("p",null,"This will return your default Discord User Avatar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'userDefaultAvatar',\n    code: `\n  $userDefaultAvatar[$authorID]\n  `\n});\n")))}d.isMDXComponent=!0}}]);