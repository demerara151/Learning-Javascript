// アロー関数（Arrow Function）とは、関数の簡略化した書き方

// 通常の関数
function _fn(a: number, b: number) {
	const result = a * b
	return result
}

// アロー関数: () => {}
const _arrowFn = (a: number, b: number) => {
	const result = a * b
	return result
}

// 実行したい内容が１つだけの場合、{} と return は省略できる
const _multiply = (a: number, b: number) => a * b

// 引数が1つの場合は、丸カッコも省略できる
const _add = (x: number) => x + x

// 引数がない場合は、()だけを書く
const myName = "山田太郎"
const _nameLength = () => myName.length
