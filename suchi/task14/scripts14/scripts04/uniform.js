var itr = 100000;

var cnt = new Array();

for(var i=0;i<51;i++){
	cnt[i]=0;	
}

for(var i=0;i<itr;i++){
	
	// [0,1)の一様分布から得られる乱数値
	var x = Math.random();

	// [0,51)の一様分布から得られる乱数値
	x = 51*x;
	
	//　整数値にする（0から【50】までの整数値）
	x = Math.floor(x);
	
	// 配列cntのval番目の配列要素をインクリメント
	cnt[x]++;
}

for(var i=0;i<51;i++){
	output = "";
	
	// floor(cnt[i]/100)個分だけ + を出力
	for(var j=0;j<cnt[i]/100;j++) output += "+";
	WScript.Echo(output);
}


