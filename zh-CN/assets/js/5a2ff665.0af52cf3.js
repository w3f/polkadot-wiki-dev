(self.webpackChunk=self.webpackChunk||[]).push([[7281],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=d(n),u=s,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||i;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72489:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>d,toc:()=>l,default:()=>h});var a=n(22122),s=n(19756),i=(n(67294),n(3905)),r=["components"],o={id:"build-node-interaction",title:"Node Interaction",sidebar_label:"Node Interaction"},c=void 0,d={unversionedId:"build-node-interaction",id:"build-node-interaction",isDocsHomePage:!1,title:"Node Interaction",description:"This page will guide you through some basic interactions with your node. Always refer to the proper",source:"@site/../docs/build-node-interaction.md",sourceDirName:".",slug:"/build-node-interaction",permalink:"/zh-CN/docs/build-node-interaction",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-node-interaction.md",version:"current",lastUpdatedBy:"Dee Evans",lastUpdatedAt:1626917827,formattedLastUpdatedAt:"2021/7/22",frontMatter:{id:"build-node-interaction",title:"Node Interaction",sidebar_label:"Node Interaction"},sidebar:"docs",previous:{title:"Node Management",permalink:"/zh-CN/docs/build-node-management"},next:{title:"Transaction Construction",permalink:"/zh-CN/docs/build-transaction-construction"}},l=[{value:"Polkadot RPC",id:"polkadot-rpc",children:[{value:"Tracking the Chain Head",id:"tracking-the-chain-head",children:[]}]},{value:"Substrate API Sidecar",id:"substrate-api-sidecar",children:[{value:"Fetching a Block",id:"fetching-a-block",children:[]},{value:"Submitting a Transaction",id:"submitting-a-transaction",children:[]}]}],p={toc:l};function h(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page will guide you through some basic interactions with your node. Always refer to the proper\ndocumentation for the tool you are using. This guide should ",(0,i.kt)("em",{parentName:"p"},"guide you to the proper tools,")," not be\nseen as canonical reference."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/latest/sc_rpc_api/index.html"},"Substrate RPC API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/substrate/rpc"},"Polkadot-JS RPC Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar"))),(0,i.kt)("h2",{id:"polkadot-rpc"},"Polkadot RPC"),(0,i.kt)("p",null,"The Parity Polkadot client exposes HTTP and WS endpoints for RPC connections. The default ports are\n9933 for HTTP and 9944 for WS."),(0,i.kt)("p",null,"To get a list of all RPC methods, the node has an RPC endpoint called ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc_methods"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "rpc_methods"}\' http://localhost:9933/\n\n{"jsonrpc":"2.0","result":{"methods":["account_nextIndex","author_hasKey","author_hasSessionKeys","author_insertKey","author_pendingExtrinsics","author_removeExtrinsic","author_rotateKeys","author_submitAndWatchExtrinsic","author_submitExtrinsic","author_unwatchExtrinsic","chain_getBlock","chain_getBlockHash","chain_getFinalisedHead","chain_getFinalizedHead","chain_getHead","chain_getHeader","chain_getRuntimeVersion","chain_subscribeAllHeads","chain_subscribeFinalisedHeads","chain_subscribeFinalizedHeads","chain_subscribeNewHead","chain_subscribeNewHeads","chain_subscribeRuntimeVersion","chain_unsubscribeAllHeads","chain_unsubscribeFinalisedHeads","chain_unsubscribeFinalizedHeads","chain_unsubscribeNewHead","chain_unsubscribeNewHeads","chain_unsubscribeRuntimeVersion","offchain_localStorageGet","offchain_localStorageSet","payment_queryInfo","state_call","state_callAt","state_getChildKeys","state_getChildStorage","state_getChildStorageHash","state_getChildStorageSize","state_getKeys","state_getKeysPaged","state_getKeysPagedAt","state_getMetadata","state_getPairs","state_getRuntimeVersion","state_getStorage","state_getStorageAt","state_getStorageHash","state_getStorageHashAt","state_getStorageSize","state_getStorageSizeAt","state_queryStorage","state_subscribeRuntimeVersion","state_subscribeStorage","state_unsubscribeRuntimeVersion","state_unsubscribeStorage","subscribe_newHead","system_accountNextIndex","system_addReservedPeer","system_chain","system_health","system_name","system_networkState","system_nodeRoles","system_peers","system_properties","system_removeReservedPeer","system_version","unsubscribe_newHead"],"version":1},"id":1}\n')),(0,i.kt)("p",null,"Note that this call will show even those RPC methods which are disabled by a safety flag like\n",(0,i.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe"),". This is\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/issues/7024"},"being worked on"),"."),(0,i.kt)("p",null,"Add parameters in the call, for example get a block by its hash value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "chain_getBlock", "params":["0x3fa6a530850324391fde50bdf0094bdc17ee17ec84aca389b4047ef54fea0037"]}\' http://localhost:9933\n\n{"jsonrpc":"2.0","result":{"block":{"extrinsics":["0x280402000b50055ee97001","0x1004140000"],"header":{"digest":{"logs":["0x06424142453402af000000937fbd0f00000000","0x054241424501011e38401b0aab22f4d72ebc95329c3798445786b92ca1ae69366aacb6e1584851f5fcdfcc0f518df121265c343059c62ab0a34e8e88fda8578810fbe508b6f583"]},"extrinsicsRoot":"0x0e354333c062892e774898e7ff5e23bf1cdd8314755fac15079e25c1a7765f06","number":"0x16c28c","parentHash":"0xe3bf2e8f0e901c292de24d07ebc412d67224ce52a3d1ffae76dc4bd78351e8ac","stateRoot":"0xd582f0dfeb6a7c73c47db735ae82d37fbeb5bada67ee8abcd43479df0f8fc8d8"}},"justification":null},"id":1}\n')),(0,i.kt)("p",null,"Some return values may not appear meaningful at first glance. Polkadot uses\n",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/advanced/codec"},"SCALE encoding")," as a format that is\nsuitable for resource-constrained execution environments. You will need to decode the information\nand use the chain ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/metadata"},"metadata"),"\n(",(0,i.kt)("inlineCode",{parentName:"p"},"state_getMetadata"),") to obtain human-readable information."),(0,i.kt)("h3",{id:"tracking-the-chain-head"},"Tracking the Chain Head"),(0,i.kt)("p",null,"Use the RPC endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"chain_subscribeFinalizedHeads")," to subscribe to a stream of hashes of finalized\nheaders, or ",(0,i.kt)("inlineCode",{parentName:"p"},"chain_FinalizedHeads")," to fetch the latest hash of the finalized header. Use\n",(0,i.kt)("inlineCode",{parentName:"p"},"chain_getBlock")," to get the block associated with a given hash. ",(0,i.kt)("inlineCode",{parentName:"p"},"chain_getBlock")," only accepts block\nhashes, so if you need to query intermediate blocks, use ",(0,i.kt)("inlineCode",{parentName:"p"},"chain_getBlockHash")," to get the block hash\nfrom a block number."),(0,i.kt)("h2",{id:"substrate-api-sidecar"},"Substrate API Sidecar"),(0,i.kt)("p",null,"Parity maintains an RPC client, written in TypeScript, that exposes a limited set of endpoints. It\nhandles the metadata and codec logic so that you are always dealing with decoded information. It\nalso aggregates information that an infrastructure business may need for accounting and auditing,\ne.g. transaction fees."),(0,i.kt)("p",null,"The sidecar can fetch blocks, get the balance of an address atomically (i.e., with a corresponding\nblock number), get the chain's metadata, get a transaction fee prediction, calculate outstanding\nstaking rewards for an address, submit transactions to a node's transaction queue, and\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate-api-sidecar/dist/"},"much more"),"."),(0,i.kt)("p",null,"The client runs on an HTTP host. The following examples use python3, but you can query any way you\nprefer at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://HOST:PORT/"),". The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080"),"."),(0,i.kt)("h3",{id:"fetching-a-block"},"Fetching a Block"),(0,i.kt)("p",null,"Fetch a block using the ",(0,i.kt)("inlineCode",{parentName:"p"},"block/number")," endpoint. To get the chain tip, omit the block number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport json\n\nurl = 'http://127.0.0.1:8080/blocks/7409038'\nresponse = requests.get(url)\nif response.ok:\n    block_info = json.loads(response.text)\n    print(block_info)\n")),(0,i.kt)("p",null,"This returns a fully decoded block."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transfer")," extrinsic, the ",(0,i.kt)("inlineCode",{parentName:"p"},"partialFee"),' item is the transaction fee. It is called\n"partial fee" because the ',(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/build-protocol-info#fees"},"total fee")," would include the ",(0,i.kt)("inlineCode",{parentName:"p"},"tip")," field.\nNotice that some extrinsics do not have a signature. These are\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/build-protocol-info#extrinsics"},"inherents"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When tracking transaction fees, the ",(0,i.kt)("inlineCode",{parentName:"p"},"extrinsics.paysFee")," value is not sufficient for determining\nif the extrinsic had a fee. This field only means that it would require a fee if submitted as a\ntransaction. In order to charge a fee, a transaction also needs to be signed. So in the following\nexample, the ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp.set")," extrinsic does not pay a fee because it is an ",(0,i.kt)("em",{parentName:"p"},"inherent,")," put in the\nblock by the block author.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n   "number":"7409038",\n   "hash":"0x0e9610f3c89fac046ef83aa625ad414d5403031faa026b7ab2a918184e389968",\n   "parentHash":"0xba308541eb207bc639f36d392706309a031c21622f883fb07411060389c5ffdd",\n   "stateRoot":"0x4426383b64a944ad7222a4019aefd558c749da0c6920cfcdfd587741d54abbe2",\n   "extrinsicsRoot":"0x74749e5f5aeb610bc23fd6d8d79fd8bbf5e4b6053f70ba94ea6b3cc271df4b3a",\n   "authorId":"Fvvz6Ej1D5ZR5ZTK1vE1dCjBvkbxE1VncptEtmFaecXe4PF",\n   "logs":[\n      {\n         "type":"PreRuntime",\n         "index":"6",\n         "value":[\n            "BABE",\n            "0x023a0200009c7d191000000000"\n         ]\n      },\n      {\n         "type":"Seal",\n         "index":"5",\n         "value":[\n            "BABE",\n            "0x2296a50fa4fea3a46a95ad5b1f09de76d22c6ed3dc6755718c976e2d14c63e4dd3c6257813d9bdc03bb180b1e20393f1558ae1204982e5c7570df393e11f908b"\n         ]\n      }\n   ],\n   "onInitialize":{\n      "events":[\n\n      ]\n   },\n   "extrinsics":[\n      {\n         "method":{\n            "pallet":"timestamp",\n            "method":"set"\n         },\n         "signature":null,\n         "nonce":null,\n         "args":{\n            "now":"1620636072000"\n         },\n         "tip":null,\n         "hash":"0x8b853f49b6543e4fcbc796ad3574ea5601d2869d80629e080e501da4cb7b74b4",\n         "info":{\n\n         },\n         "events":[\n            {\n               "method":{\n                  "pallet":"system",\n                  "method":"ExtrinsicSuccess"\n               },\n               "data":[\n                  {\n                     "weight":"185253000",\n                     "class":"Mandatory",\n                     "paysFee":"Yes"\n                  }\n               ]\n            }\n         ],\n         "success":true,\n         "paysFee":false\n      },\n      {\n         "method":{\n            "pallet":"balances",\n            "method":"transfer"\n         },\n         "signature":{\n            "signature":"0x94b63112648e8e692f0076fa1ccab3a04510c269d1392c1df2560503865e144e3afd578f1e37e98063b64b98a77a89a9cdc8ade579dcac0984e78d90646a052001",\n            "signer":{\n               "id":"Gr5sBB1EgdmQ7FG3Ud2BdECWQTMDXNgGPfdHMMtDsmT4Dj3"\n            }\n         },\n         "nonce":"12",\n         "args":{\n            "dest":{\n               "id":"J6ksma2jVeHRcRoYPZBkJRzRbckys7oSmgvjKLrVbj1U8bE"\n            },\n            "value":"100000000"\n         },\n         "tip":"0",\n         "hash":"0xfbc5e5de75d64abe5aa3ee9272a3112b3ce53710664f6f2b9416b2ffda8799c2",\n         "info":{\n            "weight":"201217000",\n            "class":"Normal",\n            "partialFee":"2583332634"\n         },\n         "events":[\n            {\n               "method":{\n                  "pallet":"balances",\n                  "method":"Transfer"\n               },\n               "data":[\n                  "Gr5sBB1EgdmQ7FG3Ud2BdECWQTMDXNgGPfdHMMtDsmT4Dj3",\n                  "J6ksma2jVeHRcRoYPZBkJRzRbckys7oSmgvjKLrVbj1U8bE",\n                  "100000000"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"balances",\n                  "method":"Deposit"\n               },\n               "data":[\n                  "Fvvz6Ej1D5ZR5ZTK1vE1dCjBvkbxE1VncptEtmFaecXe4PF",\n                  "2583332634"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"system",\n                  "method":"ExtrinsicSuccess"\n               },\n               "data":[\n                  {\n                     "weight":"201217000",\n                     "class":"Normal",\n                     "paysFee":"Yes"\n                  }\n               ]\n            }\n         ],\n         "success":true,\n         "paysFee":true\n      },\n      {\n         "method":{\n            "pallet":"utility",\n            "method":"batch"\n         },\n         "signature":{\n            "signature":"0x8aa2fc3f0cff52533745679523705720cff42d0e7258b9797feed193deb0ca73474726e148af0a0b096d44c07f20e5292819ec92279cffb2897e95cc337e638e",\n            "signer":{\n               "id":"F4gmSZGiM9pMYPsKW7xnGktDr4zRmN2jqy5Ze678y9YWR7F"\n            }\n         },\n         "nonce":"687",\n         "args":{\n            "calls":[\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"Cfish3zJiFnTvR9jscCap7imeA9ep3cH1wZfcZwAp2gdZHo",\n                     "era":"2229"\n                  }\n               },\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"Cfish3zJiFnTvR9jscCap7imeA9ep3cH1wZfcZwAp2gdZHo",\n                     "era":"2230"\n                  }\n               },\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"Cfish3zJiFnTvR9jscCap7imeA9ep3cH1wZfcZwAp2gdZHo",\n                     "era":"2231"\n                  }\n               },\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"DifishR4auphofhzxsy2aupgYo4NaUECH7qgt71CgiB2o6P",\n                     "era":"2231"\n                  }\n               },\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"J1fishfH94nFZLNScHgC2HorWpFD2xdPxd96wtTCHLvKxfa",\n                     "era":"2231"\n                  }\n               }\n            ]\n         },\n         "tip":"0",\n         "hash":"0x69171ec3f4e5e4dfd27f4d1c5b5dbc884932c5d9a078c84495bb7ab875c8785f",\n         "info":{\n            "weight":"629782467000",\n            "class":"Normal",\n            "partialFee":"5150837715"\n         },\n         "events":[\n            {\n               "method":{\n                  "pallet":"staking",\n                  "method":"Reward"\n               },\n               "data":[\n                  "Cfish3zJiFnTvR9jscCap7imeA9ep3cH1wZfcZwAp2gdZHo",\n                  "40730624074"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"staking",\n                  "method":"Reward"\n               },\n               "data":[\n                  "FhLcXuFkTwyc3o9K82VBahpain1YHWyGeNMDTTyeDJKfm5b",\n                  "4296071738"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"staking",\n                  "method":"Reward"\n               },\n               "data":[\n                  "F1NyXFUayqmVMdjNK45hcaTCE3JiqdU83sEGhQ3HQXn2Rpq",\n                  "1770904403"\n               ]\n            },\n\n            // ...\n\n            {\n               "method":{\n                  "pallet":"utility",\n                  "method":"BatchCompleted"\n               },\n               "data":[\n\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"balances",\n                  "method":"Deposit"\n               },\n               "data":[\n                  "Fvvz6Ej1D5ZR5ZTK1vE1dCjBvkbxE1VncptEtmFaecXe4PF",\n                  "5150837715"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"system",\n                  "method":"ExtrinsicSuccess"\n               },\n               "data":[\n                  {\n                     "weight":"629782467000",\n                     "class":"Normal",\n                     "paysFee":"Yes"\n                  }\n               ]\n            }\n         ],\n         "success":true,\n         "paysFee":true\n      }\n   ],\n   "onFinalize":{\n      "events":[\n\n      ]\n   },\n   "finalized":true\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The JS number type is a 53 bit precision float. There is no guarantee that the numerical values in\nthe response will have a numerical type. Any numbers larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"2**53-1")," will have a string\ntype.")),(0,i.kt)("h3",{id:"submitting-a-transaction"},"Submitting a Transaction"),(0,i.kt)("p",null,"Submit a serialized transaction using the ",(0,i.kt)("inlineCode",{parentName:"p"},"tx")," endpoint with an HTTP POST request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport json\n\nurl = 'http://127.0.0.1:8080/transaction/'\ntx_headers = {'Content-type' : 'application/json', 'Accept' : 'text/plain'}\nresponse = requests.post(\n    url,\n    data='{\"tx\": \"0xed0...000\"}', # A serialized tx.\n    headers=tx_headers\n)\ntx_response = json.loads(response.text)\n")),(0,i.kt)("p",null,"If successful, this endpoint returns a JSON with the transaction hash. In case of error, it will\nreturn an error report, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "error": "Failed to parse a tx" | "Failed to submit a tx",\n    "cause": "Upstream error description"\n}\n')))}h.isMDXComponent=!0}}]);