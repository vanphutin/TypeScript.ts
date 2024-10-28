import { DanhMuc } from "./DanhMuc";

export class TieuThuyet extends DanhMuc {
  private theLoai: string;

  constructor(
    ma: string,
    ten: string,
    nhaXuatBan: string,
    namXuatBan: number,
    soTrang: number,
    gia: number,
    soLuong: number,
    theLoai: string
  ) {
    super(ma, ten, nhaXuatBan, namXuatBan, soTrang, gia, soLuong);
    this.theLoai = theLoai;
  }

  getTheLoai(): string {
    return this.theLoai;
  }

  setTheLoai(theLoai: string): void {
    this.theLoai = theLoai;
  }
  tinhThanhTien(): number {
    return this.getGia() * this.getSoLuong();
  }
}
