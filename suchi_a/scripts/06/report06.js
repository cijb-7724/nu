function monteCarlo(points) {
    var cnt = 0;

    for (var i=0; i<points; ++i) {
        var x = Math.random() * 2 - 1;
        var y = Math.random() * 2 - 1;

        if (
            x*x+y*y <= 1 && 
            y >= x*x &&
            y >= x*x*x+0.5
        ) ++cnt;
    }

    return 4*cnt/points;
}

var sampling = [10, 100, 1000, 10000];

for (var i=0; i<sampling.length; ++i) {
    var points = sampling[i];
    var area = monteCarlo(points);
    WScript.Echo("Points: " + points + ", Area: " + area);
}
