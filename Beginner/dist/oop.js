"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    constructor(id, reports, lastReport = reports[0]) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = lastReport;
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
    addEmployee(employee) {
        if (employee === "Ralph") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Akosua');
console.log(employee1, Department.fiscalYear);
const IT = new ITDepartment("1", ["randy"]);
IT.addEmployee("Ralph");
IT.addEmployee("Josh");
IT.describe();
IT.printEmployeeInformation();
console.log(IT);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting.mostRecentReport = "My name is barry allen";
accounting.addReport("Something went wrong.....");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.describe();
//# sourceMappingURL=oop.js.map