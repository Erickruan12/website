"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>j,default:()=>E,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>i(e,o(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$deleteEmoji",description:"$deleteEmoji supprimera un emoji sp\xe9cifique.",id:"deleteEmoji"},j=void 0,g={unversionedId:"functions/guild-related/deleteEmoji",id:"version-6.4.0/functions/guild-related/deleteEmoji",title:"$deleteEmoji",description:"$deleteEmoji supprimera un emoji sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/deleteEmoji.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/deleteEmoji",permalink:"/fr/docs/functions/guild-related/deleteEmoji",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718184,formattedLastUpdatedAt:"18 juil. 2023",frontMatter:{title:"$deleteEmoji",description:"$deleteEmoji supprimera un emoji sp\xe9cifique.",id:"deleteEmoji"},sidebar:"docs",previous:{title:"$deleteChannels",permalink:"/fr/docs/functions/guild-related/deleteChannels"},next:{title:"$deleteEmojis",permalink:"/fr/docs/functions/guild-related/deleteEmojis"}},y={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],v={toc:b},O="wrapper";function E(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(O,d(s(s({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$deleteEmoji")," supprimera un emoji sp\xe9cifique."),(0,n.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$deleteEmoji[emoji]\n")),(0,n.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"emoji"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Nom de l'\xe9moji, ID ou forme compl\xe8te de l'\xe9moji qui sera supprim\xe9."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"oui")))),(0,n.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Ceci supprimera un emoji al\xe9atoire de votre serveur:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'supprimerEmoji',\n    code: `\n  $deleteEmoji[$randomEmoji]\n  `\n});\n")))}E.isMDXComponent=!0}}]);