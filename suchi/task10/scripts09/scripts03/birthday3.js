WScript.Echo("�l������͂��Ă�������");
var person_num = WScript.StdIn.ReadLine(); 
person_num = Number(person_num)

WScript.Echo("���s�񐔂���͂��Ă�������");
var itr = WScript.StdIn.ReadLine();
itr = Number(itr);

var day_num = 365;

// hits�͒a�����̏Փ˂��N�������񐔂��L�^����ϐ�
var hits = 0;

// �w�肳�ꂽ���s�񐔂����u�����_���Ɏw��l���̒a���������ߏՓ˂��N���邩���ׂ�v���߂̃��[�v
for(var i = 0; i<itr; i++){

	// �����_���ɑI�񂾐l�̒a�������L�^����z��
	var days = [];
	
	// �z��̊e�v�f��0�ŏ���������
	for(var j=0; j<day_num; j++) days[j] = 0;

	// �w�肳�ꂽ�l���̒a�����������_���Ɍ��߂邽�߂̃��[�v
	for(var j=0; j < person_num; j++){

		// �a�����������_���Ɉ�I��
		var birthday = /* �y1�z�@�����𖄂߂� */;

		// �I�񂾒a�����̐l�����ɂ����烋�[�v�𔲂���
		// ���Ȃ�������a�����ɑΉ����� days�@�̗v�f���P���₷�@
		if(/* �y2�z�@�����𖄂߂� */) break;
		else days[/* �y3�z�@�����𖄂߂� */]++;
	}
	
	if(/* �y4�z�@�����𖄂߂� */) hits++;	
}

WScript.Echo("�����_����" + person_num +�@"�l��A��Ă����Ƃ�");
WScript.Echo("�a�����������l������m����");
WScript.Echo("�����I�ɂ� " + (100 * hits / itr) + "��");
WScript.Echo("���_�I�ɂ� " + (100*collision_prob(person_num)) + "��");


function collision_prob(n){
	var prob = 1;
	
	/* �y5�z�����𖄂߂� */
	
	return 1-prob;
}
