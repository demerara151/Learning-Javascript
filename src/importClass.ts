import { Monster } from "./exportClass.ts";

const fireGolem = new Monster("ファイヤーゴーレム", 8752, "水属性", [
  "ファイヤーアーム",
  "2800ギル",
  "炎のオーブ",
  "魔術書：フレア",
  "破滅の欠片",
]);

fireGolem.showStatus();

const darkLord = new Monster("闇の守護者", 9999, "光属性", [
  "闇のアミュレット",
  "3812ギル",
  "ダークケープ",
  "破滅の欠片",
  "漆黒の盾",
]);

darkLord.showStatus();

const random = (x: number): number => Math.floor(Math.random() * x);

console.log(
  `${fireGolem.name}から「${fireGolem.items[random(fireGolem.items.length)]}」を盗んだ`,
);

console.log(
  `${darkLord.name}から「${darkLord.items[random(darkLord.items.length)]}」を盗んだ`,
);

/*
スクリプトファイルのインポート及びエクスポート
別の.jsファイルからコードの内容を読み込みたい場合は、ファイルの先頭に「import { 名前 } from "./ファイル名"と書きます。クラスを読み込む場合はクラス名、関数なら関数名を書きます。この名前はこちらのファイルで使いたい好きな名前に変更することもできます。「名前 as 好きな名前」という風に書けばこちらのファイルで指定した名前でクラスや関数を呼び出して使うことができます。その他にも様々な呼び出し方がありますが、とりあえず最初の「import from」だけ覚えておけば問題ありません。
*/
