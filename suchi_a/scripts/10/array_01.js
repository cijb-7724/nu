var a = [];
a[5] = 10;
WScript.Echo("a ‚Ì’·‚³‚Í@" + a.length);
print_array(a);

function print_array(a){
	tmp = "";
	for(var i = 0; i < a.length; i++){
		tmp += a[i] + " ";
	}
	WScript.Echo(tmp);
}