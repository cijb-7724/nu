WScript.Echo("���[�v����break���g���܂�");
for(var i=0;i<10;i++){
	if(i==5) break;
	WScript.Echo("i=" + i);
}

WScript.Echo("��d���[�v����break���g���܂�");
for(var i=0;i<10;i++){
	for(var j=0;j<10;j++){
		if(j==3) break;
		WScript.Echo("i=" + i + ", j=" + j);
	}
}