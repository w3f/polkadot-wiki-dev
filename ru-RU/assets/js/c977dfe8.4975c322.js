"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(i,".").concat(d)]||u[d]||h[d]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38948:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>p,toc:()=>c,default:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],l={id:"learn-teleport",title:"Teleporting Assets To Other Parachains",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",slug:"../learn-teleport"},i=void 0,p={unversionedId:"learn/learn-teleport",id:"learn/learn-teleport",title:"Teleporting Assets To Other Parachains",description:"Steps on how to teleport assets across parachains.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/ru-RU/docs/learn-teleport",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-teleport.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1641562646,formattedLastUpdatedAt:"07.01.2022",frontMatter:{id:"learn-teleport",title:"Teleporting Assets To Other Parachains",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",slug:"../learn-teleport"},sidebar:"docs",previous:{title:"Parachain Crowdloans",permalink:"/ru-RU/docs/learn-crowdloans"},next:{title:"Parathreads",permalink:"/ru-RU/docs/learn-parathreads"}},c=[{value:"How to Teleport",id:"how-to-teleport",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],h={toc:c};function u(e){var t=e.components,l=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the main properties that Polkadot and Kusama bring to the ecosystems is decentralized\nblockchain interoperability. This interoperability allows for asset teleportation: the process of\nmoving assets, such as coins, tokens, or NFTs, between chains (parachains) to use them as you would\nany other asset native to that chain. Interoperability is possible through ",(0,a.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-crosschain"},"XCM"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-spree"},"SPREE modules"),", which together ensure that assets are not lost or duplicated across multiple chain."),(0,a.kt)("h2",{id:"how-to-teleport"},"How to Teleport"),(0,a.kt)("p",null,"Teleportation can be done through the ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," interface or through the\n",(0,a.kt)("inlineCode",{parentName:"p"},"xcmPallet.limitedTeleportAssets()")," extrinsic. In the following example, we will be using the PolkadotJS\ninterface to teleport KSM from Kusama to Statemine."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," and connect to the chain with the tokens you want to teleport."),(0,a.kt)("li",{parentName:"ol"},"Navigate to \"Accounts > Teleport\". This opens the 'teleport assets' interface:\n",(0,a.kt)("img",{alt:"transfer",src:r(57933).Z})),(0,a.kt)("li",{parentName:"ol"},"Fill out the transaction:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},'"send from account" - Select the account with the source tokens.'),(0,a.kt)("li",{parentName:"ol"},'"destination chain" - Select the parachain you want to send the assets to.'),(0,a.kt)("li",{parentName:"ol"},'"send to address" - Select the account you want to be in control of the coins on the\ndestination chain.'),(0,a.kt)("li",{parentName:"ol"},'"amount" - Insert the number of tokens you want to teleport. This does not include the transfer '))),(0,a.kt)("li",{parentName:"ol"},'After reviewing the transaction information and fees, click the "Teleport" button.'),(0,a.kt)("li",{parentName:"ol"},'Click "Sign and Submit".'),(0,a.kt)("li",{parentName:"ol"},'Enter your password, and click "Sign the transaction".')),(0,a.kt)("p",null,"The transaction will be signed and broadcasted, and the tokens will appear on the destination chain\nshortly."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,'If you do not see "Accounts > Teleport" in ',(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps"),", the source chain that you have\nselected does not support teleportation yet. As of June 2021, unsupported chains include Polkadot\nmainnet, Rococo testnet, and their respective parachains."))}u.isMDXComponent=!0},57933:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/teleport_interface-b604e528f038cc2b80c4f23e8036a025.png"}}]);