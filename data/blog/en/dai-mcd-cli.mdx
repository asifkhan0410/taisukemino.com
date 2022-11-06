---
title: Going Through the CDP Life Cycle of Multi-Collateral DAI
description: Introduction
date: '2019-06-24T09:21:32.544Z'
keywords: []
slug: /@taisukemino/dai-mcd-cli
language: "en"
---

### Introduction

MakerDAO released SAI as the Alpha version in December 2016, and DAI was released as a beta version in December 2017. DAI is currently a single-collateral model, which means you can lock only a single type of asset. Thus, DAI support only ETH(PETH, precisely speaking) right now, but they will upgrade this single-collateral DAI to multi-collateral DAI where they support more than one collateral types(PETH will be removed and regular ETH will be usable among other collateral). For example, they are planning to use [Digix](https://digix.global/) as its next asset, which is a token backed by physical gold. Eventually, multiple assets could be used to create a single CDP, including ETH, other ERC20 tokens, non-fungible tokens or other fungible token standards like ERC777.

This upgrade is expected to make it easy for people to create DAI and reduce the risk of under-collateralization through diversification of their collateral. People will have more options when they lock up their collateral. It’s risky to invest only with ETH because the collateralization ratio depends solely on the price of ETH. If you don’t understand how single-collateral DAI system works, I suggest that you read my previous blog before proceeding.

There are already [the smart contracts](https://github.com/makerdao/dss/tree/master) for multi-collateral DAI test releases on Kovan testnet. They have also updated their tools to help us interact with the MCD system. You can check out [a CDP portal site](https://mcd-cdp-portal-staging.now.sh/), [a command line tool](https://github.com/makerdao/mcd-cli), [Dai.js library](https://github.com/makerdao/dai.js) and others. In this post, we are going to use their command line tool, [mcd-cli](https://github.com/makerdao/mcd-cli), to go through the lifecycle of CDPs.

This guide is based on MakerDAO’s official [guide](https://github.com/makerdao/developerguides/blob/master/devtools/mcd-cli/mcd-cli-guide-01/mcd-cli-guide-01.md) on mcd-cli, but I added some explanations and set up instructions as I had a hard time understanding some parts of it. Also, keep in mind that this guide is going to use v0.2.6 release on Kovan. I tested this out in my Mac but not in Linux.

Our goal is to go through the lifecycle of CDP.

All right, let’s start!

### Set Up

There are some steps we need to take before we start playing. In this setup, we will make a new Ethereum account that interacts with smart contracts, install mcd-cli and then get ETH and COL1 token. The COL1 token is the multi-collateral token for testing purpose(1 USD ≒ 1 DAI ≒ 10 COL1). Below are the steps in detail. We will go over one by one.

1) install parity  
2) create a new account  
3) install dapp tools  
4) install the mcd package  
5) set up .sethrc  
6) get some Kovan ETH to your account  
7) get some COL1 tokens via faucet

**1) install parity**
```
// install Rust  
$ curl https://sh.rustup.rs -sSf | sh  
//install parity client  
$ bash <(curl https://get.parity.io -L) -r stable
```
\*I haven’t tested yet, but geth should work as well.

**2) create a new account**
```
$ parity — chain kovan account new  
Please note that password is NOT RECOVERABLE.  
Type password: *********  
Repeat password: *********  
0x5e232581fc1cb8cafacfcd951de05cf906e73f93  
// do NOT forget this password because you are going to use this many times.
```
You can see your account with this command:
```
$ parity — chain kovan account list  
0x5e232581fc1cb8cafacfcd951de05cf906e73f93
```
**3) install dapp tools**

If you are running GNU/Linux or macOS you can use their one liner installer:
```
$ curl https://dapp.tools/install | sh
```
[dapp.tools](https://dapp.tools/) is a cool command line friendly blockchain development tools. They use the nix package manager that is used in NixOS Linux distribution. This script downloads the Nix package manager, setups binary cache with Cachix and installs our most used tools such as dapp, seth, solc, hevm and ethsign.

**4) install the mcd package**
```
$ dapp pkg install mcd
```
Again, I am using v0.2.6 here:
```
$ mcd — version  
mcd 0.2.6-rc.1
```
_\*make sure you install v0.2.6. This guide might not work in other versions._

**5) set up .sethrc**

mcd-cil is based on [seth](https://github.com/dapphub/dapptools/tree/master/src/seth), which is an Ethereum Swiss Army knife. If you want to make a function call of smart contracts right now, you need curl, post, rpc methods and it’s horrible. With seth, you can call functions in smart contracts much easier.

Edit _~/.sethrc_ file like this:
```
export ETH\_FROM=0x5e232581fc1cb8cafacfcd951de05cf906e73f93  
\# this is the address you created before  
export MCD\_CHAIN=kovan  
export SETH\_CHAIN=kovan
```
_\*If you want to configure a custom location for your key files, use the ETH\_KEYSTORE variable._

**6) get some Kovan ETH to your account**

Next, go to [this faucet](https://faucet.kovan.network/) and send some Kovan ETH to your address. It requires you to log in with your Github account. You then must paste your ETH address you created in the input box and request the funds. You can also ask to send you some in [this Gitter channel](https://gitter.im/kovan-testnet/faucet). Or simply ask your friend. 0.2 KETH should be enough. Check out the [etherscan](https://kovan.etherscan.io/address/0x5e232581fc1cb8cafacfcd951de05cf906e73f93) and make sure you have some Kovan ETH.

**7) get some COL1 tokens via faucet**

Let’s get COL1 token(one of the ERC20 collateral tokens for testing purpose) now. You can withdraw tokens from the smart contract.

Setting the COL1 address to env variable:
```
$ export COL1A=0xc644e83399f3c0b4011d3dd3c61bc8b1617253e5
```
Setting the Faucet address to env variable:
```
$ export FAUCET=0xa402e771a4662dcbe661e839a6e8c294d2ce44cf
```
Call the gulp(address) function to get some COL1 tokens:
```
$ seth send $FAUCET 'gulp(address)' $COL1A  
seth-send: warning: \`ETH\_GAS’ not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 36 bytes of calldata.  
seth-send: 0xf0ac981342ac8ac9c59cd25107667ecc7fd2dadc4089e59aa0b09055d5d08d09  
seth-send: Waiting for transaction receipt…  
seth-send: Transaction included in block 11268445.
```
You need to type a password right after you run the command. seth looks for keys and password in the standard directories of Geth and Parity and then it makes a transaction.

You can also use a command line to see the balance of the token:
```
$ mcd — ilk=COL1-A gem balance ext  
50.000000000000000000
```
You can also search the transaction hash above on etherscan. Like [this](https://kovan.etherscan.io/tx/0xf0ac981342ac8ac9c59cd25107667ecc7fd2dadc4089e59aa0b09055d5d08d09). Then if you jump to [your account](https://kovan.etherscan.io/address/0x5e232581fc1cb8cafacfcd951de05cf906e73f93), you can see that you got [COL1 token](https://kovan.etherscan.io/address/0x5e232581fc1cb8cafacfcd951de05cf906e73f93#tokentxns).  
_\*It says TOK1 in Etherscan but don’t worry about this._

### Going Through the CDP Life Cycle With a Command Line Tool

All right! Now we are ready to go through the life cycle of CDP with COL1 token we just acquired. We will take these steps below:

1) Open CDP  
2) Deposit COL1 token  
3) Withdraw DAI  
4) Payback DAI  
5) Remove collateral  
6) Close CDP

Let me go over the first three steps.

**1) Open CDP**  
**2) Deposit COL1 token**  
**3) Withdraw DAI**

First, run this command below:
```
$ mcd --ilk=COL1-A gem join 30  
Insufficient allowance: ETH\_FROM: 0x5e232581fc1cb8cafacfcd951de05cf906e73f93  
Grant approval to move COL1 to 0xc4e81c9690bb664d682826e3415134c23d08e7bb? \[Y/n\]: y  
seth-send: warning: \`ETH\_GAS' not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 68 bytes of calldata.  
seth-send: 0x2b5572b04a676533769ffd917c463e02507e7195e1c78981d784268ac6d4af71  
seth-send: Waiting for transaction receipt....  
seth-send: Transaction included in block 11268499.  
seth-send: warning: \`ETH\_GAS' not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 68 bytes of calldata.  
seth-send: 0x2ca98bbd831afc3de4d8b03d469350f8cc0d2a9bac5cf32e9f87558f984f76ff  
seth-send: Waiting for transaction receipt....  
seth-send: Transaction included in block 11268505.  
vat 30.000000000000000000 Unlocked collateral (COL1)  
ink 0.000000000000000000 Locked collateral (COL1)  
ext 20.000000000000000000 External account balance (COL1)
```
Let’s take a look at this output first:
```
vat 30.000000000000000000 Unlocked collateral (COL1)  
ink 0.000000000000000000 Locked collateral (COL1)  
ext 20.000000000000000000 External account balance (COL1)
```
Now your COL1 collateral tokens are added to the internal registry called _vat_ that keeps track of the balance of collateral in CDP. You can see the balance is 30. But they are not yet locked in the CDP. _ink_ is the balance of locked collateral in CDP. Since the collateral is not yet assigned to any CDP, _ink_ says 0. _ext_ is the external token balance outside of MakerDAO system. Since you added 30 COL1 tokens in _vat_, now it’s 20.

Let’s take a look at the gem command:
```
$ mcd — ilk=COL1-A gem join 30
```
The _join_ subcommand can add collateral from the sender account to any specified CDP. You are specifying the collateral type with — _ilk=_ option and the number of tokens at the end.

Now let’s lock your COL1 collateral tokens in CDP and draw some DAI.

Run the command below:
```
$ mcd --ilk=COL1-A frob 30 1  
seth-send: warning: \`ETH\_GAS' not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 196 bytes of calldata.  
seth-send: 0x1a8bdfc017d96c921b1cba172dccf9449eac1f28d0e03e26f90194f7ab5c9bba  
seth-send: Waiting for transaction receipt...  
seth-send: Transaction included in block 11268516.  
ilk  COL1-A                                     Collateral type  
urn  0x5e232581Fc1cB8caFAcfCd951De05cF906e73F93 Urn handler  
ink  30.000000000000000000                      Locked collateral (COL1)  
art  1.000000000000000000                       Issued debt (Dai)  
tab  1.000479620379870482338446891              Outstanding debt (Dai)  
rap  0.000479620379870482338446891              Accumulated stability fee (Dai)  
\-->  2.36                                       Collateralization ratio

spot 0.078725888888888888888888889              COL1 price with safety mat (USD)  
rate 1.000479620379870463446010918              COL1 DAI exchange rate
```
Let’s take a look at the output first:
```
ilk  COL1-A                                     Collateral type  
urn  0x5e232581Fc1cB8caFAcfCd951De05cF906e73F93 Urn handler  
ink  30.000000000000000000                      Locked collateral (COL1)  
art  1.000000000000000000                       Issued debt (Dai)
```
Now you can see in _ink_ that your COL1 collateral token is locked in CDP.  
\*_urn_ means a specific CDP

You can also see in _art_ that DAI is issued.

Once we explicitly lock some collateral tokens from _vat_ with the _frob_ command, some tokens were locked in the _urn_ and DAI was generated.

The _frob_ command specifies a collateral type with _— ilk=_ flag, the number of tokens you want to lock(30) and then the amount of DAI(1) you would like to generate.
```
$ mcd — ilk=COL1-A frob 30 1
```
But DAI is still in _vat,_ so let’s withdraw DAI and send it to your ETH personal account.

Run:
```
$ mcd dai exit 1  
Vat Dai: approval required: urn: 0x5e232581Fc1cB8caFAcfCd951De05cF906e73F93  
Grant approval to move Dai from the Vat? \[Y/n\]: y  
seth-send: warning: \`ETH\_GAS' not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 36 bytes of calldata.  
seth-send: 0x12a1b3276f3a308d96084d1c090a0337892b06a7ba5eba17e542abf0c83f4ff7  
seth-send: Waiting for transaction receipt....  
seth-send: Transaction included in block 11268535.  
seth-send: warning: \`ETH\_GAS' not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 68 bytes of calldata.  
seth-send: 0x9ea17c6de80fe99abb8165c0f490c7066a75dc07ad82413c2ace68a8e46888b4  
seth-send: Waiting for transaction receipt....  
seth-send: Transaction included in block 11268540.  
vat 0.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 1.000000000000000000 ERC20 Dai balance
```
You can see that DAI is subtracted from _vat_ and then added to _ext_.
```
vat 0.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 1.000000000000000000 ERC20 Dai balance
```
The _exit_ subcommand of a dai command can specify the amount of DAI you want to withdraw.

You can also check the balance with the _balance_ subcommand.
```
$ mcd dai balance  
vat 0.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 1.000000000000000000 ERC20 Dai balance
```
I know it was a bit complex, but so far we opened CDP, deposited some COL1 tokens, and withdrew some DAI.

Now let’s payback DAI, remove collateral and then finally close CDP.

**4) Pay back DAI**  
**5) Remove collateral**  
**6) Close CDP**

First:
```
$ mcd dai join 1  
ERC20 Dai: insufficient allowance: ETH\_FROM: 0x5e232581fc1cb8cafacfcd951de05cf906e73f93  
Grant approval to transfer Dai to the 0x7bb403aae0330f1acaad8f2a06ebe4b4e4784418? \[Y/n\]: y  
seth-send: warning: \`ETH\_GAS' not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 68 bytes of calldata.  
seth-send: 0x0792f68611a51b66793bee3bf20c8f923e324f2791e2eeeda73141e3216e5959  
seth-send: Waiting for transaction receipt....  
seth-send: Transaction included in block 11268942.  
seth-send: warning: \`ETH\_GAS' not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 68 bytes of calldata.  
seth-send: 0x6093fa6877ad9342077415313e28584c943f85135e597751f97b997f2a086ed2  
seth-send: Waiting for transaction receipt...  
seth-send: Transaction included in block 11268946.  
vat 1.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 0.000000000000000000 ERC20 Dai balance
```
You can see that DAI was moved from _ext_ to _vat_.
```
vat 1.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 0.000000000000000000 ERC20 Dai balance
```
You can use the _balance_ subcommand as well:
```
$ mcd dai balance  
vat 1.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 0.000000000000000000 ERC20 Dai balance
```
The _join_ subcommand of a _dai_ command can specify the amount of DAI debt you want to pay back to your urn.
```
$ mcd dai join 1
```
Next, remove/burn your Dai debt and remove your COL1 collateral from the internal system(_ink_).
```
$ mcd --ilk=COL1-A frob -- -30 -1  
seth-send: warning: \`ETH\_GAS' not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 196 bytes of calldata.  
seth-send: 0xa04330cbf6f5755e702fb3d4e2c37fe07825d3723b385f46a66912a31d192649  
seth-send: Waiting for transaction receipt....  
seth-send: Transaction included in block 11329728.  
ilk  COL1-A                                     Collateral type  
urn  0x5e232581Fc1cB8caFAcfCd951De05cF906e73F93 Urn handler  
ink  0.000000000000000000                       Locked collateral (COL1)  
art  0.000000000000000000                       Issued debt (Dai)  
tab  0                                          Outstanding debt (Dai)  
rap  0                                          Accumulated stability fee (Dai)  
\-->  0                                          Collateralization ratio

spot 0.078725888888888888888888889              COL1 price with safety mat (USD)  
rate 1.000479620379870463446010918              COL1 DAI exchange rate
```
If we look back on the output we had when we used _frob_ command before, we had locked collateral in ink and issued DAI in art.
```
ilk  COL1-A                                     Collateral type  
urn  0x5e232581Fc1cB8caFAcfCd951De05cF906e73F93 Urn handler  
ink  30.000000000000000000                      Locked collateral (COL1)  
art  1.000000000000000000                       Issued debt (Dai)
```
When we look at the output we have here:
```
ilk  COL1-A                                     Collateral type  
urn  0x5e232581Fc1cB8caFAcfCd951De05cF906e73F93 Urn handler  
ink  0.000000000000000000                       Locked collateral (COL1)  
art  0.000000000000000000                       Issued debt (Dai)
```
You can see that the locked collateral in the _ink_ and issued debt in _art_ is gone.

We used the _frob_ command to lock the COL1 collateral token and then generate DAI before. Now we are using it backward. This _frob_ command specifies a collateral type with _— ilk=_ flag, the number of tokens you want to remove from ink(30) and then the amount of DAI(1) you would like to burn.
```
$ mcd — ilk=COL1-A frob — -30 -1
```
Now your COL1 token collateral is in _vat:_
```
$ mcd gem --ilk=COL1-A balance  
vat 30.000000000000000000 Unlocked collateral (COL1)  
ink 0.000000000000000000 Locked collateral (COL1)  
ext 20.000000000000000000 External account balance (COL1)
```

Finally, remove your collateral COL1 token from the COL1 adapter:
```
$ mcd --ilk=COL1-A gem exit 30  
seth-send: warning: \`ETH\_GAS' not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 68 bytes of calldata.  
seth-send: 0x880fe9d00953f229be96bbc170867238c1b547f6a28e6ac29f7618d8bde105c2  
seth-send: Waiting for transaction receipt...  
seth-send: Transaction included in block 11329744.  
vat 0.000000000000000000 Unlocked collateral (COL1)  
ink 0.000000000000000000 Locked collateral (COL1)  
ext 50.000000000000000000 External account balance (COL1)
```

You can see that your token is removed from _vat_ and back in _ext_.
```
vat 0.000000000000000000 Unlocked collateral (COL1)  
ink 0.000000000000000000 Locked collateral (COL1)  
ext 50.000000000000000000 External account balance (COL1)
```

Great! Now you should have your initial collateral (COL1) back in your parity account.

If you want to learn more about MCD, you can check out [their glossary page](https://github.com/makerdao/dss/wiki/Glossary). You can also read the core smart contracts for multi-collateral DAI [here](https://github.com/makerdao/dss).
