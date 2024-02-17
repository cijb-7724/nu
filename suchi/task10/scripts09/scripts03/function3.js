// 二つの引数を足し合わせる関数
//　足し合わせた結果を返り値として返す
function add(a,b){
	return a+b;
}

var x;

// 数値と数値
x = add(5,13);
WScript.Echo(x);

// 数値と文字列
x = add(5,"13");
WScript.Echo(x);

// 文字列と文字列
x = add("数値","解析学");
WScript.Echo(x);

// 最初に　add("数値","解析学")　が計算される
// 結果は"数値解析学"
// 次に add("数値解析学","及び演習")が計算される
x = add(add("数値","解析学"),"及び演習");
WScript.Echo(x);



