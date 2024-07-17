var mat = upper_triangle_matrix(6);

WScript.Echo("行列");
print_matrix_2(mat);

WScript.Echo("何行目を削除しますか？");

// 行列の n 行目は二次元配列 mat の mat[n-1]　に対応
var u = Number(WScript.StdIn.ReadLine())-1;
row_del(mat,u);

WScript.Echo("削除しました");
print_matrix_2(mat);


// 二次元配列 A の A[u] を削除する関数
function row_del(A,u){
	for(var i=0; i<A.length;i++){
		// iがuよりも大きかったらi-1番目の要素を
		// i番目の要素で上書き
		if(i>u) A[i-1]=A[i];
	}
	// Aの最後の要素（一次元配列）を削除
	A.pop();
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
