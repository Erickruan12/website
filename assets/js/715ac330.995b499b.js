"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[80977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"anti swear command",description:"A djs code to check if any message contains swear words or not.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"},tags:["v6","Other","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},s=void 0,i={permalink:"/wikis/posts/715852000096419900/cy1ltq",source:"@site/forums/posts/715852000096419900/cy1ltq.md",title:"anti swear command",description:"A djs code to check if any message contains swear words or not.",date:"2023-07-02T19:50:56.000Z",formattedDate:"July 2, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"Other",permalink:"/wikis/tags/other"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"}],frontMatter:{title:"anti swear command",description:"A djs code to check if any message contains swear words or not.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png"},tags:["v6","Other","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"commands list",permalink:"/wikis/posts/715852000096419900/aswziy"},nextItem:{title:"toToggleCase",permalink:"/wikis/posts/715852000096419900/dmrmlh"}},c={authorsImageUrls:[void 0]},l=[{value:"Error?",id:"error",level:3},{value:"Good Luck",id:"good-luck",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\nname: \"$alwaysExecute\",\ncode: `\n$deleteCommand\n<@$authorID> Please refrain from swearing!\n\n$onlyIf[$djsEval[const BadWordsNext = require('bad-words-next')\nconst en = require('bad-words-next/data/en.json')\nconst badwords = new BadWordsNext({ data: en })\nbadwords.check(\\`$message\\`);true]==true]\n\n$onlyIf[$checkCondition[$message!=||$isBot[$authorID]==false]==true;]\n\n$suppressErrors\n`\n}\n")),(0,a.kt)("h3",{id:"error"},"Error?"),(0,a.kt)("p",null,"probably modules not found"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"go to shell/terminal and type ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i bad-words-next"))),(0,a.kt)("h3",{id:"good-luck"},"Good Luck"))}u.isMDXComponent=!0}}]);