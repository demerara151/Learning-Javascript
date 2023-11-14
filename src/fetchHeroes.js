// simple fetch function with async-await in typescript

class Heroes {
    squadName
    homeTown
    formed
    secretBase
    active
    members
}

class Member {
    name
    age
    secretIdentity
    powers
}

/**
 * Fetch json data from superheroes.json
 * @param url target URL
 */
const getHeroes = async (url) => {
    const response = await fetch(url)
    if (response.status !== 200) {
        console.log("Fetch failed")
    }
    const superHeroes = await response.json()
    console.log(superHeroes.members[0].powers)
}

getHeroes(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
)

// all scripts from here will be run whether getHero() is executed or not

console.log("I don't know whether getHero is executed or not.")
