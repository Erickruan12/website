"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={title:"search function",description:"$search custom function for aoi.music which returns search results of either youtube or soundcloud.",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png"},tags:["aoi.js","aoi.music","v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},o=void 0,i={permalink:"/wikis/posts/428188716641812481/wvkxjp",source:"@site/forums/posts/428188716641812481/wvkxjp.md",title:"search function",description:"$search custom function for aoi.music which returns search results of either youtube or soundcloud.",date:"2023-07-06T19:44:16.000Z",formattedDate:"July 6, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"aoi.music",permalink:"/wikis/tags/aoi-music"},{label:"v6",permalink:"/wikis/tags/v-6"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png"}],frontMatter:{title:"search function",description:"$search custom function for aoi.music which returns search results of either youtube or soundcloud.",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png"},tags:["aoi.js","aoi.music","v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Transcript Custom Function",permalink:"/wikis/posts/428188716641812481/nw36qo"},nextItem:{title:"Unicode character unescape",permalink:"/wikis/posts/591690683509768223/0k0txb"}},u={authorsImageUrls:[void 0]},l=[{value:"Usage",id:"usage",level:2},{value:"Code:",id:"code",level:2},{value:"Preview:",id:"preview",level:2}],c={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Put the code in your index.js"),(0,a.kt)("li",{parentName:"ul"},"Ensure you have aoi.music installed, otherwise it won't work."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$search[type;query;format?;list? = 5]")," for example ",(0,a.kt)("inlineCode",{parentName:"li"},"$search[youtube;Hello;{title} by {artist} ({duration});5]"))),(0,a.kt)("h2",{id:"code"},"Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.functionManager.createFunction({\n  name: "$search",\n  type: "djs",\n  code: async (d) => {\n    const data = d.util.aoiFunc(d);\n    const [type = "youtube", query, format = "{title} by {artist} ({duration})", list = 5] = data.inside.splits;\n\n    const searchType = type.toLowerCase() === "youtube" ? 3 : 0;\n\n    let results;\n    if (searchType === 3) {\n      results = await bot.voiceManager.search(3, query, list);\n    } else if (searchType === 0) {\n      results = await bot.voiceManager.search(0, query, list);\n    }\n\n    if (results.length === 0) {\n      data.result = "No songs found with the given query!";\n      return {\n        code: d.util.setCode(data)\n      };\n    };\n\n    const formattedResults = results.map((result) => {\n      let formattedResult = format;\n\n      const placeholders = {\n        "{title}": result.title,\n        "{artist}": searchType === 3 ? result.author.name : result.publisher_metadata?.artist || "Unknown Artist",\n        "{duration}": searchType === 3 ? result.duration.seconds * 1000: result.duration,\n        "{formattedDuration}": searchType === 3 ? result.duration.text : new Date(result.duration).toISOString().substr(14, 5),\n        "{id}": result.id,\n        "{url}": searchType === 3 ? "https://www.youtube.com/watch?v=" + result.id : result.permalink_url\n      };\n\n      for (const placeholder in placeholders) {\n        formattedResult = formattedResult.replace(new RegExp(placeholder, "g"), placeholders[placeholder]);\n      }\n\n      return formattedResult;\n    });\n\n    data.result = formattedResults.join("\\n");\n\n    return {\n      code: d.util.setCode(data)\n    };\n  }\n});\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"preview"},"Preview:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1112002806686154752/1122666839835672738/image.png",alt:"preview"})))}m.isMDXComponent=!0}}]);