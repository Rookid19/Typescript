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
const mergedObj2 = merge({ name: "Max",hobbies:['sports'] }, {age:40});

const mergedObj1 = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj2);
