## 問題２ 最初の文字だけ大文字にして残りを全て小文字にして出力
```javascript
const cities = [
  'lonDon',
  'ManCHESTer',
  'BiRmiNGHAM',
  'liVERpoOL'
]

// for...ofループで配列内の全ての値にアクセス
for (const i of cities) {
  const low = i.toLowerCase() //配列内の全ての文字列を小文字に
  const up = low.slice(0, 1) //各文字列の最初の1文字を抜き出す
  //小文字にした文字列の最初の値を大文字にしたものと入れ替える
  const result = low.replace(up, up.toUpperCase())
  console.log(result)
} //London Manchester Birmingham Liverpool
```

最終的な値が配列ではなくなっている点に注目  
`Array.map()`を利用して同じことをしようとしても、
配列に対して`toUpperCase()`が使えないというエラーが出る。  
`slice()`で切り取った文字列が配列のそれぞれの値(0, 1, 2, 3)として
出力されるため。  
対処としては、`slice()`で切り取った文字を`for..of`ループで回すことが
考えられる。
