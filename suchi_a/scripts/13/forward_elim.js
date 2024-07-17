WScript.Echo("�s��̃f�[�^���������t�@�C���𑊑΃p�X�Ŏw�肵�Ă�������");
var fname = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname);

WScript.Echo("\n�ȉ��̍s�񂪓ǂݍ��܂�܂���");
print_matrix_3(mat);

WScript.Echo("\n�O�i���������s���܂�");
forward_elimination(mat,1);

// �g��W���s��A��O�i��������
// flag��1�Ɏw�肷��Ɠr���o�߂��\������
function forward_elimination(A, flag) {
    for (var i = 0; i < A.length - 1; i++) {
        for (var j = i + 1; j < A.length; j++) {
            row_transformation(A, i, j, -A[j][i] / A[i][i]);
        }
        if (flag == 1) {
            WScript.Echo("\n" + (i + 1) + "���");
            print_matrix_3(A);
        }
    }
}


// �v�f�ɐ��l���������s��(2�����z��)���󂯎���ĕ\������֐�
// �e�v�f�͐��������ő�4���E��������2���Œ�ŕ\�������
function print_matrix_3(a){
	for(var i = 0; i < a.length; i++ ){
		var tmp = "";
		for(var j = 0; j < a[i].length; j++ )
			tmp += ("  �@   " + a[i][j].toFixed(2)).slice(-7) + " ";
		WScript.Echo(tmp);
	}
}

// �t�@�C������s��̃f�[�^��ǂݍ���œ񎟌��z���Ԃ��֐�
// ���s�����v���O��������̑��΃p�X�Ŏw�肵���ꏊ�ɂ���t�@�C����ǂݍ���
function matrix_from_file(str){
	var file = WScript.CreateObject("Scripting.FileSystemObject").OpenTextFile(str,1);
	var ret = new Array();
	while( !file.AtEndOfStream ){
		var arr = file.ReadLine().split(/\s+/);
		for(var i = 0; i < arr.length ; i++)
			if(arr[i].indexOf('/') != -1) 
				arr[i]=Number(arr[i].split('/')[0])/Number(arr[i].split('/')[1]);
			else arr[i] = Number(arr[i]);
		ret.push(arr);
	}
	file.close();
	return ret;
}


/*�����ɍs��{�ό`�̊֐��̒�`�������i�ȑO�̃T���v���̃R�s�y��OK�j*/