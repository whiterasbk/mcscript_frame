function vibrator(min) {
	var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
	vibrator.vibrate(min);
}
var PendingIntentFactory = {
	create:function(intent) {
		return android.app.PendingIntent.getActivity(ctx, 0, intent, 0);
	}
};
var notifyFactory = {
	getManager:function() {
		return ctx.getSystemService(ctx.NOTIFICATION_SERVICE);
	},
	newInstance:function(arg) {
		var n = new android.app.Notification.Builder(ctx);

		n.setWhen(java.lang.System.currentTimeMillis());
		n.setAutoCancel(true);
		n.setTicker("Script-->>新消息");
		
		if (arg != null)
		{
			if (arg.AutoCancel != null) n.setAutoCancel(arg.AutoCancel);
			if (arg.Ticker != null) n.setTicker(arg.Ticker);
			if (arg.SmallIcon != null) n.setSmallIcon(arg.SmallIcon);
			if (arg.Title != null) n.setContentTitle(arg.Title);
			if (arg.Text != null) n.setContentText(arg.Text);
			if (arg.When != null) n.setWhen(arg.When);
			if (arg.Intent != null) n.setContentIntent(arg.Intent);

			if (arg.ac != null) n.setAutoCancel(arg.ac);
			if (arg.tick != null) n.setTicker(arg.tick);
			if (arg.icon != null) n.setSmallIcon(arg.icon);
			if (arg.title != null) n.setContentTitle(arg.title);
			if (arg.t != null) n.setContentText(arg.t);
			if (arg.w != null) n.setWhen(arg.w);
			if (arg.i != null) n.setContentIntent(arg.i);
		}
        return n.build();
	},
	notify:function(n, id) {
		this.getManager().notify(id, n);
	},
	cancel:function(id) {
		this.getManager().cancel(id);
	}
};
var AndroidResourceManager = {
	ares:android.content.res.Resources.getSystem(),
	getDrawable:function(res_id, theme){
		if (theme == null) return this.ares.getDrawable(FormatId(res_id));
		else return this.ares.getDrawable(FormatId(res_id), theme);
	},
	getAnimation:function(res_id){
		return android.view.animation.AnimationUtils.loadAnimation(ctx, FormatId(res_id));
	},
	getInterpolator:function(res_id){
		return android.view.animation.AnimationUtils.loadInterpolator(ctx, FormatId(res_id));
	},
	getAssets:function(){
		return this.ares.getAssets();
	},
	getResourceEntryName:function(id){
		return this.ares.getResourceEntryName(FormatId(id));
	},
	getResourceName:function(id){
		return this.ares.getResourceName(FormatId(id));
	},
	getResourcePackageName:function(id){
		return this.ares.getResourcePackageName(FormatId(id));
	},
	getResourceTypeName:function(id){
		return this.ares.getResourceTypeName(FormatId(id));
	}
};
var Assets = {
	open:function(fileName){
		return AndroidResourceManager.getAssets().open(fileName);
	},
	close:function(){
		AndroidResourceManager.getAssets().close();
	},
	list:function(folder){
		return AndroidResourceManager.getAssets().list(folder);
	}
};
function FormatId(id){
	if (typeof id == "number"){
		return id;
	} else
	if (typeof id == "string"){
		return eval("android.R." + id);
	}
}

