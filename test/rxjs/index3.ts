import { of, from } from 'rxjs'; 
import { map, delay, mergeAll ,mergeMap ,switchMap} from 'rxjs/operators';


function gap(){

    console.log(" ")
    console.log(" ")
    console.log(" ")  ;  console.log(" ");
    console.log(" ")
    console.log(" ")
}

const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
        //why delay changes the working of switch map
      delay(1000)
    )
  }
  
  from([1,2,3,4]).pipe(
    map(param => getData(param)),
    mergeAll()
  ).subscribe(val => console.log(val));


  //it will do the same thing as above one
  from([1,2,3,4]).pipe(
    mergeMap(param => getData(param))
  ).subscribe(val => console.log(val));


  from([1,2,3,4,5]).pipe(
    switchMap(param => getData(param))
  ).subscribe(val => console.log(val));
  
