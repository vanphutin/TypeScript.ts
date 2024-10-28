interface ReportTable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: false,
  summary(): string {
    return `name ${this.name}`;
  },
};

const cake = {
  color: "red",
  carbonated: false,
  sugar: 39,
  summary(): string {
    return `My cake is ${this.color} and it has more than ${this.sugar}grams of sugar`;
  },
};

function printSummary(item: ReportTable): void {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(cake);
