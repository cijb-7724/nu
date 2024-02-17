/* 【1】【2】を埋めてプログラムを完成させること */

var a = WScript.StdIn.ReadLine();
var a = Number(a);

// x座標の値を入れる配列
var xs = [-1,1];

// x[i] に対応するy座標の値を y[i] に入れる配列
var ys = [1,2];

WScript.Echo("P_" + xs.length + "(" + a +  ")= " 
				+ lagrange_interpolation(xs,ys,a));


function lagrange_interpolation(xs,ys,a){
	var ret = 0;

	// ラグランジュの補完多項式 l_i(a) の値と ys　の各要素をとってきて計算
	/* 【1】ここを埋める */
	
	return ret;
}

/* 【2】ここに必要な関数を書く */