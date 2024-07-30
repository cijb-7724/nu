WScript.Echo("�s��̃f�[�^���������t�@�C���𑊑΃p�X�Ŏw�肵�Ă�������");
var fname = WScript.StdIn.ReadLine();
var u_mat = matrix_from_file(fname);

WScript.Echo("\n�ȉ��̍s�񂪓ǂݍ��܂�܂���");
print_matrix_3(u_mat);

WScript.Echo("LU���������s���܂�");
var l_mat = LU_decomposition(u_mat, 1);

WScript.Echo("\nL�~U=");
print_matrix_3(matrix_mul(l_mat, u_mat));


// �W���s��A��LU�������邷��
// �����Ƃ��ė^����ꂽ�s���LU�������U(��O�p�s��)�ɕό`�����
// ����ɕԂ�l�Ƃ���L�i���O�p�s��j���Ԃ����
// flag��1�Ɏw�肷��Ɠr���o�߂��\������
function LU_decomposition(A, flag) {

    // ret��LU�������L(���O�p�s��)������֐�
    // �܂��͈ȑO������P�ʍs����쐬����֐��ŒP�ʍs��𐶐�
    var ret = identity_matrix(A.length); // �y1�z�����𖄂߂�

    for (var i = 0; i < A.length; i++) { // �y2�z�����𖄂߂�
        for (var j = i + 1; j < A.length; j++) { // �y3�z�����𖄂߂�A�y4�z�����𖄂߂�
            // A�̑Ίp�v�f��艺��O�i������0�ɂ��Ă����Ɠ�����
            // ret�̉��O�p�����̒l�������Ă���
            ret[j][i] = A[j][i] / A[i][i]; // �y5�z�����𖄂߂�
            row_add(A, -ret[j][i], i, j); // �y6�z�����𖄂߂�A�y7�z�����𖄂߂�A�y8�z�����𖄂߂�
        }
        if (flag == 1) {
            WScript.Echo("\n" + (i + 1) + "���");
            WScript.Echo("L=");
            print_matrix_3(ret);
            WScript.Echo("U=");
            print_matrix_3(A);
        }
    }
    return ret;
}

function backward_substitution(A) {
    var ret = [];
    var row_num = A.length;
    var col_num = A[0].length;
    for (var i = row_num - 1; i >= 0; i--) {
        var tmp = A[i][col_num - 1]; // �y9�z�����𖄂߂�
        for (var j = i + 1; j < col_num - 1; j++) {
            tmp -= A[i][j] * ret[j]; // �y10�z�����𖄂߂�
        }
        tmp /= A[i][i]; // �y11�z�����𖄂߂�
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

function row_add(A, a, u, v) {
    for (var i = 0; i < A[u].length; i++) {
        A[v][i] += a * A[u][i];
    }
}

function matrix_mul(a, b) {
    var ret = [];

    for (var i = 0; i < a.length; i++) {
        // ���̃��[�v�̒��ł� A�~B �� i �s�ڂ��v�Z����
        ret[i] = [];

        for (var j = 0; j < b[0].length; j++) {
            // ���̃��[�v�̒��ł� A�~B �� i �s j ��ڂ��v�Z����
            ret[i][j] = 0;

            // a �� i �s�ڂ� b �� j ��ڂ̗v�f��
            // k�Ԗړ��m���|�����킹�đ��a���Ƃ�
            for (var k = 0; k < a[i].length; k++) {
                ret[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return ret;
}

// �y12�z�����𖄂߂�(�y1�z�Ŏg�����֐��̒�`��ǉ�����)
function identity_matrix(size) {
    var ret = [];
    for (var i = 0; i < size; i++) {
        ret[i] = [];
        for (var j = 0; j < size; j++) {
            if (i === j) {
                ret[i][j] = 1;
            } else {
                ret[i][j] = 0;
            }
        }
    }
    return ret;
}
