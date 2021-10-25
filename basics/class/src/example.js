class Square {
	constructor(width, height) {
		this.name = "Square"
		this.width = width
		this.height = height
	}
	get area() {
		return this.width * this.height
	}
	set area(value) {
		this.area = value
	}
	sayMyName() {
		console.log(`Hi, I'm ${this.name}, my area is ${this.area}`)
	}
}

const square = new Square(50, 60)
square.sayMyName()
console.log(square.area)

class Triangle extends Square {
	constructor(bottom, name) {
		super(bottom, bottom)
		this.name = name
	}
	sayHello() {
		console.log(`Hello, me is ${this.name}`)
	}
	area() {
		const bot = this.width * this.height
		console.log(`My area is ${bot}`)
	}
}
const tri = new Triangle(20, "Triangle")
console.log(tri)
tri.sayHello()
tri.area()
