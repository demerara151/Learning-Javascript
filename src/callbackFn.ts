// 配列メソッドのmap()は、指定された配列内の全ての値に対して関数を実行し、その結果を配列にして出力する。そのため、引数に実行したい関数を書く
const numbers = [1, 5, -7, 128, 5.76]

const cfn = numbers.map(number => number * 2) // number は配列内のそれぞれの値

console.log(cfn) // [ 2, 10, -14, 256, 11.52 ]

// 同じく配列メソッドのforEach()は、指定された配列内の全ての値に対して関数を実行する。こちらの結果は配列では返ってこず、１つ１つの値として表示される
numbers.forEach(number => console.log(number * 2)) // 上から１つずつ結果が表示される
