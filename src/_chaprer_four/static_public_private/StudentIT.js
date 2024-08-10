var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Student.js
var StudentIT = /** @class */ (function () {
    function StudentIT(firstname, lastname, _id, age, gender) {
        this._id = _id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.age = age;
    }
    StudentIT.prototype.getAge = function () {
        return this.age;
    };
    StudentIT.prototype.toString = function () {
        return "ID: ".concat(this._id, ", Name: ").concat(this.firstname, " ").concat(this.lastname, ", Age: ").concat(this.age, ", Gender: ").concat(this.gender ? "Male" : "Female");
    };
    return StudentIT;
}());
// InformationTechnologyStudent.js
var InformationTechnologyStudentit = /** @class */ (function (_super) {
    __extends(InformationTechnologyStudentit, _super);
    function InformationTechnologyStudentit(_id, firstname, lastname, age, gender, java, html, css) {
        var _this = _super.call(this, firstname, lastname, _id, age, gender) || this;
        _this.html = html;
        _this.css = css;
        _this.java = java;
        return _this;
    }
    InformationTechnologyStudentit.prototype.getDiemTrungBinh = function () {
        return (this.java * 2 + this.html + this.css) / 4;
    };
    InformationTechnologyStudentit.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Java: ").concat(this.java, ", HTML: ").concat(this.html, ", CSS: ").concat(this.css, ", Average Score: ").concat(this.getDiemTrungBinh());
    };
    return InformationTechnologyStudentit;
}(StudentIT));
//use static
var SinhVienKinhTe = /** @class */ (function (_super) {
    __extends(SinhVienKinhTe, _super);
    function SinhVienKinhTe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SinhVienKinhTe.prototype.toString = function () {
        return "Nguyen Li Ke Toan = ".concat((SinhVienKinhTe.NguyenLiKeToan, SinhVienKinhTe.KinhTeViMo));
    };
    return SinhVienKinhTe;
}(StudentIT));
// main.js
var SinhVienB = new InformationTechnologyStudentit(1, "Nguyen Thanh", "Tung", 21, true, 10, 10, 10);
// console.log(SinhVienA.toString());
console.log("Điểm trung bình : ", SinhVienB.getDiemTrungBinh());
console.log("Age : ", SinhVienB.getAge());
//Error
console.log("Last name : ", SinhVienB.lastname); //Property 'lastname' is private and only accessible within class 'StudentIT'.ts(2341)
console.log("Gender: ", SinhVienB.gender); //Property 'gender' is protected and only accessible within class 'StudentIT' and its subclasses.ts(2445)
