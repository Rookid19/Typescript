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
function printColor(color) {
    console.log(color);
}
printColor(Color.Red);
printColor(Color.Green);
printColor(Color.Blue);
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
function combine(input1, input2, resultConversion) {
    if ((resultConversion = "as-number")) {
    }
}
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result; " + num);
}
let combineValues;
combineValues = add;
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
function moveAnimal(animal) {
    let speed;
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
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi there";
}
function add3(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add3('Joe', 'Kofi');
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=app.js.map