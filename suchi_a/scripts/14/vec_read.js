WScript.Echo("�x�N�g���̃f�[�^���������t�@�C���𑊑΃p�X�Ŏw�肵�Ă�������");
var fname = WScript.StdIn.ReadLine();
var vec = vector_from_file(fname);

WScript.Echo("���̃x�N�g�����ǂݍ��܂�܂���");
print_vector(vec);

// �t�@�C������x�N�g���̃f�[�^��ǂݍ���ňꎟ���z���Ԃ��֐�
// ���s�����v���O��������̑��΃p�X�Ŏw�肵���ꏊ�ɂ���t�@�C����ǂݍ���
function vector_from_file(str){
	var file = WScript.CreateObject("Scripting.FileSystemObject").OpenTextFile(str,1);

	var arr = file.ReadLine().split(/\s+/);
	for(var i = 0; i < arr.length ; i++){
		if(arr[i].indexOf('/') != -1) 
			arr[i]=Number(arr[i].split('/')[0])/Number(arr[i].split('/')[1]);
		else arr[i] = Number(arr[i]);
	}
	
	file.close();
	return arr;
}

// �ꎟ���z����󂯎���čs�x�N�g���̂悤�ɕ\������֐�
function print_vector(x){
	var str = "(";
	for(var i=0;i<x.length;i++){
		if(i!=x.length-1) str += x[i] + ", ";
		else str += x[i] + ")";
	}
	WScript.Echo(str);
}

