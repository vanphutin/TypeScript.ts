// Cho một số nguyên không âm N, hãy tính tổng chữ số của N sử dụng kỹ thuật đệ
// quy.
function bai_13(n: number): number {
  if (n < 10) return n;
  return bai_13(Math.floor(n / 10)) + (n % 10);
}

console.log(bai_13(123456789));
