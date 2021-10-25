request.open("GET", requestURL)
request.responseType = "text" // 今度は文字列を受け取ります！
request.send()

request.onload = () => {
	const superHeroesText = request.response // 返ってきた結果から文字列を受け取る
	const superHeroes = JSON.parse(superHeroesText) // それをオブジェクトに変換する
	populateHeader(superHeroes)
	showHeroes(superHeroes)
}
