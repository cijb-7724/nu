var n = Number(WScript.StdIn.ReadLine());

var a = 0;
var b = 1;
var intv = [a,b];

var approx1 = trapezoid_approx(Math.exp,intv,n);
var approx2 = simpson_approx(Math.exp,intv,n);
var exact = Math.exp(1) - Math.exp(0);

WScript.Echo("厳密値： "　+ exact + "\n");

WScript.Echo("近似値： " + approx1 + "(台形公式)");
WScript.Echo("誤差は " + Math.abs(approx1 - exact) + "\n");

WScript.Echo("近似値： " + approx2 + "(シンプソンの公式)");
WScript.Echo("誤差は " + Math.abs(approx2 - exact) );


function simpson_approx(f, intv, n){
	var h = ([intv[1]-intv[0]])/n
	var approx = 0;
	
	var x = intv[0];
	
	for(var i=0; i <= n; i++){
		/*ここを埋める*/
	}
	
	approx *= /*ここを埋める*/
	
	return approx;

}
/*以下に必要な関数を記載する（コピペでOK）*/



