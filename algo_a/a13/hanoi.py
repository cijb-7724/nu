import sys
sys.setrecursionlimit(1000)

a = []
b = []
c = []

def hanoi(n, source, target, spare):
    if n > 1:
        hanoi(n-1, source, spare, target)
        target.append(source.pop())
        print(f'円盤{n}を移動')
        print(a, b, c, '------------', sep='\n')
        hanoi(n-1, spare, target, source)
    else:
        target.append(source.pop())
        print(f'円盤{n}を移動')
        print(a, b, c, '------------', sep='\n')

n = int(input('枚数 : '))
for i in range(n, 0, -1):
    a.append(i)
print(a, b, c, '------------', sep='\n')

hanoi(n, a, c, b)

