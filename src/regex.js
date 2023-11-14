const hello = "Hello world"
const helloRegex = /world/
helloRegex.test(hello)  // test() is a regexp method
// If specified word is in the string, returns boolean.

const message = "Twinkle, twinkle little star."
const myReg = /twinkle/ig //`i` means ignore case, `g` means groups
const result = message.match(myReg) // match() is a string method
// If the word matches, returns word.
// console.log(result)

// Any characters matches in the square bracket.
const caution = "Breware of the bugs in the big bag."
const regGroup = /b[aiu]g/ig
console.log(caution.match(regGroup))

// Range
const aToZ = /[a-z]/ig  // a to z
const zeroToNine = /[0-9]/ig // 0 to 9
const hToS = /[h-s]/ig // h to s

// Negate characters (You don't want to match)
const negate = /[^a-z]/ig // not matches any characters between a to z

// Single or more matches
const mississippi = "Mississssippis"
const singleOrMore = /s+/g
console.log(mississippi.match(singleOrMore))

// Zero or more matches
const goal = "gooooooooooal"
const gitGut = "git gut"
const zeroOrMore = /go*/g
console.log(goal.match(zeroOrMore))
console.log(gitGut.match(zeroOrMore))

// Playground
const textMessage = "Brown fox jumps off the wall."
const myRegExp = /\w+\.$/g
console.log(textMessage.match(myRegExp))

// teratail
const japaneseSentence = "2023.08.27\xa0新潟 3 2歳新馬 ダ1200 1:14.1 良 14頭\xa014番\xa04人 酒井学 55.0 4-4\xa0(38.2)\xa0464(0) セイウンサニー(0.4)"
const japaneseRegExp = /\d{2}番/g
console.log(japaneseSentence.match(japaneseRegExp));
