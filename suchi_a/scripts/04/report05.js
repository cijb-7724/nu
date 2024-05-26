var x = WScript.StdIn.ReadLine();
x = Number(x);

var ok = false;
if (x % 400 == 0) ok = true;
else if (x % 100 == 0) ok = false;
else if (x % 4 == 0) ok = true;

if (ok) WScript.Echo("Leap year");
else WScript.Echo("Normal year");
