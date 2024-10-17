// Tính tổng hàm S(n) = -1 + 2 -3 + 4 - 5 + 6 + ... + (-1)^n * n bằng đệ quy. Nếu
// bạn chưa biết thì S(n) có thể tính nhanh bằng công thức Nếu N chẵn thì S(n) = n /
// 2, còn nếu N lẻ thì S(n) = (n - 1) / 2 - n

function bai_4(n: number): number {
  if (n == 1) return -1;
  if (n % 2 == 0) {
    return bai_4(n - 1) + n;
  } else {
    return bai_4(n - 1) - n;
  }
}

console.log(bai_4(919));
console.log(bai_4(3));
