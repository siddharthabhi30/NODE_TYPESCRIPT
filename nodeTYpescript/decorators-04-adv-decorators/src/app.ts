function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate2(template: string, hookId: string) {
  return function(constructor: any|Function) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

// @Logger('LOGGING - PERSON')
@WithTemplate2('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creatinffffffgffg person object...');
  }
}

const pers = new Person();

console.log(pers);
