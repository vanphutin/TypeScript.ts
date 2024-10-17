// Tính tổng hàm S(n) = 1^2 + 2^2 + 3^2 + 4^2 + .. + n^2 bằng đệ quy. Nếu bạn
// chưa biết thì S(n) có thể tính nhanh bằng công thức S(n) = n * (n + 1) * (2n + 1) /
// 6

function bai_2(n: number): number {
  if (n == 0) return 0;
  return bai_2(n - 1) + n * n;
}

console.log(bai_2(53));
