"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82914],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(t),m=r,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>b,default:()=>w,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var a=t(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))d.call(n,t)&&p(e,t,n[t]);return e},u=(e,n)=>o(e,l(n)),m=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};const f={title:"$channelCooldown",description:"$channelCooldown establecer\xe1 un enfriamiento vinculado a un canal espec\xedfico despu\xe9s de la ejecuci\xf3n del comando.",id:"channelCooldown"},b=void 0,v={unversionedId:"functions/variables-related/channelCooldown",id:"version-6.4.0/functions/variables-related/channelCooldown",title:"$channelCooldown",description:"$channelCooldown establecer\xe1 un enfriamiento vinculado a un canal espec\xedfico despu\xe9s de la ejecuci\xf3n del comando.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/channelCooldown.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/channelCooldown",permalink:"/es/docs/functions/variables-related/channelCooldown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 ago 2023",frontMatter:{title:"$channelCooldown",description:"$channelCooldown establecer\xe1 un enfriamiento vinculado a un canal espec\xedfico despu\xe9s de la ejecuci\xf3n del comando.",id:"channelCooldown"},sidebar:"docs",previous:{title:"$advanceCooldown",permalink:"/es/docs/functions/variables-related/advanceCooldown"},next:{title:"$cooldown",permalink:"/es/docs/functions/variables-related/cooldown"}},k={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:y},h="wrapper";function w(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,a.kt)(h,u(s(s({},g),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$channelCooldown")," establecer\xe1 un enfriamiento basado en canales."),(0,a.kt)("h2",s({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$channelCooldown[time;errorMessage]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Puedes recuperar el tiempo de enfriamiento restante en la funci\xf3n ",(0,a.kt)("inlineCode",{parentName:"li"},"$channelCooldown")," usando ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"%time%"))," o cualquiera de los siguientes a continuaci\xf3n.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%sec%")," ",(0,a.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,a.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"tiempo"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Temporizador del tiempo de espera"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"mensaje de error"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Mensaje de error cuando el temporizador de enfriamiento dado todav\xeda est\xe1 activo."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"no")))),(0,a.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto establecer\xe1 un tiempo de reutilizaci\xf3n para un comando en el canal en el que se ejecut\xf3 el comando y devuelve el tiempo de reutilizaci\xf3n restante:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelCooldown',\n    code: `\n  hola\n  $channelCooldown[2m;Please wait %time% to execute this command again.]\n  `\n});\n")))}w.isMDXComponent=!0}}]);