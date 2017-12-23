var database = function(path) {
	this.name = getFileName(path);
	this.path = path;
	makeFileExist(this.path);
	var sqlite = android.database.sqlite.SQLiteDatabase.openOrCreateDatabase(this.path, null);

	this.execute = function(code, params) {
		if (params != null) 
			sqlite.execSQL(code, toJavaStringArray(params));
		else 
			sqlite.execSQL(code);
	};

	this.getName = function() {
		return this.name;
	};

	this.getSQL = function () {
		return sqlite;
	};

	this.getVersion = function() {
		return sqlite.getVersion();
	};

	this.rawQuery = function(code, params) {
		if (params != null)
			return sqlite.rawQuery(code, toJavaStringArray(params));
		else
			return sqlite.rawQuery(code, toJavaStringArray([]));
	};
	
	this.getTables = function(){
		var code = "select name as tables, type, sql from sqlite_master";
		var tables = {views:[], tables:[], indexes:[]};
		this.IteratorCursor(code, null, function(cursor){
			var name = cursor.getString(cursor.getColumnIndex("tables")) + "";
			var type = cursor.getString(cursor.getColumnIndex("type")) + "";
			if (type == "table")
				tables.tables.push(name);
			else if (type == "view")
				tables.views.push(name);
			else if (type == "index")
				tables.indexes.push(name);
		});
		return tables;
	};

	this.getAllTables = function(){
		return this.getTables().tables;
	};
	
	this.getTableObj = function(name){
		return new databaseTable(this.path, name);
	};
	
	this.getTablesObj = function(){
		var tables = this.getAllTables();
		var objs = [];
		
		for (var i in tables)
		{
			objs.push(this.getTableObj(tables[i]));
		}
		
		return objs;
	};
	
	this.runTransaction = function (actions) {
		try
		{
			sqlite.beginTransaction();
			try
			{
				actions();
			}
			catch(e){Exception(e);}
			sqlite.endTransaction();
		}
		catch(e)
		{	
			sqlite.setTransactionSuccessful();
			Debug("异常:" + e + "\nSQLite事务执行失败，正在回滚事务");
		}
	};

	this.close = function() {
		sqlite.close();
	};
	
	this.IteratorCursor = function(code, params, action) {
		var c = this.rawQuery(code, params);
		while (c.moveToNext())
		{
			action(c);
		}
	};
};
function databaseTable(path, tableName) {
	var db = new database(path);
	var sql = db.getSQL();
	
	var mdebug = false;

	this.setDebug = function(mode) {
		mdebug = mode;
	};

	this.createOrOpen = function(params, array) {
		var ts = this.getDatabase().getAllTables();
		for(var i in ts)
		{
			if (tableName == ts[i])
				return false;
		}
		
		var code = "create table " + tableName + "(" + params + ")";
		db.execute(code, array);
		DebugTest("successfully", code);
		return true;
	};

	this.createAfterDrop = function(params, array){
		this.drop();
		this.createOrOpen(params, array);
	};
	
	this.insert = function(fields, values, array, params) {
		var mparams = (params == null ? "" : params);
		var code = "";
		if (fields == null || fields == "")
			code = "insert into " + tableName + " values(" + values + ")" + mparams;
		else 
			code = "insert into " + tableName + "(" + fields + ")values(" + values + ")" + mparams;
		db.execute(code, array);
		DebugTest("successfully", codetool(code, array));
	};
	
	this.insertData = function(json, numberMode, params){
		var mparams = (params == null ? "" : params);
		this.getDatabase().getSQL().insert(tableName, mparams, toContentValues(json, numberMode));
	};
	
	this.updateData = function(json, where, where_array, numberMode){
		var mwhere = (where == null ? "" : where);
		this.getDatabase().getSQL().update(tableName, toContentValues(json, numberMode), mwhere, toJavaStringArray(where_array));
	};

	this.update = function(params, array) {
		var code = "update " + tableName + " set " + params;
		db.execute(code, array);
		DebugTest("successfully", codetool(code, array));
	};
	
	this.insertS = function(vaules, array, params){
		this.insert(null, vaules, array, params);
	};
	
	this.insertA = function(array, params){
		var str = [];
		for (var i in array)
		{
			str.push("?");
		}
		this.insert(null, str.join(","), array, params);
	};

	this.deleteFormTable = function(params, array) {
		var mparams = (params == null ? "" : params);
		var code = "delete from " + tableName + " " + mparams;
	    db.execute(code, array);
		DebugTest("successfully", codetool(code, array));
	};

	this.drop = function() {
		var code = "drop table " + tableName;
		db.execute(code);
		DebugTest("successfully", code);
	};

	this.select = function(params, extra, array) {
		var mextra = (extra == null ? "" : extra);
		var mparams = (params == null ? "*" : params);
		var code = "select " + mparams + " from " + tableName + " " +  mextra;
		var result = db.rawQuery(code, array);
		DebugTest("successfully", codetool(code, array));
		return result;
	};

	this.getDatabase = function() {
		return db;
	};

	this.getName = function() {
		return tableName;
	};

	this.close = function() {
		this.getDatabase().close();
	};

	this.runTransaction = db.runTransaction;
	
	this.toArrayJson = function(){
		var results = [];
		db.IteratorCursor("select * from " + tableName, null, function(cursor){
			var json = {};
			for(var i = 0; i < cursor.getColumnCount(); i++){
				json[cursor.getColumnName(i)] = cursor.getString(i);
			}
			results.push(json);
		});
		
		return results;
	};
	
	this. toStringArrayJson = function(){
		var results = "[";
		db.IteratorCursor("select * from " + tableName, null, function(cursor){
			var json = "{";
			for(var i = 0; i < cursor.getColumnCount(); i++){
				var type = cursor.getType(i);
				if (type == CursorType.Blob)
					json += cursor.getColumnName(i) + ":" + cursor.getString(i) + ",";
				else if (type == CursorType.Float)
					json += cursor.getColumnName(i) + ":" + cursor.getString(i) + ",";
				else if (type == CursorType.Int)
					json += cursor.getColumnName(i) + ":" + cursor.getString(i) + ",";
				else if (type == CursorType.Null)
					json += cursor.getColumnName(i) + ":null,";
				else if (type == CursorType.String)
					json += cursor.getColumnName(i) + ":" + '"' + cursor.getString(i) + '"' + ",";
			}
			results += json + "},";
		});
		
		return ToStringJsonArray(ToJavaScriptArray(results + "]"));
	};
	
	function DebugTest(tag, o) {
		if (debug && mdebug) print("<" + tag + ">:" + o);
	}
	
	function codetool(code, array) {
		var result = code;
		if (array != null)
		{
			if (typeof array == "string")
			{
				var ta = array.split(",");
				for (var i in ta)
				{
					result = result.replace(/\?/, ta[i]);
				}
			}
			else
			for (var i in array)
			{
				result = result.replace(/\?/, array[i]);
			}
		}
		return result;
	}
	
	function toContentValues(json, numberMode){
		var values = new android.content.ContentValues();
		for (var i in json)
		{
			var rv = compareValue(json[i], numberMode);
			
			if (json[i] != null)
				values.put(new java.lang.String(i), rv);
			else 
				values.putNull(i);
		}
		DebugTest("content-values", values);
		return values;
	}
	
	function compareValue(v, nm){
		var result;
		var type = typeof v;
		if (type == "string")
			result = new java.lang.String(v);
		else if (type == "number")
		{
			if (nm == null || nm == NumberMode.Integer)
				result = new java.lang.Integer(v);
			else if (nm == NumberMode.Double)
				result = new java.lang.Double(v);
			else if (nm == NumberMode.Float)
				result = new java.lang.Float(v);
			else if (nm == NumberMode.Long)
				result = new java.lang.Long(v);
			else if (nm == NumberMode.Short)
				result = new java.lang.Short(v);
		}
		else if (type == "boolean")
			result = new java.lang.Boolean(v);
		else if (type == "object")
			result = v;
			
		return result;
	}
}
