interface Greetable {
 readonly name: string ;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  recks:number=44;

  constructor(n: string,public fame:string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}


//interface can be type of object of classes which are inheriting them
let user1: Greetable;

user1 = new Person('Max',"d");

user1.greet('Hi there - I am');
console.log(user1);
//interface can bve implemented butnot type can be inherited
//implement multiple interface 

interface mymy{
  name:string;
}
//object taking interface or type has to be exact same
let checked:mymy;
checked={
  name:"dd"

}

