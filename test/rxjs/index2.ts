import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';
import { of } from 'rxjs'; 
// emit every 1s, take 2
const source$ = interval(1000).pipe(take(2));
// map each emitted value from source to interval observable that takes 5 values
const example$ = source$.pipe(
  map(val =>
    interval(1000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
);
/*
  2 values from source will map to 2 (inner) interval observables that emit every 1s.
  combineAll uses combineLatest strategy, emitting the last value from each
  whenever either observable emits a value
*/
example$
  .pipe(combineAll())
  .subscribe(console.log);


  const data = of([
    {
      brand: 'porsche',
      model: '911'
    },
    {
      brand: 'porsche',
      model: 'macan'
    },
    {
      brand: 'ferarri',
      model: '458'
    },
    {
      brand: 'lamborghini',
      model: 'urus'
    }
  ]);
  
  // get data as brand+model string. Result: 
  // ["porsche 911", "porsche macan", "ferarri 458", "lamborghini urus"]
  data
    .pipe(
      map(cars => `${cars}`)
    ).subscribe(cars => console.log(cars,"cars "))