function BaseViewer(view, Arguments){
	if (Arguments.Animation != null) view.setAnimation(Arguments.Animation);
	if (Arguments.LayoutParams != null) view.setLayoutParams(Arguments.LayoutParams);
	if (Arguments.Gravity != null) view.setGravity(Arguments.Gravity);
	if (Arguments.onClick != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v){try{Arguments.onClick(v); GraphicsAnimation([v], "click");}catch(e){Exception(e);}}}));
	if (Arguments.OnLongClickListener != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : function(v){ try{GraphicsAnimation([v], "long-click");Arguments.OnLongClickListener(v) != null;}catch(e){Exception(e);return false;}}})); 
	if (Arguments.OnTouchListener != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : function(v, e){try{GraphicsAnimation([v, e], "touch-click");return Arguments.OnTouchListener(v, e) != null;}catch(e){Exception(e);return false;}}}));
	if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
    if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
    if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
	if (Arguments.Tag != null) view.setTag(Arguments.Tag);
	if (Arguments.Id != null) view.setId(Arguments.Id);
	if (Arguments.BackgroundColor != null) view.setBackgroundColor(Arguments.BackgroundColor);
	if (Arguments.Background != null) view.setBackgroundDrawable(getBitmap(Arguments.Background));
	if (Arguments.Padding != null) view.setPadding(Arguments.Padding[0], Arguments.Padding[1], Arguments.Padding[2], Arguments.Padding[3]);
	if (Arguments.OnInit != null) Arguments.OnInit(view);
				
	if (Arguments.init != null) Arguments.init(view);
	if (Arguments.pad != null) view.setPadding(Arguments.pad[0], Arguments.pad[1], Arguments.pad[2], Arguments.pad[3]);
	if (Arguments.b != null) view.setBackgroundDrawable(getBitmap(Arguments.b));
	if (Arguments.id != null) view.setId(Arguments.id);
	if (Arguments.a != null) view.setAnimation(Arguments.a);
	if (Arguments.g != null) view.setGravity(Arguments.g);
	if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
	if (Arguments.oc != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v){try{Arguments.oc(v); GraphicsAnimation([v], "click");}catch(e){Exception(e);}}}));
	if (Arguments.olc != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick : function(v){try{GraphicsAnimation([v], "long-click");return Arguments.olc(v) != null;}catch(e){Exception(e);return false;}}})); 
	if (Arguments.ot != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : function(v, e){try{GraphicsAnimation([v, e], "touch-click");return Arguments.ot(v, e) != null;}catch(e){Exception(e);return false;}}}));
	if (Arguments.bc != null) view.setBackgroundColor(parseColor(Arguments.bc));
	if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
	if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
	if (Arguments.tag != null) view.setTag(Arguments.tag);
	
}
function Viewer(view, Arguments){
	BaseViewer(view, Arguments);
	if (Arguments.v != null) view.setVisibility(Arguments.v);
}
function Texter(view, Arguments){
	if (Arguments.Text != null) view.setText(Arguments.Text);
	if (Arguments.TextColor != null) view.setTextColor(parseColor(Arguments.TextColor));
	if (Arguments.Typeface != null) view.setTypeface(createTypeface(Arguments.Typeface));
	if (Arguments.TextSize != null) view.setTextSize(Arguments.TextSize);
	if (Arguments.AutoLinkMask != null) view.setAutoLinkMask(Arguments.AutoLinkMask);
    if (Arguments.Ellipsize != null) view.setEllipsize(Arguments.Ellipsize);
    if (Arguments.MarqueeRepeatLimit != null) view.setMarqueeRepeatLimit(Arguments.MarqueeRepeatLimit);
	if (Arguments.MaxLines != null) view.setMaxLines(Arguments.MaxLines);

	if (Arguments.t != null) view.setText(Arguments.t);
	if (Arguments.color != null) view.setTextColor(parseColor(Arguments.color));
	if (Arguments.ts != null) view.setTextSize(Arguments.ts);
	if (Arguments.ml != null) view.setMaxLines(Arguments.ml);
	if (Arguments.ttf != null) view.setTypeface(createTypeface(Arguments.ttf));
}
function Layouter(view, Arguments){
	if (Arguments.Orientation != null) view.setOrientation(Arguments.Orientation);
	if (Arguments.o != null) view.setOrientation(Arguments.o);
	if (Arguments.Views != null)
	{
		for (var i = 0; i < Arguments.Views.length; i++)
		view.addView(Arguments.Views[i]);
	}
	if (Arguments.vs != null) 
	{
		for (var i = 0; i < Arguments.vs.length; i++)
		view.addView(Arguments.vs[i]);
	}
}
function ScrollViewer(view, Arguments){
	BaseViewer(view, Arguments);
	if (Arguments.View != null) view.addView(Arguments.View);
	if (Arguments.v != null) view.addView(Arguments.v);
	if (Arguments.vy != null) view.setVisibility(Arguments.vy);
}
function ProgressBarer(view, Arguments){
	if (Arguments.Progress != null) view.setProgress(Arguments.Progress);
	if (Arguments.p != null) view.setProgress(Arguments.p);
}
function SeekBarer(view, Arguments){
	if (Arguments.Thumb != null) view.setThumb(getBitmap(Arguments.Thumb));
	if (Arguments.Max != null) view.setMax(Arguments.Max);
	if (Arguments.OnSeekBarChangeListener != null) view.setOnSeekBarChangeListener({onProgressChanged:Arguments.OnSeekBarChangeListener});
	if (Arguments.ProgressDrawable != null) view.setProgressDrawable(getBitmap(Arguments.ProgressDrawable));
	if (Arguments.ProgressDrawableTiled) view.setProgressDrawableTiled(getBitmap(Arguments.ProgressDrawableTiled));
			
	if (Arguments.max != null) view.setMax(Arguments.max);
	if (Arguments.thumb != null) view.setThumb(getBitmap(Arguments.thumb));
	if (Arguments.osc != null) view.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({onProgressChanged:function(SeekBar, int, boolean){try{if (Arguments.osc.opc != null) Arguments.osc.opc(SeekBar, int, boolean);}catch(e){Exception(e);}}, onStartTrackingTouch:function(SeekBar){try{if (Arguments.osc.ost != null) Arguments.osc.ost(SeekBar);}catch(e){Exception(e);}}, onStopTrackingTouch:function(SeekBar){try{if (Arguments.osc.osp != null) Arguments.osc.osp(SeekBar);}catch(e){Exception(e);}} }));
	if (Arguments.pd != null) view.setProgressDrawable(getBitmap(Arguments.pd));
	if (Arguments.pdt != null) view.setProgressDrawableTiled(getBitmap(Arguments.pdt));
}
function CheckBoxer(view, Arguments){
	if (Arguments.OnCheckedChangeListener) view.setOnCheckedChangeListener(new android.widget.RadioButton.OnCheckedChangeListener({onCheckedChanged:function(button, boolean){try{Arguments.OnCheckedChangeListener(button, boolean);}catch(e){Exception(e);}}}));
	if (Arguments.Checked != null) view.setChecked(Arguments.Checked);
			
	if (Arguments.ocl) view.setOnCheckedChangeListener(new android.widget.RadioButton.OnCheckedChangeListener({onCheckedChanged:function(button, boolean){try{Arguments.ocl(button, boolean);}catch(e){Exception(e);}}}));
	if (Arguments.ed != null) view.setChecked(Arguments.ed);
}


/*
function BaseViewer(view, Arguments){
	if (Arguments.Animation != null) view.setAnimation(Arguments.Animation);
	if (Arguments.LayoutParams != null) view.setLayoutParams(Arguments.LayoutParams);
	if (Arguments.Gravity != null) view.setGravity(Arguments.Gravity);
	if (Arguments.onClick != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v){try{Arguments.onClick(v); GraphicsAnimation([v], "click");}catch(e){Exception(e);}}}));
	if (Arguments.OnLongClickListener != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : function(v){ try{GraphicsAnimation([v], "long-click");Arguments.OnLongClickListener(v) != null;}catch(e){Exception(e);return false;}}})); 
	if (Arguments.OnTouchListener != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : function(v, e){try{GraphicsAnimation([v, e], "touch-click");return Arguments.OnTouchListener(v, e) != null;}catch(e){Exception(e);return false;}}}));
	if (Arguments.KeepScreenOn != null) view.setKeepScreenOn(Arguments.KeepScreenOn);
    if (Arguments.SaveEnable != null) view.setSaveEnabled(Arguments.SaveEnable);
    if (Arguments.Visibility != null) view.setVisibility(Arguments.Visibility);
	if (Arguments.Tag != null) view.setTag(Arguments.Tag);
	if (Arguments.Id != null) view.setId(Arguments.Id);
	if (Arguments.BackgroundColor != null) view.setBackgroundColor(Arguments.BackgroundColor);
	if (Arguments.Background != null) view.setBackgroundDrawable(getBitmap(Arguments.Background));
	if (Arguments.Padding != null) view.setPadding(Arguments.Padding[0], Arguments.Padding[1], Arguments.Padding[2], Arguments.Padding[3]);
	if (Arguments.OnInit != null) Arguments.OnInit(view);
				
	if (Arguments.init != null) Arguments.init(view);
	if (Arguments.pad != null) view.setPadding(Arguments.pad[0], Arguments.pad[1], Arguments.pad[2], Arguments.pad[3]);
	if (Arguments.b != null) view.setBackgroundDrawable(getBitmap(Arguments.b));
	if (Arguments.id != null) view.setId(Arguments.id);
	if (Arguments.a != null) view.setAnimation(Arguments.a);
	if (Arguments.g != null) view.setGravity(Arguments.g);
	if (Arguments.lp != null) view.setLayoutParams(Arguments.lp);
	if (Arguments.oc != null) view.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v){try{Arguments.oc(v); GraphicsAnimation([v], "click");}catch(e){Exception(e);}}}));
	if (Arguments.olc != null) view.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick : function(v){try{GraphicsAnimation([v], "long-click");return Arguments.olc(v) != null;}catch(e){Exception(e);return false;}}})); 
	if (Arguments.ot != null) view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : function(v, e){try{GraphicsAnimation([v, e], "touch-click");return Arguments.ot(v, e) != null;}catch(e){Exception(e);return false;}}}));
	if (Arguments.bc != null) view.setBackgroundColor(parseColor(Arguments.bc));
	if (Arguments.kso != null) view.setKeepScreenOn(Arguments.kso);
	if (Arguments.sea != null) view.setSaveEnabled(Arguments.sea);
	if (Arguments.tag != null) view.setTag(Arguments.tag);
	
	
	function animation(){}
	function layoutparams(){}
	function gravity(){}
	function onClick(){}
	function OnTouchListener(){}
	function layoutparams(){}
	function OnLongClickListener(){}
	function KeepScreenOn(){}
	function SaveEnable(){}
	
	function Visibility(){}
	function Tag(){}
	function Id(){}
	function BackgroundColor(){}
	function Background(){}
	function Padding(){}
	function OnInit(){}
	
	
	
	
	
	var Properties = {
	Animation : {simple:"a", action:function(view, Arguments){view.setAnimation(Arguments.Animation);}},
	LayoutParams : {simple:"lp", action:function(view, Arguments){view.setLayoutParams(Arguments.LayoutParams);}},
	Gravity : {simple : "g", action : function(view, Arguments){view.setGravity(Arguments.Gravity);}},
	onClick : {simple : "oc", action : function(view, Arguments, mark){view.setOnClickListener(new android.view.View.OnClickListener({onClick : function(v){try{if (mark == ERMarks.large) Arguments.onClick(v); else if (mark == ERMarks.small) Arguments[Properties.onClick.simple](v); GraphicsAnimation([v], "click");}catch(e){Exception(e);}}}));}},
	OnLongClickListener : {simple : "olc", action : function(view, Arguments, mark){view.setOnLongClickListener(new android.view.View.OnLongClickListener({ onLongClick : function(v){ try{GraphicsAnimation([v], "long-click"); if (mark == ERMarks.large) return Arguments.OnLongClickListener(v) != null; else if (mark == ERMarks.small) return Arguments[Properties.OnLongClickListener.simple];}catch(e){Exception(e); return false;}}}));}},
	OnTouchListener : {simple : "ot", action : function(view, Arguments, mark){view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : function(v, e){try{GraphicsAnimation([v, e], "touch-click"); if (mark == ERMarks.large) return Arguments.OnTouchListener(v, e) != null; else if(mark == ERMarks.small) return Arguments[Properties.OnTouchListener.simple];}catch(e){Exception(e);return false;}}}));}},
	KeepScreenOn : {simple : "kso", action : function(view, Arguments){view.setKeepScreenOn(Arguments.KeepScreenOn);}},
	SaveEnable : {simple : "sea", action : function(view, Arguments){view.setSaveEnabled(Arguments.SaveEnable);}},
	Visibility : {simple : "v", action : function(view, Arguments){view.setVisibility(Arguments.Visibility);}},
	Tag : {simple : "tag", action : function(view, Arguments){view.setTag(Arguments.Tag);}},
	Id : {simple : "id", action : function(view, Arguments){view.setId(Arguments.Id);}},
	BackgroundColor : {simple : "bc", action : function(view, Arguments){view.setBackgroundColor(Arguments.BackgroundColor);}},
	Background : {simple : "b", action : function(view, Arguments){view.setBackgroundDrawable(getBitmap(Arguments.Background));}},
	Padding : {simple : "pad", action : function(view, Arguments){view.setPadding(Arguments.Padding[0], Arguments.Padding[1], Arguments.Padding[2], Arguments.Padding[3]);}},
	OnInit : {simple : "init", action : function(view, Arguments){Arguments.OnInit(view);}},
};

function BaseViewer(view, Arguments){
	for (var i in Properties){
		print("i:" + i);
		//Properties[OnLongClickListener][simple];
		//print("arg i : " + Arguments[i]);
		//print("s i : " + Arguments[Properties[i]["simple"]]);
		if (Arguments[i] != null) Properties[i].action(view, Arguments, ERMarks.large);
		if (Arguments[Properties[i].simple] != null) Properties[i].action(view, Arguments, ERMarks.small);
		
	}
	
	//if (Arguments.Animation != null) animation();
	//if (Arguments.LayoutParams != null) layoutparams();
	/*if (Arguments.Gravity != null) gravity();
	if (Arguments.onClick != null) onclick();
	if (Arguments.OnLongClickListener != null) onlongclicklistener();
	if (Arguments.OnTouchListener != null) ontouchlistener();
	if (Arguments.KeepScreenOn != null) keepscreenon();
    if (Arguments.SaveEnable != null) saveenable();
    if (Arguments.Visibility != null) visibility();
	if (Arguments.Tag != null) tag();
	if (Arguments.Id != null) id();
	if (Arguments.BackgroundColor != null) backgroundcolor();
	if (Arguments.Background != null) background();
	if (Arguments.Padding != null) padding();
	if (Arguments.OnInit != null) oninit();
				
	if (Arguments.init != null) oninit();
	if (Arguments.pad != null) padding();
	if (Arguments.b != null) background();
	if (Arguments.id != null) id();
	if (Arguments.a != null) animation();
	if (Arguments.g != null) gravity();
	if (Arguments.lp != null) layoutparams();
	if (Arguments.oc != null) onclick();
	if (Arguments.olc != null) onlongclicklistener(); 
	if (Arguments.ot != null) ontouchlistener();
	if (Arguments.bc != null) backgroundcolor();
	if (Arguments.kso != null) keepscreenon();
	if (Arguments.sea != null) saveenable();
	if (Arguments.tag != null) tag();
	
	function animation(){view.setAnimation(Arguments.Animation);}
	function layoutparams(){}
	function gravity(){}
	function onclick(){}
	function ontouchlistener(){}
	function onlongclicklistener(){}
	function keepscreenon(){}
	function saveenable(){}
	function visibility(){;}
	function tag(){}
	function id(){}
	function backgroundcolor(){}
	function background(){}
	function padding(){}
	function oninit(){}
}*/

