"use strict";
const names = [9];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("10");
    }, 2000);
});
promise.then((data) => {
    console.log(data.split(""));
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge({ name: "Max", hobbies: ['sports'] }, { age: 40 });
const mergedObj1 = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj2);
//# sourceMappingURL=generics.js.map