WScript.Echo("�s��̃f�[�^���������t�@�C���𑊑΃p�X�Ŏw�肵�Ă�������");
var fname1 = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname1);

WScript.Echo("\n�x�N�g���̃f�[�^���������t�@�C���𑊑΃p�X�Ŏw�肵�Ă�������");
var fname2 = WScript.StdIn.ReadLine();
var vec = vector_from_file(fname2);

WScript.Echo("\n���̍s�񂪓ǂݍ��܂�܂���");
print_matrix_3(mat);

WScript.Echo("\n���̃x�N�g�����ǂݍ��܂�܂���");
print_vector(vec);

WScript.Echo("\n�v�Z���ʁF");
var result = matrix_vector_mul(mat, vec);
print_vector(result);

// �s�������킷�񎟌��z��A��
// �x�N�g��������킷�ꎟ���z��x���󂯎��(x�͗�x�N�g���Ƃ��ĉ��߂���)
// Ax�̌��ʂ��x�N�g���ꎟ���z��Ƃ��ĕԂ�
// ������A��x�݂͌��Ɋ|���Z���ł���T�C�Y�ł��邱�Ƃ͉��肷��
function matrix_vector_mul(A, x) {
    var ret = [];
    for (var i = 0; i < A.length; i++) { // �y�����𖄂߂�z
        ret[i] = 0;
        for (var j = 0; j < x.length; j++) { // �y�����𖄂߂�z
            ret[i] += A[i][j] * x[j]; // �y�����𖄂߂�z
        }
    }
    return ret;
}

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

// �t�@�C������x�N�g���̃f�[�^��ǂݍ���ňꎟ���z���Ԃ��֐�
// ���s�����v���O��������̑��΃p�X�Ŏw�肵���ꏊ�ɂ���t�@�C����ǂݍ���
function vector_from_file(str) {
    var file = WScript.CreateObject("Scripting.FileSystemObject").OpenTextFile(str, 1);

    var arr = file.ReadLine().split(/\s+/);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('/') != -1)
            arr[i] = Number(arr[i].split('/')[0]) / Number(arr[i].split('/')[1]);
        else arr[i] = Number(arr[i]);
    }

    file.close();
    return arr;
}

// �ꎟ���z����󂯎���čs�x�N�g���̂悤�ɕ\������֐�
function print_vector(x) {
    var str = "(";
    for (var i = 0; i < x.length; i++) {
        if (i != x.length - 1) str += x[i] + ", ";
        else str += x[i] + ")";
    }
    WScript.Echo(str);
}

// �񎟌��z����󂯎���čs��̂悤�ɕ\������֐�
function print_matrix_3(a) {
    for (var i = 0; i < a.length; i++) {
        var tmp = "";
        for (var j = 0; j < a[i].length; j++)
            tmp += ("       " + a[i][j].toFixed(2)).slice(-7) + " ";
        WScript.Echo(tmp);
    }
}
