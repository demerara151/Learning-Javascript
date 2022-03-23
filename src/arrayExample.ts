// 複数の値をコンマで区切り角括弧（ブラケット）で囲うと配列となる
const sequence = [1, 1, 2, 3, 5, 8, 13]

// 文字列を配列に格納する
const places = "札幌, 仙台, 東京, 名古屋, 大阪, 博多"
const place = places.split(",") // 文字列を指定した値で区切って配列にする
console.log(place)

console.log(place.join(",")) // 再び文字列に戻す

place.push("横浜") // 配列の最後に値を追加する。先頭に追加するなら `.unshift()`
console.log(place)

const removed = place.pop() // 配列の最後の値を抜き出す。先頭から抜き出すなら `.shift()`
console.log(place)

/*
例題
文字列を配列にして商品名と価格に分ける
価格を数値にして各々の価格を表示する
トータルの価格も最後に表示する
*/

let total = 0

const products = [
	"パンツ:6.99",
	"靴:5.99",
	"Tシャツ:14.99",
	"ズボン:31.99",
	"靴:23.99",
]

products.forEach(item => {
	const product = item.split(":")

	const name = product[0]
	const price = Number(product[1])

	total += price

	console.log(`${name} - \$${price}`)
})

console.log(`Total: \$${total.toFixed(2)}`)
