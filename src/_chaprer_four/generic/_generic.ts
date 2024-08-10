function log<T>(a: T): T {
  return a;
}

console.log(log<String>("Van Phu Tin"));

// in oop
class Book<T, Z> {
  private _id: T;
  private _name: Z;

  constructor(_id: T, _name: Z) {
    this._id = _id;
    this._name = _name;
  }

  toString(): string {
    return `id : ${this._id} - name : ${this._name}`;
  }
}

let Book_Java = new Book<string, string>(
  <string>"dfsds3-csdc-3r23",
  <string>"Java Book"
);
let Book_C = new Book<number, string>(<number>102, <string>"C++ Book");
