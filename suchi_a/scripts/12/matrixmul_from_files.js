var A = matrix_from_file(/*　ここを埋める　*/);
var B = matrix_from_file(/*　ここを埋める　*/);
var C = matrix_from_file(/*　ここを埋める　*/);

// 行列の掛算を行う時は、以前に作成した関数を用いるとよい
// 次の行ではA×B×Cをまとめて書いている
//　別々の行に分けて書いてもよい(最初の行にA×Bを計算して変数Xに保存して、次の行でX×Cを計算）

var result = /*　ここを埋める　*/

WScript.Echo("A=");
print_matrix_2(A);

WScript.Echo("\nB=");
print_matrix_2(B);

WScript.Echo("\nC=");
print_matrix_2(C);

WScript.Echo("\nA×B×C=");
print_matrix_2(result);

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

function print_matrix_2(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += ("   " + a[i][j]).slice(-4) + " ";
		WScript.Echo(tmp);
	}
}

