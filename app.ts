//  unkown types
 let userInput: unknown;
 let userName: string;

 userInput = 5;
 userInput = 'max';
if(typeof userInput === 'string') {
  userName = userInput;
}

// never type
function generateError(message: string, code: number): never {
  throw {message, errorCode: code};
}

generateError('an error occured', 5000);