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
// Lớp trừu tượng SmartPhoneAbstract
var SmartPhoneAbstract = /** @class */ (function () {
    function SmartPhoneAbstract(price, VAT) {
        this._price = price;
        this._VAT = VAT;
    }
    return SmartPhoneAbstract;
}());
// Lớp cha Smartphone
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(_brand, _model, _price, _batteryLife, _VAT) {
        var _this = _super.call(this, _price, _VAT) || this;
        _this._brand = _brand;
        _this._model = _model;
        _this._batteryLife = _batteryLife;
        return _this;
    }
    // Định nghĩa phương thức trừu tượng
    Smartphone.prototype.tinhGiaThueVAT = function () {
        return this._price * (1 + this._VAT / 100);
    };
    // Phương thức toString() hiển thị thông tin cơ bản
    Smartphone.prototype.toString = function () {
        return "Brand: ".concat(this._brand, ", Model: ").concat(this._model, ", Price: ").concat(this._price, ", Battery Life: ").concat(this._batteryLife, " hours");
    };
    // Getter và Setter
    Smartphone.prototype.getBrand = function () {
        return this._brand;
    };
    Smartphone.prototype.setBrand = function (_brand) {
        this._brand = _brand;
    };
    Smartphone.prototype.getModel = function () {
        return this._model;
    };
    Smartphone.prototype.setModel = function (_model) {
        this._model = _model;
    };
    Smartphone.prototype.getPrice = function () {
        return this._price;
    };
    Smartphone.prototype.setPrice = function (_price) {
        this._price = _price;
    };
    Smartphone.prototype.getBatteryLife = function () {
        return this._batteryLife;
    };
    Smartphone.prototype.setBatteryLife = function (_batteryLife) {
        this._batteryLife = _batteryLife;
    };
    return Smartphone;
}(SmartPhoneAbstract));
// Lớp con Iphone
var Iphone = /** @class */ (function (_super) {
    __extends(Iphone, _super);
    function Iphone(_model, _price, _batteryLife, _iosVersion, _VAT) {
        var _this = _super.call(this, "Iphone", _model, _price, _batteryLife, _VAT) || this;
        _this._iosVersion = _iosVersion;
        return _this;
    }
    // Phương thức toString() hiển thị thông tin chi tiết của Iphone
    Iphone.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", iOS Version: ").concat(this._iosVersion);
    };
    // Getter và Setter
    Iphone.prototype.getIosVersion = function () {
        return this._iosVersion;
    };
    Iphone.prototype.setIosVersion = function (_iosVersion) {
        this._iosVersion = _iosVersion;
    };
    return Iphone;
}(Smartphone));
// Lớp con Samsung
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung(_model, _price, _batteryLife, _androidVersion, _VAT) {
        var _this = _super.call(this, "Samsung", _model, _price, _batteryLife, _VAT) || this;
        _this._androidVersion = _androidVersion;
        return _this;
    }
    // Phương thức toString() hiển thị thông tin chi tiết của Samsung
    Samsung.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Android Version: ").concat(this._androidVersion);
    };
    // Getter và Setter
    Samsung.prototype.getAndroidVersion = function () {
        return this._androidVersion;
    };
    Samsung.prototype.setAndroidVersion = function (_androidVersion) {
        this._androidVersion = _androidVersion;
    };
    return Samsung;
}(Smartphone));
// Ví dụ sử dụng
var iphone12 = new Iphone("iPhone 12", 999, 20, "iOS 14", 10);
var samsungGalaxyS21 = new Samsung("Galaxy S21", 799, 24, "Android 11", 8);
console.log(iphone12.toString());
console.log(iphone12);
console.log(samsungGalaxyS21.toString());
console.log(samsungGalaxyS21);
