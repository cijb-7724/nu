WScript.Echo("x座標の値を入力してください");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("何等分しますか？");
var n = Number(WScript.StdIn.ReadLine());

// 初期条件 y(x_0)=x_0 のとき 
// 配列 init は [x_0,y_0] とする
var init = [0,2];

WScript.Echo("厳密解：　"　+ exact(c));
WScript.Echo("近似解：　"　+ euler_method(f,init,c,n));

function euler_method(f,init,c,n){
	var h = /* ここを埋める */;
	var y_prev = /* ここを埋める */;
	var y_next;
	
	for(var i=0;i<n;i++){
		y_next = /* ここを埋める */;
		/* ここを埋める */;
	}
	 return y_next;
}

function f(x,y){
	return /* ここを埋める */;
}

function exact(x){
	return /* ここを埋める */;
}




