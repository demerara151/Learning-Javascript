// Christmas に関連する文章のみを抜き出す
const messages = [
	"Happy Birthday!",
	"Merry Christmas my love",
	"A happy Christmas to all the family",
	"You're all I want for Christmas",
	"Get well soon",
]

messages
	.filter(sentence => sentence.includes("Christmas"))
	.forEach(message => console.log(message))
