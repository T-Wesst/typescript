function combine(input1: number | string, input2: number | string, resultType: 'as-number' | 'as-text'){
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