/*
cmd
cscript //t:100 test.js
*/

// var xs = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
// var ys = [2.4824, 1.9975, 1.6662, 1.3775, 1.0933, 0.7304, 0.4344, 0.2981, -0.0017, -0.0026];

var xs = [];
var ys = [];

for (var i=0; i<1000; ++i) {
    xs[i] = 0.9 + 0.2 * Math.random();
    ys[i] = xs[i] * xs[i] * Math.exp(xs[i]);
}

// WScript.Echo('S_0 = ' + S_calc(xs, 0));
// WScript.Echo('S_1 = ' + S_calc(xs, 1));
// WScript.Echo('S_2 = ' + S_calc(xs, 2));
// WScript.Echo('T_0 = ' + T_calc(xs, ys, 0));
// WScript.Echo('T_1 = ' + T_calc(xs, ys, 1));

function S_calc(xs, k) {
    var ret = 0;
    for (var i=0; i<xs.length; ++i) {
        ret += Math.pow(xs[i], k);
    }
    return ret;
}
function T_calc(xs, ys, k) {
    var ret = 0;
    for (var i=0; i<xs.length; ++i) {
        ret += ys[i] * Math.pow(xs[i], k);
    }
    return ret;
}

least_square(xs, ys);

function solve_linear_equations(A){
	forward_elimination_2(A,0);
	return backward_substitution(A);
}

function forward_elimination_2(A,flag){
	for(var i=0;i<A.length-1;i++){

		var index = i;
		var abs_max = Math.abs(A[index][i]);
		
		for(var j=i+1;j<A.length;j++){
			if(abs_max < Math.abs(A[j][i])){
				index = j;
				abs_max = Math.abs(A[j][i]);
			}
		}
		
		row_swap(A,i,index);
		
		for(var j=i+1;j<A.length;j++){
			row_add(A,-A[j][i]/A[i][i],i,j);
		}
		if(flag==1){
			WScript.Echo("\n"+(i+1)+"回目");
			WScript.Echo((i+1)+"行目と"+
						 (index+1)+"行目を入れ替えました");

			print_matrix_3(A);
		}
	}
}
function row_add(A,a,u,v){
	for(var i = 0;i<A[u].length;i++){
		A[v][i] += a*A[u][i];
	}
}

function row_swap(A,u,v){
	var tmp = A[u];
	A[u] = A[v];
	A[v] = tmp;
}

function backward_substitution(A){
	var ret = [];
	var row_num = A.length;
	var col_num = A[0].length;
	for(var i=row_num-1;i>=0;i--){
		var tmp = A[i][col_num-1];
		for(j=i+1;j<col_num-1;j++){
			tmp -= A[i][j]*ret[j];
		}
		tmp /= A[i][i];
		ret[i] = tmp;
	}
	var str = "(";
	for(i=0;i<ret.length;i++){
		str += ret[i];
		if(i < ret.length-1) str += ",";
		else str += ")";
	}
	WScript.Echo("ans : ");
	WScript.Echo(str);
	return ret;
}


function least_square(xs, ys) {
    var mat = [];
    var S_0 = S_calc(xs, 0);
    var S_1 =  S_calc(xs, 1);
    var S_2 = S_calc(xs, 2);
    var T_0 =  T_calc(xs, ys, 0);
    var T_1 = T_calc(xs, ys, 1);
    mat[0] = [S_2, S_1, T_1];
    mat[1] = [S_1, S_0, T_0];
    return solve_linear_equations(mat);
}

