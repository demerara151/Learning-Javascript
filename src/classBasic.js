// Example 1: クラスの定義方法
// ===============================================================

// ベースとなるクラスは「class」というキーワードを利用して定義できます。
class Polygon {
  name;
  height;
  width;

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }

  sayHistory() {
    console.log(
      `"Polygon" is derived from the Greek polus (many) and gonia (angle).`,
    );
  }
}

const p = new Polygon(300, 400);
p.sayName();
console.log(`The width of this polygon is ${p.width}`);

// Example 2: 既存のクラスの継承
// ===============================================================

//クラスは別のクラスを継承できるだけでなく、別のオブジェクトも継承することができます。継承するものはコンストラクターである必要があります。
// では実際にPolygonを継承して、新しいSquareというクラスを作ってみましょう。
class Square extends Polygon {
  constructor(length) {
    // 「super」というキーワードは親のメソッドにアクセスし、呼び出すことができるスーパーコンストラクターを生成します。
    // 「Length」というパラメータで、Polygonの幅と高さを規定した親クラスのコンストラクタを呼び出します。
    super(length, length);
    // つまりこの「Length」はクラス"Polygon"の「width」と「height」を指すということです。これは変数なので好きな名前を付けれます。
    // 継承されたクラスでは「this」を使う前にsuper()を使う必要があります。これを省略すると参照エラーとなります。
    this.name = "Square";
  }

  // ゲッター/セッターメソッドはES5と同様にクラスでも使えます。
  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}

const s = new Square(5);

s.sayName();
console.log(s);
console.log(`The area of this square is ${s.area}`);

// Example 3: 親クラスのメソッドをサブクラス化する
// ===============================================================

class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }
  // sayName() は同名のスーパークラスのメソッドを上書きするサブクラスのメソッドです。
  sayName() {
    console.log(`Sup! My name is, ${this.name}.`);
    super.sayHistory();
  }
}

const r = new Rectangle(50, 60);
r.sayName();

// Example 4: 静的なメソッドを定義する
// ===============================================================

// クラスはstatic（静的な）メソッドを定義できる。これはインスタンス化することなくクラス自身でアクセスすることができる。
class Triple {
  // 'static'というキーワードをメソッド名の前に付けることで、インスタンスではなくクラスが持つメソッドとして定義できる。逆にインスタンス側はこのメソッドを呼び出せない。
  static triple(n) {
    n = n || 1;
    return n * 3;
  }
}

// 親のクラスの持つstaticメソッドも継承できるし、それを使って更に継承側のクラスのstaticメソッドも定義できる。
class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple(6)); // 3 * 6 = 18
console.log(BiggerTriple.triple(3)); // 3 * 3 = 9 -> 9 * 9 = 81
// const tp = new Triple()
// console.log(tp.triple()) -> tp.triple is not a function

// Example 5: 組み込みオブジェクトの「Date」を継承
// ===============================================================
class MyDate extends Date {
  constructor() {
    super(); // 全てのプロパティを引き継ぐということ
  }

  getFormattedDate() {
    // 本来は不可能なユーザー定義のメソッドを作れる
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

const aDate = new MyDate();
console.log(aDate.getTime()); // 1/1000秒単位で現在の時刻を取得
console.log(aDate.getFormattedDate()); // 日・月・年の順で今日の日付を取得
