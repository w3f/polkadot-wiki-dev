(self.webpackChunk=self.webpackChunk||[]).push([[1058],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,h=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(h,o(o({ref:e},u),{},{components:a})):n.createElement(h,o({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87305:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>m});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),o=["components"],i={id:"mirror-build-wallets",title:"Wallets",sidebar_label:"Wallets",description:"An overview of the current supported wallets on Polkadot.",slug:"../build-wallets"},s=void 0,p={unversionedId:"build/mirror-build-wallets",id:"build/mirror-build-wallets",isDocsHomePage:!1,title:"Wallets",description:"An overview of the current supported wallets on Polkadot.",source:"@site/../docs/build/mirror-build-wallets.md",sourceDirName:"build",slug:"/build-wallets",permalink:"/ru-RU/docs/build-wallets",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/mirror-build-wallets.md",tags:[],version:"current",frontMatter:{id:"mirror-build-wallets",title:"Wallets",sidebar_label:"Wallets",description:"An overview of the current supported wallets on Polkadot.",slug:"../build-wallets"}},u=[{value:"Supported Wallets",id:"supported-wallets",children:[]},{value:"Treasury Funded Wallets",id:"treasury-funded-wallets",children:[]},{value:"Encryption Enhancement",id:"encryption-enhancement",children:[]}],d={toc:u};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The integration of a ",(0,l.kt)("a",{parentName:"p",href:"/ru-RU/docs/glossary#wallet"},"wallet")," with Polkadot\nallows for simple and easy access to private keys and signing\ntransactions. Below are some wallets that support Polkadot along with their development statuses."),(0,l.kt)("h3",{id:"supported-wallets"},"Supported Wallets"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Development State"),(0,l.kt)("th",{parentName:"tr",align:null},"Team Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Custody"),(0,l.kt)("th",{parentName:"tr",align:null},"Supports"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.parity.io/signer/"},"Parity Signer")," (see warning below)"),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS and Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/apps/releases"},"Polkadot-js Desktop")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Win, Mac, Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension"},"Polkadot-js extension")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Browser extension"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-js apps")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Browser"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-Custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.polkadot.network/"},"Polkadot support")," can provide assistance with issues related to\nPolkadot-JS, the Polkadot{.js} extension, or Parity Signer. For other wallet software, you should\ncontact the developers of that wallet."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Warning: Parity Signer currently does not allow you to see the transaction you are signing. This\nmeans that you are at risk if connected to a compromised version of Polkadot-JS. A fix is being\nworked on; please see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer/issues/724"},"this GitHub issue"),"\nfor more details.")),(0,l.kt)("h3",{id:"treasury-funded-wallets"},"Treasury Funded Wallets"),(0,l.kt)("p",null,"These are wallets which have been supported by either the Polkadot or Kusama Treasury via Treasury Proposal. Links in the Proposals section go to the Polkassembly post where the Treasury Proposal was discussed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Proposals"),(0,l.kt)("th",{parentName:"tr",align:null},"Development State"),(0,l.kt)("th",{parentName:"tr",align:null},"Team Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Custody"),(0,l.kt)("th",{parentName:"tr",align:null},"Supports"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://fearlesswallet.io/"},"Fearless Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/23"},"1"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/34"},"2"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/74"},"3"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/102"},"4")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"SORAMITSU"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://klever.io/"},"Klever")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/91"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Klever"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkawallet.io/"},"Polkawallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/32"},"1"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/41"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Polkawallet"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://stylo-app.com/"},"Stylo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkadot.polkassembly.io/treasury/39"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Thibaut Sardan"),(0,l.kt)("td",{parentName:"tr",align:null},"Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: these third-party wallets have been funded by the community through either the Polkadot or Kusama ",(0,l.kt)("a",{parentName:"p",href:"learn-treasury"},"Treasury"),". ",(0,l.kt)("strong",{parentName:"p"},"Web 3.0 Technologies Foundation does not endorse these wallets, and you should use your own due diligence in researching them.")," The official Polkadot Support cannot provide support for issues with these wallets or other non-Parity developed wallets.")),(0,l.kt)("h2",{id:"encryption-enhancement"},"Encryption Enhancement"),(0,l.kt)("p",null,"Some newly generated ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," account files cannot be imported (restored) into older wallet software.\nThis is due to an enhanced encryption method, which is also noticeable in a slight delay when\nencrypting/decrypting your wallet. If you are unable to load a ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," file, please ensure that you\nare using the latest version of the wallet software. If you are still unable to load it, ensure that\nthe wallet software is using the latest version of the ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/api/"},"Polkadot API"),"."))}m.isMDXComponent=!0}}]);