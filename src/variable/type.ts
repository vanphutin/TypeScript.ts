const today = new Date();
const apple: number[] = [];
console.log(today.getTime());

const test: undefined = undefined;
console.log(test);
let now: Date = new Date();
console.log(now);

//Array
let colors: string[] = ["red", "green", "white"];

//Classes

class Car {}
let car: Car = new Car();
console.log(car);

//object
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: string[]) => void = (i: string[]) => {
  console.log(i);
};
logNumber(colors);

let isSort: boolean = true;

const numbers: number[] = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i + 1]) {
    isSort = false;
  }
}
console.log("isSort", isSort);

// 1 + 2 + 3 + 4 + 5 = 15 dung de quy n = 5 =>result = 15

function tinhTong(n: number): number {
  if (n === 0) return 0;
  return tinhTong(n - 1) + n;
}

function fibo(n: number): number {
  if (n <= 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(6));

// any type

let listNumber = [1, 1, 2, 3, 5, 8, 12];
let isLess: boolean | number = false;

for (let i = 0; i < listNumber.length; i++) {
  if (listNumber[i] < 5) {
    isLess = listNumber[i];
  }
}

console.log("isLess", isLess);
