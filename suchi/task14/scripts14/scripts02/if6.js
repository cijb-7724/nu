WScript.Echo("絶対値が5以上10以下の数を入力してください");
var x = WScript.StdIn.ReadLine();
x = Number(x);

//2-3行目は次のように書いてもよい
//var x = Number(WScript.StdIn.ReadLine());

if(　x <= -5 || x >= 5 && x >=-10 && x<= 10 ){
	WScript.Echo("正解です");
}else{
	WScript.Echo("不正解です");
}

