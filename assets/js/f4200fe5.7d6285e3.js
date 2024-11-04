"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3135],{94445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"maintain/maintain-sync","title":"Set up a Full Node","description":"Steps on how to set up a full node.","source":"@site/../docs/maintain/maintain-sync.md","sourceDirName":"maintain","slug":"/maintain-sync","permalink":"/docs/maintain-sync","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-sync.md","tags":[],"version":"current","lastUpdatedBy":"Diego","lastUpdatedAt":1726152378000,"frontMatter":{"id":"maintain-sync","title":"Set up a Full Node","sidebar_label":"Set up a Full Node","description":"Steps on how to set up a full node.","keywords":["node","full node","sync","setup node"],"slug":"../maintain-sync"},"sidebar":"docs","previous":{"title":"Node Endpoints","permalink":"/docs/maintain-endpoints"},"next":{"title":"Set up a Boot Node","permalink":"/docs/maintain-bootnode"}}');var a=t(74848),o=t(28453),r=t(11470),i=t(19365);const l={id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",keywords:["node","full node","sync","setup node"],slug:"../maintain-sync"},d=void 0,c={},h=[{value:"Types of Nodes",id:"types-of-nodes",level:3},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Debian-based (Debian, Ubuntu)",id:"debian-based-debian-ubuntu",level:3},{value:"RPM-based (Fedora, CentOS)",id:"rpm-based-fedora-centos",level:3},{value:"Get Substrate",id:"get-substrate",level:2},{value:"Clone and Build",id:"clone-and-build",level:2},{value:"Run",id:"run",level:2},{value:"Running an Archive Node",id:"running-an-archive-node",level:2},{value:"Using Docker",id:"using-docker",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"If you're building dApps or products on a Substrate-based chain like Polkadot, Kusama, or a custom\nSubstrate implementation, you want the ability to run a node-as-a-back-end. After all, relying on\nyour infrastructure is always better than a third-party-hosted one in this brave new decentralized\nworld."}),"\n",(0,a.jsxs)(n.p,{children:["This guide will show you how to connect to ",(0,a.jsx)(n.a,{href:"https://polkadot.network/",children:"Polkadot network"}),", but the\nsame process applies to any other ",(0,a.jsx)(n.a,{href:"https://substrate.io",children:"Substrate"}),"-based chain. First, let's\nclarify the term ",(0,a.jsx)(n.em,{children:"full node"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"types-of-nodes",children:"Types of Nodes"}),"\n",(0,a.jsxs)(n.p,{children:["A blockchain's growth comes from a ",(0,a.jsx)(n.em,{children:"genesis block"}),", ",(0,a.jsx)(n.em,{children:"extrinsics"}),", and ",(0,a.jsx)(n.em,{children:"events"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all\npending changes on top of it and emits the events resulting from these changes. Later, the chain\u2019s\nstate at block one is used the same way to build the chain\u2019s state at block 2, and so on. Once\ntwo-thirds of the validators agree on a specific block being valid, it is finalized."}),"\n",(0,a.jsxs)(n.p,{children:["An ",(0,a.jsx)(n.strong,{children:"archive node"})," keeps all the past blocks and their states. An archive node makes it convenient\nto query the past state of the chain at any point in time. Finding out what an account's balance at\na particular block was or which extrinsics resulted in a specific state change are fast operations\nwhen using an archive node. However, an archive node takes up a lot of disk space - around Kusama's\n12 millionth block, this was around 660 GB."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["On the ",(0,a.jsx)(n.a,{href:"https://paranodes.io/DBSize",children:"Paranodes"})," or ",(0,a.jsx)(n.a,{href:"https://stakeworld.io/docs/dbsize",children:"Stakeworld"}),"\nwebsites, you can find lists of the database sizes of Polkadot and Kusama nodes."]})}),"\n",(0,a.jsxs)(n.p,{children:["Archive nodes are used by utilities that need past information - like block explorers, council\nscanners, discussion platforms like ",(0,a.jsx)(n.a,{href:"https://polkassembly.io",children:"Polkassembly"}),", and others. They need\nto be able to look at past on-chain data."]}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"full node"})," prunes historical states: all finalized blocks' states older than a configurable\nnumber except the genesis block's state. This is 256 blocks from the last finalized one by default.\nA pruned node this way requires much less space than an archive node."]}),"\n",(0,a.jsx)(n.p,{children:"A full node could eventually rebuild every block's state without additional information and become\nan archive node. This still needs to be implemented at the time of writing. If you need to query\nhistorical blocks' states past what you pruned, you must purge your database and resync your node,\nstarting in archive mode. Alternatively, you can use a backup or snapshot of a trusted source to\navoid needing to sync from genesis with the network and only need the states of blocks past that\nsnapshot."}),"\n",(0,a.jsx)(n.p,{children:"Full nodes allow you to read the current state of the chain and to submit and validate extrinsics\ndirectly on the network without relying on a centralized infrastructure provider."}),"\n",(0,a.jsxs)(n.p,{children:["Another type of node is a ",(0,a.jsx)(n.strong,{children:"light node"}),". A light node has only the runtime and the current state\nbut does not store past blocks and so cannot read historical data without requesting it from a node\nthat has it. Light nodes are useful for resource-restricted devices. An interesting use-case of\nlight nodes is a browser extension, which is a node in its own right, running the runtime in WASM\nformat, as well as a full or light node that is completely encapsulated in WASM and can be\nintegrated into web apps: ",(0,a.jsx)(n.a,{href:"https://github.com/smol-dot/smoldot",children:"https://github.com/smol-dot/smoldot"}),"."]}),"\n",(0,a.jsx)(n.admonition,{title:"Substrate Connect",type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/paritytech/substrate-connect",children:"Substrate Connect"})," provides a way to interact with\nsubstrate-based blockchains in the browser without using an RPC server. It is a light node that runs\nentirely in Javascript. Substrate Connect uses a\n",(0,a.jsx)(n.a,{href:"https://github.com/paritytech/smoldot",children:"smoldot WASM light client"})," to securely connect to the\nblockchain network without relying on specific 3rd parties. Substrate Connect is available on Chrome\nand Firefox as a ",(0,a.jsx)(n.a,{href:"https://substrate.io/developers/substrate-connect/",children:"browser extension"}),"."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,a.jsxs)(n.p,{children:["This is not recommended if you're a validator. Please see the\n",(0,a.jsx)(n.a,{href:"/docs/maintain-guides-secure-validator",children:"secure validator setup"})," if you are running validator."]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["The bash commands that are provided to run against ",(0,a.jsx)(n.strong,{children:"your node"})," use ",(0,a.jsx)(n.code,{children:"Polkadot"})," as the"]}),(0,a.jsx)(n.p,{children:"default chain"}),(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"--chain"})," flag if you follow the setup instructions to setup a ",(0,a.jsx)(n.code,{children:"Kusama"})," node. For example:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n'})})]}),"\n",(0,a.jsxs)(r.A,{groupId:"operating-systems",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Linux (standalone)",value:"linux-standalone"},{label:"Linux (package)",value:"linux-package"}],children:[(0,a.jsx)(i.A,{value:"mac",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Install Homebrew within the terminal by running:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Then, run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"brew install openssl cmake llvm protobuf\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Install Rust by running:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"After Rust is installed, update and add the nightly version:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Ensure the current shell has cargo\nsource ~/.cargo/env\n\n# Update the Rust toolchain\nrustup default stable\nrustup update\n\n# Add the nightly and WebAssembly targets:\nrustup update nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Verify your installation by running the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rustup show\n\n# You should see output similar to:\n\nactive toolchain\n----------------\n\nstable-aarch64-apple-darwin (default)\nrustc 1.68.1 (8460ca823 2023-03-20)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rustup +nightly show\n\n# You should see output similar to:\n\ninstalled targets for active toolchain\n--------------------------------------\n\naarch64-apple-darwin\nwasm32-unknown-unknown\n\nactive toolchain\n----------------\n\nnightly-aarch64-apple-darwin (overridden by +toolchain on the command line)\nrustc 1.71.0-nightly (9ecda8de8 2023-04-30)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Once Rust is configured, run the following command to clone and build the Polkadot code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/paritytech/polkadot-sdk polkadot-sdk\ncd polkadot-sdk\n./scripts/init.sh\ncargo build --release\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start your node:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'./target/release/polkadot --name "Your Node\'s Name"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Find your node on ",(0,a.jsx)(n.a,{href:"https://telemetry.polkadot.io/#list/Polkadot",children:"Telemetry"})]}),"\n"]}),"\n"]})}),(0,a.jsx)(i.A,{value:"win",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",children:"WSL"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",children:"Ubuntu"})," (same webpage)."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Determine the latest version of the\n",(0,a.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/releases",children:"Polkadot binary"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,a.jsx)(n.code,{children:"*VERSION*"})," with the tag of the latest version from the last step (e.g. ",(0,a.jsx)(n.code,{children:"v0.8.22"}),"):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -sL https://github.com/paritytech/polkadot-sdk/releases/download/*VERSION*/polkadot -o polkadot\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Then, run the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo chmod +x polkadot\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start your node:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'./polkadot --name "Your Node\'s Name"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Find your node on ",(0,a.jsx)(n.a,{href:"https://telemetry.polkadot.io/#list/Polkadot",children:"Telemetry"})]}),"\n"]}),"\n"]})}),(0,a.jsx)(i.A,{value:"linux-standalone",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Determine the latest version of the\n",(0,a.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/releases",children:"Polkadot binary"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["The nature of pre-built binaries means that they may not work on your particular architecture or\nLinux distribution. If you see an error like ",(0,a.jsx)(n.code,{children:"cannot execute binary file: Exec format error"})," it\nlikely means the binary is not compatible with your system. You will either need to compile the\n",(0,a.jsx)(n.a,{href:"#clone-and-build",children:(0,a.jsx)(n.strong,{children:"source code"})})," or use ",(0,a.jsx)(n.a,{href:"#using-docker",children:(0,a.jsx)(n.strong,{children:"Docker"})}),"."]})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,a.jsx)(n.code,{children:"*VERSION*"})," with the tag of the latest version from the last step (e.g. ",(0,a.jsx)(n.code,{children:"v0.8.22"}),"):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -sL https://github.com/paritytech/polkadot-sdk/releases/download/*VERSION*/polkadot -o polkadot\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Run the following: ",(0,a.jsx)(n.code,{children:"sudo chmod +x polkadot"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'./target/release/polkadot --name "Your Node\'s Name"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Find your node on ",(0,a.jsx)(n.a,{href:"https://telemetry.polkadot.io/#list/Polkadot",children:"Telemetry"})]}),"\n"]}),"\n"]})}),(0,a.jsxs)(i.A,{value:"linux-package",children:[(0,a.jsx)(n.p,{children:"You can also install Polkadot from one of our package repositories."}),(0,a.jsxs)(n.p,{children:["Installation from the Debian or rpm repositories will create a ",(0,a.jsx)(n.code,{children:"systemd"})," service that can be used to\nrun a Polkadot node. The service is disabled by default, and can be started by running\n",(0,a.jsx)(n.code,{children:"systemctl start polkadot"})," on demand (use ",(0,a.jsx)(n.code,{children:"systemctl enable polkadot"})," to make it auto-start after\nreboot). By default, it will run as the ",(0,a.jsx)(n.code,{children:"polkadot"})," user. Command-line flags passed to the binary can\nbe customized by editing ",(0,a.jsx)(n.code,{children:"/etc/default/polkadot"}),". This file will not be overwritten on updating\npolkadot."]}),(0,a.jsx)(n.h3,{id:"debian-based-debian-ubuntu",children:"Debian-based (Debian, Ubuntu)"}),(0,a.jsxs)(n.p,{children:["Currently supports Debian 10 (Buster) and Ubuntu 20.04 (Focal), and derivatives. Run the following\ncommands as the ",(0,a.jsx)(n.code,{children:"root"})," user."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Import the security@parity.io GPG key\ngpg --recv-keys --keyserver hkps://keys.mailvelope.com 9D4B2B6EB8F97156D19669A9FF0812D491B96798\ngpg --export 9D4B2B6EB8F97156D19669A9FF0812D491B96798 > /usr/share/keyrings/parity.gpg\n# Add the Parity repository and update the package index\necho 'deb [signed-by=/usr/share/keyrings/parity.gpg] https://releases.parity.io/deb release main' > /etc/apt/sources.list.d/parity.list\napt update\n# Install the `parity-keyring` package - This will ensure the GPG key\n# used by APT remains up-to-date\napt install parity-keyring\n# Install polkadot\napt install polkadot\n\n"})}),(0,a.jsx)(n.p,{children:"If you don't want polkadot package to be automatically updated when you update packages on your\nserver, you can issue the following command:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-mark hold polkadot\n"})}),(0,a.jsx)(n.h3,{id:"rpm-based-fedora-centos",children:"RPM-based (Fedora, CentOS)"}),(0,a.jsx)(n.p,{children:"Currently supports Fedora 32 and CentOS 8, and derivatives."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Install dnf-plugins-core (This might already be installed)\ndnf install dnf-plugins-core\n# Add the repository and enable it\ndnf config-manager --add-repo https://releases.parity.io/rpm/polkadot.repo\ndnf config-manager --set-enabled polkadot\n# Install polkadot (You may have to confirm the import of the GPG key, which\n# should have the following fingerprint: 9D4B2B6EB8F97156D19669A9FF0812D491B96798)\ndnf install polkadot\n"})}),(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["If you choose to use a custom folder for the polkadot home by passing ",(0,a.jsx)(n.code,{children:"--base-path '/custom-path'"}),",\nyou will need to issue following command:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo mkdir /etc/systemd/system/polkadot.service.d\n"})}),(0,a.jsx)(n.p,{children:"And create a new file inside this folder:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo -e /etc/systemd/system/polkadot.service.d/custom.conf\n"})}),(0,a.jsx)(n.p,{children:"With the following content:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[Service]\nReadWritePaths=/custom-path\n"})}),(0,a.jsx)(n.p,{children:"And finally issue a reload to have your modifications applied by systemd:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"systemctl daemon-reload\n"})})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"get-substrate",children:"Get Substrate"}),"\n",(0,a.jsxs)(n.p,{children:["Follow instructions as outlined ",(0,a.jsx)(n.a,{href:"https://docs.substrate.io/quick-start/",children:"here"})," - note that Windows\nusers will have their work cut out for them. It's better to use a virtual machine instead."]}),"\n",(0,a.jsxs)(n.p,{children:["Test if the installation was successful by running ",(0,a.jsx)(n.code,{children:"cargo --version"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u03bb cargo --version\ncargo 1.41.0 (626f0f40e 2019-12-03)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"clone-and-build",children:"Clone and Build"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot",children:"paritytech/polkadot"})," repo's\nmaster branch contains the latest Polkadot code."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/paritytech/polkadot-sdk polkadot-sdk\ncd polkadot-sdk\n./scripts/init.sh\ncargo build --release\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively, if you wish to use a specific release, you can check out a specific tag (",(0,a.jsx)(n.code,{children:"v0.8.3"})," in\nthe example below):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/paritytech/polkadot-sdk polkadot-sdk\ncd polkadot-sdk\ngit checkout tags/polkadot-v1.9.0\n./scripts/init.sh\ncargo build --release\n"})}),"\n",(0,a.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,a.jsxs)(n.p,{children:["The built binary will be in the ",(0,a.jsx)(n.code,{children:"target/release"})," folder, called ",(0,a.jsx)(n.code,{children:"polkadot"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Polkadot"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'./target/release/polkadot --name "Your Node\'s Name"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"--help"})," flag to determine which flags you can use when running the node. For example, if\n",(0,a.jsx)(n.a,{href:"/docs/maintain-wss",children:"connecting to your node remotely"}),", you'll probably want to use ",(0,a.jsx)(n.code,{children:"--rpc-external"}),"\nand ",(0,a.jsx)(n.code,{children:"--rpc-cors all"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The syncing process will take a while, depending on your capacity, processing power, disk speed and\nRAM. On a $10 DigitalOcean droplet, the process can complete in some 36 hours."}),"\n",(0,a.jsx)(n.p,{children:"Congratulations, you're now syncing with Polkadot. Keep in mind that the process is identical when\nusing any other Substrate chain."}),"\n",(0,a.jsx)(n.h2,{id:"running-an-archive-node",children:"Running an Archive Node"}),"\n",(0,a.jsxs)(n.p,{children:["When running as a simple sync node (above), only the state of the past 256 blocks will be kept. It\ndefaults to ",(0,a.jsx)(n.a,{href:"#types-of-nodes",children:"archive mode"})," when validating. To support the full state, use the\n",(0,a.jsx)(n.code,{children:"--pruning"})," flag:"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Polkadot"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'./target/release/polkadot --name "My node\'s name" --pruning archive\n'})}),"\n",(0,a.jsxs)(n.p,{children:["It is possible to almost quadruple synchronization speed by using an additional flag:\n",(0,a.jsx)(n.code,{children:"--wasm-execution Compiled"}),". Note that this uses much more CPU and RAM, so it should be turned off\nafter the node syncs."]}),"\n",(0,a.jsx)(n.h2,{id:"using-docker",children:"Using Docker"}),"\n",(0,a.jsxs)(n.p,{children:["Finally, you can use Docker to run your node in a container. Doing this is more advanced, so it's\nbest left up to those already familiar with docker or who have completed the other set-up\ninstructions in this guide. Be aware that when you run polkadot in docker, the process only listens\non localhost by default. If you would like to connect to your node's services (rpc, and prometheus)\nyou need to ensure that you run you node with the ",(0,a.jsx)(n.code,{children:"--rpc-external"}),", and ",(0,a.jsx)(n.code,{children:"--prometheus-external"}),"\ncommands."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:'docker run -p 9944:9944 -p 9615:9615 parity/polkadot:v0.9.13 --name "calling_home_from_a_docker_container" --rpc-external --prometheus-external\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function r(e){var n=e.children,t=e.hidden,r=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var s=t(96540),a=t(34164),o=t(23104),r=t(56347),i=t(205),l=t(57485),d=t(31682),c=t(75376);function h(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,d.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,r.W6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,s=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:t,groupId:a});return[(0,l.aZ)(i),(0,s.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function b(e){var n,t,a,o,r=e.defaultValue,l=e.queryString,d=void 0!==l&&l,h=e.groupId,b=u(e),g=(0,s.useState)((function(){return function(e){var n,t=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:b})})),x=g[0],f=g[1],j=m({queryString:d,groupId:h}),y=j[0],k=j[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,c.Dv)(n),a=t[0],o=t[1],[a,(0,s.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=v[0],N=v[1],A=function(){var e=null!=y?y:w;return p({value:e,tabValues:b})?e:null}();return(0,i.A)((function(){A&&f(A)}),[A]),{selectedValue:x,selectValue:(0,s.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);f(e),k(e),N(e)}),[k,N,b]),tabValues:b}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function j(e){var n=e.className,t=e.block,s=e.selectedValue,r=e.selectValue,i=e.tabValues,l=[],d=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==s&&(d(n),r(a))},h=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var s,a=l.indexOf(e.currentTarget)+1;t=null!=(s=l[a])?s:l[0];break;case"ArrowLeft":var o,r=l.indexOf(e.currentTarget)-1;t=null!=(o=l[r])?o:l[l.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:c},o,{className:(0,a.A)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,o=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=r.find((function(e){return e.props.value===o}));return i?(0,s.cloneElement)(i,{className:(0,a.A)("margin-top--md",i.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function k(e){var n=b(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,Object.assign({},n,e)),(0,f.jsx)(y,Object.assign({},n,e))]})}function v(e){var n=(0,g.A)();return(0,f.jsx)(k,Object.assign({},e,{children:h(e.children)}),String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);