WScript.Echo("�u5�̔{���v���u7�Ŋ�����2�]�鐔�v����͂��Ă�������");
var x = WScript.StdIn.ReadLine();
x = Number(x);

if( x % 5 == 0 && x % 7 == 2 ){
	WScript.Echo("�����ł�");
}else{
	WScript.Echo("�s�����ł�");
}
