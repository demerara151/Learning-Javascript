async function getData(url) {
	const response = await fetch(url)
	const superHeroes = await response.json()

	console.log(superHeroes)
}

getData(
	"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
)
