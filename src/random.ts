// ①最も短いランダム関数の定義方法
const random = (x: number) => Math.floor(Math.random() * x)
console.log(random(255)) // 0～255の間のランダムな数値を返す

// ②引数に2つの数値を渡して、その間でランダム数値を出力したい場合
const random2 = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min) + min)
console.log(random2(-7, 7)) // -7～+7までのランダムな数値を返す(0を含む)

// ③上記の例で、0を返したくない場合
const random3 = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1) + min)
console.log(random3(-7, 7)) // -7～-1, +1～+7の間のランダムな数値を返す

/*
②は、最後に最小の数値を足さないと2番目の引数がマイナスとマイナスで
プラスになってしまい、最大値として与えた引数の数値より上の値しか返さなくなる
③は、canvasで物体を動かしたい場合によく使う
0が返ってくると物体が止まってしまう可能性があるため
*/
