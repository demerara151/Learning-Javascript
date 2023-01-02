const obj = {
  a: 7,

  get b() {
    return this.a + 1;
  },

  set c(x) {
    this.a = x / 2;
  },
};
/*
objオブジェクトのプロパティは以下の通り。

    obj.a — 数値（今回はこれが特定のプロパティ値にあたる）
    obj.b — obj.a + 1 を返すゲッター
    obj.c — obj.c に設定される値を 1/2 にしたものを obj.a に設定するセッター
*/

console.log(obj.a); // 7
console.log(obj.b); // 8

obj.c = 50; // obj.c(50)というメソッドを実行しているのと同じ。ただし、あくまでプロパティなのでobj.c()というメソッドは実行できない。
// obj.c(50) TypeError: obj.c is not a function

console.log(obj.a); // 25
console.log(obj.b); // 26
