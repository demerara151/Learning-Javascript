// XHRを使ったJSONデータの取得と反映
const header = document.querySelector("header")
const section = document.querySelector("section")

// URLを定義
const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

// XHRを初期化
const request = new XMLHttpRequest()

// URLを"GET"で開く。GETはデータを読み込むだけですよという意味
request.open("GET", requestURL)

// 受け取るデータの型を指定。今回はJSONで受け取りたいので"json"と指定
request.responseType = "json"

// サーバーにリクエストを送ります
request.send()

// リクエストが承諾されたら、次の関数を実行します
request.onload = () => {
	// 受け取ったデータを新しい変数に代入します
	const superHeroes = request.response

	// その変数を実行したい関数に渡します
	populateHeader(superHeroes)
	showHeroes(superHeroes)
}

// 実行したい関数を定義
const populateHeader = jsonObj => {
	// jsonObjは受け取るJSONデータを指す引数
	const myH1 = document.createElement("h1")

	// オブジェクトのキー"squadName"の値を表示
	myH1.textContent = jsonObj["squadName"]
	header.appendChild(myH1)

	const myPara = document.createElement("p")
	myPara.textContent = `Hometown: ${jsonObj["homeTown"]} // Formed: ${jsonObj["formed"]}`
	header.appendChild(myPara)
}

// もう１つの実行したい関数を定義
const showHeroes = jsonObj => {
	const myArticle = document.createElement("article")
	const myH2 = document.createElement("h2")
	const myPara1 = document.createElement("p")
	const myPara2 = document.createElement("p")
	const myPara3 = document.createElement("p")
	const myList = document.createElement("ul")

	jsonObj["members"].forEach(member => {
		// キー"members"は配列で、その複数の値全てに対して次の処理を行う
		myH2.textContent = member.name
		myPara1.textContent = `Secret identity: ${member.secretIdentity}`
		myPara2.textContent = `Age: ${member.age}`
		myPara3.textContent = "Superpowers:"

		// 必殺技をリスト形式で表示する
		member.powers.forEach(superPower => {
			const listItem = document.createElement("li")
			listItem.textContent = superPower
			myList.appendChild(listItem)
		})

		myArticle.appendChild(myH2)
		myArticle.appendChild(myPara1)
		myArticle.appendChild(myPara2)
		myArticle.appendChild(myPara3)
		myArticle.appendChild(myList)

		section.appendChild(myArticle)
	})
}
