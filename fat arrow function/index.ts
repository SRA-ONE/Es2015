/*Normal javascript function*/

var getval = function(){
	return 10;
}
console.log(getval() +" normal javascript o/p");

/*Fat arrow function*/

const getva = () => "Fat arrow function "+20;
console.log(getva());

/*Fat arrow function with single value*/

const get1 = (m1:any) => "Fat arrow function 1 parameters "+ 10*m1;
 console.log(get1(5));

 /*Fat arrow function with multiple value*/

const get2 = (m2:any,bonus:any) => 10*m2+bonus;
 console.log(get2(5,50));