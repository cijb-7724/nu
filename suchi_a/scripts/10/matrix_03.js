WScript.Echo("��s��")
var mat_1 = zero_matrix(3,4);
print_matrix(mat_1);

WScript.Echo("�P�ʍs��");
var mat_2 = identity_matrix(5);
print_matrix(mat_2);

// �񎟌��z���\������֐�
function print_matrix(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += a[i][j] + " ";
		WScript.Echo(tmp);
	}
}

//�@s�~t�̗�s����쐬����֐�
function zero_matrix(s,t){
	var ret = /* �����𖄂߂� */;
	for(var i = 0; i < s; i++){
		ret[i]=/* �����𖄂߂� */;
		for(var j = 0;j < t;j++){
			ret[i][j] = 0;
		}
	}
	return ret;
}

// s�~s�̒P�ʍs����쐬����֐�
function identity_matrix(s){
	var ret = /* �����𖄂߂� */;
	for(var i = 0; i < s; i++){
		ret[i]=/* �����𖄂߂� */;
		for(var j = 0;j < s;j ++){
			if(/* �����𖄂߂� */) ret[i][j] = 1;
			else ret[i][j] = 0;
		}
	}
	return ret;
}



