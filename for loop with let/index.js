for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 1000);
};
/*using let */
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
/*when to use let and const*/
var num1;
/*const num2;*/ /* CONSTANT MUST BE INITIALIZED*/
//  const key word are also block scope & are not hoisted
var num2 = 10;
var obj1 = {
    name: "sravan"
};
console.log(obj1.name);
obj1.name = "Reddy";
console.log(obj1.name);
/*sorting */
var a1 = 5;
var b1 = 6;
a1 = a1 + b1; //11
b1 = a1 - b1; //5
a1 = a1 - b1; //6
console.log("a1 value:" + a1);
console.log("b1 value:" + b1);
