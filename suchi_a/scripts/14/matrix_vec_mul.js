WScript.Echo("行列のデータが入ったファイルを相対パスで指定してください");
var fname1 = WScript.StdIn.ReadLine();
var mat = matrix_from_file(fname1);

WScript.Echo("\nベクトルのデータが入ったファイルを相対パスで指定してください");
var fname2 = WScript.StdIn.ReadLine();
var vec = vector_from_file(fname2);

WScript.Echo("\n次の行列が読み込まれました");
print_matrix_3(mat);

WScript.Echo("\n次のベクトルが読み込まれました");
print_vector(vec);

WScript.Echo("\n計算結果：");
var result = matrix_vector_mul(mat, vec);
print_vector(result);

// 行列をあらわす二次元配列Aと
// ベクトルをあらわす一次元配列xを受け取り(xは列ベクトルとして解釈する)
// Axの結果をベクトル一次元配列として返す
// ただしAとxは互いに掛け算ができるサイズであることは仮定する
function matrix_vector_mul(A, x) {
    var ret = [];
    for (var i = 0; i < A.length; i++) { // 【ここを埋める】
        ret[i] = 0;
        for (var j = 0; j < x.length; j++) { // 【ここを埋める】
            ret[i] += A[i][j] * x[j]; // 【ここを埋める】
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

// ファイルからベクトルのデータを読み込んで一次元配列を返す関数
// 実行されるプログラムからの相対パスで指定した場所にあるファイルを読み込む
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
