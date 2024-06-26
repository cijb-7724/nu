WScript.Echo("x_{-1} を入力してください");
var x_prev =Number(WScript.StdIn.ReadLine());

WScript.Echo("x_{0} を入力してください");
var x =Number(WScript.StdIn.ReadLine());

var cnt = 0;
var eps = 0.000001;

do{
	x_next = next_term(x, x_prev);
    x_prev = x;
    x = x_next;
    cnt++;
    WScript.Echo(cnt + "回目： x = " + x);
}while(Math.abs(f(x)) > eps);

// 解を計算したい関数
function f(x){
    return 1/(1+Math.exp(-x)) - 0.8;
}

// x_n と x_{n-1} から x_{n+1} を計算する関数
function next_term(x, x_prev){
	return x - f(x) * (x - x_prev) / (f(x) - f(x_prev));
}
