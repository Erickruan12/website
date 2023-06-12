"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"$channel"},o=void 0,i={unversionedId:"functions/channel",id:"version-5.5.5/functions/channel",title:"$channel",description:"This function returns the specified channel's given property",source:"@site/versioned_docs/version-5.5.5/functions/channel.md",sourceDirName:"functions",slug:"/functions/channel",permalink:"/docs/5.5.5/functions/channel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686578236,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"$channel"},sidebar:"docs",previous:{title:"$changeNickname",permalink:"/docs/5.5.5/functions/changenickname"},next:{title:"$channelCategoryID",permalink:"/docs/5.5.5/functions/channelcategoryid"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Available Properties",id:"available-properties",level:4},{value:"Examples",id:"examples",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the specified channel's given property"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$channel[channelIID;property]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"channel ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The channel you want to get properties from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"property"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The property you want to get"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("h4",{id:"available-properties"},"Available Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name - Channel's Name"),(0,r.kt)("li",{parentName:"ul"},"topic - Channel's Topic"),(0,r.kt)("li",{parentName:"ul"},"ID - Channel's ID"),(0,r.kt)("li",{parentName:"ul"},"position - Channel's position organized by categories"),(0,r.kt)("li",{parentName:"ul"},"rawposition - Channel's position"),(0,r.kt)("li",{parentName:"ul"},"mention - Mention's the Channel"),(0,r.kt)("li",{parentName:"ul"},"created - Channel's date and time of creation"),(0,r.kt)("li",{parentName:"ul"},"isdeleted - Whether or not the channel has been deleted from the current guild, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"type - Channel's Type - text, voice, category"),(0,r.kt)("li",{parentName:"ul"},"timestamp - How long ago the channel was created"),(0,r.kt)("li",{parentName:"ul"},"guildid - Channel's home guild's id"),(0,r.kt)("li",{parentName:"ul"},"guildname - Channel's home guild's name"),(0,r.kt)("li",{parentName:"ul"},"ismanageable - Whether or not the the author of the command has permission to manage the channel, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"parentid - Channel's category's id"),(0,r.kt)("li",{parentName:"ul"},"parentname - Channel's category's name"),(0,r.kt)("li",{parentName:"ul"},"isviewable - Wehther or not the author of the command can view the channel, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"isdeleteable - Whether or not the author of the command can delete the channel, Returns Boolean")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "channel",\ncode: `\n$channel[$channelID;name]\n`\n})\n\n//or if you want the mentioned channel\n\nbot.command({\nname: "channel",\ncode: `\n$channel[$mentionedChannels[1];name]\n`\n})\n')))}u.isMDXComponent=!0}}]);