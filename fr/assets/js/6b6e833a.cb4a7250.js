"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[51785],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=n,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return t?a.createElement(m,i(i({ref:r},u),{},{components:t})):a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11909:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&u(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>o(e,i(r)),f=(e,r)=>{var t={};for(var a in e)p.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$arrayJoin",description:"$arrayJoin rejoindra le tableau avec un s\xe9parateur donn\xe9.",id:"arrayJoin"},y=void 0,b={unversionedId:"functions/array-related/arrayJoin",id:"version-6.4.0/functions/array-related/arrayJoin",title:"$arrayJoin",description:"$arrayJoin rejoindra le tableau avec un s\xe9parateur donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayJoin.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayJoin",permalink:"/fr/docs/functions/array-related/arrayJoin",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 ao\xfbt 2023",frontMatter:{title:"$arrayJoin",description:"$arrayJoin rejoindra le tableau avec un s\xe9parateur donn\xe9.",id:"arrayJoin"},sidebar:"docs",previous:{title:"$arrayIndexOf",permalink:"/fr/docs/functions/array-related/arrayIndexOf"},next:{title:"$arrayLastIndexOf",permalink:"/fr/docs/functions/array-related/arrayLastIndexOf"}},v={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:g},k="wrapper";function j(e){var r=e,{components:t}=r,n=f(r,["components"]);return(0,a.kt)(k,d(s(s({},O),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayJoin")," rejoindra le tableau avec un s\xe9parateur donn\xe9."),(0,a.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayJoin[nom;s\xe9parateur?]\n")),(0,a.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"s\xe9parateur?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"S\xe9parateur."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"faux")))),(0,a.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-join",\n    code: `\n  $arrayJoin[tableau;, ]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n});\n')))}j.isMDXComponent=!0}}]);