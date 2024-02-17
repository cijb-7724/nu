WScript.Echo("人数を入力してください");
var person_num = WScript.StdIn.ReadLine(); 
person_num = Number(person_num)

WScript.Echo("試行回数を入力してください");
var itr = WScript.StdIn.ReadLine();
itr = Number(itr);

var day_num = 365;

// hitsは誕生日の衝突が起こった回数を記録する変数
var hits = 0;

// 指定された試行回数だけ「ランダムに指定人数の誕生日を決め衝突が起こるか調べる」ためのループ
for(var i = 0; i<itr; i++){

	// ランダムに選んだ人の誕生日を記録する配列
	var days = [];
	
	// 配列の各要素を0で初期化する
	for(var j=0; j<day_num; j++) days[j] = 0;

	// 指定された人数の誕生日をランダムに決めるためのループ
	for(var j=0; j < person_num; j++){

		// 誕生日をランダムに一つ選ぶ
		var birthday = /* 【1】　ここを埋める */;

		// 選んだ誕生日の人が既にいたらループを抜ける
		// いなかったら誕生日に対応する days　の要素を１増やす　
		if(/* 【2】　ここを埋める */) break;
		else days[/* 【3】　ここを埋める */]++;
	}
	
	if(/* 【4】　ここを埋める */) hits++;	
}

WScript.Echo("ランダムに" + person_num +　"人を連れてきたとき");
WScript.Echo("誕生日が同じ人がいる確率は");
WScript.Echo("実験的には " + (100 * hits / itr) + "％");
WScript.Echo("理論的には " + (100*collision_prob(person_num)) + "％");


function collision_prob(n){
	var prob = 1;
	
	/* 【5】ここを埋める */
	
	return 1-prob;
}
