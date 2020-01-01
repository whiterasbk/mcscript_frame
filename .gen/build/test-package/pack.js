let model_path = "../../../src/";
let res_path = "../../../.res/";
let structure = loadJSON("structure.json");

loop(structure);

function loop(json){


	/*
		init output folder
	 */

	let root_dir = "./out/";

	fileList(root_dir, {onDir:function(f){
		print("delting file: " + f)
		f.delete();
	}, onFile:function(f){
		print("delting file: " + f)
		f.delete();
	}});

	let file = new java.io.File(root_dir);

	if (!file.exists()) {
		file.mkdir();
	} 



	loopper(json, root_dir)

	function loopper(structure, rootDir) {
		for (let e in structure) {

			if (typeof structure[e] == "object") {
				// create new folder

				dirAdapt(rootDir + "/" + e);

				loopper(structure[e], rootDir + "/" + new java.lang.String(e).replaceAll("\\[.+\\]", ""));

			} else if (typeof structure[e] == "string") {
				// create new file
			
				let dot = new java.io.File(rootDir + "/" + e);
				fileContentAdapt(dot, structure[e]);			
			}
		}
	}

	function dirAdapt(path) {

		let dir = new java.io.File(path);

		print("creating folder: " + dir);

		let name = dir.getName();

		if (name.contains('[')) {
			
			let front = name.split("\\[")[0];
			let lasts = (name.split("\\[")[1].replaceAll("[\\]\\s]", "")).split(",");

			dir = new java.io.File(dir.getParentFile().getPath() + "/" + front);

			
			dir.mkdir()

			let options = " ";

			for (let i = 0; i < lasts.length; i++) {

				if (lasts[i].equals("@hide")) {
					options += "+h ";
				} else if (lasts[i].equals("@system")) {
					options += "+s ";
				} else if (lasts[i].equals("@readonly")) {
					options += "+r ";
				} else if (lasts[i].equals("@writeonly")) {
					options += "+a ";
				} else if (lasts[i].equals("@index")) {
					options += "+i ";
				} else if (lasts[i].equals("@complete")) {
					options += "+v ";
				} else {
					print("warning: no such attrib option like:" + lasts[i]);
					print("acceptable options: @hide, @system, @readonly, @writeonly, @index, @complete");
				}				
			}

			exec("attrib " + dir.getAbsolutePath() + " " + options).print_err();
			// print(runCommand("cmd", "dir"));
			// print(runCommand("attrib", dir.getAbsolutePath() + " " + options));


		} else {
			dir.mkdir();
		}
	}

	function fileContentAdapt(file, content) {
		
		file.createNewFile();

		print("creating file: " + file)

		if (content == "") {
			return;
		} else {
			if (new java.lang.String(content).contains("@copy-res: ")) {
				let path = new java.io.File(res_path + content.split(": ")[1]);
		
				let fis = new java.io.FileInputStream(path);
        		let buf = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, fis.available());
        		fis.read(buf);
				fis.close();
				
				let fos = new java.io.FileOutputStream(file.getPath());
				fos.write(buf);
				fos.close();							

			} else if (new java.lang.String(content).contains("@copy: ")) {
				let path = new java.io.File(model_path + content.split(": ")[1]);

				let fis = new java.io.FileInputStream(path);
				let buf = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, fis.available());
				fis.read(buf);
				fis.close();
				
				let fos = new java.io.FileOutputStream(file.getPath());
				fos.write(buf);
				fos.close();	
			}  else {
				
				writeText(file.getPath(), content);
			}
		}

	}


}

function loadJSON(path) {
	return eval("(function(){return " + readFile(path) + ";})()");
}

function fileList(path, actions) {
	let root_file = new java.io.File(path);
	iterator(root_file);

	function iterator(file) {
		try {
			if (file.isFile()) {
				if (actions.onFile != null) actions.onFile(file);
			} else {
				let subfiles = file.listFiles();
				if (actions.onDir != null) actions.onDir(file);
				for (let i in subfiles) {
					iterator(subfiles[i]);
				}
			}
		} catch(e){
			print(e);
		}
	}
}

function exec(a) {

	let process = java.lang.Runtime.getRuntime().exec(a);
	
	return {
		process: process, 
		print_err: function() {
			let sb = java.lang.StringBuilder();

			let reader = new java.io.BufferedReader(new java.io.InputStreamReader(process.getInputStream(),"GBK"));
  			let line;
  			while((line = reader.readLine()) != null){
   				sb.append(line);
  			}

			print(sb.toString());		
		}
	};
}

function writeText(path, content) {
	print()
	let writer = new java.io.FileWriter(path);
	writer.write(content);
	writer.close();
}
