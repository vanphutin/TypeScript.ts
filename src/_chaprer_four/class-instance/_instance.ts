// class hero
class Hero {
  _id: number;
  name: string;
  hp: number;
  type: string;
  gender: boolean;

  constructor(
    _id: number,
    name: string,
    hp: number,
    type: string,
    gender: boolean
  ) {
    this._id = _id;
    this.name = name;
    this.hp = hp;
    this.gender = gender;
    this.type = type;
  }

  // display person
  displayPerson() {
    return `name : ${this.name} - hp : ${this.hp} - type : ${this.type} - gender : ${this.gender}`;
  }
}

// instance (create new a hero specifically )

let wukoong = new Hero(1, "Ngộ Không", 1000, "Sát Thủ", true);
let zip = new Hero(2, "Zip", 2000, "Trợ Thủ", true);
let sailing = new Hero(3, "Điêu Thuyền", 800, "Sát Thủ", false);

console.log(wukoong.displayPerson());
console.log(zip.displayPerson());
