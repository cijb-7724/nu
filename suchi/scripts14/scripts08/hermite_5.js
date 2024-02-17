var a = WScript.StdIn.ReadLine();
var a = Number(a);

// x座標の値を入れる配列
var xs = [0,Math.PI/2,-Math.PI/2];

// x[i] に対応するy座標の値を ys[i] に入れる配列
var ys = [];
for(var i = 0;i<xs.length;i++) /*　【1】ここを埋める */

// x[i] での導関数値を zs[i] に入れる配列
var zs = [];
for(var i = 0;i<xs.length;i++) /*　【2】ここを埋める */

var eps = 0.0001;

var val = h_interpolation(xs,ys,zs,a);
var val_p = /*　【3】ここを埋める */
var val_m = /*　【4】ここを埋める */

WScript.Echo("近似値： " + val);
WScript.Echo("関数値： " + Math.sin(a));

WScript.Echo("近似の微分係数： " + (val_p - val_m)/(2*eps));
WScript.Echo("実際の微分係数： " + Math.cos(a));

function h_interpolation(xs,ys,zs,a){
	/*　【5】ここを埋める */
}

/*　【6】以下に必要な関数を書く（コピペする） */
