
/*

let ScriptCodeStartTime = 0;//java.lang.System.currentTimeMillis();
ScriptCodeStartTime -> ms.scriptCodeStartTime
let ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
let lunch_test_dir = "/storage/sdcard0/JavaScriptProjects/Library/";
let __lunch_utils =
{ 
	runCode : "",
	runTime:0
};

 */

let ms = {
	scriptCodeStartTime: 0,
	ctx: com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
	__lunch_test_dir: "/storage/sdcard0/JavaScriptProjects/Library/",
	values: {
		runCode : "",
		runTime:0		
	},
	__script_orders: [
		"android/adapters.js",
		"android/phone.js", 
		"tools.js", 
		"android/media.js", 
		"threads.js",
		"android/windowmanager.js",
		"io.js",
		"android/intent.js",
		"exceptions.js",
		"zip.js",
		"android/net.js",
		"android/database.js",
		"random.js",
		"json.js",
		"xml.js",
		"ini.js",
		"android/logcat.js",
		"android/er.js",
		"run.js",
		"android/windows.js",
		"android/graphics.js",
		"android/animation.js",
		"mcpe/adapters.js",
		"mcpe/builder.js",
		"mcpe/defines.js"		
	],

	__lunch_utils: {
		readText : function(path) {try
			{
				let reader = new java.io.BufferedReader(new java.io.FileReader(path));
				let buf = java.lang.reflect.Array.newInstance(java.lang.Character.TYPE, 1024 * 100);
				let sb = new java.lang.StringBuilder();
				let lenght = 0;
				while ((lenght = reader.read(buf)) != -1)
				{
					sb.append(java.lang.String.valueOf(buf, 0, lenght));
				}
				return sb.toString();
			}
			catch(e){print(e);}
		},
		load : function(path){
			this.__lunch_utils.runCode += this.readText(this.__lunch_test_dir + path);
		},
		run : function(){
			eval(this.__lunch_utils.runCode);
		},
		save : function(){
			let file = new java.io.File(this.__lunch_test_dir + "bin/resource.bin");
			let writer = new java.io.BufferedWriter(new java.io.FileWriter(file));
			writer.write(this.__lunch_utils.runCode);
			writer.close();
		}		
	},

	__lunch_exce: function(){
		for (let order in this.__script_orders) {
			this.__lunch_utils.load(this.__script_orders[order]);
		}
		
		this.__lunch_utils.save();
		this.__lunch_utils.run();
		// let ScriptCodeEndTime = 0;//java.lang.System.currentTimeMillis();
		// let ScriptLoadingTime = ScriptCodeEndTime - ScriptCodeStartTime;
		// __lunch_utils.runTime = ScriptLoadingTime;
	}

}

/*
let script_orders = [
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
 */

/*

let MainTools =
{
	readText : function(path) {try
		{
			let reader = new java.io.BufferedReader(new java.io.FileReader(path));
			let buf = java.lang.reflect.Array.newInstance(java.lang.Character.TYPE, 1024 * 100);
			let sb = new java.lang.StringBuilder();
			let lenght = 0;
			while ((lenght = reader.read(buf)) != -1)
			{
				sb.append(java.lang.String.valueOf(buf, 0, lenght));
			}
			return sb.toString();
		}
		catch(e){print(e);}
	},
	load : function(path){
		__lunch_utils.runCode += this.readText(lunch_test_dir + path);
	},
	run : function(){
		eval(__lunch_utils.runCode);
	},
	save : function(){
		let file = new java.io.File(lunch_test_dir + "bin/resource.bin");
		let writer = new java.io.BufferedWriter(new java.io.FileWriter(file));
        writer.write(__lunch_utils.runCode);
        writer.close();
	}
};
 */

/*
for (let script_order in script_orders) {
	MainTools.load(script_orders[script_order]);
}

MainTools.save();
MainTools.run();
let ScriptCodeEndTime = 0;//java.lang.System.currentTimeMillis();
let ScriptLoadingTime = ScriptCodeEndTime - ScriptCodeStartTime;
__lunch_utils.runTime = ScriptLoadingTime;

 */

