//Tính n giai thừa bằng đệ quy.

function bai_5(n: number): number {
  if (n == 1) return 1;
  return bai_5(n - 1) * n;
}
console.log(bai_5(6));
