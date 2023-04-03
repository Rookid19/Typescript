// getters => access properties
// setters => change (mutate) them

/**
 * 
 *
 * @class Department
 */
class Department {
  //private readonly id : string
  // name: string;
  private employees: string[] = [];

  // constructor(n: string) {
  //   this.name = n;
  // }

  // shorthand initialization
  // readonly is used to initialize property once
constructor(private readonly id:string, public name: string){}

  // this keyword is to refer to class property or a method inside a class

  describe(this: Department) {
    console.log("Department " +(this.id)+" " + this.name);
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
class ITDepartment extends Department{
  constructor(id:string, public admins: string[]){
  //  always remember to call super() in the constructor of the child class
    super(id,'IT');
  }
}

/**
 *
 *
 * @class AccountingDepartment
 * @extends {Department}
 */
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id,'Accounting')
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const IT = new ITDepartment('1',['randy']);

IT.addEmployee("Ralph");
IT.addEmployee("Josh");

// accounting.employees[2] = 'ama'// this works when employees array is public
// we don't want to this because we want to maintain one method and approach

IT.describe();
IT.printEmployeeInformation();

console.log(IT)

const accounting = new AccountingDepartment('2',[]);

accounting.addReport("Something went wrong.....");
accounting.printReports();
// const accountingCopy = { name: "fred", describe: accounting.describe };

// accountingCopy.describe();

