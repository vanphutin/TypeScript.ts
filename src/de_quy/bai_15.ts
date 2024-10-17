//Cho một số nguyên không âm N, hãy in ra chữ số đầu tiên của N.

import { log } from "console";

function bai_15(n: number): number {
  if (n < 10) return n;
  return bai_15(Math.floor(n / 10));
}
log(bai_15(56));
