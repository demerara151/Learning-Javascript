// Mathという計算に特化したオブジェクトのメソッドを使って計算を便利に行う

// Mathは先頭大文字で、ドットを付けて使いたいメソッドを呼び出せる
const randomNumber = Math.random() // .random()で0から1までの間で乱数を生成する
console.log(randomNumber * 100) // 0から100までの間で乱数を生成する

console.log(Math.round(randomNumber * 100)) // 四捨五入 8.7 -> 9 | 6.2 -> 6
console.log(Math.floor(randomNumber * 100)) // 小数点を切り捨てる 8.7 -> 8 | 6.2 -> 6
console.log(Math.ceil(randomNumber * 100)) // 小数点を取り入れる 8.7 -> 9 | 6.2 -> 7

// これを関数にしてしまう
const random = (x: number) => Math.floor(Math.random() * x)
console.log(random(100)) // 0から100までのランダムな数値を出力する

// 円周率
const pi = Math.PI // PIはメソッドではなくプロパティなので丸カッコは付けない
console.log(pi) //  3.141592653589793

// 半径2.4mの円の面積を求める
const menseki = 2.4 * 2.4 * Math.PI // 円の面積を求める公式は「半径x半径x円周率」
console.log(menseki) // 18.09557368467721
console.log(Math.round(menseki)) // 18

// ちなみにべき乗（累乗）は、「2.4 ** 2」や「Math.Pow(2.4, 2)」という風にも計算できる
console.log(2.4 ** 2 * Math.PI)
console.log(Math.pow(2.4, 2) * Math.PI)

// Math.maxは複数の数値の中から最も大きい値を返す
const numbers = [-12, 0, 57, 1678, -103, 7]
console.log(Math.max(...numbers)) // 1678

// Math.minはその逆で最も少ない数値を返す
console.log(Math.min(...numbers)) // -103
