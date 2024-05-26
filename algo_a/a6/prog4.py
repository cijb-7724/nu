n = 9
x = '□'
y = '○'
for i in range(n):
    for j in range(i):
        print(y, end='')
    for j in range(n-i):
        print(x, end='')
    print(' ')