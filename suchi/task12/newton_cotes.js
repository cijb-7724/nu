WScript.Echo("���������܂����H");
var m = Number(WScript.StdIn.ReadLine());

var intv = [0,Math.PI];

var approx = newton_cotes(Math.sin,intv,m);
var exact = 2;

WScript.Echo("�ߎ��l�� " + approx);
WScript.Echo("�����l�� " + exact);
WScript.Echo("�덷�� " + Math.abs(approx - exact));

function newton_cotes(f,intv,m){
	var h= /* �����𖄂߂� */;
	var v = /* �����𖄂߂� */;
	var x = /* �����𖄂߂� */;
	var approx = 0;
	
	for(var i=0;i<=m;i++){
		approx += /* �����𖄂߂� */;
		x += /* �����𖄂߂� */;
	}
	
	return /* �����𖄂߂� */;
}

/* �ȉ��ɕK�v�Ȋ֐����L�ڂ���i�R�s�y��OK�j */