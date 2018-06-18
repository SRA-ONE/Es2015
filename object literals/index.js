var fname = "sravan";
var lname = "reddy";
var person = {
    fname: fname,
    lname: lname
};
function createperson(fname, lname, age) {
    var fullname = fname + "" + lname;
    return {
        fname: fname,
        lname: lname,
        fullname: fullname,
        seniar: function () {
            return age > 60;
        }
    };
}
var p = createperson("rose", "reddy", 29);
console.log(p.fname);
console.log(p.lname);
console.log(p.seniar());
console.log(p.fullname);
