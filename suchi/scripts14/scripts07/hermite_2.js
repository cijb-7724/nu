var a = WScript.StdIn.ReadLine();
var a = Number(a);

// x���W�̒l������z��
var xs = [0,1.5,-2];
var eps = 0.000001;

for(i=0;i<xs.length;i++){
	WScript.Echo("i=" + i);
	
	// l'_j(a) �̒l
	WScript.Echo("�֐��l�F"+l_interpolation_polynomial_d(xs,i,a));
	
	// �ߎ��l���v�Z
	var plus = // �y1�z �����𖄂߂�;
	var minus = // �y2�z �����𖄂߂�;
	var approx = (plus-minus)/(2*eps);
	WScript.Echo("�ߎ��l�F"+approx);
}

// �y3�z �K�v�Ȋ֐��������i�R�s�y����j