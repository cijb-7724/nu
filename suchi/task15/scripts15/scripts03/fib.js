// ���͂��󂯕t��
var n = WScript.StdIn.ReadLine();
n = Number(n);

// �������i�[����z���p��
var fib = [];

for(var i = 0; i <= n; i++){
	if(i == 0 || i == 1){
		// 0,1���ڂ�1����
		fib[i] = 1;
	}else{
		// i ���ڂ�i-1���ڂ�i-2���ڂ���v�Z
		fib[i]= fib[i-1] + fib[i-2]; 
	}
}

WScript.Echo(n + "���ڂ܂ł̃t�B�{�i�b�`�����\�����܂�");

for(var i = 0; i < fib.length; i++){
	WScript.Echo(i + "���ځF "�@+ fib[i]);
}
