WScript.Echo("行列のデータが入ったファイルを相対パスで指定してください");
var fname = WScript.StdIn.ReadLine();
var u_mat = matrix_from_file(fname);

WScript.Echo("\n以下の行列が読み込まれました");
print_matrix_3(u_mat);

WScript.Echo("LU分解を実行します");
var l_mat = LU_decomposition(u_mat, 1);

WScript.Echo("\nL×U=");
print_matrix_3(matrix_mul(l_mat, u_mat));


// 係数行列AをLU分解するする
// 引数として与えられた行列はLU分解後のU(上三角行列)に変形される
// さらに返り値としてL（下三角行列）が返される
// flagを1に指定すると途中経過も表示する
function LU_decomposition(A, flag) {

    // retはLU分解後のL(下三角行列)を入れる関数
    // まずは以前作った単位行列を作成する関数で単位行列を生成
    var ret = identity_matrix(A.length); // 【1】ここを埋める

    for (var i = 0; i < A.length; i++) { // 【2】ここを埋める
        for (var j = i + 1; j < A.length; j++) { // 【3】ここを埋める、【4】ここを埋める
            // Aの対角要素より下を前進消去で0にしていくと同時に
            // retの下三角部分の値を代入していく
            ret[j][i] = A[j][i] / A[i][i]; // 【5】ここを埋める
            row_add(A, -ret[j][i], i, j); // 【6】ここを埋める、【7】ここを埋める、【8】ここを埋める
        }
        if (flag == 1) {
            WScript.Echo("\n" + (i + 1) + "回目");
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
        var tmp = A[i][col_num - 1]; // 【9】ここを埋める
        for (var j = i + 1; j < col_num - 1; j++) {
            tmp -= A[i][j] * ret[j]; // 【10】ここを埋める
        }
        tmp /= A[i][i]; // 【11】ここを埋める
        ret[i] = tmp;
    }
    var str = "(";
    for (i = 0; i < ret.length; i++) {
        str += ret[i];
        if (i < ret.length - 1) str += ",";
        else str += ")";
    }
    WScript.Echo("解：");
    WScript.Echo(str);
    return ret;
}

// 要素に数値が入った行列(2次元配列)を受け取って表示する関数
// 各要素は整数部が最大4桁・小数部が2桁固定で表示される
function print_matrix_3(a) {
    for (var i = 0; i < a.length; i++) {
        var tmp = "";
        for (var j = 0; j < a[i].length; j++)
            tmp += ("       " + a[i][j].toFixed(2)).slice(-7) + " ";
        WScript.Echo(tmp);
    }
}

// ファイルから行列のデータを読み込んで二次元配列を返す関数
// 実行されるプログラムからの相対パスで指定した場所にあるファイルを読み込む
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
        // このループの中では A×B の i 行目を計算する
        ret[i] = [];

        for (var j = 0; j < b[0].length; j++) {
            // このループの中では A×B の i 行 j 列目を計算する
            ret[i][j] = 0;

            // a の i 行目と b の j 列目の要素の
            // k番目同士を掛け合わせて総和をとる
            for (var k = 0; k < a[i].length; k++) {
                ret[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return ret;
}

// 【12】ここを埋める(【1】で使った関数の定義を追加する)
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
