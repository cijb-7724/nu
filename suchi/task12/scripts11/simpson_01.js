var n = Number(WScript.StdIn.ReadLine());

var a = 0;
var b = 1;
var intv = [a,b];

var approx1 = trapezoid_approx(Math.exp,intv,n);
var approx2 = simpson_approx(Math.exp,intv,n);
var exact = Math.exp(1) - Math.exp(0);

WScript.Echo("�����l�F "�@+ exact + "\n");

WScript.Echo("�ߎ��l�F " + approx1 + "(��`����)");
WScript.Echo("�덷�� " + Math.abs(approx1 - exact) + "\n");

WScript.Echo("�ߎ��l�F " + approx2 + "(�V���v�\���̌���)");
WScript.Echo("�덷�� " + Math.abs(approx2 - exact) );


function simpson_approx(f, intv, n){
	var h = ([intv[1]-intv[0]])/n
	var approx = 0;
	
	var x = intv[0];

	var delta = (intv[1]-intv[0]) / 2.0 / n;
	approx += f(0);
	approx += f((2*n)*delta);	
	WScript.Echo("delta " + delta);
	WScript.Echo("delta " + approx);
	WScript.Echo("delta " + approx);
	
	
	for(var i=1; i <= n; i++){
		approx += 4 * f((2*i-1)*delta);
		if (i != n) approx += 2 * f(2*i*delta);
	}
	
	approx *= h/6.0;
	
	return approx;

}
/*�ȉ��ɕK�v�Ȋ֐����L�ڂ���i�R�s�y��OK�j*/


function trapezoid_approx(f, intv, n){
	var delta = (intv[1]-intv[0])/n;
	var approx = 0;
	
	var left = intv[0];
	var right = left + delta;
	
	for(var i=0; i < n; i++){
		approx += delta*(f(left) + f(right))/2;
		left += delta;
		right += delta;
	}
	
	return approx;
}
