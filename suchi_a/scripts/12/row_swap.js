var mat = upper_triangle_matrix(6);

WScript.Echo("�s��");
print_matrix_2(mat);

WScript.Echo("�s�ԍ��i��ځj����͂��Ă�������");
var u = Number(WScript.StdIn.ReadLine())-1;

WScript.Echo("�s�ԍ��i��ځj����͂��Ă�������");
var v = Number(WScript.StdIn.ReadLine())-1;

row_swap(mat,u,v);

WScript.Echo("�s���������܂���");
print_matrix_2(mat);

// �s���\���񎟌��s��A��u�s�ڂ�v�s�ڂ���������֐�
function row_swap(A,u,v){
	// tmp �� u �s�ڂ̔z���ۑ����Ă����ϐ�
	var tmp = A[u];
	//�@u �s�ڂ��@v �s�ڂ̔z��ŏ㏑��
	A[u] = A[v];
	// v �s�ڂ� tmp�@�ɕۑ����Ă����z���n��
	A[v] = tmp;
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
