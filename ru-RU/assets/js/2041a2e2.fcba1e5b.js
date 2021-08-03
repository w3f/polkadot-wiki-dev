(self.webpackChunk=self.webpackChunk||[]).push([[4817],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10062:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>d});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s=["components"],i={id:"learn-keys",title:"Polkadot Keys",sidebar_label:"Polkadot Keys"},l=void 0,c={unversionedId:"learn-keys",id:"learn-keys",isDocsHomePage:!1,title:"Polkadot Keys",description:"Public and private keys are an important aspect of most crypto-systems and an essential component",source:"@site/../docs/learn-keys.md",sourceDirName:".",slug:"/learn-keys",permalink:"/ru-RU/docs/learn-keys",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-keys.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1628011886,formattedLastUpdatedAt:"03.08.2021",frontMatter:{id:"learn-keys",title:"Polkadot Keys",sidebar_label:"Polkadot Keys"},sidebar:"docs",previous:{title:"Cryptography Explainer",permalink:"/ru-RU/docs/learn-cryptography"},next:{title:"Comparing Polkadot and Kusama",permalink:"/ru-RU/docs/learn-kusama-vs-polkadot"}},u=[{value:"Account Keys",id:"account-keys",children:[{value:"&quot;Controller&quot; and &quot;Stash&quot; Keys",id:"controller-and-stash-keys",children:[]}]},{value:"Session Keys",id:"session-keys",children:[]},{value:"FAQ",id:"faq",children:[{value:"Why was <code>ed25519</code> selected over <code>secp256k1</code>?",id:"why-was-ed25519-selected-over-secp256k1",children:[]},{value:"What is <code>sr25519</code> and where did it come from?",id:"what-is-sr25519-and-where-did-it-come-from",children:[]},{value:"Are BLS signatures used in Polkadot?",id:"are-bls-signatures-used-in-polkadot",children:[]}]},{value:"Resources",id:"resources",children:[]},{value:"Appendix A: On the security of curves",id:"appendix-a-on-the-security-of-curves",children:[]}],h={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Public and private keys are an important aspect of most crypto-systems and an essential component\nthat enables blockchains like Polkadot to exist."),(0,o.kt)("h2",{id:"account-keys"},"Account Keys"),(0,o.kt)("p",null,"Account keys are keys that are meant to control funds. They can be either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The vanilla ",(0,o.kt)("inlineCode",{parentName:"li"},"ed25519")," implementation using Schnorr signatures."),(0,o.kt)("li",{parentName:"ul"},"The Schnorrkel/Ristretto ",(0,o.kt)("inlineCode",{parentName:"li"},"sr25519")," variant using Schnorr signatures."),(0,o.kt)("li",{parentName:"ul"},"ECDSA signatures on secp256k1")),(0,o.kt)("p",null,"There are no differences in security between ",(0,o.kt)("inlineCode",{parentName:"p"},"ed25519")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sr25519")," for simple signatures."),(0,o.kt)("p",null,"We expect ",(0,o.kt)("inlineCode",{parentName:"p"},"ed25519")," to be much better supported by commercial HSMs for the foreseeable future."),(0,o.kt)("p",null,"At the same time, ",(0,o.kt)("inlineCode",{parentName:"p"},"sr25519")," makes implementing more complex protocols safer. In particular,\n",(0,o.kt)("inlineCode",{parentName:"p"},"sr25519")," comes with safer version of many protocols like HDKD common in the Bitcoin and Ethereum\necosystem."),(0,o.kt)("h3",{id:"controller-and-stash-keys"},'"Controller" and "Stash" Keys'),(0,o.kt)("p",null,'When we talk about "controller" and "stash" keys, we usually talk about them in the context of\nrunning a validator or nominating DOT, but they are useful concepts for all users to know. Both keys\nare types of account keys. They are distinguished by their intended use, not by an underlying\ncryptographic difference. All the info mentioned in the parent section applies to these keys. When\ncreating new controller or stash keys, all cryptography supported by account keys are an available\noption.'),(0,o.kt)("p",null,"The controller key is a semi-online key that will be in the direct control of a user, and used to\nsubmit manual extrinsics. For validators or nominators, this means that the controller key will be\nused to start or stop validating or nominating. Controller keys should hold some DOT to pay for\nfees, but they should not be used to hold huge amounts or life savings. Since they will be exposed\nto the internet with relative frequency, they should be treated carefully and occasionally replaced\nwith new ones."),(0,o.kt)("p",null,"The stash key is a key that will, in most cases, be a cold wallet, existing on a piece of paper in a\nsafe or protected by layers of hardware security. It should rarely, if ever, be exposed to the\ninternet or used to submit extrinsics. The stash key is intended to hold a large amount of funds. It\nshould be thought of as a saving's account at a bank, which ideally is only ever touched in urgent\nconditions. Or, perhaps a more apt metaphor is to think of it as buried treasure, hidden on some\nrandom island and only known by the pirate who originally hid it."),(0,o.kt)("p",null,"Since the stash key is kept offline, it must be set to have its funds bonded to a particular\ncontroller. For non-spending actions, the controller has the funds of the stash behind it. For\nexample, in nominating, staking, or voting, the controller can indicate its preference with the\nweight of the stash. It will never be able to actually move or claim the funds in the stash key.\nHowever, if someone does obtain your controller key, they could use it for slashable behavior, so\nyou should still protect it and change it regularly."),(0,o.kt)("h2",{id:"session-keys"},"Session Keys"),(0,o.kt)("p",null,"Session keys are hot keys that must be kept online by a validator to perform network operations.\nSession keys are typically generated in the client, although they don't have to be. They are ",(0,o.kt)("em",{parentName:"p"},"not"),"\nmeant to control funds and should only be used for their intended purpose. They can be changed\nregularly; your controller only need create a certificate by signing a session public key and\nbroadcast this certificate via an extrinsic."),(0,o.kt)("p",null,"Polkadot uses four session keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GRANDPA: ed25519"),(0,o.kt)("li",{parentName:"ul"},"BABE: sr25519"),(0,o.kt)("li",{parentName:"ul"},"I'm Online: sr25519"),(0,o.kt)("li",{parentName:"ul"},"Parachain: sr25519")),(0,o.kt)("p",null,"BABE requires keys suitable for use in a ",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-randomness/#vrfs"},"Verifiable Random Function")," as\nwell as for digital signatures. Sr25519 keys have both capabilities and so are used for BABE."),(0,o.kt)("p",null,"In the future, we plan to use a BLS key for GRANDPA because it allows for more efficient signature\naggregation."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"why-was-ed25519-selected-over-secp256k1"},"Why was ",(0,o.kt)("inlineCode",{parentName:"h3"},"ed25519")," selected over ",(0,o.kt)("inlineCode",{parentName:"h3"},"secp256k1"),"?"),(0,o.kt)("p",null,"The original key derivation cryptography that was implemented for Polkadot and Substrate chains was\n",(0,o.kt)("inlineCode",{parentName:"p"},"ed25519"),", which is a Schnorr signature algorithm implemented over the Edward's Curve 25519 (so\nnamed due to the parameters of the curve equation)."),(0,o.kt)("p",null,"Most cryptocurrencies, including Bitcoin and Ethereum, currently use ECDSA signatures on the\nsecp256k1 curve. This curve is considered much more secure than NIST curves, which\n",(0,o.kt)("a",{parentName:"p",href:"#appendix-a-on-the-security-of-curves"},"have possible backdoors from the NSA"),". The Curve25519 is\nconsidered possibly ",(0,o.kt)("em",{parentName:"p"},"even more")," secure than this one and allows for easier implementation of Schnorr\nsignatures. A recent patent expiration on it has made it the preferred choice for use in Polkadot."),(0,o.kt)("p",null,"The choice of using Schnorr signatures over using ECDSA is not so cut and dry. As stated in Jeff\nBurdges' (a Web3 researcher)\n",(0,o.kt)("a",{parentName:"p",href:"https://forum.web3.foundation/t/account-signatures-and-keys-in-polkadot/70/2"},"original forum post"),"\non the topic:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There is one sacrifice we make by choosing Schnorr signatures over ECDSA signatures for account\nkeys: Both require 64 bytes, but only ECDSA signatures communicate their public key. There are\nobsolete Schnorr variants that support recovering the public key from a signature, but they break\nimportant functionality like hierarchical deterministic key derivation. In consequence, Schnorr\nsignatures often take an extra 32 bytes for the public key.")),(0,o.kt)("p",null,"But ultimately the benefits of using Schnorr signatures outweigh the tradeoffs, and future\noptimizations may resolve the inefficiencies pointed out in the quote above."),(0,o.kt)("h3",{id:"what-is-sr25519-and-where-did-it-come-from"},"What is ",(0,o.kt)("inlineCode",{parentName:"h3"},"sr25519")," and where did it come from?"),(0,o.kt)("p",null,"Some context: The Schnorr signatures over the Twisted Edward's Curve25519 are considered secure,\nhowever Ed25519 has not been completely devoid of its bugs. Most notably,\n",(0,o.kt)("a",{parentName:"p",href:"https://www.getmonero.org/2017/05/17/disclosure-of-a-major-bug-in-cryptonote-based-currencies.html"},"Monero and all other CryptoNote currencies"),"\nwere vulnerable to a double spend exploit that could have potentially led to undetected, infinite\ninflation."),(0,o.kt)("p",null,"These exploits were due to one peculiarity in Ed25519, which is known as its cofactor of 8. The\ncofactor of a curve is an esoteric detail that could have dire consequences for the security of\nimplementation of more complex protocols."),(0,o.kt)("p",null,"Conveniently, ",(0,o.kt)("a",{parentName:"p",href:"https://www.shiftleft.org/papers/decaf/index.xhtml"},"Mike Hamburg's Decaf paper"),"\nprovides a possible path forward to solving this potential bug. Decaf is basically a way to take\nTwisted Edward's Curves cofactor and mathematically change it with little cost to performance and\ngains to security."),(0,o.kt)("p",null,"The Decaf paper approach by the ",(0,o.kt)("a",{parentName:"p",href:"https://ristretto.group/"},"Ristretto Group")," was extended and\nimplemented in Rust to include cofactor-8 curves like the Curve25519 and makes Schnorr signatures\nover the Edward's curve more secure."),(0,o.kt)("p",null,"The Web3 Foundation has implemented a Schnorr signature library using the more secure Ristretto\ncompression over the Curve25519 in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/schnorrkel"},"Schnorrkel")," repository.\nSchnorrkel implements related protocols on top of this curve compression such as HDKD, MuSig, and a\nverifiable random function (VRF). It also includes various minor improvements such as the hashing\nscheme STROBE that can theoretically process huge amounts of data with only one call across the Wasm\nboundary."),(0,o.kt)("p",null,"The implementation of Schnorr signatures that is used in Polkadot and implements the Schnorrkel\nprotocols over the Ristretto compression of the Curve25519 is known as ",(0,o.kt)("strong",{parentName:"p"},"sr25519"),"."),(0,o.kt)("h3",{id:"are-bls-signatures-used-in-polkadot"},"Are BLS signatures used in Polkadot?"),(0,o.kt)("p",null,"Not yet, but they will be. BLS signatures allow more efficient signature aggregation. Because\nGRANDPA validators are usually signing the same thing (e.g. a block), it makes sense to aggregate\nthem, which can allow for other protocol optimizations."),(0,o.kt)("p",null,"As stated in the BLS library's README,"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Boneh-Lynn-Shacham (BLS) signatures have slow signing, very slow verification, require slow and\nmuch less secure pairing friendly curves, and tend towards dangerous malleability. Yet, BLS\npermits a diverse array of signature aggregation options far beyond any other known signature\nscheme, which makes BLS a preferred scheme for voting in consensus algorithms and for threshold\nsignatures.")),(0,o.kt)("p",null,"Even though Schnorr signatures allow for signature aggregation, BLS signatures are much more\nefficient in some fashions. For this reason it will be one of the session keys that will be used by\nvalidators on the Polkadot network and critical to the GRANDPA finality gadget."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.web3.foundation/t/key-recovery-attack-on-bip32-ed25519/44"},"Key discovery attack on BIP32-Ed25519")," -\nForum post detailing a potential attack on BIP32-Ed25519. A motivation for transition to the\nsr25519 variant."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.web3.foundation/t/account-signatures-and-keys-in-polkadot/70"},"Account signatures and keys in Polkadot")," -\nOriginal forum post by Web3 researcher Jeff Burdges."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bitcoin.stackexchange.com/questions/57965/are-schnorr-signatures-quantum-computer-resistant/57977#57977"},"Are Schnorr signatures quantum computer resistant?"))),(0,o.kt)("h2",{id:"appendix-a-on-the-security-of-curves"},"Appendix A: On the security of curves"),(0,o.kt)("p",null,"From the\n",(0,o.kt)("a",{parentName:"p",href:"https://git.libssh.org/projects/libssh.git/tree/doc/curve25519-sha256@libssh.org.txt#n10"},"introduction of Curve25519"),"\ninto ",(0,o.kt)("inlineCode",{parentName:"p"},"libssl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"The reason is the following: During summer of 2013, revelations from ex-\nconsultant at [the] NSA Edward Snowden gave proof that [the] NSA willingly inserts backdoors\ninto software, hardware components and published standards. While it is still\nbelieved that the mathematics behind ECC (Elliptic-curve cryptography) are still sound and solid,\nsome people (including Bruce Schneier [SCHNEIER]), showed their lack of confidence\nin NIST-published curves such as nistp256, nistp384, nistp521, for which constant\nparameters (including the generator point) are defined without explanation. It\nis also believed that [the] NSA had a word to say in their definition. These curves\nare not the most secure or fastest possible for their key sizes [DJB], and\nresearchers think it is possible that NSA have ways of cracking NIST curves.\nIt is also interesting to note that SSH belongs to the list of protocols the NSA\nclaims to be able to eavesdrop. Having a secure replacement would make passive\nattacks much harder if such a backdoor exists.\n\nHowever an alternative exists in the form of Curve25519. This algorithm has been\nproposed in 2006 by DJB [Curve25519]. Its main strengths are its speed, its\nconstant-time run time (and resistance against side-channel attacks), and its\nlack of nebulous hard-coded constants.\n")))}d.isMDXComponent=!0}}]);