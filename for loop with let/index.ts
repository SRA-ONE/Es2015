   for(var i=1;i<=5;i++){
     setTimeout(function(){
     	console.log(i);
     },1000);
 }
  /*using let */
 for(let i=1;i<=5;i++){
 	setTimeout(function(){
 		console.log(i);
 	},1000);
 }

 /*when to use let and const*/
 
 let num1;
 /*const num2;*//* CONSTANT MUST BE INITIALIZED*/
//  const key word are also block scope & are not hoisted
 const num2 = 10;

 const obj1 = {
 	name : "sravan"
 };
 console.log(obj1.name);

obj1.name = "Reddy";
 console.log(obj1.name);


 /*sorting */
let a1 = 5;
let b1 = 6;
   
   a1= a1+b1;//11
   b1= a1-b1;//5
   a1= a1-b1;//6

   console.log("a1 value:"+a1);
   console.log("b1 value:"+b1);
