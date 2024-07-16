import sys
sys.setrecursionlimit(1000)

def fibonacci(n):
    f = 0
    f1 = 1
    for i in range(1, n+1):
        f2 = f1
        f1 = f
        f = f1 + f2
    return f

if __name__ == '__main__':
    n = int(input('n: '))
    print(fibonacci(n))