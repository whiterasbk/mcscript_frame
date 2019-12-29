import {databse} from 'database.js'
import {Defauts} from 'defines.js'


export let Logcat = {
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
		let content = error + "\n";
		let db = new databaseTable(this.LogcatDir, "Logcat");
		db.createOrOpen("time, content");
		db.insertData({time:getTime(), content:content});
		db.close();
	}
};
