class Department {
  private employees: string[] = [];

  constructor(private readonly id:string, public name:string,){
  }
  describe(this:Department){
    console.log(`${this.id}: ${this.name}`);
  }

  addEmployee(employee:string){
    this.employees.push(employee);
  }
  printEmployeeInfo(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id:string, public admins: string[]){
    super(id, 'IT');
  }
}

const IT = new ITDepartment('001', ['tyroo']);
IT.addEmployee('Tyroo');
IT.addEmployee('Helen');
IT.printEmployeeInfo();
IT.describe();
console.log(IT);
 