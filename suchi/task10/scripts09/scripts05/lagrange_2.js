/* �y1�z�y2�z�𖄂߂ăv���O���������������邱�� */

var a = WScript.StdIn.ReadLine();
var a = Number(a);

// x���W�̒l������z��
var xs = [-1,1];

// x[i] �ɑΉ�����y���W�̒l�� y[i] �ɓ����z��
var ys = [1,2];

WScript.Echo("P_" + xs.length + "(" + a +  ")= " 
				+ lagrange_interpolation(xs,ys,a));


function lagrange_interpolation(xs,ys,a){
	var ret = 0;

	// ���O�����W���̕⊮������ l_i(a) �̒l�� ys�@�̊e�v�f���Ƃ��Ă��Čv�Z
	/* �y1�z�����𖄂߂� */
	
	return ret;
}

/* �y2�z�����ɕK�v�Ȋ֐������� */