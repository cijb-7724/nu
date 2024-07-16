import sys
sys.setrecursionlimit(1000)

def fibonacci(n):
    f1 = 1
    f0 = 0
    a = 1
    b = 1
    d = 0
    while n != 0:
        if n & 1:
            fa = f1
            fb = f0
            f1 = a*fa + b*fb
            f0 = b*fa + d*fb
        a1 = a
        b1 = b
        d1 = d
        a = a1*a1 + b1*b1
        b = b1*(a1 + d1)
        d = b1*b1 + d1*d1

        n = n>>1
    return f0

if __name__ == '__main__':
    n = int(input('n: '))
    print(fibonacci(n))