"use strict";
// getters => access properties
// setters => change (mutate) them
/**
 *
 *
 * @class Department
 */
var Department = /** @class */ (function () {
    // constructor(n: string) {
    //   this.name = n;
    // }
    // shorthand initialization
    // readonly is used to initialize property once
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //private readonly id : string
        // name: string;
        this.employees = [];
    }
    // this keyword is to refer to class property or a method inside a class
    Department.prototype.describe = function () {
        console.log("Department " + (this.id) + " " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('1', "Accounting");
accounting.addEmployee("Ralph");
accounting.addEmployee("Josh");
// accounting.employees[2] = 'ama'// this works when employees array is public
// we don't want to this because we want to maintain one method and approach
accounting.describe();
accounting.printEmployeeInformation();
var accountingCopy = { name: "fred", describe: accounting.describe };
// accountingCopy.describe();
