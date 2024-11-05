import { Student } from "./Student";

export class Enrolment {
  private status: string;
  private grade: string;
  private numGrade: number;
  private student: Student;

  constructor(
    student: Student,
    status: string,
    grade: string,
    numGrade: number
  ) {
    this.status = status;
    this.grade = grade;
    this.numGrade = numGrade;
    this.student = student;
  }

  public getStatus(): string {
    return this.status;
  }
  public setStatus(status: string): void {
    this.status = status;
  }

  public getGrade(): string {
    return this.grade;
  }
  public setGrade(grade: string): void {
    this.grade = grade;
  }

  public getNumGrade(): number {
    return this.numGrade;
  }
  public setNumGrade(numGrade: number): void {
    this.numGrade = numGrade;
  }

  public toString(): string {
    return `status: ${this.status}, grade: ${this.grade}, numGrade: ${this.numGrade}`;
  }
}
