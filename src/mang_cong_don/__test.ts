let a: number[] = [6, 5, 9, 7, 7, 6, 7, 7, 5, 9, 7];
function _test1(a: number[], left: number, right: number): number {
  let sum: number = 0;
  for (let i = left; i <= right; i++) {
    sum += a[i];
  }
  return sum;
}

console.log(_test1(a, 1, 9)); // 62
console.log(_test1(a, 1, 10)); // 62
console.log(_test1(a, 0, 8)); // 62
