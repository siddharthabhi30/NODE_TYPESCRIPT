"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observable = rxjs_1.Observable.create(function (observer) {
    observer.next('Hello World!');
    observer.next('Hllo Again!');
    observer.complete();
    observer.next('Bye');
});
observable.subscribe(function (x) { return logItem(x); }, function (error) { return logItem('Eror: ' + error); }, function () { return logItem('Completed'); });
function logItem(val) {
    console.log(val);
}