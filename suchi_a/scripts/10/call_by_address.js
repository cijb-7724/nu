var x = [[1,2,3],[4,5,6],[7,8,9]];
var y =[];

y.push(x[2]);
y.push(x[1]);
y.push(x[0]);

WScript.Echo("x:");
print_matrix_2(x);

WScript.Echo("\ny:");
print_matrix_2(y); 

y[0][0] = 100;

WScript.Echo("\nyÇïœçX\n");

WScript.Echo("x:");
print_matrix_2(x);

WScript.Echo("\ny:");
print_matrix_2(y); 

function print_matrix_2(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += ("   " + a[i][j]).slice(-4) + " ";
		WScript.Echo(tmp);
	}
}


