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
//[t,String ] it is return type
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

function countAndDescribe2(element: Lengthy): [Lengthy, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}
//we are sending these type of data which are string and array ...both have .length property in them as js internally converts them 
console.log(countAndDescribe('hi there'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe2(['Sports', 'Cooking']));
console.log(countAndDescribe({dd:23,length:33}));



interface again{
  check:number;
}


//error is there but ...in function parameter there wasnt any
let aa:again={
  check:32,
  nn:32

}


