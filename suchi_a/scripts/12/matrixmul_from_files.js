var A = matrix_from_file(/*�@�����𖄂߂�@*/);
var B = matrix_from_file(/*�@�����𖄂߂�@*/);
var C = matrix_from_file(/*�@�����𖄂߂�@*/);

// �s��̊|�Z���s�����́A�ȑO�ɍ쐬�����֐���p����Ƃ悢
// ���̍s�ł�A�~B�~C���܂Ƃ߂ď����Ă���
//�@�ʁX�̍s�ɕ����ď����Ă��悢(�ŏ��̍s��A�~B���v�Z���ĕϐ�X�ɕۑ����āA���̍s��X�~C���v�Z�j

var result = /*�@�����𖄂߂�@*/

WScript.Echo("A=");
print_matrix_2(A);

WScript.Echo("\nB=");
print_matrix_2(B);

WScript.Echo("\nC=");
print_matrix_2(C);

WScript.Echo("\nA�~B�~C=");
print_matrix_2(result);

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

function print_matrix_2(a){
	for(var i = 0; i < a.length;i++){
		tmp = "";
		for(var j = 0; j< a[i].length; j++)	
			tmp += ("   " + a[i][j]).slice(-4) + " ";
		WScript.Echo(tmp);
	}
}

