var x = [1,2,3];

var y = increment(x);
WScript.Echo("関数終了後の  x  の値: "+x);
WScript.Echo("関数の返り値  y  の値: "+y);

function increment(x){
	var ret = [];
	for(var i=0; i< x.length; i++) ret.push(x[i]);
	for(var i=0; i< ret.length; i++) ret[i]++;
	
	WScript.Echo("関数の中での  x  の値: " + x);
	WScript.Echo("関数の中での ret の値: " + ret);
	return ret;
}

