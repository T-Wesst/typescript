// const person: {
//   name: string;
//   age: number;
// } = {
  const person = {
  name: 'tyroo',
  age: 28,
  hobbies: ['gaming', 'skateboarding']
}

let favoriteActivity: string[];
favoriteActivity = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase()) // TypeScript inference: hobby string
  // console.log(hobby.map()) !! error
}