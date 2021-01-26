function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function<T extends { new (...args: any[]): {name: string} }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
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

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

//it is like log3
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  //see browser console..value is the thing that contain fucntion
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      //we are binding original object to this method
      //getter body is just extra code that runs before returning some value
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  //we are replacing old property descripttor
  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage(this:any) {
    console.log("some one is calling me")
    console.log(this)
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage();

const button = document.querySelector('button')!;

//without autobind below thing wont work because when we are passing the
//reference of method we are not binding any this to it ....thats why this.message is null
button.addEventListener('click', p.showMessage);

class Printer2 {
  message = 'This wsssssssssssorks!';

  
  showMessage(this:any) {

    console.log(this.message);
  }
}

let nn=new Printer2();
let xx=nn.showMessage;
//undefined will be printed
console.log('see if normal works is printed')
xx.call(p);
console.log("some thing diff")
let xx2=p.showMessage;
xx2.bind(nn);
xx2();
console.log('we cant bind anothjer object ..see below')
xx2.call(nn)
//without autobind below thing wont work because when we are passing the
//reference of method we are not binding any this to it ....thats why this.message is null
//now undefined is printing
button.addEventListener('click', nn.showMessage);
console.log('see if binding can be changed')
xx.call(nn);
xx();
console.log("now binding is to be changed")
xx.bind(p);
xx();
