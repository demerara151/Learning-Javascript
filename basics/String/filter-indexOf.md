## 問題１ クリスマスのメッセージだけを抽出して出力

```javascript
const message = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
]

const chris = message.filter((x) => x.indexOf("Christmas") !== -1)
for (const i of chris) console.log(i)
```

`filter()`を使って配列内を検索
`indexOf() !== -1`を使って指定した要素を含む文字列を検索
注：`indexOf()`の結果が-1 を返す時、指定した要素は該当する文字列内に含まれないことを意味する
検索でヒットした要素を全て出力

> [参照 MDN](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods)
