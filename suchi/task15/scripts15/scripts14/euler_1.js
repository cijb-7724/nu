WScript.Echo("x���W�̒l����͂��Ă�������");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("���������܂����H");
var n = Number(WScript.StdIn.ReadLine());

// �������� y(x_0)=x_0 �̂Ƃ� 
// �z�� init �� [x_0,y_0] �Ƃ���
var init = [0,2];

WScript.Echo("�������F�@"�@+ exact(c));
WScript.Echo("�ߎ����F�@"�@+ euler_method(f,init,c,n));

function euler_method(f,init,c,n){
	var h = /* �����𖄂߂� */;
	var y_prev = /* �����𖄂߂� */;
	var y_next;
	
	for(var i=0;i<n;i++){
		y_next = /* �����𖄂߂� */;
		/* �����𖄂߂� */;
	}
	 return y_next;
}

function f(x,y){
	return /* �����𖄂߂� */;
}

function exact(x){
	return /* �����𖄂߂� */;
}




