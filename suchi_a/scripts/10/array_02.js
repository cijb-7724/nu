var a = []; // ���̎��_���� a[0] �͈ꎟ���z��łȂ��l�iundefined�j
a[0] = []; //�@���̎��_�� a[0] �͈ꎟ���z��ɂȂ��Ă���([])

// �ꎟ���z�� a[0] �ɂ� a[0][3] �̂悤�ɑ���ł��� 
// a[0][0]�`a[0][2]������`�ł�OK
a[0][3] = 10; 

WScript.Echo("�z�� a �̒���: " + a.length);
WScript.Echo("�z�� a[0] �̒���: " + a[0].length);
WScript.Echo("�z�� a[0] �̒��g:");
print_array(a[0]);

// �ꎟ���z��̒��g���󔒕����ŋ�؂��ĕ\������֐�
function print_array(a){
	tmp = "";
	for(var i = 0; i < a.length;i++){
		tmp += a[i] + " ";
	}
	WScript.Echo(tmp);
}