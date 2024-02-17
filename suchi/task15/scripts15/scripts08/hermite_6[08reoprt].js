var a = WScript.StdIn.ReadLine();
var a = Number(a);

// x���W�̒l������z��
var xs = [0,-1,1];

// x[i] �ɑΉ�����y���W�̒l�� ys[i] �ɓ����z��
var ys = [];
for(var i = 0;i<xs.length;i++) ys[i] = Math.exp(xs[i]*xs[i]);

// x[i] �ł̓��֐��l�� zs[i] �ɓ����z��
var zs = [];
for(var i = 0;i<xs.length;i++) zs[i] = 2*xs[i]*Math.exp(xs[i]*xs[i]);

var eps = 0.0001;

var val = h_interpolation(xs,ys,zs,a);
var val_p = h_interpolation(xs,ys,zs,a+eps);
var val_m = h_interpolation(xs,ys,zs,a-eps);

WScript.Echo("�ߎ��l�F " + val);
WScript.Echo("�֐��l�F " + Math.exp(a*a));

WScript.Echo("�ߎ��̔����W���F " + (val_p - val_m)/(2*eps));
WScript.Echo("���ۂ̔����W���F " + 2*a*Math.exp(a*a));

function h_interpolation(xs,ys,zs,a){
	var ret = 0;
	
	for(var i=0;i<xs.length;i++){
		ret += ys[i] * h_polynomial(xs,i,a)
				+ zs[i] * g_polynomial(xs,i,a); 
	}
	
	return ret;
}

function g_polynomial(xs,j,a){
	var l_j = l_interpolation_polynomial(xs,j,a);
	
	return l_j * l_j * (a - xs[j]);
}

function h_polynomial(xs,j,a){
	var l_j = l_interpolation_polynomial(xs,j,a);
	var ld_j =  l_interpolation_polynomial_d(xs,j,xs[j]);
	
	return l_j * l_j * (1 - 2*(a-xs[j])*ld_j);
}

function l_interpolation_polynomial_d(xs,j,a){
	var denom =1;
	var numer =0;

	for(var i = 0;i < xs.length; i++){
		if(i != j) denom *= xs[j]-xs[i];		
	}
	
	for(var i = 0;i<xs.length; i++){
		var tmp = 1;
		for(var k=0;k<xs.length; k++){
			if(k != i && k != j) tmp *= a-xs[k];
		}
		if(i != j) numer += tmp;
	}
	
	return numer/denom;
}


function l_interpolation_polynomial(xs,j,a){
	
	var denom = 1;	// denominator ����
	var numer = 1;�@ // numerator ���q
	
	for(var i = 0; i < xs.length; i++){
		if(i != j){
			denom *= xs[j] - xs[i];
			numer *= a - xs[i];
		}
	}
	
	return numer/denom;
}
				
