"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76795],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=d(n),k=a,s=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(s,o(o({ref:e},u),{},{components:n})):r.createElement(s,o({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60641:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>g,default:()=>v,frontMatter:()=>s,metadata:()=>N,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))d.call(e,n)&&u(t,n,e[n]);return t},c=(t,e)=>l(t,o(e)),k=(t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&d.call(t,r)&&(n[r]=t[r]);return n};const s={title:"$randomChannelID",description:"$randomChannelID \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u0430\u043d\u0430\u043b\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0433\u0438\u043b\u044c\u0434\u0438\u0439 \u0438\u043b\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",id:"randomChannelID"},g=void 0,N={unversionedId:"functions/util-related/randomChannelID",id:"version-6.4.0/functions/util-related/randomChannelID",title:"$randomChannelID",description:"$randomChannelID \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u0430\u043d\u0430\u043b\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0433\u0438\u043b\u044c\u0434\u0438\u0439 \u0438\u043b\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/randomChannelID.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/randomChannelID",permalink:"/ru/docs/functions/util-related/randomChannelID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689787809,formattedLastUpdatedAt:"19 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$randomChannelID",description:"$randomChannelID \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u0430\u043d\u0430\u043b\u0430 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0433\u0438\u043b\u044c\u0434\u0438\u0439 \u0438\u043b\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438.",id:"randomChannelID"},sidebar:"docs",previous:{title:"$random",permalink:"/ru/docs/functions/util-related/random"},next:{title:"$randomEmoji",permalink:"/ru/docs/functions/util-related/randomEmoji"}},f={},b=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],y={toc:b},h="wrapper";function v(t){var e=t,{components:n}=e,a=k(e,["components"]);return(0,r.kt)(h,c(m(m({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$randomChannelID")," \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u0430\u043d\u0430\u043b\u0430 \u0432\u0441\u0435\u0445 \u0433\u0438\u043b\u044c\u0434\u0438\u0439 \u0438\u043b\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438."),(0,r.kt)("h2",m({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$randomChannelID[guildID/global?;type?]\n")),(0,r.kt)("h2",m({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438/\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0430\u044f?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438 \u0438\u043b\u0438 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"nbg?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0422\u0438\u043f \u043a\u0430\u043d\u0430\u043b\u0430."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("h3",null," \u0442\u0438\u043f\u044b \u043a\u0430\u043d\u0430\u043b\u043e\u0432 ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u0422\u0438\u043f \u043a\u0430\u043d\u0430\u043b\u0430"),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u043a\u0430\u043d\u0430\u043b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0422\u0435\u043a\u0441\u0442")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0439 \u043a\u0430\u043d\u0430\u043b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0413\u043e\u043b\u043e\u0441")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041a\u0430\u043d\u0430\u043b \u0421\u0442\u0430\u0434\u0438\u0438"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u042d\u0442\u0430\u043f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u0430\u044f \u0442\u0435\u043c\u0430"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u0430\u044f \u0442\u0435\u043c\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0442\u0435\u043c\u0430"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"PublicThread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0424\u043e\u0440\u0443\u043c"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0424\u043e\u0440\u0443\u043c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043c\u044b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041a\u0430\u043d\u0430\u043b \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0414\u043e\u043c\u0430\u0448\u043d\u0438\u0439"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0433\u0438\u043b\u044c\u0434\u0438\u0438")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"NSFW \u043a\u0430\u043d\u0430\u043b"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"NSFW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041f\u0440\u044f\u043c\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u041b\u0421")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0412\u0441\u0435 \u0442\u0438\u043f\u044b \u043a\u0430\u043d\u0430\u043b\u043e\u0432"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u0432\u0441\u0435"))))),(0,r.kt)("h2",m({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u0430\u043d\u0430\u043b\u0430 \u0432\u0430\u0448\u0435\u0439 \u0433\u0438\u043b\u044c\u0434\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'randomChannelID',\n    code: `\n  <#$randomChannelID[$guildID;all]>\n  `\n});\n")))}v.isMDXComponent=!0}}]);