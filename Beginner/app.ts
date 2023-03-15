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
type Combinable = number | string
type ConversionDescriptor =  "as-number" | "as-text" // so we have
//input1 = Combinable
//input2 = resultConversion

//Given this functions
function add(n1:number,n2:number){
  return n1+n2
}

function printResult(num:number) : void {
  console.log('Result; ' + num)
}

// FUNCTIONS AS TYPES

/** @type {Function} */
// let combineValues = Function
let combineValues : (a:number,b:number) => number

combineValues = add;
//Typescript isn't complaining because its meets typescript criteria thus add is a function and has two parameters

// combineValues = printResult
//Typescript throws an error because the function only has one parameter

console.log(combineValues(10,8))
