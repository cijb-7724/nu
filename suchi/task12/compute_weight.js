var n = Number(WScript.StdIn.ReadLine());
compute_weight(n);

function compute_weight(m){
	var mat=[];
	
	for(var i = 0;i<=m;i++){
		var row = [];
		for(var j=0;j<=m;j++) row[j]=/* ここを埋める */;
		row[m+1] = /* ここを埋める */;
		mat[i]　=　/* ここを埋める */;
	}
	
	return solve_linear_equations(mat);
}

/* 	solve_linear equations 関数を使う時は
	これまで通り以下の関数を全て記載する必要がある
	（このプログラムでは既に記載しているのでこのままでOK）	*/
	
function solve_linear_equations(A){
	forward_elimination_2(A,0);
	return backward_substitution(A);
}

function forward_elimination_2(A,flag){
	for(var i=0;i<A.length-1;i++){

		var index = i;
		var abs_max = Math.abs(A[index][i]);
		
		for(var j=i+1;j<A.length;j++){
			if(abs_max < Math.abs(A[j][i])){
				index = j;
				abs_max = Math.abs(A[j][i]);
			}
		}
		
		row_swap(A,i,index);
		
		for(var j=i+1;j<A.length;j++){
			row_add(A,-A[j][i]/A[i][i],i,j);
		}
		if(flag==1){
			WScript.Echo("\n"+(i+1)+"回目");
			WScript.Echo((i+1)+"行目と"+
						 (index+1)+"行目を入れ替えました");

			print_matrix_3(A);
		}
	}
}

function backward_substitution(A){
	var ret = [];
	var row_num = A.length;
	var col_num = A[0].length;
	for(var i=row_num-1;i>=0;i--){
		var tmp = A[i][col_num-1];
		for(j=i+1;j<col_num-1;j++){
			tmp -= A[i][j]*ret[j];
		}
		tmp /= A[i][i];
		ret[i] = tmp;
	}
	var str = "(";
	for(i=0;i<ret.length;i++){
		str += ret[i];
		if(i < ret.length-1) str += ",";
		else str += ")";
	}
	WScript.Echo("解：");
	WScript.Echo(str);
	return ret;
}

function print_matrix_3(a){
	for(var i = 0; i < a.length; i++ ){
		var tmp = "";
		for(var j = 0; j < a[i].length; j++ )
			tmp += ("  　   " + a[i][j].toFixed(2)).slice(-7) + " ";
		WScript.Echo(tmp);
	}
}

function matrix_from_file(str){
	var file = WScript.CreateObject("Scripting.FileSystemObject").OpenTextFile(str,1);
	var ret = new Array();
	while( !file.AtEndOfStream ){
		var arr = file.ReadLine().split(/\s+/);
		for(var i = 0; i < arr.length ; i++)
			if(arr[i].indexOf('/') != -1) 
				arr[i]=Number(arr[i].split('/')[0])/Number(arr[i].split('/')[1]);
			else arr[i] = Number(arr[i]);
		ret.push(arr);
	}
	file.close();
	return ret;
}

function row_add(A,a,u,v){
	for(var i = 0;i<A[u].length;i++){
		A[v][i] += a*A[u][i];
	}
}

function row_swap(A,u,v){
	var tmp = A[u];
	A[u] = A[v];
	A[v] = tmp;
}







