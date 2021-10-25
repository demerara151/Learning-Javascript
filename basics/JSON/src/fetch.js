// ES6以降のasyn/awaitとfetch APIを利用した2020現在主流の方法
const header = document.querySelector("header")
const section = document.querySelector("section")

const url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

// 非同期関数を定義
async function getData() {
	// fetch()でurlの情報を受け取りたいとサーバーにリクエストする
	const response = await fetch(url)
	// サーバーからデータが帰ってきたら、その形式を.json()でJSONに変更する
	const superHeroes = await response.json()

	// あとは一緒で最後にこの関数を呼び出すだけ
	populateHeader(superHeroes)
	showHeroes(superHeroes)
}

const populateHeader = jsonObj => {
	const myH1 = document.createElement("h1")
	myH1.textContent = jsonObj["squadName"]
	header.appendChild(myH1)

	const myPara = document.createElement("p")
	myPara.textContent = `Hometown: ${jsonObj["homeTown"]} // Formed: ${jsonObj["formed"]}`
	header.appendChild(myPara)
}

const showHeroes = jsonObj => {
	const myArticle = document.createElement("article")
	const myH2 = document.createElement("h2")
	const myPara1 = document.createElement("p")
	const myPara2 = document.createElement("p")
	const myPara3 = document.createElement("p")
	const myList = document.createElement("ul")

	jsonObj["members"].forEach(member => {
		myH2.textContent = member.name
		myPara1.textContent = `Secret identity: ${member.secretIdentity}`
		myPara2.textContent = `Age: ${member.age}`
		myPara3.textContent = "Superpowers:"

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

// 最後に上で定義した非同期関数を呼び出す
getData()

/**
 * XHRとの大きな違い
 * XHRの場合は、リクエストが通らなかったらその時点でプログラムは止まる。それ以降のプログラムは一切実行されない。
 * しかし、非同期でコードを書けば、リクエストが通らずデータが返ってこなかったとしても、それ以降のプログラムは問題なく実行される。データが返ってこなかった部分だけが何も表示されない状態になるだけ。
 *
 * ちなみに、fetch()で受け取るデータをテキストにしたい場合は、response.text()で出来る。JSON.parse()やJSON.stringfy()はもう使わない。
 * 画像の場合は、blobという形式にする必要があるが、これもresponse.blob()で一発で変換できる。
 */
