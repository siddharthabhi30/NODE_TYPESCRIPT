"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var rxjs_2 = require("rxjs");
rxjs_1.of(1, 2, 3).pipe(operators_1.map(function (x) { return (x + '!!!'); })).subscribe(function (data) {
    console.log(data);
}); // etc
var observable = new rxjs_2.Observable(function (subscriber) {
    setInterval(function () {
        subscriber.next(4);
    }, 1000);
    setTimeout(function () {
        subscriber.complete();
    }, 3000);
});
console.log('just before subscribe');
var subscription = observable.subscribe({
    next: function (x) { console.log('got value ' + x); },
    error: function (err) { console.error('something wrong occurred: ' + err); },
    complete: function () { console.log('done'); }
});
//below code will unsubcribe immediately
//subscription.unsubscribe()
console.log('just after subscribe');
