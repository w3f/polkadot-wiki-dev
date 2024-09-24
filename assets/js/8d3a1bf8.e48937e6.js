(self.webpackChunk=self.webpackChunk||[]).push([[5588],{50373:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(74848),o=n(28453),i=(n(47379),n(67141));const s={id:"learn-inflation",title:"Token Inflation",sidebar_label:"Token Inflation",description:"Explanation of Token's Inflation in the Polkadot Ecosystem.",keywords:["token","DOT","KSM","inflation"],slug:"../learn-inflation"},r=void 0,l={id:"learn/learn-inflation",title:"Token Inflation",description:"Explanation of Token's Inflation in the Polkadot Ecosystem.",source:"@site/../docs/learn/learn-inflation.md",sourceDirName:"learn",slug:"/learn-inflation",permalink:"/docs/learn-inflation",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-inflation.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726760224e3,frontMatter:{id:"learn-inflation",title:"Token Inflation",sidebar_label:"Token Inflation",description:"Explanation of Token's Inflation in the Polkadot Ecosystem.",keywords:["token","DOT","KSM","inflation"],slug:"../learn-inflation"},sidebar:"docs",previous:{title:"DOT",permalink:"/docs/learn-DOT"},next:{title:"Asset Hub",permalink:"/docs/learn-assets"}},d={},c=[{value:"Inflation Model",id:"inflation-model",level:2},{value:"Ideal Staking Rate",id:"ideal-staking-rate",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{message:"[A simpler inflation model modifiable by OpenGov and a reduction in DOT inflation are currently being discussed.](https://forum.polkadot.network/t/proposal-for-adjusting-polkadots-inflation-system-reducing-issuance-and-complexity/9157)"}),"\n",(0,a.jsxs)(t.p,{children:["DOT (and KSM) is an inflationary token. Inflation is\n",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/756ccc35e93d1a78e3c71a0e67ae4da5f1d09f69/runtime/polkadot/src/lib.rs#L576",children:"set to be 10% annually"}),"\non Polkadot (same on Kusama, see\n",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/756ccc35e93d1a78e3c71a0e67ae4da5f1d09f69/runtime/kusama/src/lib.rs#L535",children:"here"}),").\nDepending on the supply staked and the ideal staking rate (more about this below), part of the\ninflation is distributed to the stakers and part to the\n",(0,a.jsx)(t.a,{href:"/docs/learn-polkadot-opengov-treasury",children:"treasury"}),"."]}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.p,{children:["DOT went through ",(0,a.jsx)(t.a,{href:"/docs/learn/learn-redenomination",children:"redenomination"})," in 2020 that saw the DOT token\nsupply increase by 100 times."]}),(0,a.jsxs)(t.p,{children:["The current token supply can be seen ",(0,a.jsx)(t.a,{href:"/docs/chain-state-values#total-issuance",children:"here"}),"."]})]}),"\n",(0,a.jsxs)(t.p,{children:["It is essential to understand that the primary objective of inflation is to incentivize network\nparticipants through\n",(0,a.jsx)(t.a,{href:"/docs/learn-consensus#nominated-proof-of-stake",children:"Nominated Proof of Stake (NPoS)"})," and to grow the\nnetwork through funding the on-chain treasury. There is an opportunity cost of keeping the number of\ntokens idle with the current inflation model as the tokens get diluted over time. Economics and game\ntheory suggest that setting an ideal inflation rate is essential for incentivizing the network\nparticipants as well as the growth of the network, and any deviation from it can have adverse\neffects. Reducing the inflation rate could limit growth, while increasing the inflation rate could\nbreak the incentive model of the token. Hence, ",(0,a.jsxs)(t.strong,{children:["token inflation rate is not a forever fixed value,\nand inflation can be updated in the future through\n",(0,a.jsx)(t.a,{href:"/docs/learn-polkadot-opengov",children:"on-chain governance"})]})," based on thorough tokenomics research."]}),"\n",(0,a.jsx)(t.h2,{id:"inflation-model",children:"Inflation Model"}),"\n",(0,a.jsx)(t.p,{children:"The chart below shows the inflation model of the network. Depending on the number of staked tokens,\nthe distribution of the inflation to validators and nominators versus the treasury will change\ndynamically to provide incentives to participate (or not participate) in staking."}),"\n",(0,a.jsxs)(t.p,{children:["There is a ",(0,a.jsxs)(t.a,{href:"#ideal-staking-rate",children:["dynamic ",(0,a.jsx)(t.em,{children:"ideal staking rate"})]})," (in the figure set to 0.6 or 60%)\nthat the network tries to maintain. The inflation model will incentivize network participants to\nstake when the ",(0,a.jsx)(t.em,{children:"current staking rate"})," < ",(0,a.jsx)(t.em,{children:"ideal staking rate"})," and disincentivize staking when\n",(0,a.jsx)(t.em,{children:"current staking rate"})," > ",(0,a.jsx)(t.em,{children:"ideal staking rate"}),". The goal is to have the staking rate meet the ideal\nstaking rate. The current staking rate would be the total amount staked in the current era over the\ntotal token supply, where the total amount staked is the stake of all validators and nominators on\nthe network. The ideal staking rate accounts for having sufficient backing of tokens to prevent the\npossible compromise of security while keeping the native token liquid."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"staking",src:n(96991).A+"",width:"1089",height:"762"})}),"\n",(0,a.jsxs)("p",{style:{textAlign:"center"},children:["Source: ",(0,a.jsx)("a",{href:"https://research.web3.foundation/Polkadot/overview/token-economics",children:"Research - Web3 Foundation"})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"x-axis"}),": Proportion of staked tokens"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"y-axis"}),": Annualized percentage (inflation and staking rewards, see below)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Blue line"}),": Annual inflation rate diverted to NPoS, i.e., the total amount of tokens minted to\npay validators and nominators. For instance, 0.1 corresponds to 10% of token inflation diverted to\nstakers. Since annual token inflation is 10%, all inflation is used to pay validators and\nnominators, and 0% of token inflation is diverted to the treasury."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Green line"}),": Annual rewards rate for stakers. For instance, 0.2 corresponds to 20% of annual\nreturns on the staked tokens. You can determine the current annual staking rewards rate by looking\nat the top bar of the staking overview on\n",(0,a.jsx)(t.a,{href:"https://staking.polkadot.cloud/#/overview",children:"the Polkadot Staking Dashboard"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Assuming that the ideal staking rate is 60%, all of the inflation would go to the validators and\nnominators if 60% of all tokens are staked. Any deviation from the 60% - positive or negative -\nsends the proportional remainder to the treasury. Deviations from the ideal staking rate are\nreferred to as ",(0,a.jsx)(t.em,{children:"staking inefficiencies"}),". Thus, the treasury does not receive an inflow of funds from\ninflation when the system staking rate equals the ideal staking rate. See\n",(0,a.jsx)(t.a,{href:"/docs/learn-polkadot-opengov-treasury",children:"this page"})," for more information about treasury inflow\nsources."]}),"\n",(0,a.jsxs)(t.p,{children:["For those who are interested in knowing more about the design of the inflation model for the\nnetwork, please see ",(0,a.jsx)(t.a,{href:"https://research.web3.foundation/Polkadot/overview/token-economics",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"ideal-staking-rate",children:"Ideal Staking Rate"}),"\n",(0,a.jsxs)(t.p,{children:["The ideal staking rate can vary between 45% to 75% based on the number of parachains that acquired a\nlease through an auction (this excludes the System parachains), based on the implementation\n",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/cd901764a52edc04a6d22bea3a526def593ab2a7/polkadot/runtime/common/src/impls.rs#L80",children:"here"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Briefly, the ideal staking rate can be calculated as follows:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"0.75 - auction_proportion"})}),"\n",(0,a.jsxs)(t.p,{children:["where ",(0,a.jsx)(t.code,{children:"auction_proportion"})," is obtained by computing ",(0,a.jsx)(t.code,{children:"min(auctioned_slots, 60) / 300"}),". The\n",(0,a.jsx)(t.code,{children:"auctioned_slots"})," are all the auctioned slots without the slots for system parachains."]}),"\n",(0,a.jsxs)(t.p,{children:["Assuming there are 50 filled slots, of which three are dedicated to system parachains (Asset Hub,\nBridge Hub and Collectives), there are 47 auctioned slots. The ",(0,a.jsx)(t.code,{children:"auction_proportion"})," is thus\n",(0,a.jsx)(t.code,{children:"47 / 300 = 0.157"}),". The ideal staking rate is ",(0,a.jsx)(t.code,{children:"0.75 - 0.157 = 0.593"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"If the amount of tokens staked goes below 59.3%, then staking rewards for nominators increase,\nincentivizing them to stake more tokens on the network. On the contrary, staking rewards drop if\nstaked tokens exceed the ideal staking rate. This results from the change in the percentage of\nstaking rewards that go to the Treasury."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},67141:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var a=n(96540),o=n(74848);const i=function(e){var t,n=e.message,i=(0,a.useState)(!0),s=i[0],r=i[1];return(0,o.jsx)(o.Fragment,{children:s&&(0,o.jsxs)("div",{className:"message-box",children:[(0,o.jsx)("button",{className:"close-button",onClick:function(){r(!1)},children:"\u2716 "}),(0,o.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},47379:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var a=n(90675),o=n(10467),i=n(96540),s=n(69761),r=n(84393),l=n(11135);function d(e,t,n){return c.apply(this,arguments)}function c(){return(c=(0,o.A)((0,a.A)().mark((function e(t,n,o){var i,l,d,c,h;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return i="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return i="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==i){e.next=22;break}return e.abrupt("return");case 22:return d=new s.E(i),e.next=25,r.G.create({provider:d});case 25:c=e.sent,(h=n.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=h[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=c.toString(),e.abrupt("break",39);case 33:return e.next=35,c();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+h[0]+") in "+n);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,n);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,n=e.path,s=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,c=(0,i.useState)(""),p=c[0],u=c[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?h(s.toString(),l,t,u):u(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.A)((0,a.A)().mark((function e(){var o;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n,u);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?h(o,l,t,u):u(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(r){console.log(r)}}}),[]),p}},11135:e=>{var t="polkadot",n="kusama",a="statemine",o="statemint",i="polkadotpeople",s="kusamapeople",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,l,d){var c=void 0;if(l===t||l===o)c=3;else if(l===n||l===a||l===i)c=6;else{if(l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=8}e=parseFloat(e),d((e=Number.isInteger(e/r[l].precision)?e/r[l].precision+" "+r[l].symbol:(e/r[l].precision).toFixed(c)+" "+r[l].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,l){var d=void 0;if(l===t||l===o||l==i)d=1;else{if(l!==n&&l!==a&&l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=4}r((e/=d).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},96991:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/images/rewards-inflation-180df2fa3a0b109245394270a57f7aa2.png"},47790:()=>{}}]);