// getters => access properties
// setters => change (mutate) them

class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  // this keyword is to refer to class property or a method inside a class

  describe(this: Department) {
    console.log("Department " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees); 
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Ralph");
accounting.addEmployee("Josh");

// accounting.employees[2] = 'ama'// this works when employees array is public
// we don't want to this because we want to maintain one method and approach

accounting.describe();
accounting.printEmployeeInformation();

const accountingCopy = { name: "fred", describe: accounting.describe };

// accountingCopy.describe();
