"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66052],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=u(a),g=n,c=m["".concat(o,".").concat(g)]||m[g]||s[g]||l;return a?r.createElement(c,i(i({ref:t},p),{},{components:a})):r.createElement(c,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:n,i[1]=d;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},11501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={title:"$guildLeaderboard",description:"$guildLeaderboard will return a leaderboard of a guild variable.",id:"guildLeaderboard"},i=void 0,d={unversionedId:"functions/variables-related/guildLeaderboard",id:"version-6.3.0/functions/variables-related/guildLeaderboard",title:"$guildLeaderboard",description:"$guildLeaderboard will return a leaderboard of a guild variable.",source:"@site/versioned_docs/version-6.3.0/functions/variables-related/guildLeaderBoard.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/guildLeaderboard",permalink:"/docs/functions/variables-related/guildLeaderboard",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688672656,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$guildLeaderboard",description:"$guildLeaderboard will return a leaderboard of a guild variable.",id:"guildLeaderboard"},sidebar:"docs",previous:{title:"$guildCooldown",permalink:"/docs/functions/variables-related/guildCooldown"},next:{title:"$rawLeaderboard",permalink:"/docs/functions/variables-related/rawLeaderboard"}},o={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:u},m="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildLeaderboard")," will return a leaderboard of a guild variable."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$guildLeaderboard[variable;type?;custom?;list?;page?;table?]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"variable"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Variable name."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"In which order it will be returned ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"asc")," (ascending / default) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"dsc")," (descending)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"custom?"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"list?"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"How many to list."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"page?"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Which page to list."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"table?"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Variable table."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Options"),(0,n.kt)("th",{parentName:"tr",align:null},"Returns"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"{top}")),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the user position of the guild.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"{name}")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the user name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"{id}")),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the guild ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"{value}")),(0,n.kt)("td",{parentName:"tr",align:null},"number, integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the variable value.")))),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)("p",null,'This will returns a leaderboard of the "Example" variable:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "guildLeaderboard",\n    code: `\n    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]\n    `\n});\n')))}s.isMDXComponent=!0}}]);