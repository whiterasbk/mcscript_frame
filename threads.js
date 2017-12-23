function runOnUiThread(fun){
	var result = null;
	ctx.runOnUiThread(new java.lang.Runnable({run : function(){
		try
		{
			result = fun();
		}
		catch(e){Exception(e);}
	}}));
	return result;
}
function newThread(fun){
	return new java.lang.Thread(new java.lang.Runnable({run:function(){try{fun();}catch(e){Exception(e);}}}));
}
function startNewThread(fun){
	newThread(fun).start();
}
var publicThread = newThread(function(){
	while(true)
	{
		updataSeeks();
		publicThread.sleep(2000);
	}
});
publicThread.start();


