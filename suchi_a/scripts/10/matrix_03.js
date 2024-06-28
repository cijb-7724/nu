WScript.Echo("零行列")
var mat_1 = zero_matrix(3,4);
print_matrix(mat_1);

WScript.Echo("単位行列");
var mat_2 = identity_matrix(5);
print_matrix(mat_2);

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
function zero_matrix(s,t){
	var ret = /* ここを埋める */;
	for(var i = 0; i < s; i++){
		ret[i]=/* ここを埋める */;
		for(var j = 0;j < t;j++){
			ret[i][j] = 0;
		}
	}
	return ret;
}

// s×sの単位行列を作成する関数
function identity_matrix(s){
	var ret = /* ここを埋める */;
	for(var i = 0; i < s; i++){
		ret[i]=/* ここを埋める */;
		for(var j = 0;j < s;j ++){
			if(/* ここを埋める */) ret[i][j] = 1;
			else ret[i][j] = 0;
		}
	}
	return ret;
}



