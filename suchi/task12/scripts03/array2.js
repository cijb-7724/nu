// �ŏ�����v�f������z��ŏ�����
var x = [10,15,20,"���l��͊w"];

// �z��̒�����\�����Ă݂�
WScript.Echo("�z��̒����F" + x.length);

// length���g���Ĕz��̗v�f��S�ĕ\��
WScript.Echo("�z��̗v�f��\�����܂�");
for(var i = 0; i < x.length; i++){
	WScript.Echo(i + "�Ԗڂ̗v�f�F" + x[i]);
}