"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"commands list",description:"A djs code to filter and get your commands list",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png"},tags:["Other","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i="Code",s={permalink:"/wikis/posts/715852000096419900/aswziy",source:"@site/forums/posts/715852000096419900/aswziy.md",title:"commands list",description:"A djs code to filter and get your commands list",date:"2023-06-29T17:25:25.000Z",formattedDate:"June 29, 2023",tags:[{label:"Other",permalink:"/wikis/tags/other"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png"}],frontMatter:{title:"commands list",description:"A djs code to filter and get your commands list",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png",imageURL:"https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png"},tags:["Other","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Long Serverinfo command",permalink:"/wikis/posts/632607624742961153/iiwq2"},nextItem:{title:"anti swear command",permalink:"/wikis/posts/715852000096419900/cy1ltq"}},c={authorsImageUrls:[void 0]},l=[{value:"Image Example",id:"image-example",level:2},{value:"Ping for help!",id:"ping-for-help",level:4}],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"bot.functionManager.createFunction({\n  name: \"$commands\",\n  type: \"djs\",\n  code: async (d) => {\nconst data = d.util.aoiFunc(d);\nconst [arg] = data.inside.splits;\n\nconst type = arg.split(':')[0]\nconst value = arg.split(':')[1]\n\nconst output = d.client.cmd.default\n  .filter(x=> x[type] == value )\n  .map(x => x.name)\n  .filter(x => x !== '$alwaysExecute')\n  .join(\", \")\n\ndata.result = output\n\nreturn { code: d.util.setCode(data) }\n}\n})\n")),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$commands[category:misc]\n")),(0,a.kt)("p",null,"Option and value are separated by :",(0,a.kt)("br",{parentName:"p"}),"\n","Invalid option and value will cause error\nIts CaSeSeNsItIvE"),(0,a.kt)("h2",{id:"image-example"},"Image Example"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1022533781040672839/1123866753219432508/image0.jpg?raw=true",alt:"example"})),(0,a.kt)("h4",{id:"ping-for-help"},"Ping for help!"))}m.isMDXComponent=!0}}]);