import * as fs from "fs";
import { DanhMuc } from "./DanhMuc";
import { SachGiaoKhoa } from "./SachGiaoKhoa";
import { TieuThuyet } from "./TieuThuyet";
class DanhMucSach {
  private danhSach: DanhMuc[] = [];
  // a. Đọc dữ liệu từ file JSON
  docDuLieuTuFile(filePath: string): void {
    const data = fs.readFileSync(filePath, "utf-8");
    const items = JSON.parse(data);

    items.forEach((item: any) => {
      if (item.type === "SachGiaoKhoa") {
        this.danhSach.push(
          new SachGiaoKhoa(
            item.ma,
            item.ten,
            item.nhaXuatBan,
            item.namXuatBan,
            item.soTrang,
            item.giaBan,
            item.soLuong,
            item.khoiLop
          )
        );
      } else if (item.type === "TieuThuyet") {
        this.danhSach.push(
          new TieuThuyet(
            item.ma,
            item.ten,
            item.nhaXuatBan,
            item.namXuatBan,
            item.soTrang,
            item.giaBan,
            item.soLuong,
            item.theLoai
          )
        );
      }
    });
  }

  //in danh sach
  xuat(): void {
    for (let i = 0; i <= this.danhSach.length; i++) {
      console.log(this.danhSach[i]);
    }
  }

  //   b. Thêm 1 danh mục (sách giáo khoa hoặc tiểu thuyết)
  themDanhMuc(sach: DanhMuc): void {
    this.danhSach.push(sach);
  }
  //c. Thống kê số lượng theo từng loại sách (sách giáo khoa, tiểu thuyết)
  thongKeSoLuongTheoLoai(): { sachGiaoKhoa: number; tieuThuyet: number } {
    const sachGiaoKhoa = this.danhSach.filter(
      (sach) => sach instanceof SachGiaoKhoa
    ).length;
    const tieuThuyet = this.danhSach.filter(
      (sach) => sach instanceof TieuThuyet
    ).length;
    return { sachGiaoKhoa, tieuThuyet };
  }
  //d. Tim sách có giá bán lớn nhất theo từng loại sách
  timSachCoGiaBanLonNhatTheoLoai(): {
    sachGiaoKhoa: DanhMuc | null;
    tieuThuyet: DanhMuc | null;
  } {
    const sachGiaoKhoa = this.danhSach
      .filter((sach) => sach instanceof SachGiaoKhoa)
      .reduce(
        (max, curr) => (curr.getGia() > (max?.getGia() || 0) ? curr : max),
        null as DanhMuc | null
      );
    const tieuThuyet = this.danhSach
      .filter((sach) => sach instanceof TieuThuyet)
      .reduce(
        (max, curr) => (curr.getGia() > (max?.getGia() || 0) ? curr : max),
        null as DanhMuc | null
      );
    return { sachGiaoKhoa, tieuThuyet };
  }
  // e. Tìm sách có thành tiền lớn nhất
  timSachCoThanhTienLonNhat(): DanhMuc | null {
    return this.danhSach.reduce(
      (max, curr) =>
        curr.tinhThanhTien() > (max?.tinhThanhTien() || 0) ? curr : max,
      null as DanhMuc | null
    );
  }

  // f. Sắp xếp giảm dần theo thành tiền
  sapXepGiamDanTheoThanhTien(): void {
    this.danhSach.sort((a, b) => b.tinhThanhTien() - a.tinhThanhTien());
  }
}

const danhMucSach = new DanhMucSach();
danhMucSach.docDuLieuTuFile("data.json");
console.log("xuat", danhMucSach.xuat());
console.log("Thống kê số lượng:", danhMucSach.thongKeSoLuongTheoLoai());
console.log(
  "Sách có giá bán lớn nhất theo loại:",
  danhMucSach.timSachCoGiaBanLonNhatTheoLoai()
);
console.log(
  "Sách có thành tiền lớn nhất:",
  danhMucSach.timSachCoThanhTienLonNhat()
);
danhMucSach.sapXepGiamDanTheoThanhTien();
console.log("Danh sách sau khi sắp xếp giảm dần theo thành tiền:", danhMucSach);
