// x���W�̒l������z��
var xs = [0,1.5,-2];


for(i=0;i<xs.length;i++){
	WScript.Echo("i=" + i);
	WScript.Echo(l_interpolation_polynomial_d(xs,i,xs[i]));
	WScript.Echo(ljd(xs,i) + "\n");
}

function ljd(xs,j){
	var ret = 0;
	
	for(var i=0;i<xs.length;i++){
		//�@�y1�z �����𖄂߂�
	}
	
	return ret;
}

function l_interpolation_polynomial_d(xs,j,a){
	var denom =1;
	var numer =0;

	for(var i = 0;i < xs.length; i++){
		//�@�y2�z �����𖄂߂�		
	}
	
	for(var i = 0;i<xs.length; i++){
		var tmp = 1;
		for(var k=0;k<xs.length; k++){
			//�@�y3�z �����𖄂߂�		
		}
		if(i != j) numer += tmp;
	}
	
	return numer/denom;
}
