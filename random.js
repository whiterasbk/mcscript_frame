var randomAlgorithms =
{
	range:function(from, to) {
		return from + Math.round(Math.random() * (to - from));
	},
	boolean:function(probablity_true) {
		return Math.random() < (probablity_true == null ? 0.5 : probablity_true) ? true : false;
	}
};
function randomRun(fun, probablity){try
	{
		if (randomAlgorithms.boolean(probablity)){
			fun();
		}
	}
	catch(e){Exception(e);}
}
function randomArray(array) {
	var result = [];
	var record = [];
	for (var i in array){
		var index = randomAlgorithms.range(0, array.length - 1);
		check();
		record.push(index);
		result.push(array[index]);
	}
	
	function check() {
		index = randomAlgorithms.range(0, array.length - 1);
		for (var m in record){
			if (record[m] == index)
				check();
		}
	}
	return result;
}
function randomItem(array){
	return array[randomAlgorithms.range(0, array.length - 1)];
}





