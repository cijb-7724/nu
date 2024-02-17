var n = 1000;

var D = Math.PI // 区間の幅
var intv = [0,D];　// 区間の初期値
var eps = 0.001;　//　収束判定に使う値
var i = 0; //ループの回数を記録する変数
var cnt = 0; //分割に使った点の個数を記録する変数

var approx = 0;　//　現在の近似値を保存
var delta;　// 区間 intv　の台形公式での近似値を保存

do{
	delta = /*ここを埋める*/;
	approx += delta;
	intv[0] += /*ここを埋める*/;
	intv[1] += /*ここを埋める*/;
	cnt += n;
	i++;
}while(/*ここを埋める*/);

// ディレクレ積分の値はπ/2
WScript.Echo("近似値： " + approx);
WScript.Echo("厳密値：　"　+ (Math.PI)/2); 

WScript.Echo("ループの回数："+i);
WScript.Echo("分割に使った点の個数："+cnt);

function f(x){
	var ret;
	if(/*ここを埋める*/){
		/*ここを埋める*/;
	}else{
		/*ここを埋める*/;
	}
	
	return ret;
}

/*以下に必要な関数を記載する（コピペでOK）*/



