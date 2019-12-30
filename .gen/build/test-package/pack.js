let s = org.json.JSONObject


// for (var i in environment) {
// 	print(i)
// }

let structure = eval("(function(){return " + readFile("structure.json") + ";})()");
for (let e in structure) {
	print(e)
}




