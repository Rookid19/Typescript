"use strict";
// getters => access properties
// setters => change (mutate) them 
class Department {
    constructor(n) {
        this.name = n;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
