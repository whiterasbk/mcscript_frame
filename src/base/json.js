function JsonText(str) {
	let json = new org.json.JSONObject(str);
	
	this.Null = json.Null;
	this.length = json.length();
	
	this.newOne = function(){
		return json.clone();
	};
	this.getJson = function(){
		return json;
	};
	this.isNull = function(name){
		return json.isNull(name);
	};
	this.toString = function(int){
		return (int == null ? json.toString() : json.toString(int));
	};
	this.remove = function(name){
		return json.remove(name);
	};
	this.quote = function(data){
		return json.quote(data);
	};
	this.wrap = function(data){
		return json.wrap(data);
	};
	this.has = function(name){
		return json.has(name);
	};
	this.toJsonArray = function(names){
		return json.toJSONArray(new org.json.JSONArray(ToStringJsonArray(names)));
	};
	this.keys = function(){
		let res = [];
		while(json.keys().hasNext())
            res.push(json.keys().next() + "");
		return res;
	};
	this.names = function(){
		return ToJavaScriptArray(json.names().toString());
	};
	this.put = function(key, value){
		json.put(key + "", value);
	};
	this.putArray = function(key, value){
		json.put(key, org.json.JSONArray(ToStringJsonArray(value)));
	};
	this.putObj = function(key, value){
		json.put(key, org.json.JSONObject(ToStringJsonObject(value)));
	};
	this.get = function(key){
		return json.get(key);
	};
	this.getString = function(key){
		return json.getString(key);
	};
	this.getInt = function(key){
		return json.getInt(key);
	};
    this.getBoolean = function(key){
		return json.getBoolean(key);
	};
    this.getDouble = function(key){
		return json.getDouble(key);;
	};
    this.getLong = function(key){
		return json.getLong(key);
	};
    this.getJsonObject = function(key){
		return json.getJSONObject(key);
	};
	this.getJsonArray = function(key){
		return json.getJSONArray(key);
	};
}

function JsonFile(path){
	
	let json = new org.json.JSONObject(readText(path));
	
	this.Null = json.Null;
	this.length = json.length();
	
	this.newOne = function(){
		return json.clone();
	};
	this.getJson = function(){
		return json;
	};
	this.save = function(){
		writeText(json.toString(), path);
	};
	this.isNull = function(name){
		return json.isNull(name);
	};
	this.toString = function(int){
		return (int == null ? json.toString() : json.toString(int));
	};
	this.remove = function(name){
		return json.remove(name);
	};
	this.quote = function(data){
		return json.quote(data);
	};
	this.wrap = function(data){
		return json.wrap(data);
	};
	this.has = function(name){
		return json.has(name);
	};
	this.toJsonArray = function(names){
		return json.toJSONArray(new org.json.JSONArray(ToStringJsonArray(names)));
	};
	this.keys = function(){
		let res = [];
		while(json.keys().hasNext())
            res.push(json.keys().next() + "");
		return res;
	};
	this.names = function(){
		return ToJavaScriptArray(json.names().toString());
	};
	this.put = function(key, value){
		json.put(key + "", value);
	};
	this.putArray = function(key, value){
		json.put(key, org.json.JSONArray(ToStringJsonArray(value)));
	};
	this.putObj = function(key, value){
		json.put(key, org.json.JSONObject(ToStringJsonObject(value)));
	};
	this.get = function(key){
		return json.get(key);
	};
	this.getString = function(key){
		return json.getString(key);
	};
	this.getInt = function(key){
		return json.getInt(key);
	};
    this.getBoolean = function(key){
		return json.getBoolean(key);
	};
    this.getDouble = function(key){
		return json.getDouble(key);;
	};
    this.getLong = function(key){
		return json.getLong(key);
	};
    this.getJsonObject = function(key){
		return json.getJSONObject(key);
	};
	this.getJsonArray = function(key){
		return json.getJSONArray(key);
	};
}
function JsonArrayFile(path){
	let array = new org.json.JSONArray(readText(path));

	this.length = array.length();
	
	this.newOne = function(){
		return array.clone();
	};
	this.getArray = function(){
		return array;
	};
	this.save = function(){
		writeText(array.toString(), path);
	};
	this.isNull = function(name){
		return array.isNull(name);
	};
	this.toString = function(int){
		return (int == null ? array.toString() : array.toString(int));
	};
	this.remove = function(name){
		return array.remove(name);
	};
	this.join = function(str){
		array.join(str);
	};
	this.put = function(key, value){
		array.put(key + "", value);
	};
	this.putArray = function(key, value){
		array.put(key, org.json.JSONArray(ToStringJsonArray(value)));
	};
	this.putObj = function(key, value){
		array.put(key, org.json.JSONObject(ToStringJsonObject(value)));
	};
	this.get = function(key){
		return array.get(key);
	};
	this.getString = function(key){
		return array.getString(key);
	};
	this.getInt = function(key){
		return array.getInt(key);
	};
    this.getBoolean = function(key){
		return array.getBoolean(key);
	};
    this.getDouble = function(key){
		return array.getDouble(key);;
	};
    this.getLong = function(key){
		return array.getLong(key);
	};
    this.getJsonObject = function(key){
		return array.getJSONObject(key);
	};
	this.getJsonArray = function(key){
		array.getJSONArray(key);
	};
}
function ToStringJsonArray(array){
	let res = "[";
	for (let i in array)
	{
		if (i != array.length - 1) {
			parse(i, ",");
		} else {
			parse(i, "");
		}
	}
	function parse(i, end)
	{
		if ((typeof array[i] == typeof true) || (typeof array[i] == typeof 1))
			res += '' + array [i] + '' + end;
		else if (array[i] instanceof Array)
			res += '' + ToStringJsonArray(array[i]) + '' + end;
		else if (typeof array[i] == typeof function(){})
			res += '' + array [i] + '' + end;
		else if (typeof array[i] == typeof "")
			res += '"' + array [i] + '"' + end;
		else if (typeof array[i] == typeof {})
			res += '' + ToStringJsonObject(array[i]) + '' + end;
	}
	return res + "]";
}
function ToStringJsonObject(obj){
	let res = "{";
	let count = 0;
	let subcount = 0;
	for (let i in obj)
	{
		count ++;
	}
	for (let y in obj)
	{
		subcount ++;
		if (subcount == count)
			parse(y, "");
		else
			parse(y, ",");
	}
	
	function parse(i, end)
	{
		if ((typeof obj[i] == typeof true) || (typeof obj[i] == typeof 1))
			res += '"' + i + '"' + ':' + obj[i] + '' + end;
		else if (obj[i] instanceof Array)
			res += '"' + i + '"' + ':' + ToStringJsonArray(obj[i]) + '' + end;
		else if (typeof obj[i] == typeof function(){})
			res += '"' + i + '"' + ':' + obj[i] + '' + end;
		else if (typeof obj[i] == typeof "")
			res += '"' + i + '"' + ':"' + obj[i] + '"' + end;
		else if (typeof obj[i] == typeof {})
			res += '"' + i + '"' + ':' + ToStringJsonObject(obj[i]) + '' + end;
	}
	return res + "}";
}
function ToJavaScriptArray(str){
	return eval(str);
}
function toJavaScriptObject(str){
	return eval(str);
}








export function json(jstr){
	if (jstr instanceof org.json.JSONObject || jstr instanceof org.json.JSONArray) {
		return eval(jstr.toString())
	} else if (jstr instanceof Array) {
		return new org.json.JSONArray(jstr);
	} else if (jstr instanceof String) {
		return eval(jstr);
	} else if (jstr instanceof Object) {
		return new org.json.JSONObject(jstr);
	} 
}