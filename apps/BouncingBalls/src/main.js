const counter = document.querySelector("p")
let count = 0

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

class Shape {
	constructor(x, y, velX, velY, exists) {
		this.x = x
		this.y = y
		this.velX = velX
		this.velY = velY
		this.exists = exists
	}
}

class Ball extends Shape {
	constructor(x, y, velX, velY, exists, color, size) {
		super(x, y, velX, velY, exists)
		this.color = color
		this.size = size
	}
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

				if (distance < this.size + ball.size && ball.exists) {
					ball.color = this.color = `rgb(${random(0, 255)},${random(
						0,
						255
					)},${random(0, 255)})`
				}
			}
		})
	}
}

class EvilCircle extends Shape {
	constructor(x, y, exists) {
		super(x, y, 20, 20, exists)
		this.color = "white"
		this.size = 10
	}

	draw() {
		ctx.beginPath()
		ctx.strokeStyle = this.color
		ctx.lineWidth = 3
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
		ctx.stroke()
	}

	checkBounds() {
		if (this.x + this.size >= width) {
			this.x -= this.size
		}

		if (this.x - this.size <= 0) {
			this.x += this.size
		}

		if (this.y + this.size >= height) {
			this.y -= this.size
		}

		if (this.y - this.size <= 0) {
			this.y += this.size
		}
	}

	setControls() {
		document.addEventListener("keydown", e => {
			switch (e.key) {
				case "a":
					this.x -= this.velX
					break
				case "d":
					this.x += this.velX
					break
				case "w":
					this.y -= this.velY
					break
				case "s":
					this.y += this.velY
					break
			}
		})
	}

	collisionDetect() {
		balls.forEach(ball => {
			if (ball.exists) {
				const dx = this.x - ball.x
				const dy = this.y - ball.y
				const distance = Math.sqrt(dx * dx + dy * dy)

				if (distance < this.size + ball.size) {
					ball.exists = false
					count--
					counter.textContent = `Ball count: ${count}`
				}
			}
		})
	}
}

const balls = []

while (balls.length < 250) {
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
	count++
	counter.textContent = `Ball count: ${count}`
}

const evil = new EvilCircle(random(0, width), random(0, height), true)
evil.setControls()

function loop() {
	ctx.fillStyle = "rgba(0,0,0,0.25)"
	ctx.fillRect(0, 0, width, height)

	balls.forEach(ball => {
		if (ball.exists) {
			ball.draw()
			ball.update()
			ball.collisionDetect()
		}
	})

	evil.draw()
	evil.checkBounds()
	evil.collisionDetect()

	requestAnimationFrame(loop)
}

loop()
