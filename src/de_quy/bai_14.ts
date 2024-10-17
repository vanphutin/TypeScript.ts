// Cho một số nguyên không âm N, hãy đếm số lượng chữ số của N.

import { log } from "console";

function bai_14(n: number): number {
  if (n < 10) return 1;
  return 1 + bai_14(Math.floor(n / 10));
}

log(bai_14(12));
