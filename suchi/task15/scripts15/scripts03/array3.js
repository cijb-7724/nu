// �ŏ�����v�f������z��ŏ�����
var x = [10,15,20,"���l��͊w"];

// �z��̒�����\�����Ă݂�
WScript.Echo("�z��̒����F" + x.length);

// length���g���Ĕz��̗v�f��S�ĕ\��
WScript.Echo("�z��̗v�f��\�����܂�");
for(var i = 0; i < x.length; i++){
	WScript.Echo(i + "�Ԗڂ̗v�f�F" + x[i]);
}

// push() ���g���ėv�f��z��̍Ō�ɒǉ�
WScript.Echo("push()�Ŕz��̍Ō�ɗv�f��ǉ����܂�");
x.push(25);
x.push("5��12��");

// ���ۂɔz��̒������������Ă��邩���m�F
WScript.Echo("�z��̒����F" + x.length);

// �z��̗v�f��S�ĕ\��
WScript.Echo("�z��̗v�f��\�����܂�");
for(var i = 0; i < x.length; i++){
	WScript.Echo(i + "�Ԗڂ̗v�f�F" + x[i]);
}


