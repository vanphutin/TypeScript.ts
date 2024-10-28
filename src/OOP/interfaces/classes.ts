// public : công khai
// private : riêng tư
// protected  : bảo vệ
class Vehicle {
  drive(): void {
    console.log("Poscher");
  }
  honk(): void {
    console.log("beep");
  }
}

class Bicycle extends Vehicle {
  //@overwrite : ghi đè
  drive(): void {
    console.log("Maybach");
  }
}

const myDrive = new Bicycle();

myDrive.drive();
//0.04
