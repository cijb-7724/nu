var mat = upper_triangle_matrix(6);

WScript.Echo("�s��");
print_matrix_2(mat);

WScript.Echo("��ԍ��i��ځj����͂��Ă�������");
var u = Number(WScript.StdIn.ReadLine())-1;

WScript.Echo("��ԍ��i��ځj����͂��Ă�������");
var v = Number(WScript.StdIn.ReadLine())-1;

col_swap(mat,u,v);

WScript.Echo((u+1)+ "��ڂ�"�@+ 
		     (v+1)+ "��ڂ��������܂���");
print_matrix_2(mat);

//�@�s���\���񎟌��s��A��u��ڂ�v��ڂ���������֐�
function col_swap(A,u,v){
	for(var i=0;i< A.length;i++){
		// i�s�ڂ�u�Ԗڂ̗v�f��ۑ�
		/* �����𖄂߂� */
		// i�s�ڂ�u�Ԗڂ̗v�f��v�Ԗڂ̗v�f�ŏ㏑��
		A[/* �����𖄂߂� */][/* �����𖄂߂� */]=A[/* �����𖄂߂� */][/* �����𖄂߂� */];
		// i�s�ڂ�v�Ԗڂ̗v�f���㏑��
		A[/* �����𖄂߂� */][/* �����𖄂߂� */]=/* �����𖄂߂� */;
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
