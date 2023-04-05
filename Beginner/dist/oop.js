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
        // private properties can only be accessed inside it class and not outside
        //protected properties can be accessed inside it class and its child class(in other words any class that extends the base class)
        // private employees: string[] = [];
        this.employees = [];
        // this keyword wont be able to access static properties thus refer to the
        // instance base on the class but the static properties are not tied to the
        // instance but the class itself
        // console.log(this.fiscalYear)
        console.log(Department.fiscalYear);
    }
    // static methods can be called without instantiating the class
    // static methods are used to create utility functions
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees);
    };
    // to make it available without instantiating this you then add static keyword
    Department.fiscalYear = 2020;
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
        _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartment;
}(Department));
/**
 *
 *
 * @class AccountingDepartment
 * @extends {Department}
 */
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports, lastReport) {
        if (lastReport === void 0) { lastReport = reports[0]; }
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = lastReport;
        return _this;
        // this.lastReport = reports[0];
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        // private lastReport: string;
        // we can use getter and setter to access private properties
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    // we can override methods in the base class
    // some we don't just want to offer an option of overriding a method because that always exists
    //So to sum up: an abstract class is a blueprint for other classes, but can't be used on its own to create objects.
    // You need to create a new class that extends the abstract class to be able to use it to create objects.
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department - ID: " + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === "Ralph") {
            return;
        }
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
// we call static method directly on the class without not using the new keyword
var employee1 = Department.createEmployee('Akosua');
console.log(employee1, Department.fiscalYear);
var IT = new ITDepartment("1", ["randy"]);
IT.addEmployee("Ralph");
IT.addEmployee("Josh");
// accounting.employees[2] = 'ama'// this works when employees array is public
// we don't want to this because we want to maintain one method and approach
IT.describe();
IT.printEmployeeInformation();
console.log(IT);
var accounting = new AccountingDepartment("2", []);
accounting.mostRecentReport = "My name is barry allen";
accounting.addReport("Something went wrong.....");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
// const accountingCopy = { name: "fred", describe: accounting.describe };
// accountingCopy.describe();
