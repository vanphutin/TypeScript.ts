//type 1
function tinhTong(x, y) {
    var sum = x + y;
    console.log("tinh tong : ", sum);
}
tinhTong(10, 12);
//anonymous function
//type 2
var z = function (x, y) {
    return "Hello ".concat(x, ", you are ").concat(y, " old ?");
};
console.log(z("Tin", 20));
//type 3
var yy = function (z, y) {
    console.log("hihi ");
};
//type 4
var xxx = function (age) {
    console.log("age", age);
};
xxx(20);
