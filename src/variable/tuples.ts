const drink = {
  carbonated: true,
  color: "",
  cost: 0,
};

// const pepsi = [false, "red", 999];

//use tuples

const pepsi: [boolean, string, number] = [false, "yellow", 30];

//or
type Drink = [boolean, string, number];
const numberOne: Drink = [true, "yellow", 10.0];
