var eps = 0.000001;

WScript.Echo("行列のデータが入ったファイルを相対パスで指定してください");
var fname1 = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname1);

WScript.Echo("ベクトルのデータが入ったファイルを相対パスで指定してください");
var fname2 = WScript.StdIn.ReadLine();
var vec = vector_from_file(fname2);

WScript.Echo("\n以下の行列が読み込まれました");
print_matrix_3(mat);

WScript.Echo("\n以下のベクトルが読み込まれました");
print_vector(vec);

WScript.Echo("\nヤコビ法を実行します");
var result = yacobi(mat, vec, eps, 1);

// Aが拡大係数行列をあらわす二次元配列
// xは初期解をあらわす一次元配列
// epsは誤差を表す値
// flagが1だったら途中経過と結果を表示
function yacobi(A, x, eps, flag) {

    var new_sol = [];
    var old_sol = [];
    var row_num = A.length; // 【1】
    var col_num = A[0].length; // 【2】
    var vec_num = x.length; // 【3】
    var cnt = 0;

    // 引数のベクトルxを新しい解としてコピー
    for (var i = 0; i < vec_num; i++) {
        new_sol[i] = x[i];
    }

    do {
        // 新しい解new_solを古い解old_solにコピー
        for (var i = 0; i < vec_num; i++) { // 【4】
            old_sol[i] = new_sol[i];
        }

        // 新しい解を更新する
        for (var i = 0; i < row_num; i++) {
            new_sol[i] = A[i][col_num - 1]; // 【5】

            for (var j = 0; j < vec_num; j++) {
                if (j != i) new_sol[i] -= A[i][j] * old_sol[j]; // 【6】
            }

            new_sol[i] /= A[i][i]; // 【7】
        }

        cnt++;

        // flagが1ならば途中結果を表示
        if (flag == 1) {
            WScript.Echo(cnt + "回目：");
            print_vector(new_sol);
        }

    } while (dist_of_vecs(new_sol, old_sol) > eps);

    if (flag == 1) {
        WScript.Echo("\n解：");
        print_vector(new_sol);
    }

    return new_sol;
}

function dist_of_vecs(x, y) {
    var dist = 0;
    for (var i = 0; i < x.length; i++) {
        dist += Math.pow(x[i] - y[i], 2); // 【8】
    }
    return Math.sqrt(dist);
}

// 【9】以下に必要な関数をコピーしてくる

// ファイルから行列のデータを読み込んで二次元配列を返す関数
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

// ファイルからベクトルのデータを読み込んで一次元配列を返す関数
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

// 一次元配列を受け取って行ベクトルのように表示する関数
function print_vector(x) {
    var str = "(";
    for (var i = 0; i < x.length; i++) {
        if (i != x.length - 1) str += x[i] + ", ";
        else str += x[i] + ")";
    }
    WScript.Echo(str);
}

// 二次元配列を受け取って行列のように表示する関数
function print_matrix_3(a) {
    for (var i = 0; i < a.length; i++) {
        var tmp = "";
        for (var j = 0; j < a[i].length; j++)
            tmp += ("       " + a[i][j].toFixed(2)).slice(-7) + " ";
        WScript.Echo(tmp);
    }
}
