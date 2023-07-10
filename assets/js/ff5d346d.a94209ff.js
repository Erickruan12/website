"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,f=c["".concat(l,".").concat(p)]||c[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"randomText advanced",description:"A custom function to get random/specified number of words.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"},tags:["v6","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/715852000096419900/xzyzwx",source:"@site/forums/posts/715852000096419900/xzyzwx.md",title:"randomText advanced",description:"A custom function to get random/specified number of words.",date:"2023-07-10T17:54:10.000Z",formattedDate:"July 10, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"}],frontMatter:{title:"randomText advanced",description:"A custom function to get random/specified number of words.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"},tags:["v6","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"reverseText",permalink:"/wikis/posts/715852000096419900/w2htzj"},nextItem:{title:"Currency Command Balance",permalink:"/wikis/posts/730782268175679528/c0xpn"}},l={authorsImageUrls:[void 0]},u=[{value:"Usage",id:"usage",level:3},{value:"Where do i use it?",id:"where-do-i-use-it",level:3}],d={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.functionManager.createFunction({\n  name: "$randomWord",\n  type: "djs",\n  code: async (d) => {\n  const functionName = "$randomWord";\n  const data = d.util.aoiFunc(d);\n  const [ words, numb = 1 ] = data.inside.splits;\n\nif (!words || words === "") {\n let error = `\\`\\`\\`elixir\\nRei.js Error\\n${functionName}: Words were not provided!\\`\\`\\``\n  data.result = error\n} else {\n  let wordArr = words.split(\':\');\n  let num = numb > wordArr.length ? wordArr.length : numb;\n  var randWords = [];\n  for (let i = 0; i < num; i++) {\n    let newRandom;\n    do {\n      let rand = Math.floor(Math.random() * wordArr.length);\n      newRandom = wordArr[rand];\n    } while (randWords.includes(newRandom));\n    randWords.push(newRandom);\n  }\nconst output = randWords.join(\', \')\ndata.result = output\n}\n    return {\n      code: d.util.setCode(data),\n    };\n  }\n})\n')),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$randomWord[Hi:Hello:Bye:Sayonara;2]"),"\nwill return 2 random words from Hi, Hello, Bye and Sayonara"),(0,a.kt)("h3",{id:"where-do-i-use-it"},"Where do i use it?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Paste it at bottom of your main file."),(0,a.kt)("li",{parentName:"ul"},"You can also edit it and use in handler\nMention me in support server for any help.")))}m.isMDXComponent=!0}}]);