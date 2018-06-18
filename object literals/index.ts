let fname = "sravan";
let lname = "reddy";

let person = {

	fname,
	lname
}

function createperson(fname,lname,age){

	let fullname = fname+""+lname;

	return{

		fname,
		lname,
		fullname,
		seniar(){
			return age>60;
		}

	}
}

let p = createperson("rose","reddy",29);

console.log(p.fname);
console.log(p.lname);
console.log(p.seniar());
console.log(p.fullname);