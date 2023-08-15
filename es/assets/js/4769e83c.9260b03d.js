"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11535],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=i(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(f,u(u({ref:r},p),{},{components:t})):n.createElement(f,u({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87013:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>v,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(l)for(var t of l(r))i.call(r,t)&&p(e,t,r[t]);return e},d=(e,r)=>o(e,u(r)),m=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$username",description:"$username devolver\xe1 el nombre de usuario de un usuario.",id:"username"},v=void 0,b={unversionedId:"functions/user-related/username",id:"version-6.4.0/functions/user-related/username",title:"$username",description:"$username devolver\xe1 el nombre de usuario de un usuario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/username.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/username",permalink:"/es/docs/functions/user-related/username",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 ago 2023",frontMatter:{title:"$username",description:"$username devolver\xe1 el nombre de usuario de un usuario.",id:"username"},sidebar:"docs",previous:{title:"$userTag",permalink:"/es/docs/functions/user-related/userTag"},next:{title:"$usersBanned",permalink:"/es/docs/functions/user-related/usersBanned"}},y={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:g},k="wrapper";function j(e){var r=e,{components:t}=r,a=m(r,["components"]);return(0,n.kt)(k,d(c(c({},O),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$username")," devolver\xe1 el nombre de usuario de un usuario."),(0,n.kt)("h2",c({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$username[usuarioID?]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"usarioID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"La identificaci\xf3n del usuario."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 tu ID de usuario:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'username',\n    code: `\n  $username[$authorID]\n  `\n});\n")))}j.isMDXComponent=!0}}]);