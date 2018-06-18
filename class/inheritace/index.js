var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name) {
        console.log(name + "perason constructor");
    }
    person.prototype.getID = function () {
        return 10;
    };
    return person;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + "employee constructor");
        return _this;
    }
    employee.prototype.getID = function () {
        return _super.prototype.getID.call(this);
    };
    return employee;
}(person));
var e = new employee("sravan");
console.log(e.getID());
