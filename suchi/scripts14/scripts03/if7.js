WScript.Echo("自然数を入力してください");
var n = WScript.StdIn.ReadLine();
n = Number(n);

if(n % 2 == 0){
	WScript.Echo("2で割りきれます");
}else if(n % 3 == 0){
	WScript.Echo("2で割り切れず、3で割り切れます");
}else if(n % 5 == 0){
	WScript.Echo("2,3で割り切れず、5で割り切れます");
}else{
	WScript.Echo("2,3,5で割り切れません");
}

