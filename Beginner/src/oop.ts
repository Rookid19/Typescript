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

const accounting = new Department('1',"Accounting");

accounting.addEmployee("Ralph");
accounting.addEmployee("Josh");

// accounting.employees[2] = 'ama'// this works when employees array is public
// we don't want to this because we want to maintain one method and approach

accounting.describe();
accounting.printEmployeeInformation();

const accountingCopy = { name: "fred", describe: accounting.describe };

// accountingCopy.describe();
