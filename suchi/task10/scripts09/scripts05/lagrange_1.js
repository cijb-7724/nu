var a = WScript.StdIn.ReadLine();
var a = Number(a);

var k = WScript.StdIn.ReadLine();
var k = Number(k);

var xs = [1,2,3.2,5];

WScript.Echo("l_" + k + "(a)= " 
				+ l_interpolation_polynomial(xs,k,a));

for(var i=0;i<xs.length;i++){
	for(var j=0;j<xs.length;j++){
		WScript.Echo("l_" +j+ "(" +xs[i]+ ")= " 
						+ l_interpolation_polynomial(xs,j,xs[i]));
	}
}

// xs �� x���W���������z��
// j �Ŏw�肳�ꂽ���O�����W���̕⊮������ l_j(x) �����
// �Ԃ�l�Ƃ��� a �� l_j(x) �ɑ�������l l_j(a) ��Ԃ�
function l_interpolation_polynomial(xs,j,a){
	
	var denom = 1;	// denominator ����
	var numer = 1;�@ // numerator ���q
	
	for(var i = 0; i < xs.length; i++){
		/* �����𖄂߂� */
	}
	
	return numer/denom;
}


