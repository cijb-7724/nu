var itr = 100000;

var cnt = new Array();

for(var i=0;i<51;i++){
	cnt[i]=0;	
}

for(var i=0;i<itr;i++){
	
	// [0,1)�̈�l���z���瓾���闐���l
	var x = Math.random();

	// [0,51)�̈�l���z���瓾���闐���l
	x = 51*x;
	
	//�@�����l�ɂ���i0����y50�z�܂ł̐����l�j
	x = Math.floor(x);
	
	// �z��cnt��val�Ԗڂ̔z��v�f���C���N�������g
	cnt[x]++;
}

for(var i=0;i<51;i++){
	output = "";
	
	// floor(cnt[i]/100)������ + ���o��
	for(var j=0;j<cnt[i]/100;j++) output += "+";
	WScript.Echo(output);
}


