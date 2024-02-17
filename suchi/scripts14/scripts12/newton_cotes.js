WScript.Echo("何等分しますか？");
var m = Number(WScript.StdIn.ReadLine());

var intv = [0,Math.PI];

var approx = newton_cotes(Math.sin,intv,m);
var exact = 2;

WScript.Echo("近似値は " + approx);
WScript.Echo("厳密値は " + exact);
WScript.Echo("誤差は " + Math.abs(approx - exact));

function newton_cotes(f,intv,m){
	var h= /* ここを埋める */;
	var v = /* ここを埋める */;
	var x = /* ここを埋める */;
	var approx = 0;
	
	for(var i=0;i<=m;i++){
		approx += /* ここを埋める */;
		x += /* ここを埋める */;
	}
	
	return /* ここを埋める */;
}

/* 以下に必要な関数を記載する（コピペでOK） */