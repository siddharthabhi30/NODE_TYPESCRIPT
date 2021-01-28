"use strict";
exports.__esModule = true;
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// emit every 1s, take 2
var source$ = rxjs_1.interval(1000).pipe(operators_1.take(2));
// map each emitted value from source to interval observable that takes 5 values
var example$ = source$.pipe(operators_1.map(function (val) {
    return rxjs_1.interval(1000).pipe(operators_1.map(function (i) { return "Result (" + val + "): " + i; }), operators_1.take(5));
}));
/*
  2 values from source will map to 2 (inner) interval observables that emit every 1s.
  combineAll uses combineLatest strategy, emitting the last value from each
  whenever either observable emits a value
*/
example$
    .pipe(operators_1.combineAll())
    .subscribe(console.log);
// const data = of([
//   {
//     brand: 'porsche',
//     model: '911'
//   },
//   {
//     brand: 'porsche',
//     model: 'macan'
//   },
//   {
//     brand: 'ferarri',
//     model: '458'
//   },
//   {
//     brand: 'lamborghini',
//     model: 'urus'
//   }
// ]);
// // get data as brand+model string. Result: 
// // ["porsche 911", "porsche macan", "ferarri 458", "lamborghini urus"]
// data
//   .pipe(
//     map(cars => `${cars}`)
//   ).subscribe(cars => console.log(cars,"cars "))
