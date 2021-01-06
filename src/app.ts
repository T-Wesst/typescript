class Department {
  // keyword is the default behavior makes properties accessible outside the class
  public name:string;
  // keyword private makes property only accessible within the class
  private employees: string[] = [];

  constructor(n:string){
    this.name = n;
  }
  describe(this:Department){
    console.log(`${this.name}`);
  }

  addEmployee(employee:string){
    this.employees.push(employee);
  }
  printEmployeeInfo(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');
accounting.addEmployee('Tyroo');
accounting.addEmployee('Helen');
accounting.printEmployeeInfo();
 
accounting.describe();