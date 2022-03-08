"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||n;return a?r.createElement(m,s(s({ref:t},d),{},{components:a})):r.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3011:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,assets:()=>d,toc:()=>c,default:()=>h});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),s=["components"],i={id:"build-storage",title:"Decentralized Storage Systems",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",slug:"../build-storage"},l=void 0,p={unversionedId:"build/build-storage",id:"build/build-storage",title:"Decentralized Storage Systems",description:"Information about building with decentralized storage.",source:"@site/../docs/build/build-storage.md",sourceDirName:"build",slug:"/build-storage",permalink:"/docs/build-storage",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-storage.md",tags:[],version:"current",lastUpdatedBy:"badkk",lastUpdatedAt:1643521907,formattedLastUpdatedAt:"1/30/2022",frontMatter:{id:"build-storage",title:"Decentralized Storage Systems",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",slug:"../build-storage"},sidebar:"docs",previous:{title:"Parachain Development",permalink:"/docs/build-pdk"},next:{title:"Smart Contracts",permalink:"/docs/build-smart-contracts"}},d={},c=[{value:"DCS (Decentralized Cloud Storage)",id:"dcs-decentralized-cloud-storage",level:2},{value:"IPFS (Interplanetary File System)",id:"ipfs-interplanetary-file-system",level:3},{value:"Brief comparison of IPFS &amp; HTTP:",id:"brief-comparison-of-ipfs--http",level:4},{value:"Filecoin",id:"filecoin",level:3},{value:"Storj",id:"storj",level:3},{value:"Sia",id:"sia",level:3},{value:"Swarm",id:"swarm",level:3},{value:"BitTorrent File System (BTFS)",id:"bittorrent-file-system-btfs",level:3},{value:"Substrate Storage",id:"substrate-storage",level:2},{value:"Crust Storage",id:"crust-storage",level:3},{value:"PolkadotJS Storage",id:"polkadotjs-storage",level:3}],u={toc:c};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Storage is an integral part of modern computer systems, and the same is true for distributed\nand decentralized systems like a blockchain. When interacting with the Polkadot ecosystem, it\nwill be helpful if you familiarize yourself with the current WEB3 approach to decentralized\nstorage systems, and how these systems can support your endeavors."),(0,n.kt)("h2",{id:"dcs-decentralized-cloud-storage"},"DCS (Decentralized Cloud Storage)"),(0,n.kt)("p",null,"The key attribute that characterizes centralized cloud storage is the location of data."),(0,n.kt)("p",null,"In decentralized cloud storage, the key attribute becomes the data itself instead of the data's\nlocation."),(0,n.kt)("p",null,"This can be viewed as the shift from the centralized ",(0,n.kt)("em",{parentName:"p"},"location-centric")," storage approach to the\ndecentralized ",(0,n.kt)("em",{parentName:"p"},"content-centric")," approach."),(0,n.kt)("h3",{id:"ipfs-interplanetary-file-system"},"IPFS (Interplanetary File System)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS")," is a peer-to-peer distributed file system that seeks to connect all\ncomputing devices with the same system of files, by utilizing features such as content-addressing,\ncontent-signing, and enhanced security methods through encryption. IPFS aims to address the current\nhurdles of the HTTP-based Internet."),(0,n.kt)("h4",{id:"brief-comparison-of-ipfs--http"},"Brief comparison of IPFS & HTTP:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"IPFS"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"network: peer-to-peer model (decentralized)"),(0,n.kt)("td",{parentName:"tr",align:null},"network: client-server model (centralized)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"requests: use a cryptographic hash of that data"),(0,n.kt)("td",{parentName:"tr",align:null},"requests: use the address on which data is hosted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"accessibility: data is distributed to multiple nodes and can be accessed at any time. Bandwidth is high: nearest peer can serve the data"),(0,n.kt)("td",{parentName:"tr",align:null},"accessibility: data can only be accessed if the server is live and there are no interruptions in transmission. Bandwidth is limited: clients send requests to the same server")))),(0,n.kt)("h3",{id:"filecoin"},"Filecoin"),(0,n.kt)("p",null,"Like IPFS, ",(0,n.kt)("a",{parentName:"p",href:"https://filecoin.io/"},"Filecoin")," is a protocol developed by ",(0,n.kt)("a",{parentName:"p",href:"https://protocol.ai/"},"Protocol Labs"),"\nthat offers a decentralized storage network. Filecoin's main focus is the storage itself and uses IPFS as a\n","[complementary]"," back-end protocol."),(0,n.kt)("h3",{id:"storj"},"Storj"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.storj.io/"},"Storj")," is a decentralized cloud storage system for developers."),(0,n.kt)("h3",{id:"sia"},"Sia"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://sia.tech/"},"Sia")," aims to be decentralized storage for the post-cloud world."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Both Storj & Sia encrypt all files before being uploaded and distributes them robustly and reliably.")),(0,n.kt)("h3",{id:"swarm"},"Swarm"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.ethswarm.org/"},"EthSwarm")," is a system of peer-to-peer networked nodes that create a\ndecentralized storage and communication service for a sovereign digital society."),(0,n.kt)("h3",{id:"bittorrent-file-system-btfs"},"BitTorrent File System (BTFS)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.bittorrent.com/token/bittorrent-file-system/"},"BTFS")," is a file-sharing protocol that\nuses the TRON network and the BitTorrent ecosystem."),(0,n.kt)("h2",{id:"substrate-storage"},"Substrate Storage"),(0,n.kt)("p",null,"Substrate takes a layered approach to storage by using a key-value data store that is implemented\nas a database-backed, modified Merkle tree. Substrate's higher-layer storage abstractions are\nbuilt on the key-value store."),(0,n.kt)("p",null,"The key-value data store is backed by ",(0,n.kt)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB"),", and it also supports an\nexperimental ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-db"},"Parity database"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The database is used for components that require persistent storage: Substrate clients, Substrate light-clients\n& off-chain workers. For more information, check out\nSubstrate Developer Hub's ",(0,n.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/advanced/storage/"},"Storage Page"),".")),(0,n.kt)("p",null,"When building on Substrate, runtime developers can utilize of Substrate's FRAME ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage pallet"),"\nwhich gives access to Substrate's storage APIs. These storage items support values that are encoded by\nParity's ",(0,n.kt)("inlineCode",{parentName:"p"},"SCALE (Simple Concatenated Aggregate Little-Endian) Codec"),"."),(0,n.kt)("p",null,"There is a\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/frame_support/storage/trait.StorageValue.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Storage Value"))," API\nthat is used to store single values,\na ",(0,n.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/frame_support/storage/trait.StorageMap.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Storage Map"))," API\nthat is used to a key-value hash map,\na ",(0,n.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/frame_support/storage/trait.StorageDoubleMap.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Storage Double Map"))," API\nthat creates a ",(0,n.kt)("inlineCode",{parentName:"p"},"storage map")," with two keys to provide the ability to efficiently remove all entries that have\na common first key, and a ",(0,n.kt)("a",{parentName:"p",href:"https://crates.parity.io/frame_support/storage/trait.StorageNMap.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Storage N Map")),"\nAPI that can be used to store a hash map with any arbitrary number of keys."),(0,n.kt)("p",null,"These layered APIs act as runtime storage that allows you to store data in your blockchain. More information can\nbe found at the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/runtime/storage/"},(0,n.kt)("inlineCode",{parentName:"a"},"Runtime Storage Page"))," on Substrate Developer Hub."),(0,n.kt)("h3",{id:"crust-storage"},"Crust Storage"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://crust.network"},"Crust Network")," provides a Web3.0 decentralized storage network for the Metaverse. It is designed to realize core values of decentralization, privacy, and assurance. Crust supports multiple storage-layer protocols such as ",(0,n.kt)("a",{parentName:"p",href:"#ipfs-interplanetary-file-system"},"IPFS"),", and exposes instant accessible on-chain storage functions to users. Crust\u02bcs technical stack is also capable of supporting data manipulating and computing."),(0,n.kt)("p",null,"Crust provides a native cross-chain communnication communication pallet based on ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-crosschain"},"XCMP"),", called ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/crustio/crust/tree/parachain/shadow/crust-collator/pallets/xstorage"},"xStorage"),"."),(0,n.kt)("p",null,"The protocol also supports most smart contract platforms, including Ethereum, with its ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildCrossChainSolution"},"cross-chain dStorage solution"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To learn more about Crust, check out the ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.crust.network/en"},"Crust Network Wiki"),".\nTry integrating with Crust by following their ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/build101"},"Crust Storage 101")," guide.")),(0,n.kt)("h3",{id:"polkadotjs-storage"},"PolkadotJS Storage"),(0,n.kt)("p",null,"The PolkadotJS API offers storage methods that are part of the default Substrate runtime.\nThey are exposed via ",(0,n.kt)("inlineCode",{parentName:"p"},"api.query.<module>.<method>"),".\nSee the ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/storage/"},"official docs")," for more details."))}h.isMDXComponent=!0}}]);