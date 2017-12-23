function StartActivityForFilePort(path) {
	var i = new android.content.Intent();
    i.setAction(android.content.Intent.ACTION_VIEW);
    i.setData(parseURI("file://" + path));
    ctx.startActivity(i);
}
function launchApplication(packageName){
	var pm = ctx.getPackageManager();
    var i = pm.getLaunchIntentForPackage(packageName);
    ctx.startActivity(i);
}
function intentToQQNumber(number){
	ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, parseURI(QQUrl.getNumberUrl(number))));
}
function intentToQQGroup(number){
	ctx.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, parseURI(QQUrl.getGroupUrl(number))));
}
function installAPK(fileName){
    var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
    intent.setDataAndType(android.net.Uri.fromFile(new java.io.File(fileName)), "application/vnd.android.package-archive");
    ctx.startActivity(intent);
}
function unInstallAPP(packageName){
	var intent = new android.content.Intent(android.content.Intent.ACTION_DELETE, parseURI("package:" + packageName));
    ctx.startActivity(intent);
}
