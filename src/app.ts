class Department {
  // private id:string;
  // private name:string;
  private employees: string[] = [];

  constructor(public name:string, private readonly id:string){
    // this.name = n;
  }
  describe(this:Department){
    console.log(`${this.name}: ${this.id}`);
  }

  addEmployee(employee:string){
    this.employees.push(employee);
  }
  printEmployeeInfo(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting', '001');
accounting.addEmployee('Tyroo');
accounting.addEmployee('Helen');
accounting.printEmployeeInfo();
 
accounting.describe();