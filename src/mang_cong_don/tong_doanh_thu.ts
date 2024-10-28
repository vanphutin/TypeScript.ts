// Bài tập: Tổng doanh thu sử dụng mảng cộng dồn
// Giả sử bạn là quản lý doanh thu của một cửa hàng và có một mảng ghi lại doanh thu hàng ngày trong một tuần (7 ngày). Bạn muốn biết tổng doanh thu trong các khoảng thời gian khác nhau.

// doanhthu = [150, 200, 250, 300, 100, 400, 350]

// Tính tổng doanh thu từ ngày 1 đến ngày 3.
// Tính tổng doanh thu từ ngày 2 đến ngày 5.
// Tính tổng doanh thu từ ngày 0 đến ngày 6.
const doanhthu: number[] = [150, 200, 250, 300, 100, 400, 350];
import init_prefix_sum from "./bai_1";
function khoi_tao_prefix_sum(arr: number[]): number[] {
  const prefix_sum: number[] = [arr.length];
  prefix_sum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix_sum[i] = prefix_sum[i - 1] + arr[i];
  }
  return prefix_sum;
}

function main(prefix_sum: number[], l: number, r: number): number {
  if (l == 0) return prefix_sum[r];
  else {
    return prefix_sum[r] - prefix_sum[l - 1];
  }
}

// Tạo mảng cộng dồn
const prefix_sum = khoi_tao_prefix_sum(doanhthu);
console.log(main(prefix_sum, 1, 3));
