WScript.Echo("�����_�̌�����͂��Ă�������");
var n = Number(WScript.StdIn.ReadLine());

WScript.Echo("���̔����ʂ���͂��Ă�������");
var eps = Number(WScript.StdIn.ReadLine());

var intv = [/*�����𖄂߂�*/];�@// ���

var approx = trapezoid_approx(f,intv,n);

// �f�B���N���ϕ��̒l�̓�/2
WScript.Echo("�ߎ��l�F " + approx);
WScript.Echo("�����l�F�@"�@+ (Math.PI)/2); 

// �ϐ��ϊ���̔�ϕ��֐�
function f(x){
	/*�����𖄂߂�*/
}

/*�ȉ��ɕK�v�Ȋ֐����L�ڂ���i�R�s�y��OK�j*/
