// 初期値を表す変数
var a = 0;
var b = 3;

// ループの反復回数を記録する変数
var itr = 0;

// 誤差を表す変数を用意
// 今回は誤差があらわれる部分が以降で一か所だけだが、
//　複数箇所あるような場合は、誤差を変更するときこの値を変えるだけでよいから便利
var eps = 0.00001;

// c = (a+b)/2 とする
// f(a) と f(c) が
// 同符号のとき a に c を代入し
// 異符号のとき b に　c を代入する
// 簡単のために f(c) = 0 となる可能性は極めて低いと考え無視する
while(Math.abs(a - b) > eps){
	var c = (a + b) / 2;
	if(f(c) * f(a) > 0) a = c;
	else b = c; 
	itr++;
}

// 答えと反復回数を出力
WScript.Echo("解は "　+ a);
WScript.Echo("反復回数は " + itr);

// x^3 - 3 という関数
function f(x){
	return Math.exp(x)-2*x*x*x;
}



