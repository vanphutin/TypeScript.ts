import { Programmer } from "./Programmer";

export class ProjectLeader extends Programmer {
  constructor(
    thePayrollNunber: number,
    theName: string,
    theBasicMonthlySalary: number,
    theLanguage: string
  ) {
    super(thePayrollNunber, theName, theBasicMonthlySalary, theLanguage);
  }

  public toString(): string {
    return super.toString();
  }
  public getMonthlySalary(): number {
    let subsidy: number = 0.2; //  phụ cấp
    return this.theBasicMonthlySalary + this.theBasicMonthlySalary * subsidy;
  }
}
