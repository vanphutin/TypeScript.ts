import { Enrolment } from "./Enrolment";
import { Faculty } from "./Faculty";

export class Section {
  private sectionNbr: string;
  private semester: string;
  private room: string;
  private faculty: Faculty;
  private listEnrolls: Set<Enrolment>;

  constructor(
    sectionNbr: string,
    semester: string,
    room: string,
    faculty: Faculty
  ) {
    this.semester = semester;
    this.sectionNbr = sectionNbr;
    this.room = room;
    this.faculty = faculty;
    this.listEnrolls = new Set<Enrolment>();
  }

  // Getter và Setter
  public getSemester(): string {
    return this.semester;
  }

  public setSemester(semester: string): void {
    this.semester = semester;
  }

  public getSectionNbr(): string {
    return this.sectionNbr;
  }

  public setSectionNbr(sectionNbr: string): void {
    this.sectionNbr = sectionNbr;
  }

  public getRoom(): string {
    return this.room;
  }

  public setRoom(room: string): void {
    this.room = room;
  }

  public getFacultyMember(): Faculty {
    return this.faculty;
  }

  public setFacultyMember(faculty: Faculty): void {
    this.faculty = faculty;
  }
  public getListEnrolls(): Set<Enrolment> {
    return this.listEnrolls;
  }
  public setListEnrolls(listEnrolls: Set<Enrolment>): void {
    this.listEnrolls = listEnrolls;
  }
  // Phương thức để in thông tin lớp học
  public toString(): string {
    return `Section { semester: ${this.semester}, sectionNbr: ${
      this.sectionNbr
    }, room: ${
      this.room
    }, facultyMember: ${this.faculty.getFacultyID()}, numberOfEnrollments: ${this.getListEnrolls()} }`;
  }
}
