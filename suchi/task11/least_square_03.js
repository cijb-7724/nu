var xs=[];
var ys=[];

WScript.Echo("�������̎�������͂��Ă�������");
var k = Number(WScript.StdIn.ReadLine());


for(i=0;i<1000;i++){
	xs[i] = -0.1+0.2*Math.random();
	ys[i] = Math.cos(xs[i]);	
}
		 
least_square_k(xs,ys,k);

function least_square_k(xs,ys,k){
	var mat = [];

	for(var i=0;i<= /* �����𖄂߂� */ ;i++){
		mat[i]=[];
		/* �����𖄂߂� */	
	}

	return solve_linear_equations(mat);
}

/* �K�v�Ȋ֐����ȉ��ɏ����i�R�s�y����j */