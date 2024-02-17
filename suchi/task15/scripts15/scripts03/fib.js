// 入力を受け付け
var n = WScript.StdIn.ReadLine();
n = Number(n);

// 答えを格納する配列を用意
var fib = [];

for(var i = 0; i <= n; i++){
	if(i == 0 || i == 1){
		// 0,1項目は1を代入
		fib[i] = 1;
	}else{
		// i 項目をi-1項目とi-2項目から計算
		fib[i]= fib[i-1] + fib[i-2]; 
	}
}

WScript.Echo(n + "項目までのフィボナッチ数列を表示します");

for(var i = 0; i < fib.length; i++){
	WScript.Echo(i + "項目： "　+ fib[i]);
}
