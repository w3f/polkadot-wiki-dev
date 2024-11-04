"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4191],{96737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-example","title":"Example","description":"A MultiLocation Example.","source":"@site/../docs/learn/xcm/fundamentals/multilocation/example.md","sourceDirName":"learn/xcm/fundamentals/multilocation","slug":"/learn/xcm/fundamentals/multilocation-example","permalink":"/docs/learn/xcm/fundamentals/multilocation-example","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/fundamentals/multilocation/example.md","tags":[],"version":"current","lastUpdatedBy":"Roger J. Bos, CFA","lastUpdatedAt":1708049218000,"frontMatter":{"id":"learn-xcm-docs-multilocation-example","title":"Example","sidebar_label":"Example","description":"A MultiLocation Example.","keywords":["xcm","cross-consensus messaging","multilocation"],"slug":"../multilocation-example"},"sidebar":"docs","previous":{"title":"Junction(s)","permalink":"/docs/learn/xcm/fundamentals/multilocation-junctions"},"next":{"title":"MultiAsset","permalink":"/docs/learn/xcm/fundamentals-multiasset"}}');var o=t(74848),l=t(28453);const i={id:"learn-xcm-docs-multilocation-example",title:"Example",sidebar_label:"Example",description:"A MultiLocation Example.",keywords:["xcm","cross-consensus messaging","multilocation"],slug:"../multilocation-example"},c="Example",s={},r=[];function m(e){const n={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"example",children:"Example"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example we show different ",(0,o.jsx)(n.code,{children:"MultiLocation"}),"s for the system hierarchy in the image below.\n",(0,o.jsx)(n.img,{alt:"Example",src:t(47517).A+"",width:"871",height:"526"})]}),"\n",(0,o.jsx)(n.p,{children:"From the perspective of RelayA"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"// ParaA\nlet _: MultiLocation = Parachain(1000).into();\n// AccountId32 in Parachain A\nlet _: MultiLocation = (Parachain(1000), AccountId32 { network: RELAY_A_NETWORK, id: [0u8; 32]}).into();\n// Asset in Parachain A\nlet _: MultiLocation = (Parachain(1000), PalletInstance(1), GeneralIndex(1)).into();\n// Ethereum based account on Parachain B\nlet _: MultiLocation = (Parachain(2000), AccountKey20 { network: RELAY_A_NETWORK, key: [0u8; 20] }).into();\n// Smart Contract\nlet _: MultiLocation = (Parachain(2000), PalletInstance(1), AccountKey20 { network: RELAY_A_NETWORK, key: [0u8; 20] }).into();\n// RelayB\nlet _: MultiLocation = (Parent, GlobalConsensus(RELAY_B_NETWORK)).into();\n// NFT on Parachain C\nlet _: MultiLocation = (Parent, GlobalConsensus(RELAY_B_NETWORK), Parachain(1000), GeneralIndex(1)).into();\n"})}),"\n",(0,o.jsx)(n.p,{children:"From the perspective of Parachain C"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"// Relay B\nlet _: MultiLocation = Parent.into();\n// Plurality Example. Many more BodyId/BodyPart combos imaginable\nlet _: MultiLocation = (Parent, Plurality { id: BodyId::Index(0), part: BodyPart::Members { count: 10 } }).into();\n// Account in Relay\nlet _: MultiLocation = (Parent, AccountId32 { network: None, id: [0u8; 32] }).into();\n"})}),"\n",(0,o.jsx)(n.p,{children:"From the perspective of the Smart Contract"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"// Asset in Parachain A\nlet _: MultiLocation = (Parent, Parent, Parachain(1000), PalletInstance(1), GeneralIndex(1)).into();\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},47517:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/MultiLocation_Example-f123c564a25cab510cf5486df6402c4a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var a=t(96540);const o={},l=a.createContext(o);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);