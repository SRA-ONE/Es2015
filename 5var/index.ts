function myFunction(name:string){
	let greeting;
	if (name === "sravan") {
		 greeting = "hi how are you man?"
	}else{
		 greeting = "good bye"
	}

	console.log(greeting);
}
myFunction("sravan");

var a=1;
var b=2;
var b=5555;
 if(a===1){
 	var a = 20;
 	let b = 30;
 	//let b = 31;/*Error because we canot redeclare in the same block*/
 	console.log("block code:"+a);
 	console.log("block code:"+b);
 }
 console.log(a);
 console.log(b);