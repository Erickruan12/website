"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"$emojiExists"},s=void 0,a={unversionedId:"functions/emojiexists",id:"version-5.5.5/functions/emojiexists",title:"$emojiExists",description:"This function will return true or false depending if given emoji ID is an existent emoji \\(Registered in one of the bot's servers\\) or not.",source:"@site/versioned_docs/version-5.5.5/functions/emojiexists.md",sourceDirName:"functions",slug:"/functions/emojiexists",permalink:"/docs/5.5.5/functions/emojiexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687527006,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{title:"$emojiExists"},sidebar:"docs",previous:{title:"$emojiCount",permalink:"/docs/5.5.5/functions/emojicount"},next:{title:"$emojisFromMessage",permalink:"/docs/5.5.5/functions/emojisfrommessage"}},l={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," depending if given emoji ID is an existent emoji ","(","Registered in one of the bot's servers",")"," or not."),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 1 field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Emoji ID ","(","Required",")")),(0,i.kt)("p",null,"Raw usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$emojiExists[emojiID]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Emoji ID - The ID of the emoji we're checking")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "emojiexists",\n    code: `The emoji with id $message exists?\n    $emojiExists[$message]\n    `\n});\n')))}m.isMDXComponent=!0}}]);