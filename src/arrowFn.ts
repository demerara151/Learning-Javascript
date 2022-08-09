// アロー関数（Arrow Function）とは、関数の簡略化した書き方

// 通常の関数
function _fn(a: number, b: number): number {
  const result = a * b;
  return result;
}

// アロー関数: () => {}
const _arrowFn = (a: number, b: number): number => {
  const result = a * b;
  return result;
};

// 実行したい内容が `a * b` のように１つだけの場合、`{}` と `return` は省略できる
const _multiply = (a: number, b: number): number => a * b;

// 引数がない場合は、()だけを書く
const myName = "山田太郎";
const _nameLength = () => myName.length;

// 非同期関数の定義。この場合、`return` は省略できない
const _fetchData = async (url: string): Promise<boolean | null> => {
  const res = await fetch(url);
  return res.ok;
};
