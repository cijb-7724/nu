var a = WScript.StdIn.ReadLine();
var a = Number(a);

// x���W�̒l������z��
var xs = [0,Math.PI/2,-Math.PI/2];

// x[i] �ɑΉ�����y���W�̒l�� ys[i] �ɓ����z��
var ys = [];
for(var i = 0;i<xs.length;i++) /*�@�y1�z�����𖄂߂� */

// x[i] �ł̓��֐��l�� zs[i] �ɓ����z��
var zs = [];
for(var i = 0;i<xs.length;i++) /*�@�y2�z�����𖄂߂� */

var eps = 0.0001;

var val = h_interpolation(xs,ys,zs,a);
var val_p = /*�@�y3�z�����𖄂߂� */
var val_m = /*�@�y4�z�����𖄂߂� */

WScript.Echo("�ߎ��l�F " + val);
WScript.Echo("�֐��l�F " + Math.sin(a));

WScript.Echo("�ߎ��̔����W���F " + (val_p - val_m)/(2*eps));
WScript.Echo("���ۂ̔����W���F " + Math.cos(a));

function h_interpolation(xs,ys,zs,a){
	/*�@�y5�z�����𖄂߂� */
}

/*�@�y6�z�ȉ��ɕK�v�Ȋ֐��������i�R�s�y����j */
