var u_mat = upper_triangle_matrix(6);
var l_mat = lower_triangle_matrix(6);
var result = matrix_add(u_mat,l_mat);

WScript.Echo("A=");
print_matrix(u_mat);

WScript.Echo("B=");
print_matrix(l_mat);

WScript.Echo("A+B=");
print_matrix(result);

function matrix_add(a,b){
	var ret = [];
	for(var i=0; i<�@/* ���߂� */; i++){
		ret[i] = [];
		for(var j=0; j<�@/* ���߂� */; j++){
				ret[i][j] = /* ���߂� */�@;
		}
	}
	return ret;
}

//�ȉ��̕����Ɏ��̊֐��̒�`��������i���ɍ���Ă���͂��Ȃ̂ŃR�s�y��OK�j
//upper_triangle_matrix, lower_triangle_matrix, print_matrix