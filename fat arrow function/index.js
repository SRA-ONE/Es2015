/*Normal javascript function*/
var getval = function () {
    return 10;
};
console.log(getval() + " normal javascript o/p");
/*Fat arrow function*/
var getva = function () { return "Fat arrow function " + 20; };
console.log(getva());
/*Fat arrow function with single value*/
var get1 = function (m1) { return "Fat arrow function 1 parameters " + 10 * m1; };
console.log(get1(5));
/*Fat arrow function with multiple value*/
var get2 = function (m2, bonus) { return 10 * m2 + bonus; };
console.log(get2(5, 50));
