var x = WScript.StdIn.ReadLine();
x = Number(x);

//sin(x)7次のマクローリン展開
//x - x^3/3! + x^5/5! - x^7/7!

var sum = 0;
var k = 1;
var pow_x = 1;
for (var i=1; i<=7; ++i) {
    k *= i;
    pow_x *= x;
    if (i % 2 == 0) continue;

    if (i % 4 == 3) sum -= pow_x / k;
    else if (i % 4 == 1) sum += pow_x / k;
}
WScript.Echo(sum);