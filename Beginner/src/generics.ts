const names: Array<Number> = [9];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("10");
  }, 2000);
});
promise.then((data) => {
  console.log(data.split(""));
});

// function merge(objA: object, objB: object) {
//   return Object.assign(objA,'roo', objB);
// }

// we do type casting for typescript to know what key value we are accessing eg. age and name
// typecsript throws an error if we dont do type casting eg. as {name: string, age: number}
// console.log(mergedObj.age);

// const mergedObj = merge({ name: "Max" }, { age: 30 }) as {
//   name: string;
//   age: number;
// };

// But with generics we don't need to do type casting

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj2 = merge({ name: "Max", hobbies: ["sports"] }, { age: 40 });

const mergedObj1 = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj2);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let decriptionText = "Got no value";
  if (element.length === 1) {
    decriptionText = "Got 1 element";
  } else if (element.length > 1) {
    decriptionText = "Got " + element.length + " elements";
  } 
  return [element, decriptionText];
}

console.log(countAndDescribe("My name is barry allen and i am the fastest man alive"));
// countAndDescribe(["sports", "cooking"]);ddsfdsfdsfsfd

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

extractAndConvert({name:'roo'},'name') 