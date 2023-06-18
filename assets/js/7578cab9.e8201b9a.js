"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67237],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var o=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),c=function(e){var r=o.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return o.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=t,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(g,s(s({ref:r},p),{},{components:n})):o.createElement(g,s({ref:r},p))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:t,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9e4:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),t=(n(67294),n(3905));const a={},s="aoiError",l={unversionedId:"class/aoiError",id:"version-5.5.5/class/aoiError",title:"aoiError",description:"AoiError",source:"@site/versioned_docs/version-5.5.5/class/aoiError.md",sourceDirName:"class",slug:"/class/aoiError",permalink:"/docs/5.5.5/class/aoiError",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687065288,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{}},i={},c=[{value:"AoiError",id:"aoierror-1",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"makeMessageError()",id:"makemessageerror",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Example",id:"example",level:4},{value:"consoleError()",id:"consoleerror",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Example",id:"example-1",level:4}],p={toc:c},u="wrapper";function m(e){let{components:r,...n}=e;return(0,t.kt)(u,(0,o.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"aoierror"},"aoiError"),(0,t.kt)("h2",{id:"aoierror-1"},"AoiError"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},' A Custom Error Class Utilised By "aoi.js".\n')),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"bot.aoiError = aoijs.AoiError")),(0,t.kt)("h2",{id:"methods"},"Methods"),(0,t.kt)("h3",{id:"makemessageerror"},"makeMessageError()"),(0,t.kt)("h4",{id:"usage-1"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"AoiError.makeMessageError(client:Bot,channel:TextChannel | ThreadChannel | NewsChannel ,message:MessageOptions,extraOption:MessageExtraOptions)\n")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/docs/5.5.5/options/messageOptions"},(0,t.kt)("strong",{parentName:"a"},"MessageOptions"))),(0,t.kt)("h4",{id:"example"},"Example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},' const aoijs = require(\'aoi.js\');\n const bot = new aoijs.Bot({\n   token: "Your Bot Token",\n   prefix: ".",\n   intents: "all"\n});\n\n bot.AoiError = aoijs.AoiError;\n\n bot.command({\n   name: "custom-error",\n   code: `$djsEval[client.AoiError.makeMessageError(client,channel,{\n          content:"An Error Occurred",\n          embeds:"{newEmbed:{title:This is An Error}{description:Yup This Is An Error}}"\n.         })]`\n});\n')),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"consoleerror"},"consoleError()"),(0,t.kt)("h4",{id:"usage-2"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"AoiError.consoleError(ErrorName:string,ErrorMessage:any)\n")),(0,t.kt)("h4",{id:"example-1"},"Example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},' const aoijs = require(\'aoi.js\')\n const bot = new aoijs.Bot({\n   token: "Your Bot Token",\n   prefix: "Your Prefix",\n   intents: "all"\n})\n\n bot.AoiError = aoijs.AoiError \n\n bot.command({\n   name: "console-error",\n   code: `$djsEval[client.AoiError.consoleError("CustomError","This Is A Custom Error")]`\n})\n')))}m.isMDXComponent=!0}}]);