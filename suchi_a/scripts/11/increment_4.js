var x = [[1,2,3],[4,5,6]];

var y = increment(x);

WScript.Echo("\nŠÖ”I—¹Œã‚Ì  x: ");
print_matrix_2(x);

WScript.Echo("\nŠÖ”•Ô‚è’l‚Ì  y: ");
print_matrix_2(y);

function increment(x){
	var ret = [];
	for(var i=0; i< x.length; i++){
		ret.push(x[i]);
	}	
		
	for(var i=0; i< ret.length; i++){
		for(var j=0; j< ret[i].length;j++)
			ret[i][j]++;
	}
	
	WScript.Echo("ŠÖ”‚Ì’†‚Å‚Ì ret:");
	print_matrix_2(ret);

	return ret;
}

function print_matrix_2(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += ("   " + a[i][j]).slice(-4) + " ";
		WScript.Echo(tmp);
	}
}