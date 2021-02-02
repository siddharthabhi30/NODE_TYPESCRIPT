"use strict";
exports.__esModule = true;
// RxJS v6+
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
//emit every 5s
var source = rxjs_1.interval(5000);
//emit every 1s
var secondSource = rxjs_1.interval(1000);
var example = source.pipe(operators_1.withLatestFrom(secondSource), operators_1.map(function (_a) {
    var first = _a[0], second = _a[1];
    return "First Source (5s): " + first + " Second Source (1s): " + second;
}));
/*
  "First Source (5s): 0 Second Source (1s): 4"
  "First Source (5s): 1 Second Source (1s): 9"
  "First Source (5s): 2 Second Source (1s): 14"
  ...
*/
var subscribe = example.subscribe(function (val) { return console.log(val); });
