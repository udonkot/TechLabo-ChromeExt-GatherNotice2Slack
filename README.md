# はじめに
ブラウザでgatherに入退室した際にslackのチャンネルに通知するためのchrome拡張機能。
(gatherのサイトでのみ有効となり、通知はボタン押下時に送信されます)

# 使用方法
1. githubよりダウンロード
1. const.jsを用意
1. chrome拡張に設定
1. gatherで特定の部屋に入室
1. chrome拡張実行、入力画面表示
1. 入室、退室ボタン押下時にslack通知される


# const.jsについて
SLACKトークンやチャンネルID等を設定するファイル。
manifest.jsonで読み込んでいます。
以下、定義値

```
const SLACK_API_TOKEN="SLACKトークン";
const SLACK_CHANNEL_ID="SLACK通知先のチャンネルID";
const GATHER_IN_MESSAGE="Gatherルーム入室時のメッセージ"
const GATHER_OUT_MESSAGE="Gatherルーム退室時のメッセージ"
```

# 補足.Chrome拡張の設定方法

1. まず、[Chromeウェブストア](https://chrome.google.com/webstore/category/extensions)にアクセスします。

2. 検索バーに「拡張機能」と入力し、Enterキーを押します。

3. 拡張機能ページが表示されたら、右上の「拡張機能を追加」ボタンをクリックします。

4. 拡張機能の一覧が表示されるので、インストールしたい拡張機能を見つけてクリックします。

5. 拡張機能の詳細ページが表示されたら、右上の「追加」ボタンをクリックします。

6. Chromeウィンドウの右上に拡張機能のアイコンが表示されます。

7. 拡張機能のアイコンをクリックして、設定やオプションを確認・変更できます。

以上で、Chrome拡張の設定が完了しました。

注意: インストールする拡張機能によっては、追加の設定やアクセス許可が必要な場合があります。拡張機能の詳細ページを確認して、必要な手順を実行してください。



