"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7589],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=s(t),m=o,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||r;return t?a.createElement(u,l(l({ref:n},p),{},{components:t})):a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[h]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={title:"bot.onChannelCreate",description:"An event that gets executed, if the bot sees a channel creation on a server. To let the bot listen to the event, add one bot.onChannelCreate() callback inside your main file."},l=void 0,i={unversionedId:"events/bot.onchannelcreate",id:"version-5.5.5/events/bot.onchannelcreate",title:"bot.onChannelCreate",description:"An event that gets executed, if the bot sees a channel creation on a server. To let the bot listen to the event, add one bot.onChannelCreate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onchannelcreate.md",sourceDirName:"events",slug:"/events/bot.onchannelcreate",permalink:"/docs/5.5.5/events/bot.onchannelcreate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688672656,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"bot.onChannelCreate",description:"An event that gets executed, if the bot sees a channel creation on a server. To let the bot listen to the event, add one bot.onChannelCreate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onBanRemove",permalink:"/docs/5.5.5/events/bot.onbanremove"},next:{title:"bot.onChannelDelete",permalink:"/docs/5.5.5/events/bot.onchanneldelete"}},c={},s=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],p={toc:s},h="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(h,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command triggers every time a channel gets created on a server."),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.channelCreateCommand({ //Command\nchannel: "channel ID", //Channel where its being logged\ncode: `your code` //Code sent to <channel>\n})\n')),(0,o.kt)("h4",{id:"example-command"},"Example Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.channelCreateCommand({ \nchannel: "772414449839636490", \ncode: `\nChannel Created:\n$newChannel[name]\n`\n})\n')),(0,o.kt)("h4",{id:"options"},"Options:"),(0,o.kt)("p",null,"You can use the function ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/newchannel"},"$newChannel","[","]"," "),"with the options below to return new channel data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the channel "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - The name of the channel "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"topic")," - The topic for this channel "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"position")," - The position of the channel "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"categoryID")," - The ID of the category this channel belongs to "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"guildID")," - The ID of the guild this channel belongs to "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lastMessageID")," - The ID of the last message sent here ","(","if any",")"," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type")," - The type of this channel "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nsfw")," - Whether the channel is nsfw or not "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slowmode")," - The slow mode duration for this channel "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rawPosition")," - The raw position for this channel "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deleted")," - Whether the channel was deleted or not "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"viewable")," - Whether the channel was be seen by the client or not "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"manageable")," - Whether the client can or not manage this channel "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deleteable")," - Whether this channel can be deleted by the client or not")))}d.isMDXComponent=!0}}]);