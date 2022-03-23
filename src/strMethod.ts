const str = "NewYork"

// 文字列の長さを図る。これはプロパティなので末尾に丸カッコは付けない
console.log(str.length) // 7

// 文字列を全て小文字にする
console.log(str.toLowerCase()) // newyork

// 文字列を全て大文字にする
console.log(str.toUpperCase()) //  NEWYORK

// 該当の文字が何番目にあるか探して出力する
console.log(str.search("w")) // 2
console.log(str.search("g")) // 値が存在しない場合、「-1」と表示される

// 特定の文字を任意の文字と入れ替える
console.log(str.replace("e", "o")) // "e"が"o"に変わって"NowYork"と出力される

// 文字列の中に特定の文字が含まれているか確認する
console.log(str.includes("k")) // true
console.log(str.includes("yo")) // true
console.log(str.includes("get")) // false

// 文字列を任意の回数繰り返す
console.log(str.repeat(3)) // NewYorkNewYorkNewYork

// 2つ目の引数に指定したインデックスの前の文字までを切り離して出力する
console.log(str.slice(0, 3)) // New

// 特定の文字を起点に前後を分離し、配列として出力する
const names = "Ken, Yoshio, Takumi, Ryouko"
const myName = names.split(",")
console.log(myName) // [ "Ken", "Yoshio", "Takumi", "Ryouko" ]

// 前後の余白を削除する
const city = "   NewYork    "
const str2 = city.trim()
console.log(str2)

console.log(str === str2) // strとstr2は同じもの

/*
例題
"Newyork"という文字列の"y"を文字列メソッドを使って大文字にしよう。
*/
const string = "Newyork"

// 先ずは、"y"がどこにあるか調べて、新しい変数に代入する
const index = string.search("y") // "y"は4番目にあるので3が返される
console.log(index) // 3
console.log(string[index]) // "y"

// 次にその"y"を大文字にして、別の変数に代入する
const upperY = string[index].toUpperCase()
console.log(upperY) // "Y"

// この"Y"を元の文字列の"y"と入れ替える
const result = string.replace(string[index], upperY)
console.log(result) // "NewYork"と出力される
