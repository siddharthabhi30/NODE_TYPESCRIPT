//number of argument depends on where you used decorators

//actually we are getting constructor of a class using logger
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}
//it is use bcoz of tscofig file..see it
@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}


//if we comment out below function we ll still get the logging done....decorators are initiated when class is defined...wehgen constructor is defined
//const pers = new Person();

//console.log(pers);

