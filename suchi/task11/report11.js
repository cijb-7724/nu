var n = WScript.StdIn.ReadLine();
n = Number(n);

var a = 0;
var b = 0.5;
var intv = [a,b];

function f(x) {
	return Math.log(4*x*x + 1);
}
function F(x) {
	return x * Math.log(4*x*x+1)-2*x+Math.atan(2*x);
}
var approx = trapezoid_approx(f,intv,n);
var exact = -F(b) + F(a);

WScript.Echo("近似値： " + approx);
WScript.Echo("厳密値：　"　+ exact);


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






