WScript.Echo("x座標の値を入力してください");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("何等分しますか？");
var n = Number(WScript.StdIn.ReadLine());

// 初期条件 y(x_0)=x_0 のとき 
// 配列 init は [x_0,y_0] とする
var init = /* ここを埋める */;

WScript.Echo("厳密解：\t\t"　+ exact(c));
WScript.Echo("オイラー法：\t\t"　+ euler_method(f,init,c,n));
WScript.Echo("ルンゲクッタ法：\t"　+ runge_kutta_method(f,init,c,n));
WScript.Echo("ルンゲクッタ法（4次）：\t"　+ runge_kutta_method_4th(f,init,c,n));

function runge_kutta_method_4th(f,init,c,n){
	var h = /* ここを埋める */;
	var y = /* ここを埋める */;
	var x = /* ここを埋める */;
	
	for(var i=0;i<n;i++){
		var s_0 = /* ここを埋める */;
		var s_1 = /* ここを埋める */; 
		var s_2 = /* ここを埋める */; 
		var s_3 = /* ここを埋める */; 
				
		y = /* ここを埋める */;
		x += /* ここを埋める */;
	}
	 return y;
}

function f(x,y){
	return /* ここを埋める */;
}

function exact(x){
	return /* ここを埋める */;
}

/* 以下に必要な関数を書く（コピペでOK） */