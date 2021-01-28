interface Greetable {
  //it says that we inheriting class can't change its value more than once...it can also be used 
  //for type
 readonly name: string ;

  greet(phrase: string): void;
}

class Person implements Greetable {
  //we dont have to write readonly everywhere
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
//interface can be implemented but not type can be inherited
//implement multiple interface 

interface mymy{
  readonly name:string;
}
//object taking interface or type has to be exact same
let checked:mymy;
checked={
  name:"dd"

}
//err coz of readonly
checked.name="dd";

