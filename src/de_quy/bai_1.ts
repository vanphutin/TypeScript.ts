// Tính tổng hàm S(n) = 1 + 2 + 3 + 4 + .. + n bằng đệ quy. Nếu bạn chưa biết thì
// S(n) có thể tính nhanh bằng công thức S(n) = n * (n + 1) / 2

let n;
function bai_1(n: number): number {
  if (n === 0) return 0;
  return bai_1(n - 1) + n;
}

console.log(bai_1(5));
