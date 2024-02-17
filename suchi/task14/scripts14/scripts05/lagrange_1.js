var a = WScript.StdIn.ReadLine();
var a = Number(a);

var k = WScript.StdIn.ReadLine();
var k = Number(k);

var xs = [1,2,3.2,5];

WScript.Echo("l_" + k + "(a)= " 
				+ l_interpolation_polynomial(xs,k,a));

for(var i=0;i<xs.length;i++){
	for(var j=0;j<xs.length;j++){
		WScript.Echo("l_" +j+ "(" +xs[i]+ ")= " 
						+ l_interpolation_polynomial(xs,j,xs[i]));
	}
}

// xs は x座標が入った配列
// j で指定されたラグランジュの補完多項式 l_j(x) を作る
// 返り値として a を l_j(x) に代入した値 l_j(a) を返す
function l_interpolation_polynomial(xs,j,a){
	
	var denom = 1;	// denominator 分母
	var numer = 1;　 // numerator 分子
	
	for(var i = 0; i < xs.length; i++){
		/* ここを埋める */
	}
	
	return numer/denom;
}


