// Student.js
class StudentIT {
  public _id: number; // default is public
  firstname: string; // default is public
  private lastname: string;
  private age: number;
  protected gender: boolean;

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
  getAge(): number {
    return this.age;
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
// console.log(SinhVienA.toString());
console.log("Điểm trung bình : ", SinhVienB.getDiemTrungBinh());
console.log("Age : ", SinhVienB.getAge());

//Error
console.error("Last name : ", SinhVienB.lastname); //Property 'lastname' is private and only accessible within class 'StudentIT'.ts(2341)

console.error("Gender: ", SinhVienB.gender); //Property 'gender' is protected and only accessible within class 'StudentIT' and its subclasses.ts(2445)
