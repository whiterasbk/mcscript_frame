var ScriptCodeStartTime = 0;//java.lang.System.currentTimeMillis();
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var lunch_test_dir = "/storage/sdcard0/JavaScriptProjects/Library/";
var MainValues =
{ 
	runCode : "",
	runTime:0
};
var script_orders = [
	"adapters.js",
	"phone.js", 
	"tools.js", 
	"media.js", 
	"threads.js",
	"windowmanager.js",
	"io.js",
	"intent.js",
	"exceptions.js",
	"zip.js",
	"net.js",
	"database.js",
	"random.js",
	"json.js",
	"xml.js",
	"ini.js",
	"logcat.js",
	"er.js",
	"run.js",
	"windows.js",
	"graphics.js",
	"animation.js",
	"mcpe/adapters.js",
	"mcpe/builder.js",
	"mcpe/defines.js"
];


var MainTools =
{
	readText : function(path) {try
		{
			var reader = new java.io.BufferedReader(new java.io.FileReader(path));
			var buf = java.lang.reflect.Array.newInstance(java.lang.Character.TYPE, 1024 * 100);
			var sb = new java.lang.StringBuilder();
			var lenght = 0;
			while ((lenght = reader.read(buf)) != -1)
			{
				sb.append(java.lang.String.valueOf(buf, 0, lenght));
			}
			return sb.toString();
		}
		catch(e){print(e);}
	},
	load : function(path){
		MainValues.runCode += this.readText(lunch_test_dir + path);
	},
	run : function(){
		eval(MainValues.runCode);
	},
	save : function(){
		var file = new java.io.File(lunch_test_dir + "bin/resource.bin");
		var writer = new java.io.BufferedWriter(new java.io.FileWriter(file));
        writer.write(MainValues.runCode);
        writer.close();
	}
};

for (var script_order in script_orders) {
	MainTools.load(script_orders[script_order]);
}

MainTools.save();
MainTools.run();
var ScriptCodeEndTime = 0;//java.lang.System.currentTimeMillis();
var ScriptLoadingTime = ScriptCodeEndTime - ScriptCodeStartTime;
MainValues.runTime = ScriptLoadingTime;

