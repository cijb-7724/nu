// ���͂��󂯕t��
var n = WScript.StdIn.ReadLine();
n = Number(n);

// �������i�[����z���p��
var trib = [];

for(var i = 0; i <= n; i++){
	if(i == 0 || i == 1){
		// 0,1���ڂ�0����
		trib[i] = 0;
	}else if(i == 2){
		// 2���ڂ�1����
		trib[i]=1
	}else{
		// i ���ڂ��v�Z
		trib[i]= trib[i-1] + trib[i-2] + trib[i-3]; 
	}
}

WScript.Echo(n + "���ڂ܂ł̃g���{�i�b�`�����\�����܂�");

for(var i = 0; i < trib.length; i++){
	WScript.Echo(i + "���ځF "�@+ trib[i]);
}

