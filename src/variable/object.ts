const person = {
  name: "Tin",
  age: 21,
  coords: {
    lat: 33,
    lng: 33.2,
  },
  getAge(age: number): void {
    this.age = age;
  },
};

const age1 = person.age;
//destructring
const { age }: { age: number } = person;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = person;
