var eps = 0.00001;
var a = 0;
var b = 3;

// 反復の回数をあらわす変数
var itr = 0;

// 解の候補をあらわす変数
var c = a;

// c での関数値 f(c) で終了条件を判定	
while(/*　ここを埋める　*/){
	// c　の更新式
	c = /*　ここを埋める　*/;

	// 二分法と同様に関数値が同符号の方を c　の値で上書き
	if(/*　ここを埋める　*/) /*　ここを埋める　*/;
	else /*　ここを埋める　*/;
	itr++;
	WScript.Echo(itr + "回反復後の値: " + c);
}
	WScript.Echo("解は "　+ c);
	WScript.Echo("関数値は " + f(c));
	WScript.Echo("反復回数は " + itr);

function f(x){
	return x*x*x - 3;
}



