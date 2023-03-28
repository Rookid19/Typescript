// getters => access properties
// setters => change (mutate) them

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department("Accounting");

console.log(accounting);
