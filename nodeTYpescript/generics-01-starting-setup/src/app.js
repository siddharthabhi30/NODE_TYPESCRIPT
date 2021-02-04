// Code goes here!
var names = []; // string[]
var nn = [1, 'dd', true];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("done");
    }, 1000);
});
