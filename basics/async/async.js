// setTimeOut()を利用して、一定時間後にプログラムを実行する
let myGreeting = setTimeout(function() {
	alert("Hello, Mr. Universe!")
}, 2000)

// setInterval()を利用して一定時間ごとに繰り返し実行する
function displayTime() {
	let date = new Date()
	let time = date.toLocaleTimeString()
	document.getElementById("demo").textContent = time
}

const createClock = setInterval(displayTime, 1000)

// requestAnimationFrame()を利用した反復処理の例
const spinner = document.querySelector("div")
let rotateCount = 0
let startTime = null
let rAF

function draw(timestamp) {
	if (!startTime) {
		startTime = timestamp
	}

	rotateCount = (timestamp - startTime) / 3

	if (rotateCount > 359) {
		rotateCount %= 360
	}

	spinner.style.transform = "rotate(" + rotateCount + "deg)"

	rAF = requestAnimationFrame(draw)
}

draw()

// Promisesを使った非同期の例
fetch("coffee.jpg")
	.then(response => response.blob())
	.then(myBlob => {
		let objectURL = URL.createObjectURL(myBlob)
		let image = document.createElement("img")
		image.src = objectURL
		document.body.appendChild(image)
	})
	.catch(e => {
		console.log("There has been a problem with your fetch operation: " + e.message)
	})

// Promise.all()を利用した非同期の例
function fetchAndDecode(url, type) {
	// 関数内の一番最初の部分でPromiseを返すようにすれば、関数を実行したあとに、返されたデータを外部から参照することができるようになる。
	return fetch(url)
		.then(response => {
			// 読み込まれるファイルの種類によって、そのコンテンツに合ったデコードを実行するメソッドを使う
			if (type === "blob") {
				return response.blob()
			} else if (type === "text") {
				return response.text()
			}
		})
		.catch(e => {
			console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message)
		})
}

// 画像とテキストデータを読み込むためにfetchAndDecode()メソッドを使い、それらのPromiseを変数に保存する。
let coffee = fetchAndDecode("coffee.jpg", "blob")
let tea = fetchAndDecode("tea.jpg", "blob")
let description = fetchAndDecode("description.txt", "text")

// 3つ全ての関数がresolve（解決）した場合のみ、コードを実行するためにPromise.all()を使う。
Promise.all([ coffee, tea, description ]).then(values => {
	console.log(values)
	//Promiseで返ってきた値を別々の変数に格納し、blobからオブジェクトのURLを生成する。
	let objectURL1 = URL.createObjectURL(values[0])
	let objectURL2 = URL.createObjectURL(values[1])
	let descText = values[2]

	// <img>要素の中の画像を表示する
	let image1 = document.createElement("img")
	let image2 = document.createElement("img")
	image1.src = objectURL1
	image2.src = objectURL2
	document.body.appendChild(image1)
	document.body.appendChild(image2)

	// 段落の文章を表示する
	let para = document.createElement("p")
	para.textContent = descText
	document.body.appendChild(para)
})

// async/awaitを利用した非同期の例
async function myFetch() {
	let response = await fetch("coffee.jpg")
	let myBlob = await response.blob()

	let objectURL = URL.createObjectURL(myBlob)
	let image = document.createElement("img")
	image.src = objectURL
	document.body.appendChild(image)
}

myFetch()
