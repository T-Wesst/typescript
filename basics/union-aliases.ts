type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';



type User = {name: string, age: number};
const u1: User = {name: 'tyroo', age: 28};

function greet(user: User){
  console.log(`hello ${user.name}`);
}

function isOlder(user: User, checkAge: number){
  return checkAge > user.age;
}





function combine(input1: Combinable, input2: Combinable, resultType: ConversionDescriptor){
 let result;
  if(typeof input1 === 'number' && typeof input2 === 'number'|| resultType === 'as-number'){
    result = +input1 + +input2;
 } else {
   result = input1.toString() + input2.toString();
 }
 return result;
//   if(resultType === 'as-number'){
//     return parseFloat(result);
//   } else {
//     return result.toString();
//   }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('tyroo', 'helen', 'as-text');
console.log(combineNames);