var n = WScript.StdIn.ReadLine();
n = Number(n);

var a = 0;
var b = Math.PI;
var intv = [a,b];

var approx = trapezoid_approx(Math.sin,intv,n);
var exact = -Math.cos(b) + Math.cos(a);

WScript.Echo("�ߎ��l�F " + approx);
WScript.Echo("�����l�F�@"�@+ exact);


function trapezoid_approx(f, intv, n){
	var delta = /* �����𖄂߂� */;
	var approx = 0;
	
	var left = intv[0];
	var right = left + delta;
	
	for(var i=0; i < n; i++){
		approx += /* �����𖄂߂� */;
		left += /* �����𖄂߂� */;
		right += /* �����𖄂߂� */;		
	}
	
	return approx;
}






