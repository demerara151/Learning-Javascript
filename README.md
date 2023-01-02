# Learning Javascript

**Personal reference of Javascript using deno**

## Requirements

- deno ^1.29.1
- vscode 1.7.2
- deno official extension for vscode

## Usage

```powershell
deno run src/main.js
```

## loop an array

`forEach` function can be used for array objects

## Understanding scope

- global scope: ファイル内のどこからでも変数や関数を参照できる
- local scope: ブロック内で定義された変数はそのブロックの内部でしか参照できない

## Object

- オブジェクトとは、個体情報や個体の持つ機能などを体系的にまとめた存在
- 個体情報にあたるものをプロパティ、個体の持つ機能をメソッドと呼ぶ
- それらのデータを `{}` で囲むとオブジェクトとなる

## fetch url with async-await function

ES6以降の `async / await` と `fetch API`
を利用した現在主流のデータリクエスト方法

- XHRとの大きな違い

  - XHRの場合は、リクエストが通らなかったらその時点でプログラムは止まる。それ以降のプログラムは一切実行されない。
  - しかし、非同期でコードを書けば、リクエストが通らずデータが返ってこなかったとしても、それ以降のプログラムは問題なく実行される。データが返ってこなかった部分だけが何も表示されない状態になるだけ。

- `response.json()` -> response object becomes JSON
- `response.text()` -> response object becomes text
- `response.blob()` -> for binary data like picture

## JSONの書き方

1. データ全体を波カッコ`{}`で囲う
2. データは `key` と `value` のペア。これはオブジェクトと一緒
3. ただし、`JSON` の場合は `value` だけでなく `key`
   も必ずダブルクォーテーションで囲む。`"key":"value"`
4. それぞれのデータはカンマで区切る
5. 配列やオブジェクトの値を取り出す方法と同じ方法で値を取り出せる

## getter and setter

- ゲッター：特定のプロパティ値を取得するためのメソッド
- セッター：特定のプロパティ値を設定するためのメソッド

- どちらもメソッドなんだけど、オブジェクトのプロパティとして機能する。そのため、メソッドとして呼び出すことはできないし、代入によってゲッターの値を変更することはできない。セッターの値は引数を取るので代入で変更することはできる（ただし、ゲッターの内容によっては代入できない）

- これらは動的にオブジェクトのプロパティを変更したい時に便利。他の要素や条件によってリアルタイムで値を変更できる

## Callbacks

特定の関数には、引数に変数ではなく関数を利用するものがある。つまり関数で関数を呼び出すということ
