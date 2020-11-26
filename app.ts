// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // tuple
//   role: [number, string];
// } = {
//   name: 'tyroo',
//   age: 28,
//   hobbies: ['gaming', 'skateboarding'],
//   role: [2, 'author']
// }

// defaults starts at 0, can modify to strings
enum Role { ADMIN, READ_ONLY = 5, AUTHOR = 'Author'};

const person = {
  name: 'tyroo',
  age: 28,
  hobbies: ['gaming', 'skateboarding'],
  role: Role.ADMIN
}


// person.role.push('admin'); not enforced by tuple
// person.role[1] = 10;

// tuple does not allow more than two elements
// person.role = [0, 'admin', 'user'];

let favoriteActivity: string[];
favoriteActivity = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase()) // TypeScript inference: hobby string
  // console.log(hobby.map()) !! error
}

if(person.role === Role.ADMIN){
  console.log('admin');
}