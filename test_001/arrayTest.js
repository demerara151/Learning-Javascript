let total = 0

const products = [ "パンツ:6.99", "靴下:5.99", "T シャツ:14.99", "ズボン:31.99", "靴:23.99" ]

// products.map(x => {
// 	const val = x.split(":")
// 	const name = val[0]
// 	price = Number(val[1])
// 	total += price
// 	let itemText = `${name}-\$${price}`
// 	console.log(itemText)
// })

products.forEach(vals => {
	const val = vals.split(":")
	const name = val[0]
	const price = Number(val[1])
	total += price
	let itemText = `${name}- \$${price}`
	console.log(itemText)
})

// for (const i of products) {
// 	const val = i.split(":")
// 	const name = val[0]
// 	price = Number(val[1])
// 	total += price
// 	let itemText = `${name}―\$${price}`
// 	console.log(itemText)
// }

console.log(`Total: \$${total.toFixed(2)}`)
