function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

//below is decorator factory not decorator funtion
//it is returning decorator function
//decorator function gets returned and decorator fucntion can also return a value
//we are returning class which is replacing somethings in original ...eg constructor is getting replaced
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  //..args  is for...we dont know how many parameters the original constructor takes
  //telling ts that original fucntion is creating an object of name property
  return function<T extends { new (...args: any[]): {name: string} }>(
    originalConstructor: T
  ) {
    //we are extending it ...bcoxz we dont want to lose property of constructor function
    return class extends originalConstructor {
      //below code is replacing the old class 
      //now template thing is happening when an instance is created
      //we are ignoring parameters we get with _
      constructor(..._: any[]) {
        //by this we save everything that was in original class 
        super();
        
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';
  //I think the new constructor is workingwhen ts runs not in compilation
  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}


//here we can return new thing ..so that there is get property and also get property
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
//ON LOG2 AND LOG 2 WE can  return something new but not in log4
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}


/// below things doesnt initiate decorators
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
