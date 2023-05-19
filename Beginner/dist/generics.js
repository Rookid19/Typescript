"use strict";
var names = [9];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('10');
    }, 2000);
});
promise.then(function (data) {
    data.split(" ");
});
