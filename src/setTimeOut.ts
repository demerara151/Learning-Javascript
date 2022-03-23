// setTimeOut()を利用して、一定時間後にプログラムを実行する
setTimeout(function () {
	alert("Hello, Mr. Universe!")
}, 5000)

// with Promise pattern
function delay(milliseconds: number) {
	return new Promise(resolve => {
		setTimeout(resolve, milliseconds)
	})
}

async function init() {
	console.log("Executed now")

	await delay(1000)

	console.log("Executed after 1 second wait")

	await delay(1000)

	console.log("Executed after 2 seconds wait")
}

init()

console.log("Executed after the 1st log and before the 2 delays")
