WScript.Echo("���R������͂��Ă�������");
var n = WScript.StdIn.ReadLine();
n = Number(n);

if(n % 2 == 0){
	WScript.Echo("2�Ŋ��肫��܂�");
}else if(n % 3 == 0){
	WScript.Echo("2�Ŋ���؂ꂸ�A3�Ŋ���؂�܂�");
}else if(n % 5 == 0){
	WScript.Echo("2,3�Ŋ���؂ꂸ�A5�Ŋ���؂�܂�");
}else{
	WScript.Echo("2,3,5�Ŋ���؂�܂���");
}

