var eps = 0.00001;
var a = 0;
var b = 3;

// �����̉񐔂�����킷�ϐ�
var itr = 0;

// ���̌�������킷�ϐ�
var c = a;

// c �ł̊֐��l f(c) �ŏI�������𔻒�	
while(Math.abs(f(c)) > eps) {
    // c �̍X�V���i�͂��݂����@�j
    c = b - (f(b) * (b - a)) / (f(b) - f(a));

    // �֐��l���������̕��� c �̒l�ŏ㏑��
    if (f(c) * f(a) > 0) {
        a = c;  // a �� c ���������Ȃ̂ŁAa ���X�V
    } else {
        b = c;  // b �� c ���ٕ����Ȃ̂ŁAb ���X�V
    }
    itr++;
    WScript.Echo(itr + "�񔽕���̒l: " + c);
}
	WScript.Echo("���� "�@+ c);
	WScript.Echo("�֐��l�� " + f(c));
	WScript.Echo("�����񐔂� " + itr);

function f(x){
	return Math.exp(x)-2*x*x*x;
}



