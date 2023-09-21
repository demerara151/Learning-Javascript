// simple fetch function with async-await in typescript

interface Heroes {
  squadName: string
  homeTown: string
  formed: number
  secretBase: string
  active: boolean
  members: Member[]
}

interface Member {
  name: string
  age: number
  secretIdentity: string
  powers: string[]
}

/**
 * Fetch json data from superheroes.json
 * @param url target URL
 */
const getHero = async (url: string): Promise<void> => {
  const response = await fetch(url)
  if (response.status !== 200) {
    console.log("Fetch failed")
  }
  const superHeroes: Heroes = await response.json()
  console.log(superHeroes.members[0].powers)
}

getHero(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
)

// all scripts from here will be run whether getHero() is executed or not

console.log("I don't know whether getHero is executed or not.")
