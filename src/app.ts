const userName = 'Max';
let age = 28;
age = 29;

const add = (a:number, b:number) =>  a + b;
console.log(add(2,5))
// valid TS
const printOutput: (a:number | string) => void = output => console.log(output);
const printOutput1 = (output: string | number) => console.log(output);