var n = 1000;

var D = Math.PI // ��Ԃ̕�
var intv = [0,D];�@// ��Ԃ̏����l
var eps = 0.001;�@//�@��������Ɏg���l
var i = 0; //���[�v�̉񐔂��L�^����ϐ�
var cnt = 0; //�����Ɏg�����_�̌����L�^����ϐ�

var approx = 0;�@//�@���݂̋ߎ��l��ۑ�
var delta;�@// ��� intv�@�̑�`�����ł̋ߎ��l��ۑ�

do{
	delta = /*�����𖄂߂�*/;
	approx += delta;
	intv[0] += /*�����𖄂߂�*/;
	intv[1] += /*�����𖄂߂�*/;
	cnt += n;
	i++;
}while(/*�����𖄂߂�*/);

// �f�B���N���ϕ��̒l�̓�/2
WScript.Echo("�ߎ��l�F " + approx);
WScript.Echo("�����l�F�@"�@+ (Math.PI)/2); 

WScript.Echo("���[�v�̉񐔁F"+i);
WScript.Echo("�����Ɏg�����_�̌��F"+cnt);

function f(x){
	var ret;
	if(/*�����𖄂߂�*/){
		/*�����𖄂߂�*/;
	}else{
		/*�����𖄂߂�*/;
	}
	
	return ret;
}

/*�ȉ��ɕK�v�Ȋ֐����L�ڂ���i�R�s�y��OK�j*/



