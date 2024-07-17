WScript.Echo("読み込む行列データの場所を相対パスで指定してください");
var fname = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname);
print_matrix_2(mat);

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

// 二次元配列を表示する関数
function print_matrix_2(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += ("   " + a[i][j]).slice(-4) + " ";
		WScript.Echo(tmp);
	}
}