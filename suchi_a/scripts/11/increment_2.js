var x = [1,2,3];

increment(x);
WScript.Echo("関数終了後の x の値: "+x);


function increment(x){
	x[0]++;
	x[1]++;
	x[2]++;
	WScript.Echo("関数の中での x の値: " + x);
}

