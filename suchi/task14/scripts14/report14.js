WScript.Echo("x���W�̒l����͂��Ă�������");
var c = Number(WScript.StdIn.ReadLine());

WScript.Echo("���������܂����H");
var n = Number(WScript.StdIn.ReadLine());

// �������� y(x_0)=x_0 �̂Ƃ� 
// �z�� init �� [x_0,y_0] �Ƃ���
var init = [0,1];

WScript.Echo("�������F�@"�@+ exact(c));
WScript.Echo("�ߎ����F�@"�@+ euler_method(f,init,c,n));

function euler_method(f,init,c,n){
	var h = (c-init[0])/n;
	var y_prev = init[1];
	var y_next;
	
	for(var i=0;i<n;i++){
		y_next = y_prev + h * f(init[0] + i * h, y_prev);
		y_prev = y_next;
	}
	 return y_next;
}

function f(x,y){
	return 2*y*(1-y/2);
}

function exact(x){
	return 2*Math.exp(2*x) / (Math.exp(2*x) + 1);
}




