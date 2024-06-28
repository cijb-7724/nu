var a = []; // この時点だと a[0] は一次元配列でなく値（undefined）
a[0] = []; //　この時点で a[0] は一次元配列になっている([])

// 一次元配列 a[0] には a[0][3] のように代入できる 
// a[0][0]～a[0][2]が未定義でもOK
a[0][3] = 10; 

WScript.Echo("配列 a の長さ: " + a.length);
WScript.Echo("配列 a[0] の長さ: " + a[0].length);
WScript.Echo("配列 a[0] の中身:");
print_array(a[0]);

// 一次元配列の中身を空白文字で区切って表示する関数
function print_array(a){
	tmp = "";
	for(var i = 0; i < a.length;i++){
		tmp += a[i] + " ";
	}
	WScript.Echo(tmp);
}