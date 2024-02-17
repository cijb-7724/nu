var xs=[];
var ys=[];

WScript.Echo("多項式の次数を入力してください");
var k = Number(WScript.StdIn.ReadLine());


for(i=0;i<1000;i++){
	xs[i] = -0.1+0.2*Math.random();
	ys[i] = Math.cos(xs[i]);	
}
		 
least_square_k(xs,ys,k);

function least_square_k(xs,ys,k){
	var mat = [];

	for(var i=0;i<= /* ここを埋める */ ;i++){
		mat[i]=[];
		/* ここを埋める */	
	}

	return solve_linear_equations(mat);
}

/* 必要な関数を以下に書く（コピペする） */