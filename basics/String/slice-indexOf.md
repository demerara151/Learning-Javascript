## 問題３ [MAN: Manchester Piccadilly]のように出力
```javascript
stations = [
  'MAN675847583748sjt567654;Manchester Piccadilly',
  'GNF576746573fhdg4737dh4;Greenfield',
  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
  'SYB4f65hf75f736463;Stalybridge',
  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
]

for (const i of stations) {
  const code = i.slice(0, 2)
  const num = i.indexOf(";")
  const sName = i.slice(num + 1)
  console.log(`${code}: ${sName}`)
}
```

### ポイント
`indexOf()`で検索したセミコロンは、それより後ろの文字列を抜き出す際に、
セミコロンも含まれてしまう(該当するindexの位置にセミコロンがあるため)  
なので、セミコロンより後ろだけを抜き出したい場合、そのindexに1を足せばいい
