var eps = 0.00001;
var a = 0;
var b = 3;

// �����̉񐔂�����킷�ϐ�
var itr = 0;

// ���̌�������킷�ϐ�
var c = a;

// c �ł̊֐��l f(c) �ŏI�������𔻒�	
while(/*�@�����𖄂߂�@*/){
	// c�@�̍X�V��
	c = /*�@�����𖄂߂�@*/;

	// �񕪖@�Ɠ��l�Ɋ֐��l���������̕��� c�@�̒l�ŏ㏑��
	if(/*�@�����𖄂߂�@*/) /*�@�����𖄂߂�@*/;
	else /*�@�����𖄂߂�@*/;
	itr++;
	WScript.Echo(itr + "�񔽕���̒l: " + c);
}
	WScript.Echo("���� "�@+ c);
	WScript.Echo("�֐��l�� " + f(c));
	WScript.Echo("�����񐔂� " + itr);

function f(x){
	return x*x*x - 3;
}



