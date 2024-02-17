// x座標の値を入れる配列
var xs = [-1,1,-2,3];

var eps = 0.001;

for(i=0;i<xs.length;i++){
	for(j=0;j<xs.length;j++){
		WScript.Echo("h_" + i + "(" + xs[j] +  ") = "
			+ h_polynomial(xs,i,xs[j]));
	}
}

for(i=0;i<xs.length;i++){
	for(j=0;j<xs.length;j++){
		WScript.Echo("h'_" + i + "(" + xs[j] +  ") = "
			+ (( /* 【1】ここを埋める */ ));
	}
}

function h_polynomial(xs,j,a){
	// 【2】ここを埋める
}

// 【3】必要な関数を書く（コピペする）
