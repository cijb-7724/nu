WScript.Echo("x���W�̒l����͂��Ă�������");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("���������܂����H");
var n = Number(WScript.StdIn.ReadLine());

// �������� y(x_0)=x_0, z(x_0)=z_0 �̂Ƃ� 
// �z�� init �� [x_0,y_0,z_0] �Ƃ���
var init = /* �����𖄂߂� */;
var result = euler_method_2(f,g,init,c,n);

WScript.Echo("y�̌������F�@"�@+ exact_y(c));
WScript.Echo("y�̋ߎ����F�@"�@+ result[0] + "\n");

WScript.Echo("y�̌������F�@"�@+ exact_z(c));
WScript.Echo("y�̋ߎ����F�@"�@+ result[1]);

function euler_method_2(f,g,init,c,n){
	var h = /* �����𖄂߂� */;
	var y_prev = /* �����𖄂߂� */;
	var y_next;
	var z_prev = /* �����𖄂߂� */;
	var z_next;
	
	
	for(var i=0;i<n;i++){
		y_next = /* �����𖄂߂� */;
		z_next = /* �����𖄂߂� */;
		/* �����𖄂߂� */;
		/* �����𖄂߂� */;
	}
	 return [y_next,z_next];
}

function f(x,y,z){
	return /* �����𖄂߂� */;
}

function g(x,y,z){
	return /* �����𖄂߂� */;
}

function exact_y(x){
	return /* �����𖄂߂� */;
}

function exact_z(x){
	return /* �����𖄂߂� */;
}


