WScript.Echo("©‘R”‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢");
var n = WScript.StdIn.ReadLine();
n = Number(n);

if(n % 2 == 0){
	WScript.Echo("2‚ÅŠ„‚è‚«‚ê‚Ü‚·");
}else if(n % 3 == 0){
	WScript.Echo("2‚ÅŠ„‚èØ‚ê‚¸A3‚ÅŠ„‚èØ‚ê‚Ü‚·");
}else if(n % 5 == 0){
	WScript.Echo("2,3‚ÅŠ„‚èØ‚ê‚¸A5‚ÅŠ„‚èØ‚ê‚Ü‚·");
}else{
	WScript.Echo("2,3,5‚ÅŠ„‚èØ‚ê‚Ü‚¹‚ñ");
}

