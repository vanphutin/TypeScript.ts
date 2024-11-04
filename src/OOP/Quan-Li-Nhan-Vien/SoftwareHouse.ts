import { Employee } from "./Employee";
import * as fs from "fs";
import { Programmer } from "./Programmer";
import { Administrator } from "./Administrator";
import { ProjectLeader } from "./ProjectLeader";

class SoftwareHouse {
  private theName: string;
  private listStaff: Employee[] = [];

  constructor(theName?: string) {
    this.theName = theName || "Default Software House";
  }

  // Read JSON file and populate listStaff
  public readFile(filePath: string): void {
    try {
      const data = fs.readFileSync(filePath, "utf-8");

      if (!data) {
        throw new Error("File is empty or unreadable");
      }

      const parsedData = JSON.parse(data);

      // Ensure parsedData has the structure we're expecting
      if (
        !parsedData.SoftwareHouse ||
        !Array.isArray(parsedData.SoftwareHouse.listStaff)
      ) {
        throw new Error("JSON data does not have the correct structure");
      }

      // Set the name of the SoftwareHouse if provided in the JSON
      this.theName = parsedData.SoftwareHouse.theName || this.theName;

      parsedData.SoftwareHouse.listStaff.forEach((item: any) => {
        if (item.type === "Programmer") {
          this.listStaff.push(
            new Programmer(
              item.thePayrollNumber,
              item.theName,
              item.theBasicMonthlySalary,
              item.theLanguage
            )
          );
        } else if (item.type === "Administrator") {
          this.listStaff.push(
            new Administrator(
              item.thePayrollNumber,
              item.theName,
              item.theBasicMonthlySalary,
              item.theDepartment
            )
          );
        } else if (item.type === "ProjectLeader") {
          this.listStaff.push(
            new ProjectLeader(
              item.thePayrollNumber,
              item.theName,
              item.theBasicMonthlySalary,
              item.theDepartment
            )
          );
        }
      });
    } catch (error: any) {
      console.error("Error while reading file:", error.message);
    }
  }

  // Print listStaff details
  public printF(): void {
    for (const item of this.listStaff) {
      console.table(item);
    }
  }

  // add employee to list
  public addEmployee(employee: Employee): boolean {
    // Kiểm tra xem có nhân viên nào có cùng mã nhân viên không
    const exists = this.listStaff.some(
      (item) =>
        item instanceof Employee &&
        item.getThePayrollNunber() === employee.getThePayrollNunber()
    );
    // console.log(exists);
    if (exists) {
      // Nếu tìm thấy mã nhân viên trùng lặp, trả về false
      return false;
    }

    // Nếu không có trùng lặp, thêm nhân viên vào danh sách
    this.listStaff.push(employee);
    return true;
  }

  //tính tổng tiền phải trả cho các nhân viên

  public getMonthlySalaryBill(): number {
    let totalSalaryBill = this.listStaff.reduce(
      (accumulator, item) => accumulator + item.getMonthlySalary(),
      0
    );
    return totalSalaryBill;
  }

  //sắp xếp danh sách nhân viên theo tên
  sortAllStaffByName(): void {
    const sortStaffByName = this.listStaff.sort((a, b) => {
      return a.getTheName().localeCompare(b.getTheName());
    });
    console.log(sortStaffByName);
  }

  //hiển thị danh sách các lập trình viên.
  displayListProgrammers(): void {
    const programmers = this.listStaff.filter(
      (item) => item instanceof Programmer
    );
    console.log(programmers);
  }

  //, cập nhật phòng ban là deptNew cho người quản lý có mã số là aPayrollNo, trả về true nếu cập nhật thành công.
  public updateDepartmentForAdmin(
    aPayrollNo: number,
    deptNew: string
  ): boolean {
    const admin = this.listStaff.find(
      (item) => item.getThePayrollNunber() === aPayrollNo
    );
    if (admin) {
      admin.setTheName(deptNew);
      return true;
    }
    // for (const x of this.listStaff) {
    //   if (!x.getThePayrollNunber().toString().includes(aPayrollNo.toString())) {
    //     return false;
    //   }
    //   x.setTheName(deptNew);
    //   return true;
    // }
    return false;
  }

  //xóa nhân viên theo mã số, trả về true nếu xóa được.
  public deleteEmployee(id: number): boolean {
    const initialLength = this.listStaff.length;

    this.listStaff = this.listStaff.filter(
      (item) => item.getThePayrollNunber() !== id
    );

    return this.listStaff.length < initialLength;
  }
}

// Example usage
const softwareHouse = new SoftwareHouse("GlobalTech");
softwareHouse.readFile("SoftwareHouse.json");

// const programmer = new Programmer(223, "Van Phu Tin", 3000, "JavaScript");
// softwareHouse.printF();
// softwareHouse.addEmployee(programmer);
// console.log(softwareHouse.addEmployee(programmer) ? "successful" : "fail");
// console.log(softwareHouse.getMonthlySalaryBill());
// softwareHouse.sortAllStaffByName();
// softwareHouse.displayListProgrammers();
// console.log(softwareHouse.updateDepartmentForAdmin(222, "hehe"));
// console.log(softwareHouse.deleteEmployee(222));
softwareHouse.printF();

// HOÀN THÀNH 98%
