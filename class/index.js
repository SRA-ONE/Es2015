var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.greet = function () {
    };
    return person;
}());
var p = new person();
console.log(p.greet === person.prototype.greet);
