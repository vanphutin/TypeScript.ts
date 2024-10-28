import { DanhMuc } from "./DanhMuc";

export class SachGiaoKhoa extends DanhMuc {
  private khoiLop: string;

  constructor(
    ma: string,
    ten: string,
    nhaXuatBan: string,
    namXuatBan: number,
    soTrang: number,
    gia: number,
    soLuong: number,
    khoiLop: string
  ) {
    super(ma, ten, nhaXuatBan, namXuatBan, soTrang, gia, soLuong);
    this.khoiLop = khoiLop;
  }

  getKhoiLop(): string {
    return this.khoiLop;
  }

  setKhoiLop(khoiLop: string): void {
    this.khoiLop = khoiLop;
  }

  tinhThanhTien(): number {
    return this.getGia() * this.getSoLuong();
  }
}
