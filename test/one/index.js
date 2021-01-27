var pp = new Promise(function (resolve, reject) {
    // setTimeout(() => reject(new Error("Whoops!")), 1000);
    setTimeout(function () {
        resolve("done");
    }, 3000);
}).then(function (result) {
    console.log(result);
});
// const handle=async ()=>{
//   try{
//     const result=await pp;
//   }
//   catch{
//     console.log("result")
//   }
// }
//handle();
console.log("ff");
