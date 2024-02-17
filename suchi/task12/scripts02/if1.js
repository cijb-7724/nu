//　キーボードから入力を受け付ける
WScript.Echo("数字１を入力してください");
var num1 = WScript.StdIn.ReadLine();
WScript.Echo("数字２を入力してください");
var num2 = WScript.StdIn.ReadLine();

// 数値に変換
num1 = Number(num1)
num2 = Number(num2)

// 数値同士を比較
// 最初に入力した数値が大きかったらメッセージを出力

if(num1 > num2){	

	WScript.Echo("数字１は数字２よりも大きいです");

}
