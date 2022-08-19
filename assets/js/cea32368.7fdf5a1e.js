"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"bot.onVoiceStateUpdate",description:"An event that gets executed, if the bot sees a user updating their voice status. To let the bot listen to the event, add one bot.onVoiceStateUpdate() callback inside your mainfile."},o=void 0,l={unversionedId:"events/bot.onvoicestateupdate",id:"version-5.5.5/events/bot.onvoicestateupdate",title:"bot.onVoiceStateUpdate",description:"An event that gets executed, if the bot sees a user updating their voice status. To let the bot listen to the event, add one bot.onVoiceStateUpdate() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onvoicestateupdate.md",sourceDirName:"events",slug:"/events/bot.onvoicestateupdate",permalink:"/docs/events/bot.onvoicestateupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"bot.onVoiceStateUpdate",description:"An event that gets executed, if the bot sees a user updating their voice status. To let the bot listen to the event, add one bot.onVoiceStateUpdate() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onUserUpdate",permalink:"/docs/events/bot.onuserupdate"},next:{title:"Hyperlink",permalink:"/docs/other/hyperlink"}},s={},d=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4},{value:"Options:",id:"options",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback triggers whenever someone joins a voice channel, leaves a voice channel or updates their vc options. "),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.voiceStateUpdateCommand({ //Command\nchannel: "id" // Log Channel\ncode: `code` //Your code\n})\n')),(0,r.kt)("h4",{id:"example-command"},"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.voiceStateUpdateCommand({ \nchannel: "772414449839636490" \ncode: `\n$userTag[$newState[id]] has joined the vc $newState[channelName]\n$onlyIf[$newState[channelID]!=;]\n$onlyIf[$oldState[channelID]==;]\n` \n})\n')),(0,r.kt)("h4",{id:"options"},"Options:"),(0,r.kt)("p",null,"You can use the functions $newState","[","]"," and $oldState","[","]"," with the options below to return old and new voice state data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guildID")," =",">"," The ID of the guild the voice state update happened in "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guildName")," =",">"," The name of the guild this voice state update happened"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," =",">"," The name of the user that updated its voice state "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," =",">"," The ID of the user that updated its voice state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channelID")," =",">"," The ID of the voice channel this voice state update occurred in"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channelName")," =",">"," The name of the voice channel this voice state update occurred in"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serverDeaf")," =",">"," Whether the user is server deafened"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selfDeaf")," =",">"," Whether the user is self deafened"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selfMute")," =",">"," Whether the user is self muted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serverMute")," =",">"," Whether the user is server muted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sessionID")," =",">"," The ID of this voice session"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"streaming")," =",">"," Whether this user is streaming"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deaf"),"=",">"," Whether the user is either self-deafened or server-deafened"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mute")," =",">"," Whether the user is either self-muted or server-muted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"speaking")," =",">"," Whether the user is speaking")))}c.isMDXComponent=!0}}]);