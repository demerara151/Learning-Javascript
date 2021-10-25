// アロー関数（Arrow Function）とは、関数の簡略化した書き方。

// 先ず通常の関数
function fn(a, b) {
	let result = a * b
	return result
}
// または
const fn = function(a, b) {
	let result = a * b
	return result
}

// アロー関数「() => {}」
const fn = (a, b) => {
	let result = a * b
	return result
}

// 実行したい内容が１つだけの場合、{}とreturnは省略できる
const fn = (a, b) => a * b
fn(8, 9) // 72

// 引数が1つの場合は、丸カッコも省略できる
const fn2 = x => x * x
fn2(5) // 25

// 引数がない場合は、()だけを書く
const name = "山田太郎"
const fn3 = () => name.length
fn3() // 4

/*
日本語で書くとこうなる
const 関数名 = (引数1, 引数2) => {
    実行したい内容
    実行したい内容
    実行したい内容
    return 戻り値
}

引数も内容も1つの場合
const 関数名 = 引数 => 実行したい内容

引数がない場合
const 関数名 = () => 実行したい内容
*/
