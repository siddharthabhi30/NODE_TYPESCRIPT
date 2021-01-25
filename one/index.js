var second = function () {
    setTimeout(function () {
        console.log('second');
        third();
    }, 1000);
};
var third = function () {
    setTimeout(function () {
        console.log('third');
    }, 2000);
};
var fourth = function () {
    setTimeout(function () {
        console.log('fourth');
    }, 3000);
};
var first = function () {
    fourth();
    second();
    setTimeout(function () {
        console.log('end of func one');
    }, 4000);
};
first();
