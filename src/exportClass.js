export class Monster {
  name;
  HP;
  weak;
  items;

  constructor(name, HP, weak, items) {
    this.name = name;
    this.HP = HP;
    this.weak = weak;
    this.items = items;
  }

  showStatus() {
    console.log(`モンスター名：${this.name}
		残りHP：${this.HP}
		弱点：${this.weak}`);
  }
}

// クラスをエクスポートしたい場合は、定義文の先頭に export と書き加えます
