"use strict";
//  unkown types
var userInput;
var userName;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('an error occured', 5000);
