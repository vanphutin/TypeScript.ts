// Student.js
class StudentIT {
  _id: number; // use static
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
    this._id = _id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.age = age;
  }

  toString(): string {
    return `ID: ${this._id}, Name: ${this.firstname} ${this.lastname}, Age: ${
      this.age
    }, Gender: ${this.gender ? "Male" : "Female"}`;
  }
}

// InformationTechnologyStudent.js

class InformationTechnologyStudentit extends StudentIT {
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

  getDiemTrungBinh(): number {
    return (this.java * 2 + this.html + this.css) / 4;
  }

  toString(): string {
    return `${super.toString()}, Java: ${this.java}, HTML: ${this.html}, CSS: ${
      this.css
    }, Average Score: ${this.getDiemTrungBinh()}`;
  }
}

//use static
class SinhVienKinhTe extends StudentIT {
  static NguyenLiKeToan: number;
  static KinhTeViMo: number;

  toString(): string {
    return `Nguyen Li Ke Toan = ${
      (SinhVienKinhTe.NguyenLiKeToan, SinhVienKinhTe.KinhTeViMo)
    }`;
  }
}

// main.js

let SinhVienB = new InformationTechnologyStudentit(
  1,
  "Nguyen Thanh",
  "Tung",
  21,
  true,
  10,
  10,
  10
);
console.log(SinhVienA.toString());
console.log("Điểm trung bình : ", SinhVienA.getDiemTrungBinh());
