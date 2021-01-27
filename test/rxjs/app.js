function subscribe(subscriber) {
    var intervalId = setInterval(function () {
        subscriber.next('hi');
    }, 1000);
    return function unsubscribe() {
        clearInterval(intervalId);
    };
}
var unsubscribe = subscribe({ next: function (x) { return console.log(x); } });
// Later:
//unsubscribe(); // dispose the resources
