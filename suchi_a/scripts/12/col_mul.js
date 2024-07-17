var mat = upper_triangle_matrix(6);

WScript.Echo("行列");
print_matrix_2(mat);

WScript.Echo("係数を入力してください");
var a = Number(WScript.StdIn.ReadLine());

WScript.Echo("列番号を入力してください");
var u = Number(WScript.StdIn.ReadLine())-1;

col_mul(mat,a,u);

WScript.Echo((u+1)+ "列目を"　+ a +　"倍しました");
print_matrix_2(mat);

//　行列を表す二次元配列Aのu列目をa倍する関数
function col_mul(A,a,u){
	for(var i=0;i<A.length;i++){
		/* ここを埋める */
	}
}

// 二次元配列を表示する関数
function print_matrix_2(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += ("   " + a[i][j]).slice(-4) + " ";
		WScript.Echo(tmp);
	}
}

//　上三角行列を作成する関数
function upper_triangle_matrix(s){
	var ret = [];
	for(var i = 0; i < s; i++){
		ret[i]=[];
		for(var j = 0;j < s;j++){
			if(i <= j) ret[i][j] = 1;
			else ret[i][j] = 0;
		}
	}
	return ret;
}
