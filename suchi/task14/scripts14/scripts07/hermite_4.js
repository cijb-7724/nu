// x座標の値を入れる配列
var xs = [2,-3,4,-1.5];

var eps = 0.001;

for(i=0;i<xs.length;i++){
	for(j=0;j<xs.length;j++){
		WScript.Echo("g_" + i + "(" + xs[j] +  ") = "
			+ g_polynomial(xs,i,xs[j]));
	}
}

for(i=0;i<xs.length;i++){
	for(j=0;j<xs.length;j++){
		WScript.Echo("g'_" + i + "(" + xs[j] +  ") = "
			+ (( /* 【1】ここを埋める */ ));
	}
}

function g_polynomial(xs,j,a){
	//　【2】ここを埋める
}

// 【3】必要な関数を書く（コピペする）