# JSONの書き方
1.データ全体を波カッコで囲う。{}
2.データはkeyとvalueのペア。オブジェクトと一緒。
3.keyは必ずダブルクォーテーションで囲む。"key"
4.keyの後にコロンを置いて、valueを書く。
"key":"文字列" or 数値 or データ型 or 真偽値 その他どんな値でも設定できる
5.それぞれのデータはカンマで区切る。
6.配列やオブジェクトも設定できるし、ネストさせることもできる。

# どんな場面で使われるか
JSONは主にAPIや設定ファイルで使われる。
APIで統計データだったり、リアルタイムの天気情報だったりのデータを受け取りたい時に、データサイズが少ないために転送が早く、情報が一目で読みやすくわかりやすいため、よくこのJSONという形式が使われる。
設定ファイル、いわゆるコンフィグファイルでもよく使われる。config.jsonやuser.jsonは様々なアプリやソフトでよく見かける。ゲームの設定等がよくここにまとめられている。このファイルを直接いじることでゲーム内では変更できない設定も変更できたりする。

# 具体的な例
youtubeのAPIで自身の動画の情報をJSONで取得した場合を想定してみる
```JSON
{
    "title":"JSONで動画の情報取得してみた",
    "watched": 203145,
    "like":5712,
    "bad":1029,
    "subscribe":81,
    "comments":[
        {
            "name":"じぇいそん",
            "discription":"すごいタメになりました！",
            "date":20201016,
            "time":1426,
            "isSubscribed":false
        },
        {
            "name":"カラオケおじさん",
            "discription":"1:34 ここはセミコロンじゃなくてコロンじゃない？",
            "date":20201030,
            "time":1822,
            "isSubscribed":true
        },
        {
            "name":"little angel",
            "discription":"this is pretty good contents",
            "date":20201112,
            "time":0155,
            "isSubscribed":false
        }
    ]
}
```
# JSONから特定の値を取り出す
配列やオブジェクトの値を取り出す方法と同じ方法で値を取り出せる。
```javascript
// 受け取ったデータを仮にjsonObjという変数に格納したとする。
const data = jsonObj["title"]
console.log(data) // 「JSONで動画の情報取得してみた」と出力される

const comments = jsonObj["comments"]
console.log(comments[0].name) // 最初のコメントをしたユーザー名が表示される

comments.forEach(comment => {
    console.log(comment["name"]) // コメントをしたユーザー名が全て表示される
})
```
