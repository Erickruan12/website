"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59516],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(r),m=n,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Roblox group info command",description:"Displays info about a roblox group",authors:{name:"@supremesupreme",title:"Member - 964024743172915220",userid:"964024743172915220",url:"https://discord.com/users/964024743172915220",image_url:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,p={permalink:"/wikis/posts/964024743172915220/ebigj",source:"@site/forums/posts/964024743172915220/ebigj.md",title:"Roblox group info command",description:"Displays info about a roblox group",date:"2023-07-04T03:24:28.000Z",formattedDate:"July 4, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@supremesupreme",title:"Member - 964024743172915220",userid:"964024743172915220",url:"https://discord.com/users/964024743172915220",image_url:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif",imageURL:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif"}],frontMatter:{title:"Roblox group info command",description:"Displays info about a roblox group",authors:{name:"@supremesupreme",title:"Member - 964024743172915220",userid:"964024743172915220",url:"https://discord.com/users/964024743172915220",image_url:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif",imageURL:"https://cdn.discordapp.com/avatars/964024743172915220/a_153765879b794acfd5fd72ce3f6cd713.gif"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Ticketing system",permalink:"/wikis/posts/949588732498018324/r4uv0q"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c},l="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    name: "groupinfo",\n    code: `\n    $title[1;Success!] \n    $description[> Group ID: $getobjectproperty[id]\n    > **Group Name:** $getobjectproperty[name]\n    > **Group Description:** $getobjectproperty[description] $if[$getobjectproperty[description]==;undefined;]\n    > **Group OwnerId:** $getobjectproperty[owner.username]\n    > **Group Latest Shout:** $getobjectproperty[shout.body] $if[$getobjectproperty[shout.body]==;undefined;]\n]\n    $color[1;#C3A78E]\n    $footer[1;bob]\n    $createObject[$jsonRequest[https://groups.roblox.com/v1/groups/$message[1]]]\n    $argscheck[1;Group id?]\n    `\n}\n')))}d.isMDXComponent=!0}}]);