class Person {
  name:string;
  age:number;
  gender:string;
  constructor(n:string, a:number, g:string){
    this.name = n;
    this.age = a;
    this.gender = g;
  }
  describe(this:Person){
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const tyroo = new Person('Tyroo', 28, 'male');
console.log(tyroo); 
tyroo.describe();