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
var KhoaHoc = /** @class */ (function () {
    function KhoaHoc(_id, _name, _price) {
        // Kiểm tra nếu _id là số, nếu không thì gán giá trị ngẫu nhiên
        this._id =
            typeof _id === "number" || typeof _id === "undefined"
                ? _id
                : Math.floor(Math.random() * 100);
        this._name = _name;
        this._price = _price;
    }
    //to string
    KhoaHoc.prototype.toString = function () {
        return "_id : ".concat(this._id, ", name : ").concat(this._name, ", price : ").concat(this._price);
    };
    //getter - setter
    KhoaHoc.prototype.getId = function () {
        return this._id;
    };
    KhoaHoc.prototype.setId = function (_id) {
        return (this._id = _id);
    };
    KhoaHoc.prototype.getName = function () {
        return this._name;
    };
    KhoaHoc.prototype.setName = function (_name) {
        return (this._name = _name);
    };
    KhoaHoc.prototype.getPrice = function () {
        return this._price;
    };
    KhoaHoc.prototype.setPrice = function (_price) {
        return (this._price = _price);
    };
    return KhoaHoc;
}());
var KhoaHocUdemy = /** @class */ (function (_super) {
    __extends(KhoaHocUdemy, _super);
    function KhoaHocUdemy(_id, _name, _price, _rating) {
        var _this = _super.call(this, _id, _name, _price) || this;
        _this._rating = _rating;
        return _this;
    }
    // @Override
    KhoaHocUdemy.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", rating : ").concat(this._rating);
    };
    //getter - setter
    KhoaHocUdemy.prototype.getRating = function () {
        return this._rating;
    };
    KhoaHocUdemy.prototype.setRating = function (_rating) {
        return (this._rating = _rating);
    };
    return KhoaHocUdemy;
}(KhoaHoc));
var KhoaHocUnica = /** @class */ (function (_super) {
    __extends(KhoaHocUnica, _super);
    function KhoaHocUnica(_id, _name, _price, _soLuongBaiGiang) {
        var _this = _super.call(this, _id, _name, _price) || this;
        _this._soLuongBaiGiang = _soLuongBaiGiang;
        return _this;
    }
    // @Override
    KhoaHocUnica.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", soLuongBaiGiang : ").concat(this._soLuongBaiGiang);
    };
    //getter - setter
    KhoaHocUnica.prototype.getSoLuongBaiGiang = function () {
        return this._soLuongBaiGiang;
    };
    KhoaHocUnica.prototype.setSoLuongBaiGiang = function (_soLuongBaiGiang) {
        return (this._soLuongBaiGiang = _soLuongBaiGiang);
    };
    return KhoaHocUnica;
}(KhoaHoc));
// Khởi tạo đối tượng
var khoaHocTypeScript = new KhoaHocUdemy("random _id", "Khoa hoc TypeScript ", 200.0, "GOOD");
var khoaHocDayLamGiau = new KhoaHocUnica("_", // Sử dụng as any để bỏ qua lỗi TypeScript
"Khoa hoc day lam giau ", 90.9, 20.0);
// In ra thông tin
console.log(khoaHocTypeScript.toString());
console.log(khoaHocDayLamGiau.toString());
