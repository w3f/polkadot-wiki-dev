"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3944],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),h=n,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return o?a.createElement(m,i(i({ref:t},u),{},{components:o})):a.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6238:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),i=["components"],s={id:"learn-account-generation",title:"Account Generation",sidebar_label:"Account Generation",description:"Steps on generating a Polkadot account.",keywords:["account","account generation","polkadot account","polkadotjs"],slug:"../learn-account-generation"},c=void 0,l={unversionedId:"learn/learn-account-generation",id:"learn/learn-account-generation",title:"Account Generation",description:"Steps on generating a Polkadot account.",source:"@site/../docs/learn/learn-account-generation.md",sourceDirName:"learn",slug:"/learn-account-generation",permalink:"/docs/learn-account-generation",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-account-generation.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1669293804,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{id:"learn-account-generation",title:"Account Generation",sidebar_label:"Account Generation",description:"Steps on generating a Polkadot account.",keywords:["account","account generation","polkadot account","polkadotjs"],slug:"../learn-account-generation"},sidebar:"docs",previous:{title:"Polkadot Accounts",permalink:"/docs/learn-accounts"},next:{title:"Balances Transfers",permalink:"/docs/learn-balance-transfers"}},u={},p=[{value:"DISCLAIMER: Key Security",id:"disclaimer-key-security",level:2},{value:"Ways to Generate an Account",id:"ways-to-generate-an-account",level:2},{value:"Account Address Format",id:"account-address-format",level:3},{value:"Backing Up Accounts",id:"backing-up-accounts",level:3},{value:"Polkadot-JS Browser Extension",id:"polkadot-js-browser-extension",level:2},{value:"Reset Password using the Browser Extension",id:"reset-password-using-the-browser-extension",level:3},{value:"Restore Account on the Polkadot-JS Browser Extension",id:"restore-account-on-the-polkadot-js-browser-extension",level:3},{value:"Subkey",id:"subkey",level:2},{value:"Polkadot-JS UI",id:"polkadot-js-ui",level:2},{value:"Reset password using the Polkadot-JS UI",id:"reset-password-using-the-polkadot-js-ui",level:3},{value:"Restore Account on the Polkadot-JS UI",id:"restore-account-on-the-polkadot-js-ui",level:3},{value:"Parity Signer",id:"parity-signer",level:2},{value:"Restore Account on Parity Signer",id:"restore-account-on-parity-signer",level:3},{value:"Vanity Generator",id:"vanity-generator",level:2},{value:"Ledger Hardware Wallet",id:"ledger-hardware-wallet",level:2}],d={toc:p};function h(e){var t=e.components,s=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"disclaimer-key-security"},"DISCLAIMER: Key Security"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"only")," ways to get access to your account are via your secret seed or your account's JSON file\nin combination with a password. You must keep them both secure and private. If you share them with\nanyone they will have full access to your account, including all of your funds. This information is\na target for hackers and others with bad intentions - see also\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-scams"},"How to Recognize Scams"),"."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://youtube.com/embed/ARsdXZycJAg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"On this page, we recommend a variety of account generation methods that have various convenience and\nsecurity trade-offs. Please review this page carefully before making your account so that you\nunderstand the risks of the account generation method you choose and how to properly mitigate them\nin order to keep your funds safe.",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181874-how-to-store-your-mnemonic-phrase-and-backup-file-safely"},"this support article"),"\nfor more information about key security.")),(0,r.kt)("h2",{id:"ways-to-generate-an-account"},"Ways to Generate an Account"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://youtube.com/embed/DNU0p5G0Gqc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"most user-friendly")," way to create a Polkadot or Kusama address is through the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS UI"),". Remember to back up the seed phrase used\nto generate your account - the accounts are stored only in your browser, so purging the cache will\nwipe your accounts as well. You would then have to recreate them using the seed phrase given to you\nby the UI - this will also restore all your previously held balances."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"more convenient and recommended")," method of keeping the accounts stored on your computer is\nusing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/extension"},"Polkadot browser extension"),". This extension\nremembers your accounts and allows you to clear your browser cache without fear. Still, don't forget\nto back up your seed phrase - if you lose access to this computer or the extension somehow crashes\nbeyond repair, the phrase will come in handy."),(0,r.kt)("p",null,'Please note that as this keeps your accounts in the browser, it is not safe to keep significant\nholdings. By definition, a browser is a "hot wallet" and susceptible to a wide range of attacks, so\nkeep your funds in cold storage when dealing with non-trivial amounts. For improved security, you\ncan securely stash away the seed phrase for your accounts and remove all traces of the accounts from\nyour computer after creating them.'),(0,r.kt)("p",null,"Besides the extension and the default UI, Polkadot and Kusama addresses can also be created with the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/bin/utils/subkey"},"Subkey tool"),". Subkey is\nintended for users comfortable with using the command line and can seem intimidating but is quite\napproachable. Follow the instructions in the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"Subkey documentation"),". When used\nproperly, Subkey is the ",(0,r.kt)("strong",{parentName:"p"},"most secure")," available method of creating an account."),(0,r.kt)("p",null,"There is also the very secure ",(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/signer/"},"Parity Signer"),". This keeps your keys\non an air-gapped mobile phone. However, it does require obtaining an old Android or iOS-compatible\nphone that you are comfortable using only for Parity Signer."),(0,r.kt)("p",null,"Hardware wallet integration is possible with Ledger. A full guide is available\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-ledger"},"here"),"."),(0,r.kt)("p",null,"Alternatively, you might find other wallets on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-wallets"},"Wallet")," page, but\nbear in mind that some of these are ",(0,r.kt)("strong",{parentName:"p"},"unaudited")," and are not officially affiliated with Web3\nFoundation or the Polkadot project unless otherwise stated."),(0,r.kt)("admonition",{title:"How-to guides to generate an account",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See our Support Articles for more information about how to create an account using the tools below."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#polkadot-js-browser-extension"},"Polkadot-JS Browser Extension")," ",(0,r.kt)("strong",{parentName:"li"},"RECOMMENDED FOR MOST USERS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subkey"},"Subkey")," ",(0,r.kt)("strong",{parentName:"li"},"ADVANCED and MOST SECURE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#polkadot-js-apps"},"Polkadot-JS UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#parity-signer"},"Parity Signer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vanity-generator"},"Vanity Generator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ledger-hardware-wallet"},"Ledger Hardware Wallet")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you prefer video instructions for creating an account using Polkadot JS, see\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sy7lvAqyzkY"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial")),".")),(0,r.kt)("h3",{id:"account-address-format"},"Account Address Format"),(0,r.kt)("p",null,"An account created for Polkadot can also be used on multiple chains in the Polkadot ecosystem. More specifically, the account of a chain that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"*25519")," account address format (the latest list can be accessed on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json"},"ss58 registry repository"),") is cross-compatible with all the chains that use the similar format. To switch between the accounts on different chains, you can follow\nthe guidelines in\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000103707-can-i-use-the-same-account-on-polkadot-kusama-and-parachains-"},"this support article"),".\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.subscan.io/tools/format_transform"},"Subscan has a tool")," you can use to convert\nyour address between the different chain formats."),(0,r.kt)("admonition",{title:"Using the same account on multiple chains - Pros and Cons",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The address format differs from chain to chain, but that difference is only visual. The same private key can be used to sign transactions on behalf of the respective accounts on multiple chains. Using a single account on multiple chains is convenient, as you do not have to deal with multiple mnemonic phrases or private keys. But, if your account gets compromised on one chain, the attacker can gain full access to the accounts on all other chains. This also has implications for the account holder's privacy, as knowing the identity of an account on one chain can expose the account holder's identity on all the chains. In the Accounts tab, the Polkadot-JS UI displays a warning message next to each Account that you are using on multiple chains, and recommends to use different Accounts on different chains (see below)."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"warning multiple chains",src:o(2245).Z,width:"1103",height:"343"}))),(0,r.kt)("p",null,'On Polkadot-JS Extension, you can copy your address by clicking on the account\'s icon while the desired chain format is\nactive. E.g. selecting "Substrate" as the format will change your address, and clicking the colorful\nicon of your account will copy it in that format. While in Polkadot mode, that address format will\nbe copied, and so on.'),(0,r.kt)("h3",{id:"backing-up-accounts"},"Backing Up Accounts"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000177677-how-to-export-your-json-backup-file"},(0,r.kt)("strong",{parentName:"a"},"this support page")),"\nto know how to backup your account.")),(0,r.kt)("p",null,"Depending on what software you are using to access your account, there are various ways to back up\nand restore your account. It is a good idea to back your information up and keep it in a secure\nplace. Note that in order to recover an account, you should create your account according to the\ninstructions ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"here"),". In general, as long as you know how you created\nyour account, and have the seed phrase (",(0,r.kt)("a",{parentName:"p",href:"learn-accounts#portability"},"mnemonic phrase"),") or JSON file\n(and password) stored securely, you will be able to restore your account."),(0,r.kt)("h2",{id:"polkadot-js-browser-extension"},"Polkadot-JS Browser Extension"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For guidelines about how to create an account using Polkadot Extension, see\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000098878-how-to-create-a-dot-account"},(0,r.kt)("strong",{parentName:"a"},"this support article")),".")),(0,r.kt)("p",null,"The Polkadot-JS Browser Extension (simply referred to as Polkadot Extension) provides a reasonable\nbalance of security and usability. It provides a separate local mechanism to generate your address\nand interact with Polkadot."),(0,r.kt)("p",null,'This method involves installing the Polkadot Extension and using it as a \u201cvirtual vault," separate\nfrom your browser, to store your private keys. It also allows the signing of transactions and\nsimilar functionality.'),(0,r.kt)("p",null,"It is still running on the same computer you use to connect to the internet with and thus is less\nsecure than using Parity Signer or other air-gapped approaches."),(0,r.kt)("h3",{id:"reset-password-using-the-browser-extension"},"Reset Password using the Browser Extension"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=DNU0p5G0Gqc&t=280s"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to learn how to\nchange the password for an account that has been created on the Polkadot-JS browser extension (i.e.\nan injected account).")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Before following the instructions below make sure you have your mnemonic phrase stored in a safe\nplace accessible to you.")),(0,r.kt)("p",null,"Let's say you created ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT 1")," protected by password ",(0,r.kt)("inlineCode",{parentName:"p"},"PSW 1"),". To reset the password of your\n",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT 1")," using the browser extension you must follow the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the browser extension go to ",(0,r.kt)("inlineCode",{parentName:"li"},"ACCOUNT 1"),' and click "Forget account". This action will delete the\naccess to your account. Note that your tokens are still in your account on the polkadot blockchain\nnetwork.'),(0,r.kt)("li",{parentName:"ul"},'On the browser extension click the "+" button in the topright corner and select the option "Import\naccount from pre-existing seed". After entering the mnemonic phrase you can chose a new password\n',(0,r.kt)("inlineCode",{parentName:"li"},"PSW 2"),".")),(0,r.kt)("admonition",{title:"JSON files do not allow to change account passwords",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'If you add the account to the extension using the option "Restore account from backup JSON file",\nthis will allow you to restore access to your account using JSON file protected by the password\n',(0,r.kt)("inlineCode",{parentName:"p"},"PSW 1"),", but does not let you set a new password. Thus, ",(0,r.kt)("inlineCode",{parentName:"p"},"PSW 1")," will become the account password by\ndefault.")),(0,r.kt)("admonition",{title:"Accounts on Cold wallets do not need passwords",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For hardware wallets such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger"),", you may have to set a PIN for\naccessing the accounts on the device, but you do not need to set a password for every individual\naccount. When you need to make transactions with your account, you are required to sign using your\nLedger device. Also, Ledger wallets let you generate multiple accounts for multiple blockchain\nnetworks without having to set different passwords to access such accounts.")),(0,r.kt)("h3",{id:"restore-account-on-the-polkadot-js-browser-extension"},"Restore Account on the Polkadot-JS Browser Extension"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/9ohp8k4Hz8c"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169952-how-to-restore-your-account-in-the-polkadot-extension"},(0,r.kt)("strong",{parentName:"a"},"this support page")),"\nto learn how to restore your account on the Polkadot-JS UI.")),(0,r.kt)("h2",{id:"subkey"},"Subkey"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For guidelines about how to create an account using Subkey, see\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/SWfE_EwxgIU"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000180519-how-to-create-an-account-in-subkey"},(0,r.kt)("strong",{parentName:"a"},"this support article")),".")),(0,r.kt)("p",null,"Subkey is recommended for technically advanced users who are comfortable with the command line and\ncompiling Rust code. Subkey allows you to generate keys on any device that can compile the code.\nSubkey may also be useful for automated account generation using an air-gapped device. It is not\nrecommended for general users."),(0,r.kt)("h2",{id:"polkadot-js-ui"},"Polkadot-JS UI"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For guidelines about how to create an account using Polkadot-JS UI, see\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000180529"},(0,r.kt)("strong",{parentName:"a"},"this support article")),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you use this method to create your account and clear your cookies in your browser, your account\nwill be lost forever if you do not ",(0,r.kt)("a",{parentName:"p",href:"learn-account-restore.md"},"back it up"),". Make sure you store your\nseed phrase in a safe place, or download the account's JSON file if using the Polkadot{.js} browser\nextension. Learn more about account backup and restoration ",(0,r.kt)("a",{parentName:"p",href:"learn-account-restore.md"},"here"),".")),(0,r.kt)("p",null,"Using the Polkadot-JS user interface without the plugin is ",(0,r.kt)("strong",{parentName:"p"},"not recommended"),". It is the least\nsecure way of generating an account. It should only be used if all of the other methods are not\nfeasible in your situation."),(0,r.kt)("h3",{id:"reset-password-using-the-polkadot-js-ui"},"Reset password using the Polkadot-JS UI"),(0,r.kt)("p",null,'To reset the password of an account created with Polkadot-JS Apps UI you just need to go in the\n"Accounts" tab, click the icon with three vertical dots on your account and select "Change this\naccount\'s password".'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc?t=261"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to learn how to change the\npassword for an account that has been created on the Polkadot-JS UI (i.e. a non-injected account).")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you create an account first using Polkadot-JS Apps UI, and then add it to the browser extension,\nyou need to follow the\n",(0,r.kt)("a",{parentName:"p",href:"#reset-password-using-the-browser-extension"},"guidelines for the browser extension")," to change the\npassword of such account.")),(0,r.kt)("h3",{id:"restore-account-on-the-polkadot-js-ui"},"Restore Account on the Polkadot-JS UI"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/cBsZqFpBANY"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000180110-how-to-restore-your-account-in-polkadot-js-ui"},(0,r.kt)("strong",{parentName:"a"},"this support page")),"\nto learn how to restore your account on the Polkadot-JS UI.")),(0,r.kt)("h2",{id:"parity-signer"},"Parity Signer"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For guidelines about how to create an account using Parity Signer, see\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/hgv1R9mPEXw?t=120"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000180512-how-to-create-an-account-in-parity-signer"},(0,r.kt)("strong",{parentName:"a"},"this support article")),".")),(0,r.kt)("p",null,"Parity Signer is a secure way of storing your DOT on an air-gapped device. It is highly recommended\nthat you turn off wifi, cellular network, Bluetooth, NFC, and any other communications methods after\ninstalling it."),(0,r.kt)("h3",{id:"restore-account-on-parity-signer"},"Restore Account on Parity Signer"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/hgv1R9mPEXw?t=407"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000167901-how-to-restore-an-account-in-parity-signer"},(0,r.kt)("strong",{parentName:"a"},"this support page")),"\nto learn how to restore your account on the Polkadot-JS UI.")),(0,r.kt)("h2",{id:"vanity-generator"},"Vanity Generator"),(0,r.kt)("p",null,"The vanity generator is a tool on ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts/vanity"},"Polkadot-JS UI"),"\nthat lets you generate addresses that contain a specific substring. For the tutorial on how to\ncreate an account using Vanity Generator, visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000171416"},"this support article"),"."),(0,r.kt)("h2",{id:"ledger-hardware-wallet"},"Ledger Hardware Wallet"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use a Ledger hardware wallet to create your address and keep your tokens in cold storage, follow\nthe instructions on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-ledger"},"Ledger hardware wallet guide page"),".")))}h.isMDXComponent=!0},2245:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/warning-multichain-account-0719ff59691f3ff48562d92ef2295e84.png"}}]);