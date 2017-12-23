var Logcat = {
	LogcatDir : Defaults.LogcatDir,
	setDir : function(path){
		this.LogcatDir = path;
	},
	turnOn : function(){
		LogcatSwitch = true;
	},
	turnOff : function(){
		LogcatSwitch = false;
	},
	log : function(error){
		if (!LogcatSwitch) return;
		var content = error + "\n";
		var db = new databaseTable(this.LogcatDir, "Logcat");
		db.createOrOpen("time, content");
		db.insertData({time:getTime(), content:content});
		db.close();
	}
};
