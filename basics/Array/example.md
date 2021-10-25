## 問題１
文字列を配列にして商品名と価格に分ける。
価格を数値にして各々の価格を表示する。
トータルの価格も最後に表示する。
```javaScript
/*
const list = document.querySelector('.output ul')
let totalBox = document.querySelector('.output p')
list.innerHTML = ''
totalBox.textContent = ''
*/
let total = 0

const products = [
  'パンツ:6.99',
  '靴下:5.99',
  'T シャツ:14.99',
  'ズボン:31.99',
  '靴:23.99'
]

products.forEach(vals => {
  const val = vals.split(":")
  const name = val[0]
  price = Number(val[1])
  total += price
  let itemText = `${name}-\$${price}`
  console.log(itemText)
})

for (const i of products) {
  const val = i.split(":")
  const name = val[0]
  price = Number(val[1])
  total += price
  let itemText = `${name}―\$${price}`
  console.log(itemText)
/*
  let listItem = document.createElement('li')
  listItem.textContent = itemText
  list.appendChild(listItem)
*/
}

// totalBox.textContent =
console.log(`Total: \$ ${total.toFixed(2)}`)
```

>[参照MDN](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Arrays)

**問題が悪すぎる！**

配列内の文字列を操作(値として取り出す)して、  
新たな配列を文字列の数だけ作り、  
その新しい配列から任意の値(商品名)を取り出し、  
新たな文字列としてそれぞれを結合する。  
その過程でもう一方の値(価格)を全て足していく必要がある。

とにかく例題が悪い。学習者に何をさせたいのかがわかりづらい。  
上記のように、まずはすべきことを段階別に列挙し、  
最終的にどのように表示されるかを見せた上で問題を投げかけるべきだ。

更には事前に用意されているコードにはhtmlのコードが付属していないため、  
視覚的にもどの位置にどの値が出力されるのかわかりづらい。というかわからない。

中途半端に用意されたコードは逆に混乱を招く。  
何故forループの条件を誤った値に設定しておく必要があるのか。  
ここで学ぶべき要素ではない。全くもって無意味だ。

単に結果をコンソールで出力できるようにすべきだ。
