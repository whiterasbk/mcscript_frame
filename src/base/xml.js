function XmlPullParser(path, listener) {try
	{
		var xp = org.xmlpull.v1.XmlPullParserFactory.newInstance().newPullParser();
		xp.setInput(new java.io.FileInputStream(path), "utf-8");
		while (xp.getEventType() != XmlPullSign.end_document)
		{
			if (listener != null)
				listener(xp, xp.getEventType(), xmltools(xp));
			xp.next();
		}
	}
	catch(e){Exception(e);}
}
function xmltools(xp) {
	this.getAttributeCount = function(){
		return xp.getAttributeCount();
	};
	this.getAttributeValue = function(name, un){
		return xp.getAttributeValue(un, name);
	};
	this.getName = function(){
		return xp.getName();
	};
}
function getLayoutXmlPullParser()
{
       var paser = null;
      
       var asset = ctx.getResources().getAssets();
       var c = ctx.getAssets().getClass();
       var method= c.getMethod("addAssetPath", new java.lang.String().getClass());
       var cookie = method.invoke(asset, "/sdcard/");
       paser = asset.openXmlResourceParser(cookie, "main.xml");
         
       return paser;
}
