WScript.Echo("���������邩����͂��Ă�������");
var n = Number(WScript.StdIn.ReadLine());
var h = 1/n;

var volume = 0;

var x = /* �����𖄂߂� */;
var y = /* �����𖄂߂� */;


for(var i=0;i<n;i++){
	for(var j=0;j<n;j++){
		volume += /* �����𖄂߂� */;
		/* �����𖄂߂� */;
	}
	/* �����𖄂߂� */;
	/* �����𖄂߂� */;	
}

WScript.Echo("�ߎ��l�F " + 8*volume);
WScript.Echo("�����l�F "�@+ (4/3)*Math.PI);

function g(x,y){
	var ret = 0;
	if(x*x+y*y <= 1) ret = Math.sqrt(1-x*x-y*y);
	return ret;
}
