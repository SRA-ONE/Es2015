class person{
	
	constructor(name) {
		console.log(name + "perason constructor");
	}
	getID(){
		return 10;
	}
}
class employee extends person {
	
	constructor(name) {
		super(name);
		console.log(name + "employee constructor");
	}
	getID(){
		return super.getID();
	}
}
 
 let e =new employee("sravan");
 console.log(e.getID());