WScript.Echo("���i�K�ŉ��������܂����H");
var n = Number(WScript.StdIn.ReadLine());
WScript.Echo("���i�K�ŉ��������܂����H");
var m = Number(WScript.StdIn.ReadLine());

var intv = [0,2];

// n*m �����������̂Ɍ������g��������
var approx1 = newton_cotes(f,intv,n*m);

// ���炩����n������������Ԃ����A����Ԗ���m�������������g��������
var approx2 = composite_newton_cotes(f,intv,n,m);

var exact = Math.PI;

WScript.Echo("�ߎ��l�P�� " + approx1);
WScript.Echo("�ߎ��l�Q�� " + approx2);
WScript.Echo("�����l�� " + exact);
WScript.Echo("�ߎ��l�P�Ƃ̌덷�� " + Math.abs(approx1 - exact));
WScript.Echo("�ߎ��l�Q�Ƃ̌덷�� " + Math.abs(approx2 - exact));

function composite_newton_cotes(f,intv,n,m){
	var h= /* �����𖄂߂� */;
	var finer_intv = /* �����𖄂߂� */;
	var approx = 0;
	
	for(var i=0;i<n;i++){
		approx += /* �����𖄂߂� */;
		finer_intv[0] += /* �����𖄂߂� */;
		finer_intv[1] += /* �����𖄂߂� */;
	}
	
	return approx;
}


function f(x){
	
	var ret;
	
	if(Math.abs(x)>2) return ret = 0;
	else ret = Math.sqrt(4-x*x);
	
	return ret;

}

/* �ȉ��ɕK�v�Ȋ֐����L�ځi�R�s�y��OK�j */