// class hero
var Hero = /** @class */ (function () {
    function Hero(_id, name, hp, type, gender) {
        this._id = _id;
        this.name = name;
        this.hp = hp;
        this.gender = gender;
        this.type = type;
    }
    // display person
    Hero.prototype.displayPerson = function () {
        return "name : ".concat(this.name, " - hp : ").concat(this.hp, " - type : ").concat(this.type, " - gender : ").concat(this.gender);
    };
    return Hero;
}());
// instance (create new a hero specifically )
var wukoong = new Hero(1, "Ngộ Không", 1000, "Sát Thủ", true);
var zip = new Hero(2, "Zip", 2000, "Trợ Thủ", true);
var sailing = new Hero(3, "Điêu Thuyền", 800, "Sát Thủ", false);
console.log(wukoong.displayPerson());
console.log(zip.displayPerson());
