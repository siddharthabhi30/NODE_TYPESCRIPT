"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// const clicks = of('click','cick','click').pipe(tap(() => console.log('click')));
// const source = clicks.pipe(map((ev) => interval(1000)));
// source.pipe(
//   switchAll()
// ).subscribe(x => console.log(x));
//what delay does is ...it makes node
var getData = function (param) {
    return rxjs_1.of("retrieved new data with param " + param).pipe(operators_1.delay(5000)
    //why delay changes the working of switch map
    );
};
var final = ['s'];
//https://rxjs-dev.firebaseapp.com/api/operators/switchAll
// from([1,2,3,4]).pipe(
//   map(param => getData(param)),
//   switchAll()
// ).subscribe(val => console.log(val));
//above one is similar to this
rxjs_1.from([1, 2, 3, 4]).pipe(operators_1.map(function (param) { return getData(param); }), operators_1.combineAll()).subscribe(function (val) {
    console.log(val);
});
console.log(final);
