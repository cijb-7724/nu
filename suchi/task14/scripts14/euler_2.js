WScript.Echo("x座標の値を入力してください");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("何等分しますか？");
var n = Number(WScript.StdIn.ReadLine());

// 初期条件 y(x_0)=x_0, z(x_0)=z_0 のとき 
// 配列 init は [x_0,y_0,z_0] とする
var init = /* ここを埋める */;
var result = euler_method_2(f,g,init,c,n);

WScript.Echo("yの厳密解：　"　+ exact_y(c));
WScript.Echo("yの近似解：　"　+ result[0] + "\n");

WScript.Echo("yの厳密解：　"　+ exact_z(c));
WScript.Echo("yの近似解：　"　+ result[1]);

function euler_method_2(f,g,init,c,n){
	var h = /* ここを埋める */;
	var y_prev = /* ここを埋める */;
	var y_next;
	var z_prev = /* ここを埋める */;
	var z_next;
	
	
	for(var i=0;i<n;i++){
		y_next = /* ここを埋める */;
		z_next = /* ここを埋める */;
		/* ここを埋める */;
		/* ここを埋める */;
	}
	 return [y_next,z_next];
}

function f(x,y,z){
	return /* ここを埋める */;
}

function g(x,y,z){
	return /* ここを埋める */;
}

function exact_y(x){
	return /* ここを埋める */;
}

function exact_z(x){
	return /* ここを埋める */;
}


