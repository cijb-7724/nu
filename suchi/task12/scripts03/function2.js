function array_print(arr){
	// 配列の長さを表示する
	WScript.Echo("配列の長さ：" + arr.length);

	// 配列の要素を全て表示
	WScript.Echo("配列の要素を表示します");
	for(var i = 0; i < arr.length; i++){
		WScript.Echo(i + "番目の要素：" + arr[i]);
	}
}

// 最初から要素がある配列で初期化
var x = [10,15,20,"数値解析学"];

array_print(x);

// push() を使って要素を配列の最後に追加
WScript.Echo("push()で配列の最後に要素を追加します");
x.push(25);
x.push("5月12日");

array_print(x);

