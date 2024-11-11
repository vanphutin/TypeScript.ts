import { Person } from "./Person";

export class Student extends Person {
  private studentID: string;
  private yearMatriculated: number;

  public constructor(
    lastName?: string,
    firstName?: string,
    studentID?: string,
    yearMatriculated?: number
  ) {
    super(lastName, firstName);
    this.studentID = studentID || "";
    this.yearMatriculated = yearMatriculated || 0;
  }

  public getStudentID(): string {
    return this.studentID;
  }

  public getYearMatriculated(): number {
    return this.yearMatriculated;
  }

  public setStudentID(studentID: string): void {
    this.studentID = studentID;
  }

  public setYearMatriculated(yearMatriculated: number): void {
    this.yearMatriculated = yearMatriculated;
  }

  public toString(): string {
    return `Student: ${this.firstName} ${this.lastName}, ID: ${this.studentID}, Year Matriculated: ${this.yearMatriculated}`;
  }
}
