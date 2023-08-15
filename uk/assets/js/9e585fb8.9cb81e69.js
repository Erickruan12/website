"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>l(e,i(t)),u=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$modifyChannelPerms",description:"$modifyChannelPerms will modify a given channels permission overrides.",id:"modifyChannelPerms"},g=void 0,y={unversionedId:"functions/guild-related/modifyChannelPerms",id:"version-6.4.0/functions/guild-related/modifyChannelPerms",title:"$modifyChannelPerms",description:"$modifyChannelPerms will modify a given channels permission overrides.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/modifyChannelPerms.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/modifyChannelPerms",permalink:"/uk/docs/functions/guild-related/modifyChannelPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$modifyChannelPerms",description:"$modifyChannelPerms will modify a given channels permission overrides.",id:"modifyChannelPerms"},sidebar:"docs",previous:{title:"$messagePublish",permalink:"/uk/docs/functions/guild-related/messagePublish"},next:{title:"$modifyEmoji",permalink:"/uk/docs/functions/guild-related/modifyEmoji"}},k={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],b={toc:h},v="wrapper";function N(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(v,c(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$modifyChannelPerms")," will modify a given channel's permission overrides."),(0,r.kt)("h2",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$modifyChannelPerms[channelID;roruID;...perms]\n")),(0,r.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"channelID"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"The channel ID of which you're trying to modify its permissions."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"roruID"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"The ID of an user or role. ( ",(0,r.kt)("inlineCode",{parentName:"td"},"$guildID")," represents the ",(0,r.kt)("inlineCode",{parentName:"td"},"@everyone")," role. )"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"...perms"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"The permissions that will be changed."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null})),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Deny a specific permission to someone or something.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"+")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Allow a specific permission to someone or something.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Reset a specific permission to its default state.")))),(0,r.kt)("p",null,"You can find all permissions ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",d({parentName:"strong"},{href:"/uk/docs/guides/client/permissions"}),"here")),"."),(0,r.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will allow ",(0,r.kt)("inlineCode",{parentName:"p"},"@everyone")," to send messages and add reactions in the current channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'modifyChannelPerms',\n    code: `\n  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]\n  `\n});\n")))}N.isMDXComponent=!0}}]);