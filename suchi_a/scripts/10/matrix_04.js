WScript.Echo("上三角行列")
var u_mat = upper_triangle_matrix(6);
print_matrix(u_mat);

WScript.Echo("下三角行列");
var l_mat = lower_triangle_matrix(7);
print_matrix(l_mat);

// 二次元配列を表示する関数
function print_matrix(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += a[i][j] + " ";
		WScript.Echo(tmp);
	}
}

//　s×tの零行列を作成する関数
function upper_triangle_matrix(s){
	var ret = [];
	for(var i = 0; i < s; i++){
		ret[i]=[];
		for(var j = 0;j < s;j++){
			if(/*埋める*/) ret[/*埋める*/][/*埋める*/] = /*埋める*/;
			else ret[/*埋める*/][/*埋める*/] = /*埋める*/;
		}
	}
	return ret;
}

// s×sの単位行列を作成する関数
function lower_triangle_matrix(s){
	var ret = [];
	for(var i = 0; i < s; i++){
		ret[i]=[];
		for(var j = 0;j < s;j++){
			if(/*埋める*/) ret[/*埋める*/][/*埋める*/] = /*埋める*/;
			else ret[/*埋める*/][/*埋める*/] = /*埋める*/;
		}
	}
	return ret;
}

