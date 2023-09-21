// 最初の文字だけ大文字にして残りを全て小文字にして出力
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"]

const capitalization = word =>
  word[0].toUpperCase() + word.substring(1).toLowerCase()

cities.forEach(city => console.log(capitalization(city)))

// If you want to create new array that contains new string, use map method instead
const newCities = cities.map(city => capitalization(city))
console.log(newCities)
