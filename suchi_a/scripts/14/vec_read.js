WScript.Echo("ベクトルのデータが入ったファイルを相対パスで指定してください");
var fname = WScript.StdIn.ReadLine();
var vec = vector_from_file(fname);

WScript.Echo("次のベクトルが読み込まれました");
print_vector(vec);

// ファイルからベクトルのデータを読み込んで一次元配列を返す関数
// 実行されるプログラムからの相対パスで指定した場所にあるファイルを読み込む
function vector_from_file(str){
	var file = WScript.CreateObject("Scripting.FileSystemObject").OpenTextFile(str,1);

	var arr = file.ReadLine().split(/\s+/);
	for(var i = 0; i < arr.length ; i++){
		if(arr[i].indexOf('/') != -1) 
			arr[i]=Number(arr[i].split('/')[0])/Number(arr[i].split('/')[1]);
		else arr[i] = Number(arr[i]);
	}
	
	file.close();
	return arr;
}

// 一次元配列を受け取って行ベクトルのように表示する関数
function print_vector(x){
	var str = "(";
	for(var i=0;i<x.length;i++){
		if(i!=x.length-1) str += x[i] + ", ";
		else str += x[i] + ")";
	}
	WScript.Echo(str);
}

