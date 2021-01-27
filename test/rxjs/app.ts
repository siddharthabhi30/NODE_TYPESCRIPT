function subscribe(subscriber) {
    const intervalId = setInterval(() => {
      subscriber.next('hi');
    }, 1000);
  
    return function unsubscribe() {
      clearInterval(intervalId);
    };
  }
  //todo ===apply paramter to the subscriber functiopn
  const unsubscribe = subscribe({next: (x:string) => console.log(x)});
  
  // Later:
 // dispose the resources