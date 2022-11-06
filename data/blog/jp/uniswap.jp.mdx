---
title: UniswapでEtherとERC20トークンを交換する分散型アプリを作ってみる
description: はじめに
date: '2019-10-03T16:53:38.951Z'
keywords: []
slug: >-
  /@taisukemino/uniswap-jp
language: jp
translations: [ "en", "uniswap" ]
---

![](https://cdn-images-1.medium.com/max/800/1*mQ33qO60_0YqAyYNU0Ao9g.png)

### **はじめに**

ブロックチェーンは、誰もが使えて誰も支配しないパブリックな台帳を歴史上初めて実現しました。しかし、実際には多くの中央集権的な交換所がハッシュパワーとプライベートキーを支配しているのが現状です。中央集権的な交換所は法定通貨と暗号通貨を交換するのには不可欠なのですが、その存在は当初のビットコインの哲学とは反しています。ブロックチェーンは、会社や政府などの機関から、個人へと力を移行させる技術のはずでした。

どうすれば本来の哲学に戻り、個人に力を移せるのか。そのために分散型なプロトコルの一つとして取引所の開発がすでに進められています。その中で僕が注目しているのが、Uniswapという交換プロトコルです。分散型取引所は実装によってどの程度分散的であるかが異なりますが、僕がUniswapに注目しているのは、非常に分散的でありながらユーザー体験が優れているからです。

既存の仕組みを代替するには、ユーザーが使いたいと思う、よりいいサービスを創るしか無いでしょう。プログラマーであれば、これはコードを書き、モノを創ることを意味します。この記事では、まさにそれをやります。具体的には、etherとERC20トークンを交換する簡単なアプリを作ります。この記事を読み終わる頃には、Uniswapプロトコルを使ってdappやウォレットのなかでetherとERC20トークンを交換する機能を追加できるようになります。

まずはプロトコルの仕組みを簡単に説明してから、アプリを作っていきます。

### **Uniswapの簡単な説明**

Uniswapは、etherとERC20トークンのための分散的な交換プロトコルです。交換のプロセスは全てブロックチェーン上で行われ、誰も間に介入しません。第三者が介入しない代わりに、それぞれのERC20トークンごとに別々のスマートコントラクトがあります。これらの交換コントラクトは、etherと特定のERC20トークンを備えています。トレーダーはこの貯蓄を使っていつでも交換することができます。etherをコントラクトに送れば特定のERC20トークンを得ることができ、逆に特定のERC20トークンを送ればetherを得ることができます。この貯蓄はリクイディティ・プロバイダーによって貯められ、彼らは見返りとして手数料を交換が行われるごとに取ります。リクイディティというのは流動性のことで、etherとERC20トークンの流動性を提供するのでリクイディティ・プロバイダーと呼ばれます。ERC20トークン同士を交換することも可能です。

交換するときの価格は、[Constant Product Market Maker Model](https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf)という価格設定の式によって自動で決められます。交換コントラクト内のetherの量とERC20トークンの量が常に一定になるように価格が計算されます。この式はERC20トークン同士の交換でも同様に適応され、交換コントラクト内のERC20トークンAの量とERC20トークンBの量が常に一定になるように価格が計算されます。

例えば、DAIというERC20トークンの交換コントラクトに`10ETH`と`1000DAI`が入っているとします。ここで定数は `10 x 1000`で`10000`となります。次にこのコントラクトに`1ETH`送ると、コントラクトは`11ETH`持つことになります。ETHの量とDAIの量をかけた値は常に`10000`で一定でなければいけません。つまりDAIは`10000 ÷ 11 ≒ 909DAI`なければいけないということです。逆にいえば、コントラクトは`1000DAI`持っている必要はないので、`1000 – 909 = 91DAI`がトレーダーに渡されることになります。

この式は別名 `x * y = k` 式とも呼ばれ、xとyの値によって以下のような曲線を描きます。

![x * y = k curve](https://cdn-images-1.medium.com/max/800/1*c3NH7TYQN7qvs-UheOQ2HQ.png)  
x * y = k curve

Uniswapが素晴らしいのは、貯蓄システムと自動計算式によって売り手と買い手をマッチするコストを減らしたことにあります。このおかげでトレーダーは簡単かつ迅速に交換をすることができます。

### **セットアップ**

では早速アプリを作るためのセットアップに進みます！これから作るアプリは、etherとdaiを交換できる簡単なNodeJSのアプリです。

GitHubで[レポジトリ](https://github.com/icovo/eht-uniswap-demo)を作ったので、先に軽く目を通しておくことをお勧めします。地図を持っていると道を進みやすいのと同じで、最終的にどういうコードになるのかわかった方が、コーディングが楽になります。僕が使っているOSはmacOS High Sierraです。

**プライベートキーとアドレスの取得**  
[vanity-eth](https://vanity-eth.tk/)からプライベートキーとアドレスを取ってきてください。Generateボタンを押すと一番下に生成されたプライベートキーとアドレスが出てきます。安全ではないので、テスト目的以外で使わないようにしましょう。

**Rinkebyテストネットのetherを手に入れる**  
Rinkebyのetherを持っていない人は、[faucet](https://faucet.rinkeby.io/)から取ってきてください。以下のようにツイートして、
```
Requesting faucet funds into YOUR_ADDRESS_HERE on the #Rinkeby #Ethereum test network.
```
このツイートのリンクをフォームに貼り付けるともらえます。時間がかかる場合は友達にお願いするか、もしくは[@taisuke\_mino\_JP](https://twitter.com/taisuke_mino_JP)にツイートしていただければ少しは予備があるかもしれません。

残高は[Rinkeby Etherscan](https://rinkeby.etherscan.io/)でアドレスを検索して確認することができます。0.1ETHあれば十分です。

**Npmのプロジェクトを作る**
```
mkdir eht-uniswap-demo  
cd eht-uniswap-demo/  
npm init --yes
```
\*npmとnodejsが入っていない方は[こちら](https://nodejs.org/en/)からダウンロードできます。

**gitをinitializeする**
```
git init
```
**web3のパッケージをインストールする**
```
npm i --save web3@1.2.1
```
web3はEthereumのJavaScript APIと呼ばれています。テストネットを含めたEthereumのネットワークへのインターフェースです。JavaScriptのアプリからEthereumのノードとやりとりしたり、ブロックチェーン上にデプロイされているスマートコントラクトとやりとりすることもできます。

**Infuraのエンドポイントを取得**  
Ethereumのネットワークとやりとりするためのプロバイダーとして[Infura](https://infura.io/)を使います。Infuraに登録して新しいプロジェクトを作ってからRinkebyネットワークのエンドポイントを取得してください。URLは以下のようなフォーマットになります。
```
https://rinkeby.infura.io/v3/YOUR_PROJECT_ID
```
**ethereumjs-txパッケージをインストールする**
```
npm i --save ethereumjs-tx@1.3.7
```
ethereumjs-txは、トランズアクションオブジェクトを生成したり、サインするのに使います。

### **ETHからDAIへの交換**

ではここからはコードを書いていきます。

**ファイル作成**  
[EthToDaiRinkeby.mjs](https://github.com/icovo/eht-uniswap-demo/blob/master/EthToDaiRinkeby.mjs)というファイルを作成します。mjsは、ES6の文法で書くための拡張子です。

**パッケージのインポート**
```
import Web3 from "web3";  
import EthTx from "ethereumjs-tx";
```
**交換コントラクトのアドレスとabiを宣言**  
Rinkebyテストネット上のDAIの交換コントラクトアドレスとabiを宣言します。[こちら](https://hackmd.io/SHPZJPSUTSW8se71CP_TBA)のリンクから引っ張ってきています。この定数は、コントラクトとやりとりする上で必要になります。

交換コントラクトアドレス:
```
const daiExchangeAddress = "0x77dB9C915809e7BE439D2AB21032B1b8B58F6891";
```
\*[Etherscan](https://rinkeby.etherscan.io/address/0x77dB9C915809e7BE439D2AB21032B1b8B58F6891)でも見ることができます。

交換コントラクトabi:
```
const daiExchangeAbi = '[{“name”: “TokenPurchase”, “inputs”: [{“type”: “address”, “name”: “buyer”, “indexed”: true}, {“type”: “uint256”, “name”: “eth_sold”, “indexed”: true}, {“type”: “uint256”, “name”: “tokens_bought”, “indexed”: true}], “anonymous”: false, “type”: “event”}, {“name”: “EthPurchase”, “inputs”: [{“type”: “address”, “name”: “buyer”, “indexed”: true}, {“type”: “uint256”, “name”: “tokens_sold”, “indexed”: true}, {“type”: “uint256”, “name”: “eth_bought”, “indexed”: true}], “anonymous”: false, “type”: “event”}, {“name”: “AddLiquidity”, “inputs”: [{“type”: “address”, “name”: “provider”, “indexed”: true}, {“type”: “uint256”, “name”: “eth_amount”, “indexed”: true}, {“type”: “uint256”, “name”: “token_amount”, “indexed”: true}], “anonymous”: false, “type”: “event”}, {“name”: “RemoveLiquidity”, “inputs”: [{“type”: “address”, “name”: “provider”, “indexed”: true}, {“type”: “uint256”, “name”: “eth_amount”, “indexed”: true}, {“type”: “uint256”, “name”: “token_amount”, “indexed”: true}], “anonymous”: false, “type”: “event”}, {“name”: “Transfer”, “inputs”: [{“type”: “address”, “name”: “_from”, “indexed”: true}, {“type”: “address”, “name”: “_to”, “indexed”: true}, {“type”: “uint256”, “name”: “_value”, “indexed”: false}], “anonymous”: false, “type”: “event”}, {“name”: “Approval”, “inputs”: [{“type”: “address”, “name”: “_owner”, “indexed”: true}, {“type”: “address”, “name”: “_spender”, “indexed”: true}, {“type”: “uint256”, “name”: “_value”, “indexed”: false}], “anonymous”: false, “type”: “event”}, {“name”: “setup”, “outputs”: [], “inputs”: [{“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 175875}, {“name”: “addLiquidity”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “min_liquidity”}, {“type”: “uint256”, “name”: “max_tokens”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 82605}, {“name”: “removeLiquidity”, “outputs”: [{“type”: “uint256”, “name”: “out”}, {“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “amount”}, {“type”: “uint256”, “name”: “min_eth”}, {“type”: “uint256”, “name”: “min_tokens”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 116814}, {“name”: “__default__”, “outputs”: [], “inputs”: [], “constant”: false, “payable”: true, “type”: “function”}, {“name”: “ethToTokenSwapInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “min_tokens”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 12757}, {“name”: “ethToTokenTransferInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “min_tokens”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 12965}, {“name”: “ethToTokenSwapOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 50463}, {“name”: “ethToTokenTransferOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}], “constant”: false, “payable”: true, “type”: “function”, “gas”: 50671}, {“name”: “tokenToEthSwapInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_eth”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 47503}, {“name”: “tokenToEthTransferInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_eth”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 47712}, {“name”: “tokenToEthSwapOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “eth_bought”}, {“type”: “uint256”, “name”: “max_tokens”}, {“type”: “uint256”, “name”: “deadline”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 50175}, {“name”: “tokenToEthTransferOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “eth_bought”}, {“type”: “uint256”, “name”: “max_tokens”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 50384}, {“name”: “tokenToTokenSwapInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_tokens_bought”}, {“type”: “uint256”, “name”: “min_eth_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 51007}, {“name”: “tokenToTokenTransferInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_tokens_bought”}, {“type”: “uint256”, “name”: “min_eth_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}, {“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 51098}, {“name”: “tokenToTokenSwapOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “max_tokens_sold”}, {“type”: “uint256”, “name”: “max_eth_sold”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 54928}, {“name”: “tokenToTokenTransferOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “max_tokens_sold”}, {“type”: “uint256”, “name”: “max_eth_sold”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}, {“type”: “address”, “name”: “token_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 55019}, {“name”: “tokenToExchangeSwapInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_tokens_bought”}, {“type”: “uint256”, “name”: “min_eth_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “exchange_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 49342}, {“name”: “tokenToExchangeTransferInput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}, {“type”: “uint256”, “name”: “min_tokens_bought”}, {“type”: “uint256”, “name”: “min_eth_bought”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}, {“type”: “address”, “name”: “exchange_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 49532}, {“name”: “tokenToExchangeSwapOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “max_tokens_sold”}, {“type”: “uint256”, “name”: “max_eth_sold”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “exchange_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 53233}, {“name”: “tokenToExchangeTransferOutput”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}, {“type”: “uint256”, “name”: “max_tokens_sold”}, {“type”: “uint256”, “name”: “max_eth_sold”}, {“type”: “uint256”, “name”: “deadline”}, {“type”: “address”, “name”: “recipient”}, {“type”: “address”, “name”: “exchange_addr”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 53423}, {“name”: “getEthToTokenInputPrice”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “eth_sold”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 5542}, {“name”: “getEthToTokenOutputPrice”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_bought”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 6872}, {“name”: “getTokenToEthInputPrice”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “tokens_sold”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 5637}, {“name”: “getTokenToEthOutputPrice”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “uint256”, “name”: “eth_bought”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 6897}, {“name”: “tokenAddress”, “outputs”: [{“type”: “address”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1413}, {“name”: “factoryAddress”, “outputs”: [{“type”: “address”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1443}, {“name”: “balanceOf”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_owner”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1645}, {“name”: “transfer”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_to”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 75034}, {“name”: “transferFrom”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_from”}, {“type”: “address”, “name”: “_to”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 110907}, {“name”: “approve”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_spender”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 38769}, {“name”: “allowance”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_owner”}, {“type”: “address”, “name”: “_spender”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1925}, {“name”: “name”, “outputs”: [{“type”: “bytes32”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1623}, {“name”: “symbol”, “outputs”: [{“type”: “bytes32”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1653}, {“name”: “decimals”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1683}, {“name”: “totalSupply”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1713}]';
```
**アドレスとプライベートキーの定数宣言**
```
const addressFrom = "[YOUR_ADDRESS]";  
const privKey = "[YOUR_PRIVATE_KEY]";
```
**Web3のセットアップ**  
Infuraをweb3プロバイダーとして使うためにセットアップします。
```
const web3 = new Web3(  
  new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/[YOUR_PROJECT_ID]"  
  )  
);
```
**コントラクトをインスタンス化**  
web3の`Contract`メソッドにアドレスとabiを渡して、コントラクトをインスタンス化します。
```
const daiExchangeContract = new web3.eth.Contract(JSON.parse(daiExchangeAbi), daiExchangeAddress);
```
これでdai交換コントラクトの関数を呼んでetherとdaiを交換する準備ができました。

`ETH_SOLD`**定数宣言**  
daiと交換したいETHの量をもつ定数を宣言します。
```
const ETH_SOLD = web3.utils.toHex(50000000000000000); // 0.05ETH
```
`ethToTokenSwapInput`**関数のabiをエンコード**  
ethをdaiと交換するのに、[ethToTokenSwapInput](https://docs.uniswap.io/smart-contract-integration/interface#exchange-interface)関数を使います。
```
function ethToTokenSwapInput(uint256 min_tokens, uint256 deadline) external payable returns (uint256 tokens_bought);
```
`min_tokens`_と_`deadline`を引数にとります。`min_tokens`では購入するdaiの最低額を指定します。`deadline`ではトランズアクションの期限を指定します。つまり期限以内に実行されなかったトランズアクションは失敗することになります。

これらの引数はフロントランニングを抑止するためのものです。仮に`1ETH`を交換する時の価格が`200DAI`だとしましょう。`199DAI`以下しかもらえない場合にはトランズアクションが失敗するように指定することで、フロントランナーが価格を操作したとしても大損することはありません。また期限を設定することで、フロントランナーが利益を得るためにトランズアクションを持ち続けることを抑制できます。フロントランニングについては[こちらの投稿](https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281)が詳しいです。

`min_tokens`引数に渡すための定数を宣言します。
```
const MIN_TOKENS = web3.utils.toHex(0.2 * 10 ** 18); // 0.2 DAI
```
値が低すぎるとフロントランナーに簡単に利益を取られてしまい、逆に高すぎるとトランズアクションが失敗しやすいので、バランスを考える必要があります。

`deadline`引数に渡す別の定数を宣言します。以下の値は、UTC時間2019年10月1日午前12:00のUnixタイムスタンプです。すでに以下の日時を過ぎてしまっている場合は、こちらのオンラインの[コンバーター](https://www.unixtimestamp.com/index.php)を使ってください。
```
const DEADLINE = 1569888000; // 10/01/2019 @ 12:00am (UTC)
```
次に`ethToTokenSwapInput`関数に２つの値を渡し、abiをエンコードします。
```
const exchangeEncodedABI = daiExchangeContract.methods.ethToTokenSwapInput(MIN_TOKENS, DEADLINE).encodeABI();
```
`sendSignedTx`**関数の宣言**  
トランズアクションオブジェクトにサインして、それをEthereumネットワークにブロードキャストする関数を宣言します。
```
function sendSignedTx(transactionObject, cb) {  
  let transaction = new EthTx(transactionObject);  
  const privateKey = new Buffer.from(privKey, "hex");  
  transaction.sign(privateKey);  
  const serializedEthTx = transaction.serialize().toString("hex");  
  web3.eth.sendSignedTransaction(`0x${serializedEthTx}`, cb);  
}
```
**トランズアクションオブジェクトを作成し、**`sendSignedTx`**関数を実行**
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
`exchangeEncodedABI`と`ETH_SOLD`をそれぞれ`data`と`value`プロパティに渡しています。

**ファイルを走らせる**
```
npm run eth-to-dai-rinkeby
```
`0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10`のようなトランズアクションハッシュを受け取ったら、etherscanで詳細を見ることができます。以下は僕のトランズアクションの例です。

![[https://rinkeby.etherscan.io/tx/0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10](https://rinkeby.etherscan.io/tx/0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10)](https://cdn-images-1.medium.com/max/800/1*-HfsdMtYZ9ms_WotpvYWWw.png)
[https://rinkeby.etherscan.io/tx/0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10](https://rinkeby.etherscan.io/tx/0xbbc617c97323301d7376683a0ae58db012b418f27963e54866eb92bec4839e10)

トランズアクションが成功していれば、「Erc20 Token Txns」というタブメニューから自分のアドレスにdaiが入っていることが[確認できる](https://rinkeby.etherscan.io/address/0xd0633f104cbb4f6631268f2f73ea428715253517#tokentxns)はずです。

![](https://cdn-images-1.medium.com/max/800/1*5xBy06QU9M1bFNu4r7XPNQ.png)

これでEthとDaiを交換できました！

### **DAIからETHへの交換**

次にDAIからETHに交換します。今回は少しトリッキーで、２つのトランズアクションが必要になります。まず最初にUniswapのdai交換コントラクトに自分のアカウントに代わってdaiを送る許可を与えます。次に`tokenToEthSwapInput`関数を呼んでDaiをEthと交換します。

#### **1\. UniswapのDAI交換コントラクトに許可を与える**

別の_approveDaiExchangeRinkeby.mjs_というファイルを作ります。今回は前のコードと重複している部分は省きます。最終的なコードは[こちら](https://github.com/icovo/eht-uniswap-demo/blob/master/approveDaiExchangeRinkeby.mjs)を参考にしてください。

**トークンコントラクトのアドレスとabiを宣言**

Rinkebyテストネットでのdaiのトークンアドレスとabiを宣言します。

トークンコントラクトアドレス:
```
const daiTokenAddress = “0x2448eE2641d78CC42D7AD76498917359D961A783”;
```
\*[Etherscan](https://rinkeby.etherscan.io/address/0x77dB9C915809e7BE439D2AB21032B1b8B58F6891)でも確認できます。

トークンコントラクトabi:
```
const daiTokenAbi = ‘[{“name”: “Transfer”, “inputs”: [{“type”: “address”, “name”: “_from”, “indexed”: true}, {“type”: “address”, “name”: “_to”, “indexed”: true}, {“type”: “uint256”, “name”: “_value”, “indexed”: false}], “anonymous”: false, “type”: “event”}, {“name”: “Approval”, “inputs”: [{“type”: “address”, “name”: “_owner”, “indexed”: true}, {“type”: “address”, “name”: “_spender”, “indexed”: true}, {“type”: “uint256”, “name”: “_value”, “indexed”: false}], “anonymous”: false, “type”: “event”}, {“outputs”: [], “inputs”: [{“type”: “string”, “name”: “_name”}, {“type”: “string”, “name”: “_symbol”}, {“type”: “uint256”, “name”: “_decimals”}, {“type”: “uint256”, “name”: “_supply”}], “constant”: false, “payable”: false, “type”: “constructor”}, {“name”: “transfer”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_to”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 74020}, {“name”: “transferFrom”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_from”}, {“type”: “address”, “name”: “_to”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 110371}, {“name”: “approve”, “outputs”: [{“type”: “bool”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “_spender”}, {“type”: “uint256”, “name”: “_value”}], “constant”: false, “payable”: false, “type”: “function”, “gas”: 37755}, {“name”: “name”, “outputs”: [{“type”: “string”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 6402}, {“name”: “symbol”, “outputs”: [{“type”: “string”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 6432}, {“name”: “decimals”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 663}, {“name”: “totalSupply”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [], “constant”: true, “payable”: false, “type”: “function”, “gas”: 693}, {“name”: “balanceOf”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “arg0”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 877}, {“name”: “allowance”, “outputs”: [{“type”: “uint256”, “name”: “out”}], “inputs”: [{“type”: “address”, “name”: “arg0”}, {“type”: “address”, “name”: “arg1”}], “constant”: true, “payable”: false, “type”: “function”, “gas”: 1061}]’;
```
\*ERC20トークンのabiはdai以外のトークンでも全て同じです。

**daiExchangeAddress定数の宣言**
```
const daiExchangeAddress = “0x77dB9C915809e7BE439D2AB21032B1b8B58F6891”;
```
このアドレスにdaiを自分の代わりに送金する許可を与えます。

**daiトークンコントラクトのインスタンス化**
```
const daiTokenContract = new web3.eth.Contract(  
  JSON.parse(daiTokenAbi),  
  daiTokenAddress  
);
```
`approve`**関数に渡す定数の宣言**
```
const ADDRESS_SPENDER = daiExchangeAddress;  
const TOKENS = web3.utils.toHex(1 * 10 ** 18); // 1 DAI
```
`daiExchangeAddress`に1DAIを送る許可を与えます。

`approve`**関数のabiのエンコード**
```
const approveEncodedABI = daiTokenContract.methods  
  .approve(ADDRESS_SPENDER, TOKENS)  
  .encodeABI();
```
`sendSignedTx`**関数の宣言**  
トランズアクションオブジェクトにサインし、それをEthereunネットワークにブロードキャストする関数を作成
```
function sendSignedTx(transactionObject, cb) {  
  let transaction = new EthTx(transactionObject);  
  const privateKey = new Buffer.from(privKey, "hex");  
  transaction.sign(privateKey);  
  const serializedEthTx = transaction.serialize().toString("hex");  
  web3.eth.sendSignedTransaction(`0x${serializedEthTx}`, cb);  
}
```
**トランズアクションオブジェクトを作成し、**`sendSignedTx`**関数を実行**
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
**ファイルを走らせる**
```
npm run approve-dai-exchange-rinkeby
```
`0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a`のようなトランズアクションハッシュを受け取ったら、etherscanで詳細を見ることができます。以下は僕のトランズアクションの例です。

![[https://rinkeby.etherscan.io/tx/0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a](https://rinkeby.etherscan.io/tx/0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a)](https://cdn-images-1.medium.com/max/800/1*qOPbrK-eXphyaBV_qoajnQ.png)
[https://rinkeby.etherscan.io/tx/0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a](https://rinkeby.etherscan.io/tx/0x1d16e0ccb3947ecbd34e16f9ae9378a17b16e11c701f1d0f44e5262d0e8f018a)

#### 2\. **DAIをETHに交換する**

次に実際にDAIをETHに交換する部分を実装します。今回も前のコードと重複している部分は省きます。[DaiToEthRinkeby.mjs](https://github.com/icovo/eht-uniswap-demo/blob/master/DaiToEthRinkeby.mjs)というファイルを作り、[tokenToEthSwapInput](https://docs.uniswap.io/smart-contract-integration/interface#exchange-interface)関数を呼びます。
```
function tokenToEthSwapInput(uint256 tokens_sold, uint256 min_eth, uint256 deadline) external returns (uint256 eth_bought);
```
この関数は引数を３つとります。`tokens_sold` は交換するERC20トークンの量です。`min_eth`は交換するETHの最低額です。`deadline`はトランズアクションの期限です。
```
const TOKENS_SOLD = web3.utils.toHex(0.4 * 10 ** 18); // 0.4DAI  
const MIN_ETH = web3.utils.toHex(5000000000000000); // 0.005ETH  
const DEADLINE = 1569888000; // 10/01/2019 @ 12:00am (UTC)
```
`tokenToEthSwapInput`関数に３つの定数を引数として渡し、abiをエンコードします。
```
const tokenToEthEncodedABI = daiExchangeContract.methods  
  .tokenToEthSwapInput(TOKENS_SOLD, MIN_ETH, DEADLINE)  
  .encodeABI();
```
この`tokenToEthEncodedABI`をトランズアクションオブジェクトの`data`プロパティに渡します。

ファイルを走らせます。
```
npm run dai-to-eth-rinkeby
```
`0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4`のようなトランズアクションハッシュを受け取ったら、etherscanでその詳細を確認できます。以下は僕のトランズアクションの例です。

![[https://rinkeby.etherscan.io/tx/0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4](https://rinkeby.etherscan.io/tx/0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4)](https://cdn-images-1.medium.com/max/800/1*hv9CEzIin3jT4624x2NOZw.png)
[https://rinkeby.etherscan.io/tx/0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4](https://rinkeby.etherscan.io/tx/0x6011a9f50b80dba7a2cb3f9dbf327f0f4c28ec6a4205c2b4002b3a008aa480f4)

以下のようにDAIが自分のアドレスから[引かれ](https://rinkeby.etherscan.io/address/0xd0633f104cbb4f6631268f2f73ea428715253517#tokentxns)、

![](https://cdn-images-1.medium.com/max/800/1*vXN1hC4fZbDtkb0E2PSC6Q.png)

ETHが[追加されている](https://rinkeby.etherscan.io/address/0xd0633f104cbb4f6631268f2f73ea428715253517#internaltx)ことがわかります。

![](https://cdn-images-1.medium.com/max/800/1*-SxIygP8zm6U_OFqOyFy1Q.png)

DAI以外の他のERC20トークンを交換したい場合は、トークンのアドレスを変えるだけで実装できます。

この記事がまだここにないサービスを作る一助になれば幸いです。😎
