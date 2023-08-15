"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var r=n(3905),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>s(e,o(t)),g=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$sendCrosspostingMessage",description:"\u0412\u0456\u0440\u0443\u0441 $sendCrosspostingMessage \u043f\u0435\u0440\u0435\u0442\u043d\u0435 \u0434\u0430\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0445 \u043a\u0430\u043d\u0430\u043b\u0456\u0432.",id:"sendCrosspostingMessage"},f=void 0,y={unversionedId:"functions/message-related/sendCrosspostingMessage",id:"version-6.4.0/functions/message-related/sendCrosspostingMessage",title:"$sendCrosspostingMessage",description:"\u0412\u0456\u0440\u0443\u0441 $sendCrosspostingMessage \u043f\u0435\u0440\u0435\u0442\u043d\u0435 \u0434\u0430\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0445 \u043a\u0430\u043d\u0430\u043b\u0456\u0432.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/sendCrosspostingMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/sendCrosspostingMessage",permalink:"/uk/docs/functions/message-related/sendCrosspostingMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$sendCrosspostingMessage",description:"\u0412\u0456\u0440\u0443\u0441 $sendCrosspostingMessage \u043f\u0435\u0440\u0435\u0442\u043d\u0435 \u0434\u0430\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0445 \u043a\u0430\u043d\u0430\u043b\u0456\u0432.",id:"sendCrosspostingMessage"},sidebar:"docs",previous:{title:"$pinMessage",permalink:"/uk/docs/functions/message-related/pinMessage"},next:{title:"$sendMessage",permalink:"/uk/docs/functions/message-related/sendMessage"}},b={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],v={toc:k},O="wrapper";function h(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(O,u(d(d({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$sendCrosspostingMessage")," \u043f\u0435\u0440\u0435\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043d\u0430 \u0432\u043a\u0430\u0437\u0430\u043d\u0456 \u043a\u0430\u043d\u0430\u043b\u0438."),(0,r.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$sendCrosspostingMessage[content;...channelIDs]\n")),(0,r.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0437\u043c\u0456\u0441\u0442"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"...ID \u043a\u0430\u043d\u0430\u043b\u0456\u0432"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\u0414\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438 \u0432\u043a\u0430\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,r.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,"\u041d\u0430 \u0446\u044c\u043e\u043c\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0456 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u0442\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043a\u0430\u043d\u0430\u043b\u0456\u0432:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'sendCrosspostingMessage',\n    \u043a\u043e\u0434: `\n   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]\n  `\n});\n")))}h.isMDXComponent=!0}}]);