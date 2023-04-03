"use strict";
// getters => access properties
// setters => change (mutate) them
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/**
 * Inheritance ---> We can inherit class Department using extends keyword
 * we can inherit all the properties and methods of Department class
 * @super calls the constructor of the base class
 * @class ITDepartment
 * @extends {Department}
 */
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = 
        //  always remember to call super() in the constructor of the child class
        _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var IT = new ITDepartment('1', ['randy']);
IT.addEmployee("Ralph");
IT.addEmployee("Josh");
// accounting.employees[2] = 'ama'// this works when employees array is public
// we don't want to this because we want to maintain one method and approach
IT.describe();
IT.printEmployeeInformation();
console.log(IT);
var accounting = new AccountingDepartment('2', []);
accounting.addReport("Something went wrong.....");
accounting.printReports();
// const accountingCopy = { name: "fred", describe: accounting.describe };
// accountingCopy.describe();
