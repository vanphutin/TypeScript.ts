import { Enrolment } from "./Enrolment";
import { Faculty } from "./Faculty";

export class Section {
  public sectionNbr: string;
  public semester: string;
  public room: string;
  public facultyMember: Faculty;
  public listEnrolls: Set<Enrolment>;

  public constructor(
    sectionNbr?: string,
    semester?: string,
    room?: string,
    facultyMember?: Faculty,
    listEnrolls?: Set<Enrolment>
  ) {
    this.sectionNbr = sectionNbr || "";
    this.semester = semester || "";
    this.room = room || "";
    this.facultyMember = facultyMember || new Faculty();
    this.listEnrolls = listEnrolls || new Set<Enrolment>();
  }

  public getSectionNbr(): string {
    return this.sectionNbr;
  }

  public getSemester(): string {
    return this.semester;
  }

  public getRoom(): string {
    return this.room;
  }

  public setSectionNbr(sectionNbr: string): void {
    this.sectionNbr = sectionNbr;
  }

  public setSemester(semester: string): void {
    this.semester = semester;
  }

  public setRoom(room: string): void {
    this.room = room;
  }

  public toString(): string {
    return `Section: ${this.sectionNbr}, Semester: ${this.semester}, Room: ${
      this.room
    }, Faculty: ${this.facultyMember.toString()}, Enrolments: ${
      this.listEnrolls.size
    }`;
  }
}
