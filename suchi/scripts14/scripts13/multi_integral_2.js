WScript.Echo("何等分するかを入力してください");
var n = Number(WScript.StdIn.ReadLine());
var h = 1/n;

var volume = 0;

var x = /* ここを埋める */;
var y = /* ここを埋める */;
var z = /* ここを埋める */;

for(var i=0;i<n;i++){
	for(var j=0;j<n;j++){
		for(var k=0;k<n;k++){
			volume += /* ここを埋める */;
			/* ここを埋める */;
		}
		/* ここを埋める */;
		/* ここを埋める */;	
	}

	/* ここを埋める */;	
	/* ここを埋める */;
}

WScript.Echo("近似値：　" + 16*volume);
WScript.Echo("厳密値：　"　+ Math.PI*Math.PI/2);

function g(x,y,z){
	var ret = 0;
	if(x*x+y*y+z*z <= 1) ret = Math.sqrt(1-x*x-y*y-z*z);
	return ret;
}
