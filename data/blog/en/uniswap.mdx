---
title: Build an ETH <=> ERC20 Tokens Exchange App With Uniswap
description: >-
  We will build a simple application that exchange ether and ERC20 tokens using
  the Uniswap.
date: '2019-10-11T11:46:35.078Z'
keywords: []
slug: /@taisukemino/uniswap
language: "en"
---

![](https://cdn-images-1.medium.com/max/800/1*mQ33qO60_0YqAyYNU0Ao9g.png)

### **Introduction**

Blockchain technology introduced a public ledger that everybody can use and nobody owns for the first time in the history of humankind. And yet, we have a bunch of centralized exchanges that control hashing power and private keys. Although centralized exchanges are necessary to exchange fiat money with cryptocurrencies, it goes against the original philosophy of bitcoin. The technology was supposed to transfer the power from institutions like the government and corporations to individuals.

How can we bring the control back to people? People have been building decentralized protocols to empower individuals. Among them is the decentralized exchange protocols. Each implementation has a different degree of decentralization, but I’m bullish on the Uniswap exchange protocol because they have a high degree of decentralization without compromising the user experience.

The only way to replace existing systems is to provide a better service that people want to use. As a developer, this means writing code and building things. We will do just that in this post. We will build a simple application that exchange ether and ERC20 tokens using the Uniswap. If you follow along, you will be able to allow your dapp or wallet users to exchange ether and ERC20 tokens easily.

I briefly talk about how the Uniswap works and then start building our application.

### **Uniswap in a Nutshell**

Uniswap is a decentralized exchange protocol for ether and ERC20 tokens. The whole process takes place on-chain and there are no gatekeepers. There is a separate exchange smart contract for each ERC20 token. These exchange contracts hold reserves of both ETH and their associated ERC20. Traders can make trades against the reserves at any time. They send ether to the contract and get the ERC20 token out and vice versa. These reserves are deposited by liquidity providers who collect fees on every trade. It’s also possible to exchange between ERC20 tokens.

The price of the trade is automatically determined by the pricing formula: [the Constant Product Market Maker Model](https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf). It is calculated so that `_the quantity of ether in the contract_ * _the quantity of A tokens in the contract_` is always constant. This formula applies to ERC20 tokens exchange as well where `_the quantity of A tokens in the contract_ * _the quantity of B tokens in the contract_`  is always constant.

Let’s say you have `10ETH` and `1,000DAI` in the dai exchange contract. Then the constant would be `10 * 1000 = 10,000`( `x * y = k`). If you send `1ETH` to the contract then now there’s `11ETH` in the contract. The contract says the ETH times the DAI in the contract needs to be held constant. So `10,000 / 11 ≒ 909DAI` should be in the contract. This also means that the contract doesn’t have to have `1000DAI`, and thus it returns `1000 – 909 = 91DAI` back to the buyer, which is the difference between the amount that’s in the contract and amount of should be in the contract.

This formula is often called x times y equals k formula as well. The graph below shows how the price changes depending on the value of x and y:

![x * y = k curve](https://cdn-images-1.medium.com/max/800/1*c3NH7TYQN7qvs-UheOQ2HQ.png)  
x * y = k curve

The Uniswap reduces the cost of coordinating buyers and sellers through their reserve system and automatic pricing formula. As a result, traders can exchange tokens much easier and faster.

### **Set-Up**

All right, let’s get started with our application. We will build a simple nodejs application that exchanges ether and dai. I made [the GitHub repository](https://github.com/icovo/eht-uniswap-demo) for the finished code. I suggest that you take a brief look at it so that you can make a mental map before you start. I’m using macOS High Sierra.

**Obtain Your Private Key and Address**  
First, obtain your private key and address from [vanity-eth](https://vanity-eth.tk/). Click on the “Generate” button. They will be generated for you at the bottom. Do NOT use these other than testing purposes.

**Get Some Ether in Rinkeby Testnet**  
If you do not have any ether in Rinkeby, get some via a [faucet](https://faucet.rinkeby.io/). Tweet something like this:
```
Requesting faucet funds into YOUR_ADDRESS_HERE on the #Rinkeby #Ethereum test network.
```
and paste the tweet link in the form. If it takes too much time to get ether, ask your friends. I might be able to send you some if you tweet me [@taisuke_mino](https://twitter.com/taisuke_mino).

You can check your balance in the [Rinkeby etherscan](https://rinkeby.etherscan.io/) by searching your address. 0.1ETH should be enough.

**Start a New Npm Project**
```
mkdir eht-uniswap-demo  
cd eht-uniswap-demo/  
npm init --yes
```
\*If you don’t have npm and nodejs, install them from [here](https://nodejs.org/en/).

**Initialize Git**
```
git init
```
**Install the web3 Package**
```
npm i --save web3@1.2.1
```
web3 is the Ethereum JavaScript API. It is an interface to Ethereum networks(including testnets). It communicates with an Ethereum node or transacts with smart contracts deployed on the blockchain from your JavaScript application.

**Get the Infura Endpoint**  
We will use [Infura](https://infura.io/) as a provider to communicate with the Ethereum network. Make an Infura account and get the endpoint at Rinkeby by making a new project. It should look something like this:
```
https://rinkeby.infura.io/v3/YOUR_PROJECT_ID
```
**Install the ethereumjs-tx Package**
```
npm i --save ethereumjs-tx@1.3.7
```
We use ethereumjs-tx to create and sign transactions.

### **Exchange ETH with DAI**

Now we will start writing codes. You can see the finished code [here](https://github.com/icovo/eht-uniswap-demo).

**Make a New File**  
Make a new file [EthToDaiRinkeby.mjs](https://github.com/icovo/eht-uniswap-demo/blob/master/EthToDaiRinkeby.mjs). mjs is a file extension that allows you to write with ES6 syntax.

**Import Packages**
```
import Web3 from "web3";  
import EthTx from "ethereumjs-tx";
```
**Declare the Exchange Contract Address and Abi Variables**  
This is the exchange contract address and the abi of dai in Rinkeby testnet. I grabbed them from [here](https://hackmd.io/SHPZJPSUTSW8se71CP_TBA). You use them to interact with the exchange smart contract.

the exchange contract address:
```
const daiExchangeAddress = "0x77dB9C915809e7BE439D2AB21032B1b8B58F6891";
```
\*you can see the contract in [Etherscan](https://rinkeby.etherscan.io/address/0x77dB9C915809e7BE439D2AB21032B1b8B58F6891).

the exchange contract abi:
```
const daiExchangeAbi = '[{“name”: “TokenPurchase”, “inputs”: [{“type”: “address”, “name”: “buyer”, “indexed”: true}, {“type”: “uint256”, “name”: “eth_sold”, “indexed”: true}, {“type”: “uint256”, “name”: “tokens_bought”, “indexed”: true}], “anonymous”: false, “type”: “event”}, {“name”: “EthPurchase”, “inputs”: [{“type”: “address”, “name”: “buyer”, “indexed”: true}, {“type”: “uint256”, “name”: “tokens_sold”, “indexed”: true}, {“type”: “uint256”, “name”: “eth_bought”, “indexed”: true}], “anonymous”: false, “type”: “event”}, {“name”: “AddLiquidity”, “inputs”: [{“type”: “address”, “name”: “provider”, “indexed”: true}, {“type”: “uint256”, “name”: “eth_amount”, “indexed”: true}, {“type”: “uint256”, “name”: “token_amount”, “indexed”: true}], “anonymous”: false, “type”: “event”}, {“name”: “RemoveLiquidity”, “inputs”: [{“type”: “address”, “name”: “provider”, “indexed”: true}, {“type”: “uint256”, “name”: “eth_amount”, “indexed”: true}, {“type”: “uint256”, “name”: “token_amount”, “indexed”: true}], “anonymous”: false, “type”: “event”}, {“name”: “Transfer”, “inputs”: [{“type”: “address”, “name”: “_from”, “indexed”: true}, {“type”: “address”, “name”: “_to”, “indexed”: true}, {“type”: “uint256”, “name”: “_value”, “indexed”: false}], “anonymous”: false, “type”: “event”}, {“name”: “Approval”, “inputs”: [{“type”: “address”, “name”: “_owner”, “indexed”: true}, {“type”: “address”, “name”: “_spender”, “indexed”: true}, {“type”: “uint256”, “name”: “_value”, “indexed”: false}], “anonymous”: false, “type”: “event”}, {“name”: “setup”, “outputs”: [], “inputs”: [{“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 175875}, {“name”: “addLiquidity”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “min_liquidity”}, {“type”: “uint256”, “name”: “max_tokens”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 82605}, {“name”: “removeLiquidity”, “outputs”: [{“type”: “uint256”, “name”: “out”}, {“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “amount”}, {“type”: “uint256”, “name”: “min_eth”}, {“type”: “uint256”, “name”: “min_tokens”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 116814}, {“name”: “__default__”, “outputs”: [], “inputs”: [], “constant”: false, “payable”: true, “type”: “function”}, {“name”: “ethToTokenSwapInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “min_tokens”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 12757}, {“name”: “ethToTokenTransferInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “min_tokens”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 12965}, {“name”: “ethToTokenSwapOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 50463}, {“name”: “ethToTokenTransferOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 50671}, {“name”: “tokenToEthSwapInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_eth”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 47503}, {“name”: “tokenToEthTransferInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_eth”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 47712}, {“name”: “tokenToEthSwapOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “eth_bought”}, {“type”: “uint256”, “name”: “max_tokens”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 50175}, {“name”: “tokenToEthTransferOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “eth_bought”}, {“type”: “uint256”, “name”: “max_tokens”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 50384}, {“name”: “tokenToTokenSwapInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_tokens_bought”}, {“type”: “uint256”, “name”: “min_eth_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 51007}, {“name”: “tokenToTokenTransferInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_tokens_bought”}, {“type”: “uint256”, “name”: “min_eth_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}, {“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 51098}, {“name”: “tokenToTokenSwapOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “max_tokens_sold”}, {“type”: “uint256”, “name”: “max_eth_sold”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 54928}, {“name”: “tokenToTokenTransferOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “max_tokens_sold”}, {“type”: “uint256”, “name”: “max_eth_sold”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}, {“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 55019}, {“name”: “tokenToExchangeSwapInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_tokens_bought”}, {“type”: “uint256”, “name”: “min_eth_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “exchange_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 49342}, {“name”: “tokenToExchangeTransferInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_tokens_bought”}, {“type”: “uint256”, “name”: “min_eth_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}, {“type”: “address”, “name”: “exchange_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 49532}, {“name”: “tokenToExchangeSwapOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “max_tokens_sold”}, {“type”: “uint256”, “name”: “max_eth_sold”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “exchange_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 53233}, {“name”: “tokenToExchangeTransferOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “max_tokens_sold”}, {“type”: “uint256”, “name”: “max_eth_sold”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}, {“type”: “address”, “name”: “exchange_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 53423}, {“name”: “getEthToTokenInputPrice”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “eth_sold”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 5542}, {“name”: “getEthToTokenOutputPrice”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 6872}, {“name”: “getTokenToEthInputPrice”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 5637}, {“name”: “getTokenToEthOutputPrice”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “eth_bought”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 6897}, {“name”: “tokenAddress”, “outputs”: [{“type”: “address”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1413}, {“name”: “factoryAddress”, “outputs”: [{“type”: “address”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1443}, {“name”: “balanceOf”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_owner”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1645}, {“name”: “transfer”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_to”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 75034}, {“name”: “transferFrom”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_from”}, {“type”: “address”, “name”: “_to”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 110907}, {“name”: “approve”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_spender”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 38769}, {“name”: “allowance”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_owner”}, {“type”: “address”, “name”: “_spender”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1925}, {“name”: “name”, “outputs”: [{“type”: “bytes32”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1623}, {“name”: “symbol”, “outputs”: [{“type”: “bytes32”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1653}, {“name”: “decimals”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1683}, {“name”: “totalSupply”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1713}]';
```
**Declare Your Address and Private Key Variables**
```
const addressFrom = "[YOUR_ADDRESS]";  
const privKey = "[YOUR_PRIVATE_KEY]";
```
**Set Up Web3**  
Set up Web3 to use Infura as your web3 provider:
```
const web3 = new Web3(  
  new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/[YOUR_PROJECT_ID]"  
  )  
);
```
**Instantiate the Contract**  
You use the `Contract` method of web3 with the address and abi to instantiate the contract. Pass those values as arguments to `web3.eth.Contract`.
```
const daiExchangeContract = new web3.eth.Contract(JSON.parse(daiExchangeAbi), daiExchangeAddress);
```
Now we are ready to call the exchange contract function to exchange ether with dai.

**Declare the** `ETH_SOLD` **Const Variable**  
First, I declare a const variable to specify the number of ether I want to exchange with dai:
```
const ETH_SOLD = web3.utils.toHex(50000000000000000); // 0.05ETH
```

**Encode the Abi for the** `ethToTokenSwapInput` **Function**  
We use the [ethToTokenSwapInput](https://docs.uniswap.io/smart-contract-integration/interface#exchange-interface) function to exchange eth with dai.
```
function ethToTokenSwapInput(uint256 min_tokens, uint256 deadline) external payable returns (uint256 tokens_bought);
```
They take two arguments: `min_tokens` and `deadline`. The `min_tokens` argument specifies the minimum amount of dai bought. The `deadline` argument is literally a transaction deadline. It says “this transaction can only execute within this time frame.”

These arguments can mitigate the risk of front-running by miners. Let’s say you are selling 1 ETH and the current price is 200 DAI. You can say “If I get anything less than 199 DAI I want the transaction to fail.” Malicious front-runner might push the price ahead of you but you say that your transaction should go through only up to the amount you’ve specified in your transaction. The deadline helps you to mitigate the risk by preventing miners from holding transactions and executing them at a time where it’s more profitable for them. You can learn more about the front-running [here](https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281).

I declare another const variable that I pass to `min_tokens` argument.
```
const MIN_TOKENS = web3.utils.toHex(0.2 * 10 ** 18); // 0.2 DAI
```
You want to choose the amount that is not too low because it’s easy to exploit for front-runners and not too high because your transaction could easily fail.

I declare another const variable that I pass to the `_deadline_` argument. This number below is the Unix timestamp of `10/01/2019 @ 12:00am (UTC)`. You’d want to specify the number depending on when you are reading this post. You can use an online converter tool [here](https://www.unixtimestamp.com/index.php).
```
const DEADLINE = 1569888000; // 10/01/2019 @ 12:00am (UTC)
```
Now, pass two const variables as arguments of the `ethToTokenSwapInput` function and encode the abi for it:
```
const exchangeEncodedABI = daiExchangeContract.methods.ethToTokenSwapInput(MIN_TOKENS, DEADLINE).encodeABI();
```
**Declare the** `sendSignedTx` **Function**  
Next, make a function to sign a transaction object and then propagate that to an Ethereum network:
```
function sendSignedTx(transactionObject, cb) {  
  let transaction = new EthTx(transactionObject);  
  const privateKey = new Buffer.from(privKey, "hex");  
  transaction.sign(privateKey);  
  const serializedEthTx = transaction.serialize().toString("hex");  
  web3.eth.sendSignedTransaction(`0x${serializedEthTx}`, cb);  
}
```
**Construct a Transaction Object and Then Execute** `sendSignedTx`
```
web3.eth.getTransactionCount(addressFrom).then(transactionNonce => {  
  const transactionObject = {  
    chainId: 4,  
    nonce: web3.utils.toHex(transactionNonce),  
    gasLimit: web3.utils.toHex(6000000),  
    gasPrice: web3.utils.toHex(10000000000),  
    to: daiExchangeAddress,  
    from: addressFrom,  
    data: exchangeEncodedABI,  
    value: ETH_SOLD  
  };

sendSignedTx(transactionObject, function(error, result){  
    if(error) return console.log("error ===>", error);  
    console.log("sent ===>", result);  
  })  
}  
);
```
Beware that I am passing `exchangeEncodedABI` and `ETH_SOLD` to `data` and `value` property for each.

**Run the File**
```
npm run eth-to-dai-rinkeby
```
Once you get a transaction hash like this `0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10`, you can go to etherscan to see the detail of your transaction. Below is my transaction as an example.

![[https://rinkeby.etherscan.io/tx/0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10](https://rinkeby.etherscan.io/tx/0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10)](https://cdn-images-1.medium.com/max/800/1*-HfsdMtYZ9ms_WotpvYWWw.png)
[https://rinkeby.etherscan.io/tx/0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10](https://rinkeby.etherscan.io/tx/0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10)

If it were successful, now you can [see](https://rinkeby.etherscan.io/address/0xd0633f104cbb4f6631268f2f73ea428715253517#tokentxns) that you received some DAI in your address from the Erc20 Token Txns tab.

![](https://cdn-images-1.medium.com/max/800/1*5xBy06QU9M1bFNu4r7XPNQ.png)

Great!

### **Exchange DAI with ETH**

Let’s exchange DAI with ETH next. This is going to be a bit tricky. We are going to make two transactions. First, we give the approval to the Uniswap Dai exchange contract so that the contract can spend Dai on behalf of our account. Second, we call the `_tokenToEthSwapInput_` function to exchange Dai with Eth.

#### **1\. GIVING THE APPROVAL TO THE UNISWAP DAI EXCHANGE CONTRACT**

We make another file for this: _approveDaiExchangeRinkeby.mjs._ I am going to skip the detail as most of the code is going to be the same. You can see the finished code [here](https://github.com/icovo/eht-uniswap-demo/blob/master/approveDaiExchangeRinkeby.mjs).

**Declare the Token Contract Address and Abi Variables**  
This is the dai token contract address and abi in Rinkeby testnet.

the token contract address:
```
const daiTokenAddress = “0x2448eE2641d78CC42D7AD76498917359D961A783”;
```
\*you can see it in [Etherscan](https://rinkeby.etherscan.io/address/0x77dB9C915809e7BE439D2AB21032B1b8B58F6891).

the token contract abi:
```
const daiTokenAbi = '[{“name”: “Transfer”, “inputs”: [{“type”: “address”, “name”: “_from”, “indexed”: true}, {“type”: “address”, “name”: “_to”, “indexed”: true}, {“type”: “uint256”, “name”: “_value”, “indexed”: false}], “anonymous”: false, “type”: “event”}, {“name”: “Approval”, “inputs”: [{“type”: “address”, “name”: “_owner”, “indexed”: true}, {“type”: “address”, “name”: “_spender”, “indexed”: true}, {“type”: “uint256”, “name”: “_value”, “indexed”: false}], “anonymous”: false, “type”: “event”}, {“outputs”: [], “inputs”: [{“type”: “string”, “name”: “_name”}, {“type”: “string”, “name”: “_symbol”}, {“type”: “uint256”, “name”: “_decimals”}, {“type”: “uint256”, “name”: “_supply”}], “constant”: false, “payable”: false, “type”: “constructor”}, {“name”: “transfer”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_to”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 74020}, {“name”: “transferFrom”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_from”}, {“type”: “address”, “name”: “_to”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 110371}, {“name”: “approve”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_spender”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 37755}, {“name”: “name”, “outputs”: [{“type”: “string”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 6402}, {“name”: “symbol”, “outputs”: [{“type”: “string”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 6432}, {“name”: “decimals”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 663}, {“name”: “totalSupply”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 693}, {“name”: “balanceOf”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “arg0”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 877}, {“name”: “allowance”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “arg0”}, {“type”: “address”, “name”: “arg1”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1061}]';
```
\*token abis are usually all the same for ERC20 tokens if you want to integrate other ERC20 tokens.

**Declare the daiExchangeAddress Variable**
```
const daiExchangeAddress = "0x77dB9C915809e7BE439D2AB21032B1b8B58F6891";
```
You give this address the approval to transfer Dai on behalf of your account.

**Instantiate the Dai Token Contract**
```
const daiTokenContract = new web3.eth.Contract(  
  JSON.parse(daiTokenAbi),  
  daiTokenAddress  
);
```
**Declare Const Variables to Pass to the** `approve` **Function**
```
const ADDRESS_SPENDER = daiExchangeAddress;  
const TOKENS = web3.utils.toHex(1 * 10 ** 18); // 1 DAI
```
We give `daiExchangeAddress` the approval to transfer _1DAI_.

**Encode the Abi for the** `approve` **Function**
```
const approveEncodedABI = daiTokenContract.methods  
  .approve(ADDRESS_SPENDER, TOKENS)  
  .encodeABI();
```
**Declare the** `sendSignedTx` **Function**  
Make a function to sign a transaction object and then propagate that to an Ethereum network:
```
function sendSignedTx(transactionObject, cb) {  
  let transaction = new EthTx(transactionObject);  
  const privateKey = new Buffer.from(privKey, "hex");  
  transaction.sign(privateKey);  
  const serializedEthTx = transaction.serialize().toString("hex");  
  web3.eth.sendSignedTransaction(`0x${serializedEthTx}`, cb);  
}
```
**Construct a Transaction Object and Then Execute** `sendSignedTx`
```
web3.eth.getTransactionCount(addressFrom).then(transactionNonce => {  
  const transactionObject = {  
    chainId: 4,  
    nonce: web3.utils.toHex(transactionNonce),  
    gasLimit: web3.utils.toHex(42000),  
    gasPrice: web3.utils.toHex(5000000),  
    to: daiTokenAddress,  
    from: addressFrom,  
    data: approveEncodedABI  
  };

sendSignedTx(transactionObject, function(error, result){  
    if(error) return console.log("error ===>", error);  
    console.log("sent ===>", result);  
  })  
}  
);
```
**Run the File**
```
npm run approve-dai-exchange-rinkeby
```
Once you get a transaction hash like this `0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a`, you can go to etherscan to see the detail of your transaction. Below is my transaction as an example.

![[https://rinkeby.etherscan.io/tx/0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a](https://rinkeby.etherscan.io/tx/0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a)](https://cdn-images-1.medium.com/max/800/1*qOPbrK-eXphyaBV_qoajnQ.png)
[https://rinkeby.etherscan.io/tx/0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a](https://rinkeby.etherscan.io/tx/0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a)

#### **2\. EXCHANGE DAI WITH ETH**

Finally, let’s exchange DAI with ETH. Again, I am going to skip the detail as most of the code is going to be the same. I make another file, [DaiToEthRinkeby.mjs](https://github.com/icovo/eht-uniswap-demo/blob/master/DaiToEthRinkeby.mjs), and call the [tokenToEthSwapInput](https://docs.uniswap.io/smart-contract-integration/interface#exchange-interface) function.
```
function tokenToEthSwapInput(uint256 tokens_sold, uint256 min_eth, uint256 deadline) external returns (uint256 eth_bought);
```
There are three arguments. `tokens_sold` is the amount of ERC20 tokens sold. `min_eth` is the minimum ETH bought. `deadline` is a transaction deadline.
```
const TOKENS_SOLD = web3.utils.toHex(0.4 * 10 ** 18); // 0.4DAI  
const MIN_ETH = web3.utils.toHex(5000000000000000); // 0.005ETH  
const DEADLINE = 1569888000; // 10/01/2019 @ 12:00am (UTC)
```
Now, pass three const variables as arguments of the `tokenToEthSwapInput` function and encode the abi for it:
```
const tokenToEthEncodedABI = daiExchangeContract.methods  
  .tokenToEthSwapInput(TOKENS_SOLD, MIN_ETH, DEADLINE)  
  .encodeABI();
```
Pass this `_tokenToEthEncodedABI_` to the `data` property of a transaction object.

Run the file:
```
npm run dai-to-eth-rinkeby
```
Once you get the transaction hash `0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4`, you can go to etherscan to see the detail of your transaction. Below is my transaction as an example.

![[https://rinkeby.etherscan.io/tx/0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4](https://rinkeby.etherscan.io/tx/0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4)](https://cdn-images-1.medium.com/max/800/1*hv9CEzIin3jT4624x2NOZw.png)
[https://rinkeby.etherscan.io/tx/0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4](https://rinkeby.etherscan.io/tx/0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4)

Now you can [see](https://rinkeby.etherscan.io/address/0xd0633f104cbb4f6631268f2f73ea428715253517#tokentxns) that your DAI is subtracted from your address.

![](https://cdn-images-1.medium.com/max/800/1*vXN1hC4fZbDtkb0E2PSC6Q.png)

and the ETH is [added](https://rinkeby.etherscan.io/address/0xd0633f104cbb4f6631268f2f73ea428715253517#internaltx) to your address.

![](https://cdn-images-1.medium.com/max/800/1*-SxIygP8zm6U_OFqOyFy1Q.png)

If you want to integrate other ERC20 tokens for exchange, you can do so by merely changing a token address in your code.

I hope you found this article useful to build a service the world has yet to see. 😎
