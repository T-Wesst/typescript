const person: {
  name: string;
  age: number;
  hobbies: string[];
  // tuple
  role: [number, string];
} = {
  name: 'tyroo',
  age: 28,
  hobbies: ['gaming', 'skateboarding'],
  role: [2, 'author']
}
// person.role.push('admin'); not enforced by tuple
// person.role[1] = 10;

// tuple does not allow more than two elements
person.role = [0, 'admin', 'user'];

let favoriteActivity: string[];
favoriteActivity = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase()) // TypeScript inference: hobby string
  // console.log(hobby.map()) !! error
}