// x���W�̒l������z��
var xs = [2,-3,4,-1.5];

var eps = 0.001;

for(i=0;i<xs.length;i++){
	for(j=0;j<xs.length;j++){
		WScript.Echo("g_" + i + "(" + xs[j] +  ") = "
			+ g_polynomial(xs,i,xs[j]));
	}
}

for(i=0;i<xs.length;i++){
	for(j=0;j<xs.length;j++){
		WScript.Echo("g'_" + i + "(" + xs[j] +  ") = "
			+ (( /* �y1�z�����𖄂߂� */ ));
	}
}

function g_polynomial(xs,j,a){
	//�@�y2�z�����𖄂߂�
}

// �y3�z�K�v�Ȋ֐��������i�R�s�y����j