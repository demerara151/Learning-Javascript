const random = x => Math.floor(Math.random() * x)

class Monster {
	constructor(name, HP, items) {
		this.name = name
		this.HP = HP
		this.items = items
	}
	dieOrNot() {
		if (this.HP <= 0) {
			console.log(`${this.name}を倒した！`)
		} else {
			console.log(`${this.name}はまだピンピンしている！`)
		}
	}
	getItems() {
		return this.items[random(this.items.length)]
	}
}

const monster = new Monster("リヴァイアサン", 8712, [ "海神のお守り", "ウォーターリング", "水の紋章", `${random(3000)}ゴールド` ])

// 例題１：値の代入を利用してリヴァイアサンを倒してください。
monster.HP = 0
monster.dieOrNot()

// 例題２：リヴァイアサンのプロパティを「key：value」という形式でコンソールに全て表示してください。ただし、コードは１行に収めてください。
for (const data in monster) console.log(`${data}：${monster[data]}`)

// 例題３：getItems()を10回繰り返し実行し、その結果を配列に格納して表示してください。
const loot = []
let i = 0
while (i < 10) {
	loot.push(monster.getItems())
	i++
}
console.log(loot)

// 例題４：配列「loot」に「ウォーターリング」がいくつ含まれているか確認してコンソールに「ウォーターリング」の獲得数を表示してください。もし結果が０だった場合は、獲得できなかったことを表示するように、獲得したアイテムが全て「ウォーターリング」だった場合は、全て「ウォーターリング」だったことを表示してください。
const index = monster.items.indexOf("ウォーターリング")
const ring = monster.items[index]
const rings = loot.filter(item => item === ring)
if (rings.length === 0) {
	console.log(`${ring}を獲得できませんでした。`)
} else if (rings.length === loot.length) {
	console.log(`獲得したアイテムは全て「${ring}」でした。`)
} else {
	console.log(`${ring}を${rings.length}個獲得しました。`)
}

/**
 * 解説

 * Array.indexOf(値)：目的の値のインデックスを調べるメソッド。その値が配列内に存在しない場合は、「-1」を返す。
 * 上記の例で言えば、"ウォーターリング"は配列の２番目にあるので「１」が返ってくる。
 * ちなみに例題４の場合、
 * const index = monster.items.indexOf("ウォーターリング")
   const ring = monster.items[index]
   は、
   const ring = "ウォーターリング"
   で、問題ない。indexOf()というメソッドの紹介のために使った。

 * Array.filter(trueまたはfalseを返す関数)：配列内の全ての値に対して、引数に設定した条件に合うかを試し、条件に合う（trueを返す）値だけを新しい配列に格納する。元の配列の中身は変わらない。
 * 上記の例で言えば、配列「loot」の全ての値（引数「item」）に対して、目的の値「ring」と同じかどうかを確かめる。trueだった場合、その値（つまり、「ring」）を配列に入れる。

 * ちなみに、Array.filter()のような引数に関数を取る関数のことを「高階関数」という。関数の引数や戻り値に別の関数を設定することができる。主に配列メソッドに多い。
 加えて、引数に設定される関数のことを「コールバック関数」という。上記の場合は`item => item === ring`を指す。これは、`const checkItem = (item) => {return item === ring}`といった関数と同じもの。引数に設定する場合は宣言や関数名を省略できる。
  */

/**
 * loot.filter(item => item === ring)
 *
 * これは、次のように書くこともできる：
 * loot.filter(item => item.indexOf(ring) !== -1)
 * indexOd()で「-1」が返らない値ということは、その値が含まれているということ。
 *
 * また、次のようにも書ける：
 * loot.filter(item => item.includes(ring))
 * Array.includes()は、配列内に指定した値が存在するかどうかを確かめる配列メソッド。値が存在していれば「ture」、存在しなければ「false」を返す。この方法が2020年現在もっとも正確だし読んでいてわかりやすい（include「インクルード」は「含まれている」という意味の英単語のため）。
 */
