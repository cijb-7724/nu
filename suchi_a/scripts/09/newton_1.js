WScript.Echo("�����l����͂��Ă�������");

//�@�L�[�{�[�h������͂��󂯕t����Ɠ����ɐ��l�ɕϊ�
var x =Number(WScript.StdIn.ReadLine());

// y �͍X�V���ɂ���čX�V�����l�������ϐ�
// �ŏ��͂Ƃ肠���� x �ŏ�����������
var y = x;

// ����X�V��������\���ϐ�
var cnt = 0;

// �I������Ɏg���l
var eps = 0.000001;

while(Math.abs(y-x) >= eps || /* �����𖄂߂� */){
	
	// ��O�̃��[�v�ōX�V���ꂽ�l�� x �ɕۑ�����
	x = /* �����𖄂߂� */;	
	
	// y �ɐV�����X�V�����l�������
	y = /* �����𖄂߂� */;  
	
	//�@�X�V�񐔂�\���ϐ����C���N�������g(+1)����
	cnt++;
	
	// ����̃��[�v�ōX�V���ꂽ�l��\������
	WScript.Echo(cnt + "��ځF�@" + y);

}

// �����v�Z�������֐�
function f(x){
	return Math.exp(x)-2*x*x*x;
}

// ��K�̓��֐�
function first_order_derivative(x){
	return /* �����𖄂߂� */; 
}

// x_n ���� x_{n+1} ���v�Z����֐�
function next_term(x){
	return /* �����𖄂߂� */;
}


