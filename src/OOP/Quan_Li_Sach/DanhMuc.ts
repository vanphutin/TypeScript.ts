export abstract class DanhMuc {
  private ma: string;
  private ten: string;
  private nhaXuatBan: string;
  private namXuatBan: number;
  private soTrang: number;
  private gia: number;
  private soLuong: number;

  constructor(
    ma: string,
    ten: string,
    nhaXuatBan: string,
    namXuatBan: number,
    soTrang: number,
    gia: number,
    soLuong: number
  ) {
    // Basic validation (you can add more)
    if (gia < 0 || soLuong < 0) {
      throw new Error("Price and quantity cannot be negative.");
    }

    this.ma = ma;
    this.ten = ten;
    this.nhaXuatBan = nhaXuatBan;
    this.namXuatBan = namXuatBan;
    this.soTrang = soTrang;
    this.gia = gia;
    this.soLuong = soLuong;
  }

  getMa(): string {
    return this.ma;
  }

  getTen(): string {
    return this.ten;
  }

  getNhaXuatBan(): string {
    return this.nhaXuatBan;
  }

  getNamXuatBan(): number {
    return this.namXuatBan;
  }

  getSoTrang(): number {
    return this.soTrang;
  }

  getGia(): number {
    return this.gia;
  }

  getSoLuong(): number {
    return this.soLuong;
  }

  abstract tinhThanhTien(): number;

  toString(): string {
    return `ID_sach: ${this.ma}, 
                ten sach: ${this.ten}, 
                nha xuat ban: ${this.nhaXuatBan}, 
                nam xuat ban: ${this.namXuatBan}, 
                so trang: ${this.soTrang}, 
                gia: ${this.gia}, 
                so luong: ${this.soLuong}`;
  }
}
