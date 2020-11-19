type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;



type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
//this is called index type  
//prop:string is saying i dont know the property typr but it should be string and last string says value of that property mustr be string
// property name should be of type string 
//and above rules has to be applied to all the property name of object referring to this interface 
//we can add as many propertyu as a want i dont have any restriction
[prop: string]: string;

}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  // if  :number is there,then error 
  username: 'Must start with a capital character!',
  //this is intepreted as string
  1232:'sid'
};

interface ss{
  name:string;
}


class Myy implements ErrorContainer{
  [prop:string]:string;
  
}

interface IRawParams {
  [key: string]: string
}

class Foo implements IRawParams {
  [k: string]: string;
}


interface checl{
  name:string;

}


//classes can always have extra propertuy but noit interfaces
class cheker implements checl{
  name:string='ss';
  same:string='dd';
}


//we are basically ts that these way parametrer input can come and then handlke accordingly
function add(a:number,b:string):string;
function add(a:number,b:number):number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}


//now ts correctly infers it is number
const ans=add(2,3);