var lunch_test_dir = "/storage/sdcard0/JavaScriptProjects/Library/";
var PackValues =
{ 
	libCode : ["", ""],
	libName : {
		base : "base.bin",
		mcpe : "mcpe.bin"
	}
};
var script_orders = 
[
	[
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
		"windows.js",
		"graphics.js",
		"animation.js"
	], 
	[
  		"mcpe/adapters.js",
  		"mcpe/defines.js",
  		"mcpe/builder.js"
	]
];
var PackTools =
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
	load : function(path, index){
		PackValues.libCode[index] += this.readText(lunch_test_dir + path);
	},
	save : function(){
		
		this.writeToFile(lunch_test_dir + "bin/" + PackValues.libName.base, 0);
		this.writeToFile(lunch_test_dir + "package/libs/" + PackValues.libName.base, 0);
		
		this.writeToFile(lunch_test_dir + "bin/" + PackValues.libName.mcpe, 1);
		this.writeToFile(lunch_test_dir + "package/libs/" + PackValues.libName.mcpe, 1);
	},
	writeToFile : function(path, index) {
		var file = new java.io.File(path);
		var writer = new java.io.BufferedWriter(new java.io.FileWriter(file));
        writer.write(PackValues.libCode[index]);
        writer.close();
	}
};

for (var each in script_orders[0]) {
	PackTools.load(script_orders[0][each], 0);
}
for (var each in script_orders[1]) {
	PackTools.load(script_orders[1][each], 1);
}

PackTools.save();
print("finish packing");

