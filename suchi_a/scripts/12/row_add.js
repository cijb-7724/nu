var mat = upper_triangle_matrix(6);

WScript.Echo("�s��");
print_matrix_2(mat);

WScript.Echo("�W������͂��Ă�������");
var a = Number(WScript.StdIn.ReadLine());

WScript.Echo("�s�ԍ��i��ځj����͂��Ă�������");
var u = Number(WScript.StdIn.ReadLine())-1;

WScript.Echo("�s�ԍ��i��ځj����͂��Ă�������");
var v = Number(WScript.StdIn.ReadLine())-1;

row_add(mat,a,u,v);

WScript.Echo((u+1)+ "�s�ڂ�"�@+ a +�@"�{�������̂�" 
		   + (v+1) + "�s�ڂɑ����܂���");
print_matrix_2(mat);

// �s���\���񎟌��s��A��
// u�s�ڂ�a�{�������̂�v�s�ڂɑ����֐�
function row_add(A,a,u,v){
	for(var i = 0;i<A[u].length;i++){
		// v�s�ڂ�i�Ԗڂ̗v�f��
		// u�s�ڂ�i�Ԗڂ̗v�f��a�{�������̂𑫂�
		// A[v][i] = A[v][i] + a*A[u][i] �Ə����Ă�����
		A[v][i] += a*A[u][i];
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
