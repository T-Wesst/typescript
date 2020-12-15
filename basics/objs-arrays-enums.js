"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role["AUTHOR"] = "Author";
})(Role || (Role = {}));
;
var person = {
    name: 'tyroo',
    age: 28,
    hobbies: ['gaming', 'skateboarding'],
    role: Role.ADMIN
};
// person.role.push('admin'); not enforced by tuple
// person.role[1] = 10;
// tuple does not allow more than two elements
// person.role = [0, 'admin', 'user'];
// avoid any because takes away all advantages of TypeScript === vanilla JS
var favoriteActivity;
favoriteActivity = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // TypeScript inference: hobby string
    // console.log(hobby.map()) !! error
}
if (person.role === Role.ADMIN) {
    console.log('admin');
}
