// Code goes here!
 const names: Array<number> = []; // string[]
 const nn:Array<any>=[1,'dd',true]

 const promise:Promise<number>=new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve("done")
     },1000)
 })