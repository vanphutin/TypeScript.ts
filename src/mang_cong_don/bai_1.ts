// Bài 1. Xây dựng mảng cộng dồn
// Cho mảng số nguyên A[] gồm N phần tử, mảng cộng dồn của A[] là mảng F[] với
// tính chất F[i] lưu tổng các phần tử từ chỉ số 0 tới chỉ số i của mảng A[]. Bạn hãy xây dựng mảng cộng dồn F[]

function init_prefix_sum(arr: number[]): number[] {
  let prefix_sum: number[] = new Array(arr.length);
  prefix_sum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix_sum[i] = prefix_sum[i - 1] + arr[i];
  }
  return prefix_sum;
}
const array: number[] = [8, 7, 6, 5, 6, 6];
console.log(init_prefix_sum(array));

export default init_prefix_sum;
