var u_mat = upper_triangle_matrix(6);
var l_mat = lower_triangle_matrix(6);
var result = matrix_add(u_mat,l_mat);

WScript.Echo("A=");
print_matrix(u_mat);

WScript.Echo("B=");
print_matrix(l_mat);

WScript.Echo("A+B=");
print_matrix(result);

function matrix_add(a,b){
	var ret = [];
	for(var i=0; i<　/* 埋める */; i++){
		ret[i] = [];
		for(var j=0; j<　/* 埋める */; j++){
				ret[i][j] = /* 埋める */　;
		}
	}
	return ret;
}

//以下の部分に次の関数の定義を加える（既に作っているはずなのでコピペでOK）
//upper_triangle_matrix, lower_triangle_matrix, print_matrix