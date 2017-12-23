function readText(path) {try
	{
		var reader = new java.io.BufferedReader(new java.io.FileReader(path));
        var buf = java.lang.reflect.Array.newInstance(java.lang.Character.TYPE, 1024 * 20);
        var sb = new java.lang.StringBuilder();
        var lenght = 0;
        while ((lenght = reader.read(buf)) != -1)
        {
            sb.append(java.lang.String.valueOf(buf, 0, lenght));
        }
		reader.close();
        return sb.toString();
	}
	catch(e){Exception(e);}
}
function readByte(path) {try
	{
		var fis = new java.io.FileInputStream(path);
        var buf = java.lang.reflect.Array.newInstance(ByteType, fis.available());
        fis.read(buf);
		fis.close();
		return buf;
	}
	catch(e){Exception(e);}
}
function writeText(content, path, isAppend) {try
	{
		var writer = new java.io.FileWriter(path);
		writer.write(content);
		writer.close();
	}
	catch(e){Exception(e);}
}
function writeByte(content, path) {try
	{
		var fos = new java.io.FileOutputStream(path);
        fos.write(content);
        fos.close();
	}
	catch(e){Exception(e);}
}
function getFileName(params) {
	if (params instanceof java.io.File)
		return params.getName();
	else if (typeof params == "string")
		return new java.io.File(params).getName();
}
function getFile(path){
	return new java.io.File(path.toString());
}
function createNewFile(path){
	var file = new java.io.File(path);
	if (file.exists()) {
		file.createNewFile();
	}
	return file;
}
function makeFileExist(path, type) {
	var file = getFile(path);
	if (file.exists()) return;
	
	if (type == FileType.dir) {
		file.mkdirs();
	} else {
		var parent = getFile(file.getParent());
		parent.mkdirs();
		file.createNewFile();
	}
}
function FileInformation(file){
	var inf;
	
	var file_canExecute = file.canExecute();
    var file_canRead = file.canRead();
    var file_canWrite = file.canWrite();
    var file_absoluteFile = file.getAbsoluteFile();
    var file_exists = file.exists();
    var file_absolutePath = file.getAbsolutePath();
    var file_canonicalFile = file.getCanonicalFile();
    var file_canonicalPath = file.getCanonicalPath();
    var file_freeSpace = file.getFreeSpace();
    var file_name = file.getName();
    var file_parent = file.getParent();
    var file_parentFile = file.getParentFile();
    var file_path = file.getPath();
    var file_totalSpace = file.getTotalSpace();
    var file_usableSpace = file.getUsableSpace();
    var file_isAbsolute = file.isAbsolute();
    var file_isDirectory = file.isDirectory();
    var file_isFile = file.isFile();
    var file_isHidden = file.isHidden();
    var file_lastModified = file.lastModified();
    var file_length = file.length();
    var file_toString = file.toString();
    var file_toURI = file.toURI();
    var file_toURL = file.toURL();
	
	inf = {
		file:file,
		canExecute:file_canExecute,
		canRead:file_canRead,
   		canWrite:file_canWrite,
   		absoluteFile:file_absoluteFile,
   		exists:file_exists,
   		absolutePath:file_absolutePath,
   		canonicalFile:file_canonicalFile,
  		canonicalPath:file_canonicalPath ,
   		freeSpace:file_freeSpace,
    	name:file_name,
        parent:file_parent,
   		parentFile:file_parentFile,
   		path:file_path,
    	totalSpace:file_totalSpace,
    	usableSpace:file_usableSpace,
    	isAbsolute:file_isAbsolute,
   		isDirectory:file_isDirectory,
    	isFile:file_isFile,
   		isHidden:file_isHidden,
   		lastModified:file_lastModified,
  		length:file_length,
    	toString:file_toString,
   		toURI:file_toURI,
   		toURL:file_toURL,
	};
	
	return inf;
}
function fileList(path, actions) {
	var root_file = new java.io.File(path);
	iterator(root_file);

	function iterator(file) {try
		{
			if (file.isFile())
			{
				if (actions.onFile != null) actions.onFile(file);
			}
			else
			{
				var subfiles = file.listFiles();
				if (actions.onDir != null) actions.onDir(file);
				for (var i in subfiles)
				{
					iterator(subfiles[i]);
				}
			}
		}
		catch(e){Exception(e);}
	}
}
function iterateForDirAndFileInformatica(iteratePath){
	var file_count = 0;
	var dir_count = 0;
	var files_size = 0;
	
	fileList(iteratePath, {
		onDir:function(dir){
			//var inf = FileInformation(dir);
			dir_count ++;
		},
		onFile:function(file){
			var inf = FileInformation(file);
			file_count ++;
			files_size += inf.length;
	}});
	
	return {totalSize:files_size, files:file_count, dirs:dir_count, all: file_count + dir_count};
}
function searchFile(path, fileName, searchMode, searchRang){
	var results = new Array();
	var keyword = fileName.replace(/\./g, "\\\\.").replace(/\./g, "\\\\.").replace(/\[/g, "\\\\[").replace(/\]/g, "\\\\]").replace(/\(/g, "\\\\(").replace(/\)/g, "\\\\)").replace(/\{/g, "\\\\{").replace(/\}/g, "\\\\}").replace(/\-/g, "\\\\-").replace(/\^/g, "\\\\^").replace(/\$/g, "\\\\$").replace(/\&/g, "\\\\&").replace(/\|/g, "\\\\|");
	var regexp = new RegExp(".*" + keyword + ".*");
	if (searchMode == SearchMode.Dir){
			fileList(path, {
			onDir:function(dir){
				if (regexp.test("" + dir))
					results.push("" + dir);
			}
		});
	} else
	if (searchMode == SearchMode.File){
			fileList(path, {
			onFile:function(file){
				if (regexp.test("" + file))
					results.push("" + file);
			}
		});
	} else
	if (searchMode == SearchMode.Both || searchMode == null){
			fileList(path, {
			onDir:function(dir){
				if (regexp.test("" + dir))
					results.push("" + dir);
			}, 
			onFile:function(file){
				if (regexp.test("" + file))
					results.push("" + file);
			}
		});
	} 
	return results;
}
