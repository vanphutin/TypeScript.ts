var trangThai;
(function (trangThai) {
    trangThai[trangThai["MoiDangKy"] = 0] = "MoiDangKy";
    trangThai[trangThai["DaThuTien"] = 1000] = "DaThuTien";
    trangThai[trangThai["HoanThanh"] = 0] = "HoanThanh";
})(trangThai || (trangThai = {}));
console.log(typeof trangThai, trangThai, trangThai.HoanThanh);
