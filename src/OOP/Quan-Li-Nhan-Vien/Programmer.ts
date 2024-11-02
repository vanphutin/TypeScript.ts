import { Employee } from "./Employee";

export class Programmer extends Employee {
  protected theLanguage: string;

  constructor(
    thePayrollNunber: number,
    theName: string,
    theBasicMonthlySalary: number,
    theLanguage: string
  ) {
    super(thePayrollNunber, theName, theBasicMonthlySalary);
    this.theLanguage = theLanguage;
  }

  public toString(): string {
    return `${super.toString()}, theLanguage : ${this.theLanguage} `;
  }
  public getMonthlySalary(): number {
    let subsidy: number = 0; //  phụ cấp
    if (this.theLanguage === "Java") {
      subsidy = 0.2;
    }
    return this.theBasicMonthlySalary + this.theBasicMonthlySalary * subsidy; // Cộng phụ cấp vào lương cơ bả
  }

  public getTheLanguage(): string {
    return this.theLanguage;
  }

  public setTheLanguage(theLanguage: string): string {
    return (this.theLanguage = theLanguage);
  }
}
