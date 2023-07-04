"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,h=s["".concat(c,".").concat(f)]||s[f]||d[f]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"$createChannel",description:"Creates a channel with given type (text/voice) and name. If fourth field is set to 'yes', the function will return the newly created channel ID."},i=void 0,o={unversionedId:"functions/createchannel",id:"version-5.5.5/functions/createchannel",title:"$createChannel",description:"Creates a channel with given type (text/voice) and name. If fourth field is set to 'yes', the function will return the newly created channel ID.",source:"@site/versioned_docs/version-5.5.5/functions/createchannel.md",sourceDirName:"functions",slug:"/functions/createchannel",permalink:"/docs/5.5.5/functions/createchannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688441068,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{title:"$createChannel",description:"Creates a channel with given type (text/voice) and name. If fourth field is set to 'yes', the function will return the newly created channel ID."},sidebar:"docs",previous:{title:"$cpu",permalink:"/docs/5.5.5/functions/cpu"},next:{title:"$createFile",permalink:"/docs/5.5.5/functions/createfile"}},c={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Types",id:"types",level:4}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function allows the bot to create a channel"),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 3 required fields"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"GuildID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Name ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Type ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Return ID ","(","Optional",")"),(0,a.kt)("li",{parentName:"ol"},"Category ID ","(","Optional",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$createChannel[guildId;name;type;return ID (yes/no);category ID (optional)]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Guild ID - The ID of the guild"),(0,a.kt)("li",{parentName:"ul"},"Name - The name of the channel"),(0,a.kt)("li",{parentName:"ul"},"Type - The type of the channel you want to make"),(0,a.kt)("li",{parentName:"ul"},"Return ID - Whether or not the function will return newly created channel ID"),(0,a.kt)("li",{parentName:"ul"},"Category ID - The category of which the channel will be placed under")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"text - Text Channel"),(0,a.kt)("li",{parentName:"ul"},"voice - Voice Channel"),(0,a.kt)("li",{parentName:"ul"},"category - Category"),(0,a.kt)("li",{parentName:"ul"},"stage - Stage Channel")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "create",\ncode: `Channel ID: $createChannel[$guildID;new;text;yes]` //Makes a text channel named "new"\n})\n')))}d.isMDXComponent=!0}}]);