if(10 == "10"){
	WScript.Echo("比較演算子では数字の10と文字列の10は同じものと解釈される");
}else{
	WScript.Echo("比較演算子では数字の10と文字列の10は違うものと解釈される");
}

if(10 >= "5"){
	WScript.Echo("数値の10 ≧ 文字列の5");
}else if(10 <= "5")　{
	WScript.Echo("数値の10 ≦ 文字列の5");
}else{
	WScript.Echo("数値の10と文字列の5の間に大小関係はない");
}

if("5B" >= "5A"){
	WScript.Echo("数値の10 ≧ 文字列の5A");
}else if("5B" <= "5")　{
	WScript.Echo("数値の10 ≦ 文字列の5A");
}else{
	WScript.Echo("数値の10と文字列の5Aの間に大小関係はない");
}




