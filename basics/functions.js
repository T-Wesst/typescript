"use strict";
// inferred type: number
function add(n1, n2) {
    return n1 + n2;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// void return type
function printResult(num) {
    console.log('result: ' + num);
}
// undefined  type
function printResults(num) {
    console.log('result: ' + num);
    return;
}
printResult(add(5, 12));
// functions as types
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) { console.log(result); });
