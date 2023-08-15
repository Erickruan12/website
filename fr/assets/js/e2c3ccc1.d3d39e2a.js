"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19618],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),y=n,m=s["".concat(c,".").concat(y)]||s[y]||d[y]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},64458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>C,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),y=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const m={title:"$arrayConcat",description:"$arrayConcat permet de concat\xe9ner plusieurs tableaux.",id:"arrayConcat"},f=void 0,b={unversionedId:"functions/array-related/arrayConcat",id:"version-6.4.0/functions/array-related/arrayConcat",title:"$arrayConcat",description:"$arrayConcat permet de concat\xe9ner plusieurs tableaux.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayConcat.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayConcat",permalink:"/fr/docs/functions/array-related/arrayConcat",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 ao\xfbt 2023",frontMatter:{title:"$arrayConcat",description:"$arrayConcat permet de concat\xe9ner plusieurs tableaux.",id:"arrayConcat"},sidebar:"docs",previous:{title:"$arrayAt",permalink:"/fr/docs/functions/array-related/arrayAt"},next:{title:"$arrayEvery",permalink:"/fr/docs/functions/array-related/arrayEvery"}},v={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:g},O="wrapper";function C(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,a.kt)(O,d(s(s({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayConcat")," permet de concat\xe9ner plusieurs tableaux."),(0,a.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayConcat[s\xe9parateur;...tableaux]\n")),(0,a.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"s\xe9parateur"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"S\xe9parateur."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"...tableaux"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,"Ceci retournera ",(0,a.kt)("inlineCode",{parentName:"p"},"Ceci est un test")," car il concat\xe8ne les tableaux 1 et 2 :"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'arrayConcat',\n    code: `\n  $arrayConcat[ ;tableau1;tableau2]\n  $createArray[tableau1;Ceci est]\n  $createArray[tableau2;un test]\n  `\n});\n")))}C.isMDXComponent=!0}}]);