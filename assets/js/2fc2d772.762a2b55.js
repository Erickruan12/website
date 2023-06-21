"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57195],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(n),f=a,d=l["".concat(i,".").concat(f)]||l[f]||m[f]||s;return n?t.createElement(d,o(o({ref:r},p),{},{components:n})):t.createElement(d,o({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[l]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<s;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27663:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const s={title:"$username",description:"Returns specified user ID's username, if no argument given, returns author's username"},o=void 0,u={unversionedId:"functions/username",id:"version-5.5.5/functions/username",title:"$username",description:"Returns specified user ID's username, if no argument given, returns author's username",source:"@site/versioned_docs/version-5.5.5/functions/username.md",sourceDirName:"functions",slug:"/functions/username",permalink:"/docs/5.5.5/functions/username",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687324382,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$username",description:"Returns specified user ID's username, if no argument given, returns author's username"},sidebar:"docs",previous:{title:"$messageID",permalink:"/docs/5.5.5/functions/usermessageid"},next:{title:"$userPerms",permalink:"/docs/5.5.5/functions/userperms"}},i={},c=[],p={toc:c},l="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(l,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function returns the authors/give user id's username"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$username[user ID (optional)]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "username",\ncode: `608358453580136499 username is $username[608358453580136499]!`\n//Returns Leref\n})\n')))}m.isMDXComponent=!0}}]);