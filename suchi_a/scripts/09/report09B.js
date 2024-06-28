WScript.Echo("初期値を入力してください");

var x =Number(WScript.StdIn.ReadLine());
var y = x;
var cnt = 0;
var eps = 0.000001;

do{
    x = next_term(x);  // 次の近似値を計算
    y = x;
  
	cnt++;
	WScript.Echo(cnt + "回目：　" + y);
}while(Math.abs(f(y)) > eps);

// 解を計算したい関数
function f(x){
	return Math.exp(x)-2*x*x*x;
}

// 一階の導関数
function first_order_derivative(x){
	var h = 0.0001;  // 微小変化量
    return (f(x + h) - f(x - h)) / (2 * h);
}

// x_n から x_{n+1} を計算する関数
function next_term(x){
	return x - f(x) / first_order_derivative(x);
}


