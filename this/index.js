var employee1 = {
    id: 1,
    greet: function () {
        console.log(this.id);
    }
};
employee1.greet();
var employee2 = {
    id: 1,
    greet1: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.id);
        }, 1000);
    }
};
employee2.greet1();
var employee3 = {
    id: 1,
    greet3: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.id);
        }, 1000);
    }
};
employee3.greet3();
