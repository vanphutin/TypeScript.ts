// Dãy số fibonacci là dãy số thỏa mãn : F1=0, F2=1, Fn=Fn-1+Fn-2. Hãy tìm số
// Fibonacci thứ n sử dụng đệ quy. Độ phức tạp của code đệ quy là O(1.618^n)
// không thể áp dụng được với n lớn.

function bai_6(n: number): number {
  if (n < 2) return 1;
  return bai_6(n - 2) + bai_6(n - 1);
}

console.log(bai_6(5));
