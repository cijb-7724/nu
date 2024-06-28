rkuku = list()
for i in range(9):
    row = list()
    for j in range(9):
        row.append((9-i) * (9-j))
    rkuku.append(row)

print('行ごとに出力')
for row in rkuku:
    print(row)

print('\n行と列を指定して出力')
for i in range(9):
    for j in range(9):
        print(f'{rkuku[i][j]:>3}', end='')
    print('')
