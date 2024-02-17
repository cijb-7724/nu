WScript.Echo("分割点の個数を入力してください");
var n = Number(WScript.StdIn.ReadLine());

WScript.Echo("正の微小量を入力してください");
var eps = Number(WScript.StdIn.ReadLine());

var intv = [/*ここを埋める*/];　// 区間

var approx = trapezoid_approx(f,intv,n);

// ディレクレ積分の値はπ/2
WScript.Echo("近似値： " + approx);
WScript.Echo("厳密値：　"　+ (Math.PI)/2); 

// 変数変換後の被積分関数
function f(x){
	/*ここを埋める*/
}

/*以下に必要な関数を記載する（コピペでOK）*/
