/* 【1】～【4】を埋めてプログラムを完成させること */

var a = WScript.StdIn.ReadLine();
var a = Number(a);

// x座標の値を入れる配列
var xs = [0,0.5,1.5,-2,3];

// x[i] に対応するy座標の値を y[i] に入れる配列
// 今は　sin を考えているので対応する　ys　を自動的に作る
var ys = [];
for(var i=0; i<xs.length;i++) /* 【1】ここを埋める */

var approx = lagrange_interpolation(xs,ys,a);
var exact = Math.sin(a);
var error = /* 【2】ここを埋める */;
var estimation = error_estimation(xs,a);

WScript.Echo("P_" + xs.length + "(" + a +  ") = " + approx);
WScript.Echo("sin " + a + "　= " + exact);

WScript.Echo("誤差: " + error);
WScript.Echo("見積: " + estimation);
				
if(error <= estimation) WScript.Echo("【正】誤差<=見積");
else WScript.Echo("【誤】見積<誤差");
				
function error_estimation(xs,a){
	var ret = 1;
	
	for(var i=0;i<xs.length;i++) /* 【3】ここを埋める */;
	
	return Math.abs(ret);
	
}

/* 【4】必要な関数を書く */