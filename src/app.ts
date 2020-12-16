// const and let
// const userName = 'Max';
// let age = 28;
// age = 29;
// defaults should be set from right
// arrow functions
// const add = (a:number, b:number = 1) =>  a + b;
// valid TS
// const printOutput: (a:number | string) => void = output => console.log(output);
// const printOutput1 = (output: string | number) => console.log(output);
// printOutput(add(5));

// Spread Operator Arrays
const hobbies = ['sports', 'skateboarding'];
const activeHobbies = ['hiking', ...hobbies];
console.log(activeHobbies);

// Spread Operator Objects
const person = {
  fName: 'tyroo',
  age: 28
};

const copiedPerson = {...person};
console.log(copiedPerson);

// Rest Parameters
const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  },0);
};

const addedNumbers = add(5,4,3,2,1);
console.log(addedNumbers);

// Array Destructuring
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
const [a, b, ...rest] = hobbies;
console.log(a,b, rest);
// Object Destructuring
const {fName, age } = person;
console.log(fName, age);
// alias rename property names
const {fName:userName, age:userAge } = person;