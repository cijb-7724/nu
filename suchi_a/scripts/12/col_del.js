var mat = upper_triangle_matrix(6);

WScript.Echo("�s��");
print_matrix_2(mat);

WScript.Echo("����ڂ��폜���܂����H");

var u = Number(WScript.StdIn.ReadLine())-1;
col_del(mat,u);

WScript.Echo("�폜���܂���");
print_matrix_2(mat);

//�s���\���񎟌��s��A��u��ڂ��폜����֐�
function col_del(A,u){
	for(var i =0;i<A.length;i++){
		for(var j=0;j<A[i].length;j++){
			// j��u���傫���Ȃ�����
			// j-1��ڂ̒l��j��ڂ̒l�ŏ㏑��
			/* �����𖄂߂� */
		}
		//�@��ԍŌ�̗�̒l���폜����
		/* �����𖄂߂� */
	}
}

// �񎟌��z���\������֐�
function print_matrix_2(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += ("   " + a[i][j]).slice(-4) + " ";
		WScript.Echo(tmp);
	}
}

//�@��O�p�s����쐬����֐�
function upper_triangle_matrix(s){
	var ret = [];
	for(var i = 0; i < s; i++){
		ret[i]=[];
		for(var j = 0;j < s;j++){
			if(i <= j) ret[i][j] = 1;
			else ret[i][j] = 0;
		}
	}
	return ret;
}

