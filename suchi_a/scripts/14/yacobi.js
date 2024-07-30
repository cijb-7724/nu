var eps = 0.000001;

WScript.Echo("�s��̃f�[�^���������t�@�C���𑊑΃p�X�Ŏw�肵�Ă�������");
var fname1 = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname1);

WScript.Echo("�x�N�g���̃f�[�^���������t�@�C���𑊑΃p�X�Ŏw�肵�Ă�������");
var fname2 = WScript.StdIn.ReadLine();
var vec = vector_from_file(fname2);

WScript.Echo("\n�ȉ��̍s�񂪓ǂݍ��܂�܂���");
print_matrix_3(mat);

WScript.Echo("\n�ȉ��̃x�N�g�����ǂݍ��܂�܂���");
print_vector(vec);

WScript.Echo("\n���R�r�@�����s���܂�");
var result = yacobi(mat, vec, eps, 1);

// A���g��W���s�������킷�񎟌��z��
// x�͏�����������킷�ꎟ���z��
// eps�͌덷��\���l
// flag��1��������r���o�߂ƌ��ʂ�\��
function yacobi(A, x, eps, flag) {

    var new_sol = [];
    var old_sol = [];
    var row_num = A.length; // �y1�z
    var col_num = A[0].length; // �y2�z
    var vec_num = x.length; // �y3�z
    var cnt = 0;

    // �����̃x�N�g��x��V�������Ƃ��ăR�s�[
    for (var i = 0; i < vec_num; i++) {
        new_sol[i] = x[i];
    }

    do {
        // �V������new_sol���Â���old_sol�ɃR�s�[
        for (var i = 0; i < vec_num; i++) { // �y4�z
            old_sol[i] = new_sol[i];
        }

        // �V���������X�V����
        for (var i = 0; i < row_num; i++) {
            new_sol[i] = A[i][col_num - 1]; // �y5�z

            for (var j = 0; j < vec_num; j++) {
                if (j != i) new_sol[i] -= A[i][j] * old_sol[j]; // �y6�z
            }

            new_sol[i] /= A[i][i]; // �y7�z
        }

        cnt++;

        // flag��1�Ȃ�Γr�����ʂ�\��
        if (flag == 1) {
            WScript.Echo(cnt + "��ځF");
            print_vector(new_sol);
        }

    } while (dist_of_vecs(new_sol, old_sol) > eps);

    if (flag == 1) {
        WScript.Echo("\n���F");
        print_vector(new_sol);
    }

    return new_sol;
}

function dist_of_vecs(x, y) {
    var dist = 0;
    for (var i = 0; i < x.length; i++) {
        dist += Math.pow(x[i] - y[i], 2); // �y8�z
    }
    return Math.sqrt(dist);
}

// �y9�z�ȉ��ɕK�v�Ȋ֐����R�s�[���Ă���

// �t�@�C������s��̃f�[�^��ǂݍ���œ񎟌��z���Ԃ��֐�
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
