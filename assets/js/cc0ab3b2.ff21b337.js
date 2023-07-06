"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,f=s["".concat(m,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"$commandInfo"},l=void 0,i={unversionedId:"functions/commandinfo",id:"version-5.5.5/functions/commandinfo",title:"$commandInfo",description:"This function allows the bot to return any property a command has",source:"@site/versioned_docs/version-5.5.5/functions/commandinfo.md",sourceDirName:"functions",slug:"/functions/commandinfo",permalink:"/docs/5.5.5/functions/commandinfo",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688680210,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$commandInfo"},sidebar:"docs",previous:{title:"$commandCode",permalink:"/docs/5.5.5/functions/commandcode"},next:{title:"$commandName",permalink:"/docs/5.5.5/functions/commandname"}},m={},c=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Properties",id:"properties",level:4},{value:"Examples",id:"examples",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows the bot to return any property a command has"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$commandInfo[command_name;property]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"command name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of command"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"property"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The property to be used"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name - The name of the command"),(0,r.kt)("li",{parentName:"ul"},"code - The code of the command"),(0,r.kt)("li",{parentName:"ul"},"aliases - The aliases of the command"),(0,r.kt)("li",{parentName:"ul"},"executeAt - Returns both if command can be used in ",(0,r.kt)("inlineCode",{parentName:"li"},"both")," dm and guild, ",(0,r.kt)("inlineCode",{parentName:"li"},"guild")," if in guild and ",(0,r.kt)("inlineCode",{parentName:"li"},"dm")," if in dm."),(0,r.kt)("li",{parentName:"ul"},"whitelist - Returns boolean whether or not the command is whitelisted for blacklisted users."),(0,r.kt)("li",{parentName:"ul"},"nonPrefixed - Returns boolean whether or not if the author message starts with command name."),(0,r.kt)("li",{parentName:"ul"},"[custom property]"," - Value added in command. Example- usage,info etc.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here's our example code we're basing off of")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'help',\naliases: ['h','commands'],\ncode: `\n$color[RANDOM]\n$description[Aoi.js is an awesome package]\n$title[MasterBot]\n`\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'commandInfo',\ncode: `$commandInfo[help;name]` //Returns 'help'\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'commandInfo',\ncode: `$commandInfo[help;code]` \n/*\nReturns '$color[RANDOM]\n$description[Aoi.js is an awesome package]\n$title[MasterBot]'\n*/\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With aliases")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'commandInfo',\ncode: `$commandInfo[help;aliases]` //Returns 'h,commands'\n})\n")))}d.isMDXComponent=!0}}]);