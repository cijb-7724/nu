var as=[3,1,2,3,4,5];
var b = 3.1;

WScript.Echo(polynomial_3(as,b));

function polynomial_3(as,b){
	var ret = as[as.length-1]*b + as[as.length-2];
	
	for(var i=/*ここを埋める*/;i>=0;i--){
		ret = /*ここを埋める*/;
	}
	
	return ret;
}
