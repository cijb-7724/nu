// 入力を受け付け
var n = WScript.StdIn.ReadLine();
n = Number(n);

// 答えを格納する配列を用意
var trib = [];

for(var i = 0; i <= n; i++){
	if(i == 0 || i == 1){
		// 0,1項目は0を代入
		trib[i] = 0;
	}else if(i == 2){
		// 2項目は1を代入
		trib[i]=1
	}else{
		// i 項目を計算
		trib[i]= trib[i-1] + trib[i-2] + trib[i-3]; 
	}
}

WScript.Echo(n + "項目までのトリボナッチ数列を表示します");

for(var i = 0; i < trib.length; i++){
	WScript.Echo(i + "項目： "　+ trib[i]);
}

