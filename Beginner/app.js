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
    role: Role.ADMIN
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
function addAndHandle(n1, n2, cb) {
    var result = n1 * n2;
    cb(result);
    return result;
}
console.log(addAndHandle(10, 5, function (result) { }));
