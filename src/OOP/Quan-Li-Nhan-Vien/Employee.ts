export abstract class Employee {
  protected readonly thePayrollNunber: number; // readOnly
  protected theName: string;
  protected theBasicMonthlySalary: number;

  constructor(
    thePayrollNunber: number,
    theName: string,
    theBasicMonthlySalary: number
  ) {
    this.thePayrollNunber = thePayrollNunber;
    this.theName = theName;
    this.theBasicMonthlySalary = theBasicMonthlySalary;
  }

  //overive
  public toString(): string {
    return `thePayrollNunber : ${this.thePayrollNunber},theName : ${this.theName}, theBasicMonthlySalary : ${this.theBasicMonthlySalary} `;
  }

  public getThePayrollNunber(): number {
    return this.thePayrollNunber;
  }

  public getTheName(): string {
    return this.theName;
  }

  public setTheName(theName: string): string {
    return (this.theName = theName);
  }

  public getTheBasicMonthlySalary(): number {
    return this.theBasicMonthlySalary;
  }
  public setTheBasicMonthlySalary(theBasicMonthlySalary: number): number {
    return (this.theBasicMonthlySalary = theBasicMonthlySalary);
  }
  public abstract getMonthlySalary(): number;
}
