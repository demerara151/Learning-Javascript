// scope（スコープ）の概念

// global scope（グローバルスコープ）
// ファイル内のどこからでも変数にアクセスできる
let num = 3
console.log(num) // 3

function changeNum(a) {
	num = a // 6行目の変数「num」を参照できる
}
changeNum(10) // 「num」の値が10に変わる

console.log(num) // 10

// local scope（ローカルスコープ）
// ブロック内で定義された変数はそのブロックの内部でしか参照できない。
function sum(a, b) {
	let c = a + b
	console.log(`${a} + ${b} は ${c}です`) // 18行目の「c」を参照できる
}

sum(12, 31) // 43
// console.log(`計算結果は${c}です`)
/**Uncaught ReferenceError: c is not defined
 * 「ｃ」を参照できないため、「ｃ」は未定義ですとエラーが返ってくる*/

/**関数内部にあるlogメソッドは変数「ｃ」を参照できる。
 * しかし、関数の外にあるlogメソッドは変数「ｃ」を参照できない。*/

// オブジェクトの場合
const user = {
	name: "Bob",
	age: 35,

	changeName() {
		// user.name = "Ken"はエラー
		this.name = "Ken"
	},
	/**本来オブジェクトの内部では、そのオブジェクトのプロパティを参照できない。しかし、「this」というキーワードを用いることでオブジェクトのプロパティを参照できるようになる。この場合「this」とはオブジェクトの「user」そのもの。「user」はグローバルに定義されているオブジェクトのため外部から自由にアクセスできる。 */
	showThis() {
		console.log(this) // userオブジェクトが出力される
	},
	obj: { name: "obj", count: 1 },
	games: [ { game: "fortnite", plays: 34 }, { game: "PUBG", plays: 156 } ]
	/**オブジェクトの中のオブジェクトはもちろん、オブジェクトのプロパティに配列を定義して、その中にさらにオブジェクトを配置しても「user」のプロパティとして自由にアクセスできる*/
}

console.log(user.name) // Bob
user.changeName()
console.log(user.name) // Ken
user.showThis() // Object { name: "Ken", age: 35, changeName: changeName(), showThis: showThis() }

// 配列の場合
const arr = [ num, user.name, user.age, user.obj.name, user.games[0].game, user.games[1].plays ]
console.log(arr)
// グローバルに定義された変数は全て格納できる。しかし、18行目の「c」は参照できないため、格納できない。

// より複雑な例
function fun(a, b, c) {
	if (a < b === c || a !== c) {
		for (let i = 0; i < 10; i++) {
			const arr = []
			arr.push(a + i + num)
			console.log(arr, num)
		}
		sum(b, c)
		arr.map(x => console.log(x))
	}
	return a + num * b / user.age - user.games[0].plays
}

fun(3, 5, 4)

console.log(fun(45, 187, 1037))

/**63行目の「arr」はfor文のなかで宣言されているため、for文の中でしか参照できない。そのため、67行目の「arr]は54行目の「arr」を参照している。グローバルに定義されている「num」や「sum()」関数にもアクセスできる。66行目「sum(b,c)」の「ｃ」は「fun(a,b,c)」の「ｃ」であって、18行目の「ｃ」ではない。この「ｃ」はfun()関数の仮引数で、実引数は72行目の「4」、74行目の「1037」。
 */
