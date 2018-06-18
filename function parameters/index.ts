/*let getvalue = function (value=10,bonus=12){
	console.log(value+bonus);
}
getvalue();
getvalue(20);
getvalue(30,20);
getvalue(undefined,90);
*/

let pb = () => 0.1
let getvalue1 = function (value=10,bonus= value*pb()){
	console.log(value+bonus);
}
getvalue1();

