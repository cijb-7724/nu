var as=[3,1,2,3,4,5];
var b = 3.1;

WScript.Echo(polynomial_1(as,b));

function polynomial_1(as,b){
	var ret = 0;
	
	for(i=0;i<as.length;i++){
		var bn = 1;
		
		//b^nを計算
		for(j=0; j<i; j++) /* ここを埋める */;

		//a_n * b^nを計算してretに加算する		
		ret += /* ここを埋める */;
	}
	
	return ret;
}





