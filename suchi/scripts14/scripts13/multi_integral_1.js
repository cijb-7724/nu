WScript.Echo("何等分するかを入力してください");
var n = Number(WScript.StdIn.ReadLine());
var h = 1/n;

var volume = 0;

var x = /* ここを埋める */;
var y = /* ここを埋める */;


for(var i=0;i<n;i++){
	for(var j=0;j<n;j++){
		volume += /* ここを埋める */;
		/* ここを埋める */;
	}
	/* ここを埋める */;
	/* ここを埋める */;	
}

WScript.Echo("近似値： " + 8*volume);
WScript.Echo("厳密値： "　+ (4/3)*Math.PI);

function g(x,y){
	var ret = 0;
	if(x*x+y*y <= 1) ret = Math.sqrt(1-x*x-y*y);
	return ret;
}
