WScript.Echo("x_{-1} を入力してください");
var x_prev =Number(WScript.StdIn.ReadLine());

WScript.Echo("x_{0} を入力してください");
var x =Number(WScript.StdIn.ReadLine());

var cnt = 0;
var eps = 0.000001;

do{
	/* ここを埋める */
}while(/* ここを埋める */);

// 解を計算したい関数
function f(x){
	return x*x*x - 3;	
}

// x_n と x_{n-1} から x_{n+1} を計算する関数
function next_term(x, x_prev){
	return /* ここを埋める */;
}
