WScript.Echo("正整数を入力してください");
var n = WScript.StdIn.ReadLine();
n = Number(n);

WScript.Echo(n + "人あつめたときに誕生日の衝突のある確率: " 
		+ collision_prob(n));
		
function collision_prob(n){
	var prob = 1;
	
	/*ここを埋める*/
	
	return 1-prob;
}