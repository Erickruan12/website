"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Is file empty function",description:"This function will return `true` or `false` based on whether the file specified is empty or not.",authors:{name:"@artemcurious",title:"Member - 591690683509768223",userid:"591690683509768223",url:"https://discord.com/users/591690683509768223",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/591690683509768223.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},o=void 0,s={permalink:"/wikis/posts/591690683509768223/d0m8v5",source:"@site/forums/posts/591690683509768223/d0m8v5.md",title:"Is file empty function",description:"This function will return `true` or `false` based on whether the file specified is empty or not.",date:"2023-07-06T19:44:16.000Z",formattedDate:"July 6, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@artemcurious",title:"Member - 591690683509768223",userid:"591690683509768223",url:"https://discord.com/users/591690683509768223",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/591690683509768223.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/591690683509768223.png"}],frontMatter:{title:"Is file empty function",description:"This function will return `true` or `false` based on whether the file specified is empty or not.",authors:{name:"@artemcurious",title:"Member - 591690683509768223",userid:"591690683509768223",url:"https://discord.com/users/591690683509768223",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/591690683509768223.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/591690683509768223.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"New if in old if commands",permalink:"/wikis/posts/591690683509768223/82om08"},nextItem:{title:"Download function",permalink:"/wikis/posts/591690683509768223/h3mscp"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a fairly simple function that will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," based on whether the file specified is empty or not."),(0,a.kt)("p",null,"Paste this into your main file, common to be named ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"bot.functionManager.createFunction({\n  name: `$isFileEmpty`,\n  type: \"djs\",\n  code: async d => {\n    const data = d.util.aoiFunc(d);\n    const [filePath] = data.inside.splits;\n\n    const isFileEmpty = filePath => {\n      try {\n        const stats = fs.statSync(filePath);\n        return stats.size === 0;\n      } catch (error) {\n        // Handle file not found or other errors\n        console.error('Error:', error);\n        return false;\n      }\n    }\n\n    data.result = isFileEmpty(filePath);\n\n    return {\n      code: d.util.setCode(data)\n    };\n  }\n});\n")),(0,a.kt)("p",null,"That's it, have fun, bye!"))}m.isMDXComponent=!0}}]);