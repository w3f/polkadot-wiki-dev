(self.webpackChunk=self.webpackChunk||[]).push([[4211],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75523:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>p});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),s=["components"],i={id:"learn-account-generation",title:"Account Generation",sidebar_label:"Account Generation",description:"Step-by-step guides on generating a Polkadot account."},l=void 0,c={unversionedId:"learn-account-generation",id:"learn-account-generation",isDocsHomePage:!1,title:"Account Generation",description:"Step-by-step guides on generating a Polkadot account.",source:"@site/../docs/learn-account-generation.md",sourceDirName:".",slug:"/learn-account-generation",permalink:"/docs/learn-account-generation",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-account-generation.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1626788789,formattedLastUpdatedAt:"7/20/2021",frontMatter:{id:"learn-account-generation",title:"Account Generation",sidebar_label:"Account Generation",description:"Step-by-step guides on generating a Polkadot account."},sidebar:"docs",previous:{title:"Polkadot Accounts",permalink:"/docs/learn-accounts"},next:{title:"Backing up and Restoring Accounts",permalink:"/docs/learn-account-restore"}},u=[{value:"DISCLAIMER: Key Security",id:"disclaimer-key-security",children:[{value:"Storing your key safely",id:"storing-your-key-safely",children:[]},{value:"Storing your account&#39;s JSON file",id:"storing-your-accounts-json-file",children:[]}]},{value:"Polkadot{.js} Browser Plugin",id:"polkadotjs-browser-plugin",children:[{value:"Install the Browser Plugin",id:"install-the-browser-plugin",children:[]},{value:"Create Account",id:"create-account",children:[]},{value:"Name Account",id:"name-account",children:[]},{value:"Enter Password",id:"enter-password",children:[]},{value:"Set Address for Polkadot Mainnet",id:"set-address-for-polkadot-mainnet",children:[]}]},{value:"Subkey",id:"subkey",children:[]},{value:"Polkadot-JS Apps",id:"polkadot-js-apps",children:[{value:"Go to Polkadot-JS Apps",id:"go-to-polkadot-js-apps",children:[]},{value:"Start Account Generation",id:"start-account-generation",children:[]},{value:"Create and Back Up Account",id:"create-and-back-up-account",children:[]},{value:"Multi-signature Accounts",id:"multi-signature-accounts",children:[]}]},{value:"Parity Signer",id:"parity-signer",children:[{value:"Create Account",id:"create-account-1",children:[]},{value:"Name Account",id:"name-account-1",children:[]},{value:"Back Up Account",id:"back-up-account",children:[]},{value:"Set PIN",id:"set-pin",children:[]},{value:"Get Address",id:"get-address",children:[]},{value:"Your Address",id:"your-address",children:[]}]},{value:"Ledger Hardware Wallet",id:"ledger-hardware-wallet",children:[]},{value:"Vanity Generator",id:"vanity-generator",children:[]}],d={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An address is the public part of a Polkadot account. The private part is the key used to access this\naddress. The public and private part together make up a Polkadot account."),(0,r.kt)("p",null,"There are several ways to generate a Polkadot account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#polkadotjs-browser-plugin"},"Polkadot{.js} Browser Plugin")," ",(0,r.kt)("strong",{parentName:"li"},"RECOMMENDED FOR MOST USERS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subkey"},"Subkey")," ",(0,r.kt)("strong",{parentName:"li"},"ADVANCED and MOST SECURE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#polkadot-js-apps"},"Polkadot-JS Apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#parity-signer"},"Parity Signer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vanity-generator"},"Vanity Generator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-ledger"},"Ledger Hardware Wallet"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you prefer video instructions, we have an easy to follow guide\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=hhUZ40ZWqkE&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=19"},"on YouTube"))),(0,r.kt)("h2",{id:"disclaimer-key-security"},"DISCLAIMER: Key Security"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"only")," ways to get access to your account are via your secret seed or your account's JSON file\nin combination with a password. You must keep them both secure and private. If you share them with\nanyone they will have full access to your account, including all of your funds. This information is\na target for hackers and others with bad intentions - see also\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-scams"},"How to Recognize Scams"),"."),(0,r.kt)("p",null,"On this page we recommend a variety of account generation methods that have various convienience and\nsecurity tradeoffs. Please review this page carefully before making your account so that you\nunderstand the risks of the account generation method you choose and how to properly mitigate them\nin order to keep your funds safe."),(0,r.kt)("h3",{id:"storing-your-key-safely"},"Storing your key safely"),(0,r.kt)("p",null,"The seed is your ",(0,r.kt)("strong",{parentName:"p"},"key")," to the account. Knowing the seed allows you, or anyone else who knows the\nseed, to re-generate and control this account."),(0,r.kt)("p",null,"It is imperative to store the seed somewhere safe, secret, and secure. If you lose access to your\naccount (i.e. you forget the password for your account's JSON file), you can re-create it by\nentering the seed. This also means that somebody else can have control over your account if they\nhave access to your seed."),(0,r.kt)("p",null,"For maximum security, the seed should be written down on paper or another non-digital device and\nstored in a safe place. You may also want to protect your seed from physical damage, as well (e.g.\nby storing in a sealed plastic bag to prevent water damage, storing it in a fireproof safe, etching\nit in metal, etc.) It is recommended that you store multiple copies of the seed in geographically\nseparate locations (e.g., one in your home safe and one in a safety deposit box at your bank)."),(0,r.kt)("p",null,"You should definitely not store your seed on any kind of computer that has or may have access to the\ninternet in the future."),(0,r.kt)("h3",{id:"storing-your-accounts-json-file"},"Storing your account's JSON file"),(0,r.kt)("p",null,"The JSON file is encrypted with a password, which means you can import it into any wallet which\nsupports JSON imports, but to then use it, you need the password. You don't have to be as careful\nwith your JSON file's storage as you would with your seed (i.e. it can be on a USB drive near you),\nbut remember that in this case your account is only as secure as the password you used to encrypt\nit. Do not use easy to guess or hard to remember passwords. It is good practice to use a\n",(0,r.kt)("a",{parentName:"p",href:"https://xkcd.com/936/"},"mnemonic password of four to five words"),". These are nearly impossible for\ncomputers to guess due to the number of combinations possible, but much easier for humans to\nremember."),(0,r.kt)("h2",{id:"polkadotjs-browser-plugin"},"Polkadot{.js} Browser Plugin"),(0,r.kt)("p",null,"The Polkadot{.js} plugin provides a reasonable balance of security and usability. It provides a\nseparate local mechanism to generate your address and interact with Polkadot."),(0,r.kt)("p",null,'This method involves installing the Polkadot{.js} plugin and using it as a \u201cvirtual vault," separate\nfrom your browser, to store your private keys. It also allows signing of transactions and similar\nfunctionality.'),(0,r.kt)("p",null,"It is still running on the same computer you use to connected to the internet with and thus is less\nsecure than using Parity Signer or other air-gapped approaches."),(0,r.kt)("h3",{id:"install-the-browser-plugin"},"Install the Browser Plugin"),(0,r.kt)("p",null,"The browser plugin is available for both\n",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en"},"Google Chrome"),"\n(and Chromium based browsers like Brave) and\n",(0,r.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension"},"FireFox"),"."),(0,r.kt)("p",null,"If you would like to know more or review the code of the plugin yourself, you can visit the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/extension"},"Github source repository"),"."),(0,r.kt)("p",null,"After installing the plugin, you should see the orange and white Polkadot{.js} logo in the menu bar\nof your browser."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"plugin-02",src:n(61257).Z})),(0,r.kt)("h3",{id:"create-account"},"Create Account"),(0,r.kt)("p",null,"Open the Polkadot{.js} browser extension by clicking the logo on the top bar of your browser. You\nwill see a browser popup not unlike the one below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Initial PolkadotJS popup",src:n(58490).Z})),(0,r.kt)("p",null,'Click the big plus button or select "Create new account" from the small plus icon in the top right.\nThe Polkadot{.js} plugin will then use system randomness to make a new seed for you and display it\nto you in the form of twelve words.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New seed",src:n(47127).Z})),(0,r.kt)("p",null,"You should back up these words as ",(0,r.kt)("a",{parentName:"p",href:"#storing-your-key-safely"},"explained above"),'. It is imperative to\nstore the seed somewhere safe, secret, and secure. If you cannot access your account via\nPolkadot{.js} for some reason, you can re-enter your seed through the "Add account menu" by\nselecting "Import account from pre-existing seed".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New seed",src:n(62853).Z})),(0,r.kt)("h3",{id:"name-account"},"Name Account"),(0,r.kt)("p",null,"The account name is arbitrary and for your use only. It is not stored on the blockchain and will not\nbe visible to other users who look at your address via a block explorer. If you're juggling multiple\naccounts, it helps to make this as descriptive and detailed as needed."),(0,r.kt)("h3",{id:"enter-password"},"Enter Password"),(0,r.kt)("p",null,"The password will be used to encrypt this account's information. You will need to re-enter it when\nusing the account for any kind of outgoing transaction or when using it to cryptographically sign a\nmessage."),(0,r.kt)("p",null,"Note that this password does NOT protect your seed phrase. If someone knows the twelve words in your\nmnemonic seed, they still have control over your account even if they do not know the password."),(0,r.kt)("h3",{id:"set-address-for-polkadot-mainnet"},"Set Address for Polkadot Mainnet"),(0,r.kt)("p",null,"Now we will ensure that the addresses are displayed as Polkadot mainnet addresses."),(0,r.kt)("p",null,'Click on "Options" at the top of the plugin window, and under "Display address format for" select\n"Polkadot Relay Chain".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New seed",src:n(83074).Z})),(0,r.kt)("p",null,"Your address' format is only visual - the data used to derive this representation of your address\nare the same, so you can use the same address on multiple chains. However, for privacy reasons, we\nrecommend creating a new address for each chain you're using."),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#address-conversion-tools"},"Accounts page")," also has a tool you can use to\nconvert your address between the different chain formats."),(0,r.kt)("p",null,'You can copy your address by clicking on the account\'s icon while the desired chain format is\nactive. E.g. selecting "Substrate" as the format will change your address to start with the number\n5, and clicking the colorful icon of your account will copy it in that format. While in Polkadot\nmode (starts with 1), that format will be copied, and so on.'),(0,r.kt)("h2",{id:"subkey"},"Subkey"),(0,r.kt)("p",null,"Subkey is recommended for technically advanced users who are comfortable with the command line and\ncompiling Rust code. Subkey allows you to generate keys on any device that can compile the code.\nSubkey may also be useful for automated account generation using an air-gapped device. It is not\nrecommended for general users."),(0,r.kt)("p",null,"For detailed build and usage instructions of subkey, please see\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/bin/utils/subkey"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"subkey-01",src:n(98370).Z})),(0,r.kt)("h2",{id:"polkadot-js-apps"},"Polkadot-JS Apps"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please note! If you use this method to create your account and clear your cookies in your browser,\nyour account will be lost forever if you do not ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-restore"},"back it up"),". Make sure\nyou store your seed phrase in a safe place, or download the account's JSON file if using the\nPolkadot{.js} browser extension. Learn more about account backup and restoration\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-restore"},"here"),".")),(0,r.kt)("p",null,"Using the Polkadot-JS user interface without the plugin is ",(0,r.kt)("strong",{parentName:"p"},"not recommended"),". It is the least secure\nway of generating an account. It should only be used if all of the other methods are not feasible in\nyour situation."),(0,r.kt)("h3",{id:"go-to-polkadot-js-apps"},"Go to Polkadot-JS Apps"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),' and click on "Accounts" underneath the\nAccounts tab. It is located in the navigation bar at the top of your screen.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pjs-01",src:n(77852).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'To create an account on a different network than Polkadot, you\'ll need to click on the network\nselection in the top left corner of the navigation menu. A pop-up sidebar will appear listing\nlive, testing, and custom node to choose from. Do remember to hit the "Switch" button when you\nwant to switch your network.')),(0,r.kt)("h3",{id:"start-account-generation"},"Start Account Generation"),(0,r.kt)("p",null,'Click on the "Add Account" button. You should see a pop-up similar to the process encountered when\nusing the ',(0,r.kt)("a",{parentName:"p",href:"#polkadotjs-browser-plugin"},"Polkadot JS Extension method")," above. Follow the same\ninstructions and remember to ",(0,r.kt)("a",{parentName:"p",href:"#storing-your-key-safely"},"store your seed safely"),"!"),(0,r.kt)("h3",{id:"create-and-back-up-account"},"Create and Back Up Account"),(0,r.kt)("p",null,"Click \u201cSave\u201d and your account will be created. It will also generate a\n",(0,r.kt)("a",{parentName:"p",href:"#storing-your-accounts-json-file"},"backup JSON file")," that you should safely store, ideally on a USB\noff the computer you're using. You should not store it in cloud storage, email it to yourself, etc."),(0,r.kt)("p",null,"You can use this backup file to restore your account. This backup file is not readable unless it is\ndecrypted with the password."),(0,r.kt)("h3",{id:"multi-signature-accounts"},"Multi-signature Accounts"),(0,r.kt)("p",null,"Multi-signature accounts are accounts created from several standard accounts (or even other\nmulti-sig accounts). For a full explanation, please see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#multi-signature-accounts"},"Accounts Explainer section on multi-sigs"),"."),(0,r.kt)("p",null,"On the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts")," tab, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Multisig")," button. Enter\nthe threshold and add signatories. The threshold must be less than or equal to the number of\nsignatories. The threshold indicates how many members must be in agreement for an extrinsic\nsubmission to be successful. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," when done."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Multi-sig account creation",src:n(6109).Z})),(0,r.kt)("p",null,"This merely calculates the multi-signature's address and adds it to your UI. The account does not\nexist yet, and is subject to the same\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"Existential Deposit and Reaping")," rules as\nregular accounts."),(0,r.kt)("p",null,"Suppose we funded it with some tokens, and now want to send from the multi-sig to another account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sending from multi-sig account",src:n(84138).Z})),(0,r.kt)("p",null,"The next step is to sign the transaction from with enough accounts to meet the threshold; in the\nabove case, two out of three signatories must sign."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Signing from multi-sig account",src:n(38601).Z})),(0,r.kt)("p",null,"There is currently no indication of a pending transaction from a multi-sig in the UI. This means the\nsecond signatory must ",(0,r.kt)("strong",{parentName:"p"},"repeat the call in full")," in order to sign it. In other words:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if Alice initiates a transaction from the multi-sig to Ferdie for 150 tokens, there will be a\npending transaction in the chain."),(0,r.kt)("li",{parentName:"ul"},"if Bob initiates a transaction from the multi-sig to Ferdie for 250 tokens, there will be\n",(0,r.kt)("strong",{parentName:"li"},"another")," pending transaction in the chain, and the first one will not complete."),(0,r.kt)("li",{parentName:"ul"},"because the threshold is 2/3, Charlie can now finalize either or both of these by repeating the\ndesired transaction.")),(0,r.kt)("p",null,"Other calls work exactly the same - if a multi-sig wants to become a Council member, the candidacy\nrequest has to come from the multi-sig, but be signed (re-requested) from each signatory until the\nthreshold is reached."),(0,r.kt)("p",null,"Signatories should communicate off-chain to prevent many pending transactions and crossed\ncommunication lines on-chain."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The bigger the multisig, the more of a deposit an account needs to put down when initiating a\nmulti-sig call. This is to prevent chain storage spam with pending but never-resolved multi-sig\ntransactions. Once a call is resolved (canceled or executed) the deposit is returned to the\ninitiator. The deposit is not taken from the multi-sig's balance, but from the initiator.")),(0,r.kt)("p",null,"For a more in-depth introduction into multi signature accounts on Polkadot, please see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#multi-signature-accounts"},"the accounts page section on Multi-sigs"),"."),(0,r.kt)("h2",{id:"parity-signer"},"Parity Signer"),(0,r.kt)("p",null,'Parity Signer is a secure way of storing your DOT on an air-gapped device. It is highly recommended\nthat you turn off wifi, cellular network, Bluetooth, NFC, and any other communications methods after\ninstalling it. The device needs to be offline and only you should be viewing the device screen.\nIf you have any communications methods turned on, you will see an "unshielded" icon\nin red in the top-right corner that indicates your connection may not be secure.'),(0,r.kt)("h3",{id:"create-account-1"},"Create Account"),(0,r.kt)("p",null,'Click "Create" to create an identity, or "recover" if you have previously backed up the recovery\nphrase. You can have multiple identities on one device. Each identity can manage multiple addresses\non different networks.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 1",src:n(97901).Z})),(0,r.kt)("h3",{id:"name-account-1"},"Name Account"),(0,r.kt)("p",null,'Input the name for your identity and then click "Create".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 2",src:n(28390).Z})),(0,r.kt)("h3",{id:"back-up-account"},"Back Up Account"),(0,r.kt)("p",null,"Parity Signer will then generate a recovery phrase for you and display it in the form of 12 or 24\nwords."),(0,r.kt)("p",null,"You should write down this recovery phrase on paper and\n",(0,r.kt)("a",{parentName:"p",href:"#storing-your-key-safely"},"store it somewhere safe"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 3",src:n(95230).Z})),(0,r.kt)("h3",{id:"set-pin"},"Set PIN"),(0,r.kt)("p",null,"After confirming that you have backed up your seed, a new textbox will appear in which you can set a\nPIN. The PIN code should contain at least 6 digits. If the PIN codes do not match, it will not allow\nyou to create an account. The PIN code will be used for when signing any transaction, or to protect\nsensitive operations such as deleting an identity or revealing the recovery phrase."),(0,r.kt)("p",null,"Note that if someone knows the 12/24 words in your recovery phrase, they will still have control\nover your account, even if they do not know the PIN."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 4",src:n(23726).Z})),(0,r.kt)("h3",{id:"get-address"},"Get Address"),(0,r.kt)("p",null,'Choose which network you would like to create an address for by clicking the name of the network.\nFor example, if you select "Polkadot", a new Polkadot address will be created for you under this\nidentity.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 5",src:n(77737).Z})),(0,r.kt)("p",null,"There is currently no way to copy your address from Parity signer in plain-text in order to send it\nvia text or email. You must use the QR method."),(0,r.kt)("h3",{id:"your-address"},"Your Address"),(0,r.kt)("p",null,"The address will be shown as a QR code. You can import your address to the Polkadot-JS Apps by going\nto the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts"),' page on an Internet-connected computer\nand click "Add via QR", and following the instructions to add the account. An account created this\nway will always require you to sign messages with your Parity Signer device. It will do this only by\nscanning and displaying QR codes, leaving even someone with total control of your internet-connected\ncomputer a very small and limited scope for interacting with the Parity Signer device, which can\ncontinue to keep your key safe.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parity Signer Create Account 6",src:n(18302).Z})),(0,r.kt)("h2",{id:"ledger-hardware-wallet"},"Ledger Hardware Wallet"),(0,r.kt)("p",null,"To use a Ledger hardware wallet to create your address and keep your tokens in cold storage, follow\nthe instructions on our ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-ledger"},"Ledger hardware wallet guide page"),"."),(0,r.kt)("h2",{id:"vanity-generator"},"Vanity Generator"),(0,r.kt)("p",null,"The vanity generator is a tool on ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts/vanity"},"Polkadot-JS UI"),"\nthat lets you generate addresses which contain a specific substring."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Vanity Generator page",src:n(58073).Z})),(0,r.kt)("p",null,"The vanity generator takes the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Search for": The substring that you would like to include in your new address.'),(0,r.kt)("li",{parentName:"ul"},'"case sensitive": "Yes" if the search is case sensitive; "no" if not.'),(0,r.kt)("li",{parentName:"ul"},'"keypair crypto type": Specifies the type of account you\'d like to generate; Schnorrkel is\nrecommended in most cases for its security.')),(0,r.kt)("p",null,'If you\'ve filled out all details above and hit the "Start generation" button, a list of accounts\nwill start generating on your screen. Note that depending on the length of the substring and the\nprocessing speed of your computer, it may take some time before any accounts appear.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Vanity Generator search",src:n(96798).Z})),(0,r.kt)("p",null,'The "Save" button will allow you to save the generated accounts - they are not saved if you do not\nchoose to do this. The next steps are identical to the\n',(0,r.kt)("a",{parentName:"p",href:"#polkadotjs"},"steps above on creating an account on the UI"),", where a password and name need to be\nfilled in, and a backup file of your account will be downloaded."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("a",{parentName:"p",href:"#subkey"},"Subkey tool")," also has vanity generation built-in, and is orders of magnitude\nfaster than the web version. If you need to generate addresses with longer strings, or need plenty\nof them, we recommend using Subkey instead."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Vanity Generator chosen address",src:n(12878).Z})))}p.isMDXComponent=!0},6109:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-multisig-8aa2177040b3f08dd81a45d6d657712f.png"},77852:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_js_01-75ab34e50cf548a839d771e86ec23276.png"},61257:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_plugin_js_02-858c89575d1ebdc18ebfc53d58db070f.jpg"},58490:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_plugin_js_new_01-315e2145964575b73f42bcd9f065cc8e.png"},47127:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_plugin_js_new_02-ff03c501e427e552c9e0ac056aa1b64e.png"},62853:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_plugin_js_new_03-795e0862ec595fa68742e6e8abe77916.png"},83074:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_plugin_js_new_04-eb4fb0e6318033124bbaf5ccc43642da.png"},97901:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/ps-create-1-7a5d80579f372d9d34a2b72fb2b2fcc1.jpg"},28390:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/ps-create-2-71ee22c75a0271b4a43b615651d191d0.jpg"},95230:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/ps-create-3-ce87d8a7367c11eb5b1141dd14179a64.jpg"},23726:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/ps-create-4-5449bc3fe002fabbe183ca2b9b7541c0.jpg"},77737:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/ps-create-5-7ebabdbcec95fc0a0b1d493a93425183.jpg"},18302:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/ps-create-6-b3e7100d2df0a0ac53db229f1a8bf6ec.jpg"},84138:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/send-from-multi-ec877e0ca6ba6b90a193dfb0aa57028d.png"},38601:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/sign-from-multi-1-65d0e9977cf5b96ad59985222d7d25a2.png"},98370:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/subkey_01-970aa5682220aabc6f5927a38b3a5954.jpg"},12878:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_save_account-2b7fa9cb0b0c0f726205b5777ac71361.png"},96798:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_vanity_generate-47770cb048dcd6c738f619110f4c5607.png"},58073:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_vanity_generator_page-f938a1fbb87bd21e2226323109f0c4e2.png"}}]);