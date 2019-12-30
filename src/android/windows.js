function BaseWindow(Arguments) {
	if (Arguments != null)
	{
		if (Arguments.View == null || !(Arguments.View instanceof android.view.View)) throw ArgumentException("the argument 'View' is necessary and important, you can't fail it");

		var inner_Height = Arguments.Height == null ? 310 : Arguments.Height;
		var inner_Width = Arguments.Width == null ? 320 : Arguments.Width;

		var Buttons = [];
		if (Arguments.Button1 != null)
			Buttons.push(Button({t:(Arguments.Button1.Text), oc:(Arguments.Button1.onClick), b:(Arguments.Button1.Background), lp:(Arguments.Button1.Params == null ? Adapters.heighter : Arguments.Button1.Params) }));
		if (Arguments.Button2 != null)
			Buttons.push(Button({t:(Arguments.Button2.Text), oc:(Arguments.Button2.onClick), b:(Arguments.Button2.Background), lp:(Arguments.Button2.Params == null ? Adapters.heighter : Arguments.Button2.Params) }));
		if (Arguments.Button3 != null)
			Buttons.push(Button({t:(Arguments.Button3.Text), oc:(Arguments.Button3.onClick), b:(Arguments.Button3.Background), lp:(Arguments.Button3.Params == null ? Adapters.heighter : Arguments.Button2.Params) }));

		var title = TextView({
								 lp:(Adapters.Params.wider),
								 color:(Arguments.TitleColor == null ? Defaults.DialogTitleColor : Arguments.TitleColor), 
								 t:(Arguments.Title == "" ? "notitle" : Arguments.Title),
								 oc:(Defaults.DialogTitleClick),
								 ml:(1),
								 v:(Arguments.Title == null ? android.view.View.GONE : android.view.View.VISIBLE)
							 });

		var content = ScrollView({
									 lp:(LayoutParams.getParams(-1, dip2px(Buttons.length == 0 ? 310 : (inner_Height / 310 * 230)))),
									 v:(Arguments.View),
									 b:(Arguments.ContentBackground),
									 g:(Arguments.ContentGravity)
								 });

		var bottom = HorizontalScrollView({
											  lp:(LayoutParams.getParams(-1, dip2px(inner_Height / 310 * 60))),
											  b:(Arguments.BottomBackground),
											  vy:(Buttons.length == 0 ? android.view.View.GONE : android.view.View.VISIBLE),
											  v:(LinearLayout({
																  lp:(Adapters.full),
																  o:(0),
																  vs:(Buttons),
																  g:(Arguments.BottomGravity == null ? Gravity.Centre : Arguments.BottomGravity)
															  }))
										  });

		var window = PopupWindow({
									 h:(inner_Height), 
									 w:(inner_Width),
									 f:(Arguments.Focusable == null ? true : Arguments.Focusable), 
									 v:(LinearLayout({
														 o:(1),
														 b:(Arguments.WindowBackground),
														 vs:([title, content, bottom]),
														 g:(Arguments.mainGravity)
													 })),
									 odl:(Arguments.Dismiss),
									 b:(Arguments.DroppestBackground)
								 });

		if (Arguments.Show == null || Arguments.Show == true)
			return ShowPop(window, Arguments.Gravity, Arguments.X_offset, Arguments.Y_offset);
		else 
			return window;
	}
	else throw ArgumentException("there's no arguments in this function");
}
function baseDialog(Arguments) {
	if (Arguments != null)
	{
		var dialog = new android.app.AlertDialog.Builder(ctx);

		if (Arguments.Message != null) dialog.setMessage(Arguments.Message);
		if (Arguments.Title != null) dialog.setTitle(Arguments.Title);
		if (Arguments.Icon != null) dialog.setIcon(getBitmap(Arguments.Icon));
		if (Arguments.View != null) dialog.setView(Arguments.View);
		if (Arguments.Cancelable != null) dialog.setCancelable(Arguments.Cancelable);
		if (Arguments.CustomTitle != null) dialog.setCustomTitle(Arguments.CustomTitle);
		if (Arguments.InverseBackgroundForced != null) dialog.setInverseBackgroundForced(Arguments.InverseBackgroundForced);
		if (Arguments.PositiveButton != null) dialog.setPositiveButton(Arguments.PositiveButton.Text, new android.content.DialogInterface.OnClickListener({onClick:function(DialogInterface, int) { try
																																								  {if (Arguments.PositiveButton.onClick != null) Arguments.PositiveButton.onClick(DialogInterface, int);}catch(e){Exception(e);} }}));
		if (Arguments.NegativeButton != null) dialog.setNegativeButton(Arguments.NegativeButton.Text, new android.content.DialogInterface.OnClickListener({onClick:function(DialogInterface, int) { try
																																								  {if (Arguments.NegativeButton.onClick != null) Arguments.NegativeButton.onClick(DialogInterface, int);}catch(e){Exception(e);} }}));
		if (Arguments.NeutralButton != null)  dialog.setNeutralButton(Arguments.NeutralButton.Text, new android.content.DialogInterface.OnClickListener({onClick:function(DialogInterface, int) { try
																																								{if (Arguments.NeutralButton.onClick != null) Arguments.NeutralButton.onClick(DialogInterface, int);}catch(e){Exception(e);} }}));
		if (Arguments.OnDismissListener != null) dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener({onDismiss:function(d) {try
																																		   {Arguments.OnDismissListener(d);}catch(e){Exception(e);}}}));
		if (Arguments.OnCancelListener != null) dialog.setOnCancelListener(new android.content.DialogInterface.setOnCancelListener({onCancel:function(d) {try
																																		   {Arguments.OnCancelListener(d);}catch(e){Exception(e);}}}));
		if (Arguments.OnKeyListener != null) dialog.setOnKeyListener(new android.content.DialogInterface.OnKeyListener({onKey:function(d, i, e) {try
																															   {return Arguments.OnKeyListener(d, i, e);}catch(e){Exception(e);}}}));
		if (Arguments.Items != null) dialog.setItems(ToJavaArray(Arguments.Items.Array, StringType), new android.content.DialogInterface.OnClickListener({onClick:function(d, w) {try
																																								 {if (Arguments.Items.onClicks != null) Arguments.Items.onClicks(d, w);}catch(e){Exception(e);}}}));
		if (Arguments.SingleChoiceItems != null) dialog.setSingleChoiceItems(ToJavaArray(Arguments.SingleChoiceItems.Array, StringType), Arguments.SingleChoiceItems.Checked == null ? 0 : Arguments.SingleChoiceItems.Checked, new android.content.DialogInterface.OnClickListener({onClick:function(d, w) {try
																																																																							{if (Arguments.SingleChoiceItems.Clicks != null) Arguments.SingleChoiceItems.Clicks(d, w, Arguments.SingleChoiceItems.Array);}catch(e){Exception(e);}}}));
		if (Arguments.MultiChoiceItems != null) dialog.setMultiChoiceItems(ToJavaArray(Arguments.MultiChoiceItems.Array, StringType), ToJavaArray(Arguments.MultiChoiceItems.Checkeds, java.lang.Boolean.TYPE), new android.content.DialogInterface.OnMultiChoiceClickListener({onClick:function(d, i, b) {try
																																																																					   {if (Arguments.MultiChoiceItems.Clicks != null) Arguments.MultiChoiceItems.Clicks(d, i, b, Arguments.MultiChoiceItems.Array);}catch(e){Exception(e);}}}));
		if (Arguments.OnInit != null) Arguments.OnInit(dialog);

		if (Arguments.init != null) Arguments.init(dialog);
		if (Arguments.msg != null) dialog.setMessage(Arguments.msg);
		if (Arguments.t != null) dialog.setTitle(Arguments.t);
		if (Arguments.i != null) dialog.setIcon(getBitmap(Arguments.i));
		if (Arguments.v != null) dialog.setView(Arguments.v);
		if (Arguments.cc != null) dialog.setCancelable(Arguments.cc);
		if (Arguments.ct != null) dialog.setCustomTitle(Arguments.ct);
		if (Arguments.ibf != null) dialog.setInverseBackgroundForced(Arguments.ibf);
		if (Arguments.pb != null) dialog.setPositiveButton(Arguments.pb.t, new android.content.DialogInterface.OnClickListener({onClick:function(DialogInterface, int) { try
																																	   {if (Arguments.pb.oc != null) Arguments.pb.oc(DialogInterface, int);}catch(e){Exception(e);} }}));
		if (Arguments.nb != null) dialog.setNegativeButton(Arguments.nb.t, new android.content.DialogInterface.OnClickListener({onClick:function(DialogInterface, int) { try
																																	   {if (Arguments.nb.oc != null) Arguments.nb.oc(DialogInterface, int);}catch(e){Exception(e);} }}));
		if (Arguments.mb != null)  dialog.setNeutralButton(Arguments.mb.t, new android.content.DialogInterface.OnClickListener({onClick:function(DialogInterface, int) { try
																																	   {if (Arguments.mb.oc != null) Arguments.mb.oc(DialogInterface, int);}catch(e){Exception(e);} }}));
		if (Arguments.odl != null) dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener({onDismiss:function(d) {try
																															 {Arguments.odl(d);}catch(e){Exception(e);}}}));
		if (Arguments.ocl != null) dialog.setOnCancelListener(new android.content.DialogInterface.setOnCancelListener({onCancel:function(d) {try
																															  {Arguments.ocl(d);}catch(e){Exception(e);}}}));
		if (Arguments.okl != null) dialog.setOnKeyListener(new android.content.DialogInterface.OnKeyListener({onKey:function(d, i, e) {try
																													 {return Arguments.okl(d, i, e);}catch(e){Exception(e);}}}));
		if (Arguments.items != null) dialog.setItems(ToJavaArray(Arguments.items.a, StringType), new android.content.DialogInterface.OnClickListener({onClick:function(d, w) {try
																																							 {if (Arguments.items.oc != null) Arguments.items.oc(d, w);}catch(e){Exception(e);}}}));
		if (Arguments.sci != null) dialog.setSingleChoiceItems(ToJavaArray(Arguments.sci.a, StringType), Arguments.sci.c == null ? 0 : Arguments.sci.c, new android.content.DialogInterface.OnClickListener({onClick:function(d, w) {try
																																																					{if (Arguments.sci.c != null) Arguments.sci.c(d, w, Arguments.sci.a);}catch(e){Exception(e);}}}));
		if (Arguments.mci != null) dialog.setMultiChoiceItems(ToJavaArray(Arguments.mci.a, StringType), ToJavaArray(Arguments.mcu.c, java.lang.Boolean.TYPE), new android.content.DialogInterface.OnMultiChoiceClickListener({onClick:function(d, i, b) {try
																																																									 {if (Arguments.mci.c != null) Arguments.mci.c(d, i, b, Arguments.mci.a);}catch(e){Exception(e);}}}));

		if (Arguments.Show == null || Arguments.Show == true)
		{
			dialog.create().show();
			return dialog;
		}
		else
			return dialog;
	}
	else throw ArgumentException("BaseDialog needs a objective argument");
}
function AlertWindow(Alert) {
	var Dialog = BaseWindow({
								Title:("警告"),
								Width:(180),
								Height:(260),
								View:(TextView({lp:(Adapters.full), t:(Alert), color:(Defaults.AlertDialogColor)})),
								Button1:({Params:(LayoutParams.getParams(260, -1)), Text:("确定"), onClick:(function(v) {Dialog.dismiss();})})
							});
}
function MoveableWindow(Background, onClick, G, Text, Animation, W, H) {
	var onLongClicked = false, tpopx = 0, tpopy = 0, mX, mY;
	var window = BaseWindow({
								Gravity:(G),
								Focusable:(false),
								Width:(W == null ? 55 : W),
								Height:(H == null ? 55 : H),
								View:(Button({
												 a:(Animation),
												 t:(Text),
												 b:(Background),
												 oc:(onClick),
												 olc:(function(v) {onLongClicked = true;}),
												 ot:(function(v, e) {
													 if (!onLongClicked)
													 {
														 mX = e.getX();
														 mY = e.getY();
													 }
													 if (onLongClicked)
													 {
														 var a = e.getAction();
														 if (a == 2)
														 {
															 var delX = parseInt(e.getX() - mX) * -1 / 10;
															 var delY = parseInt(e.getY() - mY) * -1 / 10;
															 tpopx = tpopx - delX;
															 tpopy = tpopy - delY;
															 window.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
														 }
														 if (a == 1) onLongClicked = false;
													 }
												 })
											 }))
							});
	return window;
}
function MoveableView(view, width, height, gravity) {
	var onLongClicked = false, tpopx = 0, tpopy = 0, mX, mY;
	view.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick : function(v) {try
																				  { 
																					  onLongClicked = true;
																					  GraphicsAnimation([v], "long-click");
																				  }catch(e){Exception(e);}return true;}})); 
	view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : function(v, e) {try
																		  {
																			  if (!onLongClicked)
																			  {
																				  mX = e.getX();
																				  mY = e.getY();
																			  }
																			  if (onLongClicked)
																			  {
																				  var a = e.getAction();
																				  if (a == 2)
																				  {
																					  var delX = parseInt(e.getX() - mX) * -1 / 10;
																					  var delY = parseInt(e.getY() - mY) * -1 / 10;
																					  tpopx = tpopx - delX;
																					  tpopy = tpopy - delY;
																					  window.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
																				  }
																				  if (a == 1) onLongClicked = false;
																			  }
																			  GraphicsAnimation([v, e], "touch-click");
																		  }catch(e){Exception(e);}return false;}}));

	var window = PopupWindow({w:width, h:height, f:false, v:view});
	return ShowPop(window, gravity);
}
function MoveWindowView(view, window, onLongClick, onTouch) {
	var onLongClicked = false, tpopx = 0, tpopy = 0, mX, mY;
	view.setOnLongClickListener(new android.view.View.OnLongClickListener({onLongClick : function(v) {try
																				  { 
																					  onLongClicked = true;
																					  GraphicsAnimation([v], "long-click");
																					  if (onLongClick != null) onLongClick(v);
																				  }catch(e){Exception(e);}return true;}})); 
	view.setOnTouchListener(new android.view.View.OnTouchListener({onTouch : function(v, e) {try
																		  {
																			  if (!onLongClicked)
																			  {
																				  mX = e.getX();
																				  mY = e.getY();

																				  if (onTouch != null) onTouch(v, e);
																			  }
																			  if (onLongClicked)
																			  {
																				  var a = e.getAction();
																				  if (a == 2)
																				  {
																					  var delX = parseInt(e.getX() - mX) * -1 / 10;
																					  var delY = parseInt(e.getY() - mY) * -1 / 10;
																					  tpopx = tpopx - delX;
																					  tpopy = tpopy - delY;
																					  window.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
																				  }
																				  if (a == 1) onLongClicked = false;
																			  }
																			  GraphicsAnimation([v, e], "touch-click");
																		  }catch(e){Exception(e);}return false;}}));

	return view;
}
function SingeFileDialog(Arguments) {
	if (Arguments.root == null) throw ArgumentException("Argument 'root' is null, please check your address");

	var rootfile = new java.io.File(Arguments.root);
	var current_dir = rootfile.getAbsolutePath() + "/";

	show(addUpDir(rootfile.list()));

	function show(a) {
		var current = TextView({ml:2, t:current_dir, oc:function(v) {MessageDialog(v.getText().toString(), "当前目录", null, "确定");}});

		var title = LinearLayout({
									 o:1,
									 b:Arguments.TitleBackground,
									 vs:[current, LinearLayout({
																   g:Gravity.Right,
																   o:0,
																   lp:Adapters.full,
																   vs:[Button({b:StriptManager.getAndroidDrawable("ic_menu_add"), lp:LayoutParams.getParams(50, 50), oc:function(v) {
																					  newFile();
																				  }}), Button({b:StriptManager.getAndroidDrawable("ic_menu_delete"), lp:LayoutParams.getParams(50, 50), oc:function(v) {
																									  deleteFile(new java.io.File(current_dir).list());
																								  }}), Button({b:StriptManager.getAndroidDrawable("ic_menu_search"), lp:LayoutParams.getParams(50, 50), oc:function(v) {
																													  searchFile();
																												  }})]
															   })]
								 });

		var dialog = baseDialog({
									CustomTitle:title,
									Cancelable:Arguments.Cancelable,
									NeutralButton:Arguments.NeutralButton,
									PositiveButton:(Arguments.PositiveButton == null ? { Text:"取消"} : Arguments.PositiveButton),
									Items:{Array:a, onClicks:function(d, i) {
											if (i == 0)
											{
												current_dir = getUper(current_dir);
												show(addUpDir(new java.io.File(current_dir).list()));
											}
											else
											{
												current_dir += a[i] + "/";
												var sub = new java.io.File(current_dir);

												if (sub.isFile())
												{
													if (Arguments.onFile != null) Arguments.onFile(sub, d);
													d.dismiss();
												}
												else
												{
													if (Arguments.onDir != null) Arguments.onDir(sub, d);
													if (Arguments.onDir_isHide == null || Arguments.onDir_isHide == false)
														show(addUpDir(sub.list()));
													else
														d.dismiss();
												}
											}
										}}
								});
	}
	function addUpDir(filelist) {
		var array = ["..."];
		for (var i in filelist)
			array.push(filelist[i]);
		return array;
	}
	function getUper(path) {
		var temp = path.split("");

		if (temp[0] == "/")
			temp.splice(0, 1, "");
		if (temp[temp.length - 1] == "/")
			temp.pop();

		var array = temp.join("").split("/");
		array.pop();

		return array.join("/") + "/";
	}
	function newFile() {
		var addview = LinearLayout({o:1, vs:[
										   TextView({lp:Adapters.wider, t:"请输入文件或者文件夹名"}), 
										   EditText({lp:Adapters.wider, id:10032})
									   ]});
		baseDialog({
					   Title:"new file/dir",
					   View:addview,
					   PositiveButton:{Text:"创建文件", onClick:function() {
							   var name = addview.findViewById(10032).getText().toString();
							   var file = new java.io.File(current_dir + name);
							   try
							   {
								   if (file.createNewFile())
									   Toast({msg:"创建成功"});
								   else
									   Toast({msg:"创建失败"});
							   }catch(e){
								   Toast({msg:"创建失败"});
							   }
						   }},
					   NeutralButton:{Text:"创建文件夹", onClick:function() {
							   var name = addview.findViewById(10032).getText().toString();
							   var file = new java.io.File(current_dir + name);
							   if (file.mkdir())
								   Toast({msg:"创建成功"});
							   else
								   Toast({msg:"创建失败"});
						   }},
					   NegativeButton:{Text:"取消"}
				   });
	}
	function deleteFile(list) {
		baseDialog({
					   Title:"delete file/dir",
					   Items:{Array:list, onClicks:function(d, i) {
							   var file = new java.io.File(current_dir + list[i]);
							   baseDialog({
											  Title:"最后问一次",
											  Message:"是否删除" + list[i],
											  PositiveButton:{Text:"确定", onClick:function() {
													  eval("if (file.delete())Toast({msg:'删除成功'});else Toast({msg:'删除失败'});");
												  }},
											  NegativeButton:{Text:"取消"}
										  });
						   }},
					   NegativeButton:{Text:"取消"}
				   });
	}
	function searchFile() {
		var list = [];
		var view = LinearLayout({vs:[
										TextView({t:"请输入文件名", lp:Adapters.wider}), 
										EditText({lp:Adapters.wider, id:1410})
									]
								});
		baseDialog({
					   Title:"search files",
					   View:view,
					   PositiveButton:{Text:"搜索", onClick:function() {
							   var text = view.findViewById(1410).getText().toString();
							   Toast({msg:"搜索中"});
							   newThread(function() {
											 search(new java.io.File(current_dir), text);
											 if (list.length == 0) 
												 Toast({msg:"无匹配文件"});
											 else
												 result();
											 Toast({msg:"搜索完成"});
										 }).start();
						   }},
					   NegativeButton:{Text:"取消"}
				   });
		function result() {
			runOnUiThread(function() {
							  baseDialog({
											 Title:"Files",
											 Items:{Array:list, onClicks:function(d, i) {
													 Arguments.onFile(new java.io.File(list[i]));
												 }},
											 NegativeButton:{Text:"取消"}
										 });
						  });
		}
		function search(file, wn) {
			if (file.isDirectory())
			{
				var sub = file.listFiles();
				for (var i in sub)
				{
					search(sub[i], wn);
				}
			}
			else
			{
				var name = file.getName();
				if (new RegExp(wn).test(name + ""))
				{
					list.push(file.toString());
				}
			}
		}
	}
}
function MessageDialog(Msg, title, click, btn) {
	baseDialog({
				   Title:title == null ? "信息" : title,
				   Message:Msg,
				   NegativeButton:{Text:btn == null ? "确定" : btn, onClick: click}
			   });
}
function VideoDialog(path) {
	video.play(path);
}
function WebDialog(url, title, Settings, objs) {
	var webview = android.webkit.WebView(ctx);
	webview.setLayoutParams(Adapters.Params.full);
	var set = webview.getSettings();
	set.setJavaScriptEnabled(true);
	webview.loadUrl(url);
	var edit = EditText({t:url, lp:LayoutParams.getParams(350, -1), ml:1});
	var button = Button({t:"加载", lp:LayoutParams.getParams(100, -1), oc:function() {
								webview.loadUrl(edit.getText().toString());
							}});

	initSet(set, Settings);

	baseDialog({
				   Title:title == null ? url : title,
				   View:LinearLayout({lp:Adapters.full, vs:[
											 LinearLayout({o:0, lp: Adapters.wider, vs:[edit, button]}),
											 webview
										 ]}),
				   PositiveButton:{Text:"关闭"}
			   });

	function initSet(s, settings) {
		if (settings != null)
		{
			if (settings.afaffu != null) s.setAllowFileAccessFromFileURLs(settings.afaffu);
			if (settings.ace != null) s.setAppCacheEnabled(settings.ace);
			if (settings.acms != null) s.setAppCacheMaxSize(settings.acms);
			if (settings.acp != null) s.setAppCachePath(settings.acp);
			if (settings.bni != null) s.setBlockNetworkImage(settings.bni);
			if (settings.bnl != null) s.setBlockNetworkLoads(settings.bnl);
			if (settings.bizc != null) s.setBuiltInZoomControls(settings.bizc);
			if (settings.de != null) s.setDatabaseEnabled(settings.de);
			if (settings.dp != null) s.setDatabasePath(settings.dp);
			if (settings.dffs != null) s.setDefaultFixedFontSize(settings.dffs);
			if (settings.dfs != null) s.setDefaultFontSize(settings.dfs);
			if (settings.dten != null) s.setDefaultTextEncodingName(settings.dten);
			if (settings.jse != null) s.setJavaScriptEnabled(settings.jse);
			if (settings.lte != null) s.setLightTouchEnabled(settings.lte);
			if (settings.smw != null) s.setSupportMultipleWindows(settings.smw);
			if (settings.sz != null) s.setSupportZoom(settings.sz);
			if (settings.ts != null) s.setTextSize(settings.ts);
			if (settings.tz != null) s.setTextZoom(settings.tz);
		}
	}

	if (objs != null)
	{
		for (var obj in objs)
		{
			webview.addJavascriptInterface(objs[obj], obj + "");
		}
	}
}
function TextFileChecker(path, title, oc) {
	baseDialog({
				   Title:title == null ? new java.io.File(path).getName() : title,
				   Message:readText(path),
				   PositiveButton:{Text:"关闭", onClick:oc}
			   });
}
function ImageDialog(arg, title, oc) {
	baseDialog({
				   Title:title,
				   View:ImageView({i:arg}),
				   PositiveButton:{Text:"关闭", onClick:oc}
			   });
}
function ProgressDialog(Arguments) {
	if (Arguments == null) throw ArgumentException("Arguments should not be null");

	var full = Adapters.Params.full, wider = Adapters.Params.wider, highter = Adapters.Params.heighter, warp = Adapters.Params.warp;

	var bar = SeekBar({max:Arguments.Max, lp:wider, osc:{osp:function() {
								  if (Arguments.onSeek != null) Arguments.onSeek();
								  if (Arguments.os != null) Arguments.os();
							  }}});
	var circle = ProgressBar({pad:[25, 25, 25, 25]});
	var text = TextView({t:Arguments.Text, color:Arguments.TextColor, ml:1, lp:wider, pad:[15, 10, 15, 10], g:Gravity.Left, Ellipsize:TextUtilsTruncateAt.Middle});
	var rate = TextView({t:Arguments.Rate, color:Arguments.RateColor, ml:1, lp:wider, pad:[15, 10, 15, 15], g:Gravity.Right});

	var layout = LinearLayout({lp:full, o:0,
								  vs:[
									  LinearLayout({lp:highter,
													   vs:[circle]}),
									  LinearLayout({lp:full, vs:
													   [
														   text, bar, rate
													   ]})
								  ]});

	var dialog = baseDialog({
								View:layout,
								Icon:Arguments.Icon,
								Title:Arguments.Title,
								Cancelable:Arguments.Cancelable,
								PositiveButton:Arguments.PositiveButton,
								NegativeButton:Arguments.NegativeButton,
								NeutralButton:Arguments.NeutralButton,
								OnDismissListener:Arguments.OnDismissListener,
								OnCancelListener:Arguments.OnCancelListener,
								Show:false
							}).create();

	if (Arguments.i != null) dialog.setIcon(getBitmap(Arguments.i));
	if (Arguments.title != null) dialog.setTitle(Arguments.title);
	if (Arguments.c != null) dialog.setCancelable(Arguments.c);
	if (Arguments.r != null) rate.setText(Arguments.r);
	if (Arguments.t != null) text.setText(Arguments.t);
	if (Arguments.max != null) bar.setMax(Arguments.max);
	if (Arguments.tc != null) text.setTextColor(parseColor(Arguments.tc));
	if (Arguments.rc != null) rate.setTextColor(parseColor(Arguments.rc));
	if (Arguments.color != null)
	{
		var c = parseColor(Arguments.color);
		text.setTextColor(c);
		rate.setTextColor(c);
	}

	return {
		setProgress:function(int) {
			runOnUiThread(function() {
							  bar.setProgress(int);
						  });
		},  dismisDialog:function() {
			runOnUiThread(function() {
							  if (dialog.isShowing())
								  dialog.dismiss();
						  });
		},  getDialog:function() {
			return dialog;
		},  setText:function(Text) {
			runOnUiThread(function() {
							  text.setText(Text);
						  });
		}, setRate:function(Rate) {
			runOnUiThread(function() {
							  rate.setText(Rate);
						  });
		}, showDialog:function() {
			runOnUiThread(function() {
							  if (!dialog.isShowing())
								  dialog.show();
						  });
		}};
}
function ProgressWindow(Arguments) {
	if (Arguments == null) throw ArgumentException("Arguments should not be null");

	var full = Adapters.Params.full, wider = Adapters.Params.wider, highter = Adapters.Params.heighter, warp = Adapters.Params.warp;

	var title = TextView({t:Arguments.Title, color:Arguments.TitleColor, lp:wider, ml:1});
	var bar = SeekBar({max:Arguments.Max, lp:wider, osc:{osp:function() {
								  if (Arguments.onSeek != null) Arguments.onSeek();
								  if (Arguments.os != null) Arguments.os();
							  }}});
	var circle = ProgressBar({oc:function() {Toast("长按移动");}, pad:[25, 25, 25, 25]});
	var text = TextView({t:Arguments.Text, color:Arguments.TextColor, ml:1, lp:wider, pad:[15, 10, 15, 10], g:Gravity.Left, Ellipsize:TextUtilsTruncateAt.Middle});
	var rate = TextView({t:Arguments.Rate, color:Arguments.RateColor, ml:1, lp:wider, pad:[15, 10, 15, 15], g:Gravity.Right});

	var layout = LinearLayout({o:1, vs:[title, LinearLayout({lp:full, o:0, vs:[
																	LinearLayout({lp:highter, vs:[circle]}),
																	LinearLayout({lp:full, vs:[text, bar, rate]})]})
								  ]
							  });

	var window = PopupWindow({
								 v:layout,
								 odl:Arguments.OnDismissListener,
								 f:Arguments.Fucusable,
								 b:Arguments.Background,
								 w:Arguments.Width == null ? 300 : Arguments.Width,
								 h:Arguments.Height == null ? 125 : Arguments.Height
							 });

	if (Arguments.b != null) window.setBackgroundDrawable(getBitmap(Arguments.b));
	if (Arguments.h != null) window.setHeight(Arguments.h);
	if (Arguments.w != null) window.setWidth(Arguments.w);
	if (Arguments.f != null) window.setFocusable(Arguments.f);
	if (Arguments.r != null) rate.setText(Arguments.r);
	if (Arguments.t != null) title.setText(Arguments.t);
	if (Arguments.text != null) text.setText(Arguments.text);
	if (Arguments.max != null) bar.setMax(Arguments.max);
	if (Arguments.txc != null) text.setTextColor(parseColor(Arguments.txc));
	if (Arguments.tc != null) title.setTextColor(parseColor(Arguments.tc));
	if (Arguments.rc != null) rate.setTextColor(parseColor(Arguments.rc));
	if (Arguments.color != null)
	{
		var c = parseColor(Arguments.color);
		title.setTextColor(c);
		text.setTextColor(c);
		rate.setTextColor(c);
	}

	MoveWindowView(circle, window, function(v) {vibrator(200);});

	return {
		setProgress:function(int) {
			runOnUiThread(function() {
							  bar.setProgress(int);
						  });
		},  dismisWindow:function() {
			runOnUiThread(function() {
							  if (window.isShowing())
								  window.dismiss();
						  });
		},  getWindow:function() {
			return window;
		},  setText:function(Text) {
			runOnUiThread(function() {
							  text.setText(Text);
						  });
		}, setRate:function(Rate) {
			runOnUiThread(function() {
							  rate.setText(Rate);
						  });
		}, showWindow:function(gravity, x_offset, y_offset) {
			runOnUiThread(function() {
							  if (!window.isShowing())
								  ShowPop(window, gravity, x_offset, y_offset);
						  });
		}};
}
function FontDialog(fontPath) {
	baseDialog({
				   Title:"Font-" + getFileName(fontPath),
				   View:ScrollView({v:LinearLayout({lp:Adapters.full, vs:[
														   TextView({t:Defaults.TTFTestText, ts:5, lp:Adapters.wider, ttf:fontPath}),
														   TextView({t:Defaults.TTFTestText, ts:10, lp:Adapters.wider, ttf:fontPath}),
														   TextView({t:Defaults.TTFTestText, ts:15, lp:Adapters.wider, ttf:fontPath}),
														   TextView({t:Defaults.TTFTestText, ts:20, lp:Adapters.wider, ttf:fontPath}),
														   TextView({t:Defaults.TTFTestText, ts:30, lp:Adapters.wider, ttf:fontPath}),
														   EditText({ml:5, h:"输入任何字符", ts:30, lp:Adapters.wider, ttf:fontPath})
													   ]})
								   }),
				   PositiveButton:{Text:"确定"}
			   });
}
function LogoDialog(image, text, title) {
	baseDialog({
				   Title:title,
				   View:LinearLayout({g:Gravity.Center, vs:[ImageView({i:image, lp:Adapters.Params.wider}), TextView({g:Gravity.Center, t:text, lp:Adapters.Params.wider})]}),
				   PositiveButton:{Text:"关闭"}
			   });
}
function ExportDialog(path) {
	var ends = "", current = "";
	SingeFileDialog({root:path, Cancelable:false, onFile:function(file) {
							ends = file.getName();
							current = file.getParent() + "";
							if (format(["jpg", "png", "bmp", "jpeg", "gif"]))
								ImageDialog(file + "", ends, function() {
												ExportDialog(current);
											});
							else if (format(["xml", "java", "c", "h", "py", "txt", "js", "html", "ini", "prop", "css", "sh", "vbs", "bat"]))
								TextFileChecker(file + "", ends, function() {
													ExportDialog(current);
												});
							else if (format(["mp3", "wav", "ogg", "m4a"]))
							{
								ExportDialog(current);
								media.play(file + "");
								MediaControlWindow();
							}
							else if (format(["mp4", "3gp", "mov", "avi"]))
							{
								ExportDialog(current);
								VideoDialog(file + "");
							}
							else if (format(["ttf"]))
							{
								ExportDialog(current);
								FontDialog(file + "");
							}
							else if (format(["apk"]))
							{
								ExportDialog(current);
								baseDialog({
											   Title:"提示",
											   msg:"是否安装这个应用",
											   pb:{t:"确定", oc:function() {
													   installAPK(file + "");
												   }},
											   nb:{t:"取消"}
										   });
							}
							else
							{
								ExportDialog(current);
								MessageDialog("没有合适的操作可以打开" + file.getName() + ",是否寻找合适的程序打开该文件?", "提示", function() {
												  StartActivityForFilePort(file);
											  }, "确定");
							}

						}, onDir:function(dir) {current = dir + "";}});
	function format(mat) {
		var s = "";
		for (var i in mat)
			s += "ends.endsWith('." + mat[i] + "')||";
		return eval(s.replace(/\|\|$/, ""));
	}
}
function InputDialog(Arguments) {
	if (Arguments != null)
	{   
		if (Arguments.inputs == null) throw ArgumentException("wtf, arguments 'inputs' is null...");

		var inputs = Arguments.inputs;
		var edits = [];
		var edited = false;

		for (var i in inputs)
		{
			edits.push(TextView({lp:Adapters.Params.wider, t:inputs[i].inf, color:inputs[i].inf_color}));
			edits.push(EditText({lp:Adapters.Params.wider, t:inputs[i].def, color:inputs[i].def_color, i:inputs[i].def_type, h:inputs[i].def_h}));
		}

		var mainView = ScrollView({v:LinearLayout({vs:edits, lp:Adapters.Params.full, b:Arguments.cb})});
		baseDialog({
					   Title:Arguments.t,
					   View:mainView,
					   PositiveButton:{Text:"确定", onClick:function(d) {
							   if (Arguments.done != null)
							   {
								   var edit_count = mainView.getChildCount();
								   var texts = [];
								   for (var i = 0; i < edit_count; i++)
								   {
									   if (mainView.getChildAt(i) instanceof android.widget.EditText) texts.push(mainView.getChildAt(i).getText().toString() + "");
								   }

								   Arguments.done(texts);

								   edited = true;
							   }
						   }}, OnDismissListener:function(d) {
						   if (Arguments.odl != null && !edited)
							   Arguments.odl(d);
					   }, NegativeButton:{Text:"取消"}
				   });
	}
	else throw ArgumentException("Argument is empty");
}
function SingeEditDialog(string, title, onDone) {
	var edit = EditText({t:string, lp:LayoutParams.getParams(300, 300)});
	baseDialog({
				   Title:title,
				   View:edit,
				   PositiveButton:{Text:"确定", onClick:function(d) {
						   if (onDone != null)
							   onDone(edit.getText().toString(), d);
					   }}
			   });
}
function FileEditDialog(Arguments) {
	if (Arguments == null) throw ArgumentException("Argument is null");

	var ends = "";
	var fileName = TextView({t:(new java.io.File(Arguments.path).getName()), lp:Adapters.Params.wider, color:Arguments.title_color});
	var edit = EditText({t:readText(Arguments.path), lp:Adapters.Params.full});
	baseDialog({
				   Title:Arguments.title,
				   View:LinearLayout({vs:[fileName, edit], b:Arguments.bc}),
				   PositiveButton:{Text:"保存", onClick:function(d) {
						   if (Arguments.onSave != null)
							   Arguments.onSave(edit.getText().toString(), d);
					   }}, NegativeButton:{Text:"取消"},
				   OnDismissListener:function(d) {
					   if (Arguments.odl != null)
						   Arguments.odl(edit, d);
				   },
				   NeutralButton:{Text:"选择文件", onClick:function() {
						   SingeFileDialog({
											   root:new java.io.File(Arguments.path).getParent() + "",
											   onFile:function(f) {
												   ends = f.getName();
												   if (format(["xml", "java", "c", "h", "py", "txt", "js", "html", "ini", "prop", "css", "sh", "vbs", "bat"]))
													   FileEditDialog({odl:Arguments.odl, path:f + "", title:f.getName(), cb:Arguments.cb, onSave:Arguments. onSave, title_color:Arguments.title_color });
											   }
										   });
					   }}
			   });
	function format(mat) {
		var s = "";
		for (var i in mat)
			s += "ends.endsWith('." + mat[i] + "')||";
		return eval(s.replace(/\|\|$/, ""));
	}
}
function SeekInputDialog(Arguments) {
	if (Arguments != null)
	{   
		if (Arguments.inputs == null) throw ArgumentException("wtf, arguments 'inputs' is null...");

		var inputs = Arguments.inputs;
		var edits = [];
		var edited = false;

		for (var i in inputs)
		{
			edits.push(LinearLayout({vs:[
											TextView({lp:Adapters.Params.wider, t:inputs[i].inf, color:inputs[i].inf_color}),
											TextView({lp:Adapters.Params.wider, t:"number:"}),
											SeekBar({max:inputs[i].sek_max, p:inputs[i].sek_p, lp:Adapters.Params.wider, osc:{opc:function(seek, int) {
																var textview = seek.getParent().getChildAt(1);
																textview.setText("number:" + int);
															}}})
										]}));
		}

		var mainView = ScrollView({v:LinearLayout({vs:edits, lp:Adapters.Params.full, b:Arguments.cb})});
		baseDialog({
					   Title:Arguments.t,
					   View:mainView,
					   PositiveButton:{Text:"确定", onClick:function(d) {
							   if (Arguments.done != null)
							   {
								   var edit_count = mainView.getChildCount();
								   var nums = [];
								   for (var i = 0; i < edit_count; i++)
									   nums.push(mainView.getChildAt(i).getChildAt(2).getProgress());
								   Arguments.done(nums);
								   edited = true;
							   }
						   }}, OnDismissListener:function(d) {
						   if (Arguments.odl != null && !edited)
							   Arguments.odl(d);
					   }, NegativeButton:{Text:"取消"}
				   });
	}
	else throw ArgumentException("Argument is empty");
}
function MultiChoiceDialog(Arguments) {
	if (Arguments != null)
	{
		var result = [];
		copyArray(Arguments.eds, result);
		if (Arguments.eds == null || Arguments.eds.length == 0)
			fillBoolean(result, Arguments.list.length, false);
		else if (Arguments.eds.length < Arguments.list.length)
		{
			fillArray(result, Arguments.list, false);
		}

		baseDialog({
					   Title:Arguments.t,
					   CustomTitle:Arguments.b,
					   MultiChoiceItems:{Array:Arguments.list, Checkeds:result, Clicks:function(dialog, int, boolean, array) {result[int] = boolean;  if (Arguments.cs != null) Arguments.cs(dialog, int, boolean, array);}},
					   NegativeButton:{Text:"取消"},
					   PositiveButton:{Text:"确定", onClick:function() {
							   if (Arguments.done != null)
								   Arguments.done(result, Arguments.list);
						   }}
				   });
	}
	else ArgumentException("Argument is empty");

	function fillBoolean(arr, length, value) {
		for (var i = 0; i < length; i++)
			arr.push(value);
	}
	function fillArray(arr, to, value) {
		for (var i = arr.length; i < to.length; i++)
			arr.push(value);
	}
	function copyArray(o, n) {
		for (var i in o)
			n[i] = o[i];
	}
}
function SingeItemsDialog(Arguments) {
	if (Arguments != null)
	{
		var array = Arguments.list;
		var which = Arguments.ed == null ? 0 : Arguments.ed;
		baseDialog({
					   Title:Arguments.t,
					   CustomTitle:Arguments.ct,
					   NegativeButton:{Text:"取消"},
					   PositiveButton:{Text:"确定", onClick:function() {
							   if (Arguments.done != null)
								   Arguments.done(which, array);
						   }},
					   SingleChoiceItems:{Array:Arguments.list, Checked:Arguments.ed, Clicks:function(dialog, int, list) {
							   which = int;
							   if (Arguments.cs != null)
								   Arguments.cs(dialog, int, array);
						   }}
				   });
	}
	else throw ArgumentException("wtf");
}
function InputsDialog(Arguments) {
	if (Arguments != null)
	{   
		if (Arguments.inputs == null) throw ArgumentException("wtf, arguments 'inputs' is null...");

		var inputs = Arguments.inputs;
		var edits = [];
		var edited = false;

		for (var i in inputs)
		{
			var InputLayout = LinearLayout({o:1, lp:Adapters.Params.wider});

			switch (inputs[i].type)
			{
				case null:
					InputLayout.addView(EditText({t:inputs[i].edt_t, i:inputs[i].edt_type, h:inputs[i].edt_h, lp:Adapters.Params.wider, olc:function(v) {if (inputs[i].edt_olc != null) inputs[i].edt_olc(v); }}));
					break;
				case "edit":
					InputLayout.addView(EditText({t:inputs[i].edt_t, i:inputs[i].edt_type, h:inputs[i].edt_h, lp:Adapters.Params.wider, olc:function(v) {if (inputs[i].edt_olc != null) inputs[i].edt_olc(v); }}));
					break;
				case "seek":
					InputLayout.addView(LinearLayout({lp:Adapters.Params.wider, vs:[
															 TextView({lp:Adapters.Params.wider, color:inputs[i].sek_color, t:"number:" + (inputs[i].sek_p == null ? 0 : inputs[i].sek_p)}),
															 SeekBar({max:inputs[i].sek_max, p:inputs[i].sek_p, lp:Adapters.Params.wider, osc:{opc:function(seek, int) {
																				 var textview = seek.getParent().getChildAt(0);
																				 textview.setText("number:" + int);
																				 if (inputs[i].sek_opc != null) inputs[i].sek_opc(seek, int);
																			 }}})
														 ]}));
					break;
				case "rbs":
					InputLayout.addView(RadioGroup({lp:Adapters.Params.wider, o:inputs[i].rbs_o,
													   vs:parseRadioButton(i)
												   }));
				case "checks":
					InputLayout.addView(RadioGroup({lp:Adapters.Params.wider, o:inputs[i].checks_o,
													   vs:parseChecks(i)
												   }));
					break;
				case "file":
					var file_path = inputs[i].path;
					InputLayout.addView(EditText({lp:Adapters.Params.wider, h:"长按选择文件",t:inputs[i].file_def, olc:function(v) {
														 SingeFileDialog({
																			 root:file_path,
																			 onFile:function(file) {
																				 v.setText(file.getPath());
																			 }
																		 });
													 }}));
					break;
				case "file-name":
					var file_name_path = inputs[i].path;
					InputLayout.addView(EditText({lp:Adapters.Params.wider, h:"长按选择文件",t:inputs[i].file_def, olc:function(v) {
														 SingeFileDialog({
																			 root:file_name_path,
																			 onFile:function(file) {
																				 v.setText(file.getName());
																			 }
																		 });
													 }}));
					break;
				case "com-edit":
					InputLayout.addView(EditText({lp:Adapters.Params.wider, h:inputs[i].comedit_h, t:inputs[i].comedit_t, olc:inputs[i].comedit_olc}));
					break;
				case "dir":
					var dir_path = inputs[i].path;
					InputLayout.addView(EditText({lp:Adapters.Params.wider, h:"长按选择文件夹", t:inputs[i].dir_def, olc:function(v) {
														 SingeFileDialog({
																			 root:dir_path,
																			 onFile:function(file) {
																				 dir_onFile(file, v);
																			 },
																			 onDir:function(file, d) {
																				 v.setText(file.getPath());
																			 },
																			 PositiveButton:{Text:"确定"},
																			 NeutralButton:{Text:"取消", onClick:function() {
																					 v.setText("");
																				 }}
																		 });
													 }}));
					break;
				case "view":
					InputLayout.addView(inputs[i].view);
					break;
			}

			edits.push(LinearLayout({vs:[
											TextView({lp:Adapters.Params.wider, t:inputs[i].inf, color:inputs[i].inf_color}),
											InputLayout
										]}));
		}

		var mainView = ScrollView({v:LinearLayout({vs:edits, lp:Adapters.Params.full, b:Arguments.cb})});
		baseDialog({
					   Title:Arguments.t,
					   CustomTitle:Arguments.ct,
					   View:mainView,
					   PositiveButton:{Text:"确定", onClick:function(d) {
							   if (Arguments.done != null)
							   {
								   var inf = [];
								   var input_layouts = [];
								   for (var i in edits)
									   if (edits[i] instanceof android.widget.LinearLayout)
										   input_layouts.push(edits[i]);

								   for (var i in input_layouts)
								   {
									   var content_view = input_layouts[i].getChildAt(1).getChildAt(0);
									   if (content_view instanceof android.widget.EditText)
										   inf.push(content_view.getText().toString());
									   else
									   {
										   var inner = content_view.getChildAt(1);
										   if (inner instanceof android.widget.SeekBar)
											   inf.push(inner.getProgress());
										   else
										   {
											   var radio_grounp = inner.getParent();//.getCheckedRadioButtonId());
											   var radiobutton = radio_grounp.findViewById(radio_grounp.getCheckedRadioButtonId());
											   if (radiobutton != null)
												   inf.push(radiobutton.getText().toString());
											   else 
											   {
												   var checks = [];
												   for (var we = 0;  we < radio_grounp.getChildCount(); we++)
												   {
													   checks[we] = (radio_grounp.getChildAt(we).isChecked());
												   }
												   inf.push(checks);
											   }
										   }
									   }
								   }

								   Arguments.done(inf);
								   edited = true;
							   }
						   }}, OnDismissListener:function(d) {
						   if (Arguments.odl != null && !edited)
							   Arguments.odl(d);
					   }, NegativeButton:{Text:"取消"}
				   });
	}
	else throw ArgumentException("Argument is empty");

	function dir_onFile(file, v) {
		MessageDialog("不能选择文件作为路径", "提示", function() {
						  SingeFileDialog({root:file.getParent(), 
											  onFile:function(f) {
												  dir_onFile(f, v);
											  },
											  onDir:function(f) {
												  v.setText(f.getPath());
											  }});
					  }, "继续选择");
	}
	function parseRadioButton(w) {
		var array = [];
		for (var i in inputs[w].rbs)
		{
			array.push(RadioButton({ts:inputs[w].rbs_ts, color:inputs[w].rbs_color, t:inputs[w].rbs[i], lp:Adapters.Params.wrap}));
		}
		return array;
	}
	function parseChecks(index) {
		var array = [];
		for (var i in inputs[index].checks)
		{
			array.push(CheckBox({ts:inputs[index].checks_ts, color:inputs[index].check_color, t:inputs[index].checks[i], lp:Adapters.Params.wrap, ed:inputs[index].checks_w}));
		}
		return array;
	}
}
function UnZipProgress(title, path, UnZipDir) {
	var size = getTotalEntriesSize(path);
	var csize = 0;

	SimpleProgressDialog({
							 max:size,
							 title:title,
							 Do:function(d, t) {UnZip(path, UnZipDir,
													  function(zf, entry) {
														  csize += entry.getSize();
//t(d, ProgressAction.setMessage, "UnZipping:" + entry.getName());
														  t(d, ProgressAction.setProgress, csize);
													  });
							 }
						 });
}
function ZipProgress(title, ZipPath, ZipDir) {

	SimpleProgressDialog({
							 title:title,
							 im:true,
							 style:ProgressStyle.Spinner,
							 Do:function(d, t) {ZipAllFile(ZipPath, ZipDir,
														   function(name, file) {
															   t(d, ProgressAction.setMessage, "Zipping:" + name);
														   });
							 }
						 });
}
function SimpleProgressDialog(meta) {
	var tools = AndroidProgressDialogTools;
	var ProgressDialog = AndroidProgressDialog;

	runOnUiThread(function() {
					  var dialog = ProgressDialog({max:meta.max, style:meta.style, msg:meta.msg, title:meta.title, im:meta.im, v:meta.m, icon:meta.icon, ct:meta.ct, cancelable:meta.cancelable});
					  if (meta.init != null) meta.init(dialog, tools);
					  tools(dialog, ProgressAction.Show);
					  newThread(function() {
									if (meta.Do != null) meta.Do(dialog, tools);
									tools(dialog, ProgressAction.Dismiss);
								}).start();
				  });
}

function AndroidProgressDialog(params) {
	var dialog =  new android.app.ProgressDialog(ctx);

	dialog.setProgressStyle(ProgressStyle.Horizontal);
	dialog.setIndeterminate(false);
	if (params.max != null) dialog.setMax(params.max);
    if (params.msg != null) dialog.setMessage(params.msg);
    if (params.style != null) dialog.setProgressStyle(params.style);
    if (params.title != null) dialog.setTitle(params.title);
	if (params.im != null) dialog.setIndeterminate(params.im);
    if (params.v != null) dialog.setView(params.v);
	if (params.icon != null) dialog.setIcon(getBitmap(params.icon));
	if (params.ct != null) dialog.setCustomTitle(params.ct);
	if (params.cancelable) dialog.setCancelable(params.cancelable);
	return dialog;
}
function AndroidProgressDialogTools(dialog, action, extra) {
	runOnUiThread(function() {
					  if (action == ProgressAction.Show)
						  dialog.show();
					  else if (action == ProgressAction.Dismiss)
						  dialog.dismiss();
					  else if (action == ProgressAction.setProgress)
						  dialog.setProgress(extra);
					  else if (action == ProgressAction.setMessage)
						  dialog.setMessage(extra);
				  });
}
function MediaControlWindow() {
	ShowPop(media_controller_window);
}
/********************************************************************************************/
function AndroidResourceChecker() {
	var items = [];var count = 0;var button = Button({lp:(LayoutParams.getParams(100, 100))});var drawable = android.R.drawable;for (var i in drawable) items.push(i);var text = TextView({color:"#ff0028"}); BaseWindow({Title:"AndroidResourceChecker",Width : 250,Height : 250,View: LinearLayout({vs:[button, text],lp:Adapters.full}), Button1:{Text:"next", onClick:function(v) {if (count < items.length)
																																																									 {button.setBackgroundResource(drawable[items[count]]);text.setText("name-->\n" + items[count] + "\n\n(" + count + "/" + items.length + ")");count ++;}}},Button2 : {Text:"last", onClick:function(v) {if (0 < count)
																																																									 {button.setBackgroundResource(drawable[items[count]]);text.setText("name-->\n" + items[count] + "\n\n(" + count + "/" + items.length + ")");count --;}}}});
}
function CheckThemes() {
	var list = android.R.style;
	var items = [];
	for (var i in list)
		items.push(i);
	check();
	function check(index) {
		baseDialog({
					   Title:"CheckThemes",
					   PositiveButton:{Text:"finish"},
					   SingleChoiceItems:{Array:items, Checked:index, Clicks:function(d, i) {
							   ctx.setTheme(list[items[i]]);
							   print("Checked Theme-->" + items[i]);
							   baseDialog({PositiveButton:{Text:"I agree.."} ,Title:"TestShow", Message:"if java is terminated from the world, there will be a big evil in this world, we can't imagine life without java."});
						   }}
				   });
	}
}
/*
function PropertiesDialog(INIPath, Arguments){
var ini = new databaseTable(INIPath, "INI");
ini.createOrOpen("name, type, content, extra");
var db = ini.toArrayJson();

for(var i in db)
for(var j in db[i]) {
db[i]["inf"] = db[i]["name"];
delete db[i]["name"];

if (db[i]["type"] == "file") {
db[i]["file_def"] = db[i]["content"];
db[i]["path"] = db[i]["content"];

} else if (db[i]["type"] == "dir") {
db[i]["dir_def"] = db[i]["content"];
db[i]["path"] = db[i]["content"];

} else if (db[i]["type"] == "seek") {
db[i]["sek_max"] = (db[i]["extra"] ? 100 : Number(db[i]["extra"]));
db[i]["sek_p"] = Number(db[i]["content"]);

} else if (db[i]["type"] == "edit") {
db[i]["edt_t"] = db[i]["content"];
db[i]["edt_h"] = db[i]["extra"] ? "" : db[i]["extra"];

} else if (db[i]["type"] == "rbs") {

} else if (db[i]["type"] == "checks") {
db[i]["checks"] = ToJavaScriptArray(db[i]["content"]);
db[i]["checks_w"] = db[i]["extra"];
} else if (db[i]["type"] == "file-name") {

} else if (db[i]["type"] == "com-edit") {


}
print(db[i][j]);
}

InputsDialog({
t:Arguments.t == null ? "参数设置" : Arguments.t,
inputs:db,
done:function(rws){

}
});

/*u = [
    {type:"file", name:"Dir", content:"/sdcard"},
{type:"", name:"", content:""},
{type:"", name:"", content:""}
];
u = [
    {type:"file", file_def:"==", path:"/sdcard"},
{type:"dir", path:"/"},
    {type:"rbs", rbs:["内存", "几年", "手机"], rbs_o:0, rbs_color:"#00ef56"},
];


/*
PropertiesINI.load(INIPath);
var names = PropertiesINI.getNames();
var values = [];
for (var i in names){
values.push(PropertiesINI.get(i));
}



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
  {type:"edit", edt_t:"==="},
  
  {type:"seek", t:"=="}
   ],
   done:function(rws){
   print(rws);
   }
   });
}
*/
