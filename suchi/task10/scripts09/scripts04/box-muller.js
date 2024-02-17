var itr = 100000;

var cnt = new Array();

for(var i=0;i<51;i++){
	cnt[i]=0;	
}

for(var i=0;i<itr;i++){
	var x = Math.random();
	var y = Math.random();
	
	// •½‹Ï0E•ªU1i•W€•Î·1j‚Ì³‹K•ª•z‚©‚ç“¾‚ç‚ê‚é—”‚É•ÏŠ·
	var val = /*y1z‚±‚±‚ğ–„‚ß‚é*/
	
	// •½‹Ï25E•ªU49(•W€•Î·7)‚Ì³‹K•ª•z‚©‚ç“¾‚ç‚ê‚é—”‚É•ÏŠ·
	val = /*y2z‚±‚±‚ğ–„‚ß‚é*/
	
	//@®”’l‚É‚·‚é
	val = /*y3z‚±‚±‚ğ–„‚ß‚é*/
	
	// 50ˆÈã‚â0ˆÈ‰º‚ÍƒŒƒAƒP[ƒX‚È‚Ì‚Å‚Ü‚Æ‚ß‚Ä‚µ‚Ü‚¤
	/*y4z‚±‚±‚ğ–„‚ß‚é*/
	
	// ”z—ñcnt‚Ìval”Ô–Ú‚Ì”z—ñ—v‘f‚ğƒCƒ“ƒNƒŠƒƒ“ƒg
	cnt[val]++;
}

for(var i=0;i<51;i++){
	output = "";
	
	// floor(cnt[i]/100)ŒÂ•ª‚¾‚¯ + ‚ğo—Í
	for(var j=0;j<cnt[i]/100;j++) output += "+";
	WScript.Echo(output);
}


