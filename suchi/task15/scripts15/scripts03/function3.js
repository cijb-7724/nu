// ��̈����𑫂����킹��֐�
//�@�������킹�����ʂ�Ԃ�l�Ƃ��ĕԂ�
function add(a,b){
	return a+b;
}

var x;

// ���l�Ɛ��l
x = add(5,13);
WScript.Echo(x);

// ���l�ƕ�����
x = add(5,"13");
WScript.Echo(x);

// ������ƕ�����
x = add("���l","��͊w");
WScript.Echo(x);

// �ŏ��Ɂ@add("���l","��͊w")�@���v�Z�����
// ���ʂ�"���l��͊w"
// ���� add("���l��͊w","�y�щ��K")���v�Z�����
x = add(add("���l","��͊w"),"�y�щ��K");
WScript.Echo(x);



