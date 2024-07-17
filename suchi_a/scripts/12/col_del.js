var mat = upper_triangle_matrix(6);

WScript.Echo("行列");
print_matrix_2(mat);

WScript.Echo("何列目を削除しますか？");

var u = Number(WScript.StdIn.ReadLine())-1;
col_del(mat,u);

WScript.Echo("削除しました");
print_matrix_2(mat);

//行列を表す二次元行列Aのu列目を削除する関数
function col_del(A,u){
	for(var i =0;i<A.length;i++){
		for(var j=0;j<A[i].length;j++){
			// jがuより大きくなったら
			// j-1列目の値をj列目の値で上書き
			/* ここを埋める */
		}
		//　一番最後の列の値を削除する
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

