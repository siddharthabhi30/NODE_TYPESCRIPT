"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function gap() {
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(" ");
}
var getData = function (param) {
    return rxjs_1.of("retrieved new data with param " + param).pipe();
};
rxjs_1.from([1, 2, 3, 4]).pipe(operators_1.map(function (param) { return getData(param); }), operators_1.mergeAll()).subscribe(function (val) { return console.log(val); });
//it will do the same thing
rxjs_1.from([1, 2, 3, 4]).pipe(operators_1.mergeMap(function (param) { return getData(param); })).subscribe(function (val) { return console.log(val); });
rxjs_1.from([1, 2, 3, 4, 5]).pipe(operators_1.switchMap(function (param) { return getData(param); })).subscribe(function (val) { return console.log(val); });
