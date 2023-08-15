"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),s=a,g=d["".concat(u,".").concat(s)]||d[s]||m[s]||l;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},37716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>k,toc:()=>N});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>l(e,i(t)),s=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const g={title:"$createRole",description:"$createRole cr\xe9era un nouveau r\xf4le dans le serveur donn\xe9.",id:"createRole"},f=void 0,k={unversionedId:"functions/guild-related/createRole",id:"version-6.4.0/functions/guild-related/createRole",title:"$createRole",description:"$createRole cr\xe9era un nouveau r\xf4le dans le serveur donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createRole.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createRole",permalink:"/fr/docs/functions/guild-related/createRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 ao\xfbt 2023",frontMatter:{title:"$createRole",description:"$createRole cr\xe9era un nouveau r\xf4le dans le serveur donn\xe9.",id:"createRole"},sidebar:"docs",previous:{title:"$createChannelInvite",permalink:"/fr/docs/functions/guild-related/createChannelInvite"},next:{title:"$createScheduledEvent",permalink:"/fr/docs/functions/guild-related/createScheduledEvent"}},v={},N=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:N},y="wrapper";function O(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(y,m(d(d({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$createRole")," cr\xe9era un nouveau r\xf4le dans le serveur donn\xe9."),(0,n.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createRole[IDserveur;renvoyerID;nom;couleur;ic\xf4ne;afficherS\xe9par\xe9ment;unicodeEmoji;position;mentionable;...permissions]\n")),(0,n.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"IDserveur"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"L'ID de la guilde dans laquelle le r\xf4le sera cr\xe9\xe9."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"renvoyerID"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"bool\xe9en"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Renvoie l'ID du r\xf4le nouvellement cr\xe9\xe9?"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"nom"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Le nom du nouveau r\xf4le."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"couleur"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"La couleur du nouveau r\xf4le."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ic\xf4ne"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"L'URL de l'image qui sera utilis\xe9e comme ic\xf4ne."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"afficherS\xe9par\xe9ment"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"bool\xe9en"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Si le nouveau r\xf4le doit \xeatre afficher s\xe9par\xe9ment."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"unicodeEmoji"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"L'unicodeEmoji qui sera utilis\xe9 en ic\xf4ne."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"position"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"La position du r\xf4le, 1 \xe9tant le plus bas."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"mentionnable"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"bool\xe9en"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Si le r\xf4le est mentionnable par ",(0,n.kt)("inlineCode",{parentName:"td"},"@everyone"),"."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"...permissions"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Permissions que le r\xf4le aura."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,'Cela va cr\xe9er un nouveau r\xf4le appel\xe9 "Oiseau" avec comme couleur le rouge:'),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'cr\xe9erRole',\n    code: `\n    $createRole[$guildID;false;Oiseau;FF0000;;false;\u2764;1;false;sendmessages]`\n});\n")))}O.isMDXComponent=!0}}]);