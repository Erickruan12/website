"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$addSelectMenu",description:"$addSelectMenu ajoutera un menu de s\xe9lection au message du bot.",id:"addSelectMenu"},v=void 0,y={unversionedId:"functions/interaction-related/addSelectMenu",id:"version-6.4.0/functions/interaction-related/addSelectMenu",title:"$addSelectMenu",description:"$addSelectMenu ajoutera un menu de s\xe9lection au message du bot.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/addSelectMenu.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addSelectMenu",permalink:"/fr/docs/functions/interaction-related/addSelectMenu",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 ao\xfbt 2023",frontMatter:{title:"$addSelectMenu",description:"$addSelectMenu ajoutera un menu de s\xe9lection au message du bot.",id:"addSelectMenu"},sidebar:"docs",previous:{title:"$addField",permalink:"/fr/docs/functions/interaction-related/addField"},next:{title:"$addTimestamp",permalink:"/fr/docs/functions/interaction-related/addTimestamp"}},g={},k=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:k},N="wrapper";function O(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(N,d(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addSelectMenu")," ajoutera un menu de s\xe9lection au message du bot."),(0,a.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$addSelectMenu[index;IDpersonnalis\xe9;placeHolder;valeursMin;valeursMax;d\xe9sactiv\xe9?;\xe9tiquette:description:valeur:d\xe9faut?:\xe9moji?;...]\n")),(0,a.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type de texte"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Libell\xe9"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Requis"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Dans quelle ligne le menu de s\xe9lection appara\xeet, un menu de s\xe9lection n\xe9cessite une ligne enti\xe8re."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"IDpersonnalis\xe9"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"L'ID personnalis\xe9 du composant."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"placeHolder"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Placeholder du menu de s\xe9lection."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"valeursMin"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Nombre de valeurs minimales des options s\xe9lectionnables."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"valeursMax"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Nombre de valeurs maximales des options s\xe9lectionnables."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"d\xe9sactiv\xe9"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"bool\xe9en"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Si le menu d\xe9roulant appara\xeet comme d\xe9sactiv\xe9 - ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"true")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"false")," (par d\xe9faut)"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Options"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Les options du menu de s\xe9lection s\xe9par\xe9es les une des autres par ",(0,a.kt)("inlineCode",{parentName:"td"},";")," et ",(0,a.kt)("inlineCode",{parentName:"td"},":"),"."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,"Ceci ajoute un menu de s\xe9lection avec deux fonctions :"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "add-select-menu",\n    code: `\n  S\xe9lectionnez une option.\n\n  $addSelectMenu[1;votreIDpersonnalis\xe9;Ceci est un placeholder!;1;1;false;Option A:Description de l\'option A:autreIDpersonnalis\xe9:false;Option B:Description de l\'option B:encoreUnIDpersonnalis\xe9:true]\n  `\n});\n\nbot.interactionCommand({\n    name: "votreIDpersonnalis\xe9",\n    prototype: "selectMenu",\n    code: `\n  $interactionReply[Bonjour ! :);;;;everyone;false]\n  $onlyIf[$interactionData[values[0]]==autreIDpersonnalis\xe9;]\n  `\n});\n\nbot.interactionCommand({\n    name: "votreIDpersonnalis\xe9",\n    prototype: "selectMenu",\n    code: `\n  $interactionReply[Bonjour ! :);;;;everyone;false]\n  $onlyIf[$interactionData[values[0]]==encoreUnIDpersonnalis\xe9;]\n  `\n});\n\n/* \nNous utilisons "$onlyIf[$interactionData[values[0]]==IDpersonnalis\xe9;]" pour nous assurer que cela sera d\xe9clench\xe9 uniquement pour l\'option s\xe9lectionn\xe9e.\n\nAssurez-vous \xe9galement que vous avez l\'\xe9v\xe9nement "onInteractionCreate" dans votre fichier principal (index.js dans la plupart des cas).\n*/\n')),(0,a.kt)("p",null,"Exemple avec un handler :"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),'module.exports = [{\n    name: "add-select-menu",\n    code: `\n     S\xe9lectionnez une option.\n     $addSelectMenu[1;votreIDpersonnalis\xe9;Ceci est un placeholder!;1;1;false;Option A:Description de l\'option A:autreIDpersonnalis\xe9:false;Option B:Description de l\'option B:encoreUnIDpersonnalis\xe9:true]\n  `\n}, {\n    nom: "votreIDpersonnalis\xe9",\n    type: "interaction", // clarifiant que cette commande est un prototype d\'interaction\n    prototype: "selectMenu",\n    code: `\n     $interactionReply[Bonjour! :);;;;everyone;false]\n     $onlyIf[$interactionData[values[0]]==autreIDpersonnalis\xe9; `\n}, {\n    name : "votreIDpersonnalis\xe9",\n    type: "interaction", // clarifiant que cette commande est un prototype d\'interaction\n    prototype: "selectMenu",\n    code : `\n     $interactionReply[Au revoir ! :(;;;;;everyone;false]\n     $onlyIf[$interactionData[values[0]]==encoreUnIDpersonnalis\xe9;]`\n}]\n')))}O.isMDXComponent=!0}}]);