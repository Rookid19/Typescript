"use strict";
// getters => access properties
// setters => change (mutate) them
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    // this keyword is to refer to class property or a method inside a class
    Department.prototype.describe = function () {
        console.log("Department " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.addEmployee("Ralph");
accounting.addEmployee("Josh");
// accounting.employees[2] = 'ama'// this works when employees array is public
// we don't want to this because we want to maintain one method and approach
accounting.describe();
accounting.printEmployeeInformation();
var accountingCopy = { name: "fred", describe: accounting.describe };
// accountingCopy.describe();
