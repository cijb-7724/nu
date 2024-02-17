WScript.Echo("x座標の値を入力してください");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("何等分しますか？");
var n = Number(WScript.StdIn.ReadLine());

// 初期条件 y(x_0)=x_0 のとき 
// 配列 init は [x_0,y_0] とする
var init = [0,1];

WScript.Echo("厳密解：　"　+ exact(c));
WScript.Echo("近似解：　"　+ euler_method(f,init,c,n));

function euler_method(f,init,c,n){
	var h = (c-init[0])/n;
	var y_prev = init[1];
	var y_next;
	
	for(var i=0;i<n;i++){
		y_next = y_prev + h * f(init[0] + i * h, y_prev);
		y_prev = y_next;
	}
	 return y_next;
}

function f(x,y){
	return 2*y*(1-y/2);
}

function exact(x){
	return 2*Math.exp(2*x) / (Math.exp(2*x) + 1);
}




