var a = WScript.StdIn.ReadLine();
var a = Number(a);

var xs = [0, 0.5, 1.5, -0.5];
var ys = [Math.cos(0*2), Math.cos(0.5*2), Math.cos(1.5*2), Math.cos(-0.5*2)];

WScript.Echo("P_" + xs.length + "(" + a + ")= "
                + lagrange_interpolation(xs, ys, a));
WScript.Echo("cos(2* " + a + ")= " + Math.cos(2*a));

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

function lagrange_interpolation(xs, ys, a) {
    var ret = 0;
    for (var i=0; i<xs.length; ++i) {
        ret += ys[i]*l_interpolation_polynomial(xs, i, a);
    }
    return ret;
}



