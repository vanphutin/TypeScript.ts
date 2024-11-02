import { Employee } from "./Employee";

export class Administrator extends Employee {
  private theDepartment: string;

  constructor(
    thePayrollNunber: number,
    theName: string,
    theBasicMonthlySalary: number,
    theDepartment: string
  ) {
    super(thePayrollNunber, theName, theBasicMonthlySalary);
    this.theDepartment = theDepartment;
  }

  public getTheDepartment(): string {
    return this.theDepartment;
  }

  public setTheDepartment(theDepartment: string): string {
    return (this.theDepartment = theDepartment);
  }

  public toStringAdministrator(): String {
    return `${super.toString()}, theDepartment : ${this.theDepartment}, `;
  }

  public getMonthlySalary(): number {
    let subsidy: number = 0.4; //  phụ cấp
    return this.theBasicMonthlySalary + this.theBasicMonthlySalary * subsidy; // Cộng phụ cấp vào lương cơ bản
  }
}
