class Department {

  
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];
  
  //this cant be initialized without saettin git
  //this means in js ..it is inside the constructor
  public shame:string="dd";

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
//we can inherit from only one class not multiple class
//we may not write constructor--super is called implicitelyv
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    //super should be done first before other initialization
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong...');

accounting.printReports();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

console.log(it.shame);