"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,y=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(y,r(r({ref:t},c),{},{components:n})):o.createElement(y,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83433:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,assets:()=>c,toc:()=>u,default:()=>h});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts",description:"Learn about account proxies and how they can benefit your account(s).",slug:"../learn-proxies"},l=void 0,p={unversionedId:"learn/learn-proxies",id:"learn/learn-proxies",title:"Proxy Accounts",description:"Learn about account proxies and how they can benefit your account(s).",source:"@site/../docs/learn/learn-proxies.md",sourceDirName:"learn",slug:"/learn-proxies",permalink:"/docs/learn-proxies",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-proxies.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1642181330,formattedLastUpdatedAt:"1/14/2022",frontMatter:{id:"learn-proxies",title:"Proxy Accounts",sidebar_label:"Proxy Accounts",description:"Learn about account proxies and how they can benefit your account(s).",slug:"../learn-proxies"},sidebar:"docs",previous:{title:"Staking",permalink:"/docs/learn-staking"},next:{title:"Availability and Validity",permalink:"/docs/learn-availability"}},c={},u=[{value:"Proxy Types",id:"proxy-types",level:2},{value:"Any Proxies",id:"any-proxies",level:3},{value:"Non-transfer Proxies",id:"non-transfer-proxies",level:3},{value:"Governance Proxies",id:"governance-proxies",level:3},{value:"Staking Proxies",id:"staking-proxies",level:3},{value:"Identity Judgement Proxies",id:"identity-judgement-proxies",level:3},{value:"Cancel Proxies",id:"cancel-proxies",level:3},{value:"Auction Proxies",id:"auction-proxies",level:3},{value:"Anonymous Proxies",id:"anonymous-proxies",level:3},{value:"Time Delayed Proxies",id:"time-delayed-proxies",level:3},{value:"Why use a Proxy?",id:"why-use-a-proxy",level:2},{value:"How to set up a Proxy",id:"how-to-set-up-a-proxy",level:2},{value:"Using the Polkadot-JS UI",id:"using-the-polkadot-js-ui",level:3},{value:"Creating Anonymous Proxies on Polkadot-JS UI",id:"creating-anonymous-proxies-on-polkadot-js-ui",level:3},{value:"Using Time Delayed Proxies",id:"using-time-delayed-proxies",level:3},{value:"Another way to create Proxies",id:"another-way-to-create-proxies",level:3},{value:"Removing Proxies",id:"removing-proxies",level:3},{value:"How to view your Proxies",id:"how-to-view-your-proxies",level:2},{value:"Putting It All Together",id:"putting-it-all-together",level:2},{value:"Proxy Deposits",id:"proxy-deposits",level:2}],d={toc:u};function h(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Polkadot provides a module that allows users to set proxy accounts to perform a limited number of\nactions on their behalf. Much like the Stash and Controller account relationship in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"staking"),", proxies allow users to keep one account in cold storage and actively\nparticipate in the network with the weight of the tokens in that account."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Check out our Polkadot YouTube video that explains\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=EuaM5dWAJis&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=29&ab_channel=Polkadot"},"what are proxies"),".")),(0,i.kt)("h2",{id:"proxy-types"},"Proxy Types"),(0,i.kt)("p",null,"You can set a proxy account via the Proxy module. When you set a proxy, you must choose a type of\nproxy for the relationship. Polkadot offers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any"),(0,i.kt)("li",{parentName:"ul"},"Non-transfer"),(0,i.kt)("li",{parentName:"ul"},"Governance"),(0,i.kt)("li",{parentName:"ul"},"Staking"),(0,i.kt)("li",{parentName:"ul"},"Identity Judgement"),(0,i.kt)("li",{parentName:"ul"},"Auction")),(0,i.kt)("p",null,"When a proxy account makes a ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy")," transaction, Polkadot filters the desired transaction to ensure\nthat the proxy account has the appropriate permission to make that transaction on behalf of the cold\naccount."),(0,i.kt)("h3",{id:"any-proxies"},"Any Proxies"),(0,i.kt)("p",null,'As implied by the name, a proxy type of "Any" allows the proxy account to make any transaction,\nincluding balance transfers. In most cases, this should be avoided as the proxy account is used more\nfrequently than the cold account and is therefore less secure.'),(0,i.kt)("h3",{id:"non-transfer-proxies"},"Non-transfer Proxies"),(0,i.kt)("p",null,'Proxies that are of the type "Non-transfer" are accounts that allow any type of transaction except\nbalance transfers (including vested transfers).'),(0,i.kt)("h3",{id:"governance-proxies"},"Governance Proxies"),(0,i.kt)("p",null,'The "Governance" type will allow proxies to make transactions related to governance (i.e., from the\nDemocracy, Council, Treasury, Technical Committee, and Elections pallets).'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy#governance-proxies"},"Governance")," for more information on\ngovernance proxies or watch our\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=q5qLFhG4SDw&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=27&ab_channel=Polkadot"},"technical explainer video that explores this concept"),".")),(0,i.kt)("h3",{id:"staking-proxies"},"Staking Proxies"),(0,i.kt)("p",null,'The "Staking" type allows staking-related transactions, but do not confuse a staking proxy with the\nController account. Within the Staking pallet, some transactions must come from the Stash, while\nothers must come from the Controller. The Stash account is meant to stay in cold storage, while the\nController account makes day-to-day transactions like setting session keys or deciding which\nvalidators to nominate. The Stash account still needs to make some transactions, though, like\nbonding extra funds or designating a new Controller. A proxy doesn\'t change the ',(0,i.kt)("em",{parentName:"p"},"roles")," of Stash and\nController accounts, but does allow the Stash to be accessed even less frequently."),(0,i.kt)("h3",{id:"identity-judgement-proxies"},"Identity Judgement Proxies"),(0,i.kt)("p",null,'"Identity Judgement" proxies are in charge of allowing registrars to make judgement on an account\'s\nidentity. If you are unfamiliar with judgements and identities on chain, please refer to\n',(0,i.kt)("a",{parentName:"p",href:"/docs/learn-identity#judgements"},"this page"),"."),(0,i.kt)("h3",{id:"cancel-proxies"},"Cancel Proxies"),(0,i.kt)("p",null,'Proxies that are of the type "Cancel" allow accounts to reject and remove any time-delay proxy\nannouncements.'),(0,i.kt)("h3",{id:"auction-proxies"},"Auction Proxies"),(0,i.kt)("p",null,'Proxies that are of the type "Auction" are accounts that allow transactions pertaining to parachain\nauctions and crowdloans. The Auction proxy account can sign those transactions on behalf of an account\nin cold storage. If you already setup a "Non-transfer" proxy account, it can do everything an "Auction"\nproxy can do. Before participating in a crowdloan using an Auction proxy, it is recommended that you\ncheck with the respective parachain team for any possible issues pertaining to the crowdloan rewards\ndistribution. '),(0,i.kt)("h3",{id:"anonymous-proxies"},"Anonymous Proxies"),(0,i.kt)("p",null,"Polkadot includes a function to create an anonymous proxy, an account that can only be accessed via\nproxy. That is, it generates an address but no corresponding private key. Normally, a primary\naccount designates a proxy account, but anonymous proxies are the opposite. The account that creates\nthe proxy relationship is the proxy account and the new account is the primary. Use extreme care\nwith anonymous proxies; once you remove the proxy relationship, the account will be inaccessible."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Learn more about anonymous proxies from our\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iWq53zXo7dw&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=28&ab_channel=Polkadot"},"technical explainer video"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"anonymous proxy",src:n(88525).Z,width:"2102",height:"728"})),(0,i.kt)("h3",{id:"time-delayed-proxies"},"Time Delayed Proxies"),(0,i.kt)("p",null,"We can add an additional layer of security to proxies by giving them a delay time. The delay will be\nquantified in number of blocks (blockNumber). Polkadot and Kusama both have\n6 second blocks, hence a delay value of 10 will mean 10 blocks which\nwill equal 1 minute of delay. The proxy will announce it's intended action and wait for the number\nof blocks defined in the delay time before executing it. The proxy will include the hash of the\nintended function call in the announcement. Within this time window, the intended action may be\ncancelled by accounts that control the proxy. Now we can use proxies knowing that any malicious\nactions can be noticed and reverted within a delay period."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please be advised:")," Polkadot-JS Apps UI cannot handle complicated proxy setups. (e.g. a proxy -> multisig\n-> an anonymous proxy which is part of another multisig). These complex setups must be done using the\nextrinsics tab directly."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"These complex proxy setups should only be performed if you are comfortable enough interacting directly with\nthe chain, as you will be unable to sign extrinsics using the UI.")),(0,i.kt)("h2",{id:"why-use-a-proxy"},"Why use a Proxy?"),(0,i.kt)("p",null,"Proxies are great to use for specific purposes because they add in a layer of security. Rather than\nusing funds in one sole account, smaller accounts with unique roles complete tasks for the main\nstash account. This drives attention away from the main account and to proxies."),(0,i.kt)("p",null,"Anonymous proxies, in particular, can be used for permissionless management. In this example below,\nthere is a multisig with four different accounts inside. Two of the accounts, Alice and Bob, have an\nanonymous proxy attached to them. In the case that the multisig account wanted to add or remove\nAlice or Bob or even add in a new account into the anonymous proxy, the anonymous proxy would take\ncare of that change. If a multisig wanted to modify itself without an anonymous proxy, a whole new\nmultisig would be created."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"anonymous multisig proxy",src:n(31463).Z,width:"2182",height:"1202"})),(0,i.kt)("h2",{id:"how-to-set-up-a-proxy"},"How to set up a Proxy"),(0,i.kt)("h3",{id:"using-the-polkadot-js-ui"},"Using the Polkadot-JS UI"),(0,i.kt)("p",null,"To set up a proxy, navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Polkadot-JS UI"),' and\nclick on "Developer" > "Extrinsics". Here we will see a page that looks similar to this:'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"proxy generation",src:n(14942).Z,width:"2880",height:"1052"})),(0,i.kt)("p",null,'To add a proxy, click on the pallet selection dropdown menu. The dropdown is labeled "submit the\nfollowing extrinsic". Select the ',(0,i.kt)("inlineCode",{parentName:"p"},"proxy")," pallet, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"addProxy")," extrinsic (in the dropdown menu\nnext to it). The ",(0,i.kt)("inlineCode",{parentName:"p"},"addProxy(proxy, proxy_type)")," function will need to be selected in order to add in\na proxy. The chosen proxy account that you set will be the account that has the proxy on it. The\nselected account at the top is the account that will be the primary account."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: If you see an ",(0,i.kt)("inlineCode",{parentName:"p"},"unused")," option when adding in a proxy, this is not a proxy type. This is an\nempty ",(0,i.kt)("inlineCode",{parentName:"p"},"enum"),", and if you try to add this in as a proxy, nothing will happen. No new proxy will be\ncreated.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It is critical to setup Anonymous Proxies with appropriate permissions and be aware of potential dangers")),(0,i.kt)("h3",{id:"creating-anonymous-proxies-on-polkadot-js-ui"},"Creating Anonymous Proxies on Polkadot-JS UI"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: The first anonymous proxy you add should always be of ",(0,i.kt)("em",{parentName:"p"},"type")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Any"),".\nAlso, if there are multiple anonymous proxies for the proxied account, you should keep at least  ",(0,i.kt)("em",{parentName:"p"},"one")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Any"),"\ntype.\nWithout having an ",(0,i.kt)("inlineCode",{parentName:"p"},"Any")," type proxy, you won't be able to send funds, add new proxies, kill the\nanonymous proxy or take any action not specifically allowed by the types of the proxies the\naccount has.")),(0,i.kt)("p",null,"For anonymous proxies, a different function will need to be called, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"anonymous(proxy_type, index)"),". This will let you select which kind of anonymous proxy you would\nlike to set up if you choose, as well as the index."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"proxy generation",src:n(97797).Z,width:"2878",height:"956"})),(0,i.kt)("h3",{id:"using-time-delayed-proxies"},"Using Time Delayed Proxies"),(0,i.kt)("p",null,"When creating a proxy through the PolkadotJS application, we are provided a delay field. In this\nexample we are creating a proxy with a delay value of 100, which means 100 blocks. 100 ","*"," 6(minutes)\n= 600 minutes, or 10 hours."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"creating a time delayed proxy",src:n(27962).Z,width:"2874",height:"1314"})),(0,i.kt)("h3",{id:"another-way-to-create-proxies"},"Another way to create Proxies"),(0,i.kt)("p",null,'There is another way you can set up a proxy on Polkadot-JS UI. Go to "Accounts" in the navigation\nand then click the "Accounts" button. For each of the accounts you have on this page, the three dot\nbutton will let you create a proxy by using "Add proxy". This will open up a pop up onto your screen\nwhere you will be able to select the type of proxy for that specific account.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"proxy generation part 2",src:n(55114).Z,width:"2184",height:"798"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: You cannot create an anonymous function from the Accounts page, you must be on the\nExtrinsics page.")),(0,i.kt)("h3",{id:"removing-proxies"},"Removing Proxies"),(0,i.kt)("p",null,"If you want to remove a proxy, there are a few functions on the extrinsic page that will help do\nthis."),(0,i.kt)("p",null,"For non-anonymous proxies, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"removeProxy")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"removeProxies"),", but must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"killAnonymous")," function for anonymous proxies. This must be called ",(0,i.kt)("strong",{parentName:"p"},"from")," the ",(0,i.kt)("em",{parentName:"p"},"anonymous")," proxy. This means that the anonymous proxy must be added as an account to Polkadot-JS accounts."),(0,i.kt)("p",null,"The following steps can be used to remove your proxy:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"WARNING: there is no way to get access to the proxy after deleting it.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 0"),": You need to know the following information:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"account")," you created the anonymous proxy from"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type of proxy"),", index (almost always 0)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"block height")," it was created at"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"extrinsic index"),' in the block (on most block explorers, you will see the extrinsic ID listed as something along the lines of "9000-2" -> 9000 is the block height (block number) and 2 is the extrinsic index. You can find this information by looking up your account in a block explorer.')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"anon proxy info",src:n(88288).Z,width:"1832",height:"718"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1"),": Go to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"https://polkadot.js.org/apps/#/accounts")," (make sure you are on correct network).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Proxied")," and add your address, name it ",(0,i.kt)("inlineCode",{parentName:"p"},"ANON PROXY"),". You should now see this address\nin accounts. Now you need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"killAnonymous")," from the anonymous proxy. It is important to note that anonymous proxies ",(0,i.kt)("em",{parentName:"p"},"work backwards"),"; the original account acts as the proxy."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"add proxy to delete",src:n(89411).Z,width:"2168",height:"570"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3"),": Go to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"https://polkadot.js.org/apps/#/extrinsics"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4"),": Call extrinsic ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy.killAnonymous")," using the selected account ANON PROXY and the following parameters:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Spawner: (original account)"),(0,i.kt)("li",{parentName:"ul"},"Proxy type (kind of proxy)"),(0,i.kt)("li",{parentName:"ul"},"Index 0 (almost always, but can be seen in creating extrinsic)"),(0,i.kt)("li",{parentName:"ul"},"Block number x"),(0,i.kt)("li",{parentName:"ul"},"Extrinsic index y")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"call extrinsic",src:n(47810).Z,width:"2788",height:"1216"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 5"),": Submit and sign extrinsic"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"sign extrinsic",src:n(47810).Z,width:"2788",height:"1216"})))),(0,i.kt)("h2",{id:"how-to-view-your-proxies"},"How to view your Proxies"),(0,i.kt)("p",null,'To view your proxy, head over to the Chain State (underneath "Developer") page on\n',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate"},"Polkadot-JS Apps"),". If\nyou've created your proxy on a Kusama account, it is required to change your network accordingly\nusing the top left navigation button. On this page, the proxy pallet should be selected, returning\nthe announcements and proxies functions. The proxies function will allow you to see your created\nproxies for either one account or for all accounts (using the toggle will enable this). Proxy\nannouncements are what time lock proxies do to announce they are going to conduct an action."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"view proxies",src:n(42273).Z,width:"2880",height:"708"})),(0,i.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,i.kt)("p",null,"If the idea of proxy types and their application seems abstract, it is. Here is an example of how\nyou might use these accounts. Imagine you have one account as your primary token-holding account,\nand don't want to access it very often, but you do want to participate in governance and staking.\nYou could set Governance and Staking proxies."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"proxies",src:n(64817).Z,width:"2030",height:"828"})),(0,i.kt)("p",null,"In this example, the primary account A would only make two transactions to set account B as its\ngovernance proxy and account C as its staking proxy. Now, account B could participate in governance\nactivity on behalf of A."),(0,i.kt)("p",null,"Likewise, account C could perform actions typically associated with a stash account, like bonding\nfunds and setting a Controller, in this case account D. Actions that normally require the Stash,\nlike bonding extra tokens or setting a new Controller, can all be handled by its proxy account C. In\nthe case that account C is compromised, it doesn't have access to transfer-related transactions, so\nthe primary account could just set a new proxy to replace it."),(0,i.kt)("p",null,"By creating multiple accounts that act for a single account, it lets you come up with more granular\nsecurity practices around how you protect private keys while still being able to actively\nparticipate in a network."),(0,i.kt)("h2",{id:"proxy-deposits"},"Proxy Deposits"),(0,i.kt)("p",null,"Proxies require deposits in the native currency (i.e. DOT or KSM) in order to be created. The\ndeposit is required because adding a proxy requires some storage space on-chain, which must be\nreplicated across every peer in the network. Due to the costly nature of this, these functions could\nopen up the network to a Denial-of-Service attack. In order to defend against this attack, proxies\nrequire a deposit to be reserved while the storage space is consumed over the life time of the\nproxy. When the proxy is removed, so is the storage space, and therefore the deposit is returned."),(0,i.kt)("p",null,"The deposits are calculated in the runtime, and the function can be found in the runtime code. For\nexample, the deposits are calculated in Polkadot with the following functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// One storage item; key size 32, value size 8; .\npub const ProxyDepositBase: Balance = deposit(1, 8);\n// Additional storage item size of 33 bytes.\npub const ProxyDepositFactor: Balance = deposit(0, 33);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyDepositBase")," is the required amount to be reserved for an account to have a proxy list\n(creates one new item in storage). For every proxy the account has, an additional amount defined by\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyDepositFactor")," is reserved as well (appends 33 bytes to storage location)."),(0,i.kt)("p",null,"On Polkadot the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyDepositBase")," is 20.008 and the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyDepositFactor")," is\n0.033."),(0,i.kt)("p",null,"So what this boils down to is that the required deposit amount for one proxy on Polkadot is equal to\n(in DOT):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"20.008 + 0.033 * num_proxies\n")))}h.isMDXComponent=!0},88288:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kill-proxy-1-8274fe3883aa7d8f42473dc89eae2fab.png"},89411:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kill-proxy-2-db6c545b04378352b97320b19b022165.png"},47810:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kill-proxy-3-9fc147340cbd7a8da97d9e5f763328fb.png"},31463:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/multisig_proxy_diagram-94c4da090dc2d8bf9787fd9ea25b2109.png"},55114:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_add_another_proxy-267c2644c7a78704899f26095f515f83.png"},97797:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_anon_proxy-e1b923310ed862d35f2ae1c224f7d383.png"},14942:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_generating_proxy-17fa829dc930ca4b5742fda11a25bd91.png"},42273:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_view_proxies-b136067580a258208b105b05da441ee7.png"},88525:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/proxy_anonymous_diagram-b539913fb66a972847a9b038e043e7a0.png"},64817:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/regular_proxy_diagram-6558bb6be6ff1c749cf9fde1f0d30ff5.png"},27962:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/time_delay_proxy_screenshot-d190c202463d15ba3454b4324304930a.png"}}]);