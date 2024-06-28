WScript.Echo("x_{-1} ‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢");
var x_prev =Number(WScript.StdIn.ReadLine());

WScript.Echo("x_{0} ‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢");
var x =Number(WScript.StdIn.ReadLine());

var cnt = 0;
var eps = 0.000001;

do{
	x_next = next_term(x, x_prev);
    x_prev = x;
    x = x_next;
    cnt++;
    WScript.Echo(cnt + "‰ñ–ÚF x = " + x);
}while(Math.abs(f(x)) > eps);

// ‰ğ‚ğŒvZ‚µ‚½‚¢ŠÖ”
function f(x){
    return 1/(1+Math.exp(-x)) - 0.8;
}

// x_n ‚Æ x_{n-1} ‚©‚ç x_{n+1} ‚ğŒvZ‚·‚éŠÖ”
function next_term(x, x_prev){
	return x - f(x) * (x - x_prev) / (f(x) - f(x_prev));
}
