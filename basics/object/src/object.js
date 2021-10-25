/* オブジェクトとは、個体情報やできることをまとめた存在。
個体情報にあたるものをプロパティ、できることをメソッドと呼ぶ。
それらのデータを{}で囲むとオブジェクトとなる。
*/

const user = {
	name: "Ken", // nameを「key（キー）」と呼び、"Ken"を「value（バリュー）」と呼ぶ
	age: 30, // 情報を呼び出すための鍵を左側に書き、コロン「:」を置いて右側に値を書く
	location: "sapporo", // それぞれのプロパティはコンマ「,」で区切る
	blogs: [ "無料ゲーム情報局", "0から始めるプログラミング講座" ], // 配列も使える
	isMatrue: true, // 真偽値だって使える

	// 関数の場合は、左側に関数名を書いてコロン、function(){}と書いて波カッコの中に実行したい処理を書く。この関数をオブジェクトでは「メソッド」と呼ぶ
	loggedIn: function() {
		console.log("ログインに成功しました")
	},

	// 関数の場合、コロンとfunctionは省略できる
	loggedOut() {
		console.log("ログアウトしました")
	},

	showBlogs() {
		// オブジェクト内のプロパティをメソッド内で呼び出すことはできない
		// console.log(blogs) // Uncaught Error: blogs is not defined
		// しかし、「this（ディス）」というキーワードを使うことによって呼び出せるようになる
		console.log(this.blogs) // 「this」とはこのオブジェクトそのもの、つまり「user」を指す
		// this.blogsは配列なので配列メソッドが使える(詳しくは後述)。forEachで配列内の全ての値を順に表示するコールバック関数を呼び出す。
		this.blogs.forEach(blog => console.log(blog))
	}
}

// オブジェクト内のプロパティを呼び出して使う場合、`object['key']`と`object.key`という2種類の方法がある。基本的にはドットで呼び出す。例外もあるが['key']ほとんど使わないと思っていい。

console.log(user.name) // "Ken"が出力される
console.log(user.blogs) // 2つのブログ名が格納された配列が出力される
console.log(user.blogs[0]) // 配列の最初の値が返される

// オブジェクトのプロパティの値を変更したい場合は、変数と同じように再代入することで変更できる
console.log(user.age) // 30
user.age = 35
console.log(user.age) // 35

// メソッドを呼び出す場合も同じ
user.loggedIn()
user.loggedOut()
user.showBlogs()
