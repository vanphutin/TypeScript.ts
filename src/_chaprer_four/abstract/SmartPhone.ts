// Lớp trừu tượng SmartPhoneAbstract
abstract class SmartPhoneAbstract {
  protected _price: number;
  protected _VAT: number;

  constructor(price: number, VAT: number) {
    this._price = price;
    this._VAT = VAT;
  }

  // Phương thức trừu tượng
  abstract tinhGiaThueVAT(): number;
}

// Lớp cha Smartphone
class Smartphone extends SmartPhoneAbstract {
  private _brand: string;
  private _model: string;
  private _batteryLife: number; // Thời lượng pin

  constructor(
    _brand: string,
    _model: string,
    _price: number,
    _batteryLife: number,
    _VAT: number
  ) {
    super(_price, _VAT);
    this._brand = _brand;
    this._model = _model;
    this._batteryLife = _batteryLife;
  }

  // Định nghĩa phương thức trừu tượng
  public tinhGiaThueVAT(): number {
    return this._price * (1 + this._VAT / 100);
  }

  // Phương thức toString() hiển thị thông tin cơ bản
  public toString(): string {
    return `Brand: ${this._brand}, Model: ${this._model}, Price: ${this._price}, Battery Life: ${this._batteryLife} hours`;
  }

  // Getter và Setter
  public getBrand(): string {
    return this._brand;
  }

  public setBrand(_brand: string): void {
    this._brand = _brand;
  }

  public getModel(): string {
    return this._model;
  }

  public setModel(_model: string): void {
    this._model = _model;
  }

  public getPrice(): number {
    return this._price;
  }

  public setPrice(_price: number): void {
    this._price = _price;
  }

  public getBatteryLife(): number {
    return this._batteryLife;
  }

  public setBatteryLife(_batteryLife: number): void {
    this._batteryLife = _batteryLife;
  }
}

// Lớp con Iphone
class Iphone extends Smartphone {
  private _iosVersion: string; // Phiên bản iOS

  constructor(
    _model: string,
    _price: number,
    _batteryLife: number,
    _iosVersion: string,
    _VAT: number
  ) {
    super("Iphone", _model, _price, _batteryLife, _VAT);
    this._iosVersion = _iosVersion;
  }

  // Phương thức toString() hiển thị thông tin chi tiết của Iphone
  public toString(): string {
    return `${super.toString()}, iOS Version: ${this._iosVersion}`;
  }

  // Getter và Setter
  public getIosVersion(): string {
    return this._iosVersion;
  }

  public setIosVersion(_iosVersion: string): void {
    this._iosVersion = _iosVersion;
  }
}

// Lớp con Samsung
class Samsung extends Smartphone {
  private _androidVersion: string; // Phiên bản Android

  constructor(
    _model: string,
    _price: number,
    _batteryLife: number,
    _androidVersion: string,
    _VAT: number
  ) {
    super("Samsung", _model, _price, _batteryLife, _VAT);
    this._androidVersion = _androidVersion;
  }

  // Phương thức toString() hiển thị thông tin chi tiết của Samsung
  public toString(): string {
    return `${super.toString()}, Android Version: ${this._androidVersion}`;
  }

  // Getter và Setter
  public getAndroidVersion(): string {
    return this._androidVersion;
  }

  public setAndroidVersion(_androidVersion: string): void {
    this._androidVersion = _androidVersion;
  }
}

// Ví dụ sử dụng
let iphone12 = new Iphone("iPhone 12", 999, 20, "iOS 14", 10);
let samsungGalaxyS21 = new Samsung("Galaxy S21", 799, 24, "Android 11", 8);

console.log(iphone12.toString());
console.log(iphone12);
console.log(samsungGalaxyS21.toString());
console.log(samsungGalaxyS21);
