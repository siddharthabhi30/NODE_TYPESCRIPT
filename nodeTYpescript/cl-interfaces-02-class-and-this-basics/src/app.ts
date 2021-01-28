class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');

accounting.describe();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

accountingCopy.describe();



class A{
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    return ('Department: ' + this.name);
  }

}



class B{
  name: string;

  constructor(n: string) {
    this.name = n;
  }
//NOW WE Set, object of B can only call this fucntiopn
  describe(this:B) {
    return ('Department: ' + this.name);
  }

}


//we can call the function using call parameter
//and still pass that exact object argument it is asking 


let bb=new B("two");
let aa={name:"one",ame:"shame"}
let ta=bb.describe;


//if this keyword wasnt there then we would be able to 
//call below line without errors
console.log(ta.call(aa),'this can be taken',bb.describe())


//overall one method of a class can manipulate other object if
// if it wants to-- this keyword doesnt mean it is for only one
//class ,unless defined so