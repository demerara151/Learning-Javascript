const user = {
  name: "Ken", // nameを「key（キー）」と呼び、"Ken"を「value（バリュー）」と呼ぶ
  age: 30, // 情報を呼び出すための鍵を左側に書き、コロン「:」を置いて右側に値を書く
  location: "sapporo", // それぞれのプロパティはコンマ「,」で区切る
  blogs: ["無料ゲーム情報局", "0から始めるプログラミング講座"], // 配列も使える
  isMature: true, // 真偽値だって使える

  // 同じように関数も定義できる。オブジェクトではこれを「オブジェクトのメソッド」と呼ぶ
  loggedIn: function () {
    console.log("ログインに成功しました");
  },

  // 関数の場合、コロンと function というキーワードは省略できる
  loggedOut() {
    console.log("ログアウトしました");
  },

  showBlogs() {
    /* オブジェクト内のプロパティをメソッド内で呼び出すことはできない
		console.log(blogs) -> Uncaught Error: blogs is not defined
		しかし、this（ディス）というキーワードを使うことによって呼び出せるようになる
		this とはこのオブジェクトそのもの、つまり user を指す
		*/
    this.blogs.forEach((blog: string) => console.log(blog));
  },
};

// プロパティの出力
console.log(user.name); // dot notation
console.log(user["blogs"]); // bracket notation: same as user.blogs

console.log(user.blogs[0]); // retrieve specific value by specifying index

// オブジェクトのプロパティの値を変更したい場合は、変数と同じように再代入することで変更できる
console.log(user.age); // 30
user.age = 35;
console.log(user.age); // 35

// メソッドを呼び出す場合も同じ
user.loggedIn();
user.loggedOut();
user.showBlogs();
