//Cho một số nguyên không âm N, hãy in ra dạng biểu diễn nhị phân của số N.
//8-> 1000

function bai_11(n: number): number {
  if (n == 0) return 0;
  else return bai_11(Math.floor(n / 2)) * 10 + (n % 2);
}
console.log(bai_11(8));
