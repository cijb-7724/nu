var x = [1,2,3,4]

WScript.Echo("x は次の配列です");
WScript.Echo(x);

WScript.Echo("x に mul を適用します");
map(x, mul);
WScript.Echo(x);

WScript.Echo("x に add を適用します");
map(x,add);
WScript.Echo(x);

var y = ["1","2","3","4"];
WScript.Echo("y は次の配列です");
WScript.Echo(y);

WScript.Echo("y に add を適用します");
map(y,add);
WScript.Echo(y);


function map(/* ここを埋める */){
	
/* ここを埋める */
	
}

function add(a){
	return a + a;
}

function mul(a){
	return a*a;
}


