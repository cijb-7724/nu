var itr = 100000;

var cnt = new Array();

for(var i=0;i<51;i++){
	cnt[i]=0;	
}

for(var i=0;i<itr;i++){
	var x = Math.random();
	var y = Math.random();
	
	// ����0�E���U1�i�W���΍�1�j�̐��K���z���瓾���闐���ɕϊ�
	var val = /*�y1�z�����𖄂߂�*/
	
	// ����25�E���U49(�W���΍�7)�̐��K���z���瓾���闐���ɕϊ�
	val = /*�y2�z�����𖄂߂�*/
	
	//�@�����l�ɂ���
	val = /*�y3�z�����𖄂߂�*/
	
	// 50�ȏ��0�ȉ��̓��A�P�[�X�Ȃ̂ł܂Ƃ߂Ă��܂�
	/*�y4�z�����𖄂߂�*/
	
	// �z��cnt��val�Ԗڂ̔z��v�f���C���N�������g
	cnt[val]++;
}

for(var i=0;i<51;i++){
	output = "";
	
	// floor(cnt[i]/100)������ + ���o��
	for(var j=0;j<cnt[i]/100;j++) output += "+";
	WScript.Echo(output);
}


