function Logger(logString: string) {
  // we can write _ instead of constructor if we dont want its use
  return function(constructor: Function) {
    console.log(logString);
    console.log();
  };
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);


//decorator  factory...the factory returns the fucntion ..wer can configure the fucntion 
//we are getting more power