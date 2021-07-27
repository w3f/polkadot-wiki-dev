(self.webpackChunk=self.webpackChunk||[]).push([[5784],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?o.createElement(k,r(r({ref:t},u),{},{components:a})):o.createElement(k,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},56174:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>p});var o=a(22122),n=a(19756),s=(a(67294),a(3905)),r=["components"],i={id:"kusama-claims",title:"Kusama Claims",sidebar_label:"Claims"},l=void 0,c={unversionedId:"kusama-claims",id:"kusama-claims",isDocsHomePage:!1,title:"Kusama Claims",description:"The Kusama network is Polkadot's experimental, community-focused R&D network. If you held the DOT",source:"@site/../docs/kusama-claims.md",sourceDirName:".",slug:"/kusama-claims",permalink:"/zh-CN/docs/kusama-claims",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/kusama-claims.md",version:"current",lastUpdatedBy:"Dan Shields",lastUpdatedAt:1627414559,formattedLastUpdatedAt:"2021/7/27",frontMatter:{id:"kusama-claims",title:"Kusama Claims",sidebar_label:"Claims"}},u=[{value:"Step 1. Create a Kusama account",id:"step-1-create-a-kusama-account",children:[{value:"Using Kusama Ledger application",id:"using-kusama-ledger-application",children:[]},{value:"Using Polkadot{.js} extension (Chrome/Brave or Firefox)",id:"using-polkadotjs-extension-chromebrave-or-firefox",children:[]},{value:"Using Subkey",id:"using-subkey",children:[]},{value:"Using Polkadot-JS UI",id:"using-polkadot-js-ui",children:[]},{value:"Using Polkawallet",id:"using-polkawallet",children:[]},{value:"Kusama from Substrate address",id:"kusama-from-substrate-address",children:[]}]},{value:"Step 2. Get KSM tokens",id:"step-2-get-ksm-tokens",children:[{value:"DOT Holders",id:"dot-holders",children:[]},{value:"Third Party Claims Processes",id:"third-party-claims-processes",children:[]}]}],d={toc:u};function p(e){var t=e.components,i=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Kusama network is Polkadot's experimental, community-focused R&D network. If you held the DOT\nindicator token at the time of the genesis block of Kusama, you are entitled to claim an equivalent\namount of KSM on the Kusama network."),(0,s.kt)("p",null,"You can claim KSM by signing a message with the Ethereum account that holds your DOT indicator\ntokens. There is no deadline for claiming KSM."),(0,s.kt)("h2",{id:"step-1-create-a-kusama-account"},"Step 1. Create a Kusama account"),(0,s.kt)("p",null,"You will need to generate a Kusama account to claim KSM. There are a few ways you can create one."),(0,s.kt)("p",null,"For most users, we recommend using the\n",(0,s.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en"},"Polkadot{.js} browser extension"),"\nsince it will allow you to store your encrypted keystore locally."),(0,s.kt)("p",null,"In terms of hardware wallet support, you can use the ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/kusama-ledger"},"Kusama Ledger application"),",\nor ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-account-generation#parity-signer"},"Parity Signer"),"."),(0,s.kt)("p",null,"Another option you may consider using is the Subkey command line utility, which will allow you to\ntake extra steps to protect the security of your key."),(0,s.kt)("p",null,"There are a variety of other wallets that you can use; see the\n",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/build-wallets"},"Polkadot Wiki Wallets page"),". Many of these wallets support generating Kusama\naccounts as well."),(0,s.kt)("h3",{id:"using-kusama-ledger-application"},"Using Kusama Ledger application"),(0,s.kt)("p",null,"Please follow the instructions for ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/kusama-ledger"},"installing the Kusama Ledger application")," and\nthen proceed to step 2 below."),(0,s.kt)("h3",{id:"using-polkadotjs-extension-chromebrave-or-firefox"},"Using Polkadot{.js} extension (Chrome/Brave or Firefox)"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install the Polkadot{.js} extension from the\n",(0,s.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en"},"Chrome store"),"\nor ",(0,s.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/"},"Firefox store"),"."),(0,s.kt)("li",{parentName:"ol"},'Click on the settings button to change the network to "Kusama (canary)". ',(0,s.kt)("img",{src:a(67027).Z,style:{marginLeft:"70px",width:"50%"}})),(0,s.kt)("li",{parentName:"ol"},'Create a new account by clicking on "Create new account (root or derived)". ',(0,s.kt)("img",{src:a(85468).Z,style:{marginLeft:"70px",width:"50%"}})),(0,s.kt)("li",{parentName:"ol"},"Uncheck the option to create an account dervied from another seed. ",(0,s.kt)("img",{src:a(83370).Z,style:{marginLeft:"70px",width:"50%"}})),(0,s.kt)("li",{parentName:"ol"},"Copy the seed phrase and store it somewhere safe. Don't share the seed phrase with anyone, you\ncan use it to access your account if you forget your password or want to import your account\nagain. ",(0,s.kt)("img",{src:a(18756).Z,style:{marginLeft:"70px",width:"50%"}})),(0,s.kt)("li",{parentName:"ol"},"Enter a name for the account and type a strong password (at least 6 characters). ",(0,s.kt)("img",{src:a(63748).Z,style:{marginLeft:"70px",width:"50%"}})),(0,s.kt)("li",{parentName:"ol"},'Click on "Add the account with the generated seed".'),(0,s.kt)("li",{parentName:"ol"},"You can copy the account's address to the clipboard by clicking on its identicon.")),(0,s.kt)("h3",{id:"using-subkey"},"Using Subkey"),(0,s.kt)("h4",{id:"installation"},"Installation"),(0,s.kt)("p",null,"You can install Subkey with this one-line command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cargo install --force --git https://github.com/paritytech/substrate subkey\n")),(0,s.kt)("p",null,"Note that you will already have had to install the proper Rust version and dependencies. If you have\nnot done so, or experience problems installing using that command, run the following commands first,\nand then re-try the previous command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl https://sh.rustup.rs -sSf | sh\n\nrustup update nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\nrustup update stable\ncargo install --git https://github.com/alexcrichton/wasm-gc\n")),(0,s.kt)("p",null,"Alternatively, you can build Subkey from the source code."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Follow the build instructions for\n",(0,s.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/getting-started"},"Substrate"),"."),(0,s.kt)("li",{parentName:"ol"},"When building, only build Subkey by typing ",(0,s.kt)("inlineCode",{parentName:"li"},"cargo build -p subkey"),"."),(0,s.kt)("li",{parentName:"ol"},"The executable is ",(0,s.kt)("inlineCode",{parentName:"li"},"./target/debug/subkey"),".")),(0,s.kt)("h4",{id:"usage"},"Usage"),(0,s.kt)("p",null,"You can use Subkey on a computer that is not connected to the internet for added security."),(0,s.kt)("p",null,"The command ",(0,s.kt)("inlineCode",{parentName:"p"},"subkey --network kusama generate")," will generate a new key-pair. If you want to be more\nsecure, use 24 words, ",(0,s.kt)("inlineCode",{parentName:"p"},"subkey --network kusama generate --words 24"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ subkey --network kusama generate\nSecret phrase `lobster flock few equip connect boost excuse glass machine find wonder tattoo` is account:\n  Secret seed: 0x95b90eb1344e3aea40f4a6dc81622901a2ac39efb331c41db10c311bb9b46927\n  Public key (hex): 0xfe7fce341ff73e1db537daa4cc8c539997a8b0654b06cb81c47e4f067f55a65a\n  Address (SS58): JL1eTcbzuZP99FjeySkDrMygNREPdbhRyV7iD5AsV4fDRcg\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Address (SS58)")," field is what you should use to claim your KSM tokens. Never share your\n",(0,s.kt)("inlineCode",{parentName:"p"},"Secret phrase")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Secret seed"),", as these can both control your funds."),(0,s.kt)("p",null,"NOTE: Previous versions of Subkey only generated Substrate addresses. If you do not want to generate\na new seed, you can convert the Substrate address to a Kusama address by following\n",(0,s.kt)("a",{parentName:"p",href:"#kusama-from-substrate-address"},"this section"),"."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey"},"Subkey documentation")," or\nenter ",(0,s.kt)("inlineCode",{parentName:"p"},"subkey --help")," for more usage examples."),(0,s.kt)("h3",{id:"using-polkadot-js-ui"},"Using Polkadot-JS UI"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Open up the ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),' and navigate to the top left corner of\nthe navigation. This will open up a panel of network options to select from. Select on "Kusama",\neither from Parity or Web3 Foundation, then "Switch".')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Navigate to the ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS UI Accounts Tab"),' and click\non the "Add account" button.'))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"kusama add account",src:a(48866).Z})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Enter a name for your account and create a secure password. This password will be used to decrypt\nyour account. The required text fields to complete are highlighted in pink.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"kusama create account",src:a(75069).Z})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Ignore the advanced options unless you want to change the type of cryptography used for your keys\n(we recommend "Schnorrkel (sr25519)"). You will have to enter an Account Name and a password to\nprotect your account. Be sure to select a secure and hard-to-guess password. Note that anything\nwill be accepted as a password here. Please note: There are no checks to see if it is long enough\nor secure. You will need this password for any future interaction with or transaction from this\naccount.')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Click "Save" and "Create and backup account".'))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"kusama save backup",src:a(28613).Z})),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Save your encrypted keystore locally. Ideally, you would also save it on an external hard drive\nor thumb drive, or print it out and be able to re-enter it later. You should not store it in\ncloud storage, email it to yourself, etc. You can use this backup file to restore your account.\nThe seed in the backup file is not readable unless it is decrypted with the password.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The account now appears in your Accounts tab and is backed up to the keystore you just saved.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click on the DOT identicon to copy the address to the clipboard.\n",(0,s.kt)("img",{alt:"kusama copy address",src:a(9035).Z})))),(0,s.kt)("h3",{id:"using-polkawallet"},"Using Polkawallet"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Install ",(0,s.kt)("a",{parentName:"p",href:"https://polkawallet.io"},"Polkawallet"),'. Click "Download" and select the link corresponding\nto the platform you are using. On Android you may need to allow installing apps from external\nsources. On iOS, you may need to "trust" Polkawallet in the "General > Profiles & Device\nManagement > Enterprise App" section before running the app.')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Once the app is open, copy the seed phrase and store it in a safe place. Don't share the seed\nphrase with anyone, you can use it to access your account if you forget your password or\notherwise lose your keystore."))),(0,s.kt)("img",{src:a(35417).Z,width:"50%"}),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Name your account and make a strong password, make sure to write it down in another place, then\nclick "Save".')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"You will be asked to confirm your seed phrase - this is to make sure you have copied it somewhere\nsafe.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Click on the pink QR Code symbol and select "Copy address" to copy your address to clipboard.'))),(0,s.kt)("img",{src:a(87087).Z,width:"50%"})," ",(0,s.kt)("img",{src:a(79079).Z,width:"50%"}),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#kusama-from-substrate-address"},"Get the Kusama address from the Substrate address."))),(0,s.kt)("h3",{id:"kusama-from-substrate-address"},"Kusama from Substrate address"),(0,s.kt)("p",null,"If you used one of the generation methods that gave you a generic Substrate address (begins with a\n",(0,s.kt)("inlineCode",{parentName:"p"},"5"),"), then you will need to take an extra step to turn this into the properly encoded Kusama\naddress."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Copy your Substrate generic address to the clipboard."),(0,s.kt)("li",{parentName:"ol"},"Go to the ",(0,s.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),"."),(0,s.kt)("li",{parentName:"ol"},'Go to the "Settings" tab and find the configuration for "address network prefix".'),(0,s.kt)("li",{parentName:"ol"},'Select "Substrate (development)" and click "Save and reload".'),(0,s.kt)("li",{parentName:"ol"},'Go to the "Address book" and click the "Add contact" button.'),(0,s.kt)("li",{parentName:"ol"},'Enter your address and give it a name like "My Address".'),(0,s.kt)("li",{parentName:"ol"},'Go back to the "Settings" tab and select the "Kusama (canary)" option in "address network prefix"\nand click "Save and reload".'),(0,s.kt)("li",{parentName:"ol"},'Go back to the "Address book" and find the account you just added (it will have the same name).'),(0,s.kt)("li",{parentName:"ol"},"The address is now formatted as a Kusama address.")),(0,s.kt)("h2",{id:"step-2-get-ksm-tokens"},"Step 2. Get KSM tokens"),(0,s.kt)("p",null,"There are two methods to claim KSM."),(0,s.kt)("h3",{id:"dot-holders"},"DOT Holders"),(0,s.kt)("p",null,"Those who participated in the Polkadot sales before 2020 and have been allocated DOT indicator\ntokens on Ethereum can claim a proportional amount of KSM on the Kusama Network."),(0,s.kt)("p",null,"To do this you must sign a message containing the address of your Kusama account. You can do this by\nusing the Polkadot-JS UI\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/claims"},"Claims app"),". Ensure\nthat you are connected to the Kusama network (displayed in the upper-left hand corner of the\nscreen). If you are not, change the network to Kusama by clicking in the network change tab in the\nupper left-hand corner.."),(0,s.kt)("h4",{id:"generate-a-kusama-address"},"Generate a Kusama address"),(0,s.kt)("p",null,"If you haven't already done so, you will need to generate a Kusama address. See\n",(0,s.kt)("a",{parentName:"p",href:"kusama-claims#step-1-create-a-kusama-account"},"step 1 above")," for detailed instructions first."),(0,s.kt)("h4",{id:"claiming-your-ksm-with-mycrypto"},"Claiming your KSM with MyCrypto"),(0,s.kt)("p",null,"The Polkadot-JS ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/claims"},"Claims app")," helps you sign a message from\nMyCrypto. MyCrypto is good to use in case you have stored the key to the Ethereum account holding\nyour DOT indicator tokens on a hardware device like a Ledger Nano S or a Trezor. It also supports\nraw private keys, mnemonics and the Parity signer."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"NOTICE"),": It is much more secure to download and use the MyCrypto app locally. Please make sure\nto download the latest version for your operating system. You can always find the most up-to-date\nreleases of the desktop app on their\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MyCryptoHQ/MyCrypto/releases"},"releases page"),".")),(0,s.kt)("p",null,'Once you\'ve downloaded MyCrypto and have it running locally (we recommend an air-gapped computer for\nmaximum security), you can start by navigating to the Claims app on the Polkadot-JS UI. Select the\naccount you would like to claim the KSM into and click the blue "Continue" button to proceed. Your\nscreen should look something like this:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Claim Step 1",src:a(99303).Z})),(0,s.kt)("p",null,'The hex encoded string that follows the sentence: "Pay KSM to the Kusama account:" is the\nhex-encoded public key of your Kusama account, minus the ',(0,s.kt)("inlineCode",{parentName:"p"},"0x")," prefix. To verify that the public key\nis correct you can use the Subkey tool to inspect your address."),(0,s.kt)("p",null,'The next step is to go to the MyCrypto application and click on "Sign & Verify Message" tab. This\nwill prompt you to select a method for unlocking your wallet. After unlocking your wallet, you will\ncopy and paste the outputted sentence into the input box.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Claim Step 2",src:a(73050).Z})),(0,s.kt)("p",null,'When you click "Sign Message" you will get a JSON output like the below:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Claim Step 3",src:a(63030).Z})),(0,s.kt)("p",null,'Copy and paste the JSON output of the signed message from MyCrypto into the input box on the\nPolkadot-JS UI and click "Confirm Claim."'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Claim Step 3",src:a(24370).Z})),(0,s.kt)("p",null,"At this point you will see a success message if everything went right and your KSM will now be in\nthe account that you claimed to. Congratulations you can now participate in aspects of the Kusama\nnetwork such as ",(0,s.kt)("a",{parentName:"p",href:"learn-governance"},"governance")," and ",(0,s.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-staking"},"staking"),". During the soft\nlaunch period balance transfers will not be enabled."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Claim Step 4",src:a(82622).Z}),"]"),(0,s.kt)("h4",{id:"verifying-your-claim"},"Verifying your Claim"),(0,s.kt)("p",null,"After you make an on-chain claim for KSM, your balance should be updated on Polkadot-JS Apps\nimmediately."),(0,s.kt)("p",null,"Having trouble? Send an email to ",(0,s.kt)("a",{parentName:"p",href:"mailto:support@polkadot.network"},"support@polkadot.network"),"."),(0,s.kt)("h3",{id:"third-party-claims-processes"},"Third Party Claims Processes"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"We do not recommend using a third-party app or process to perform your claim or acquire KSM.")),(0,s.kt)("p",null,"Claiming using a third-party process can lead to the loss of your allocation, therefore we cannot\nrecommend using any third party apps to do so. Manually specifying your transaction data, as\nspecified in our claims process, is the only way to be certain you will receive your allocation."))}p.isMDXComponent=!0},67027:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_polkadotjs_add_account-1-6239af95d85e996008a286540c0a0154.png"},85468:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_polkadotjs_create-dd0d94958de8c815b4c5d7d627e8ad16.png"},63748:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_polkadotjs_final_account-fd62a10550609396c4687fddae9e365c.png"},18756:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_polkadotjs_mnemonicseed-315e943f777eaee322ac409b86a058d4.jpg"},83370:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_polkadotjs_uncheck-8faf5825e1c8ee34e1566e06133c4c3c.png"},87087:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkawallet-accounts-page-a46ccb775a92d6ce985f1f54a33398dc.jpg"},79079:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkawallet-copy-address-02debb5466b77d1e5ca9f682c4bbf909.jpg"},35417:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkawallet-create-account-b4be442617d812ce00972a2e0a8909c3.jpg"},99303:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/claim-1-f46ed779bd389eb3425494d12824b05a.png"},73050:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/claim-2-b8345db772358c70ec961a05eef10204.png"},24370:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/claim-3-f0bb9d6c5b91c92e7aa6efadcd740fe5.png"},82622:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/claim-4-1abb7eca56303d1fed7d0ade30ba9dcb.png"},63030:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/claim_3-0de006d8b37239ca3a11b19d454f62b8.png"},48866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_add_account-6497fae3521dfc27c3f3c6b1c11196cb.png"},28613:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_backup_account-f1a5b1d20ccbfcc55812b9b53769ff0b.png"},9035:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_copy_address-32157f95c2b3da7a463b54cab946c2ec.png"},75069:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/kusama_create_account-a36f05a2ea3948266bf96cfdcae6ba99.png"}}]);