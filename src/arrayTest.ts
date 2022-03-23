let total = 0

const products = [
	"パンツ:6.99",
	"靴下:5.99",
	"T シャツ:14.99",
	"ズボン:31.99",
	"靴:23.99",
]

products.forEach(item => {
	const product = item.split(":")

	const name = product[0]
	const price = Number(product[1])

	total += price

	const itemText = `${name} - \$${price}`

	console.log(itemText)
})

console.log(`Total: \$${total.toFixed(2)}`)
