const second=()=>{
    setTimeout(()=>{
        console.log('second');
        third();

    },1000)
}
const third=()=>{
    setTimeout(()=>{
        console.log('third');

    },2000)
}
const fourth=()=>{
    setTimeout(()=>{
        console.log('fourth');
       

    },3000)
   
   
        
}


const first = ()=>{
    
   
    fourth();
   
    second();
    setTimeout(()=>{
        console.log('end of func one')
    },4000)
    
  
}
first();

