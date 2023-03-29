// getters => access properties
// setters => change (mutate) them

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // this keyword to refer to class property or a method inside we use the this keyword

  describe() {
    console.log("Department " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();

const accountingCopy = { describe: accounting.describe };

accountingCopy.describe();
