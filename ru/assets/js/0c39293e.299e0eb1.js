"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=i,f=p["".concat(s,".").concat(c)]||p[c]||u[c]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>b,frontMatter:()=>f,metadata:()=>g,toc:()=>k});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>r(e,o(t)),c=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const f={title:"Command Handler",description:"This guide will be covering how to start using command handlers, creating multiple commands in one file and updating commands without restarting your Discord Bot.",id:"handler"},h=void 0,g={unversionedId:"guides/client/handler",id:"version-6.4.0/guides/client/handler",title:"Command Handler",description:"This guide will be covering how to start using command handlers, creating multiple commands in one file and updating commands without restarting your Discord Bot.",source:"@site/versioned_docs/version-6.4.0/guides/client/3commandhandler.md",sourceDirName:"guides/client",slug:"/guides/client/handler",permalink:"/ru/docs/guides/client/handler",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1692137241,formattedLastUpdatedAt:"15 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"Command Handler",description:"This guide will be covering how to start using command handlers, creating multiple commands in one file and updating commands without restarting your Discord Bot.",id:"handler"},sidebar:"docs",previous:{title:"Client Permissions",permalink:"/ru/docs/guides/client/permissions"},next:{title:"Variables",permalink:"/ru/docs/guides/client/variables"}},y={},k=[{value:"Why should you use Command Handler?",id:"why-should-you-use-command-handler",level:2},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Starting off with modifying your main file",id:"starting-off-with-modifying-your-main-file",level:3},{value:"Setting everything up with folders and files",id:"setting-everything-up-with-folders-and-files",level:3},{value:"Creating sub directories",id:"creating-sub-directories",level:4},{value:"Creating files inside of the directory",id:"creating-files-inside-of-the-directory",level:4},{value:"Final Steps",id:"final-steps",level:2},{value:"Change of creating commands",id:"change-of-creating-commands",level:3},{value:"Multiple commands in one file",id:"multiple-commands-in-one-file",level:3},{value:"Updating your commands without restart!",id:"updating-your-commands-without-restart",level:3}],v={toc:k},w="wrapper";function b(e){var t=e,{components:n}=t,i=c(t,["components"]);return(0,a.kt)(w,u(p(p({},v),i),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",p({},{id:"why-should-you-use-command-handler"}),"Why should you use Command Handler?"),(0,a.kt)("p",null,"Storing your commands in your main file may seem fine, but after a certain amount of commands it can get hard to find and update commands. Therefore you should use the Command Handler to keep your main file neat and save yourself from the clutter."),(0,a.kt)("h3",p({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#why-should-you-use-command-handler"}),"Why should you use Command Handler?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#starting-off-with-modifying-your-main-file"}),"Starting off with modifying your main file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#setting-everything-up-with-folders-and-files"}),"Setting everything up with folders and files"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#creating-sub-directories"}),"Creating sub directories")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#creating-files-inside-of-the-directory"}),"Creating files inside of the directory")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#final-steps"}),"Final Steps"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#change-of-creating-commands"}),"Change of creating commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#multiple-commands-in-one-file"}),"Multiple commands in one file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#updating-your-commands-without-restart"}),"Updating your commands without restart!"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",p({},{id:"starting-off-with-modifying-your-main-file"}),"Starting off with modifying your main file"),(0,a.kt)("p",null,"In this step we'll take a look at your main file also known as ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),". We add ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadCommands")," in order for\nthe bot to understand where our files are."),(0,a.kt)("admonition",p({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"Ensure you edited the first line of code when you start using the LoadCommands class."),(0,a.kt)("p",{parentName:"admonition"},"-"," ",(0,a.kt)("inlineCode",{parentName:"p"},'const { AoiClient } = require("aoi.js");'),(0,a.kt)("br",{parentName:"p"}),"\n","+"," ",(0,a.kt)("inlineCode",{parentName:"p"},'const { AoiClient, LoadCommands } = require("aoi.js");'),"  ")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),'const { AoiClient, LoadCommands } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "Discord Bot Token",\n    prefix: "Discord Bot Prefix",\n    intents: ["Guilds", "GuildMessages", "MessageContent"],\n    events: ["onMessage", "onInteractionCreate"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\nconst loader = new LoadCommands(bot);\nloader.load(bot.cmd, "./commands/") //you can change this to any directory you want\n')),(0,a.kt)("h3",p({},{id:"setting-everything-up-with-folders-and-files"}),"Setting everything up with folders and files"),(0,a.kt)("p",null,"Once you're done with your main file, we'll move on onto files, in order for this to work we need to do two things."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create directories and sub-directories where your commands go.")),(0,a.kt)("p",null,(0,a.kt)("img",p({parentName:"p"},{src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083390579402088458/HwYiJqoeF9SAAAAAElFTkSuQmCC.png",alt:"p2"}))),(0,a.kt)("ol",p({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"And create a file to test out if everything worked well.")),(0,a.kt)("p",null,(0,a.kt)("img",p({parentName:"p"},{src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083390890405543976/Awoopj94LkCqAAAAAElFTkSuQmCC.png",alt:"p2"}))),(0,a.kt)("h4",p({},{id:"creating-sub-directories"}),"Creating sub directories"),(0,a.kt)("p",null,"If you want to have your commands and files more organised then use sub directories, simply click on the ",(0,a.kt)("strong",{parentName:"p"},"commands"),"\ndirectory you created earlier and create as many sub directories as you want inside of it, for example, music commands."),(0,a.kt)("p",null,(0,a.kt)("img",p({parentName:"p"},{src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083391154227261540/e0P4fAZqcEmh2npQAAAAASUVORK5CYII.png",alt:"p3"}))),(0,a.kt)("h4",p({},{id:"creating-files-inside-of-the-directory"}),"Creating files inside of the directory"),(0,a.kt)("p",null,"You can create as many files as you want in your directories as long as they have ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," file extension at the end of their file name\nit'll work without issues. For now, create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"help.js"),"."),(0,a.kt)("h2",p({},{id:"final-steps"}),"Final Steps"),(0,a.kt)("h3",p({},{id:"change-of-creating-commands"}),"Change of creating commands"),(0,a.kt)("p",null,"From now on you have to use:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"module.exports = [{...}]\nmodule.exports = ({...})\n")),(0,a.kt)("p",null,"Open your ",(0,a.kt)("inlineCode",{parentName:"p"},"help.js")," and copy & paste the following code snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript",metastring:'title="commands/help.js"',title:'"commands/help.js"'}),'module.exports = [{\n    name: "help",\n    aliases: ["helpcmd", "helpme"],\n    code: `\n$title[Help Command!]\n$thumbnail[$userAvatar[$authorID]] \n$description[Any text you like can go here!]\n$footer[Even footers!]`\n}];\n')),(0,a.kt)("p",null,"Now restart your bot, and let the magic happen! Simply use ",(0,a.kt)("inlineCode",{parentName:"p"},"[prefix]help")," or any of the aliases to make the message\nappear."),(0,a.kt)("h3",p({},{id:"multiple-commands-in-one-file"}),"Multiple commands in one file"),(0,a.kt)("p",null,"From now on, you can have multiple commands in one file, this is useful for ",(0,a.kt)("inlineCode",{parentName:"p"},"awaited")," commands or any similar. Let's\ncreate a little nice welcome command and combine the command from above with it!"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript",metastring:'title="commands/help.js"',title:'"commands/help.js"'}),'module.exports = [{\n    name: "help",\n    aliases: ["helpcmd", "helpme"],\n    code: `\n$title[Help Command!]\n$thumbnail[$userAvatar[$authorID]] \n$description[Any text you like can go here!]\n$footer[Even footers!]`\n}, {\n    type: "join",\n    channel: "$channelID",\n    code: `\n$log[Someone joined a server!]`\n}]\n')),(0,a.kt)("admonition",p({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"All Command Types can be found ",(0,a.kt)("a",p({parentName:"p"},{href:"/ru/docs/guides/client/events"}),"here"),"!  ")),(0,a.kt)("p",null,"Make sure you have the required intents and ",(0,a.kt)("inlineCode",{parentName:"p"},"onJoin")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," property in your ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," or else this won't\nwork!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Required intents: ",(0,a.kt)("inlineCode",{parentName:"strong"},"GuildMembers")))),(0,a.kt)("h3",p({},{id:"updating-your-commands-without-restart"}),"Updating your commands without restart!"),(0,a.kt)("p",null,"You are able to use ",(0,a.kt)("inlineCode",{parentName:"p"},"$updateCommands")," when updating commands in your directory. Please note that this does ",(0,a.kt)("strong",{parentName:"p"},"not")," apply\nto any files outside of the directory."))}b.isMDXComponent=!0}}]);