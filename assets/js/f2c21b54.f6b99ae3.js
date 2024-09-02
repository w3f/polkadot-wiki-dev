"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4410],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),g=n,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},48601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=a(58168),n=a(98587),i=(a(96540),a(15680)),o=["components"],s={id:"build-storage",title:"Decentralized Storage",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",keywords:["build","cloud","storage"],slug:"../build-storage"},l=void 0,d={unversionedId:"build/build-storage",id:"build/build-storage",title:"Decentralized Storage",description:"Information about building with decentralized storage.",source:"@site/../docs/build/build-storage.md",sourceDirName:"build",slug:"/build-storage",permalink:"/docs/build-storage",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-storage.md",tags:[],version:"current",lastUpdatedBy:"Andrei Kostakov",lastUpdatedAt:1710922051,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"build-storage",title:"Decentralized Storage",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",keywords:["build","cloud","storage"],slug:"../build-storage"}},c={},p=[{value:"DCS (Decentralized Cloud Storage)",id:"dcs-decentralized-cloud-storage",level:2},{value:"IPFS (Interplanetary File System)",id:"ipfs-interplanetary-file-system",level:3},{value:"Brief comparison of IPFS &amp; HTTP:",id:"brief-comparison-of-ipfs--http",level:4},{value:"Crust Storage",id:"crust-storage",level:3},{value:"Filebase",id:"filebase",level:3},{value:"Using Polkadot-JS Files (IPFS) module",id:"using-polkadot-js-files-ipfs-module",level:4}],u={toc:p},g="wrapper";function h(e){var t=e.components,s=(0,n.A)(e,o);return(0,i.yg)(g,(0,r.A)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Storage is an integral part of modern computer systems, and the same is true for distributed and\ndecentralized systems like a blockchain. When interacting with the\nPolkadot ecosystem, it will be helpful if you\nfamiliarize yourself with the current Web3 approach towards decentralized storage."),(0,i.yg)("h2",{id:"dcs-decentralized-cloud-storage"},"DCS (Decentralized Cloud Storage)"),(0,i.yg)("p",null,"The key attribute that characterizes centralized cloud storage is the location of data."),(0,i.yg)("p",null,"In decentralized cloud storage, the key attribute becomes the data itself instead of the data's\nlocation."),(0,i.yg)("p",null,"This can be viewed as the shift from the centralized ",(0,i.yg)("em",{parentName:"p"},"location-centric")," storage approach to the\ndecentralized ",(0,i.yg)("em",{parentName:"p"},"content-centric")," approach."),(0,i.yg)("h3",{id:"ipfs-interplanetary-file-system"},"IPFS (Interplanetary File System)"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://ipfs.tech/"},"IPFS")," is a peer-to-peer distributed file system that seeks to connect all\ncomputing devices with the same system of files, by utilizing features such as content-addressing,\ncontent-signing, and enhanced security methods through encryption. IPFS aims to address the current\nhurdles of the HTTP-based Internet."),(0,i.yg)("h4",{id:"brief-comparison-of-ipfs--http"},"Brief comparison of IPFS & HTTP:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"IPFS"),(0,i.yg)("th",{parentName:"tr",align:null},"HTTP"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"network: peer-to-peer model (decentralized)"),(0,i.yg)("td",{parentName:"tr",align:null},"network: client-server model (centralized)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"requests: use a cryptographic hash of that data"),(0,i.yg)("td",{parentName:"tr",align:null},"requests: use the address on which data is hosted")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"accessibility: data is distributed to multiple nodes and can be accessed at any time. Bandwidth is high: nearest peer can serve the data"),(0,i.yg)("td",{parentName:"tr",align:null},"accessibility: data can only be accessed if the server is live and there are no interruptions in transmission. Bandwidth is limited: clients send requests to the same server")))),(0,i.yg)("h3",{id:"crust-storage"},"Crust Storage"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://crust.network"},"Crust Network")," provides a Web3.0 decentralized storage network for the\nMetaverse. It is designed to realize core values of decentralization, privacy, and assurance. Crust\nsupports multiple storage-layer protocols such as ",(0,i.yg)("a",{parentName:"p",href:"#ipfs-interplanetary-file-system"},"IPFS"),", and\nexposes instant accessible on-chain storage functions to users. Crust\u02bcs technical stack is also\ncapable of supporting data manipulating and computing."),(0,i.yg)("p",null,"Crust provides a native cross-chain communication pallet based on\n",(0,i.yg)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-xcm"},"XCMP"),", called\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/crustio/crust/tree/parachain/shadow/crust-collator/pallets/xstorage"},"xStorage"),"."),(0,i.yg)("p",null,"The protocol also supports most smart contract platforms, including Ethereum, with its\n",(0,i.yg)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildCrossChainSolution"},"cross-chain dStorage solution"),"."),(0,i.yg)("admonition",{title:"Learn more about Crust",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"To learn more about Crust, check out the ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.crust.network/en"},"Crust Network Wiki"),". Try\nintegrating with Crust by following their\n",(0,i.yg)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/build101"},"Crust Storage 101")," guide.")),(0,i.yg)("h3",{id:"filebase"},"Filebase"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://filebase.com"},"Filebase")," is the first S3-compatible object storage platform that allows you\nto store data in a secure, redundant, and performant manner across multiple decentralized storage\nnetworks."),(0,i.yg)("p",null,"Filebase offers a geo-redundant IPFS pinning service that allows you to pin files to IPFS across\nmultiple diverse geographic locations. All files uploaded to IPFS through Filebase are automatically\npinned to the Filebase infrastructure with 3x replication across the globe. This ensures that your\ndata is globally available and redundant at all times."),(0,i.yg)("p",null,"Filebase acts as an easy on-ramp to IPFS and decentralized storage by offering a user-friendly web\nconsole dashboard, making drag-and-dropping files onto Web3 simple and easy. Filebase also provides\nan S3-compatible API for widespread integrations and configurations in current workflows."),(0,i.yg)("admonition",{title:"Learn more about Filebase",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"To learn more about Filebase, check out the ",(0,i.yg)("a",{parentName:"p",href:"https://docs.filebase.com"},"Filebase Documentation"),", and\nspecifically the documentation on\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.filebase.com/web3-education/web3-tutorials/polkadot/polkadot-deploy-a-polkadot-dapp-on-decentralized-storage"},"deploying Polkadot dApp on decentralized storage."),"\nYou can get started with Filebase by signing up ",(0,i.yg)("a",{parentName:"p",href:"https://filebase.com/signup"},"here."))),(0,i.yg)("h4",{id:"using-polkadot-js-files-ipfs-module"},"Using Polkadot-JS Files (IPFS) module"),(0,i.yg)("p",null,"Polkadot-JS UI includes a decentralized storage module that allows Substrate-based chain users to\nupload their files to an\n",(0,i.yg)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildIPFSWeb3AuthGW"},"IPFS W3Auth Gateway")," and use the\n",(0,i.yg)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildIPFSW3AuthPin"},"IPFS W3Auth Pinning Service")," to pin their\nfiles on Crust Network."),(0,i.yg)("p",null,"Start by uploading a single file or folder:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"upload",src:a(51947).A,width:"1917",height:"968"})),(0,i.yg)("p",null,"Choose a Gateway:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"gateway",src:a(70192).A,width:"1916",height:"966"})),(0,i.yg)("p",null,"Sign the message:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"sign",src:a(2297).A,width:"1918",height:"968"})),(0,i.yg)("p",null,"You should be able to view the file info, as follows:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"file info",src:a(97318).A,width:"1917",height:"966"})),(0,i.yg)("p",null,"As well as the file status:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"file statue",src:a(82415).A,width:"1916",height:"966"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The whole files module is decentralized, so your file directory is only cached in browser. The file\ndirectory info will not be visible if you switch to a new browser or clear the browser cache. The\nstorage module allows you to export file directory info from the current browser and import it to\nthe new browser.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"manage file dir",src:a(59956).A,width:"1917",height:"965"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"These above images are taken from this ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/pull/6106"},"pull request"))))}h.isMDXComponent=!0},51947:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/substrate-files-1-b911815ce2aa992118b70e76adff406a.png"},70192:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/substrate-files-2-b16e86055a05152fd766c6c8fb2478b3.png"},2297:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/substrate-files-3-6b5badf567f42956c47ce5dcd7edd78c.png"},97318:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/substrate-files-4-80c0cc191b4a9d3dbcd336f2413e1922.png"},82415:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/substrate-files-5-9906fb4cea40075a2e3eb225a9d14dd7.png"},59956:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/substrate-files-6-e1d84abd6cf39f3b3651ae30a33b38b5.png"}}]);