WScript.Echo("�s��̃f�[�^���������t�@�C���𑊑΃p�X�Ŏw�肵�Ă�������");
var fname = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname);

WScript.Echo("\n�ȉ��̍s�񂪓ǂݍ��܂�܂���");
print_matrix_3(mat);

WScript.Echo("\n�O�i���������s���܂�");
forward_elimination_2(mat, 1);

WScript.Echo("\n��ޑ�������s���܂�");
backward_substitution(mat);

// �����s�{�b�g�I�����s���Ȃ���O�i�������s���֐�
function forward_elimination_2(A, flag) {
    for (var i = 0; i < A.length - 1; i++) {

        // A[j][i] (j=i,i+1,i+2,...)
        // �̒��ň�Ԑ�Βl�̑傫���悤�ȍs�ԍ�j��������
        //�@���̂悤�ȍs�ԍ���ϐ�index�ɕۑ�����
        var index = i; // �����l�Ƃ���i�s�ڂ�ݒ�
        var abs_max = Math.abs(A[i][i]); // �����l�Ƃ���i�s�ڂ̐�Βl��ݒ�
        
        for (var j = i + 1; j < A.length; j++) {
            if (abs_max < Math.abs(A[j][i])) {
                index = j;
                abs_max = Math.abs(A[j][i]);
            }
        }
        
        // i�s�ڂ�index�s�ڂ����ւ���
        row_swap(A, i, index);
        
        for (var j = i + 1; j < A.length; j++) {
            row_add(A, -A[j][i] / A[i][i], i, j);
        }
        if (flag == 1) {
            WScript.Echo("\n" + (i + 1) + "���");
            WScript.Echo((i + 1) + "�s�ڂ�" + (index + 1) + "�s�ڂ����ւ��܂���");
            print_matrix_3(A);
        }
    }
}

function backward_substitution(A) {
    var ret = [];
    var row_num = A.length;
    var col_num = A[0].length;
    for (var i = row_num - 1; i >= 0; i--) {
        var tmp = A[i][col_num - 1]; // �Ō�̗�b�̒l
        for (var j = i + 1; j < col_num - 1; j++) {
            tmp -= A[i][j] * ret[j];
        }
        tmp /= A[i][i];
        ret[i] = tmp;
    }
    var str = "(";
    for (i = 0; i < ret.length; i++) {
        str += ret[i];
        if (i < ret.length - 1) str += ",";
        else str += ")";
    }
    WScript.Echo("���F");
    WScript.Echo(str);
    return ret;
}

// �v�f�ɐ��l���������s��(2�����z��)���󂯎���ĕ\������֐�
// �e�v�f�͐��������ő�4���E��������2���Œ�ŕ\�������
function print_matrix_3(a) {
    for (var i = 0; i < a.length; i++) {
        var tmp = "";
        for (var j = 0; j < a[i].length; j++)
            tmp += ("       " + a[i][j].toFixed(2)).slice(-7) + " ";
        WScript.Echo(tmp);
    }
}

// �t�@�C������s��̃f�[�^��ǂݍ���œ񎟌��z���Ԃ��֐�
// ���s�����v���O��������̑��΃p�X�Ŏw�肵���ꏊ�ɂ���t�@�C����ǂݍ���
function matrix_from_file(str) {
    var file = WScript.CreateObject("Scripting.FileSystemObject").OpenTextFile(str, 1);
    var ret = new Array();
    while (!file.AtEndOfStream) {
        var arr = file.ReadLine().split(/\s+/);
        for (var i = 0; i < arr.length; i++)
            if (arr[i].indexOf('/') != -1)
                arr[i] = Number(arr[i].split('/')[0]) / Number(arr[i].split('/')[1]);
            else arr[i] = Number(arr[i]);
        ret.push(arr);
    }
    file.close();
    return ret;
}

// �s����������֐�
function row_swap(A, i, j) {
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

// �s��{�ό`���s���֐�
function row_add(A, factor, src, dest) {
    for (var k = 0; k < A[src].length; k++) {
        A[dest][k] += factor * A[src][k];
    }
}