var itr = 100000;

var cnt = new Array();

for(var i=0;i<51;i++){
	cnt[i]=0;	
}

for(var i=0;i<itr;i++){
	var x = Math.random();
	var y = Math.random();
	
	// 平均0・分散1（標準偏差1）の正規分布から得られる乱数に変換
	var val = /*【1】ここを埋める*/
	
	// 平均25・分散49(標準偏差7)の正規分布から得られる乱数に変換
	val = /*【2】ここを埋める*/
	
	//　整数値にする
	val = /*【3】ここを埋める*/
	
	// 50以上や0以下はレアケースなのでまとめてしまう
	/*【4】ここを埋める*/
	
	// 配列cntのval番目の配列要素をインクリメント
	cnt[val]++;
}

for(var i=0;i<51;i++){
	output = "";
	
	// floor(cnt[i]/100)個分だけ + を出力
	for(var j=0;j<cnt[i]/100;j++) output += "+";
	WScript.Echo(output);
}


