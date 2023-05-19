// getters => access properties
// setters => change (mutate) them

/**
 *
 *
 * @class Department
 */
abstract class Department {

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
  constructor(protected readonly id: string, public name: string) {
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

  // abstract methods cannot have a body (implementation). Is just a form of a skeleton method that must be implemented in the child class.
 //abstract can be very useful when you want to force a child class to share a common method or property.
  abstract describe(this: Department): void;

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
describe() {
    console.log("IT Department - ID: " + this.id)
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
  private static instance: AccountingDepartment

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

 private constructor(
    id: string,
    private reports: string[],
    private lastReport: string = reports[0],
  ) {
    super(id, "Accounting");
    // this.lastReport = reports[0];
  }

static getInstance(){
  if(AccountingDepartment.instance){
    return this.instance
  }
  this.instance = new AccountingDepartment('d2',[])
  return this.instance
}

  // we can override methods in the base class
  // some we don't just want to offer an option of overriding a method because that always exists
  //So to sum up: an abstract class is a blueprint for other classes, but can't be used on its own to create objects.
  // You need to create a new class that extends the abstract class to be able to use it to create objects.
  describe(){
    console.log("Accounting Department - ID: " + this.id);
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

// const accounting = new AccountingDepartment("2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

accounting.mostRecentReport = "My name is barry allen";
accounting.addReport("Something went wrong.....");

console.log(accounting.mostRecentReport)


accounting.addEmployee("Max");
// accounting.printReports();
// accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = { name: "fred", describe: accounting.describe };

// accountingCopy.describe();
