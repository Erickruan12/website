"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>P,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$messagePublish",description:"$messagePublish publicar\xe1 un mensaje en un canal de anuncios.",id:"messagePublish"},g=void 0,b={unversionedId:"functions/guild-related/messagePublish",id:"version-6.4.0/functions/guild-related/messagePublish",title:"$messagePublish",description:"$messagePublish publicar\xe1 un mensaje en un canal de anuncios.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/messagePublish.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/messagePublish",permalink:"/es/docs/functions/guild-related/messagePublish",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 ago 2023",frontMatter:{title:"$messagePublish",description:"$messagePublish publicar\xe1 un mensaje en un canal de anuncios.",id:"messagePublish"},sidebar:"docs",previous:{title:"$lockThread",permalink:"/es/docs/functions/guild-related/lockThread"},next:{title:"$modifyChannelPerms",permalink:"/es/docs/functions/guild-related/modifyChannelPerms"}},y={},h=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:h},k="wrapper";function P(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,d(p(p({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$messagePublish")," publicar\xe1 un mensaje en un canal de anuncios."),(0,r.kt)("h2",p({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$messagePublish[ID de mensaje;canalID?]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID de mensaje"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"El ID del mensaje que debe ser publicado."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"canalID?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID del canal en el que se encuentra el mensaje."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto publicar\xe1 un mensaje ( s\xf3lo funcionar\xe1 en los canales de anuncio):"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'messagePublish',\n    code: `\n  $messagePublish[$get[msgID];$channelID]\n  $let[msgID;$sendMessage[Hello!;true]]\n  `\n});\n")))}P.isMDXComponent=!0}}]);