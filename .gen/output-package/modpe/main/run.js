function newLevel(){
	clientMessage("§aHello Minecraft");
	clientMessage("长按按钮移动");
	runOnUiThread(function(){
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
	});
}

