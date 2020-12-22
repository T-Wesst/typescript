class Person {
  name:string;
  age:number;
  gender:string;
  constructor(n:string, a:number, g:string){
    this.name = n;
    this.age = a;
    this.gender = g;
  }
}

const tyroo = new Person('Tyroo', 28, 'male');
console.log(tyroo);