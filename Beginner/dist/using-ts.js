"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add1(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add1(+input1.value, +input2.value));
});
console.log("how is it going");
