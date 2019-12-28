function AlphaAnimation(Arguments) {
	var anim = null;
	
	if (Arguments != null){
		if (Arguments.FromAlpha != null & Arguments.ToAlpha != null) anim = new android.view.animation.AlphaAnimation(parseJavaFloat(Arguments.FromAlpha), parseJavaFloat(Arguments.ToAlpha));
		if (Arguments.from != null && Arguments.to != null) anim = new android.view.animation.AlphaAnimation(parseJavaFloat(Arguments.from), parseJavaFloat(Arguments.to));
		
		if (Arguments.Duration != null) anim.setDuration(Arguments.Duration);
		if (Arguments.FillAfter != null) anim.setFillAfter(Arguments.FillAfter);
		if (Arguments.Interpolator != null) anim.setInterpolator(Interpolator);
		if (Arguments.RepeatCount != null) anim.setRepeatCount(Arguments.RepeatCount);
		if (Arguments.RepeatMode != null) anim.setRepeatMode(Arguments.RepeatMode);
			
		if (Arguments.d != null) anim.setDuration(Arguments.d);
		if (Arguments.fa != null) anim.setFillAfter(Arguments.fa);
		if (Arguments.i != null) anim.setInterpolator(Arguments.i);
		if (Arguments.rc != null) anim.setRepeatCount(Arguments.rc);
		if (Arguments.rm != null) anim.setRepeatMode(Arguments.rm);
		
	} else {
		throw "Arguments can't be null";
	}
	return anim;
}
function ScaleAnimation(Arguments) {
	var anim = null;
	var params = Arguments;
	
	if (params != null){
		
		params.PivotX == null ? parseJavaFloat(0.5) : parseJavaFloat(params.PivotX);
		params.PivotY == null ? parseJavaFloat(0.5) : parseJavaFloat(params.PivotY);
		params.px == null ? parseJavaFloat(0.5) : parseJavaFloat(params.px);
		params.py == null ? parseJavaFloat(0.5) : parseJavaFloat(params.py);
		
		if (params.FromX != null && params.ToX != null && params.FromY != null && params.ToY != null) anim = new android.view.animation.ScaleAnimation(parseJavaFloat(params.FromX), parseJavaFloat(params.ToX), parseJavaFloat(params.FromY), parseJavaFloat(params.ToY) , params.PivotX, params.PivotY);
		if (params.fx != null && params.tx != null && params.fy != null && params.ty != null) anim = new android.view.animation.ScaleAnimation(parseJavaFloat(params.fx), parseJavaFloat(params.tx), parseJavaFloat(params.fy), parseJavaFloat(params.ty) , params.px, params.py);
		
		if (params.Duration != null) anim.setDuration(params.Duration);
		if (params.FillAfter != null) anim.setFillAfter(params.FillAfter);
		if (params.Interpolator != null) anim.setInterpolator(Interpolator);
		if (params.RepeatCount != null) anim.setRepeatCount(params.RepeatCount);
		if (params.RepeatMode != null) anim.setRepeatMode(params.RepeatMode);
			
		if (params.d != null) anim.setDuration(params.d);
		if (params.fa != null) anim.setFillAfter(params.fa);
		if (params.i != null) anim.setInterpolator(params.i);
		if (params.rc != null) anim.setRepeatCount(params.rc);
		if (params.rm != null) anim.setRepeatMode(params.rm);
		
	} else {
		throw ArgumentException("Arguments can't be null");
	}
	return anim;
}
function RotateAnimation(Arguments) {

	var anim = null;
	var params = Arguments;
	
	if (params != null){
	
		params.PivotX == null ? parseJavaFloat(0.5) : parseJavaFloat(params.PivotX);
		params.PivotY == null ? parseJavaFloat(0.5) : parseJavaFloat(params.PivotY);
		params.px == null ? parseJavaFloat(0.5) : parseJavaFloat(params.px);
		params.py == null ? parseJavaFloat(0.5) : parseJavaFloat(params.py);
		
		if (params.FromDegree != null && params.ToDegree != null) anim = new android.view.animation.RotateAnimation(parseJavaFloat(params.FromDegree), parseJavaFloat(params.ToDegree), parseJavaFloat(params.PivotX), parseJavaFloat(params.PivotY));
		if (params.fd != null && params.td != null) anim = new android.view.animation.RotateAnimation(parseJavaFloat(params.fd), parseJavaFloat(params.td), parseJavaFloat(params.px), parseJavaFloat(params.py));
		
		if (params.Duration != null) anim.setDuration(params.Duration);
		if (params.FillAfter != null) anim.setFillAfter(params.FillAfter);
		if (params.Interpolator != null) anim.setInterpolator(Interpolator);
		if (params.RepeatCount != null) anim.setRepeatCount(params.RepeatCount);
		if (params.RepeatMode != null) anim.setRepeatMode(params.RepeatMode);
			
		if (params.d != null) anim.setDuration(params.d);
		if (params.fa != null) anim.setFillAfter(params.fa);
		if (params.i != null) anim.setInterpolator(params.i);
		if (params.rc != null) anim.setRepeatCount(params.rc);
		if (params.rm != null) anim.setRepeatMode(params.rm);
		
	} else {
		throw ArgumentException("Arguments can't be null");
	}
	return anim;
}
function BounceAnimator (Duration, FillAfter) {
    return ScaleAnimation({d:Duration, fa:FillAfter, i:Interpolator.Bounce, fx:1, tx:1, fy:0, ty:1, px:0.5, py:0.5});
}
function TranslateAnimation(Arguments) {
	
	var anim = null;
	var params = Arguments;
	
	if (params != null){
		
		if (params.FromXDelta != null && params.ToXDelta != null && params.FromYDelta != null && params.ToYDelta != null) anim = new android.view.animation.TranslateAnimation(parseJavaFloat(params.FromXDelta), parseJavaFloat(params.ToXDelta), parseJavaFloat(params.FromYDelta), parseJavaFloat(params.ToYDelta));
		if (params.fx != null && params.tx != null && params.fy != null && params.ty != null) anim = new android.view.animation.TranslateAnimation(parseJavaFloat(params.fx), parseJavaFloat(params.tx), parseJavaFloat(params.fy), parseJavaFloat(params.ty));
		
		if (params.Duration != null) anim.setDuration(params.Duration);
		if (params.FillAfter != null) anim.setFillAfter(params.FillAfter);
		if (params.Interpolator != null) anim.setInterpolator(Interpolator);
		if (params.RepeatCount != null) anim.setRepeatCount(params.RepeatCount);
		if (params.RepeatMode != null) anim.setRepeatMode(params.RepeatMode);
			
		if (params.d != null) anim.setDuration(params.d);
		if (params.fa != null) anim.setFillAfter(params.fa);
		if (params.i != null) anim.setInterpolator(params.i);
		if (params.rc != null) anim.setRepeatCount(params.rc);
		if (params.rm != null) anim.setRepeatMode(params.rm);
		
	} else {
		throw ArgumentException("Arguments can't be null");
	}
	return anim;
}

