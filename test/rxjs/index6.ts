import { fromEvent, interval,of } from 'rxjs';
import { map, combineAll, take } from 'rxjs/operators';
 
const clicks = of(1,2)
const higherOrder = clicks.pipe(
  map(ev =>
     interval(Math.random() * 2000).pipe(take(3))
  ),
 
);
const result = higherOrder.pipe(
  combineAll()
);
 
result.subscribe(x => console.log(x));