/**
 * class（クラス）は、オブジェクトの本体です。これは設計書や仕様書のようなもので、この設定情報を参照して実際のオブジェクト（「インスタンス」と呼ぶ）を作成できます。大枠は一緒だが一部だけ設定を変えて複数のオブジェクトを作成したいときに便利です。キャラクターやモンスター、ステージ内のオブジェクト等、使い方は無限大。
 * 基本的な書き方：class クラス名 {プロパティとメソッド}
 * クラス名は必ず大文字で始めます。プロパティは一般的なオブジェクトと違って、「＝」で代入します。それぞれのプロパティやメソッドを「,」で区切る必要もありません。
**/

class User {
	name = "孫悟空"
	age = 26
	sayHello() {
		console.log(`私の名前は${this.name}です。年齢は${this.age}才です`)
	}
}

/**
 * クラスはそのままでは使えません。「new」というキーワードを使って実体化（インスタンス化）する必要があります。そのやり方は以下の通りです。
 * const 好きなオブジェクト名 = new クラス名()
*/
const user = new User()

console.log(user) // 「User」だとクラスの内容が表示されます
console.log(user.name, user.age) //「User.name」は「User」というクラス名、「User.age」だと「Undefined」が返ってきます。
user.sayHello()

/**
 * このようにクラスはインスタンスを作成することによって初めて実際にオブジェクトとして扱うことができます。
 * 次の例では、クラスのプロパティをクラス内で定義せず、実体化する際に好きな値を渡す方法を紹介します。
 */
class Character {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	sayHello() {
		console.log(`私の名前は${this.name}です。年齢は${this.age}才です`)
	}
}

const vegeta = new Character("ベジータ", 25)
vegeta.sayHello()

const nappa = new Character("ナッパ", 24)
nappa.sayHello()

/**
 * クラス内でプロパティを設定する際、コンストラクター（constructor(){}）という特殊な関数を利用し、実体化の際に任意の値をオブジェクトに渡すことができます。コンストラクター内で、その値を「this.変数」に格納することで、メソッドでもその値を反映させて使うことができようになります。
 * もちろんコンストラクターの引数内で、デフォルトの値を設定しておくこともできます。
 * 上記の例で言えば、ナッパもベジータもサイヤ人なので、種族（race）という引数を追加して、その値を「サイヤ人」に設定します。
 */

class Character_01 {
	constructor(name, age, race = "サイヤ人") {
		this.name = name
		this.age = age
		this.race = race
	}
	sayHello() {
		console.log(`私の名前は${this.name}です。年齢は${this.age}才です。種族は${this.race}です。`)
	}
}

const vegeta_01 = new Character_01("ベジータ", 25)
vegeta_01.sayHello()

const nappa_01 = new Character_01("ナッパ", 24)
nappa_01.sayHello()

/**
 * デフォルトでプロパティを設定したので、実体化する際に値を渡す必要はありません。
 * しかし、デフォルトのプロパティとは違う値を付与したい場合は、実体化の際に任意の値を引数として渡すこともできます。
*/

const kuririn = new Character_01("クリリン", 41, "地球人")
kuririn.sayHello()

/**
 * まとめ
 * クラスを利用することで、複数人分のオブジェクトを作ることなく１つのオブジェクトから複数のオブジェクトを簡単に作成することができました。コードの分量が大幅に削減できるのもクラスを利用するメリットの１つです。
 * 更にこれらのオブジェクトに同じ「技」というメソッドを持たせたいと思った場合は、コンストラクターに「技」というメソッドを１つ追加するだけで全員に同一のメソッドを付与することができます。
 */
