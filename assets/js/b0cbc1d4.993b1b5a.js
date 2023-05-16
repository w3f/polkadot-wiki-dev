(self.webpackChunk=self.webpackChunk||[]).push([[3667],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(74165),o=a(15861),i=a(67294),r=a(92519),s=a(71947),l=a(67425);function d(e,t,a){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var i,l,d,h,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return d=new r.U(i),e.next=21,s.G.create({provider:d});case 21:h=e.sent,(p=a.split(".")).forEach((function(e){e in h&&(h=h[e])})),e.t1=p[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=h.toString(),e.abrupt("break",35);case 29:return e.next=31,h();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"percentage":(0,l.Percentage)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,a=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,h=(0,i.useState)(""),u=h[0],c=h[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?p(r.toString(),l,t,c):c(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,a,c);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?p(o,l,t,c):c(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),u}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var o=void 0;if("polkadot"===a||"statemint"===a)o=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(o)+" "+t[a].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},14374:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(47940),s=["components"],l={id:"staking-dashboard",title:"Polkadot Staking Dashboard",sidebar_label:"Staking Dashboard",description:"Everything about the Polkadot Staking Dashboard",keywords:["ledger","staking","polkadot","dashboard"],slug:"../staking-dashboard"},d=void 0,h={unversionedId:"general/staking-dashboard",id:"general/staking-dashboard",title:"Polkadot Staking Dashboard",description:"Everything about the Polkadot Staking Dashboard",source:"@site/../docs/general/staking-dashboard.md",sourceDirName:"general",slug:"/staking-dashboard",permalink:"/docs/staking-dashboard",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/staking-dashboard.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1683193239,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{id:"staking-dashboard",title:"Polkadot Staking Dashboard",sidebar_label:"Staking Dashboard",description:"Everything about the Polkadot Staking Dashboard",keywords:["ledger","staking","polkadot","dashboard"],slug:"../staking-dashboard"},sidebar:"docs",previous:{title:"Polkadot-JS UI",permalink:"/docs/polkadotjs-ui"},next:{title:"Polkadot-JS",permalink:"/docs/polkadotjs"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Stake",id:"stake",level:2},{value:"Pools",id:"pools",level:3},{value:"Nominate",id:"nominate",level:3},{value:"Payouts",id:"payouts",level:3},{value:"After Staking",id:"after-staking",level:3},{value:"Validators",id:"validators",level:2},{value:"Support",id:"support",level:2},{value:"Network",id:"network",level:2}],c={toc:u},m="wrapper";function k(e){var t=e.components,l=(0,o.Z)(e,s);return(0,i.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Preliminary Notes",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://staking.polkadot.network/#/overview"},"Polkadot Staking Dashboard")," supports\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies"},(0,i.kt)("strong",{parentName:"a"},"proxy accounts")),". You can set your stash to controller with one click\nand import your ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced#staking-proxies"},"staking proxy")," (for nominators)\nor ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies#non-transfer-proxy"},"non-transfer proxy")," (for nomination pool admins\nand members)."),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://staking.polkadot.network/#/overview"},"Polkadot Staking Dashboard")," also has ",(0,i.kt)("strong",{parentName:"p"},"native\n",(0,i.kt)("a",{parentName:"strong",href:"/docs/ledger"},"Ledger")," support"),", meaning that you do not need an extension or a wallet to use it;\nyou just need your Ledger device. ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-extrinsics#metadata-updates"},"Metadata updates"),"\nare thus not necessary, as you only need to keep your Ledger apps up-to-date."),(0,i.kt)("p",{parentName:"admonition"},"Before using the dashboard, make sure you have a\nPolkadot account in a Ledger device with the\nPolkadot Ledger app installed, or a browser\nextension such as the ",(0,i.kt)("a",{parentName:"p",href:"/docs/polkadotjs#polkadot-js-extension"},"Polkadot-JS Extension")," or\n",(0,i.kt)("a",{parentName:"p",href:"/docs/wallets#browser-extensions"},"other third-party extensions")," with a funded\nPolkadot account."),(0,i.kt)("p",{parentName:"admonition"},"On top of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"existential deposit"),", you\nneed some free balance to pay for ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-transaction-fees"},"transaction fees")," and the\nminimum amount to place your nominations (only for nominators, currently\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(r.Z,{network:"polkadot",path:"query.staking.minNominatorBond",defaultValue:25e11,filter:"humanReadable",mdxType:"RPC"})),"",")\nor join a nomination pool (only for pool members, currently\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.minJoinBond",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"})),"",").\nFor more information about staking on Polkadot\nvisit the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"staking page")," and the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced"},"advanced staking page"),".")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://staking.polkadot.network/#/overview"},"Polkadot Staking Dashboard")," is a tool only\ndedicated to ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"staking")," on Polkadot,\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-kusama"},"Kusama")," (Polkadot's canary network) and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-networks#westend-test-network"},"Westend")," (Polkadot's test network)."),(0,i.kt)("p",null,"The dashboard is not a wallet, meaning that you cannot transfer funds between accounts. To fund\naccounts, you can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/wallets"},"third-party wallets")," or the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/polkadotjs-ui"},"Polkadot-JS UI"),". You can participate in staking by being a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator"},"nominator")," or a member of a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool"),". Once you have a funded account, you need to\nconnect it to the dashboard (connect button on the top-right corner), this will allow you to\ninteract with Polkadot's native staking."),(0,i.kt)("admonition",{title:"The dashboard is a Web3 dApp",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The dashboard is a decentralized application (dApp), and to login you do not need to sign up with an\nemail and password but just need an account created on the supported non-custodial wallets. Any\ntransaction to be submitted needs to be signed by you. Also, if you use light clients, which are\nresistant to censorship, you interact trustlessly with the network without intermediaries. Welcome\nto the world of true Web3!")),(0,i.kt)("p",null,"Note the pictures on this page refer to Kusama, but the same applies to Polkadot and Westend.\nThe structure of this page follows the sidebar of the staking dashboard. Here you will learn about\nthe main features of the dashboard. If you need more information, see the\n",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/hvXLc4H7rA4"},"Walkthrough Tutorial"),"."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("admonition",{title:"Staking Dashboard Walk-through video tutorial",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/hvXLc4H7rA4"},"This video tutorial")," shows you everything you can do with the Staking\nDashboard.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dashboard overview",src:a(49083).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,"This page of the dashboard has six main panels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Section A: The Sidebar")," shows which page you are on (in this case, the Overview). It will also\nshow the role you currently have in staking (in this case, active in both ",(0,i.kt)("a",{parentName:"p",href:"#pools"},"Pools")," and\n",(0,i.kt)("a",{parentName:"p",href:"#nominate"},"Nominate"),"). You can also change the ",(0,i.kt)("a",{parentName:"p",href:"#network"},"network")," (currently on Kusama).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Section B: The Accounts Panel")," allows you to connect one account to the dashboard. Once\nconnected, the account will appear next to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accounts")," button. You can see it here if you are\nactive as a nominator and/or a pool member. In this case, the account KSM Stash is a nominator\n(with no controller) and a member of the pool Insight Finance. Controller accounts are also shown\nhere if applicable. Note that the dashboard will automatically fetch the stash or the controller\nas a read-only account if you connect one or the other."))),(0,i.kt)("p",null,"Note that Sections A and B will always be visible while you use the dashboard."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Section C: The Stats Panel")," shows the general view of current staking metrics, including the\nhistorical reward rate (including after\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced#inflation"},"inflation"),"), the supply staked and time remaining\nin the current era.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Section D: The Summary Panel")," shows your current situation and gives you general tips about\nstaking. In this case, the KSM Stash account is a nominator and a pool member, and by clicking on\n",(0,i.kt)("inlineCode",{parentName:"p"},"Manage >")," you can go directly to the ",(0,i.kt)("a",{parentName:"p",href:"#nominate"},"Nominate")," and ",(0,i.kt)("a",{parentName:"p",href:"#pools"},"Pools")," pages,\nrespectively. You can take actions such as changing staking preferences, bonding more funds, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Section E: The Balance Panel"),' shows the bonded amount distinguishing between "Nominating", "In\na Pool", and "Not Staking". The amount that is not staking is further divided into "Free" (a\nbalance that can be transferred) and "Reserve" (a balance that is needed the keep the account\non-chain, see ',(0,i.kt)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"existential deposit"),").\nIn this case, 0.301 KSM are bonded for nominating, 0.3 KSM are bonded in a pool, and 0.145 KSM are\nnot used for staking. Of the non-staking balance, 0.144 KSM are free while\n",(0,i.kt)(r.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:333e6,filter:"humanReadable",mdxType:"RPC"}),"\nare reserved for the existential deposit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Section F: The Recent Payouts Panel")," shows a bar chart with the rewards paid out to you in the\npast 15 days either as a nominator or a pool member (manually claimed). Note how the 4th of April\nbar has the tip that is not filled with color. This is to show a pending payout (for nominators\nonly). Below the bar chart is a line chart showing the 10-day moving average."))),(0,i.kt)("p",null,"Additional statistics can be found at the bottom of the overview page."),(0,i.kt)("admonition",{title:"Pool funds are in system accounts",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Remember that funds bonded in a pool are transferred to the pool's system account, which can only be\naccessed by the protocol, and not by any individual user. Some wallets might not display the balance\nbonded in pools, but the dashboard will always show it.")),(0,i.kt)("h2",{id:"stake"},"Stake"),(0,i.kt)("p",null,"In this category, you can access all functionalities allowing you to stake your tokens as a\nnominator, member of a nomination pool, or both. The payout section will enable you to inspect the\nmost recently received rewards."),(0,i.kt)("h3",{id:"pools"},"Pools"),(0,i.kt)("admonition",{title:"Joining a Nomination Pool - Walk-through video tutorial",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/dDIG7QAApig"},"This video tutorial")," shows you how to join a nomination pool with the\nStaking Dashboard.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dashboard pools",src:a(86214).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,"This page of the dashboard has four main panels (Sidebar and Accounts Panels excluded):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Section A: The Stats Panel")," shows the number of active pools and the minimum number of tokens\nneeded to join a pool and/or create one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Section B: The Balance Panel")," shows the number of tokens bonded in pools and those that are\nfree. In this case, we have 0.3 KSM bonded and 0.144 KSM free. In this panel, you can bond more\nfunds (",(0,i.kt)("inlineCode",{parentName:"li"},"+")," button) or unbond some funds (",(0,i.kt)("inlineCode",{parentName:"li"},"-")," button). Unbonding will withdraw unclaimed rewards\nand funds will be locked for 28 eras\n(28 days). Once the 28 eras have passed, you\ncan unlock the locked funds (button with a lock icon) that will be available as a free balance.")),(0,i.kt)("admonition",{title:"No fast unstake and pool swap for pool members",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that the option to fast unstake is only available to nominators. Also, to change pool, you\ncannot simply swap memberships. You will need to unbond and go through the whole unbonding period.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Section C: The Pool Panel")," shows the pool id where you have membership (in this case, Pool 82),\nthe pool name, and next to it, a ",(0,i.kt)("inlineCode",{parentName:"li"},"Leave")," button to unbond all the funds in the pool. You can see\nany unclaimed rewards in the middle of the panel. You can claim and bond the rewards (",(0,i.kt)("inlineCode",{parentName:"li"},"+ Bond"),"\nbutton) or withdraw them as a free balance (",(0,i.kt)("inlineCode",{parentName:"li"},"Withdraw"),' button). In this case, there are\napproximately 0.0012 KSM that can be claimed. You can see the Pool Status at the bottom of the\npanel, currently set to "Nominating and Earning Rewards".')),(0,i.kt)("admonition",{title:"Pool members must claim their rewards; nobody will do it for them",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For pool members, rewards must be manually claimed. This is different from being a nominator where\nusually, one nominator or the specific validator can trigger a payout for all nominators.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Section D: The Pool Nominations Panel")," shows the nominations of the pool you are currently in,\nhighlighting the validator that is active and will pay rewards to the pool at the end of the era\n(in this case ",(0,i.kt)("inlineCode",{parentName:"li"},"ParaNodes.io/11"),").")),(0,i.kt)("p",null,"If you scroll down the page, there are two additional panels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Roles")," showing the accounts of the pool's Depositor, Root, Nominator, and State Toggler. The\nsame account can cover all the roles."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pool Stats")," showing the Pool State (either Active, Closed, or Destroying), Pool Members (number\nof members in the pool), and Total Bonded (total number of bonded tokens).")),(0,i.kt)("p",null,"The Pools page is divided into four parts: the Overview is basically what we talked about until now,\nthe Members section will show all accounts of the pool members, the All Pools section will show all\npools (you can filter Active, Locked, and Destroying pools), and the Favorites section shows all\npools that you liked (you can like a pool in the All Pools section by clicking on the heart icons)."),(0,i.kt)("h3",{id:"nominate"},"Nominate"),(0,i.kt)("admonition",{title:"Walk-through video tutorial of How to Nominate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/F59N3YKYCRs"},"This video tutorial")," shows you how to become a nominator with the\nStaking Dashboard.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dashboard nominate",src:a(99289).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,"This page of the dashboard has four main panels (Sidebar and Accounts Panels excluded):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Section A: The Stats Panel")," shows the number of active nominators, the minimum number of tokens\nto nominate (currently",(0,i.kt)(r.Z,{network:"kusama",path:"query.staking.minNominatorBond",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),") and the minimum active bond (currently",(0,i.kt)(r.Z,{network:"kusama",path:"query.staking.minimumActiveStake",defaultValue:2937e9,filter:"humanReadable",mdxType:"RPC"}),"). The system keeps 12500 nomination intents and puts them into the [bags list](/docs/learn-staking-advanced#bags-list). The fact that active nominators are not 12500 is because there are nominators that have no active validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Section B: The Balance Panel")," shows the number of tokens bonded in nominations and those that\nare free. In this case, we have 0.301 KSM bonded and 0.144 KSM free. In this panel, you can bond\nmore funds (",(0,i.kt)("inlineCode",{parentName:"li"},"+")," button) or unbond some funds (",(0,i.kt)("inlineCode",{parentName:"li"},"-")," button). Unbonding will withdraw unclaimed\nrewards and funds will be locked for 28 eras\n(28 days). Once the 28 eras have passed, you\ncan unlock the locked funds (button with a lock icon) that will be available as a free balance.")),(0,i.kt)("admonition",{title:"Fast unstake",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If your account did not receive rewards in the past 28 eras, you will be eligible for fast unstake.\nThe dashboard will automatically check this for you and prompt a banner.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Section C: The Nominator Panel"),' shows the current status of the nominator, currently set to\n"Nominating and Earning Rewards", and next to it, the ',(0,i.kt)("inlineCode",{parentName:"li"},"Unstake"),' button allows you to unstake the\nwhole bonded amount and stop nominating. In the middle of the panel, the payout destination is\ncurrently set to "Compounding" (i.e. rewards are added to the bonded funds). The ',(0,i.kt)("inlineCode",{parentName:"li"},"Update"),' button\nwill allow you to change the destination to "To Your Account" (to the stash account as a free\nbalance), "To Another Account" (an account that is not the stash or controller), "To Controller\nAccount" or "None" (no payout destination). The bottom part of the panel shows the controller\naccount, currently set to KSM Stash (the stash is also the controller). The ',(0,i.kt)("inlineCode",{parentName:"li"},"Change")," button allows\nyou to set a controller."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Section D: The Nominations panel")," shows your nominations and allows you to stop all nomination\nwith the ",(0,i.kt)("inlineCode",{parentName:"li"},"Stop")," button or to select specific validators (",(0,i.kt)("inlineCode",{parentName:"li"},"Select")," button) and stop nominating only\nthose.")),(0,i.kt)("h3",{id:"payouts"},"Payouts"),(0,i.kt)("p",null,"This page is an expanded version of Panel F on the ",(0,i.kt)("a",{parentName:"p",href:"#overview"},"Overview")," page. It also shows all\nvalidators and/or nomination pools that paid out rewards to your accounts in the past few months."),(0,i.kt)("h3",{id:"after-staking"},"After Staking"),(0,i.kt)("admonition",{title:"Walk-through video tutorial - What to do after Staking",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/F59N3YKYCRs"},"This video tutorial")," shows you how to what you can do after staking\nwith the Staking Dashboard.")),(0,i.kt)("h2",{id:"validators"},"Validators"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dashboard nominate",src:a(72258).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,"This page of the dashboard has two main panels (Sidebar and Accounts Panels excluded):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Panel A: The Stats Panel")," shows the total number of active validators, all validators currently\nregistered (active and inactive), and average commission across all validators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Panel B: The Validators Panel")," shows all validators. You can order them by low/high commission\nor apply the following filters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Include only active validators"),(0,i.kt)("li",{parentName:"ul"},"Exclude validators that are oversubscribed, have 100% commission, blocked nominations, and have\nmissing identity.")))),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"The Support pages are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Resources page provides a glossary with main definitions and links to support pages."),(0,i.kt)("li",{parentName:"ul"},"The Feedback page can be used to send feedback through\n",(0,i.kt)("a",{parentName:"li",href:"https://polkadot-staking-dashboard.canny.io/feedback"},"Canny.io"),". This can be a bug report or a\nfeature request. We take your feedback seriously, do not hesitate to contact us.")),(0,i.kt)("h2",{id:"network"},"Network"),(0,i.kt)("p",null,"Under Network, you can connect to either Polkadot, Kusama, or Westend through public RPC nodes or\nlight clients for a true Web3 experience. For more information about light clients, see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-substrate#replacing-rpc-node-reliance-with-light-clients"},"this page"),"."))}k.isMDXComponent=!0},99289:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-nominate-7b882e41a42abeb928b78a6d6db4a6f0.png"},49083:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-overview-755861fe5937455f21a9360334fc26ea.png"},86214:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-pools-b7327a1bbe115970fe683b0350c7bb6e.png"},72258:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-validators-a90166e01dcd1072c9a3be81a439afbb.png"},46601:()=>{}}]);