import { Person } from "./Person";

export class Faculty extends Person {
  private facultyID: string;
  private office: string;

  public constructor(
    lastName?: string,
    firstName?: string,
    facultyID?: string,
    office?: string
  ) {
    super(lastName, firstName);
    this.facultyID = facultyID || "";
    this.office = office || "";
  }

  public getFacultyID(): string {
    return this.facultyID;
  }

  public getOffice(): string {
    return this.office;
  }

  public setFacultyID(facultyID: string): void {
    this.facultyID = facultyID;
  }

  public setOffice(office: string): void {
    this.office = office;
  }

  public toString(): string {
    return `Faculty: ${this.firstName} ${this.lastName}, ID: ${this.facultyID}, Office: ${this.office}`;
  }
}
