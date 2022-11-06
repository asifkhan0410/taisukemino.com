---
title: 複数担保型DAIのCDPライフサイクルを1周してみる
description: コマンドラインからCDPサイクルを１周してみる
date: '2019-07-13T01:41:55.782Z'
keywords: []
slug: >-
  /@taisukemino/dai-mcd-cli-jp
language: jp
translations: [ "en", "dai-mcd-cli" ]
---

### はじめに

MakerDAOは2016年12月にSAIをαバージョンとしてリリースし、2017年12月にDAIをβバージョンとしてリリースしました。現在のDAIは単一担保型で、一種類の資産しか担保として使うことができず、サポートされている資産はETH(正確にいうとPETH)のみですが、将来的には２つ以上の担保を使える複数担保型に移行します(ちなみにPETHは除外され、ETHが他の資産と一緒に担保として使われるようになります)。ERC20トークン、NFT、またその他のERC777標準に則ったトークンなどがまずは担保として使われることになると思います。例えば、[Digix](https://digix.global/)という金によって裏付けられているトークンが担保の候補として挙げられています。

このアップグレードによって、担保をロックするときの選択肢が増え、DAIを発行することは容易になります。また、担保を分散化することで過少担保のリスクも減らせます。ETHしか担保資産がないと、ETHの価格のみにCDPの担保率が影響を受けてしまいますが、担保を増やせば一つの資産に依存せずにリスクを分散させることができます。単一担保型の仕組みがまだよくわからないとう方は、[前の記事](https://taisukemino.com/jp/dai/)を読んでみてください。

すでにKovanテストネットでは、複数担保型DAIの[スマートコントラクト](https://github.com/makerdao/dss/tree/master)がリリースされています。また、[ポータルサイト](https://mcd-cdp-portal-staging.now.sh/)、[コマンドラインツール](https://github.com/makerdao/mcd-cli)、[Dai.js](https://github.com/makerdao/dai.js)ライブラリなど、複数担保型DAIのシステムとやりとりするツールもいくつか公開されています。今回の記事では[mcd-cli](https://github.com/makerdao/mcd-cli)というコマンドラインツールを使ってCDPのライフサイクルを１周してみます。

この記事はmcd-cliの[オフィシャルのガイド](https://github.com/makerdao/developerguides/blob/master/devtools/mcd-cli/mcd-cli-guide-01/mcd-cli-guide-01.md)を元にして書かれていますが、わかりにくい部分や省かれている部分があったため、セットアップも含めて説明を付け足しています。また、Linuxでも問題なく動作するかの検証まではしておりませんので、Macで作業することをお勧めします。

では、早速はじめましょう！

### **セットアップ**

まずはセットアップを済ませます。スマートコントラクトとやりとりするための新しいEthereumのアカウントを作り、mcd-cliをインストールし、ETHとCOL1トークンを入手していきます。COL1トークンというのは、テスト目的で作られた複数担保型DAIの担保トークンです。価値は大体1USDに対して10COL1になっています。以下が、より具体的なステップになります。一つ一つ順番にセットアップしていきます。

1) parityのインストール  
2) アカウントの作成  
3) dapps toolsのインストール  
4) mcdパッケージのインストール  
5) .sethrcファイルの設定  
6) Kovan ETHを入手  
7) COL1 tokensを入手

**1) parityのインストール**
```
// Rustのインストール  
$ curl   
[https://sh.rustup.rs](https://sh.rustup.rs/) -sSf | sh  
// parityクライアントのインストール  
$ bash <(curl   
[https://get.parity.io](https://get.parity.io/) -L) -r stable
```
\* gethもサポートされていますが、テストはしていないので、parityをお勧めします。

**2) アカウントの作成**
```
$ parity --chain kovan account new  
Please note that password is NOT RECOVERABLE.  
Type password: \*\*\*\*\*\*\*\*\*  
Repeat password: \*\*\*\*\*\*\*\*\*  
// パスワードを入力してください。  
// このパスワードは後で使うので、忘れないようにしてください。  
0x5e232581fc1cb8cafacfcd951de05cf906e73f93
```
以下のコマンドでアカウントをリストできます。
```
$ parity --chain kovan account list  
0x5e232581fc1cb8cafacfcd951de05cf906e73f93
```

**3) dapps toolsのインストール**

以下のコマンドですぐにインストールできます(GNU/LinuxもしくはmacOSのみ)。
```
$ curl [https://dapp.tools/install](https://dapp.tools/install) | sh
```

[dapp.tools](https://dapp.tools/)は、ブロックチェーン上の開発で使えるかなりイケてるコマンドラインツールです！LinuxのNixOSで使われているnixパッケージマネージャーを使っています。このスクリプトはnixパッケージマネージャーをダウンロードし、Cachixでバイナリのキャッシュをセットアップして、dapp, seth, solc, hevm またethsignなどのツールを一緒にインストールしてくれます。

**4) mcdパッケージのインストール**
```
$ dapp pkg install mcd
```
v0.2.6 を使っています。
```
$ mcd — version  
mcd 0.2.6-rc.1
```
_\*他のバージョンでは動かない可能性があるので、必ず_v0.2.6をインストールしてください。

**5) .sethrcファイルの設定**

mcd-cliはEthereumの万能ツールである[seth](https://github.com/dapphub/dapptools/tree/master/src/seth)がベースになっています。スマートコントラクトの関数の呼び出しをcurl、post、rpcメソッドなどを使って行う必要がなく、簡潔なコマンドで呼べるようになります。

ホームディレクトリにある.sethrcファイルの編集
```
export ETH\_FROM=0x5e232581fc1cb8cafacfcd951de05cf906e73f93  
\# 作成したアドレスをここに指定  
export MCD\_CHAIN=kovan  
export SETH\_CHAIN=kovan
```
_\*キーファイルの場所をデフォルトではなくカスタムで指定したい場合は、 ETH\_KEYSTORE変数を使ってください。

**6) Kovan ETHを入手**

[こちらのfaucet](https://faucet.kovan.network/)にいき、自分のアドレスにKovanETHを送ってください。GitHubアカウントでログインし、ETHのアドレスをフォームに記入してリクエストを送るだけです。また、[Gitterチャンネル](https://gitter.im/kovan-testnet/faucet)でKovanETHをもらうこともできます。知り合いからもらえる方は0.2KovanETHはもらっておいてください。KovanETHが入手できたかは、Etherscanで確認することができます（[例](https://kovan.etherscan.io/address/0x5e232581fc1cb8cafacfcd951de05cf906e73f93)）。

**7) COL1 tokensを入手**

次にCOL1トークンを入手しましょう。こちらはスマートコントラクトから入手することができます。

COL1のアドレスを環境変数に設定
```
$ export COL1A=0xc644e83399f3c0b4011d3dd3c61bc8b1617253e5
```
Faucetのアドレスを環境変数に設定
```
$ export FAUCET=0xa402e771a4662dcbe661e839a6e8c294d2ce44cf
```
gulp(address)関数を呼んで、COL1トークンを入手
```
$ seth send $FAUCET 'gulp(address)' $COL1A  
seth-send: warning: \`ETH\_GAS’ not set; using default gas amount  
Ethereum account passphrase (not echoed): seth-send: Published transaction with 36 bytes of calldata.  
seth-send: 0xf0ac981342ac8ac9c59cd25107667ecc7fd2dadc4089e59aa0b09055d5d08d09  
seth-send: Waiting for transaction receipt…  
seth-send: Transaction included in block 11268445.
```
コマンドを走らせるとパスワードの入力を求められます。sethはキーとパスワードをgethとparityのデフォルトのダイレクトリから探し、トランズアクションを送ります。

コマンドラインを使ってトークンの残高を確認できます。
```
$ mcd --ilk=COL1-A gem balance ext  
50.000000000000000000
```
また、コマンドのアウトプットにあるトランズアクションのハッシュ値から、Etherscanで残高を確認することも可能です（[例](https://kovan.etherscan.io/tx/0xf0ac981342ac8ac9c59cd25107667ecc7fd2dadc4089e59aa0b09055d5d08d09)）。[自分のアカウント](https://kovan.etherscan.io/address/0x5e232581fc1cb8cafacfcd951de05cf906e73f93)に飛ぶと、[COL1トークン](https://kovan.etherscan.io/address/0x5e232581fc1cb8cafacfcd951de05cf906e73f93#tokentxns)が入手できたことがわかるはずです。  
\*Etherscan上ではTOK1という表記になっていますが、気にしなくて大丈夫です。

### コマンドラインツールでCDPライフサイクルを1周する

では、これからCOL1トークンを担保として、CDPのライフサイクルを１周してみます！大きく分けると、以下のようなステップで進めます。

1.  CDPを開く
2.  COL1トークンをデポジットする
3.  DAIを引き出す
4.  DAIを返済する
5.  担保を除く
6.  CDPを閉じる

コマンドの性質上、一つ一つのステップに分けづらいので、まずは最初の３つのステップをカバーします。

1.  **CDPを開く**
2.  **COL1トークンをデポジットする**
3.  **DAIを引き出す**

まず、以下のコマンドを走らせてください
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
以下のようなアウトプットが表示されます
```
vat 30.000000000000000000 Unlocked collateral (COL1)  
ink 0.000000000000000000 Locked collateral (COL1)  
ext 20.000000000000000000 External account balance (COL1)
```
COL1トークンが担保として`vat`という内部レジストリに追加されました。上のアウトプットで`vat`内の担保の残高が30になっていることがわかると思います。ただ、実はまだCDPにロックされているわけではありません。`ink`というのがCDPにロックされている残高を示しています。見てわかる通り、まだどのCDPにも割り当てられていないので`ink`は現在0になっています。`ext`というのはMakerDAOのシステム外のトークンの残高です。30トークンを`vat`に移したため、現在は20になっています。

`gem`コマンドを見てみましょう
```
$ mcd --ilk=COL1-A gem join 30
```
`join`サブコマンドは送り手のアカウントから`vat`に担保を追加することができます。`ilk=COL1-A`というフラグで担保の種類を指定しています。30というのは送るトークンの量です。

次にCOL1トークンをCDPにロックして、DAIを引き出します。

以下のコマンドを走らせてください
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
以下のようなアウトプットが表示されます。
```
ilk  COL1-A                                     Collateral type  
urn  0x5e232581Fc1cB8caFAcfCd951De05cF906e73F93 Urn handler  
ink  30.000000000000000000                      Locked collateral (COL1)  
art  1.000000000000000000                       Issued debt (Dai)
```
inkにCOL1トークンの残高が移り、CDPにCOL1トークンがロックされました。  
\*`urn` というのは特定のCDPのことです。

また、DAIが発行されたこともわかります(`art`)。

`frob`コマンドを使って`vat`からトークンをロックするコマンドを走らせたことで、トークンが`urn`にロックされてDAIが生成されました。

`frob`コマンドは  担保の種類を`_ilk=_COL1-A`フラグで、30という数字でロックしたいトークンの量を、そして末尾の1という数字で生成したいDAIの量を指定しています。
```
$ mcd --ilk=COL1-A frob 30 1
```
DAIはまだ`vat`にあるため、これからDAIを引き出し、Ethereumのアカウントに送ります。

以下のコマンドを走らせてください
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
これでDAIが`vat`から`ext`に移ります。
```
vat 0.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 1.000000000000000000 ERC20 Dai balance
```
`dai`コマンドの`exit`サブコマンドは、引き出したいDAIの量を指定できます。

以下の`balance`サブコマンドでDAIのバランスをチェックすることもできます。
```
$ mcd dai balance  
vat 0.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 1.000000000000000000 ERC20 Dai balance
```
ここまでで、CDPを開き、COL1トークンを担保としてCDPにロックし、発行したDAIを引き出しました。

では今度は逆にDAIを返済し、担保をCDPから取り出して、CDPを閉じてみましょう。

**4\. DAIを返済する  
5\. 担保を除く  
6\. CDPを閉じる**

まず以下のコマンドを走らせてください
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
これでDAIが`ext`から内部レジストリである`vat`に移動しました。
```
vat 1.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 0.000000000000000000 ERC20 Dai balance
```
また`balance`サブコマンドで残高を確認できます。
```
$ mcd dai balance  
vat 1.000479620379870463446010918000000000000000000 Vat Dai balance  
ext 0.000000000000000000 ERC20 Dai balance
```
`dai`コマンドの`join`サブコマンドは`urn`に返済したいDAIの量を指定することができます。
```
$ mcd dai join 1
```
次にDAIを焼却して、担保であるCOL1トークンを`ink`から取り出します。
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
前に`frob`コマンドを使った時のアウトプットを見ると、担保を`ink`にロックしてDAIを`art`に生成しましたことがわかります。
```
ilk  COL1-A                                     Collateral type  
urn  0x5e232581Fc1cB8caFAcfCd951De05cF906e73F93 Urn handler  
ink  30.000000000000000000                      Locked collateral (COL1)  
art  1.000000000000000000                       Issued debt (Dai)
```
では今回のアウトプットを見てみましょう。
```
ilk  COL1-A                                     Collateral type  
urn  0x5e232581Fc1cB8caFAcfCd951De05cF906e73F93 Urn handler  
ink  0.000000000000000000                       Locked collateral (COL1)  
art  0.000000000000000000                       Issued debt (Dai)
```
今回は逆に`ink`にあったロックされていた担保と`art`にあったDAIがなくなっているのがわかります。

今回は  `ilk=`フラグで担保の種類を指定し_、_30という数字で`ink`から取り除くトークンの量を指定し、末尾の1という数字で焼却したいDAIの量を指定しています。
```
$ mcd --ilk=COL1-A frob — -30 -1
```
COL1トークンが`vat`にあるのがわかります。
```
$ mcd gem --ilk=COL1-A balance  
vat 30.000000000000000000 Unlocked collateral (COL1)  
ink 0.000000000000000000 Locked collateral (COL1)  
ext 20.000000000000000000 External account balance (COL1)
```
最後に`vat`からCOL1トークンを取り除きます。
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
トークンが`vat`から`ext`に移りました。
```
vat 0.000000000000000000 Unlocked collateral (COL1)  
ink 0.000000000000000000 Locked collateral (COL1)  
ext 50.000000000000000000 External account balance (COL1)
```
parityアカウントを確認すると、COL1トークンが戻っているはずです。これでCDPのライフサイクルを１周できました！

複数担保型と単一担保型の違いはいくつもあるのでまた記事にする予定です。自分で学びたいという方は、MakerDAOの[用語集](https://github.com/makerdao/dss/wiki/Glossary)や[スマートコントラクト](https://github.com/makerdao/dss)も参考にしてみてください。
