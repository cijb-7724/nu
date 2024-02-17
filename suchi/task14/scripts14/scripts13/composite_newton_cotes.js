WScript.Echo("第一段階で何等分しますか？");
var n = Number(WScript.StdIn.ReadLine());
WScript.Echo("第二段階で何等分しますか？");
var m = Number(WScript.StdIn.ReadLine());

var intv = [0,2];

// n*m 等分したものに公式を使った結果
var approx1 = newton_cotes(f,intv,n*m);

// あらかじめn等分した小区間を作り、小区間毎にm等分し公式を使った結果
var approx2 = composite_newton_cotes(f,intv,n,m);

var exact = Math.PI;

WScript.Echo("近似値１は " + approx1);
WScript.Echo("近似値２は " + approx2);
WScript.Echo("厳密値は " + exact);
WScript.Echo("近似値１との誤差は " + Math.abs(approx1 - exact));
WScript.Echo("近似値２との誤差は " + Math.abs(approx2 - exact));

function composite_newton_cotes(f,intv,n,m){
	var h= /* ここを埋める */;
	var finer_intv = /* ここを埋める */;
	var approx = 0;
	
	for(var i=0;i<n;i++){
		approx += /* ここを埋める */;
		finer_intv[0] += /* ここを埋める */;
		finer_intv[1] += /* ここを埋める */;
	}
	
	return approx;
}


function f(x){
	
	var ret;
	
	if(Math.abs(x)>2) return ret = 0;
	else ret = Math.sqrt(4-x*x);
	
	return ret;

}

/* 以下に必要な関数を記載（コピペでOK） */