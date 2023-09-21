// Phil and Lola should be refused
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce"
]

let admitted = "Admit: "
let refused = "Refuse: "

people.forEach(person => {
  if (person === "Phil" || person === "Lola") {
    refused += `${person}, `
  } else {
    admitted += `${person}, `
  }
})

// Add dot to the end of the last name
// Using slice method to extract names til the end (except last ", ")
console.log(`${refused.slice(0, refused.length - 2)}.`)
console.log(`${admitted.slice(0, admitted.length - 2)}.`)
