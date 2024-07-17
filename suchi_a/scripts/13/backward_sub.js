/* 以下のプログラムではbackward_substitution関数を完成させるのが目的だが、
   forward_elimination関数の中にも空欄がある。
   forward_elimination関数についても以前の演習を参考にして埋めること */

WScript.Echo("行列のデータが入ったファイルを相対パスで指定してください");
var fname = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname);

WScript.Echo("\n以下の行列が読み込まれました");
print_matrix_3(mat);

WScript.Echo("\n前進消去を実行します");
forward_elimination(mat,1);

WScript.Echo("\n後退代入を実行します");
backward_substitution(mat);


function backward_substitution(A) {
    var ret = [];
    var row_num = A.length;
    var col_num = A[0].length;
    for (var i = row_num - 1; i >= 0; i--) {
        var tmp = A[i][col_num - 1]; // 最後の列がbの値
        for (var j = i + 1; j < col_num - 1; j++) {
            tmp -= A[i][j] * ret[j];
        }
        tmp /= A[i][i];
        ret[i] = tmp;
    }
    var str = "(";
    for (i = 0; i < ret.length; i++) {
        str += ret[i];
        if (i < ret.length - 1) str += ",";
        else str += ")";
    }
    WScript.Echo("解：");
    WScript.Echo(str);
    return ret;
}

/*　forward_elimination関数も以前の演習の内容を埋める
 　　forward_elimination関数の内部で使った行基本変形の関数も追加する*/
 function forward_elimination(A, flag) {
    for (var i = 0; i < A.length - 1; i++) {
        for (var j = i + 1; j < A.length; j++) {
            row_transformation(A, i, j, -A[j][i] / A[i][i]);
        }
        if (flag == 1) {
            WScript.Echo("\n" + (i + 1) + "回目");
            print_matrix_3(A);
        }
    }
}


// 要素に数値が入った行列(2次元配列)を受け取って表示する関数
// 各要素は整数部が最大4桁・小数部が2桁固定で表示される
function print_matrix_3(a){
	for(var i = 0; i < a.length; i++ ){
		var tmp = "";
		for(var j = 0; j < a[i].length; j++ )
			tmp += ("  　   " + a[i][j].toFixed(2)).slice(-7) + " ";
		WScript.Echo(tmp);
	}
}

// ファイルから行列のデータを読み込んで二次元配列を返す関数
// 実行されるプログラムからの相対パスで指定した場所にあるファイルを読み込む
function matrix_from_file(str){
	var file = WScript.CreateObject("Scripting.FileSystemObject").OpenTextFile(str,1);
	var ret = new Array();
	while( !file.AtEndOfStream ){
		var arr = file.ReadLine().split(/\s+/);
		for(var i = 0; i < arr.length ; i++)
			if(arr[i].indexOf('/') != -1) 
				arr[i]=Number(arr[i].split('/')[0])/Number(arr[i].split('/')[1]);
			else arr[i] = Number(arr[i]);
		ret.push(arr);
	}
	file.close();
	return ret;
}

