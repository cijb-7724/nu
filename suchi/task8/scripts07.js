///////////////////////////////scripts07.js
//7-1
var xs = [0, 1.5, -2];
for (i=0; i<xs.length; ++i) {
    WScript.Echo('i= ' + i);
    WScript.Echo(l_interpolation_polynomial_d(xs, i, xs[i]));
    WScript.Echo(ljd(xs, i) + '\n');
}


function ljd(xs, j) {
    var ret = 0;
    for (var i=0; i<xs.length; ++i) {
        if (i != j) ret += 1 / (xs[j] - xs[i]);
    }
    return ret;
}

function l_interpolation_polynomial_d(xs, j, a) {
    var denom = 1;
    var numer = 0;
    for (var i=0; i<xs.length; ++i) {
        if (i != j) denom *= xs[j] - xs[i];
    }
    for (var i=0; i<xs.length; ++i) {
        var tmp = 1;
        for (var k=0; k<xs.length; ++k) {
            if (k != i && k != j) tmp *= a-xs[k];
        }
        if (i != j) numer += tmp;
    }

    return numer / denom;
}

//7-2
var a = Number(WScript.StdIn.ReadLine());
var xs = [0, 1.5, -2];
var eps = 0.000001;

for (var i=0; i<xs.length; ++i) {
    WScript.Echo('i=' + i);
    WScript.Echo('関数値: '+l_interpolation_polynomial_d(xs, i, a));

    var plus = l_interpolation_polynomial(xs, i, a+eps);
    var minus = l_interpolation_polynomial(xs, i, a-eps);
    var approx = (plus - minus) / (2 * eps);
    WScript.Echo('近似値: '+approx);
}
//script 6
function l_interpolation_polynomial(xs, j, a) {
    var denom = 1;
    var numer = 1;

    for (var i=0; i<xs.length; ++i) {
        if (i != j) {
            denom *= xs[j] - xs[i];
            numer *= a - xs[i];
        }
    }
    return numer / denom;
}

//7-3
xs = [-1, 1, -2, 3];
eps = 0.001;
for (var i=0; i<xs.length; ++i) {
    for (var j=0; j<xs.length; ++j) {
        WScript.Echo('h_'+i+'('+xs[j]+') = '
        + h_polynomial(xs, i, xs[j]));
    }
}
for (var i=0; i<xs.length; ++i) {
    for (var j=0; j<xs.length; ++j) {
        WScript.Echo('h_'+i+'('+xs[j]+') = '
        + ((h_polynomial(xs, i, xs[j]+eps)
        - h_polynomial(xs, i, xs[j]-eps)) / (2*eps)));
    }
}
function h_polynomial(xs, j, a) {
    var l_j = l_interpolation_polynomial(xs, j, a);
    var ld_j = l_interpolation_polynomial_d(xs, j, xs[j]);
    return l_j * l_j * (1-2*(a-xs[j]) * ld_j);
}

//7-4
xs = [2, -3, 4, -1.5];
eps = 0.001;

for (var i=0; i<xs.length; ++i) {
    for (var j=0; j<xs.length; ++j) {
        WScript.Echo('g_'+i+'('+xs[j]+') = '
        + g_polynomial(xs, i, xs[j]));
    }
}

for (var i=0; i<xs.length; ++i) {
    for (var j=0; j<xs.length; ++j) {
        WScript.Echo('g_'+i+'('+xs[j]+') = '
        + ((g_polynomial(xs, i, xs[j]+eps)
        - g_polynomial(xs, i, xs[j]-eps)) / (2*eps)));
    }
}
function g_polynomial(xs, j, a) {
    var l_j = l_interpolation_polynomial(xs, j, a);
    return l_j * l_j * (a-xs[j]);
}
///////////////////////////////scripts07.js



