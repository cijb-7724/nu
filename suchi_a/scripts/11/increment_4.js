var x = [[1,2,3],[4,5,6]];

var y = increment(x);

WScript.Echo("\n�֐��I�����  x: ");
print_matrix_2(x);

WScript.Echo("\n�֐��Ԃ�l��  y: ");
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
	
	WScript.Echo("�֐��̒��ł� ret:");
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