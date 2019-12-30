/*
	model name: ini.js
	usage:
	for:
	
	PropertiesINI
 */

import {PropertiesINILoadMode} from 'defines.js'

export let PropertiesINI = {
	load : function(path, mode) {
		
		let file = new java.io.File(path);
		if (!file.exists()) 
			file.createNewFile();
		
		this.textFile = file;
		if (mode == PropertiesINILoadMode.TEXT || mode == null){
			this.mark = PropertiesINILoadMode.TEXT;
			this.properties.load(new java.io.FileReader(file));
		}
		else if (mode == PropertiesINILoadMode.XML){
			this.mark = PropertiesINILoadMode.XML;
			this.properties.loadFromXML(new java.io.FileInputStream(file));
		}
	},
	set : function(name, value) {
		this.properties.setProperty(name, value);
	},
	setJson : function(json){
		for (let i in json) {
			this.set(i, json[i]);
		}
	},
	get : function(name) {
		return this.properties.getProperty(name);
	},
	getNames :function() {
		let e = this.properties.keys();
		let results =[];
        while(e.hasMoreElements())
           results.push("" + e.nextElement());
		return results;
	},
	getValues : function() {
		let e = this.properties.elements();
		let results =[];
        while(e.hasMoreElements())
           results.push("" + e.nextElement());
		return results;
	},
	clear : function(){
		this.properties.clear();
	},
	save : function(note) {
		if (this.mark == PropertiesINILoadMode.TEXT) 
			this.properties.store(new java.io.FileWriter(this.textFile), note == null ? "" : note);
		else if (this.mark == PropertiesINILoadMode.XML)
			this.properties.storeToXML(new java.io.FileOutputStream(this.textFile), note == null ? "" : note);
	},

	mark : null,
	textFile : null,
	properties : new java.util.Properties()
};
