WScript.Echo("���������邩����͂��Ă�������");
var n = Number(WScript.StdIn.ReadLine());
var h = 1/n;

var volume = 0;

var x = /* �����𖄂߂� */;
var y = /* �����𖄂߂� */;
var z = /* �����𖄂߂� */;

for(var i=0;i<n;i++){
	for(var j=0;j<n;j++){
		for(var k=0;k<n;k++){
			volume += /* �����𖄂߂� */;
			/* �����𖄂߂� */;
		}
		/* �����𖄂߂� */;
		/* �����𖄂߂� */;	
	}

	/* �����𖄂߂� */;	
	/* �����𖄂߂� */;
}

WScript.Echo("�ߎ��l�F�@" + 16*volume);
WScript.Echo("�����l�F�@"�@+ Math.PI*Math.PI/2);

function g(x,y,z){
	var ret = 0;
	if(x*x+y*y+z*z <= 1) ret = Math.sqrt(1-x*x-y*y-z*z);
	return ret;
}
