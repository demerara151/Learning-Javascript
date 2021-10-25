export default class Monster {
	constructor(name, HP, weak, items) {
		this.name = name
		this.HP = HP
		this.weak = weak
		this.items = items
	}

	showStatus() {
		console.log(`モンスター名：${this.name}
		残りHP：${this.HP}
		弱点：${this.weak}`)
	}
}

/**
 * クラスをエクスポートしたい場合は、.jsファイルの最初に「export default」と書きます。ファイルを読み込ませたい側に必要な設定はこれだけです。
 */
