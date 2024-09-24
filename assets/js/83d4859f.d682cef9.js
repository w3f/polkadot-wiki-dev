"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2808],{3299:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(74848),r=t(28453);const a={id:"learn-xcm-docs-transfers-summary",title:"Transfers",sidebar_label:"Summary",description:"Summary about XCM Transfers.",keywords:["xcm","cross-consensus messaging","transfers"],slug:"../transfers-summary"},i="Transfers",o={id:"learn/xcm/journey/transfers/learn-xcm-docs-transfers-summary",title:"Transfers",description:"Summary about XCM Transfers.",source:"@site/../docs/learn/xcm/journey/transfers/summary.md",sourceDirName:"learn/xcm/journey/transfers",slug:"/learn/xcm/journey/transfers-summary",permalink:"/docs/learn/xcm/journey/transfers-summary",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/journey/transfers/summary.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694099593e3,frontMatter:{id:"learn-xcm-docs-transfers-summary",title:"Transfers",sidebar_label:"Summary",description:"Summary about XCM Transfers.",keywords:["xcm","cross-consensus messaging","transfers"],slug:"../transfers-summary"},sidebar:"docs",previous:{title:"Transfers",permalink:"/docs/learn/xcm/journey/transfers"},next:{title:"Asset Teleportation",permalink:"/docs/learn/xcm/journey/transfers-teleport"}},c={},l=[{value:"WithdrawAsset",id:"withdrawasset",level:2},{value:"BuyExecution",id:"buyexecution",level:2},{value:"DepositAsset",id:"depositasset",level:2},{value:"Example",id:"example",level:2},{value:"Transferring between systems",id:"transferring-between-systems",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"transfers",children:"Transfers"})}),"\n",(0,n.jsxs)(s.p,{children:["The first feature you'll be interested in when dealing with XCM is being able to transfer assets\nbetween consensus systems. In the ",(0,n.jsx)(s.a,{href:"/docs/learn/xcm/quickstart-summary",children:"quickstart"})," chapter, we saw a simple\nXCM that when executed, would send assets between two accounts on the same consensus system. Now\nthat we've learnt the ",(0,n.jsx)(s.a,{href:"/docs/learn/xcm/fundamentals-summary",children:"fundamentals"}),", let's go over those same\ninstructions once again."]}),"\n",(0,n.jsx)(s.h2,{id:"withdrawasset",children:"WithdrawAsset"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"WithdrawAsset(MultiAssets),\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This instruction is the most common way to get assets to the holding register of the XCVM. The\n",(0,n.jsx)(s.code,{children:"MultiAssets"})," in the operand will be stored in the holding register to be later used for other\ninstructions. As we've seen, we can use the expression ",(0,n.jsx)(s.code,{children:"(Here, amount).into()"})," to take a certain\n",(0,n.jsx)(s.code,{children:"amount"})," of the native token."]}),"\n",(0,n.jsx)(s.h2,{id:"buyexecution",children:"BuyExecution"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"BuyExecution { fees: MultiAssets, weight_limit: WeightLimit },\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Because XCM is designed to be agnostic to the underlying consensus system, it doesn't have fee\npayment baked in. This instruction lets you pay for the execution of the XCM using the assets in the\nholding register. Most XCMs are not allowed to be executed (blocked by the\n",(0,n.jsx)(s.a,{href:"/docs/learn/xcm/config-deep-dive#barrier",children:"barrier"}),") if they don't contain this instruction as one of\nthe first ones to pay for all future ones."]}),"\n",(0,n.jsx)(s.h2,{id:"depositasset",children:"DepositAsset"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"DepositAsset { assets: MultiAssetFilter, beneficiary: MultiLocation },\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This instruction will put assets from the holding register that match the\n",(0,n.jsx)(s.a,{href:"/docs/learn/xcm/fundamentals-multiasset#multiassetfilter",children:"MultiAssetFilter"})," into the ",(0,n.jsx)(s.code,{children:"beneficiary"}),". Note\nthat ",(0,n.jsx)(s.code,{children:"beneficiary"})," must be a location where the local consensus system can actually deposit assets\nto, e.g. it doesn't make sense to deposit assets to ",(0,n.jsx)(s.code,{children:"../AccountId32(0x0)"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"let message = Xcm(vec![\n  WithdrawAsset((Here, amount).into()),\n  BuyExecution { fees: (Here, amount).into(), weight_limit: Unlimited },\n  DepositAsset {\n    assets: All.into(),\n    beneficiary: AccountId32 { id: ALICE.into(), network: None }.into()\n  },\n]);\n"})}),"\n",(0,n.jsxs)(s.p,{children:["As we've seen, the above message results in withdrawing assets from the origin of the message,\npaying for execution and depositing the rest to another account on the same system. The full example\ncan be seen in ",(0,n.jsx)(s.a,{href:"https://github.com/paritytech/xcm-docs/tree/main/examples",children:"the repo"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"transferring-between-systems",children:"Transferring between systems"}),"\n",(0,n.jsx)(s.p,{children:"But what if you want to make a transfer from one system to another? There are two ways of doing\nthis:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Asset teleportation"}),"\n",(0,n.jsx)(s.li,{children:"Reserve-backed transfers"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"We'll be discussing both in the following chapters."})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var n=t(96540);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);