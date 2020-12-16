const userName = 'Max';
let age = 28;
age = 29;
// defaults should be set from right
const add = (a:number, b:number = 1) =>  a + b;
// valid TS
const printOutput: (a:number | string) => void = output => console.log(output);
const printOutput1 = (output: string | number) => console.log(output);

printOutput(add(5));