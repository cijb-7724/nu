WScript.Echo("x座標の値を入力してください");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("何等分しますか？");
var n = Number(WScript.StdIn.ReadLine());

// 初期条件 y(x_0)=x_0, z(x_0)=z_0 のとき 
// 配列 init は [x_0,y_0,z_0] とする
var init = [0, 2, -10];
var result = euler_method_2(f,g,init,c,n);

WScript.Echo("yの厳密解：　"　+ exact_y(c));
WScript.Echo("yの近似解：　"　+ result[0] + "\n");

WScript.Echo("yの厳密解：　"　+ exact_z(c));
WScript.Echo("yの近似解：　"　+ result[1]);

function euler_method_2(f,g,init,c,n){
	var h = (c- init[0]) / n;
	var y_prev = init[1];
	var y_next;
	var z_prev = init[2];
	var z_next;
	
	for(var i=0;i<n;i++){
		y_next = y_prev + h * f(init[0]+i*h, y_prev, z_prev);
		z_next = z_prev + h * g(init[0]+i*h, y_prev, z_prev);
		y_prev = y_next;
		z_prev = z_next;
	}
	 return [y_next,z_next];
}

function f(x,y,z){
	return z;
}

function g(x,y,z){
	return -10*z-16*y;
}

function exact_y(x){
	return Math.exp(-2*x) + Math.exp(-8*x);
}

function exact_z(x){
	return -2*Math.exp(-2*x) - 8*Math.exp(-8*x);
}


