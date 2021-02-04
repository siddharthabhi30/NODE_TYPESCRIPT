// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}





function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  //we could have initialized object directly .,,,,but what if we want to do it step by step
  //partial turns into a type where all the properties are optional
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

 
  //partial tells ts that i am creating an object but it has to be partial...at the end ..we need to converty back
  return courseGoal as CourseGoal;
}

//readonly thing is happening here
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();

let arr:(string|number)[]=[]
arr.push(23);
arr.push('d');
console.log(arr)



//truy to enter 23 and starting number
//let arr2:string[]|number[]=[];
//arr2.push(23);
//arr2.push('d');
console.log(arr)

// class check{
//   public arr2:string[]|number[]=[11,88];

//   constructor(num:number){

//     this.arr2.push(num);
//   }
  

// }
// //in generic ttype we lock in a certain type and then doit accoredingly
// //union is flexible 
// let xxx=new check(55);
// console.log(xxx.arr2)
// xxx.arr2.push(23);

let arr4:string[]|number[]=[1,2,3];


function aa<U>(oo:U){
  if(typeof oo=='string'){
   

    return "good"

  }
  else{
    return "np"
  }

 
}


const tyty=aa<string>(322);
console.log(tyty);


interface test{
  name:string
}
class our implements test{
  name:string='';
  id:number=43;

}
function check<T extends test>(node:T){
  console.log(node);
}
//we have extends the interface to have extra property ..
//like classes extends the inteface
check({name:"sid",id:32});