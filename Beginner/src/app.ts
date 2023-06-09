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
console.log("my name is ");
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

// SOURCEMAP
// sourceMap acts as bridge which is understood by modern browsers and developers tools to connect
// javascript files to input files

// "outDir": "./dist",
// stores all compiled ts file to js files into the dist folder

// "rootDir": "./src",
/* Specify the root folder within your source files. */

// "noEmitOnError": true,
/* Disable emitting files if any type checking errors are reported. */




















// INTERSECTION TYPES
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["created-server"],
  startDate: new Date(),
};

type UnKnownEmployee = Employee | Admin;

/**
 * Both Employee or Admin has a key called name so console logging emp.name throws no error
 * but privileges and startDate throws an error unless is been wrapped around an if statement.
 *
 * @param {UnKnownEmployee} emp
 */
function printEmployeeInformation(emp: UnKnownEmployee) {
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

  loadCargo(amount: number) {
    console.log("Loading cargo ...." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);

//DISCRIMINATED UNIONS
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

// we cant use instanceof because we are using interface
function moveAnimal(animal: Animal) {
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

// TYPE CASTING
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')
const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there";
}

//INDEX PROPERTIES

interface ErrorContainer{
  [prop:string]:string;
  // eg. email : '' ---> correct because email (prop) is a string and its value is also a string
  // eg. 1 : '' ----> wrong because the prop suppose to be a string not a number
}

// FUNCTIONS OVERLOAD

// type Combinable = string | number;

/**
 * the add3 functions has 3+ overloads for all cases
 *
 * @param {number} a
 * @param {number} b
 * @param {Combinable} a
 * @param {Combinable} b
 * @param {string} a
 * @param {string} b
 * @return {*}  {number}
 */
function add3(a:number,b:number):number
function add3(a:string,b:string):string;
function add3(a:string,b:number):string;
function add3(a:number,b:string):string;
function add3(a:Combinable,b:Combinable){
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString()
  }
  return a+b
}

const result = add3('Joe','Kofi')
result.split(' ')


//OPTIONAL CHAINING
const fetchedUserData ={
  id:'u1',
  name:'Max',
  job:{title:'CEO',description:'My own company'}
}

console.log(fetchedUserData?.job?.title)

// NULLISH COALESCING

const userInput = undefined;

  // ?? -> this is called nullish coalescing operator
  // if userInput is undefined or null return DEFAULT
const storedData = userInput ?? 'DEFAULT';

console.log(storedData)