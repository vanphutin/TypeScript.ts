//use only type : any
let text: any;
text = "this is text";

// TYPE 1 : <kieu du lieu>bien
console.log(typeof text, text, "| length :", <string>text.length);

//TYPE 2 : as
console.log(typeof text, text, "| length :", (text as string).length);
