function Button(Arguments) {try
	{
		var view = new android.widget.Button(ctx);
		if (Arguments != null)
		{
			Viewer(view, Arguments);
			Texter(view, Arguments);
		}
		return view;
	}
	catch(err){Exception(err);}
}
function Buttonoil(Text, TextColor, Background){
	var but = new android.widget.Button(ctx);
	if (Text != null) but.setText(Text);
	if (TextColor != null) but.setTextColor(TextColor);
	if (Background != null) but.setBackgroundDrawable(getBitmap(Background));
	return but;
}
function RadioButton(Arguments){try
	{
		var view = new android.widget.RadioButton(ctx);
		if (Arguments != null)
		{
			Viewer(view, Arguments);
			Texter(view, Arguments);
			CheckBoxer(view, Arguments);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function TextView(Arguments) {try
	{
		var view = new android.widget.TextView(ctx);
		if (Arguments != null)
		{
			Viewer(view, Arguments);
			Texter(view, Arguments);
		}
		return view;
	}catch(err){Exception(err);}
}
function TextViewoil(Text, TextColor){
	var text = new android.widget.TextView(ctx);
	if (Text != null) text.setText(Text);
	if (TextColor != null) text.setTextColor(parseColor(TextColor));
	return text;
}
function EditText(Arguments) {try
	{
		var view = new android.widget.EditText(ctx);
		if (Arguments != null)
		{
			Viewer(view, Arguments);
			Texter(view, Arguments);
			if (Arguments.Hint != null) view.setHint(Arguments.Hint);
			if (Arguments.HintColor != null) view.setHintColor(parseColor(Arguments.HintColor));
			if (Arguments.Input != null) view.setInputType(Arguments.Input);
			
			if (Arguments.h != null) view.setHint(Arguments.h);
			if (Arguments.ht != null) view.setHintColor(parseColor(Arguments.ht));
			if (Arguments.i != null) view.setInputType(Arguments.i);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function EditTextoil(Hint, Params){
	var edit = new android.widget.EditText(ctx);
	if (Hint != null) edit.setHint(Hint);
	if (params != null) edit.setLayoutParams(Params);
	return edit;
}
function ListView(Arguments) {try
	{
		var view = new android.widget.ListView(ctx);
		if (Arguments != null)
		{
			Viewer(view, Arguments);
			if (Arguments.Adapter != null) view.setAdapter(Arguments.Adapter);
			if (Arguments.OnItemClickListener != null) view.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener({onItemClick:function(parent, View, position, id){try{Arguments.OnItemClickListener(parent, View, position, id);}catch(e){Exception(e);}}}));
			if (Arguments.OnItemLongClickListener != null) view.setOnItemLongClickListener(new android.widget.AdapterView.OnItemLongClickListener({onItemLongClick:function(parent, View, position, id){try{return Arguments.OnItemLongClickListener(parent, View, position, id) != null;}catch(e){Exception(e);}}}));
			if (Arguments.OnItemSelectedListener != null) view.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({onItemSelected:function(parent, View, position, id){try{if (Arguments.OnItemSelectedListener.onItemSelected != null)Arguments.OnItemSelectedListener.onItemSelected(parent, View, position, id);}catch(e){Exception(e);}},onNothingSelected:function(parent){try{if (Arguments.OnItemSelectedListener.onNothingSelected != null)Arguments.OnItemSelectedListener.onNothingSelected(parent);}catch(e){Exception(e);}}}));
			
			if (Arguments.ad != null) view.setAdapter(Arguments.ad);
			if (Arguments.oicl != null) view.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener({onItemClick:function(parent, View, position, id){try{Arguments.oicl(parent, View, position, id);}catch(e){Exception(e);}}}));
			if (Arguments.oilcl != null) view.setOnItemLongClickListener(new android.widget.AdapterView.OnItemLongClickListener({onItemLongClick:function(parent, View, position, id){try{return Arguments.oilcl(parent, View, position, id) != null;}catch(e){Exception(e);}}}));
        	if (Arguments.oisl != null) view.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({onItemSelected:function(parent, View, position, id){try{if (Arguments.oisl.ois != null)Arguments.oisl.ois(parent, View, position, id);}catch(e){Exception(e);}},onNothingSelected:function(parent){try{if (Arguments.oisl.ons != null)Arguments.oisl.ons(parent);}catch(e){Exception(e);}}}));
		}
		return view;
	}
	catch(err){Exception(err);}
}
function LinearLayout(Arguments) {try
	{
		var view = new android.widget.LinearLayout(ctx);
		if (Arguments != null)
		{
			view.setOrientation(1);
			Viewer(view, Arguments);
			Layouter(view, Arguments);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function RadioGroup(Arguments){try
	{
		var view = new android.widget.RadioGroup(ctx);
		if (Arguments != null)
		{
			view.setOrientation(0);
			Viewer(view, Arguments);
			Layouter(view, Arguments);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function LinearLayoutoil(View, Orientation) {
	var view = new android.widget.LinearLayout(ctx);
	if (View != null) view.addView(View);
	view.setOrientation(Orientation == null ? 1 : Orientation);
	return view;
}
function ScrollView(Arguments) {try
	{
		var view = new android.widget.ScrollView(ctx);
		if (Arguments != null)
		{
			ScrollViewer(view, Arguments);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function HorizontalScrollView(Arguments) {try
	{
		var view = new android.widget.HorizontalScrollView(ctx);
		if (Arguments != null)
		{
			ScrollViewer(view, Arguments);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function ScrollViewoil(view){
	var scroll = new android.widget.ScrollView(ctx);
	scroll.addView(view);
	return scroll;
}
function ImageView(Arguments) {try
	{
		var view = new android.widget.ImageView(ctx);
		if (Arguments != null)
		{
			Viewer(view, Arguments);
			if (Arguments.ImageDrawable != null) view.setImageDrawable(Arguments.ImageDrawable);
			if (Arguments.i != null) view.setImageDrawable(getBitmap(Arguments.i));
		}
		return view;
	}
	catch(e){Exception(e);}
}
function ImageViewoil(Image){
	var image = new android.widget.ImageView(ctx);
	if (Image != null) image.setImageDrawable(getBitmap(Image));
	return image;
}
function ProgressBar(Arguments) {try
	{
		var view = new android.widget.ProgressBar(ctx);
		if (Arguments != null)
		{
			Viewer(view, Arguments);
			ProgressBarer(view, Arguments);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function SeekBar(Arguments) {try
	{
		var view = new android.widget.SeekBar(ctx);
		if (Arguments != null)
		{
			Viewer(view, Arguments);
			ProgressBarer(view, Arguments);
			SeekBarer(view, Arguments);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function CheckBox(Arguments){try
	{
		var view = new android.widget.CheckBox(ctx);
		if (Arguments != null)
		{
			Viewer(view, Arguments);
			Texter(view, Arguments);
			CheckBoxer(view, Arguments);
		}
		return view;
	}
	catch(e){Exception(e);}
}
function PopupWindow(Arguments) {try
	{
		var pop = new android.widget.PopupWindow(ctx);
		if (Arguments != null)
		{
			pop.setWidth(dip2px(Arguments.Width == null ? 100 : Arguments.Width));
			pop.setHeight(dip2px(Arguments.Height == null ? 100 : Arguments.Height));

			if (Arguments.View != null) pop.setContentView(Arguments.View);
			if (Arguments.Background != null) pop.setBackgroundDrawable(getBitmap(Arguments.Background));
			if (Arguments.Fucusable != null) pop.setFocusable(Arguments.Fucusable);
			if (Arguments.onDismissListener != null) pop.setOnDismissListener(new android.widget.PopupWindow.OnDismissListener({onDismiss:function(){try{Arguments.onDismissListener();}catch(e){Exception(e);}}}));
			if (Arguments.OnInit != null) Arguments.OnInit(pop);
				
			if (Arguments.init != null) Arguments.init(pop);
			if (Arguments.f != null) pop.setFocusable(Arguments.f);
			if (Arguments.b != null) pop.setBackgroundDrawable(getBitmap(Arguments.b));
			if (Arguments.w != null) pop.setWidth(dip2px(Arguments.w));
			if (Arguments.h != null) pop.setHeight(dip2px(Arguments.h));
			if (Arguments.v != null) pop.setContentView(Arguments.v);
			if (Arguments.odl != null) pop.setOnDismissListener(new android.widget.PopupWindow.OnDismissListener({onDismiss:function(){try{Arguments.odl();}catch(e){Exception(e);}}}));
		}
		return pop;
	}
	catch(e){Exception(e);}
}
function Exception(e) {try
	{
		runOnUiThread(function(){
			baseDialog({
				Title:"JS运行时-异常",
				Message:"错误信息-->" + e + "\n异常行号:" + e.lineNumber,
				PositiveButton:{Text:"got it"}
			});
		});
		Logcat.log("错误信息-->" + e + "\n异常行号:" + e.lineNumber);
	}
	catch(e){print(e);}
}

function Toast(Arguments){runOnUiThread(function(){
	{
		var toast = new android.widget.Toast(ctx);
		if (Arguments != null)
		{
			if (typeof Arguments == "object")
			{
				
				toast.makeText(ctx, Arguments.msg, 0).show();
				return;
				//wrong
				toast.setDuration(Arguments.Duration == null ? 3000 : Arguments.Duration);
				if (Arguments.Gravity != null) toast.setGravity(Arguments.Gravity, 0, 0);
				if (Arguments.View != null) toast.setView(Arguments.View);
				if (Arguments.Message != null)
				{
					var icon = ImageView({i : DefaultViewProperties.Toast.Icon});
					var content = TextView({ts : Arguments.ts == null ? DefaultViewProperties.Toast.TextSize : Arguments.ts, t : Arguments.Message, lp : LayoutParams.getParams(-2, -1)});
					content.setPadding(DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding);
					var layout = LinearLayout({vs : [icon, content], o : 0, lp : LayoutParams.getParams(-1, -1)});
					layout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(DefaultViewProperties.Toast.BackgroundColor)));
					toast.setView(layout);
				}
				if (Arguments.OnInit != null) Arguments.OnInit(toast);
				
				if (Arguments.init != null) Arguments.init(toast);
				if (Arguments.d != null) toast.setDuration(Arguments.d);
				if (Arguments.g != null) toast.setGravity(Arguments.g, 0, 0);
				if (Arguments.v != null) toast.setView(Arguments.v);
				if (Arguments.msg != null) 
				{
					var icon = ImageView({i : DefaultViewProperties.Toast.Icon});
					var content = TextView({ts : Arguments.ts == null ? DefaultViewProperties.Toast.TextSize : Arguments.ts, t : Arguments.msg, lp : LayoutParams.getParams(-2, -1)});
					content.setPadding(DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding, DefaultViewProperties.Toast.TextPadding);
					var layout = LinearLayout({vs : [icon, content], o : 0, lp : LayoutParams.getParams(-1, -1)});
					layout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor(DefaultViewProperties.Toast.BackgroundColor)));
					toast.setView(layout);
				}
			
				if (Arguments.is != null && Arguments.is == false) 
					return toast;
				toast.show();
			}
			else 
			{
				Toast({msg:Arguments + ""});
			}
		}
		
		return toast;
	}
	});
}
function ShowPop(pop, gravity, x_offset, y_offset) {try
	{
		pop.showAtLocation(ctx.getWindow().getDecorView(), gravity == null ? android.view.Gravity.CENTER : gravity, x_offset == null ? 0 : x_offset, y_offset == null ? 0 : y_offset);
		return pop;
	}
	catch(e){Exception(e);}
}
function GraphicsAnimation(View){
	
}
function parseColor(string) {
	return android.graphics.Color.parseColor(string);
}

function createTypeface(typeface) {
	if (typeof typeface == "string" || typeface instanceof java.io.File)
		return android.graphics.Typeface.createFromFile(typeface);
	else if (typeof typeface == "number")
		return android.graphics.Typeface.defaultFromStyle(typeface);
    else if (typeface instanceof android.graphics.Typeface)
		return typeface;
	else
		throw ArgumentException("TTF set fail, you've given a unknown value");
}

function getBitmap(bitmap) {
	if (bitmap instanceof android.graphics.drawable.Drawable) {
		return bitmap;
	}
	else if (typeof bitmap == "string") {
		if (getFile(bitmap).exists()) {
			return android.graphics.drawable.BitmapDrawable.createFromStream(new java.io.FileInputStream(bitmap), "");
		} else {
			return getBitmap(ModPE.openInputStreamFromTexturePack(bitmap));
		}
	}
	else if (typeof bitmap == "number") {
		return StriptManager.getAndroidDrawable(bitmap);
	}
	else if (bitmap instanceof java.lang.Object) {
		if (bitmap instanceof java.io.InputStream) {
			return android.graphics.drawable.BitmapDrawable.createFromStream(bitmap, "");
		}
		else if (bitmap instanceof java.io.File) {
			return getBitmap(bitmap + "");
		} else {
			return new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(bitmap, 0, bitmap.length));
		}
	}
}
function pxHeight(height) {
	return Math.round(screen_height * height);
}
function pxWindth(width) {
	return Math.round(screen_width * width);
}
function pxViewParams(view, num_w, num_h) {try
	{
		view.setLayoutParams(LayoutParams.getParams( Math.round(view.getRootView().getWidth() * num_w), Math.round(view.getRootView().getHeight() * num_h) ));
		return view;
	}catch(e){Exception(e);}
}
function dip2px(dips) { 
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density); 
}

