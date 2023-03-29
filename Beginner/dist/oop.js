"use strict";
// getters => access properties
// setters => change (mutate) them
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department ' + this.name);
    };
    return Department;
}());
// to refer to class property or a method inside we use the this keyword
var accounting = new Department("Accounting");
accounting.describe();
