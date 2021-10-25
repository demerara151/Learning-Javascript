// １２．段落への参照を格納する変数を定義してください。
// １３．ボールをカウントするのに必要な変数を定義してください。

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

// １．Shape というクラスを定義してください

class Ball extends Shape {
	// ２．コンストラクターを適切に定義してください

	draw() {
		ctx.beginPath()
		ctx.fillStyle = this.color
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
		ctx.fill()
	}

	update() {
		if (this.x + this.size >= width) {
			this.velX = -this.velX
		}

		if (this.x - this.size <= 0) {
			this.velX = -this.velX
		}

		if (this.y + this.size >= height) {
			this.velY = -this.velY
		}

		if (this.y - this.size <= 0) {
			this.velY = -this.velY
		}

		this.x += this.velX
		this.y += this.velY
	}

	collisionDetect() {
		balls.forEach(ball => {
			if (!(this === ball)) {
				const dx = this.x - ball.x
				const dy = this.y - ball.y
				const distance = Math.sqrt(dx * dx + dy * dy)

				if (distance < this.size + ball.size) {
					ball.color = this.color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
				}
			}
		})
	}
}

class EvilCircle extends Shape {
	// 3. コンストラクターを適切に定義してください
	// ４．draw()を定義してください
	// ５．checkBounds()を定義してください
	// ６．setControls()を定義してください
	// ７．collisionDetect()を定義してください
}

const balls = []

while (balls.length < 25) {
	const size = random(10, 20)
	const ball = new Ball(
		random(0 + size, width - size),
		random(0 + size, height - size),
		random(-7, 7),
		random(-7, 7),
		true,
		`rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
		size
	)
	balls.push(ball)
	// １４．ボールを数えよう
	// １５．ボールの数を画面に表示しよう
}

// ８．EvilCircleをインスタンス化してください。
// ９．インスタンス化されたEvilCircleのsetControls()を呼び出してください。

const loop = () => {
	ctx.fillStyle = "rgba(0,0,0,0.25)"
	ctx.fillRect(0, 0, width, height)

	// １０．すべてのボールをループして、ボールが存在する場合にのみ、それぞれのdraw()、update()、collisionDetect()が呼び出されるようにしてください。

	// １１．このループ内の各繰り返しで、インスタンス化されたEvilCircleのdraw()、checkBounds()、および collisionDetect()メソッドを呼び出してください。

	requestAnimationFrame(loop)
}

loop()
