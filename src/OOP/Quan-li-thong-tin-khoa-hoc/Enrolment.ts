import { Student } from "./Student";

export class Enrolment {
  public student: Student;
  public status: string;
  public grade: string;
  public numGrade: number;

  public constructor(
    student: Student,
    status?: string,
    grade?: string,
    numGrade?: number
  ) {
    this.student = student;
    this.status = status || "";
    this.grade = grade || "";
    this.numGrade = numGrade || 0;
  }

  public getStatus(): string {
    return this.status;
  }

  public getGrade(): string {
    return this.grade;
  }

  public getNumGrade(): number {
    return this.numGrade;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public setGrade(grade: string): void {
    this.grade = grade;
  }

  public setNumGrade(numGrade: number): void {
    this.numGrade = numGrade;
  }

  public toString(): string {
    return `Enrolment: ${this.student.toString()}, Status: ${
      this.status
    }, Grade: ${this.grade}, Numeric Grade: ${this.numGrade}`;
  }
}
