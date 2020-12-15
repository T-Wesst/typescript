"use strict";
var u1 = { name: 'tyroo', age: 28 };
function greet(user) {
    console.log("hello " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if(resultType === 'as-number'){
    //     return parseFloat(result);
    //   } else {
    //     return result.toString();
    //   }
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);
var combineNames = combine('tyroo', 'helen', 'as-text');
console.log(combineNames);
