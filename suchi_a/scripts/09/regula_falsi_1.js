var eps = 0.00001;
var a = 0;
var b = 3;

// �����̉񐔂�����킷�ϐ�
var itr = 0;

// ���̌�������킷�ϐ�
var c = a;

// c �ł̊֐��l f(c) �ŏI�������𔻒�	
while(Math.abs(f(c)) > eps){
	// c�@�̍X�V��
	c = c - f(c) / df(c);

	// �񕪖@�Ɠ��l�Ɋ֐��l���������̕��� c�@�̒l�ŏ㏑��
	if (f(c) * f(a) > 0) a = c;
	else b = c;
	itr++;
	WScript.Echo(itr + "�񔽕���̒l: " + c);
}

WScript.Echo("���� "�@+ c);
WScript.Echo("�֐��l�� " + f(c));
WScript.Echo("�����񐔂� " + itr);

function f(x){
	return Math.exp(x)-2*x*x*x;
}

function df(x) {
    var h = 0.0001;  // �����ω���
    return (f(x + h) - f(x - h)) / (2 * h);
}



