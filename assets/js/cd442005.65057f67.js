"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[73213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,g=s["".concat(d,".").concat(m)]||s[m]||c[m]||l;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"$getLeaderboardInfo",description:"$getLeaderboardInfo will return information about a given variable sorted in a leaderboard.",id:"getLeaderboardInfo"},o=void 0,i={unversionedId:"functions/variables-related/getLeaderboardInfo",id:"version-6.2.6/functions/variables-related/getLeaderboardInfo",title:"$getLeaderboardInfo",description:"$getLeaderboardInfo will return information about a given variable sorted in a leaderboard.",source:"@site/versioned_docs/version-6.2.6/functions/variables-related/getLeaderboardInfo.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/getLeaderboardInfo",permalink:"/docs/functions/variables-related/getLeaderboardInfo",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687864109,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{title:"$getLeaderboardInfo",description:"$getLeaderboardInfo will return information about a given variable sorted in a leaderboard.",id:"getLeaderboardInfo"},sidebar:"docs",previous:{title:"$getGuildVar",permalink:"/docs/functions/variables-related/getGuildVar"},next:{title:"$getMessageVar",permalink:"/docs/functions/variables-related/getMessageVar"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],u={toc:p},s="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$getLeaderboardInfo")," will return information about a given variable sorted in a leaderboard."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$getLeaderboardInfo[variable;id;type;option]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"varname"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Variable name."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"User/guild/channel/message ID."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Variable type ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"globalUser")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"user")," ",(0,n.kt)("br",null)," 3. ",(0,n.kt)("strong",{parentName:"td"},"server")," ",(0,n.kt)("br",null)," 4. ",(0,n.kt)("strong",{parentName:"td"},"channel")),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"option"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Option to return ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"top")," (default) ",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)("p",null,"This will return the position of the current guild:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "getLeaderboardInfo",\n    code: `\n    $getLeaderboardInfo[Example;$guildID;server;top]\n    `\n});\n')))}c.isMDXComponent=!0}}]);