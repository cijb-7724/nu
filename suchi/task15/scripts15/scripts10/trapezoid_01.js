var n = WScript.StdIn.ReadLine();
n = Number(n);

var a = 0;
var b = Math.PI;
var intv = [a,b];

var approx = trapezoid_approx(Math.sin,intv,n);
var exact = -Math.cos(b) + Math.cos(a);

WScript.Echo("近似値： " + approx);
WScript.Echo("厳密値：　"　+ exact);


function trapezoid_approx(f, intv, n){
	var delta = /* ここを埋める */;
	var approx = 0;
	
	var left = intv[0];
	var right = left + delta;
	
	for(var i=0; i < n; i++){
		approx += /* ここを埋める */;
		left += /* ここを埋める */;
		right += /* ここを埋める */;		
	}
	
	return approx;
}






