var x = [1,2,3,4,5];
array_sum(x);

var y = [1,2,3,4,5,6,7,8,9,10];
array_sum(y);

function array_sum(x){
	var sum = 0;
	for(var i = 0; i<x.length; i++){
		sum += x[i];
	}
	WScript.Echo(sum);
}