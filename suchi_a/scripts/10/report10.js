WScript.Echo("x_{-1} ����͂��Ă�������");
var x_prev =Number(WScript.StdIn.ReadLine());

WScript.Echo("x_{0} ����͂��Ă�������");
var x =Number(WScript.StdIn.ReadLine());

var cnt = 0;
var eps = 0.000001;

do{
	x_next = next_term(x, x_prev);
    x_prev = x;
    x = x_next;
    cnt++;
    WScript.Echo(cnt + "��ځF x = " + x);
}while(Math.abs(f(x)) > eps);

// �����v�Z�������֐�
function f(x){
    return 1/(1+Math.exp(-x)) - 0.8;
}

// x_n �� x_{n-1} ���� x_{n+1} ���v�Z����֐�
function next_term(x, x_prev){
	return x - f(x) * (x - x_prev) / (f(x) - f(x_prev));
}
