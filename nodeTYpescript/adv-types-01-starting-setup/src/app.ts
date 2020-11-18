
type comb=string|number;

function a(num:comb,num2:comb){
    return num.toString()+num2.toString();

}

class aaq{
    num:number=23;

}
//usiong typeguarding we can do many things..like if we check cc instyance of aaq  then we can call methods of that class
// intellisense will do that two classes inheriting interfcae and having their own method..we can check for if as type guard
//https://alligator.io/typescript/instanceof-guard/#:~:text=The%20instanceof%20operator%20is%20used,declared%20which%20an%20interface%20type%3F 
let cc:aaq=new aaq();
console.log(cc instanceof aaq)


