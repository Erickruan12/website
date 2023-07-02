"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33289],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={title:"$forEachGuildChannel",description:"Loop over every guild channel in the guild executing an awaited command"},i=void 0,l={unversionedId:"functions/foreachguildchannel",id:"version-5.5.5/functions/foreachguildchannel",title:"$forEachGuildChannel",description:"Loop over every guild channel in the guild executing an awaited command",source:"@site/versioned_docs/version-5.5.5/functions/foreachguildchannel.md",sourceDirName:"functions",slug:"/functions/foreachguildchannel",permalink:"/docs/5.5.5/functions/foreachguildchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1688327456,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$forEachGuildChannel",description:"Loop over every guild channel in the guild executing an awaited command"},sidebar:"docs",previous:{title:"$forEachGuild",permalink:"/docs/5.5.5/functions/foreachguild"},next:{title:"$forEachMember",permalink:"/docs/5.5.5/functions/foreachmember"}},c={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],d={toc:u},s="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function creates a loop for every channel in the current guild"),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 1 required field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Awaited Command ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Awaited Command 2 ","(","Optional",")"),(0,a.kt)("li",{parentName:"ol"},"Etc")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$forEachGuildChannel[awaitedCommand1;awaitedCommand2;...]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Awaited Command","(","s",")"," - The awaited command","(","s",")"," we're executing")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "forEachGuildChannel",\ncode: "$forEachGuildChannel[loop3]"\n})\n\nbot.awaitedCommand({\nname: "loop3",\ncode: `$setChannelVar[hello;bye]` //Every channel in the current guild value for \'hello\' will be \'bye\'\n})\n')))}p.isMDXComponent=!0}}]);