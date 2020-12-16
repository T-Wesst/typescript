// const and let
const userName = 'Max';
let age = 28;
age = 29;
// defaults should be set from right
// arrow functions
const add = (a:number, b:number = 1) =>  a + b;
// valid TS
const printOutput: (a:number | string) => void = output => console.log(output);
const printOutput1 = (output: string | number) => console.log(output);
printOutput(add(5));

// Spread Operator Arrays
const hobbies = ['sports', 'skateboarding'];
const activeHobbies = ['hiking', ...hobbies];
console.log(activeHobbies);

// Spread Operator Objects
const person = {
  name: 'tyroo',
  age: 28
};

const copiedPerson = {...person};
console.log(copiedPerson);
