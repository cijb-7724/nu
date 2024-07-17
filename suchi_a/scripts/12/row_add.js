var mat = upper_triangle_matrix(6);

WScript.Echo("行列");
print_matrix_2(mat);

WScript.Echo("係数を入力してください");
var a = Number(WScript.StdIn.ReadLine());

WScript.Echo("行番号（一つ目）を入力してください");
var u = Number(WScript.StdIn.ReadLine())-1;

WScript.Echo("行番号（二つ目）を入力してください");
var v = Number(WScript.StdIn.ReadLine())-1;

row_add(mat,a,u,v);

WScript.Echo((u+1)+ "行目を"　+ a +　"倍したものを" 
		   + (v+1) + "行目に足しました");
print_matrix_2(mat);

// 行列を表す二次元行列Aの
// u行目をa倍したものをv行目に足す関数
function row_add(A,a,u,v){
	for(var i = 0;i<A[u].length;i++){
		// v行目のi番目の要素に
		// u行目のi番目の要素をa倍したものを足す
		// A[v][i] = A[v][i] + a*A[u][i] と書いても同じ
		A[v][i] += a*A[u][i];
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
