import * as fs from "fs";
import { DanhMuc } from "./DanhMuc";
import { SachGiaoKhoa } from "./SachGiaoKhoa";
import { TieuThuyet } from "./TieuThuyet";
import { log } from "console";

class DanhMucSach {
  private danhSach: DanhMuc[] = [];

  // a. Đọc dữ liệu từ file JSON
  docDuLieuTuFile(filePath: string): void {
    const data = fs.readFileSync(filePath, "utf-8");
    try {
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
    } catch (error: any) {
      console.error("Error while reading file:", error.message);
      throw new Error(`Failed to read data from ${filePath}: ${error.message}`);
    }
  }

  // Lưu toàn bộ danh sách sách vào file .json
  luuDuLieuVaoFile(filePath: string): void {
    const data = JSON.stringify(this.danhSach, null, 2); // Chuyển đổi danh sách thành chuỗi JSON
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error("Lỗi khi lưu dữ liệu:", err);
      } else {
        console.log("Dữ liệu đã được lưu vào", filePath);
      }
    });
  }

  // In danh sách
  xuat(): void {
    for (let i = 0; i < this.danhSach.length; i++) {
      // Sửa điều kiện lặp
      console.table(this.danhSach[i]);
    }
  }

  // Thêm 1 danh mục (sách giáo khoa hoặc tiểu thuyết)
  themDanhMuc(sach: DanhMuc): void {
    this.danhSach.push(sach);
  }

  // Thống kê số lượng theo từng loại sách (sách giáo khoa, tiểu thuyết)
  thongKeSoLuongTheoLoai(): { sachGiaoKhoa: number; tieuThuyet: number } {
    const sachGiaoKhoa = this.danhSach.filter(
      (sach) => sach instanceof SachGiaoKhoa
    ).length;
    const tieuThuyet = this.danhSach.filter(
      (sach) => sach instanceof TieuThuyet
    ).length;
    return { sachGiaoKhoa, tieuThuyet };
  }

  // Tìm sách có giá bán lớn nhất theo từng loại sách
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

  // Tìm sách có thành tiền lớn nhất
  timSachCoThanhTienLonNhat(): DanhMuc | null {
    return this.danhSach.reduce(
      (max, curr) =>
        curr.tinhThanhTien() > (max?.tinhThanhTien() || 0) ? curr : max,
      null as DanhMuc | null
    );
  }

  // Sắp xếp giảm dần theo thành tiền
  sapXepGiamDanTheoThanhTien(): void {
    this.danhSach.sort((a, b) => b.tinhThanhTien() - a.tinhThanhTien());
  }
}

// Sử dụng các phương thức
const danhMucSach = new DanhMucSach();
danhMucSach.docDuLieuTuFile("data.json");
console.log("Danh sách sách:");
danhMucSach.xuat();
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
console.log("Danh sách sau khi sắp xếp giảm dần theo thành tiền:");
danhMucSach.xuat(); // Gọi lại phương thức xuất để in danh sách đã sắp xếp

// Lưu danh sách vào file
danhMucSach.luuDuLieuVaoFile("dataReturn.json"); // Lưu vào file data.json
