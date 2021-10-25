```javascript
// 複数の値をコンマで区切り角括弧（ブラケット）で囲うと配列となる
const sequence = [1, 1, 2, 3, 5, 8, 13]

// 配列専用forループ
for (const i of sequence) console.log(i)

//Array.map()を使ったループ（これはまだ覚えなくていい）
sequence.map((x) => console.log(x))

// 文字列を配列に格納する
const places = "札幌,仙台,東京,名古屋,大阪,博多"
const place = places.split(",")

console.log(place) // 配列が表示される
console.log(place[2]) // 配列の3番目のデータが表示される
console.log(place.join(",")) // 再び文字列に戻す
```

`String.split()` 文字列を指定した値で区切って配列にする  
`String.join()` 配列を指定した値で区切って文字列にする

```javascript
const myArray = ["札幌", "仙台", "東京", "名古屋", "大阪", "博多"]

myArray.push("横浜")
console.log(myArray)

const removed = myArray.pop()

console.log(myArray)
console.log(removed)
```

`Array.push("value")` 配列の最後に値を追加する  
`Array.pop()` 配列の最後の値を抜き出す  
`pop()`で抜き出した値は変数に格納すれば取り出せる

`Array.unshift()`及び、`Array.shift()`では逆に、先頭に値を[追加 / 削除]できる

補足：配列を const と定数で定義しているのに配列の中身が入れ替わるのは、この変数は配列であるということを定義しているだけで、配列の中身には影響しないからである。なので、const と定義した配列は他のデータ型には置きかえれない。たとえば、

```javascript
const arr = [1, 2, 3, 4, 5]
arr = "配列"
console.log(arr) // 「配列」という文字列ではなく[1, 2, 3, 4, 5]が表示される
```

といった風に、定数 arr を配列から文字列に変更するこはできない。
配列は常に配列であって欲しいため、必ず const で定数宣言したほうがいい。
