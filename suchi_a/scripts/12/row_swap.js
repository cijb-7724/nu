var mat = upper_triangle_matrix(6);

WScript.Echo("行列");
print_matrix_2(mat);

WScript.Echo("行番号（一つ目）を入力してください");
var u = Number(WScript.StdIn.ReadLine())-1;

WScript.Echo("行番号（二つ目）を入力してください");
var v = Number(WScript.StdIn.ReadLine())-1;

row_swap(mat,u,v);

WScript.Echo("行を交換しました");
print_matrix_2(mat);

// 行列を表す二次元行列Aのu行目とv行目を交換する関数
function row_swap(A,u,v){
	// tmp は u 行目の配列を保存しておく変数
	var tmp = A[u];
	//　u 行目を　v 行目の配列で上書き
	A[u] = A[v];
	// v 行目に tmp　に保存していた配列を渡す
	A[v] = tmp;
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
