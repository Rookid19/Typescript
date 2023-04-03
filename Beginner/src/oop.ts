// getters => access properties
// setters => change (mutate) them

/**
 *
 *
 * @class Department
 */
class Department {

  // to make it available without instantiating this you then add static keyword
  static fiscalYear = 2020;
  //private readonly id : string
  // name: string;

  // private properties can only be accessed inside it class and not outside
  //protected properties can be accessed inside it class and its child class(in other words any class that extends the base class)
  // private employees: string[] = [];
  protected employees: string[] = [];

  // constructor(n: string) {
  //   this.name = n;
  // }

  // shorthand initialization
  // readonly is used to initialize property once
  constructor(private readonly id: string, public name: string) {
    // this keyword wont be able to access static properties thus refer to the
    // instance base on the class but the static properties are not tied to the
    // instance but the class itself
    // console.log(this.fiscalYear)
    console.log(Department.fiscalYear)
  }

  // static methods can be called without instantiating the class
  // static methods are used to create utility functions
  static createEmployee(name: string) {
    return { name: name };
  }

  // this keyword is to refer to class property or a method inside a class

  describe(this: Department) {
    console.log("Department " + this.id + " " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

/**
 * Inheritance ---> We can inherit class Department using extends keyword
 * we can inherit all the properties and methods of Department class
 * @super calls the constructor of the base class
 * @class ITDepartment
 * @extends {Department} 
 */
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    //  always remember to call super() in the constructor of the child class
    super(id, "IT");
  }
}

/**
 *
 *
 * @class AccountingDepartment
 * @extends {Department}
 */
class AccountingDepartment extends Department {
  // private lastReport: string;

  // we can use getter and setter to access private properties
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(
    id: string,
    private reports: string[],
    private lastReport: string = reports[0]
  ) {
    super(id, "Accounting");
    // this.lastReport = reports[0];
  }

  addEmployee(employee: string): void {
    if (employee === "Ralph") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport= text; 
  }

  printReports() {
    console.log(this.reports);
  }
}

 // we call static method directly on the class without not using the new keyword

const employee1 = Department.createEmployee('Akosua');
console.log(employee1,Department.fiscalYear)

const IT = new ITDepartment("1", ["randy"]);

IT.addEmployee("Ralph");
IT.addEmployee("Josh");

// accounting.employees[2] = 'ama'// this works when employees array is public
// we don't want to this because we want to maintain one method and approach

IT.describe();
IT.printEmployeeInformation();

console.log(IT);

const accounting = new AccountingDepartment("2", []);

accounting.mostRecentReport = "My name is barry allen";
accounting.addReport("Something went wrong.....");

console.log(accounting.mostRecentReport)


accounting.addEmployee("Max");
accounting.printReports();

accounting.printEmployeeInformation();
// const accountingCopy = { name: "fred", describe: accounting.describe };

// accountingCopy.describe();
