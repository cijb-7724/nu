var arr = 	[ [1,2,3], 		// arr[0] �� [1,2,3]
			  [4,5,6,7],		// arr[1] �� [4,5,6,7]
			  [8,9,10,11,12] ];	// arr[2] �� [8,9,10,11,12]
			
// var array = [ [1,2,3], [4,5,6,7], [8,9,10,11,12] ]; �Ə����Ă�����

print_matrix(arr);

function print_matrix(a){
	for(var i = 0; i < /* �����𖄂߂� */; i++){
		for(var j=0; j < /* �����𖄂߂� */; j++){
				WScript.Echo(a[i][j]);
		}			
	}
}

