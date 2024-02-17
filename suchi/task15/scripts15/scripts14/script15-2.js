WScript.Echo("x���W�̒l����͂��Ă�������");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("���������܂����H");
var n = Number(WScript.StdIn.ReadLine());

// �������� y(x_0)=x_0, z(x_0)=z_0 �̂Ƃ� 
// �z�� init �� [x_0,y_0,z_0] �Ƃ���
var init = [0, 2, -10];
var result = euler_method_2(f,g,init,c,n);

WScript.Echo("y�̌������F�@"�@+ exact_y(c));
WScript.Echo("y�̋ߎ����F�@"�@+ result[0] + "\n");

WScript.Echo("y�̌������F�@"�@+ exact_z(c));
WScript.Echo("y�̋ߎ����F�@"�@+ result[1]);

function euler_method_2(f,g,init,c,n){
	var h = (c- init[0]) / n;
	var y_prev = init[1];
	var y_next;
	var z_prev = init[2];
	var z_next;
	
	for(var i=0;i<n;i++){
		y_next = y_prev + h * f(init[0]+i*h, y_prev, z_prev);
		z_next = z_prev + h * g(init[0]+i*h, y_prev, z_prev);
		y_prev = y_next;
		z_prev = z_next;
	}
	 return [y_next,z_next];
}

function f(x,y,z){
	return z;
}

function g(x,y,z){
	return -10*z-16*y;
}

function exact_y(x){
	return Math.exp(-2*x) + Math.exp(-8*x);
}

function exact_z(x){
	return -2*Math.exp(-2*x) - 8*Math.exp(-8*x);
}


