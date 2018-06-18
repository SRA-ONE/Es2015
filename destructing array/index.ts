let employee = ["sravan","reddy","male"];
//let [fname,lname,gender] = employee;

/*console.log(fname);
console.log(lname);
console.log(gender);*/

/*let[,,gender] = employee;

console.log("displaying gender");
console.log(gender);
*/
let [fname,...elements] = employee;
console.log(fname);
console.log(elements);