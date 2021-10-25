## 問題２
```javascript
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']

const admitted = document.querySelector('.admitted')
const refused = document.querySelector('.refused')
admitted.textContent = 'Admit: '
refused.textContent = 'Refuse: '

for (const i of people) {
  if (i === 'Phil' || i === 'Lola') {
    refused.textContent += `${i}, `
  } else {
    admitted.textContent += `${i}, `
  }
}

refused.textContent = `${refused.textContent.slice(0,refused.textContent.length-2)}.`
admitted.textContent = `${admitted.textContent.slice(0,admitted.textContent.length-2)}.`
```
>参照MDN　[ループ](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Looping_code)
