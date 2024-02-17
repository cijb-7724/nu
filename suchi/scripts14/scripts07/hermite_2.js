var a = WScript.StdIn.ReadLine();
var a = Number(a);

// x座標の値を入れる配列
var xs = [0,1.5,-2];
var eps = 0.000001;

for(i=0;i<xs.length;i++){
	WScript.Echo("i=" + i);
	
	// l'_j(a) の値
	WScript.Echo("関数値："+l_interpolation_polynomial_d(xs,i,a));
	
	// 近似値を計算
	var plus = // 【1】 ここを埋める;
	var minus = // 【2】 ここを埋める;
	var approx = (plus-minus)/(2*eps);
	WScript.Echo("近似値："+approx);
}

// 【3】 必要な関数を書く（コピペする）