// 最初から要素がある配列で初期化
var x = [10,15,20,"数値解析学"];

// 配列の長さを表示してみる
WScript.Echo("配列の長さ：" + x.length);

// lengthを使って配列の要素を全て表示
WScript.Echo("配列の要素を表示します");
for(var i = 0; i < x.length; i++){
	WScript.Echo(i + "番目の要素：" + x[i]);
}