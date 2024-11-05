import { Person } from "./Person";

export class Student extends Person {
  private studentID: string;
  private yearMatriculated: number;

  constructor(
    lastName: string,
    firstName: string,
    studentID: string,
    yearMatriculated: number
  ) {
    super(lastName, firstName);
    this.studentID = studentID;
    this.yearMatriculated = yearMatriculated;
  }

  public getStudentID(): string {
    return this.studentID;
  }
  public setStudentID(studentID: string): void {
    this.studentID = studentID;
  }

  public getYearMatriculated(): number {
    return this.yearMatriculated;
  }

  public setYearMatriculated(yearMatriculated: number): void {
    this.yearMatriculated = yearMatriculated;
  }

  public toString(): string {
    return `${super.toString()}, studentID: ${
      this.studentID
    }, yearMatriculated: ${this.yearMatriculated}`;
  }
}
