var x = [1,2,3];

var y = increment(x);
WScript.Echo("�֐��I�����  x  �̒l: "+x);
WScript.Echo("�֐��̕Ԃ�l  y  �̒l: "+y);

function increment(x){
	var ret = [];
	for(var i=0; i< x.length; i++) ret.push(x[i]);
	for(var i=0; i< ret.length; i++) ret[i]++;
	
	WScript.Echo("�֐��̒��ł�  x  �̒l: " + x);
	WScript.Echo("�֐��̒��ł� ret �̒l: " + ret);
	return ret;
}

