/* �y1�z�`�y4�z�𖄂߂ăv���O���������������邱�� */

var a = WScript.StdIn.ReadLine();
var a = Number(a);

// x���W�̒l������z��
var xs = [0,0.5,1.5,-2,3];

// x[i] �ɑΉ�����y���W�̒l�� y[i] �ɓ����z��
// ���́@sin ���l���Ă���̂őΉ�����@ys�@�������I�ɍ��
var ys = [];
for(var i=0; i<xs.length;i++) /* �y1�z�����𖄂߂� */

var approx = lagrange_interpolation(xs,ys,a);
var exact = Math.sin(a);
var error = /* �y2�z�����𖄂߂� */;
var estimation = error_estimation(xs,a);

WScript.Echo("P_" + xs.length + "(" + a +  ") = " + approx);
WScript.Echo("sin " + a + "�@= " + exact);

WScript.Echo("�덷: " + error);
WScript.Echo("����: " + estimation);
				
if(error <= estimation) WScript.Echo("�y���z�덷<=����");
else WScript.Echo("�y��z����<�덷");
				
function error_estimation(xs,a){
	var ret = 1;
	
	for(var i=0;i<xs.length;i++) /* �y3�z�����𖄂߂� */;
	
	return Math.abs(ret);
	
}

/* �y4�z�K�v�Ȋ֐������� */