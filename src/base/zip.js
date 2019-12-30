function UnZipIterator(ZipFilePath, Arguments) {try
	{
		var zf = new java.util.zip.ZipFile(ZipFilePath);
		var entries = zf.entries();
		if (Arguments.onInit != null) Arguments.onInit(zf, entries);

		while (entries.hasMoreElements())
		{
			var entry = entries.nextElement();

			if (entry.isDirectory())
			{
				if (Arguments.onDir != null) Arguments.onDir(zf, entry);
			}
			else
			{
				if (Arguments.onFile != null) Arguments.onFile(zf, entry);
			}
		}
	}
	catch(e){Exception(e);}
}
function UnZip(Path, newPath, Do) {
	UnZipIterator(Path, {onFile:function(zf, entry) {
		
		var buffer_size = Defaults.UnZipBufferSize;
		var is = zf.getInputStream(entry);
		makeFileExist(newPath + entry.getName());
		var fos = new java.io.FileOutputStream(newPath + entry.getName());
		var buffer = getJavaArray(ByteType, buffer_size);
		
		var sign = 0;

		while ((sign = is.read(buffer)) != -1)
		{
			fos.write(buffer, 0, sign);
		}

		fos.close();
		is.close();

		if (Do != null) Do(zf, entry);
	},
	onDir:function(zf, entry) {
		var f = new java.io.File(newPath + entry);
		if (!f.exists())
			f.mkdirs();
			
	}});
}
function ZipIterator(outputPath, Arguments) {
	var zos = null;
	try
	{
		var zos = new java.util.zip.ZipOutputStream(new java.io.FileOutputStream(outputPath));
		if (Arguments.onIterator != null) Arguments.onIterator(zos, put);
		zos.finish();
        zos.close();
	}
	catch(e){Exception(e);}
	
	function put(name, is) 
    {
        zos.putNextEntry(new java.util.zip.ZipEntry(name));
        var length = 0;
        var buf = getJavaArray(ByteType, Defaults.ZipBufferSize);
        while ((length = is.read(buf) ) != -1)
        {
            zos.write(buf, 0, length);
        }
    }
}
function ZipIteratorBytes(outputPath, Arguments) {
	var zos = null;
	try
	{
		var zos = new java.util.zip.ZipOutputStream(new java.io.FileOutputStream(outputPath));
		if (Arguments.onIterator != null) Arguments.onIterator(zos, put, putString);
		zos.finish();
        zos.close();
	}
	catch(e){Exception(e);}
	
	function put(name, bytes) 
    {
        zos.putNextEntry(new java.util.zip.ZipEntry(name));
        zos.write(bytes);
    }
	
	function putString(name, value, charset)
	{
		if (charset == null) 
			put(name, new java.lang.String(value).getBytes());
		else
			put(name, new java.lang.String(value).getBytes(charset));
	}
}
function ZipFilesIterator(outputPath, inputPath, Actions) {
	
	ZipIterator(outputPath, {onIterator:function(zos, put){
		var input = new java.io.File(inputPath);
		zip(inputPath, input, put);
	}});
	
	function zip(name, file, put)
    {
        if (file.isDirectory())
        {
			var list = file.listFiles();
            for (var f in list)
            {
                zip(name, list[f], put);     
            }
        }
        else
        {
			if (Actions.onZip != null) Actions.onZip(file);
        }
    }
}
function ZipFilesIterator(outputPath, inputPath, Actions) {
	
	ZipIterator(outputPath, {onIterator:function(zos, put){
		var input = new java.io.File(inputPath);
		zip(inputPath, input, put);
	}});
	
	function zip(name, file, put)
    {
        if (file.isDirectory())
        {
			var list = file.listFiles();
            for (var f in list)
            {
                zip(name, list[f], put);     
            }
        }
        else
        {
			var entryName = file.getAbsolutePath().substring(new java.lang.String(name).length() + 1);
			var fileStream = new java.io.FileInputStream(file.getPath());
			if (Actions.onZip != null) Actions.onZip(entryName, fileStream, put, file);
        }
    }
}
function Zip$Files(zipPath, inputDir, beZipped, onZip) {
	ZipFilesIterator(zipPath, inputDir, {onZip:function(entryName, fileStream, put, file){
		if (beZipped == null || beZipped == "all")
		{
			put(entryName, fileStream);
			if (onZip != null) onZip(entryName, file);
		}
		else
		{
			for (var i in beZipped)
			{
				if (entryName == beZipped[i])
				{
					put(beZipped[i], new java.io.FileInputStream(inputDir + "/" + beZipped[i]));
					if (onZip != null) onZip(entryName, file);
				}
			}
		}
	}});
}
function ZipAllFile(zipPath, inputDir, onZip){
	Zip$Files(zipPath, inputDir, null, onZip);
}
function getTotalEntriesSize(zf){
	if (zf instanceof java.util.zip.ZipFile)
	{
		var size = 0;
		var entries = zf.entries();
		while(entries.hasMoreElements())
    	{
        	size += entries.nextElement().getSize();
    	}
		return size;
	}
	else if (typeof zf == "string")
	{
		var size = 0;
		var entries = new java.util.zip.ZipFile(zf).entries();
		while(entries.hasMoreElements())
    	{
        	size += entries.nextElement().getSize();
    	}
		return size;
	}
}
