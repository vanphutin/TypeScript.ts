import { Faculty } from "./Faculty";
import { Enrolment } from "./Enrolment";
import { Section } from "./Section";

export class Course {
  public courseNbr: string;
  public courseTitle: string;
  public credits: number;
  public sections: Set<Section>;

  // Constructors
  public constructor(
    courseNbr?: string,
    courseTitle?: string,
    credits?: number
  ) {
    this.courseNbr = courseNbr || "";
    this.courseTitle = courseTitle || "";
    this.credits = credits || 0;
    this.sections = new Set<Section>();
  }

  public getCourseNbr(): string {
    return this.courseNbr;
  }

  public getCourseTitle(): string {
    return this.courseTitle;
  }

  public getCredits(): number {
    return this.credits;
  }

  public setCourseNbr(courseNbr: string): void {
    this.courseNbr = courseNbr;
  }

  public setCourseTitle(courseTitle: string): void {
    this.courseTitle = courseTitle;
  }

  public setCredits(credits: number): void {
    this.credits = credits;
  }

  public addSection(
    sectionNbr: string,
    semester: string,
    room: string,
    facultyMember: Faculty,
    listEnrolls: Set<Enrolment>
  ): void {
    const newSection = new Section(
      sectionNbr,
      semester,
      room,
      facultyMember,
      listEnrolls
    );
    this.sections.add(newSection);
  }

  public getNbrStudents(sectionNbr: string): number {
    let numStudents = 0;
    for (const section of this.sections) {
      if (section.sectionNbr === sectionNbr) {
        numStudents = section.listEnrolls.size;
        break;
      }
    }
    return numStudents;
  }

  public toString(): string {
    return `Course: ${this.courseNbr}, Title: ${this.courseTitle}, Credits: ${this.credits}, Sections: ${this.sections.size}`;
  }
}
