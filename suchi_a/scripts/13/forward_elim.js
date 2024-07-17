WScript.Echo("行列のデータが入ったファイルを相対パスで指定してください");
var fname = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname);

WScript.Echo("\n以下の行列が読み込まれました");
print_matrix_3(mat);

WScript.Echo("\n前進消去を実行します");
forward_elimination(mat,1);

// 拡大係数行列Aを前進消去する
// flagを1に指定すると途中経過も表示する
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


/*ここに行基本変形の関数の定義を書く（以前のサンプルのコピペでOK）*/