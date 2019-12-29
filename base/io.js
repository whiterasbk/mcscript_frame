/*
	
 */

import {searchMode, } from 'defines.js'

export function readText(path) {try
	{
		let reader = new java.io.BufferedReader(new java.io.FileReader(path));
        let buf = java.lang.reflect.Array.newInstance(java.lang.Character.TYPE, 1024 * 20);
        let sb = new java.lang.StringBuilder();
        let lenght = 0;
        while ((lenght = reader.read(buf)) != -1)
        {
            sb.append(java.lang.String.valueOf(buf, 0, lenght));
        }
		reader.close();
        return sb.toString();
	}
	catch(e){Exception(e);}
}

export function readByte(path) {try
	{
		let fis = new java.io.FileInputStream(path);
        let buf = java.lang.reflect.Array.newInstance(ByteType, fis.available());
        fis.read(buf);
		fis.close();
		return buf;
	}
	catch(e){Exception(e);}
}
export function writeText(content, path, isAppend) {try
	{
		let writer = new java.io.FileWriter(path);
		writer.write(content);
		writer.close();
	}
	catch(e){Exception(e);}
}
export function writeByte(content, path) {try
	{
		let fos = new java.io.FileOutputStream(path);
        fos.write(content);
        fos.close();
	}
	catch(e){Exception(e);}
}
export function getFileName(params) {
	if (params instanceof java.io.File)
		return params.getName();
	else if (typeof params == "string")
		return new java.io.File(params).getName();
}
export function getFile(path){
	return new java.io.File(path.toString());
}
export function createNewFile(path){
	let file = new java.io.File(path);
	if (file.exists()) {
		file.createNewFile();
	}
	return file;
}
export function makeFileExist(path, type) {
	let file = getFile(path);
	if (file.exists()) return;
	
	if (type == FileType.dir) {
		file.mkdirs();
	} else {
		let parent = getFile(file.getParent());
		parent.mkdirs();
		file.createNewFile();
	}
}
export function FileInformation(file){
	return {
		file:file,
		canExecute: file.canExecute(),
		canRead: file.canRead(),
   		canWrite: file.canWrite(),
   		absoluteFile: file.getAbsoluteFile(),
   		exists: file.exists(),
   		absolutePath: file.getAbsolutePath(),
   		canonicalFile: file.getCanonicalFile(),
  		canonicalPath: file.getCanonicalPath(),
   		freeSpace: file.getFreeSpace(),
    	name: file.getName(),
        parent: file.getParent(),
   		parentFile: file.getParentFile(),
   		path: file.getPath(),
    	totalSpace: file.getTotalSpace(),
    	usableSpace: file.getUsableSpace(),
    	isAbsolute: file.isAbsolute(),
   		isDirectory: file.isDirectory(),
    	isFile: file.isFile(),
   		isHidden: file.isHidden(),
   		lastModified: file.lastModified(),
  		length: file.length(),
    	toString:file.toString(),
   		toURI: file.toURI(),
   		toURL: file.toURL(),		
	};
}
export function fileList(path, actions) {
	let root_file = new java.io.File(path);
	iterator(root_file);

	function iterator(file) {try
		{
			if (file.isFile())
			{
				if (actions.onFile != null) actions.onFile(file);
			}
			else
			{
				let subfiles = file.listFiles();
				if (actions.onDir != null) actions.onDir(file);
				for (let i in subfiles)
				{
					iterator(subfiles[i]);
				}
			}
		}
		catch(e){Exception(e);}
	}
}
export function iterateForDirAndFileInformatica(iteratePath){
	let file_count = 0;
	let dir_count = 0;
	let files_size = 0;
	
	fileList(iteratePath, {
		onDir:function(dir){
			//let inf = FileInformation(dir);
			dir_count ++;
		},
		onFile:function(file){
			let inf = FileInformation(file);
			file_count ++;
			files_size += inf.length;
	}});
	
	return {totalSize:files_size, files:file_count, dirs:dir_count, all: file_count + dir_count};
}
export function searchFile(path, fileName, searchMode, searchRang){
	let results = new Array();
	let keyword = fileName.replace(/\./g, "\\\\.").replace(/\./g, "\\\\.").replace(/\[/g, "\\\\[").replace(/\]/g, "\\\\]").replace(/\(/g, "\\\\(").replace(/\)/g, "\\\\)").replace(/\{/g, "\\\\{").replace(/\}/g, "\\\\}").replace(/\-/g, "\\\\-").replace(/\^/g, "\\\\^").replace(/\$/g, "\\\\$").replace(/\&/g, "\\\\&").replace(/\|/g, "\\\\|");
	let regexp = new RegExp(".*" + keyword + ".*");
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
