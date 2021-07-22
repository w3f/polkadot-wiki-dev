(self.webpackChunk=self.webpackChunk||[]).push([[3644],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=o,k=m["".concat(d,".").concat(p)]||m[p]||c[p]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30667:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>u,toc:()=>s,default:()=>m});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i=["components"],l={id:"maintain-index",title:"Network Maintainers",sidebar_label:"Network Maintainers"},d=void 0,u={unversionedId:"maintain-index",id:"maintain-index",isDocsHomePage:!1,title:"Network Maintainers",description:"Welcome to the network maintainers section of the Polkadot wiki. Here you will find information and",source:"@site/../docs/maintain-index.md",sourceDirName:".",slug:"/maintain-index",permalink:"/ru-RU/docs/maintain-index",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-index.md",version:"current",lastUpdatedBy:"Dee Evans",lastUpdatedAt:1626917827,formattedLastUpdatedAt:"22.07.2021",frontMatter:{id:"maintain-index",title:"Network Maintainers",sidebar_label:"Network Maintainers"},sidebar:"docs",previous:{title:"Hackathon",permalink:"/ru-RU/docs/build-hackathon"},next:{title:"Parameters",permalink:"/ru-RU/docs/maintain-polkadot-parameters"}},s=[{value:"Node",id:"node",children:[]},{value:"Collator",id:"collator",children:[]},{value:"Nominator",id:"nominator",children:[]},{value:"Validator",id:"validator",children:[]},{value:"Governance",id:"governance",children:[]}],c={toc:s};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the network maintainers section of the Polkadot wiki. Here you will find information and\nguides to set up a node and run the network."),(0,r.kt)("h2",{id:"node"},"Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-networks"},"Networks Guide")," - A list of the available Polkadot networks that you can\nconnect to with a node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-sync"},"Set up a Full Node")," - Get up and started by syncing a full node for the Kusama\nnetwork. The steps in the guide will broadly apply also to any Substrate-based network (like\nPolkadot)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-wss"},"Set up WSS using Nginx")," - Set up a Secure WebSockets server for your node's\nWebSockets connection.")),(0,r.kt)("h2",{id:"collator"},"Collator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-collator"},"Learn about Collators")," - High level overview of collators and related links.")),(0,r.kt)("h2",{id:"nominator"},"Nominator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-nominator"},"Learn about Nominators")," - High level overview of nominators and related\nlinks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-nominate-polkadot"},"Nomination Guide (Polkadot)")," - Walkthrough on how to\nnominate on the Polkadot network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-nominate-kusama"},"Nomination Guide (Kusama)")," - Walkthrough on how to\nnominate on the Kusama canary network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-unbond"},"How to stop being a Nominator")," - Guide on how to stop\nnominating.")),(0,r.kt)("h2",{id:"validator"},"Validator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-validator"},"Learn about Validators")," - High level overview of validator and related links."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-validator-payout"},"Validator Payouts")," - Overview on how validator rewards are\ncalculated and paid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-validate-polkadot"},"Validation Guide (Polkadot)")," - Walkthrough on how to\nvalidate on the Polkadot network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-validate-kusama"},"Validation Guide (Kusama)")," - Walkthrough on how to\nvalidate on the Kusama canary network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-systemd"},"Using systemmd for the Validator Node")," - Configuring systemmd\nwith the Validator node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-secure-validator"},"Secure Validator")," - Best tips and practices for validating."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-use-polkadot-validator"},"How to use Polkadot Secure Validator")," -\nWalkthrough on how to set up a validator securely."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-upgrade"},"How to upgrade a Validator Node")," - Guide on upgrading your\nvalidator node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-chill"},"How to Chill")," - Walkthrough on how to chill as a validator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-stop-validating"},"How to Stop Validating")," - Proper way to stop\nvalidating.")),(0,r.kt)("h2",{id:"governance"},"Governance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-democracy"},"How to pariticipate in Governance")," - Walkthrough on how to\nparticipate in governance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-join-council"},"How to join the Council")," - Step by step guide for running for the Council."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-vote-councillor"},"How to vote for a Councillor")," - Step by step guide for voting for your\nfavorite councillors.")))}m.isMDXComponent=!0}}]);