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
const mergedObj2 = merge({ name: "Max", hobbies: ["sports"] }, { age: 40 });
const mergedObj1 = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj2);
function countAndDescribe(element) {
    let decriptionText = "Got no value";
    if (element.length === 1) {
        decriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        decriptionText = "Got " + element.length + " elements";
    }
    return [element, decriptionText];
}
console.log(countAndDescribe("My name is barry allen and i am the fastest man alive"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "roo" }, "name");
const aaa = [{ name: "roo" }, { name: "randy" }, { name: "joe" }];
function removeTest(item) {
    const index = aaa.indexOf(item);
    aaa.splice(index, 1);
}
removeTest({ name: "randy" });
console.log("dataaaa ", aaa);
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
//# sourceMappingURL=generics.js.map