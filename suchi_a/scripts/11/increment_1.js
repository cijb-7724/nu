var x = 10;

increment(x);
WScript.Echo("関数終了後の x の値: "+x);


function increment(x){
	x++;
	WScript.Echo("関数の中での x の値: "+x);
}

