if(10 == "10"){
	WScript.Echo("数字10と文字列10は同じものと解釈");
}else{
	WScript.Echo("数字10と文字列10は違うものと解釈");
}

if(10 >= "5"){
	WScript.Echo("数値10 ≧ 文字列の5");
}else if(10 < "5")　{
	WScript.Echo("数値10 < 文字列の5");
}else{
	WScript.Echo("数値10と文字列5に大小関係はない");
}

if(10 >= "5A"){
	WScript.Echo("数値の10 ≧ 文字列の5A");
}else if(10 < "5A")　{
	WScript.Echo("数値の10 < 文字列の5A");
}else{
	WScript.Echo("数値10と文字列5Aに大小関係はない");
}




