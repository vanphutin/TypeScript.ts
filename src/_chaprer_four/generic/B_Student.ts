// Lớp trừu tượng SinhVieAbstract
abstract class SinhVieAbstract<T> {
  //use generic
  abstract tinhDiemTrungBinh(): T;
}

// Lớp Student.js
class B_Student extends SinhVieAbstract<number> {
  _id: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: boolean;

  constructor(
    firstname: string,
    lastname: string,
    _id: number,
    age: number,
    gender: boolean
  ) {
    super(); // Gọi hàm tạo của lớp cha
    this._id = _id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.age = age;
  }

  // Định nghĩa phương thức trừu tượng
  tinhDiemTrungBinh(): number {
    return 0; // Giá trị mặc định
  }

  toString(): string {
    return `ID: ${this._id}, Name: ${this.firstname} ${this.lastname}, Age: ${
      this.age
    }, Gender: ${this.gender ? "Male" : "Female"}`;
  }
}

// InformationTechnologyStudent.js
class B_InformationTechnologyStudent extends B_Student {
  java: number;
  html: number;
  css: number;

  constructor(
    _id: number,
    firstname: string,
    lastname: string,
    age: number,
    gender: boolean,
    java: number,
    html: number,
    css: number
  ) {
    super(firstname, lastname, _id, age, gender);
    this.html = html;
    this.css = css;
    this.java = java;
  }

  // Tính điểm trung bình
  tinhDiemTrungBinh(): number {
    return (this.java + this.html + this.css) / 3;
  }

  toString(): string {
    return `${super.toString()}, Java: ${this.java}, HTML: ${this.html}, CSS: ${
      this.css
    }, Average Score: ${this.tinhDiemTrungBinh().toFixed(2)}`;
  }
}

// main.js
let B_SinhVienA = new B_InformationTechnologyStudent(
  1,
  "Nguyen Thanh",
  "Tung",
  21,
  true,
  10,
  10,
  10
);
console.log(B_SinhVienA.toString());
