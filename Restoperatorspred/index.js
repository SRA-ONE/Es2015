// let displaycolors = function(message,...colors){
//   console.log(message);
//   console.log(colors);
//   console.log(arguments.length);
// 	for(let i in colors){
// 		console.log(colors[i])
// 		}
// 	}
// 	  let message = "list of colors"
// 	 displaycolors(message,'red');
// 	 displaycolors(message,'red','blue');
// 	 displaycolors(message,'red','blue','green');
//  let colorarray = ["a","b","c"];
// 		 displaycolors(message,...colorarray);
var displaycolors1 = function () {
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
displaycolors1('red');
displaycolors1('red', 'red');
displaycolors1('red', 'red', 'red');
