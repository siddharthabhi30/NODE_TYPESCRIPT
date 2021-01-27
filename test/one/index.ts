let pp=new Promise((resolve, reject) => {
 // setTimeout(() => reject(new Error("Whoops!")), 1000);

 setTimeout(() => {
  resolve("done")
 }, 3000);
}).then(result=>{
  console.log(result)
})
 


// const handle=async ()=>{

//   try{
//     const result=await pp;
//   }
//   catch{
//     console.log("result")
//   }
 

// }


//handle();

console.log("ff")