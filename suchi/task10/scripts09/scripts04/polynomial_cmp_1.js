WScript.Echo("�������̎�������͂��Ă�������");
var n = WScript.StdIn.ReadLine();
n = Number(n);

var as=[];
var x = 1;

for(var i = 0; i<=n;i++){
	as.push(1);
}

var time1 = new Date();
var val1 = polynomial_1(as,x);
var time2 = new Date();
var val2 = polynomial_2(as,x);
var time3 = new Date();
var val3 = polynomial_3(as,x);
var time4 = new Date();

WScript.Echo(val1);
WScript.Echo((time2.getTime() - time1.getTime())/1000 + "�b");
WScript.Echo(val2);
WScript.Echo((time3.getTime() - time2.getTime())/1000 + "�b");
WScript.Echo(val3);
WScript.Echo((time4.getTime() - time3.getTime())/1000 + "�b");

/* polynomial_1,polynomial_2,polynomial_3�̊֐��̒�`�������ɃR�s�y */