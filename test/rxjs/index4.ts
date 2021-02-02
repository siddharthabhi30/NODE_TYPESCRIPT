import { fail } from 'assert';
import { fromEvent, interval,of,from } from 'rxjs';
import {delay, switchAll, map, tap,switchMap, combineAll } from 'rxjs/operators';
 
// const clicks = of('click','cick','click').pipe(tap(() => console.log('click')));
// const source = clicks.pipe(map((ev) => interval(1000)));
 
// source.pipe(
//   switchAll()
// ).subscribe(x => console.log(x));

//what delay does is ...it makes node
const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
        delay(5000)
        //why delay changes the working of switch map
      
    )
  }

let final:string[]=['s']
//https://rxjs-dev.firebaseapp.com/api/operators/switchAll
  // from([1,2,3,4]).pipe(
  //   map(param => getData(param)),
  //   switchAll()
   
  // ).subscribe(val => console.log(val));

  //above one is similar to this
  from([1,2,3,4]).pipe(
    map(param => getData(param)),
    combineAll()
   
  ).subscribe(val =>{
  
    console.log(val)
  });

  console.log(final)