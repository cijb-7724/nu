WScript.Echo("�����l����͂��Ă�������");

var x =Number(WScript.StdIn.ReadLine());
var y = x;
var cnt = 0;
var eps = 0.000001;

do{
    x = next_term(x);  // ���̋ߎ��l���v�Z
    y = x;
  
	cnt++;
	WScript.Echo(cnt + "��ځF�@" + y);
}while(Math.abs(f(y)) > eps);

// �����v�Z�������֐�
function f(x){
	return Math.exp(x)-2*x*x*x;
}

// ��K�̓��֐�
function first_order_derivative(x){
	var h = 0.0001;  // �����ω���
    return (f(x + h) - f(x - h)) / (2 * h);
}

// x_n ���� x_{n+1} ���v�Z����֐�
function next_term(x){
	return x - f(x) / first_order_derivative(x);
}


