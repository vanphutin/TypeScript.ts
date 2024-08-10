class KhoaHoc {
  private _id: number;
  private _name: string;
  private _price: number;

  constructor(_id: number, _name: string, _price: number) {
    this._id = _id;
    this._name = _name;
    this._price = _price;
  }

  //to string
  public toString(): string {
    return `_id : ${this._id}, name : ${this._name}, price : ${this._price}`;
  }

  //getter - setter
  public getId(): number {
    return this._id;
  }

  public getName() {
    return this._name;
  }
  public setName(_name: string): string {
    return (this._name = _name);
  }

  public getPrice(): number {
    return this._price;
  }
  public setPrice(_price: number): number {
    return (this._price = _price);
  }
}

class KhoaHocUdemy extends KhoaHoc {
  private _rating: string;

  constructor(_id: number, _name: string, _price: number, _rating: string) {
    super(_id, _name, _price);
    this._rating = _rating;
  }

  // @Override
  toString(): string {
    return `${super.toString()}, rating : ${this._rating}`;
  }

  //getter - setter
  public getRating(): string {
    return this._rating;
  }
  public setRating(_rating: string): string {
    return (this._rating = _rating);
  }
}

class KhoaHocUnica extends KhoaHoc {
  private _soLuongBaiGiang: number;

  constructor(
    _id: number,
    _name: string,
    _price: number,
    _soLuongBaiGiang: number
  ) {
    super(_id, _name, _price);
    this._soLuongBaiGiang = _soLuongBaiGiang;
  }

  // @Override
  toString(): string {
    return `${super.toString()}, rating : ${this._soLuongBaiGiang}`;
  }

  //getter - setter
  public getRating(): number {
    return this._soLuongBaiGiang;
  }
  public setRating(_soLuongBaiGiang: number): number {
    return (this._soLuongBaiGiang = _soLuongBaiGiang);
  }
}
let khoaHocTypeScript = new KhoaHocUdemy(
  1,
  "Khoa hoc typesccript ",
  200.0,
  "GOOD"
);
let khoaHocDayLamGiau = new KhoaHocUnica(
  1,
  "Khoa hoc day lam giau ",
  90.9,
  20.0
);

console.log(khoaHocTypeScript);
console.log(khoaHocDayLamGiau);
