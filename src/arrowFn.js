// アロー関数（Arrow Function）とは、関数の簡略化した書き方

// 通常の関数
function add(a, b) {
  const result = a * b
  return result
}
add(3, 8)

// アロー関数: (引数) => {実行したい内容}
const add_arrow = (a, b) => {
  const result = a * b
  return result
}
add_arrow(5, 6)

// 実行したい内容が `a * b` のように１つだけの場合、`{}` と `return` は省略できる
const multiply = (a, b) => a * b
multiply(3, 5)

// 引数がない場合は、()だけを書く
const say_hello = () => "hello"
console.log(say_hello())

// 非同期関数の定義。この場合、`await` する必要があるので `return` は省略できない
const fetchData = async url => {
  const res = await fetch(url)
  return res.json()
}

let result = await fetchData("https://httpbin.org/json")
console.log(result)
