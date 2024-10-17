// Tính tổng hàm S(n) = 1^3 + 2^3 + 3^3 + 4^3 + .. + n^3 bằng đệ quy. Nếu bạn
// chưa biết thì S(n) có thể tính nhanh bằng công thức S(n) = [(n * (n + 1) / 2)]^2

function bai_3(n: number): number {
  if (n == 0) return 0;
  return bai_3(n - 1) + n * n * n;
}
console.log(bai_3(435));
