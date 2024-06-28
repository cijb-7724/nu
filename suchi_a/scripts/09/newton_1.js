WScript.Echo("初期値を入力してください");

//　キーボードから入力を受け付けると同時に数値に変換
var x =Number(WScript.StdIn.ReadLine());

// y は更新式によって更新した値をいれる変数
// 最初はとりあえず x で初期化をする
var y = x;

// 何回更新したかを表す変数
var cnt = 0;

// 終了判定に使う値
var eps = 0.000001;

while(Math.abs(y-x) >= eps || /* ここを埋める */){
	
	// 一つ前のループで更新された値を x に保存する
	x = /* ここを埋める */;	
	
	// y に新しく更新した値をいれる
	y = /* ここを埋める */;  
	
	//　更新回数を表す変数をインクリメント(+1)する
	cnt++;
	
	// 今回のループで更新された値を表示する
	WScript.Echo(cnt + "回目：　" + y);

}

// 解を計算したい関数
function f(x){
	return Math.exp(x)-2*x*x*x;
}

// 一階の導関数
function first_order_derivative(x){
	return /* ここを埋める */; 
}

// x_n から x_{n+1} を計算する関数
function next_term(x){
	return /* ここを埋める */;
}


