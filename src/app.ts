class Department {
  // protected keyword allows properties to be accessed in inherited classes
  protected employees: string[] = [];

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

class Accounting extends Department {
  private lastReport: string;
  // getters must return something
  get mostRecentReport(){
    if(this.lastReport){
      return this.lastReport;
    }
    throw new Error('no report found');
  }
  // setters must take an argument
  set mostRecentReport(value:string){
    if(!value){
      throw new Error('please enter a valid value')
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]){
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name:string){
    if(name === 'Tyroo'){
      return
    }
    this.employees.push(name);
  }

  addReport(text:string){
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports(){
    console.log(this.reports);
  }
}

const accounting = new  Accounting('D2', []);
accounting.addEmployee('Tyroo');
accounting.addEmployee('Tyroo');
accounting.addReport('something went wrong');
accounting.printReports();
accounting.printEmployeeInfo();

console.log(accounting.mostRecentReport);
 