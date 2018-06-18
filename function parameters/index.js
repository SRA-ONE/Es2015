/*let getvalue = function (value=10,bonus=12){
    console.log(value+bonus);
}
getvalue();
getvalue(20);
getvalue(30,20);
getvalue(undefined,90);
*/
var pb = function () { return 0.1; };
var getvalue1 = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * pb(); }
    console.log(value + bonus);
};
getvalue1();
