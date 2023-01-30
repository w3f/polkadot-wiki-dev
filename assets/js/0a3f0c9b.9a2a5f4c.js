"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7837],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),h=a,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},83388:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],l={id:"ledger",title:"Using the Polkadot Ledger Application",sidebar_label:"Ledger Application",description:"How to use the Polkadot application on Ledger.",keywords:["ledger","staking","polkadot app"],slug:"../learn-ledger"},s=void 0,d={unversionedId:"general/ledger",id:"general/ledger",title:"Using the Polkadot Ledger Application",description:"How to use the Polkadot application on Ledger.",source:"@site/../docs/general/ledger.md",sourceDirName:"general",slug:"/learn-ledger",permalink:"/docs/learn-ledger",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/ledger.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1671632943,formattedLastUpdatedAt:"Dec 21, 2022",frontMatter:{id:"ledger",title:"Using the Polkadot Ledger Application",sidebar_label:"Ledger Application",description:"How to use the Polkadot application on Ledger.",keywords:["ledger","staking","polkadot app"],slug:"../learn-ledger"},sidebar:"docs",previous:{title:"Wallets",permalink:"/docs/wallets"},next:{title:"Community",permalink:"/docs/community"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Using Ledger Live",id:"using-ledger-live",level:2},{value:"Using on Polkadot-JS Apps",id:"using-on-polkadot-js-apps",level:2},{value:"Loading Your Account",id:"loading-your-account",level:3},{value:"Derivation paths",id:"derivation-paths",level:4},{value:"Connecting your ledger device",id:"connecting-your-ledger-device",level:4},{value:"Confirming the Address on your Device",id:"confirming-the-address-on-your-device",level:3},{value:"Checking the Balance of Your Account",id:"checking-the-balance-of-your-account",level:3},{value:"Sending a Transfer",id:"sending-a-transfer",level:3},{value:"Receiving a Transfer",id:"receiving-a-transfer",level:3},{value:"Staking",id:"staking",level:3},{value:"Removing Expired Democracy Locks",id:"removing-expired-democracy-locks",level:3},{value:"Ledger Developer Release",id:"ledger-developer-release",level:2},{value:"Why you might need the Developer Release",id:"why-you-might-need-the-developer-release",level:3},{value:"Install the Developer Release",id:"install-the-developer-release",level:3}],u={toc:c};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Because of required WebUSB support, Ledger wallets currently only work on Chromium-based browsers\nlike Brave and Chrome.")),(0,r.kt)("admonition",{title:"Ledger does not currently support batch transactions",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Ledger does not currently support batch calls; As a consequence, if you stake using the\n",(0,r.kt)("a",{parentName:"p",href:"https://staking.polkadot.network/#/overview"},"staking dashboard"),", you must use a hot wallet.\nAlternatively, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI")," that allows\nfor single calls (i.e., bonding and nominating).")),(0,r.kt)("p",null,"The Polkadot ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," application is compatible with both the Ledger Nano S\nand the Ledger Nano X devices. Ledger devices are hardware wallets that keep your secret key secured\non a physical device that does not expose it to your computer or the internet. That is, even if you\nconnect your nano via USB to your computer, the private keys will not be leaked. Ledger devices are\nalso hierarchical deterministic wallets (HD wallets), that is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Deterministic")," means that there is only one seed phrase to generate all the accounts for\ndifferent blockchain networks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Hierarchical")," means that the accounts are generated in a tree-like structure for different\npurposes.")),(0,r.kt)("p",null,"Ledger devices can be equipped with applications that are blockchain-specific. Such applications are\nusually developed by third parties and they enable the user to transact securely on the blockchain\nnetwork. The Polkadot Ledger application allows you to manage Polkadot's native token, DOT. It\nsupports most of the transaction types of the network, including batch transactions from the Utility\npallet."),(0,r.kt)("admonition",{title:"Ledger apps may not support all the transactions",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"Ledger Polkadot App")," specification for the list of\ntransactions supported. It could be possible that some transactions are supported only on a specific\nversion of the app and some transactions are not supported at all by any version. For instance, the\nstaking ",(0,r.kt)("inlineCode",{parentName:"p"},"rebag")," extrinsic is supported on the XL version but not on the light version. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"setIdentity")," extrinsic is not supported by any of the app versions.")),(0,r.kt)("p",null,"If you have trouble using Ledger or following the directions below, you can try searching for your\nissue on the ",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/"},"Polkadot support pages"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Here is a list of what you will need before using Polkadot with Ledger:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Ledger Nano X or Nano S plus (recommended for Polkadot Ledger App space requirements). The\nLedger Nano S has limited memory and is no longer produced."),(0,r.kt)("li",{parentName:"ul"},'The latest firmware of the Polkadot Ledger App installed (always check for updates in Ledger Live\nunder the "Manager" tab, you will need to allow access with your nano).'),(0,r.kt)("li",{parentName:"ul"},"Ledger Live is installed and at version 2.1 or newer (see settings -> about to find out if you're\nup to date)."),(0,r.kt)("li",{parentName:"ul"},"A Chromium-based web browser is installed that you can use to access the\n",(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/"},"Polkadot-JS UI"),".")),(0,r.kt)("h2",{id:"using-ledger-live"},"Using Ledger Live"),(0,r.kt)("p",null,"Check\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175822-how-to-use-polkadot-and-stake-with-ledger-live"},"this support article"),"\nto learn how to use Polkadot with ledger live."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ledger Live will only show the main account with BIP44 path 44'/354'/0'/0'/0'. This means that if\nyou create a ",(0,r.kt)("a",{parentName:"p",href:"#using-on-polkadot-js-apps"},"derived account using Polkadot JS")," with a derivation path\n44'/354'/0'/0'/1', it will not be displayed on the Ledger Live App. As a consequence it is not\npossible to transact with derived accounts using the Ledger Live App, but it is possible to do so\nusing Polkadot JS. For more information about derived accounts and derivation paths check\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts"},"the accounts page"),".")),(0,r.kt)("h2",{id:"using-on-polkadot-js-apps"},"Using on Polkadot-JS Apps"),(0,r.kt)("h3",{id:"loading-your-account"},"Loading Your Account"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ledger Live should be off while using Ledger with Polkadot-JS UI as it can interfere with normal\noperation.")),(0,r.kt)("p",null,"You can import your Ledger account to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot Extension")," or to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),". For instructions on how to import\nLedger accounts to the Polkadot Extension read through\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175387-how-to-add-your-ledger-through-the-polkadot-extension"},"this support article"),",\nwhile if you want to import Ledger accounts to the Polkadot JS UI you can consult\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170812-how-to-add-ledger-account-through-the-polkadot-js-ui"},"this other article"),"."),(0,r.kt)("h4",{id:"derivation-paths"},"Derivation paths"),(0,r.kt)("p",null,"When adding a Ledger account using the extension or the UI, you will be asked to select an\n",(0,r.kt)("inlineCode",{parentName:"p"},"account type")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"account index"),". The first lets you select an account, while the second lets\nyou pick a derivation path from that account - think of it like a formula from which child accounts\nare generated. When you are creating a Polkadot ledger account for the first time on Ledger Live\nwith name ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 1"),", this can be added to Polkadot JS using the 0/0 derivation path (i.e. account\ntype = 0 and account index = 0). If then you add a second account called ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 2"),", this will\ncorrespond to the 1/0 derivation path, and so on. We thus have multiple parent accounts that can be\nviewed and used in both Ledger Live and Polkadot JS. Additionally, we can use Polkadot-JS UI to\ncreated multiple children accounts from each parent account. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 1")," with 0/0\nderivation path can have child 0/1, 0/2, etc. that can be used within the UI. However, such children\naccounts cannot be used in Ledger Live, as it only scans through the parent accounts. So, keep in\nmind that the balances on the children accounts cannot be viewed, and you will not be able to\ntransact with those accounts on Ledger Live."),(0,r.kt)("h4",{id:"connecting-your-ledger-device"},"Connecting your ledger device"),(0,r.kt)("p",null,"While using a ledger device to sign transactions, depending on your browser and its security\nsettings, you might need to confirm the USB connection through a popup like the one below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Display the device connection popup",src:o(30536).Z,width:"468",height:"461"})),(0,r.kt)("p",null,'If you are adding your Ledger Nano for the first time, click on the "Unknown device" line and the\n"Connect" button will become available.'),(0,r.kt)("admonition",{title:"Signature error message",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you already connected your device but an error message appears before signing a transaction, make\nsure you have opened the Polkadot application on your Ledger Nano device. Visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support page")," for\nmore information about signing transactions using your ledger.")),(0,r.kt)("h3",{id:"confirming-the-address-on-your-device"},"Confirming the Address on your Device"),(0,r.kt)("p",null,"To display your Polkadot ledger account address on your Ledger Nano you can follow the guidelines on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181854-how-to-confirm-your-account-address-on-your-ledger-device"},"this support article"),".\nHere you can scroll through and make sure the address matches to what is displayed on\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,r.kt)("h3",{id:"checking-the-balance-of-your-account"},"Checking the Balance of Your Account"),(0,r.kt)("p",null,"There are a few methods to check the balance of your account. Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169332-where-can-i-see-the-balance-of-my-account-"},"this support article"),"\nfor information."),(0,r.kt)("h3",{id:"sending-a-transfer"},"Sending a Transfer"),(0,r.kt)("p",null,"General instructions to send a transfer can be found on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui"},"this support page"),".\nTo sign transactions with your Ledger nano check\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support article"),"."),(0,r.kt)("h3",{id:"receiving-a-transfer"},"Receiving a Transfer"),(0,r.kt)("p",null,"In order to receive a transfer on the accounts stored on your Ledger device, you will need to\nprovide the sender (i.e. the payer) with your address. To do so follow the instructions on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181866-how-to-receive-dot-to-my-account-on-polkadot-js-ui"},"this support page"),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Before giving anyone your address, make sure it matches what's really on the Ledger by\n",(0,r.kt)("a",{parentName:"p",href:"#confirming-the-address-on-your-device"},"confirming the address on your device"),". Some malware will\nintercept clicks and clipboard requests and can change your copied value in-flight, so being extra\nvigilant around copy-paste operations makes sense.")),(0,r.kt)("h3",{id:"staking"},"Staking"),(0,r.kt)("p",null,'For staking using Ledger devices check the section "How to stake using your Ledger" on\n',(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168057-how-do-i-stake-nominate-on-polkadot-"},"this support article"),"."),(0,r.kt)("h3",{id:"removing-expired-democracy-locks"},"Removing Expired Democracy Locks"),(0,r.kt)("p",null,"Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181870-how-to-remove-expired-democracy-locks"},"this support page"),"\nthe learn how to remove democracy locks after the end of a Governance referendum."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please be advised"),": Despite the Polkadot ledger application being compatible with both the Ledger\nNano S and the Ledger Nano X, none of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Democracy"),"\nextrinsics are available in the light version. The following\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"repository by Zondax")," lists the currently supported\nDemocracy extrinsics on the full ledger."),(0,r.kt)("h2",{id:"ledger-developer-release"},"Ledger Developer Release"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This section is for developers only. It is recommended to install the application from Ledger Live\nunless you ",(0,r.kt)("em",{parentName:"p"},"know exactly what you're doing"),".")),(0,r.kt)("h3",{id:"why-you-might-need-the-developer-release"},"Why you might need the Developer Release"),(0,r.kt)("p",null,"Ledger apps for the Polkadot and Kusama ecosystems are developed by ",(0,r.kt)("a",{parentName:"p",href:"https://zondax.ch/"},"Zondax"),".\nWhen new functionalities are added to the Ledger apps, they are made available on a developer\nrelease for testing purposes. After a successful audit and review, the apps would be available for\ndownload and installation using ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"Ledger Live"),'. As it takes some\ntime for Ledger to audit and review the release, the app upgrade option may not be available on\nLedger Live when the new runtime is deployed on the network. If this happens, users cannot use\nLedger devices with the Polkadot-JS UI, and while signing for a transaction, they will most likely\nincur the error message "txn version not supported". Please do not panic if this happens, as there\nare solutions to this problem. If you cannot wait a couple of days until the app passes the Ledger\naudit, you can install the developer release from the shell using the latest version published on\n',(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot/releases"},"the Zondax GitHub repository"),"."),(0,r.kt)("h3",{id:"install-the-developer-release"},"Install the Developer Release"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/4SyVQrlXZ_Q"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to learn how to install the developer\nrelease of your ledger app.")),(0,r.kt)("p",null,"To install the developer version make sure you have the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," version and follow the steps\nbelow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("em",{parentName:"li"},"ledgerblue")," running the command ",(0,r.kt)("inlineCode",{parentName:"li"},"python3 -m pip install ledgerblue"),"."),(0,r.kt)("li",{parentName:"ul"},"Download the developer release from the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Zondax/ledger-polkadot/releases"},"Zondax GitHub repository"),". The file will be\nnamed ",(0,r.kt)("inlineCode",{parentName:"li"},"installer_nanos_plus.sh"),"or something similar depending on the ledger device you are using."),(0,r.kt)("li",{parentName:"ul"},"Locate the downloaded shell script and make it executable in your shell by typing the command\n",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x installer_nanos_plus.sh"),"."),(0,r.kt)("li",{parentName:"ul"},"You can now use the ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh --help")," command to visualize the available options\n(see below)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dev Ledger Help Menu",src:o(95932).Z,width:"525",height:"54"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next attach your Ledger Nano (in this case Nano S Plus) to your computer, enter the PIN code and\nrun the command ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh load"),'. Scroll with the right button until you see\n"Allow unsafe manager", left and right press to confirm. You will be asked to confirm the action\nof uninstalling the app, and subsequently installing the newer version. After confirming both\nactions the shell script will proceed to install the version on your device. You will need to\ninsert the PIN code to use the device after the installation.'),(0,r.kt)("li",{parentName:"ul"},"If you wish to revert the version back to stable release just go to Ledger Live, the app will\nautomatically detect the developer release and give the option to install the previous stable\nrelease.")))}h.isMDXComponent=!0},95932:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ledger-help-menu-3af6592c7bc1830644f7ca9d55005cf4.png"},30536:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/query-device-d7d9e7e7d28a34a343c59094db864a1a.png"}}]);