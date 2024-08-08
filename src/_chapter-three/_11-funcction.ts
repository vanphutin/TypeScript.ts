//type 1

function tinhTong(x: number, y: number): void {
  let sum = x + y;
  console.log("tinh tong : ", sum);
}

tinhTong(10, 12);

//anonymous function
//type 2

let z = function (x: string, y: number): string {
  return `Hello ${x}, you are ${y} old ?`;
};

console.log(z("Tin", 20));

//type 3
let yy: (x: string, y: number) => void = function (z, y) {
  console.log("hihi ");
};

//type 4

let xxx = (age: number): void => {
  console.log("age", age);
};
xxx(20);
