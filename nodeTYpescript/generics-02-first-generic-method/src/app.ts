// //hover over here
// const names: Array<string> = []; // string[]
// // names[0].split(' ');


// //we are saying this promise will return a number 
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   //error because promise is returning number 
//   data.split(' ');
// })


 
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//it is unioning the data
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { naame:"sid",age: 30 });
console.log(mergedObj);


function merge2(objA:Object,objB:Object){
  return Object.assign(objA,objB);
}


//this shouldnt know which type of object is being returneds 
//but it is automatically happening for us
//coz ts doesnt know which type of object is being returned --it is just obj if we hover over function
//we take the help of generic
const mine=merge({name:'sid'},{shame:'ss'})


//we are now saying to ts two different type of object is being passed
function merge3<T,U>(objA:T,objB:U){
  return Object.assign(objA,objB);
}
const mine2=merge({name:'sid'},{shame:'ss'})

