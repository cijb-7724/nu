var mat = upper_triangle_matrix(6);

WScript.Echo("�s��");
print_matrix_2(mat);

WScript.Echo("�W������͂��Ă�������");
var a = Number(WScript.StdIn.ReadLine());

WScript.Echo("��ԍ�����͂��Ă�������");
var u = Number(WScript.StdIn.ReadLine())-1;

col_mul(mat,a,u);

WScript.Echo((u+1)+ "��ڂ�"�@+ a +�@"�{���܂���");
print_matrix_2(mat);

//�@�s���\���񎟌��z��A��u��ڂ�a�{����֐�
function col_mul(A,a,u){
	for(var i=0;i<A.length;i++){
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
