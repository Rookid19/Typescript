enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200,
  TEST,
}

enum Color {
  Red,
  Green,
  Blue,
}

/**
 *
 *We can use an enum in TypeScript to define a variable or function parameter with a specific set of allowed values. For example, we could define a function that only accepts values from the Color enum
 * @param {Color} color
 */
function printColor(color: Color) {
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
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" //literal types
) {
  if ((resultConversion = "as-number")) {
  }
}

//type Alias
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text"; // so we have
//input1 = Combinable
//input2 = resultConversion

//Given this functions
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result; " + num);
}

// FUNCTIONS AS TYPES

/** @type {Function} */
// let combineValues = Function
let combineValues: (a: number, b: number) => number;

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
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 * n2;
  cb(result);
}

addAndHandle(10, 5, (result) => {
  console.log(result);
});

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
console.log("my name is ")
// generateError("An error occurred!", 500);


// Including and Excluding files

// This has to pasted in tsconfig.json

// "exclude": [
//   "node_modules",
//   "using-ts.ts", // don't compile a file named using-ts.ts,
//   "*.dev.ts", // typescript won't compile all files *.dev.ts 
//   "**/*dev.ts" // any file with this pattern should be excluded
// ] 

// "include": [
//   "app.ts",
//   "using-ts.ts", // compiles a file named using-ts.ts,
// ]

// lib is an option that allows you to specify which default object and features typescript knows

// "lib":[
//    "dom",
//    "es6",
//    "dom.iterable",
//    "scripthost"
// ]

// sourceMap
// sourceMap acts as bridge which is understood by modern browsers and developers tools to connect javascript files to input files

// "outDir": "./dist",
// stores all compiled ts file to js files into the dist folder