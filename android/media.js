var ScriptMediaPlayer = new android.media.MediaPlayer();
var media_seek_onLongClicked = false, media_seek_tpopx = 0, media_seek_tpopy = 0, media_seek_mX, media_seek_mY;
var media = {
	play:function(path, mode){
		if (ScriptMediaPlayer.isPlaying())
			ScriptMediaPlayer.stop();
		ScriptMediaPlayer.reset();
		
		if (mode == null || mode == MediaMode.Local)
			ScriptMediaPlayer.setDataSource(path);
		else if (mode == MediaMode.URL)
			ScriptMediaPlayer.setDataSource(this, parseURI(path));
		
		ScriptMediaPlayer.prepare();
		ScriptMediaPlayer.start();
		
		media_controller_seek.setMax(ScriptMediaPlayer.getDuration());
	},
	stop:function(){
		if (ScriptMediaPlayer.isPlaying())
			ScriptMediaPlayer.stop();
	},
	pause:function(){
		if (ScriptMediaPlayer.isPlaying())
			ScriptMediaPlayer.pause();
	},
	seekTo:function(num){
		if (ScriptMediaPlayer.isPlaying())
			ScriptMediaPlayer.seekTo(num);
	},
	start:function(){
		ScriptMediaPlayer.start();
	},
	isplaying:function(){
		return ScriptMediaPlayer.isPlaying();
	}
};
var media_controller_seek = SeekBar({lp:Adapters.Params.wider, osc:{osp:function(seek, int){
	if (ScriptMediaPlayer.isPlaying())
		media.seekTo(seek.getProgress());
}}});
var media_controller_layout = LinearLayout({b : Defaults.media_controller_Background, vs:[
	media_controller_seek,
	LinearLayout({o:0, lp:Adapters.Params.wider, g:Gravity.Right, vs:[
		Button({b:android.R.drawable.ic_media_pause, lp:LayoutParams.getParams(50, 50), oc:function(v){
			if (media.isplaying())
			{
				v.setBackgroundDrawable(getBitmap(android.R.drawable.ic_media_play));
				media.pause();
			}
			else
			{
				v.setBackgroundDrawable(getBitmap(android.R.drawable.ic_media_pause));
				media.start();
			}
		}, olc:function(){media_controller_window.dismiss();}}),
		Button({b:android.R.drawable.ic_menu_compass, lp:LayoutParams.getParams(50, 50), oc:function(){Toast({msg:"长按移动"});}, olc:(function(v){media_seek_onLongClicked = true;}),
			ot:(function(v, e){
				if (!media_seek_onLongClicked)
				{
					media_seek_mX = e.getX();
					media_seek_mY = e.getY();
				}
				if (media_seek_onLongClicked)
				{
					var a = e.getAction();
					if (a == 2)
					{
						var delX = parseInt(e.getX() - media_seek_mX) * -1 / 10;
						var delY = parseInt(e.getY() - media_seek_mY) * -1 / 10;
						media_seek_tpopx = media_seek_tpopx - delX;
						media_seek_tpopy = media_seek_tpopy - delY;
						media_controller_window.update(parseInt(media_seek_tpopx), parseInt(media_seek_tpopy), -1, -1);
					}
					if (a == 1) media_seek_onLongClicked = false;
				}
			})
		})
	]})
]});
var media_controller_window = BaseWindow({
	Height:80,
	Width:250,
	View:media_controller_layout,
	Show:false,
	Focusable:false
});
ScriptMediaPlayer.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener({onCompletion:function(MediaPlayer){
	runOnUiThread(function(){
		if (media_controller_window.isShowing())
			media_controller_window.dismiss();
	});
}}));

var ScriptVideoView = null;
var VideoViewNameTitle = TextView({t:"NullPointer", ml:1});
var VideoViewTitle = LinearLayout({o:1, vs:[VideoViewNameTitle]});

var VideoViewBuilder = null;
var VideoViewDialog = null;
//var video_seek_onLongClicked = false, video_seek_tpopx = 0, video_seek_tpopy = 0, video_seek_mX, video_seek_mY;

runOnUiThread(function(){
	ScriptVideoView = new android.widget.VideoView(ctx);
	
    VideoViewBuilder = baseDialog({
		Cancelable:true,
		CustomTitle:VideoViewTitle,
		View:ScriptVideoView,
		Show:false,
		PositiveButton:{Text:"关闭"}
	});
	
	VideoViewDialog = VideoViewBuilder.create();
});

var video = {
	Duration:0,
	play:function(path, mode){
		if (ScriptVideoView.isPlaying())
			ScriptVideoView.stopPlayback();
		
		ScriptVideoView.resume();
		
		if (mode == null || mode == MediaMode.Local)
			ScriptVideoView.setVideoPath(path);
		else if (mode == MediaMode.URL)
			ScriptVideoView.setVideoURI(parseURI(path));
			
		VideoViewNameTitle.setText(new java.io.File(path).getName());
		
		ScriptVideoView.start();
		
		
		var tempMedia = new android.media.MediaPlayer();
   		tempMedia.setDataSource(path);
   		tempMedia.prepare();
 		
   		this.Duration = tempMedia.getDuration();
		tempMedia.release();
		
		video_controller_seek.setMax(this.Duration);
		
		VideoViewDialog.show();
		ScriptVideoView.setClickable(true);

		//video_controller_window.update();
	},
	stop:function(){
		if (ScriptVideoView.isPlaying())
			ScriptVideoView.stopPlayback();
	},
	pause:function(){
		if (ScriptVideoView.isPlaying())
			ScriptVideoView.pause();
	},
	seekTo:function(num){
		if (ScriptVideoView.isPlaying())
			ScriptVideoView.seekTo(num);
	},
	start:function(){
		ScriptVideoView.start();
	},
	isplaying:function(){
		return ScriptVideoView.isPlaying();
	}
};

var video_controller_seek = SeekBar({lp:LayoutParams.getParams(400, -2), osc:{osp:function(seek, int){
	if (ScriptVideoView.isPlaying())
		video.seekTo(seek.getProgress());
}}});
var video_controller_layout = LinearLayout({o:0, b : Defaults.media_controller_Background, vs:[
	video_controller_seek,
	LinearLayout({o:1, lp:Adapters.Params.wider, g:Gravity.Right, vs:[
		Button({b:android.R.drawable.ic_media_pause, lp:LayoutParams.getParams(50, 50), oc:function(v){
			if (video.isplaying())
			{
				v.setBackgroundDrawable(getBitmap(android.R.drawable.ic_media_play));
				video.pause();
			}
			else
			{
				v.setBackgroundDrawable(getBitmap(android.R.drawable.ic_media_pause));
				video.start();
			}
		}, olc:function(){/*video_controller_window.dismiss();*/}}),
		//Button({b:android.R.drawable.ic_menu_compass, lp:LayoutParams.getParams(50, 50), oc:function(){Toast({msg:"长按移动"});}, olc:(function(v){video_seek_onLongClicked = true;}),ot:(function(v, e){if (!video_seek_onLongClicked){video_seek_mX = e.getX();video_seek_mY = e.getY();}if (video_seek_onLongClicked){var a = e.getAction();if (a == 2){var delX = parseInt(e.getX() - video_seek_mX) * -1 / 10;var delY = parseInt(e.getY() - video_seek_mY) * -1 / 10;video_seek_tpopx = video_seek_tpopx - delX;video_seek_tpopy = video_seek_tpopy - delY;video_controller_window.update(parseInt(video_seek_tpopx), parseInt(video_seek_tpopy), -1, -1);}if (a == 1) video_seek_onLongClicked = false;}})})
	]})
]});
/*
var video_controller_window = BaseWindow({
	Height:80,
	Width:250,
	View:new TextView(),// video_controller_layout,
	Show:false,
	Focusable:false
});
ScriptVideoView.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener({onCompletion:function(MediaPlayer){
	runOnUiThread(function(){
		if (video_controller_window.isShowing())
			video_controller_window.dismiss();
	});
}}));
*/
VideoViewTitle.addView(video_controller_layout);

var AndroidTTS_Language = Locale.English;
var tts = {
	language_out : null,
	speak_out : null,
	setSpeakout : function(fun){
		this.speak_out = fun;
	},
	setLanguageout : function(fun){
		this.language_out = fun;
	},
	setLanguage:function(language) {
		AndroidTTS_Language = language;
	},
	speak:function(str, queue){
			var tts = new android.speech.tts.TextToSpeech(ctx, new android.speech.tts.TextToSpeech.OnInitListener({onInit:function(int){try{
			if (int == android.speech.tts.TextToSpeech.SUCCESS)
    		{
         		var r = tts.setLanguage(AndroidTTS_Language);
        		if (r != android.speech.tts.TextToSpeech.LANG_COUNTRY_VAR_AVAILABLE && r != android.speech.tts.TextToSpeech.LANG_AVAILABLE)
        		{
             		if (tts.language_out != null) 
						tts.language_out();
					else
						Exception("不支持此语言的朗读");
        		};
				tts.speak(str, queue == null ? TTSQueue.flush : queue, null, "speech");
    		}
    		else
    		{
				if (tts.speak_out != null)
					tts.speak_out();
         		else
					Exception("未加载成功");
    		}
		}
		catch(e){Exception(e);}
	}}));
    }
};

/*
//var AndroidTTS = null;
var tts = {
	setLanguage:function(language) {
		var r = AndroidTTS.setLanguage(language);
        if (r != android.speech.tts.TextToSpeech.LANG_COUNTRY_VAR_AVAILABLE && r != android.speech.tts.TextToSpeech.LANG_AVAILABLE)
        {
             Exception("不支持此语言的朗读");
        }
	},
	speak:function(str, queue){
        AndroidTTS.speak(str, queue == null ? TTSQueue.flush : queue, null, "speech");
    },
	shutdown:function(){
		AndroidTTS.shutdown();
	},
	static_speak:function(language, text, queue){
		this.setLanguage(tts, language);
		this.speak(tts, text, queue);
	}
};
AndroidTTS = new android.speech.tts.TextToSpeech(ctx, new android.speech.tts.TextToSpeech.OnInitListener({onInit:function(int){try{
		if (int == android.speech.tts.TextToSpeech.SUCCESS)
    	{
         	tts.setLanguage(Locale.English);
			tts.speak("AndroidTTS = new android.speech.tts.TextToSpeech");
    	}
    	else
    	{
         	Exception("未加载成功");
    	}
	}
	catch(e){Exception(e);}
}}));




var TTSFactory = {
	newInstance:function(init){
		return new AndroidTTS(ctx, new AndroidTTS.OnInitListener({onInit:function(int){try{init(int);}catch(e){Exception(e);}}}));
	},
	newPrettyInstance:function(onInitSuccessfully){
		return this.newInstance(function(int){
			 if (int == AndroidTTS.SUCCESS)
             {
				 if (onInitSuccessfully != null)
					 onInitSuccessfully();
                  //var r = tts.setLanguage(language);
						
//                   if (r != AndroidTTS.LANG_COUNTRY_VAR_AVAILABLE && r != AndroidTTS.LANG_AVAILABLE)
//                   {
//                          throw  SystemException("不支持此语言的朗读");
//                   }
            }
			else
			{
				throw  SystemException("未加载成功");
			}
		});
	},
	setLanguage:function(tts, language){
		var r = tts.setLanguage(language);
		if (r != AndroidTTS.LANG_COUNTRY_VAR_AVAILABLE && r != AndroidTTS.LANG_AVAILABLE)
		{
            throw  SystemException("不支持此语言的朗读");
		}
	},
	
};

*/

var audio = {
	Instance:ctx.getSystemService(ctx.AUDIO_SERVICE),
	adjustStreamVolume:function(type, direction, flags){
		this.Instance.adjustStreamVolume(type, direction, flags == null ? AudioManagerFlags.ShowUI : flags);
	},
	setStreamVolume:function(type, index, flags){
		this.Instance.setStreamVolume(type, index, flags == null ? AudioManagerFlags.ShowUI : flags);
	}
};

function updataSeeks()
{
	if (ScriptMediaPlayer.isPlaying())
	{
		media_controller_seek.setProgress(ScriptMediaPlayer.getCurrentPosition());
	}
	if (ScriptVideoView.isPlaying())
	{
		video_controller_seek.setProgress(ScriptVideoView.getCurrentPosition());
	}
}
