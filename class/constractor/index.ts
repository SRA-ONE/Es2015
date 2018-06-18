class person {
	
	constructor(name) {
		this.name = name;
		console.log(this.name+ "constructor");
	}
	static staticMethod(){
		console.log("static Method");
	}
	greetPerson(){
		console.log("Hello" +this.name);
	}
}
  person.staticMethod();
  let p = new person("sravan");
 p.greetPerson();