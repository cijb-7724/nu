var mat = upper_triangle_matrix(6);

WScript.Echo("�s��");
print_matrix_2(mat);

WScript.Echo("���s�ڂ��폜���܂����H");

// �s��� n �s�ڂ͓񎟌��z�� mat �� mat[n-1]�@�ɑΉ�
var u = Number(WScript.StdIn.ReadLine())-1;
row_del(mat,u);

WScript.Echo("�폜���܂���");
print_matrix_2(mat);


// �񎟌��z�� A �� A[u] ���폜����֐�
function row_del(A,u){
	for(var i=0; i<A.length;i++){
		// i��u�����傫��������i-1�Ԗڂ̗v�f��
		// i�Ԗڂ̗v�f�ŏ㏑��
		if(i>u) A[i-1]=A[i];
	}
	// A�̍Ō�̗v�f�i�ꎟ���z��j���폜
	A.pop();
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
