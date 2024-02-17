WScript.Echo("自然数を入力してください");
var x = WScript.StdIn.ReadLine();
x = Number(x);

WScript.Echo("カウントダウンします");

while(x　> 0){
	// xの値を出力
	WScript.Echo(x);

	//xを一つへらす
	x = x - 1;
}

WScript.Echo("終了です");



