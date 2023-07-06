"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[48672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(r),g=a,d=p["".concat(l,".").concat(g)]||p[g]||u[g]||s;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<s;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const s={title:"Simple Moderations Clear",description:"This is a simple moderations clear command.",authors:{name:"@mingweiop",title:"Member - 730782268175679528",userid:"730782268175679528",url:"https://discord.com/users/730782268175679528",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/730782268175679528.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,o={permalink:"/wikis/posts/730782268175679528/j991sn",source:"@site/forums/posts/730782268175679528/j991sn.md",title:"Simple Moderations Clear",description:"This is a simple moderations clear command.",date:"2023-07-06T21:50:10.000Z",formattedDate:"July 6, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@mingweiop",title:"Member - 730782268175679528",userid:"730782268175679528",url:"https://discord.com/users/730782268175679528",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/730782268175679528.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/730782268175679528.png"}],frontMatter:{title:"Simple Moderations Clear",description:"This is a simple moderations clear command.",authors:{name:"@mingweiop",title:"Member - 730782268175679528",userid:"730782268175679528",url:"https://discord.com/users/730782268175679528",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/730782268175679528.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/730782268175679528.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Currency Command Balance",permalink:"/wikis/posts/730782268175679528/c0xpn"},nextItem:{title:"Ticketing system",permalink:"/wikis/posts/949588732498018324/r4uv0q"}},l={authorsImageUrls:[void 0]},m=[],c={toc:m},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "clear",\n    aliases: "purge",\n    code: `Successfully cleared **$message[1]** message(s)\n    $clear[$message[1]]\n    $onlyIf[$isNumber[$message[1]]==true;{newEmbed: {title:Invalid Numbers}{description:Correct Usage: \\`\\`!clear 20\\`\\`}}]\n    $argsCheck[1;{newEmbed: {title:Invalid Args}{description:Correct Usage: \\`\\`!clear 20\\`\\`}{color:Red}}]\n    $onlyClientPerms[managemessages;{newEmbed: {title:Bot Permission Required}{description:I do not have "Manage Messages" permission to clear message!}{color:Red}}]\n    $onlyPerms[managemessages;{newEmbed: {title:Permission Required}{description:You need "Manage Messages" permission to use this command!}{color:Red}}]`\n}]\n')))}u.isMDXComponent=!0}}]);