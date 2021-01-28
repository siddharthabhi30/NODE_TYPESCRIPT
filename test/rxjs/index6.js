"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var clicks = rxjs_1.of(1);
var higherOrder = clicks.pipe(operators_1.map(function (ev) {
    return rxjs_1.interval(Math.random() * 2000).pipe(operators_1.take(3));
}), operators_1.take(2));
var result = higherOrder.pipe(operators_1.combineAll());
result.subscribe(function (x) { return console.log(x); });
