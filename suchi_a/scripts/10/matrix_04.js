WScript.Echo("��O�p�s��")
var u_mat = upper_triangle_matrix(6);
print_matrix(u_mat);

WScript.Echo("���O�p�s��");
var l_mat = lower_triangle_matrix(7);
print_matrix(l_mat);

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
function upper_triangle_matrix(s){
	var ret = [];
	for(var i = 0; i < s; i++){
		ret[i]=[];
		for(var j = 0;j < s;j++){
			if(/*���߂�*/) ret[/*���߂�*/][/*���߂�*/] = /*���߂�*/;
			else ret[/*���߂�*/][/*���߂�*/] = /*���߂�*/;
		}
	}
	return ret;
}

// s�~s�̒P�ʍs����쐬����֐�
function lower_triangle_matrix(s){
	var ret = [];
	for(var i = 0; i < s; i++){
		ret[i]=[];
		for(var j = 0;j < s;j++){
			if(/*���߂�*/) ret[/*���߂�*/][/*���߂�*/] = /*���߂�*/;
			else ret[/*���߂�*/][/*���߂�*/] = /*���߂�*/;
		}
	}
	return ret;
}

