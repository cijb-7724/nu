WScript.Echo("x���W�̒l����͂��Ă�������");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("���������܂����H");
var n = Number(WScript.StdIn.ReadLine());

// �������� y(x_0)=x_0 �̂Ƃ� 
// �z�� init �� [x_0,y_0] �Ƃ���
var init = /* �����𖄂߂� */;

WScript.Echo("�������F\t\t"�@+ exact(c));
WScript.Echo("�I�C���[�@�F\t\t"�@+ euler_method(f,init,c,n));
WScript.Echo("�����Q�N�b�^�@�F\t"�@+ runge_kutta_method(f,init,c,n));
WScript.Echo("�����Q�N�b�^�@�i4���j�F\t"�@+ runge_kutta_method_4th(f,init,c,n));

function runge_kutta_method_4th(f,init,c,n){
	var h = /* �����𖄂߂� */;
	var y = /* �����𖄂߂� */;
	var x = /* �����𖄂߂� */;
	
	for(var i=0;i<n;i++){
		var s_0 = /* �����𖄂߂� */;
		var s_1 = /* �����𖄂߂� */; 
		var s_2 = /* �����𖄂߂� */; 
		var s_3 = /* �����𖄂߂� */; 
				
		y = /* �����𖄂߂� */;
		x += /* �����𖄂߂� */;
	}
	 return y;
}

function f(x,y){
	return /* �����𖄂߂� */;
}

function exact(x){
	return /* �����𖄂߂� */;
}

/* �ȉ��ɕK�v�Ȋ֐��������i�R�s�y��OK�j */