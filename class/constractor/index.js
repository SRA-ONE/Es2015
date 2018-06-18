var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
        console.log(this.name + "constructor");
    }
    person.staticMethod = function () {
        console.log("static Method");
    };
    person.prototype.greetPerson = function () {
        console.log("Hello" + this.name);
    };
    return person;
}());
person.staticMethod();
var p = new person("sravan");
p.greetPerson();
