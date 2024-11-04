"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6869],{503:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"learn/learn-guides-dot-ksm-bridge","title":"Polkadot and Kusama Bridge Guides","description":"Polkadot-JS Guides about Polkadot and Kusama Bridge.","source":"@site/../docs/learn/learn-guides-DOT-KSM-bridge.md","sourceDirName":"learn","slug":"/learn-guides-dot-ksm-bridge","permalink":"/docs/learn-guides-dot-ksm-bridge","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-DOT-KSM-bridge.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1729847256000,"frontMatter":{"id":"learn-guides-dot-ksm-bridge","title":"Polkadot and Kusama Bridge Guides","sidebar_label":"DOT <> KSM Bridge","description":"Polkadot-JS Guides about Polkadot and Kusama Bridge.","keywords":["Bridge","XCM","Bridge Hub","polkadot-js"],"slug":"../learn-guides-dot-ksm-bridge"},"sidebar":"docs","previous":{"title":"Bridge Hub Guides","permalink":"/docs/learn-guides-bridges"},"next":{"title":"Claim Guides","permalink":"/docs/learn-guides-claims"}}');var n=t(74848),o=t(28453),r=t(67141);const i={id:"learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",sidebar_label:"DOT <> KSM Bridge",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",keywords:["Bridge","XCM","Bridge Hub","polkadot-js"],slug:"../learn-guides-dot-ksm-bridge"},d=void 0,c={},u=[{value:"Transfer DOT to Kusama Asset Hub",id:"transfer-dot-to-kusama-asset-hub",level:2},{value:"Transfer DOT from Kusama Asset Hub to Polkadot Asset Hub",id:"transfer-dot-from-kusama-asset-hub-to-polkadot-asset-hub",level:2},{value:"Transfer KSM to Polkadot Asset Hub",id:"transfer-ksm-to-polkadot-asset-hub",level:2},{value:"Transfer KSM from Polkadot Asset Hub to Kusama Asset Hub",id:"transfer-ksm-from-polkadot-asset-hub-to-kusama-asset-hub",level:2},{value:"Transfer of arbitrary assets between Polkadot Asset Hub and Kusama Asset Hub",id:"transfer-of-arbitrary-assets-between-polkadot-asset-hub-and-kusama-asset-hub",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the Polkadot-JS UI, you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,n.jsxs)(s.p,{children:["The fully functional Polkadot < > Kusama bridge facilitates secure asset transfers between the\nchains in both the ecosystems. The progress of Polkadot < > Kusama bridge implementation can be\ntracked ",(0,n.jsx)(s.a,{href:"https://forum.polkadot.network/t/polkadot-kusama-bridge/2971/1",children:"here"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"transfer-dot-to-kusama-asset-hub",children:"Transfer DOT to Kusama Asset Hub"}),"\n",(0,n.jsx)(s.p,{children:"This tutorial shows how to transfer DOT on Polkadot Asset Hub to Kusama Asset Hub. The first step is\nto ensure that your account on Polkadot Asset Hub has enough DOT to cover the XCM transfer fee and\nthe bridge fee (which is around 2 DOT). The next step is to craft an XCM message to be sent from\nPolkadot Asset Hub."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://xcmsend.com/#/builder",children:"BagPipes (formerly called xcmsend)"})," is an opensource application\nthat lets you create workflows in a drag and drop style interface in order to build execution flows\nof cross chain assets transfers using XCM. Check\n",(0,n.jsx)(s.a,{href:"https://xcmsend.github.io/workflows/dotksm.html",children:"Bagpipes docs"})," for more information on how to\ncreate workflows for crafting XCM transfers. The snapshot below shows a workflow on BagPipes that is\ndesigned to send 3 DOT from an account Polkadot Asset Hub to Kusama Asset Hub."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"BagPipes Snapshot DOT Transfer",src:t(35918).A+"",width:"2035",height:"962"})}),"\n",(0,n.jsx)(s.p,{children:"This workflow crafts an XCM transfer as shown below."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'{\n  "isSigned": false,\n  "method": {\n    "args": {\n      "dest": {\n        "V3": {\n          "parents": "2",\n          "interior": {\n            "X2": [\n              {\n                "GlobalConsensus": "Kusama"\n              },\n              {\n                "Parachain": "1,000"\n              }\n            ]\n          }\n        }\n      },\n      "beneficiary": {\n        "V3": {\n          "parents": "0",\n          "interior": {\n            "X1": {\n              "AccountId32": {\n                "network": null,\n                "id": "0x9e4e7009937c56d267338762a60ed004293afd40e7c2081847c12cb63c76a818"\n              }\n            }\n          }\n        }\n      },\n      "assets": {\n        "V3": [\n          {\n            "id": {\n              "Concrete": {\n                "parents": "1",\n                "interior": "Here"\n              }\n            },\n            "fun": {\n              "Fungible": "30,000,000,000"\n            }\n          }\n        ]\n      },\n      "fee_asset_item": "0",\n      "weight_limit": "Unlimited"\n    },\n    "method": "limitedReserveTransferAssets",\n    "section": "polkadotXcm"\n  }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Once this ",(0,n.jsx)(s.a,{href:"https://assethub-polkadot.subscan.io/extrinsic/6028374-2",children:"extrinsic"})," is signed and\nsubmitted, it is broadcast to Polkadot Asset Hub nodes. As this is a reserve asset transfer, the DOT\nis transferred to the destination's sovereign account on Polkadot Asset Hub and\n",(0,n.jsx)(s.a,{href:"https://assethub-kusama.subscan.io/extrinsic/6758392-0?event=6758392-1",children:"DOT is issued"})," as a foreign\nasset and deposited onto the destination account on Kusama Asset Hub. The foreign asset balances of\nany account on Kusama Asset Hub can be queried on-chain through the ",(0,n.jsx)(s.code,{children:"foreignAssets"}),"pallet as shown\nbelow."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"DOT Balance Kusama Asset Hub",src:t(13777).A+"",width:"2820",height:"1874"})}),"\n",(0,n.jsx)(s.h2,{id:"transfer-dot-from-kusama-asset-hub-to-polkadot-asset-hub",children:"Transfer DOT from Kusama Asset Hub to Polkadot Asset Hub"}),"\n",(0,n.jsx)(s.p,{children:"This tutorial shows how to transfer DOT on Kusama Asset Hub to Polkadot Asset Hub. The first step is\nto ensure that your account on Kusama Asset Hub has enough KSM to cover the XCM transfer fee and the\nbridge fee (which is around 0.4 KSM). The next step is to craft an XCM message to be sent from\nKusama Asset Hub."}),"\n",(0,n.jsxs)(s.p,{children:["DOT which is registered as a foreign asset on Kusama Asset Hub can be transferred to Polkadot Asset\nHub through an extrinsic like the one below, whose call data is\n",(0,n.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-asset-hub-rpc.polkadot.io#/extrinsics/decode/0x1f0b040202090200a10f04000101009e4e7009937c56d267338762a60ed004293afd40e7c2081847c12cb63c76a818040402010902000700e40b54020000000000",children:(0,n.jsx)(s.code,{children:"0x1f0b040202090200a10f04000101009e4e7009937c56d267338762a60ed004293afd40e7c2081847c12cb63c76a818040402010902000700e40b54020000000000"})}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"DOT transferred out from Kusama Asset Hub",src:t(51308).A+"",width:"2834",height:"5018"})}),"\n",(0,n.jsxs)(s.p,{children:["For reference, this ",(0,n.jsx)(s.a,{href:"https://assethub-kusama.subscan.io/extrinsic/7015118-2",children:"extrinsic"})," is signed\nand submitted successfully, and the destination account on Polkadot Asset Hub received DOT."]}),"\n",(0,n.jsx)(s.h2,{id:"transfer-ksm-to-polkadot-asset-hub",children:"Transfer KSM to Polkadot Asset Hub"}),"\n",(0,n.jsx)(s.p,{children:"This tutorial shows how to transfer KSM on Kusama Asset Hub to Polkadot Asset Hub. The first step is\nto ensure that your account on Kusama Asset Hub has enough KSM to cover the XCM transfer fee and the\nbridge fee (which is around 0.4 KSM). The next step is to craft an XCM message to be sent from\nKusama Asset Hub."}),"\n",(0,n.jsxs)(s.p,{children:["The XCM transfer extrinsic shown below can be accessed\n",(0,n.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-asset-hub-rpc.polkadot.io#/extrinsics/decode/0x1f08030202090200a10f03000101008479c8ea5480acca5a847133cd97a87801b6e698a98f2eab0e8e9d5c51b14a33030400010000070088526a740000000000",children:"here."}),"\nIf you plan on reusing this extrinsic, ensure that you change the Account ID and the transfer amount\nhighlighted in the snapshot below."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"PJS Snapshot KSM Transfer",src:t(65604).A+"",width:"2858",height:"4398"})}),"\n",(0,n.jsxs)(s.p,{children:["Once this ",(0,n.jsx)(s.a,{href:"https://assethub-kusama.subscan.io/extrinsic/6761480-2",children:"extrinsic"})," is signed and\nsubmitted, it is broadcast to Kusama Asset Hub nodes. As this is a reserve asset transfer, the KSM\nis transferred to the sovereign account on Kusama Asset Hub and\n",(0,n.jsx)(s.a,{href:"https://assethub-polkadot.subscan.io/extrinsic/6031467-0?event=6031467-6",children:"KSM is issued"})," as a\nforeign asset and deposited onto the destination account on Kusama Asset Hub. The foreign asset\nbalances of any account on Kusama Asset Hub can be queried on-chain through the\n",(0,n.jsx)(s.code,{children:"foreignAssets"}),"pallet as shown below."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"KSM Balance on Polkadot Asset Hub",src:t(41412).A+"",width:"2854",height:"1960"})}),"\n",(0,n.jsx)(s.h2,{id:"transfer-ksm-from-polkadot-asset-hub-to-kusama-asset-hub",children:"Transfer KSM from Polkadot Asset Hub to Kusama Asset Hub"}),"\n",(0,n.jsx)(s.p,{children:"This tutorial shows how to transfer KSM on Polkadot Asset Hub to Kusama Asset Hub. The first step is\nto ensure that your account on Polkadot Asset Hub has enough DOT to cover the XCM transfer fee and\nthe bridge fee (which is around 2 DOT). The next step is to craft an XCM message to be sent from\nPolkadot Asset Hub."}),"\n",(0,n.jsxs)(s.p,{children:["KSM which is registered as a foreign asset on Polkadot Asset Hub can be transferred to Kusama Asset\nHub through an extrinsic like the one below, whose call data is\n",(0,n.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot-asset-hub-rpc.polkadot.io#/extrinsics/decode/0x1f0b040202090300a10f04000101008479c8ea5480acca5a847133cd97a87801b6e698a98f2eab0e8e9d5c51b14a33040402010903000700a0db215d0000000000",children:(0,n.jsx)(s.code,{children:"0x1f0b040202090300a10f04000101008479c8ea5480acca5a847133cd97a87801b6e698a98f2eab0e8e9d5c51b14a33040402010903000700a0db215d0000000000"})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"KSM transferred out from Polkadot Asset Hub",src:t(25728).A+"",width:"2854",height:"4784"})}),"\n",(0,n.jsxs)(s.p,{children:["For reference, this ",(0,n.jsx)(s.a,{href:"https://assethub-polkadot.subscan.io/extrinsic/6303823-2",children:"extrinsic"})," was signed\nand submitted successfully, and the destination account on Kusama Asset Hub received KSM."]}),"\n",(0,n.jsx)(s.h2,{id:"transfer-of-arbitrary-assets-between-polkadot-asset-hub-and-kusama-asset-hub",children:"Transfer of arbitrary assets between Polkadot Asset Hub and Kusama Asset Hub"}),"\n",(0,n.jsx)(s.p,{children:"Transfer functionality of assets other than DOT and KSM between Asset Hubs is yet to be enabled.\nOnce this functionality is enabled, assets which are sufficient or non-sufficient on the Asset Hubs\ncan be bridged."}),"\n",(0,n.jsx)(s.admonition,{title:"Avoid Asset Traps",type:"caution",children:(0,n.jsxs)(s.p,{children:["To avoid issues on the receiving side for non-sufficient assets, make sure to call\n",(0,n.jsx)(s.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/0ef37c75401b78b61ed35ce27af8b964da27bb3c/substrate/frame/assets/src/lib.rs#L1531",children:"pallet_assets::touch()"}),"\nor\n",(0,n.jsx)(s.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/0ef37c75401b78b61ed35ce27af8b964da27bb3c/substrate/frame/assets/src/lib.rs#L1616",children:"pallet_assets::touch_other()"}),"\neffectively guaranteeing the ability to successfully receive and accept the bridged assets in your\naccount on the destination chain. This eliminates issues like your account on destination not\nexisting or not having enough ED or having reached the maximum limit of different assets it can\nhold. Without this sanity step, you risk that the bridged assets will make their way to the\ndestination chain but will not be accepted by your account, and instead get trapped in the Asset\nTrap on the destination chain."]})}),"\n",(0,n.jsx)(s.p,{children:"Once arbitrary asset transfers are enabled by the Asset Hubs, a guide will be posted to this Wiki\npage."})]})}function l(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},67141:(e,s,t)=>{t.d(s,{A:()=>o});var a=t(96540),n=t(74848);const o=function(e){var s,t=e.message,o=(0,a.useState)(!0),r=o[0],i=o[1];return(0,n.jsx)(n.Fragment,{children:r&&(0,n.jsxs)("div",{className:"message-box",children:[(0,n.jsx)("button",{className:"close-button",onClick:function(){i(!1)},children:"\u2716 "}),(0,n.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(s=t,s.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},13777:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/KAH-DOT-Balance-f587755f88564c19d1578f162d9dd0ff.png"},51308:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/KAH-DOT-transfer-PAH-a6dd9187db4d6f449092d026c726a8c6.png"},65604:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/KAH-PAH-KSM-Transfer-PJS-Extrinsic-55c8a01313cec43f8119b6aca8904e23.png"},41412:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/PAH-KSM-Balance-ffa6f6093f73aa45b0c1bc7b6d0c78c7.png"},25728:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/PAH-KSM-Transfer-KAH-0d8843fc681b2cce6939cc6e607ff122.png"},35918:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/PAH-to-KAH-DOT-transfer-b97431dce4c4cd85c5dc17007357fb9a.png"},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var a=t(96540);const n={},o=a.createContext(n);function r(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);