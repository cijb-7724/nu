var arr = 	[ [1,2,3], 		// arr[0] は [1,2,3]
			  [4,5,6,7],		// arr[1] は [4,5,6,7]
			  [8,9,10,11,12] ];	// arr[2] は [8,9,10,11,12]
			
// var array = [ [1,2,3], [4,5,6,7], [8,9,10,11,12] ]; と書いても同じ

print_matrix(arr);

function print_matrix(a){
	for(var i = 0; i < /* ここを埋める */; i++){
		for(var j=0; j < /* ここを埋める */; j++){
				WScript.Echo(a[i][j]);
		}			
	}
}

