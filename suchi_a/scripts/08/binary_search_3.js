var eps = 0.00001;
var itr = 30;

// 「適当な初期値を見つけ二分法を実行」 を itr　回繰り返す
for(var i = 0; i < itr ; i++){
	
	//区間の最大値と最小値
	var max = 2;
	var min = -2;
	
	//初期値をあらわす関数
	var a= 2; // この後で都合がよいように f(a)>=0 となるように設定
	var b=-2; // この後で都合がよいように f(b)<=0 となるように設定
	
	//　f(a) < 0 となるような a を見つける
	while(/* ここを埋める*/) /* ここを埋める*/
	
	// f(b) > 0 となるような b を見つける
	while(/* ここを埋める*/) /* ここを埋める*/
	
	// 適当に見つけた初期値で二分法を行う
	/* ここを埋める*/

	WScript.Echo("解は "　+ a);
}

function f(x){
	return 2*x*x*x*x*x - 5*x  - 3;
}
