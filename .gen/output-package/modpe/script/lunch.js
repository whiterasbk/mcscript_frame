var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var package_test_debug = !true;
if (package_test_debug) ModPackageRootPath = "/storage/emulated/0/JavaScriptProjects/Library/package";
var MainValues =
{ 
	runCode : "",
	runTime : 0,
	maker : "unknown maker",
	extra : "no extra",
    introduction : "introduction",
    time : "unknown time",
	infoMsgTitle: "ScriptInfo",
	infoIconPath: "icon.png",
	infoCopyright: "Copyright(whiter)",
	infoVersion: "unknown version",
	arguments : {
		baseLibs : "libs/lib.bin",
		manifest : "ini/ini.json",
		images : "images/",
		mainDir : "main/",
		icon : "icon.png"
	},
	tags : {
		scripts : "scripts",
		name : "name",
		information : "inf",
		maker : "maker",
		introduction : "introduction",
		time : "time",
		extra : "extra",
		libs : "libs",
		path : "path",
		infoMsgTitle: "msgTitle",
		infoIconPath: "iconPath",
		infoCopyright: "copyright",
		infoVersion: "version",
	},
	libs : [],
	scripts : []
};
var LunchTools =
{
	load : function() { try {
		
		var manifest = new org.json.JSONObject("" + getTextFromPackage(MainValues.arguments.manifest));
		//libs初始化
		var libs = manifest.getJSONArray(MainValues.tags.libs);
		for (var i = 0; i < libs.length(); i++){
			var name = (libs.getJSONObject(i).isNull(MainValues.tags.name) ? "unknown lib_name" : libs.getJSONObject(i).getString(MainValues.tags.name));
			var path = (libs.getJSONObject(i).getString(MainValues.tags.path));
			MainValues.runCode += getTextFromPackage(path) + "\n";
			MainValues.libs.push({'name': name, 'path': path});
		}
		
		//scripts初始化
        var scripts = manifest.getJSONArray(MainValues.tags.scripts);
        for (var i = 0; i < scripts.length(); i++){
            var script = scripts.getJSONObject(i);
            var name = (script.isNull(MainValues.tags.name) ? "unknown script_name" : script.getString(MainValues.tags.name));
			var path = (script.getString(MainValues.tags.path));
			MainValues.runCode += getTextFromPackage(MainValues.arguments.mainDir + path) + "\n";
			MainValues.scripts.push({'name': name, 'path': path});
        }
		
		//information初始化
		if (!manifest.isNull(MainValues.tags.information)){
			var information = (manifest.getJSONObject(MainValues.tags.information));
        	MainValues.maker = (information.isNull(MainValues.tags.maker) ? MainValues.maker : information.getString(MainValues.tags.maker));
			MainValues.introduction = (information.isNull(MainValues.tags.introduction) ? MainValues.introduction : information.getString(MainValues.tags.introduction));
			MainValues.extra = (information.isNull(MainValues.tags.extra) ? MainValues.extra : information.getString(MainValues.tags.extra));
			MainValues.time = (information.isNull(MainValues.tags.time) ? MainValues.time : information.getString(MainValues.tags.time));
			MainValues.infoMsgTitle = (information.isNull(MainValues.tags.infoMsgTitle) ? MainValues.infoMsgTitle : information.getString(MainValues.tags.infoMsgTitle));
			MainValues.infoIconPath = (information.isNull(MainValues.tags.infoIconPath) ? MainValues.arguments.icon : information.getString(MainValues.tags.infoIconPath));
			MainValues.infoCopyright = (information.isNull(MainValues.tags.infoCopyright) ? MainValues.infoCopyright : information.getString(MainValues.tags.infoCopyright));
			MainValues.infoVersion = (information.isNull(MainValues.tags.infoVersion) ? MainValues.infoVersion : information.getString(MainValues.tags.infoVersion));
		}
	} catch(e) {ctx.runOnUiThread(new java.lang.Runnable({run:function(){ new android.app.AlertDialog.Builder(ctx).setTitle("Lunch Exception").setMessage("" + e).setNegativeButton("确定", null).create().show(); }}));} },
	
	backup: function() {
		var file = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/JavaScriptProjects/Library/" + "bin/pack_source.bin");
		var writer = new java.io.BufferedWriter(new java.io.FileWriter(file));
        writer.write(MainValues.runCode);
        writer.close();
	}
};
LunchTools.load();
LunchTools.backup();
eval(MainValues.runCode + (package_test_debug ? "newLevel();" : ""));
function getTextFromPackage(path) { 
	return new java.lang.String(ModPE.getBytesFromTexturePack(path));
}
