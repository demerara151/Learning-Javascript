const url =
	"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
const res = await fetch(url)
const data = await res.json()
console.log(data["squadName"])
