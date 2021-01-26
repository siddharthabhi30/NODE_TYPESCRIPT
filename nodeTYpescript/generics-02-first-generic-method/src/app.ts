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


 //below function can extend to integer type string type or any type
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//it is unioning the data
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { naame:"sid",age: 30 });
console.log(mergedObj);

//we get this bcoz we said to ts T and U cant be anything ...it has to be something
//below example will work in  the lower example
const mergedObj2= merge({ name: 'Max', hobbies: ['Sports'] }, 30);



function merge2(objA:Object,objB:Object){
  return Object.assign(objA,objB);
}


//this shouldnt know which type of object is being returneds 
//but it is automatically happening for us
//coz ts doesnt know which type of object is being returned --it is just obj if we hover over function
//we take the help of generic
const mine=merge({name:'sid'},{shame:'ss'})


//we are now saying to ts two different type of object is being passed
//and function is merging both of them 
//this T and U are filled at  
function merge3<T,U>(objA:T,objB:U){
  return Object.assign(objA,objB);
}
//we are telling T should be like this and U should be like this but we dont need to do that ...ts infers
const mine2=merge<{name: string},{shame:string}>({name:'sid'},{shame:'ss'})


//this also works
function merge4(objA:Object,objB:Object){
  return Object.assign(objA,objB);
}

const mine3=merge({name:'sid'},{shame:'ss'})

