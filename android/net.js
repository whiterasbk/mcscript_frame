var DownloadUtil_d = {
	download:function(urlPath, savePath, onRead) {

		var progress = 0;
		var url = new java.net.URL(urlPath);
		var conn = url.openConnection();
		initConnection(conn);

		var fileSize = conn.getContentLength();
		var file = new java.io.RandomAccessFile(savePath, "rw");
		file.setLength(fileSize);

		var is = conn.getInputStream();

		var buffer = getJavaArray(ByteType, Defaults.DownloadBufferSize);
		var hasRead = 0;

		while (((hasRead = is.read(buffer)) > 0))
		{
			file.write(buffer, 0, hasRead);
			progress += hasRead;
			if (onRead != null) onRead(progress, fileSize);
		}

		file.close();
		is.close();
		conn.disconnect();
	}
};

function initConnection(conn) {
	conn.setReadTimeout(Defaults.ConnectionTimeout);
	conn.setRequestMethod("GET");
	conn.setRequestProperty("Accept", "image/gif, image/jpeg, image/pjpeg, image/pjpeg, application/x-shockwave-flash, application/xaml+xml, application/vnd.ms-xpsdocument, application/x-ms-xbap, application/x-ms-application, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/msword, */*");
	conn.setRequestProperty("Accept-Language", "zh-CN");
	conn.setRequestProperty("Charset", "UTF-8");
}
function parseURI(uri){
	return android.net.Uri.parse(uri);
}
var DownloadUtil = {
	url:null,
	path:null,
	timeoutAction:null,
	timeout:400,
	bufferSize:256,
	setUrl:function(url){
		this.url = url;
	},
	setDownLoadPath:function(path){
		this.path = path;
	},
	setTimeout:function(time){
		this.timeout = time;
	},
	setTimeoutAction:function(fun){
		try {
			this.timeoutAction = fun;
		} catch(e) { Exception(e);}
	},
	setBufferSizs:function(size){
		this.bufferSize = size;
	},
	download:function(){
		
		var tmpFile = new java.io.File(getFile(this.path).getParent());
    	if (!tmpFile.exists()){
    		tmpFile.mkdir();
    	}
    	var file = new java.io.File(this.path);
		
		var url = new java.net.URL(this.url);
    	var conn = url.openConnection();
    	var is = conn.getInputStream();
    	var fos = new java.io.FileOutputStream(file);
    	var buf = getJavaArray(ByteType, this.bufferSize);
    	conn.connect();
    	var count = 0;
    	if (conn.getResponseCode() >= this.timeout)
    	{
    		if (this.timeoutAction != null) this.timeoutAction();
    	} else {
    		while (count <= 100) {
        		if (is != null) {
            		var numRead = is.read(buf);
                	if (numRead <= 0) {
                		break;
                	} else {
                		fos.write(buf, 0, numRead);
              		}

          		}
            	else
                	break;
        	}	
   		}
	
		conn.disconnect();
    	fos.close();
    	is.close();

    	return file;
	},
	downloadByThread:function(){
		startNewThread(function(){
			DownloadUtil.download();
		});
	},
	reset:function(){
		this.path = null;
		this.url = null;
		this.timeoutAction = null;
		this.timeout = 400;
		this.bufferSize = 256;
	}
};









/*
function DownloadFile(httpUrl, fileName, downloadPath, Timeout) {
    var tmpFile = new java.io.File(downloadPath);
    if (!tmpFile.exists()){
    	tmpFile.mkdir();
    }
    var file = new java.io.File(downloadPath + fileName);
	var url = new java.net.URL(httpUrl);
    var conn = url.openConnection();
    var is = conn.getInputStream();
    var fos = new java.io.FileOutputStream(file);
    var buf = getJavaArray(java.lang.Byte.TYPE, 256);
    conn.connect();
    var count = 0;
    if (conn.getResponseCode() >= 400)
    {
    	if (Timeout != null) Timeout();
    } else {
    	while (count <= 100) {
        	if (is != null) {
            	var numRead = is.read(buf);
                if (numRead <= 0) {
                	break;
                } else {
                	fos.write(buf, 0, numRead);
              	}

          	}
            else
                break;
        }
   	}
	
	conn.disconnect();
    fos.close();
    is.close();

    return file;
}*/
