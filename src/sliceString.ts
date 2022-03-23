// [MAN: Manchester Piccadilly]のように出力
const stations = [
	"MAN675847583748sjt567654;Manchester Piccadilly",
	"GNF576746573fhdg4737dh4;Greenfield",
	"LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
	"SYB4f65hf75f736463;Stalybridge",
	"HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
]

const formatString = (str: string) => {
	const code = str.slice(0, 3)
	const description = str.split(";")[1]
	return `${code}: ${description}`
}

const newNames = stations.map(station => formatString(station))
console.log(newNames)
