Logcat.turnOn();

runOnUiThread(function(){
	print("加载时间:" + getAppRunTime() / 1000 + "秒");
    runTemp();
});



/**
	*var plan = {
	*Ⅰ : database.js(get, transaction),
	*Ⅱ : fileList.Function(),
	*Ⅲ : listView(),
  	*Ⅳ : Intent.js,
	*Ⅴ : random.js
	*logcat错误报告
	参数窗口
	*设置参数保存
};
*/

function runTemp(){
	
	
//	var zipFile = sdcard + "SpeedSoftware/Archives/AVYAAJtpAAA=.zip";
//	var unZipDir = sdcard + "SpeedSoftware/Archives/";
//	UnZip(zipFile, unZipDir);
//	print("解压完成");
	
	
	
	var window = PopupWindow({w:50, h:50, f:false});
	var view = MoveWindowView(Button({
		a:BounceAnimator(1000), 
		b:android.R.drawable.ic_menu_compass, 
		oc:function(v){
			//onClickLinstener
			v.setAnimation(AlphaAnimation({from:0, to:1, d:2000}));
			
			baseDialog({
				t:"你想要做什么？",
				items:{a:["打开sdcard", "显示作者信息", "震动5秒", "打开baidu.com", "查看安卓资源", "查看主题", "文本转语音(TTS)"], oc:function(dialog, which){
					switch(which){
						case 0:
							ExportDialog(sdcard);
							break;
						case 1:
							showScriptInfo();
							break;
						case 2:
							vibrator(5000);
							break;
						case 3:
							WebDialog("http://www.baidu.com", "度娘");
							break;
						case 4:
							AndroidResourceChecker();
							break;
						case 5:
							CheckThemes();
							break;
						case 6:
							InputsDialog({t:"TTS", inputs:[{type:"edit", inf:"请输入你要说的话，可能会有延迟", edt_t:"Hello World"}], done:function(texts){
								print("Standby");
								tts.setLanguage(Locale.English);
								tts.speak(texts[0]);
							}});
							break;
					}
				}},
				pb:{t:"取消"}
			});
		}}), 
	window, function(v){/*onLongClickLinstener*/vibrator(1000);});
	
	window.setContentView(view);
	ShowPop(window);
	
	
	
	
	
	
	
	
	
	
	
	/*
	var path = test_script_dir;
	
	fileList(path, {onDir:function(file){
		print("Dir:" + file);
	}, onFile:function(file){
		print("File:" + file);
	}});
	*/
	//if (LogcatSwitch)
	//Logcat.log("()())()()(");
	//print()();
	
	//writeText("Congratulations\n", "/storage/sdcard0/JavaScriptProjects/Library/testDir/us.log", true);
	/*var path = "/storage/sdcayrd0/JavaScriptProjects/Library/testDir/us.log";
	var writer = new java.io.FileWriter(path);
	writer.append(path);
	writer.close();*/
	
	//vibrator(1000);
	//Logcat.turnOff();
	/*
	var ini = new databaseTable(test_script_dir + "testDir/ini.db", "INI");
	ini.createOrOpen("name, type, content, extra");
	//ini.drop();
	for(var i = 0; i < 10; i++)
		ini.insertData({name:"No." + i, type:"file", content:test_script_dir + "i" + i + ".db"});
	*/
	/*
	var p = PopupWindow({w:100, h:100, v:
	Button({t:"android",
		olc:function(v){
			startNewThread(function(){
				print("开始");
				
				print("结束");
			});
		},
		oc : function(v){
			//print(randomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 25, 6, 256, 7, 5, '6', 'rt', '/']));
			//makeFileExist(test_script_dir + "gh.n/hj/uy", "dir");
			print("hello, minecraft");
		}
	})});
	ShowPop(p);
	ExportDialog(test_script_dir);
	*/
	
	/*var p = PopupWindow({w:100, h:300, v:ListView({oicl:function(p, v, po, i){print("(t;)" +  po);},
	oilcl:function(p, v, po, id){print(po);},
	oisl:{ois:function(p, v, po , i){print("oisl");} , ons:function(p){print("ons");}},
	ad:ListAdapter.array(["==", "()", "}}", "gd", "hhhh", "yfg", "safb", "resc", "syj", "jhc"], SimpleListItemResources.multiple_choice)})});
	ShowPop(p);
	ExportDialog(test_script_dir);
	
	//AndroidTTS.speak("amazing", TTSQueue.add, null, "speech");
	
	//TTSFactory.static_speak(Locale.US, "successfully");
	
	//VideoDialog("/sdcard/Android/data/tv.danmaku.bili/download/7449411/1/lua.mp4.bili2api.1/0.blv");
	
	/*
	var mt = new databaseTable(test_script_dir + "testDir/mydb.db0db", "TestTable");
	mt.setDebug(true);
	mt.create("name integer not null, id varchar primary key, extra varchar");
		mt.insert("name, id", "?, ?", ["xiao", 1]);
		mt.insert("name, id", "?, ?", ["xia ", 2]);
		mt.insert("name, id", "?, ?", ["xing", 3]);
		mt.insertA(["返回结婚", "4", null]);
		mt.insertA(["家伙婚", "5", ""]);
		print(mt.getDatabase().getSQL().inTransaction());
		
	mt.runTransaction(function(){
		print(mt.getDatabase().getSQL().inTransaction());
		mt.updateData({name:"hello", id:9, extra:new java.lang.String(databaseTable+"").getBytes()}, "id like 3", [], NumberMode.Integer);
		mt.updateData({"name":'stupid', extra:getBitmap("/storage/sdcard0/JavaScriptProjects/查看乐谱/picture/查看乐谱-0000001.jpg")}, "id like ?", [2]);
		mt.deleteFormTable("where name like ?", ["xing"]);
		mt.update("name = ? where id like 1", ["小芳"]);
		mt.insertData({name:"hello", id:7, extra:null}, NumberMode.Integer);
		mt.insertData({name:"fuvk", id:8, extra:!true}, NumberMode.Long);
	 
	});
	
	mt.drop();
	mt.close();
	*/
	/*
    InputsDialog({
	   t:"Test",
	   inputs:
	   [
	   	  {type:"file", file_def:"==", path:"/sdcard"},
		  {type:"dir", path:"/"},
	      {type:"rbs", rbs:["内存", "几年", "手机"], rbs_o:0, rbs_color:"#00ef56"},	
		  {type:"checks", checks:["是否", "眼睛"], checks_o:0, checks_color:"#00ef56"},
		  {type:"edit", edt_t:"==="},
		  {type:"rbs", rbs:["内存", "几年", "手机"], rbs_o:0, rbs_color:"#00ef56"},	
		  {type:"checks", checks:["是否", "眼睛"], checks_o:0, checks_color:"#00ef56"},
		  {type:"edit", edt_t:"===", inf:"[jhf]"},
		  
		  {type:"seek", t:"=="}
	   ],
	   done:function(rws){
		   print(rws);
	   }
   });
   */
   //CheckThemes();
  //ExportDialog("/storage/sdcard1/Android/data/");
   //VideoDialog("/storage/sdcard1/Android/data/com.tencent.qqmusic/files/qqmusic/mv/动漫原声 - 某科学的超电磁炮 OP [mqms].mp4");;
//   WebDialog("file:///storage/sdcard0/1-Work-Space-1-JavaScript/Library/temp.html", null, {jse:true}, {
//	   ctx:"
//   });*/
   
   //baseDialog({View:Button({t:"&&&"})});
     
	//ExportDialog("/storage/sdcard1/Android/data/");
    /*MessageDialog("嫁鸡随鸡", "嫁狗随狗", function(){
		print("加载时间:" + getAppRunTime() / 1000 + "秒");
	});
	
	var v = notifyFactory.newInstance({title:"uuu",t:"===", i:PendingIntentFactory.create(new android.content.Intent())});
	notifyFactory.notify(v, 0);
	*/
	//PendingIntentFactory.create()
	//DownloadUtil.download("http://down.shouji.kuwo.cn/star/mobile/kwplayer_ar_kwmusic_m2.apk", "/storage/sdcard0/1-Work-Space-1-JavaScript/Library/temp.html");
	
//	var zipf = "/storage/sdcard0/1-Work-Space-1-JavaScript/Library/testDir/zip.zip";
//	var unzipdir = "/storage/sdcard0/1-Work-Space-1-JavaScript/Library/testDir/zip/";
//	var size = getTotalEntriesSize(zipf);
//	var count = 0;
//	
//	var m = ProgressDialog({Max:size, Title:"unZipping"});
//	m.showDialog();
//	newThread(function(){
//		UnZip(zipf, unzipdir, function(zf, entry){
//			count += entry.getSize();
//			var b = parseInt((count/size) * 100);
//			
//			if (b < 30)
//				m.setText("解压刚刚开始");
//			else if (30 <= b && b < 50)
//				m.setText("解压一小半啦");
//			else if (50 <= b && b < 100)
//				m.setText("解压即将完成");
//			else
//				m.setText("解压完成!");
//			
//			m.setProgress(count);
//			m.setRate("进度:" + b + "%");
//		});
//	}).start();
	//m.dismisDialog();
	
//	var zipf = "/storage/sdcard0/1-Work-Space-1-JavaScript/Library/testDir/zip.zip";
//	var unzipdir = "/storage/sdcard0/1-Work-Space-1-JavaScript/Library/testDir/zip/";
//	var size = getTotalEntriesSize(zipf);
//	var count = 0;
//	
//	var m = ProgressWindow({f:true, max:size, t:"unZipping", color:"#ff0028", os:function(){Toast("你拉也没有用。。");}});
//	m.showWindow();
//	newThread(function(){
//		UnZip(zipf, unzipdir, function(zf, entry){
//			count += entry.getSize();
//			var b = parseInt((count/size) * 100);
//			
//			if (b < 30)
//				m.setText("解压刚刚开始");
//			else if (30 <= b && b < 50)
//				m.setText("解压一小半啦");
//			else if (50 <= b && b < 100)
//				m.setText("解压即将完成");
//			else
//				m.setText("解压完成!");
//			
//			m.setProgress(count);
//			m.setRate("进度:" + b + "%");
//		});
//	}).start();
//	
	//var m = ProgressWindow({Title:"yes?", Width:300, Height:125});
	//m.showWindow();
}



/*

File audioFile = new File(Environment.getExternalStorageDirectory(), "123.mp3");
Uri uri = Uri.parse(audioFile.getAbsolutePath());
Intent intent = new Intent(Intent.ACTION_MAIN);
intent.setAction(Intent.ACTION_DEFAULT);
// intent.addCategory(Intent.CATEGORY_APP_MUSIC);
intent.setDataAndType(uri, "audio/*");
startActivity(intent);

或者

var b = new databaseTable(test_script_dir + "testDir/ini.db", "INI");
			print(b.toArrayJson());
			var db = b.toArrayJson();
			var t = [];
			
			for(var i in db) {
				var o = {};
				for(var j in db[i]) {
					print(j + ":" + db[i][j]);
					o[j] = db[i][j];
				}
				t.push(o);
			}
			print(ToStringJsonArray(o));
			//print(ToStringJsonArray(b.toArrayJson()), test_script_dir + "testDir/db.json");
			



File audioFile = new File(Environment.getExternalStorageDirectory(), "123.mp3");
Uri uri = Uri.parse(audioFile.getAbsolutePath());
Intent intent = new Intent(Intent.ACTION_VIEW);
// intent.addCategory(Intent.CATEGORY_APP_MUSIC);
intent.setDataAndType(uri, "audio/*");
startActivity(intent);*/

