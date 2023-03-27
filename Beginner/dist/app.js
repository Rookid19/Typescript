"use strict";
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
const person = {
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
let combineValues;
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
    const result = n1 * n2;
    cb(result);
}
addAndHandle(10, 5, (result) => {
    console.log(result);
});
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log("my name is ");
const e1 = {
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
class Car {
    drive() {
        console.log("Driving....");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo ...." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
// we cant use instanceof because we are using interface
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'horse', runningSpeed: 100 });
