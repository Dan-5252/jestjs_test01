# UT-code:CAMP vol.2.0

## 進め方について
Cart.class.jsのテストをCart.class.test.jsに書いてください。
後述の「カート機能仕様」に記載した機能をテストしてください。
下に行くほど難易度が上がります。

## サンプルについて
バグを仕込んであります。
下記仕様に基づいてテストコードを作成し、バグを見つけてください。
発見後はサンプルを修正し、テストコードが通過することを確認してください。

## ファイルについて
Cart.class.js ........ 今回のテスト対象となるクラスファイル
Cart.class.test.js ... テストコードを記述するファイル
ITEM_MASTER.js ....... 商品マスタが定義されているファイル（本来ならDBにある）


## カート機能仕様

### カートの中身を見る関数
カートの中に入った商品と個数の組の一覧を見ることができます。

### カートに商品を入れる関数
カートに1種類の商品を入れることができます。

### カートから商品を除く関数
カートから商品を除くことができます。

### カートに入っている商品の個数を変更する関数
商品 ID を指定して、個数を変更することができます。
個数は負でない整数である必要があります。
0 を指定した場合、カートから削除されます。

### カートの商品の合計金額を返す関数
商品の合計金額を得ることができます。