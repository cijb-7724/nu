var x = [1,2,3,4]

WScript.Echo("x �͎��̔z��ł�");
WScript.Echo(x);

WScript.Echo("x �� mul ��K�p���܂�");
map(x, mul);
WScript.Echo(x);

WScript.Echo("x �� add ��K�p���܂�");
map(x,add);
WScript.Echo(x);

var y = ["1","2","3","4"];
WScript.Echo("y �͎��̔z��ł�");
WScript.Echo(y);

WScript.Echo("y �� add ��K�p���܂�");
map(y,add);
WScript.Echo(y);


function map(/* �����𖄂߂� */){
	
/* �����𖄂߂� */
	
}

function add(a){
	return a + a;
}

function mul(a){
	return a*a;
}


