function array_print(arr){
	// �z��̒�����\������
	WScript.Echo("�z��̒����F" + arr.length);

	// �z��̗v�f��S�ĕ\��
	WScript.Echo("�z��̗v�f��\�����܂�");
	for(var i = 0; i < arr.length; i++){
		WScript.Echo(i + "�Ԗڂ̗v�f�F" + arr[i]);
	}
}

// �ŏ�����v�f������z��ŏ�����
var x = [10,15,20,"���l��͊w"];

array_print(x);

// push() ���g���ėv�f��z��̍Ō�ɒǉ�
WScript.Echo("push()�Ŕz��̍Ō�ɗv�f��ǉ����܂�");
x.push(25);
x.push("5��12��");

array_print(x);

