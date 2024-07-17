// 【1】～【10】を埋めてプログラムを完成させること
// 【7】～【9】は後退代入の演習でやった内容と全く同じ

WScript.Echo("行列のデータが入ったファイルを相対パスで指定してください");
var fname = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname);

WScript.Echo("\n以下の行列が読み込まれました");
print_matrix_3(mat);

WScript.Echo("\n前進消去を実行します");
forward_elimination_2(mat,1);

WScript.Echo("\n後退代入を実行します");
backward_substitution(mat);

// 部分ピボット選択を行いながら前進消去を行う関数
function forward_elimination_2(A, flag) {
    for (var i = 0; i < A.length - 1; i++) {

        // A[j][i] (j=i,i+1,i+2,...)
        // の中で一番絶対値の大きいような行番号jを見つける
        //　そのような行番号を変数indexに保存する
        var index = i; // 初期値としてi行目を設定
        var abs_max = Math.abs(A[i][i]); // 初期値としてi行目の絶対値を設定
        
        for (var j = i + 1; j < A.length; j++) {
            if (abs_max < Math.abs(A[j][i])) {
                index = j;
                abs_max = Math.abs(A[j][i]);
            }
        }
        
        // i行目とindex行目を入れ替える
        row_swap(A, i, index);
        
        for (var j = i + 1; j < A.length; j++) {
            row_add(A, -A[j][i] / A[i][i], i, j);
        }
        if (flag == 1) {
            WScript.Echo("\n" + (i + 1) + "回目");
            WScript.Echo((i + 1) + "行目と" + (index + 1) + "行目を入れ替えました");
            print_matrix_3(A);
        }
    }
}

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



function row_add(A,a,u,v){
	for(var i = 0;i<A[u].length;i++){
		A[v][i] += a*A[u][i];
	}
}

/*【10】ここに行を交換する関数の定義を書く（コピペする）*/

// 行を交換する関数
function row_swap(A, i, j) {
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

// 行基本変形を行う関数
function row_add(A, factor, src, dest) {
    for (var k = 0; k < A[src].length; k++) {
        A[dest][k] += factor * A[src][k];
    }
}
