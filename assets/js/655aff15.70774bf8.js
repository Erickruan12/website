"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"fetchInvite function",description:"Easily fetch the information of Invites using custom functions!",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png"},tags:["aoi.js","v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},o=void 0,s={permalink:"/wikis/posts/428188716641812481/6ftrh8",source:"@site/forums/posts/428188716641812481/6ftrh8.md",title:"fetchInvite function",description:"Easily fetch the information of Invites using custom functions!",date:"2023-07-06T19:44:16.000Z",formattedDate:"July 6, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png"}],frontMatter:{title:"fetchInvite function",description:"Easily fetch the information of Invites using custom functions!",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png"},tags:["aoi.js","v6","Other"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Botinfo command",permalink:"/wikis/posts/405070001356275712/sr2wtw"},nextItem:{title:"Transcript Custom Function",permalink:"/wikis/posts/428188716641812481/nw36qo"}},c={authorsImageUrls:[void 0]},l=[{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Preview",id:"preview",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Put the given code in your index.js"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$fetchInvite[inviteCode;property]")," for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"$fetchInvite[czCgVfh4Hu;code]")," which would return the invite code.")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"bot.functionManager.createFunction({\n  name: \"$fetchInvite\",\n  type: \"djs\",\n  code: async (d) => {\n    const data = d.util.aoiFunc(d);\n    const [inviteCode, property] = data.inside.splits;\n\n    try {\n      const response = await fetch(\n        `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true&with_expiration=true`\n      );\n\n      if (!response.ok) {\n        throw new Error(response.statusText);\n      }\n\n      const inviteData = await response.json();\n\n      const properties = property.split('.');\n      let result = inviteData;\n      for (const prop of properties) {\n        if (result && result.hasOwnProperty(prop)) {\n          result = result[prop];\n        } else {\n          return d.aoiError.fnError(d, 'custom', {}, 'property');\n        }\n      }\n\n      data.result = result;\n\n      return {\n        code: d.util.setCode(data),\n      };\n    } catch (error) {\n      console.error(error);\n      return d.aoiError.fnError(d, 'custom', {}, 'invite');\n    }\n  },\n});\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"preview"},"Preview"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1112002806686154752/1124848362710110281/image.png",alt:"preview"})))}m.isMDXComponent=!0}}]);