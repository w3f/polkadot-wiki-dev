"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,y=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},51240:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"transaction-attacks",title:"Why Verify Transactions?",sidebar_label:"Transaction Verification",description:"How to Prevent from being a Victim of an Attack",keywords:["transaction","extrinsic","verification","protection"],slug:"../transaction-attacks"},c=void 0,l={unversionedId:"general/transaction-attacks",id:"general/transaction-attacks",title:"Why Verify Transactions?",description:"How to Prevent from being a Victim of an Attack",source:"@site/../docs/general/transaction-attacks.md",sourceDirName:"general",slug:"/transaction-attacks",permalink:"/docs/transaction-attacks",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/transaction-attacks.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1708944234,formattedLastUpdatedAt:"Feb 26, 2024",frontMatter:{id:"transaction-attacks",title:"Why Verify Transactions?",sidebar_label:"Transaction Verification",description:"How to Prevent from being a Victim of an Attack",keywords:["transaction","extrinsic","verification","protection"],slug:"../transaction-attacks"},sidebar:"docs",previous:{title:"Scam Protection",permalink:"/docs/learn-scams"},next:{title:"Build on Polkadot",permalink:"/docs/start-building"}},d={},p=[{value:"Clipboard Memory",id:"clipboard-memory",level:3},{value:"Malicious Website/dApp",id:"malicious-websitedapp",level:3},{value:"Malicious Browser Extension",id:"malicious-browser-extension",level:3},{value:"Corrupted metadata",id:"corrupted-metadata",level:3},{value:"Corrupted QR-code (Parity Signer)",id:"corrupted-qr-code-parity-signer",level:3},{value:"Replay Attack",id:"replay-attack",level:3},{value:"Defense against Attacks",id:"defense-against-attacks",level:2}],u={toc:p},h="wrapper";function y(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In general, an attacker would make you think you are signing a Transaction A when in reality you are\nsigning a Transaction B. An Attack might come from:"),(0,i.kt)("h3",{id:"clipboard-memory"},"Clipboard Memory"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For a more detailed read about clipboard memory attacks see\n",(0,i.kt)("a",{parentName:"p",href:"https://www.kaspersky.com/blog/cryptoshuffler-bitcoin-stealer/19976/"},"this article"),".")),(0,i.kt)("p",null,"This is a common attack. The clipboard memory is that memory on your computer dedicated to\ncopy-paste operations. There is malicious software that can be remotely installed on your computer\nand that can detect when a cryptocurrency address is copied. For example, you want to send funds to\nAddress A (belonging to you) but after copying address A a malicious software swaps that address\nwith Address B (belonging to an attacker). This attack can be prevented by checking the receiver\naddress before signing. Failing to do so could result in loss of the funds."),(0,i.kt)("h3",{id:"malicious-websitedapp"},"Malicious Website/dApp"),(0,i.kt)("p",null,"This is a common attack that can happen if you are interacting with a malicious site (dApp). In this\nscenario you want to perform Transaction A on the website, but the dApp will send Transaction B to\nthe extension for signing. In this case the extension will show Transaction B. If you are using a\nLedger device you have a second layer of verification, as it will also display Transaction B."),(0,i.kt)("h3",{id:"malicious-browser-extension"},"Malicious Browser Extension"),(0,i.kt)("p",null,"This scenario can happen if you have downloaded a malicious browser extension or a trusted browser\nextension, from a non-trusted source. In this scenario the extension will display that you will sign\nfor an Transaction A but in the background will execute Transaction B. If you are using a\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," device this attack can be detected because you will be able to see\nTransaction B on the screen of your Ledger device."),(0,i.kt)("h3",{id:"corrupted-metadata"},"Corrupted metadata"),(0,i.kt)("p",null,"This attack is least common and might result in signing a non-intended transaction without the\npossibility of verifying it. Before authorizing the metadata update check who is requesting it.\nMetadata updates for browser extensions might be requested by dApps (for example DeFi apps of\nparachains). For the extensions, you should trust the app that requests the update. When updating\nthe metadata for Parity Signer you should trust the issuer of the metadata (or generate the QR\nfountain yourself)."),(0,i.kt)("h3",{id:"corrupted-qr-code-parity-signer"},"Corrupted QR-code (Parity Signer)"),(0,i.kt)("p",null,"This is a sub-case of the malicious dApp scenario. If your account is on\n",(0,i.kt)("a",{parentName:"p",href:"https://www.parity.io/technologies/signer/"},"Parity Signer")," the transaction will be displayed as a\nQR code, instead of the extension showing its details and you need to verify it on the device. The\ncorrupted QR code will make you sign for an Transaction B when you want to sign for Transaction A.\nThis will be showed in the Signer app and a careful user will notice it. If the metadata in the\nSigner is already incorrect (or the Signer is corrupted) there is the risk of signing a non-intended\ntransaction without the possibility of verifying it."),(0,i.kt)("h3",{id:"replay-attack"},"Replay Attack"),(0,i.kt)("p",null,"A replay attack is where past transactions can be replayed (same ",(0,i.kt)("a",{parentName:"p",href:"#balance-transfers"},"balance"),',\nreceiver account, etc.) without knowing private keys. It is an attack where publicly known data can\nbe "replayed" as a new extrinsic. This could happen in the context of\n',(0,i.kt)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"reaping accounts")," because the reaping\nprocess resets the nonce value. If all signed transactions until the nonce before the reaping event\nwere immortal, all past transactions can be replayed once the account is refunded. There is no need\nfor the attacker to know your private key, valid signatures for those past transactions and nonces\nalready exist and are stored on-chain (meaning the private key was already used to generate those\nsignatures)."),(0,i.kt)("p",null,"Making a ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-transactions#mortal-and-immortal-extrinsics"},"transaction mortal")," with a\nrelatively short mortality window will almost certainly ensure that replay attacks are not possible,\nwith the only exception being if the account is reaped and then re-funded shortly after submitting a\nmortal transaction, and then an attacker replays that transaction within the mortality window (i.e.,\nthe specified block interval) and such transaction is valid (e.g. if you only have 10 DOT, and you\ntry to issue an extrinsic sending 20 DOT, the\ntransfer will fail)."),(0,i.kt)("h2",{id:"defense-against-attacks"},"Defense against Attacks"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"If you can't verify the transaction or you suspect you are signing something different than what you\nintended, don't sign it!")),(0,i.kt)("p",null,"To avoid being victim of an attack:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use only trusted extensions, sites and software in general."),(0,i.kt)("li",{parentName:"ul"},"Use cold storage options (Ledger, Signer) and verify them. Trust what these devices tell you over\nwhat is shown in the app or the browser extension."),(0,i.kt)("li",{parentName:"ul"},"Update Signer metadata only from trusted sources (or do it yourself)."),(0,i.kt)("li",{parentName:"ul"},"Accept metadata updates for the extension only from trusted apps.")))}y.isMDXComponent=!0}}]);