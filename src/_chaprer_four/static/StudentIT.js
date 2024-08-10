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
var Student = /** @class */ (function () {
    function Student(firstname, lastname, _id, age, gender) {
        this._id = _id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.age = age;
    }
    Student.prototype.toString = function () {
        return "ID: ".concat(this._id, ", Name: ").concat(this.firstname, " ").concat(this.lastname, ", Age: ").concat(this.age, ", Gender: ").concat(this.gender ? "Male" : "Female");
    };
    return Student;
}());
// InformationTechnologyStudent.js
var InformationTechnologyStudent = /** @class */ (function (_super) {
    __extends(InformationTechnologyStudent, _super);
    function InformationTechnologyStudent(_id, firstname, lastname, age, gender, java, html, css) {
        var _this = _super.call(this, firstname, lastname, _id, age, gender) || this;
        _this.html = html;
        _this.css = css;
        _this.java = java;
        return _this;
    }
    InformationTechnologyStudent.prototype.getDiemTrungBinh = function () {
        return (this.java * 2 + this.html + this.css) / 4;
    };
    InformationTechnologyStudent.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Java: ").concat(this.java, ", HTML: ").concat(this.html, ", CSS: ").concat(this.css, ", Average Score: ").concat(this.getDiemTrungBinh());
    };
    return InformationTechnologyStudent;
}(Student));
// main.js
var SinhVienA = new InformationTechnologyStudent(1, "Nguyen Thanh", "Tung", 21, true, 10, 10, 10);
console.log(SinhVienA.toString());
console.log("Điểm trung bình : ", SinhVienA.getDiemTrungBinh());
