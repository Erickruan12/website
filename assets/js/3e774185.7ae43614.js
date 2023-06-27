"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1661],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),i=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=i(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=i(n),u=a,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(k,c(c({ref:e},s),{},{components:n})):r.createElement(k,c({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,c=new Array(l);c[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:a,c[1]=p;for(var i=2;i<l;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78974:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"$color",description:"$color will change the color of an embed.",id:"color"},c=void 0,p={unversionedId:"functions/interaction-related/color",id:"version-6.2.6/functions/interaction-related/color",title:"$color",description:"$color will change the color of an embed.",source:"@site/versioned_docs/version-6.2.6/functions/interaction-related/color.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/color",permalink:"/docs/functions/interaction-related/color",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687864109,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{title:"$color",description:"$color will change the color of an embed.",id:"color"},sidebar:"docs",previous:{title:"$cloneChannel",permalink:"/docs/functions/interaction-related/cloneChannel"},next:{title:"$createApplicationCommand",permalink:"/docs/functions/interaction-related/createApplicationCommand"}},o={},i=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:i},m="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$color")," will change the color of an embed"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$color[index?;hex]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"index?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The embed index."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hex"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The hex color or color name (supported colornames below)."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",null," Embed Colors ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/000000/000000.png",alt:"c"})," Default ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/FFFFFF/FFFFFF.png",alt:"c"})," White ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/1ABC9C/1ABC9C.png",alt:"c"})," Aqua ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/57F287/57F287.png",alt:"c"})," Green ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/3498DB/3498DB.png",alt:"c"})," Blue ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/FFFF00/FFFF00.png",alt:"c"})," Yellow ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/9B59B6/9B59B6.png",alt:"c"})," Purple ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/E91E63/E91E63.png",alt:"c"})," LuminousVividPink ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/EB459E/EB459E.png",alt:"c"})," Fuchsia ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/F1C40F/F1C40F.png",alt:"c"})," Gold ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/E67E22/E67E22.png",alt:"c"})," Orange ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/ED4245/ED4245.png",alt:"c"})," Red ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/95A5A6/95A5A6.png",alt:"c"})," Grey ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/34495E/34495E.png",alt:"c"})," Navy ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/11806A/11806A.png",alt:"c"})," DarkAqua ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/1F8B4C/1F8B4C.png",alt:"c"})," DarkGreen ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/206694/206694.png",alt:"c"})," DarkBlue ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/71368A/71368A.png",alt:"c"})," DarkPurple ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/AD1457/AD1457.png",alt:"c"})," DarkVividPink ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/C27C0E/C27C0E.png",alt:"c"})," DarkGold ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/A84300/A84300.png",alt:"c"})," DarkOrange ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/992D22/992D22.png",alt:"c"})," DarkRed ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/979C9F/979C9F.png",alt:"c"})," DarkGrey ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/7F8C8D/7F8C8D.png",alt:"c"})," DarkerGrey ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/BCC0C0/BCC0C0.png",alt:"c"})," LightGrey ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/2C3E50/2C3E50.png",alt:"c"})," DarkNavy ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/5865F2/5865F2.png",alt:"c"})," Blurple ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/99AAB5/99AAB5.png",alt:"c"})," Greyple ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/2C2F33/2C2F33.png",alt:"c"})," DarkButNotBlack ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/23272A/23272A.png",alt:"c"})," NotQuiteBlack ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{parentName:"p",src:"https://placehold.co/15x15/000000/000000.png",alt:"c"})," Random")),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return a red embed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'color',\n    code: `\n  $description[What a nice color!]\n  $color[Red]\n  `\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'color',\n    code: `\n  $description[What a nice color!]\n  $color[ED4245]\n  `\n});\n")))}d.isMDXComponent=!0}}]);