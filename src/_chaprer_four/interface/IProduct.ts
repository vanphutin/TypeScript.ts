interface IProduct {
  price: number;
  VAT: number;

  // tính thuế
  tinhThue(): number;
}

class ElectronProduct implements IProduct {
  public price: number;
  public VAT: number;
  private id: string;
  private name: string;
  private size?: string; // có thể có (size) hoặc không

  constructor(
    id: string,
    name: string,
    price: number,
    VAT: number,
    size?: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.VAT = VAT;
    this.size = size;
  }

  tinhThue(): number {
    return this.price * (1 + this.VAT / 100);
  }

  toString(): string {
    return `id: ${this.id}, name: ${this.name}, price: ${this.price}, VAT: ${
      this.VAT
    }, size: ${this.size ?? "N/A"}, Thuế: ${this.tinhThue().toFixed(3)}`;
  }
}

let iphone15WithSize = new ElectronProduct("1", "Iphone 15", 200.0, 10, "L");
let iphone15WithoutSize = new ElectronProduct("2", "Iphone 15", 200.0, 10);

console.log("Có size:", iphone15WithSize.toString());
console.log("Không có size:", iphone15WithoutSize.toString());
