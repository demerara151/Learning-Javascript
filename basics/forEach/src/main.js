// 2D描画のテンプレ
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

// ウィンドウのサイズによって描画する領域を決定する
const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

// 後で使うランダム関数を先に定義
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

// （大量に作る予定の）ボールオブジェクトの設計図（class）を定義
class Ball {
	constructor(x, y, color, size) {
		this.x = x // 描画を始めるｘ座標
		this.y = y // 描画を始めるｙ座標
		this.color = color // 塗りつぶしの色
		this.size = size // ボールの半径。つまり大きさを決める要素
	}

	// 円を描画するテンプレ
	draw() {
		ctx.beginPath() // 線を書き始める
		ctx.fillStyle = this.color // 塗りつぶしの色を指定する
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI) // 指定した座標を始点に円を描画する
		ctx.fill() // 円が描画されたので、上で指定した色で塗りつぶす。
	}
}

// オブジェクトを使うために実体化する
const ball = new Ball(150, 200, "green", 50)

// 実体化したオブジェクトに自身の円を描画させる
ball.draw()

// オブジェクトを格納するための配列を用意する
const balls = []

// （ランダムなプロパティを持った）複数のオブジェクトを作成して、配列に格納してみよう
while (balls.length < 10) {
	const size = random(10, 20)
	const randomBall = new Ball(
		random(0 + size, width - size),
		random(0 + size, height - size),
		`rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
		size
	)
	balls.push(randomBall) // 生成されたオブジェクトを配列の中に入れる
}

// 配列の中身を確認してみよう
console.log(balls)

// 配列の中にオブジェクトは何個ある？
console.log(balls.length)

// それぞれのオブジェクトに自身の円を描画させてみよう
balls.forEach(ball => ball.draw())

/**
 * ここで使われる「ball」は、配列内の全ての値を指す。それぞれを1番始めから順に処理を行っていく。配列内の値がなくなるまで繰り返す。
 *
 * 従来の一般的な「for文」では、配列内にいくつ値が存在しているか確認して、それぞれにインデックスを付与して、値を呼び出していた。その呼び出された値に対して処理を行うという仕組みだった。
 for (let i = 0; i < balls.length; i++) {
	 balls[i].draw()
 }
 * この場合、最初のballs[i].draw()の「i」は「0」なので、配列内の一番最初の値が呼び出される。配列には10個のオブジェクトが存在しているので、「i < balls.length」の条件を満たす最後の「i」は「9」。つまり、balls[0]からballs[9]までの10個のオブジェクトに円を描画させている。
 *
 * 2015年、ここにES6で新たな配列メソッド「forEach()」が登場する。このメソッドの登場でこの「for文」と同じ挙動をさせるのがとても簡単になった。「forEach()」の場合、いちいち配列内の値にインデックスを付与して呼び出す必要がない。引数に指定したコールバック関数で配列内の値に該当する引数を指定して、その引数に対して処理を実行させるだけ。63文字も書いていたものが、たったの34文字で書けるようになっただけでなく、何をしているのかとてもわかりやすく読みやすくなった。
 */

// 応用編
// 配列内のオブジェクトのサイズが15未満だった場合だけ、円を描画するようにしてみよう
// balls.forEach(ball => {
// 	if (ball.size < 15) {
// 		ball.draw()
// 	}
// })
