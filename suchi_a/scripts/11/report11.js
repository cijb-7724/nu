var A = [
    [1, -1, -1, -1],
    [3,  3, -1, -1],
    [4,  5,  5, -1],
    [5,  6,  7,  7]
];
var B = [
    [3, 1, 1, 1],
    [3, 5, 1, 1],
    [4, 5, 7, 1],
    [5, 6, 7, 9]
];

WScript.Echo("A=");
print_matrix_2(A);
WScript.Echo("\nB=");
print_matrix_2(B);

WScript.Echo("\nA×B=");
print_matrix_2(matrix_mul(A,B));

WScript.Echo("\nB×A=");
print_matrix_2(matrix_mul(B,A));


function matrix_mul(a, b) {
    var ret = [];
    if (a[0].length !== b.length) {
        WScript.Echo("Error");
        return null;
    }

    // 結果の行列の各要素を計算
    for (var i = 0; i < a.length; i++) {
        ret[i] = [];
        for (var j = 0; j < b[0].length; j++) {
            ret[i][j] = 0; // 初期化
            for (var k = 0; k < a[0].length; k++) {
                ret[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return ret;
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


// 二次元配列を表示する関数
function print_matrix(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += a[i][j] + " ";
		WScript.Echo(tmp);
	}
}
