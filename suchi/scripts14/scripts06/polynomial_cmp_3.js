WScript.Echo("多項式の次数を入力してください");
var n = WScript.StdIn.ReadLine();
n = Number(n);

var as=[];
var x = 1;

for(var i = 0; i<=n;i++){
	as.push(1);
}

var time1 = new Date();
var val1 = polynomial_1_v2(as,x);
var time2 = new Date();
var val2 = polynomial_2(as,x);
var time3 = new Date();
var val3 = polynomial_2_v2(as,x);
var time4 = new Date();
var val4 = polynomial_3(as,x);
var time5 = new Date();

WScript.Echo(val1);
WScript.Echo((time2.getTime() - time1.getTime())/1000 + "秒");
WScript.Echo(val2);
WScript.Echo((time3.getTime() - time2.getTime())/1000 + "秒");
WScript.Echo(val3);
WScript.Echo((time4.getTime() - time3.getTime())/1000 + "秒");
WScript.Echo(val4);
WScript.Echo((time5.getTime() - time4.getTime())/1000 + "秒");


/* 【1】ここにpolynomial_1_v2の定義を埋める */


function polynomial_2(as,b){
	var ret = 0;
	var bs =[1];
	
	for(var i=0;i<as.length-1;i++) bs[bs.length] = bs[bs.length-1]*b;
	
	for(var i=0;i<as.length;i++) ret += as[i]*bs[i];
	
	return ret;
}

function polynomial_2_v2(as,b){
	var ret = 0;
	var bn = 1;
	
	for(var i=0;i<as.length;i++){
		/* 【2】ここを埋める */
	}
	
	return ret;
}

function polynomial_3(as,b){
	var ret = as[as.length-1]*b + as[as.length-2];
	
	for(var i=as.length-3;i>=0;i--){
		ret = b*ret + as[i];
	}
	
	return ret;
}

