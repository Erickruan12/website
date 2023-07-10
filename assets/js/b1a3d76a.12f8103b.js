"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,u=c["".concat(o,".").concat(m)]||c[m]||g[m]||s;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<s;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const s={title:"$editMessage",description:"$editMessage will edit a given message.",id:"editMessage"},l=void 0,i={unversionedId:"functions/message-related/editMessage",id:"version-6.3.0/functions/message-related/editMessage",title:"$editMessage",description:"$editMessage will edit a given message.",source:"@site/versioned_docs/version-6.3.0/functions/message-related/editMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/editMessage",permalink:"/docs/functions/message-related/editMessage",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011650,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$editMessage",description:"$editMessage will edit a given message.",id:"editMessage"},sidebar:"docs",previous:{title:"$deleteMessage",permalink:"/docs/functions/message-related/deleteMessage"},next:{title:"$editWebhookMessage",permalink:"/docs/functions/message-related/editWebhookMessage"}},o={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:d},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$editMessage")," will edit a given message."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$editMessage[messageID;content;channelID?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The message that should be edited."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The content of the new message."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelID?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The channel ID of where the message is located in."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("p",null,"You can only edit messages that were sent by the bot itself."),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will edit the sent message after five seconds: ( works the same way as ",(0,r.kt)("inlineCode",{parentName:"p"},"$editIn")," )"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'editMessage',\n    code: `\n  $editMessage[$get[id];Bye!]\n  $wait[5s]\n  $let[id;$sendMessage[Hello!;true]]\n  `\n});\n")))}g.isMDXComponent=!0}}]);