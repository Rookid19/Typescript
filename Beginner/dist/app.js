"use strict";
var _a;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
    Role[Role["TEST"] = 201] = "TEST";
})(Role || (Role = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
/**
 *
 *We can use an enum in TypeScript to define a variable or function parameter with a specific set of allowed values. For example, we could define a function that only accepts values from the Color enum
 * @param {Color} color
 */
function printColor(color) {
    console.log(color);
}
printColor(Color.Red); // logs 0
printColor(Color.Green); // logs 1
printColor(Color.Blue); // logs 2
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
/**
 *
 *
 * @param {(number | string)} input1 // union type
 * @param {(number | string)} input2
 * Literal types allow you to specify that a variable or parameter must have a specific or exact, literal value, rather than just any value of a certain type
 * Example "as-number" | "as-text"
 * @param {("as-number" | "as-text")} resultConversion
 */
function combine(input1, input2, resultConversion //literal types
) {
    if ((resultConversion = "as-number")) {
    }
}
//input1 = Combinable
//input2 = resultConversion
//Given this functions
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result; " + num);
}
// FUNCTIONS AS TYPES
/** @type {Function} */
// let combineValues = Function
var combineValues;
combineValues = add;
//Typescript isn't complaining because its meets typescript criteria thus add is a function and has two parameters
// combineValues = printResult
//Typescript throws an error because the function only has one parameter
// console.log(combineValues(10,8))
/**
 * FUNCTION TYPES AND CALLBACKS
 *
 * @param {number} n1
 * @param {number} n2
 * @param {(num: number) => void} cb
 */
function addAndHandle(n1, n2, cb) {
    var result = n1 * n2;
    cb(result);
}
addAndHandle(10, 5, function (result) {
    console.log(result);
});
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log("my name is ");
var e1 = {
    name: "Max",
    privileges: ["created-server"],
    startDate: new Date(),
};
/**
 * Both Employee or Admin has a key called name so console logging emp.name throws no error
 * but privileges and startDate throws an error unless is been wrapped around an if statement.
 *
 * @param {UnKnownEmployee} emp
 */
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo ...." + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
// we cant use instanceof because we are using interface
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "horse", runningSpeed: 100 });
// TYPE CASTING
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')
var userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi there";
}
function add3(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add3('Joe', 'Kofi');
result.split(' ');
//OPTIONAL CHAINING
var fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// NULLISH COALESCING
var userInput = undefined;
// ?? -> this is called nullish coalescing operator
// if userInput is undefined or null return DEFAULT
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
