function ToJavaArray(array, type) {
	if (array != null) {
		var JavaArray = java.lang.reflect.Array.newInstance(type, array.length);
		for (var i = 0; i < array.length; i++)
			JavaArray[i] = array[i];
		return JavaArray;
	} else {
		return java.lang.reflect.Array.newInstance(type, 0);
	}
}
function toJavaStringArray(array) {
	return ToJavaArray(array, (StringType));
}
function getJavaArray(type, length) {
	return java.lang.reflect.Array.newInstance(type, length);
}
var StriptManager = {
	getAndroidDrawableWithTheme:function(ResourceName) {
		if (typeof ResourceName == typeof 1)
			return ctx.getResources().getDrawable(ResourceName, ctx.getTheme());
		else
			return ctx.getResources().getDrawable(android["R"]["drawable"][ResourceName], ctx.getTheme());
	},
	getAndroidDrawable:function(ResourceName) {
		if (typeof ResourceName == typeof 1)
			return ctx.getResources().getDrawable(ResourceName);
		else
			return ctx.getResources().getDrawable(android["R"]["drawable"][ResourceName]);
	},
	setTheme:function(Theme) {
		if (typeof Theme == typeof 1)
			ctx.setTheme(Theme);
		else
			ctx.setTheme(android['R']['style'][Theme]);
	}
};
function getRunTime(Action) {
	var start = java.lang.System.currentTimeMillis();
	Action.Do();
    var end = java.lang.System.currentTimeMillis();
    return end - start;
}
function Debug(obj) {
	if (debug) {
		Exception(obj.toString());
	} else {
		Toast(obj.toString());
	}
}
function getTime() {
	var date = new Date();
	return date.getFullYear() + "." + add(date.getMonth()) +  "." + date.getDate() + "  " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();  
	function add(m) {
		if (m <= 11)
			return m + 1;
		else
		if (m == 12)
			return 1;
	}
}
function parseJavaFloat(m){
	return java.lang.Float.parseFloat(m.toString());
}
function delayRun(time, fun) {
	new android.os.Handler().postDelayed(new java.lang.Runnable({run:function(){try{fun();}catch(e){Exception(e);}}}), time);
}
function getAppRunTime(){
	return 0;//ScriptLoadingTime;
}
function showScriptInfo(){
	runOnUiThread(function(){
		var is = ModPE.openInputStreamFromTexturePack(MainValues.infoIconPath);
		var icon = ImageView({lp:LayoutParams.getParams(300, 300), i:is});
		
		baseDialog({
			pb:{t:"取消"},
			t:MainValues.infoMsgTitle,
			v:ScrollView({v:LinearLayout({g:Gravity.Centre, lp:Adapters.Params.full, vs:[
				icon,
				TextView({lp:Adapters.Params.wider, t:"作者:" + MainValues.maker}),
				TextView({lp:Adapters.Params.wider, t:"时间:" + MainValues.time}),
				TextView({lp:Adapters.Params.wider, t:"版本:" + MainValues.infoVersion}),
				TextView({lp:Adapters.Params.wider, t:"版权:" + MainValues.infoCopyright}),
				TextView({lp:Adapters.Params.wider, t:"说明:" + MainValues.introduction}),
				TextView({lp:Adapters.Params.wider, t:"备注:" + MainValues.extra})
			]})})
		});
	});
}
