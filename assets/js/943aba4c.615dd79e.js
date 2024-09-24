"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1112],{83686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(74848),a=n(28453),s=n(67141);const i={id:"learn-guides-claims",title:"Polkadot-JS Guides about Claims",sidebar_label:"Claim Guides",description:"Step-by-step guide on how to claim your tokens.",keywords:["claims","tokens","kusama","polkadot"],slug:"../learn-guides-claims"},l=void 0,c={id:"learn/learn-guides-claims",title:"Polkadot-JS Guides about Claims",description:"Step-by-step guide on how to claim your tokens.",source:"@site/../docs/learn/learn-guides-claims.md",sourceDirName:"learn",slug:"/learn-guides-claims",permalink:"/docs/learn-guides-claims",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-claims.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726760224e3,frontMatter:{id:"learn-guides-claims",title:"Polkadot-JS Guides about Claims",sidebar_label:"Claim Guides",description:"Step-by-step guide on how to claim your tokens.",keywords:["claims","tokens","kusama","polkadot"],slug:"../learn-guides-claims"},sidebar:"docs",previous:{title:"DOT <> KSM Bridge",permalink:"/docs/learn-guides-dot-ksm-bridge"},next:{title:"Architecture",permalink:"/docs/learn-architecture"}},r={},d=[{value:"Generate an Account",id:"generate-an-account",level:2},{value:"Claiming Tokens",id:"claiming-tokens",level:2},{value:"Select Accounts",id:"select-accounts",level:3},{value:"Select Account on Ethereum",id:"select-account-on-ethereum",level:4},{value:"Sign Message on Ethereum &amp; Claim",id:"sign-message-on-ethereum--claim",level:3},{value:"Verifying your Claim",id:"verifying-your-claim",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](../general/polkadotjs-ui.md), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,o.jsx)(s.A,{message:"Screenshots on this page are based on Polkadot, but note that the same process applies to Kusama."}),"\n",(0,o.jsx)(t.p,{children:"If you participated in a previous DOT sale before 2020 and received your DOT allocation indicator\ntokens, you can now claim your DOT (and a proportional amount of KSM on the Kusama network). The\nclaim process connects the address where your DOT indicators have been stored on Ethereum with a\nnative Polkadot address and, if your ETH address is eligible, will pay the tokens to the Polkadot\naddress."}),"\n",(0,o.jsxs)(t.p,{children:["To do this, you must sign a message on Ethereum containing the address of your Polkadot account. You\ncan do this by using the Polkadot-JS UI ",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/#/claims",children:"Claims app"}),". Ensure\nthat you are connected to the Polkadot network (displayed in the upper-left-hand corner of the\nscreen)."]}),"\n",(0,o.jsx)(t.admonition,{title:"Third-party claim processes",type:"warning",children:(0,o.jsx)(t.p,{children:"Claiming using a third-party process can lead to losing your allocation; therefore, we cannot\nrecommend using any third-party apps. Manually specifying your transaction data, as specified in our\nclaims process below, is the only way to ensure you will receive your allocation."})}),"\n",(0,o.jsx)(t.h2,{id:"generate-an-account",children:"Generate an Account"}),"\n",(0,o.jsxs)(t.p,{children:["You will need to generate an account on the relay chain to claim DOT (or KSM on Kusama). See the\n",(0,o.jsx)(t.a,{href:"/docs/wallets-and-extensions",children:"available wallets and extensions"})," for more information about\nwallets and browser extensions you can use to create an account. In terms of hardware wallet\nsupport, you can use the ",(0,o.jsx)(t.a,{href:"/docs/ledger",children:"Ledger"})," devices or\n",(0,o.jsx)(t.a,{href:"/docs/polkadot-vault",children:"Polkadot Vault"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"claiming-tokens",children:"Claiming Tokens"}),"\n",(0,o.jsxs)(t.p,{children:["The Polkadot-JS ",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/#/claims",children:"Claims app"})," will guide you through the\nprocess of claiming the tokens."]}),"\n",(0,o.jsx)(t.h3,{id:"select-accounts",children:"Select Accounts"}),"\n",(0,o.jsx)(t.p,{children:'Select the account you would like to claim the tokens into and click the "Continue" button to\nproceed. Your screen should look something like this:'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"claim select dot account",src:n(53825).A+"",width:"1102",height:"301"})}),"\n",(0,o.jsx)(t.h4,{id:"select-account-on-ethereum",children:"Select Account on Ethereum"}),"\n",(0,o.jsx)(t.p,{children:'Paste the Ethereum address with the DOT allocation indicator tokens and click the "Continue" button\nto proceed.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"claim select eth account",src:n(21765).A+"",width:"1092",height:"453"})}),"\n",(0,o.jsx)(t.h3,{id:"sign-message-on-ethereum--claim",children:"Sign Message on Ethereum & Claim"}),"\n",(0,o.jsxs)(t.p,{children:['The hex-encoded string that follows the sentence "Pay DOT to the Polkadot account:" is the\nhex-encoded public key of your Polkadot account, minus the ',(0,o.jsx)(t.code,{children:"0x"})," prefix."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"claim copy msg",src:n(60894).A+"",width:"1107",height:"888"})}),"\n",(0,o.jsxs)(t.p,{children:["Go to\n",(0,o.jsx)(t.a,{href:"https://app.mycrypto.com/sign-message",children:'the "Sign & Verify Message" tab on the MyCrypto web application'}),'.\nMyCrypto is good to use if you have stored the key to the Ethereum account holding your DOT\nindicator tokens on a hardware device like a Ledger Nano. It also supports raw private keys,\nmnemonics, and the Polkadot Vault. After unlocking your Ethereum wallet, copy and paste the\noutputted sentence on the Polkadot-JS UI into the message box on the MyCrypto app. When you click\n"Sign Message" you will get a JSON output signature as shown below:']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"claim get signature",src:n(55860).A+"",width:"847",height:"673"})}),"\n",(0,o.jsx)(t.p,{children:'Copy and paste the JSON output of the signed message from MyCrypto into the input box on the\nPolkadot-JS UI and click "Confirm Claim."'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"claim paste signature",src:n(22145).A+"",width:"1933",height:"823"})}),"\n",(0,o.jsxs)(t.p,{children:["At this point, if you are eligible, you will see a success message if everything went right and your\ntokens will now be in the account that you claimed to. Congratulations! You can now participate in\naspects of the network such as ",(0,o.jsx)(t.a,{href:"/docs/learn-polkadot-opengov",children:"governance"})," and\n",(0,o.jsx)(t.a,{href:"/docs/learn-staking",children:"staking"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"verifying-your-claim",children:"Verifying your Claim"}),"\n",(0,o.jsx)(t.p,{children:"After you make an on-chain claim, your Your account balance should be updated immediately."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},67141:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(96540),a=n(74848);const s=function(e){var t,n=e.message,s=(0,o.useState)(!0),i=s[0],l=s[1];return(0,a.jsx)(a.Fragment,{children:i&&(0,a.jsxs)("div",{className:"message-box",children:[(0,a.jsx)("button",{className:"close-button",onClick:function(){l(!1)},children:"\u2716 "}),(0,a.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},60894:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/claim-copy-msg-9202762828ee9a331ef58dd563e555b5.png"},55860:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/claim-get-signature-654200548d6f5f1a374d9ccc9a164c67.png"},22145:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/claim-paste-signature-2f64e7c24774df3fede97597551cc9c1.png"},53825:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/claim-select-dot-account-a31d56bcfdb38d2783dd347b8e902e68.png"},21765:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/claim-select-eth-account-d1e003f87a8b53786a325ec5339a626d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(96540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);