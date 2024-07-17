var mat = upper_triangle_matrix(6);

WScript.Echo("行列");
print_matrix_2(mat);

WScript.Echo("係数を入力してください");
var a = Number(WScript.StdIn.ReadLine());

WScript.Echo("列番号（一つ目）を入力してください");
var u = Number(WScript.StdIn.ReadLine())-1;

WScript.Echo("列番号（二つ目）を入力してください");
var v = Number(WScript.StdIn.ReadLine())-1;

col_add(mat,a,u,v);

WScript.Echo((u+1)+ "列目を"　+ a +　"倍したものを" 
		   + (v+1) + "列目に足しました");
		   
print_matrix_2(mat);

//　行列を表す二次元行列Aの
// u列目をa倍してv列目に足す関数
function col_add(A,a,u,v){
	/* ここを埋める */
	
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
