import * as fs from "fs";
import { Person } from "./Person";
import { Student } from "./Student";
import { Faculty } from "./Faculty";
import { Course } from "./Course";
import { Enrolment } from "./Enrolment";
import { Section } from "./Section";

class Main {
  public static readFile(filePath: string): any {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Failed to read the file:", err);
      return null;
    }
  }

  public static printF(data: any): void {
    if (data) {
      // In ra dữ liệu đọc được từ file
      console.log("Data read from file:");

      // Tạo các đối tượng từ dữ liệu đọc được
      const persons: Person[] = data.persons.map(
        (personData: any) =>
          new Person(personData.lastName, personData.firstName)
      );
      const students: Student[] = data.students.map(
        (studentData: any) =>
          new Student(
            studentData.lastName,
            studentData.firstName,
            studentData.studentID,
            studentData.yearMatriculated
          )
      );
      const faculties: Faculty[] = data.faculties.map(
        (facultyData: any) =>
          new Faculty(
            facultyData.lastName,
            facultyData.firstName,
            facultyData.facultyID,
            facultyData.office
          )
      );
      const courses: Course[] = data.courses.map((courseData: any) => {
        const course = new Course(
          courseData.courseNbr,
          courseData.courseTitle,
          courseData.credits
        );
        courseData.sections.forEach((sectionData: any) => {
          const facultyMember = faculties.find(
            (faculty) => faculty.getFacultyID() === sectionData.facultyID
          );
          const listEnrolls = sectionData.listEnrolls.map((enrolData: any) => {
            const student = students.find((student) => {
              return student.getStudentID() === enrolData?.student?.studentID;
            });
            return new Enrolment(
              student!,
              enrolData.status,
              enrolData.grade,
              enrolData.numGrade
            );
          });
          course.addSection(
            sectionData.sectionNbr,
            sectionData.semester,
            sectionData.room,
            facultyMember!,
            listEnrolls
          );
        });
        return course;
      });

      // In ra thông tin theo định dạng
      console.log("Khóa học : [OOP - Lập trình hướng đối tượng (4TC)]\n");
      courses.forEach((course) => {
        console.log(`Thông tin học phần ==`);
        console.log("=".repeat(50));
        course.sections.forEach((section) => {
          console.log(`Mã học phần: ${course.courseNbr}`);
          console.log(`Học kỳ: ${section.semester}`);
          console.log(`Phòng học: ${section.room}`);
          console.log(
            `Giảng viên: ${section.facultyMember.getFirstName()} ${section.facultyMember.getLastName()} (Khoa : CNTT)`
          );
          console.log("\nDanh sách sinh viên ===");
          console.log("=".repeat(50));
          console.log(
            "Mã SV".padEnd(10) +
              "Họ tên".padEnd(20) +
              "Khóa năm".padEnd(10) +
              "Điểm"
          );
          section.listEnrolls.forEach((enrol) => {
            const student = enrol.student;

            console.log(
              `${student.getFirstName() || ""}`.padEnd(10) +
                `${student.getFirstName() || ""} ${
                  student.getFirstName() || ""
                }`.padEnd(20) +
                `${student.getYearMatriculated()}`.padEnd(10) +
                `${enrol.numGrade}`
            );
          });
          console.log(
            `\nTổng số sinh viên : ${Array.from(section.listEnrolls).length}`
          );
          console.log("\n");
        });
      });
    }
  }

  public static createLists(choice: number): void {
    switch (choice) {
      case 1:
        // Tạo các đối tượng Faculty (giảng viên)
        const faculties: Faculty[] = [
          new Faculty("Nguyen", "Anh", "F001", "Room 101"),
          new Faculty("Tran", "Binh", "F002", "Room 102"),
          new Faculty("Le", "Chau", "F003", "Room 103"),
        ];

        console.log("Danh sách giảng viên:");
        faculties.forEach((faculty) => {
          console.log(faculty.toString());
        });
        break;

      case 2:
        // Tạo các đối tượng Student (sinh viên)
        const students: Student[] = [
          new Student("Nguyen", "Anh", "S12345", 2020),
          new Student("Tran", "Binh", "S54321", 2019),
        ];

        console.log("Danh sách sinh viên:");
        students.forEach((student) => {
          console.log(student.toString());
        });
        break;

      case 3:
        // Tạo các đối tượng Course (khóa học)
        const courses: Course[] = [
          new Course("CS101", "Introduction to Programming", 3),
          new Course("CS102", "Data Structures", 4),
        ];

        console.log("Danh sách khóa học:");
        courses.forEach((course) => {
          console.log(course.toString());
        });
        break;

      default:
        console.log("Lựa chọn không hợp lệ!");
    }
  }
}

// Đọc dữ liệu từ file data.json
const data = Main.readFile("CourseData.json");

// In thông tin các đối tượng
Main.printF(data);
Main.createLists(1);
Main.createLists(2);
Main.createLists(3);
