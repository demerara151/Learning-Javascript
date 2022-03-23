// simple example of two scopes: global and local
let num = 3
console.log(`This num is global variable: ${num}`) // you can access num because num is globally defined

const sum = (num: number, num2: number) => {
	let result = num + num2 // you can also access num from here
	console.log(`${num} + ${num2} は ${result}です`)
}

sum(12, 31)

// console.log(`計算結果は${result}です`) // you can't access result from here because result is not global

/*
sum 関数内部からは、num 変数を参照できるし、内部で宣言されている result 変数も参照できる
しかし、sum 関数内部で宣言されている result 変数を関数定義の外から参照することはできない
*/
