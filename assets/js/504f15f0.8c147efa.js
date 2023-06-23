"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",id:"interactioncommands"},r=void 0,l={unversionedId:"guides/interactioncommands",id:"version-6.2.6/guides/interactioncommands",title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",source:"@site/versioned_docs/version-6.2.6/guides/6interaction.md",sourceDirName:"guides",slug:"/guides/interactioncommands",permalink:"/docs/guides/interactioncommands",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687527006,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",id:"interactioncommands"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/guides/variables"},next:{title:"Sharding",permalink:"/docs/guides/sharding"}},s={},p=[{value:"Table of Content",id:"table-of-content",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Inviting your bot with correct permissions",id:"inviting-your-bot-with-correct-permissions",level:3},{value:"Important",id:"important",level:2},{value:"Creating Application Commands",id:"creating-application-commands",level:2},{value:"Application Types",id:"application-types",level:4},{value:"Examples of creating Application Commands",id:"examples-of-creating-application-commands",level:3},{value:"Using Application Commands",id:"using-application-commands",level:2},{value:"AutoCompleteRespond Functions &amp; Examples",id:"autocompleterespond-functions--examples",level:3},{value:"Usage",id:"usage",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Application Command Option Type",id:"application-command-option-type",level:2},{value:"Interaction Functions",id:"interaction-functions",level:2}],m=(c="Slash",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const d={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide is subject to change, meaning not everything may be listed here.  ")),(0,o.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#introduction"},"Introduction"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#getting-started"},"Getting Started")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#inviting-your-bot-with-correct-permissions"},"Inviting your bot with correct permissions"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/topics/gateway#list-of-intents"},"Discord Developer Portal - Documentation"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#important"},"Important"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#creating-application-commands"},"Creating Application Commands")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#application-types"},"Application Types"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#examples-of-creating-application-commands"},"Multiple Examples of creating Application Commands"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#using-application-commands"},"Using Application Commands")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#autocompleterespond-functions--examples"},"Auto Complete Respond"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#application-command-option-type"},"Application Command Option Type")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"},"Discord Developer Portal - Documentation"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#interaction-functions"},"Interaction Functions")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Slash Commands make it much easier for us to use our favourite bots on Discord. All you need to do is type ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," followed by the command you want to use, and your favourite bot will do the rest."),(0,o.kt)("p",null,"Slash Commands make it simpler for users to discover what a bot can do, and they can also find new features as they are added. Validation, error states, and a user-friendly interface guide users through the commands, so they can quickly get the results they need without confusion or frustration. Plus, they allow users to keep the mental model of how they think about the bot separate from how it actually works, which makes it easier for everyone to understand and use the bot."),(0,o.kt)("p",null,"Using Slash Commands offers a few benefits, like the ability to quickly and easily access the features of a bot, a user-friendly interface to guide users through commands, and the ability to separate the user's mental model from the workings of the bot. All of this makes it simpler for users to use the bot, so they can get the most out of it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1061712111052521493/1062518328268169306/image_4.png",alt:"slash"})),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"inviting-your-bot-with-correct-permissions"},"Inviting your bot with correct permissions"),(0,o.kt)("p",null,"In order to use Application Commands, your bot requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.commands")," scope which can be found on\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications/"},"Discord Developer Portal"),". You don't have to kick your bot or\nanything, simply reinvite it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1061712111052521493/1062539303386873929/image_5.png?width=1200&height=447",alt:"scope"})),(0,o.kt)("h2",{id:"important"},"Important"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Due to Discord's Limitation you can only have up to ",(0,o.kt)("strong",{parentName:"li"},"50 slash commands")," in your bot / per guild."),(0,o.kt)("li",{parentName:"ul"},"Two Application commands can ",(0,o.kt)("strong",{parentName:"li"},"not have the same name")," in the same guild."),(0,o.kt)("li",{parentName:"ul"},"Application command names can ",(0,o.kt)("strong",{parentName:"li"},"not contain special symbols")," and must be shorter than ",(0,o.kt)("strong",{parentName:"li"},"32 characters"),"."),(0,o.kt)("li",{parentName:"ul"},"You require ",(0,o.kt)("inlineCode",{parentName:"li"},'events: ["onMessage", "onInteractionCreate"]')," in your main file.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1061712111052521493/1062559509601591427/image_6.png",alt:"slash-example"})),(0,o.kt)("h2",{id:"creating-application-commands"},"Creating Application Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"guildID/global"),(0,o.kt)("td",{parentName:"tr",align:null},"string, integer"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of application command, either for every guild (global) or for one specific guild (specific guildID)."),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"string, number"),(0,o.kt)("td",{parentName:"tr",align:null},"The actual slash command name that will be visible to the user."),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"description"),(0,o.kt)("td",{parentName:"tr",align:null},"string, number"),(0,o.kt)("td",{parentName:"tr",align:null},"The slash command description that will be visible to the user."),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultPermission"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"If the application command should syncronisate to the default permissions."),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The application command type (explained below)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options?"),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#examples-of-creating-application-commands"},"Slash commands options"),"."),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,o.kt)("h4",{id:"application-types"},"Application Types"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," \u2014 Creates an Application Command that can be executed on a message. (",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/application-commands#message-commands"},"documentation"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slash")," \u2014 Creates an Application Command as slash command. (",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/application-commands"},"documentation"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user")," \u2014 Creates an Application Command that can be executed on a user. (",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/application-commands#user-commands"},"documentation"),")"))),(0,o.kt)("h3",{id:"examples-of-creating-application-commands"},"Examples of creating Application Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[guildID/global;example;slash command description!;true;slash]`\n});\n/* Will create a slash commands without any user input, you can choose between global/guildID to create a command globally or only for a specific guild.\nExample created by dodoGames#7509. */\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Adding ",(0,o.kt)("strong",{parentName:"p"},"choices")," to the application command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},'"name"'))," stands for the option that will be visible to the user.\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},'"value"')),' will be the response of the given value, for example if you choose "choice 1" you will get the response of "You picked choice 1!" and so on.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID;choice;slash command choices showcase!;true;slash;[{\n  "name": "option",\n  "description": "choice example",\n  "required": true,\n  "type": 3,\n  "choices" : [{\n    "name" : "choice 1",\n    "value" : "You picked choice 1!"\n  }, {\n    "name" : "choice 2",\n    "value" : "You picked choice 2!"\n  }, {\n    "name" : "choice 3",\n    "value" : "You picked choice 3!"\n  }]\n}]]`\n});\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Sub command groups allow nesting of multiple commands in one single command, meaning you can increase the application command limit given by Discord."),(0,o.kt)("p",null,'This is an example structure of a slash command which has two sub-groups called "user" and "role". '),(0,o.kt)("p",null,"This example would create one slash command with two sub-groups and would looks like this ",(0,o.kt)(m,{mdxType:"Slash"},"/permissions user")," & ",(0,o.kt)(m,{mdxType:"Slash"},"/permissions role")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "name": "permissions",\n    "description": "Get or edit permissions for a user or a role",\n    "options": [\n        {\n            "name": "user",\n            "description": "Get or edit permissions for a user",\n            "type": 2 // 2 is type SUB_COMMAND_GROUP\n        },\n        {\n            "name": "role",\n            "description": "Get or edit permissions for a role",\n            "type": 2\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"To create that slash command you would basically do the same as with any other."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID;slash command;sub commands showcase!;true;slash;[{\n    "name": "permissions",\n    "description": "Get or edit permissions for a user or a role",\n    "options": [\n        {\n            "name": "user",\n            "description": "Get or edit permissions for a user",\n            "type": 2 \n        },\n        {\n            "name": "role",\n            "description": "Get or edit permissions for a role",\n            "type": 2\n        }\n    ]\n}]]`\n});\n')),(0,o.kt)("p",null,"The official documentation of Discord has other awesome ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/application-commands#example-walkthrough"},"examples")," regarding this."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Adding ",(0,o.kt)("strong",{parentName:"p"},"sub commands")," to the application command:"),(0,o.kt)("p",null,"Sub commands have the type ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),' and work different from "regular" slash commands. They have other "sub" commands "attached" to the actual command.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID;slash command;sub commands showcase!;true;slash;[{\n    "name": "subcommand",\n    "description": "an sub command example!",\n    "type": 1,\n    "options": [{\n      "name": "user", \n      "description": "example option", \n      "required": true, \n      "type": 6\n    }]\n}]]`\n});\n')),(0,o.kt)("p",null,"To reply to sub commands you'd have to use an extra line of code as the following:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$onlyIf[$interactionData[options._subcommand]==sub_slash_name;]")," which would check if the executed sub command equals to the one that should execute. ",(0,o.kt)("inlineCode",{parentName:"p"},"$interactionData[options._subcommand]")," returns the sub command name of the executed slash command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.interactionCommand({\n  name: "slash",\n  prototype: "slash",\n  code: `\n  $interactionReply[You picked $interactionData[options._subcommand]!]\n  $onlyIf[$interactionData[options._subcommand]==subcommand;]`\n});\n// This example is referring to the example above.\n')),(0,o.kt)("h2",{id:"using-application-commands"},"Using Application Commands"),(0,o.kt)("p",null,"To use application commands you require ",(0,o.kt)("inlineCode",{parentName:"p"},"interaction")," commands, which are different from default commands. You must provide ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype"),' for your bot to know that the command "belongs" to an application command.'),(0,o.kt)("p",null,"Usage in your Main file (in most cases called ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.interactionCommand({\n    name: "slash command name", // name of the slash command\n    prototype: "slash", // clarifying that this command belongs to a slash command \n    code: `code` // code that will be executed if slash command triggered\n});\n')),(0,o.kt)("p",null,"Usage in a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/guides/commandhandler"},"Command Handler")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "slash command name", // name of the slash command\n    prototype: "slash", // clarifying that this command belongs to a slash command \n    type: "interaction", // clarifying that this command is an interaction command\n    code: `code` // code that will be executed if slash command triggered\n}]\n')),(0,o.kt)("p",null,"You can retrive information given in slash commands by using ",(0,o.kt)("inlineCode",{parentName:"p"},"$slashOption[option]"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'$createApplicationCommand[$guildID;say;Echo command!;true;slash;[{\n    "name": "text",\n    "description": "Text you want to say!",\n    "required": true,\n    "type": 3\n}]]\n// You must execute the code above at least once for the application command to appear.\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "say",\n    prototype: "slash",\n    type: "interaction",\n    code: `$interactionReply[You said: $slashOption[text]!]`\n}]\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"autocompleterespond-functions--examples"},"AutoCompleteRespond Functions & Examples"),(0,o.kt)("p",null,"There are multiple ways of using ",(0,o.kt)("inlineCode",{parentName:"p"},"$autoCompleteRespond"),", you can either use JSON or the simple aoi.js way."),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$autoCompleteRespond[OptionName;OptionReply;...]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$autoCompleteRespond[[{ \n    "name" : "Option Name One",\n    "value" : "Option Reply 1"\n  }, {\n    "name" : "Option Name Two",\n    "value" : "Option Reply 2"\n  }]]\n')),(0,o.kt)("p",null,'Create the slash command, this will create a global application command with the name of "example" with an option which uses autoComplete:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createApplicationCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n    "name": "option", \n    "description": "First option!",\n    "required": false,\n    "type": 3, \n    "autocomplete": true\n}]]`\n});\n')),(0,o.kt)("p",null,"Checking if autoComplete equals ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given respond (addition of the code above):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[First option;You selected the first option, therefore I\'m responding with this!;Second option;You selected the first second, therefore I\'m responding with this!]\n  $else\n  $interactionReply[$slashOption[option]]\n  $endif\n  `\n});\n')),(0,o.kt)("p",null,'Create the slash-command, this will create a global application command with the name "example": '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createApplicationCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n    "name": "option",\n    "description": "First option with autocomplete.",\n    "required": false, \n    "type": 3,\n    "autocomplete": true \n  }, {\n    "name": "anotheroption",\n    "description": "Another option.",\n    "required": false,\n    "type": 3\n}]]`\n});\n')),(0,o.kt)("p",null,"Using JSON and checking if autoComplete equals ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given response :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[[{ \n    "name" : "First Option",\n    "value" : "You selected the first option, therefore I\\\'m responding with this!"\n  }, {\n    "name" : "Second Option",\n    "value" : "You selected the second option, therefore I\\\'m responding with this!"\n  }]]\n  $else\n  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]\n  $endif\n  `\n});\n')),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Interaction Commands are an incredibly useful tool for developing interactive bots. They can be used to create robust\ninteractions with users, and make it easier to manage commands and features. We hope this guide has been helpful in\nlearning how to use Interaction Commands and the basics of how they work."),(0,o.kt)("h2",{id:"application-command-option-type"},(0,o.kt)("a",{parentName:"h2",href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"},"Application Command Option Type")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"NAME"),(0,o.kt)("th",{parentName:"tr",align:null},"ID"),(0,o.kt)("th",{parentName:"tr",align:null},"NOTE"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SUB_COMMAND"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SUB_COMMAND_GROUP"),(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"STRING"),(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"Any Integer between -2^53 and 2^53")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"USER"),(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CHANNEL"),(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},"Includes all channel types + categories")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ROLE"),(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MENTIONABLE"),(0,o.kt)("td",{parentName:"tr",align:null},"9"),(0,o.kt)("td",{parentName:"tr",align:null},"Includes users and roles")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NUMBER"),(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"Any double between -2^53 and 2^53")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ATTACHMENT"),(0,o.kt)("td",{parentName:"tr",align:null},"11"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://discord.com/developers/docs/resources/channel#attachment-object"},"attachment")," object")))),(0,o.kt)("h2",{id:"interaction-functions"},"Interaction Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/createApplicationCommand"},"$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message) (optional);options (optional)]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionReply"},"$interactionReply[message;embeds?;components?;files?;allowedMentions?;ephemeral(true/false)?]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionDefer"},"$interactionDefer[ephemeral]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionDeferUpdate"},"$interactionDeferUpdate[ephemeral]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionDelete"},"$interactionDelete"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionEdit"},"$interactionEdit[content?;embeds?;components?;files?;allowedMentions]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionFollowUp"},"$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionUpdate"},"$interactionUpdate[content?;embeds?;components?;files?;allowedMentions]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/slashOption"},"$slashOption[option]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/deleteApplicationCommand"},"$deleteApplicationCommand[guildID/global;id]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/modifyApplicationCommand"},"$modifyApplicationCommand[guildID/global;commandID;name;description;type;options (optional);defaultPermission(optional)]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/removeApplicationCommandPermissions"},"$removeApplicationCommandPermissions[guildID/global (optional : global as default);id;roruids]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/misc-related/getApplicationCommandOptions"},"$getApplicationCommandOptions[name;guildID/global (optional : global as default)]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/misc-related/getApplicationCommandID"},"$getApplicationCommandID[name;guildID/global (optional : global as default)]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/autoCompleteRespond"},"$autoCompleteRespond[OptionName;OptionReply;...]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/isAutoComplete"},"$isAutoComplete")))))}h.isMDXComponent=!0}}]);