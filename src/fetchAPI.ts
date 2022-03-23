// simple fetch function with async-await

async function getData(url: RequestInfo) {
	const response = await fetch(url) // send request to url
	const superHeroes = await response.json() // await response from url

	console.log(superHeroes)
}

getData(
	"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
)

// all scripts from here will be run whether getData() is executed or not
