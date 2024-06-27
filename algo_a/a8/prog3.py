a = [
    [0.11, 0.21, 0.31],
    [0.21, 0.22, 0.23],
    [0.31, 0.32, 0.33]
]

b = [
    [1.0, 2.0],
    [3.0, 4.0],
    [5.0, 6.0]
]

l = len(a)
m = len(b)
n = len(b[0])

c = [[0] * n for _ in range(l)]

for i in range(l):
    for j in range(n):
        for k in range(m):
            c[i][j] += a[i][k] * b[k][j]

print(c)