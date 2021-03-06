type Admin = {
  name: string;
  privileges: string[];
  vame:number;
};

type Employee = {
  name: string;
  startDate: Date;
  lame:number;
};

// interface ElevatedEmployee extends Employee, Admin {}

//intersection is happening here
type ElevatedEmployee = Admin & Employee;
//think about above problem as if two are & ..then if we can make both type by 
//dividing them into two pieces

//for | if we can make one of the type by dividing them


//think about it carefully
type ElevatedEmployee2 = Admin | Employee;

const e2: ElevatedEmployee2 = {
  name: 'Max',
 
  startDate: new Date(),
  lame:34,
  vame:324
};

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
  vame:32
  ,lame:34
};

type Combinable = string |number;
type Numeric = number | boolean;


//typoe number only intersection is happening here -- number is only same in both
type Universal = Combinable & Numeric;

