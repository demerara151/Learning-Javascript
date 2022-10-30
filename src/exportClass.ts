export class Monster {
  name: string;
  HP: number;
  weak: string;
  items: string[];

  constructor(name: string, HP: number, weak: string, items: string[]) {
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
