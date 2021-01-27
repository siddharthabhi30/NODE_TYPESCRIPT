import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
of(1,2,3).pipe(map(x =>( x + '!!!'))).subscribe(
    (data)=>{
        console.log(data)
    }
); // etc

const observable = new Observable(subscriber => {
  
    setInterval(() => {
        subscriber.next(4);
        
    }, 1000);
    setTimeout(()=>{
            subscriber.complete()
    },3000)
  });
   
  console.log('just before subscribe');
  const subscription =observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });
  //below code will unsubcribe immediately
  //subscription.unsubscribe()
  console.log('just after subscribe');