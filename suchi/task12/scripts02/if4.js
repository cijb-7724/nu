WScript.Echo("「5の倍数」かつ「7で割って2余る数」を入力してください");
var x = WScript.StdIn.ReadLine();
x = Number(x);

if( x % 5 == 0 && x % 7 == 2 ){
	WScript.Echo("正解です");
}else{
	WScript.Echo("不正解です");
}
