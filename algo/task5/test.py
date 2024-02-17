def _down_heap(a, n, i, x):
    j = 2 * i
    while j <= n:
        if j < n and a[j] < a[j + 1]:
            j += 1
        if x >= a[j]:  # 正しい比較演算子に修正
            break
        a[i] = a[j]
        i = j
        j = 2 * i
    a[i] = x

def heap_sort(a):
    n = len(a) - 1
    for i in range(n // 2, 0, -1):
        _down_heap(a, n, i, a[i])  # _down_heap の戻り値を受け取らない
        if __name__ == '__main__':
            print(a)
    for i in range(n, 1, -1):
        x = a[i]
        a[i] = a[1]
        _down_heap(a, i - 1, 1, x)  # _down_heap の戻り値を受け取らない
        if __name__ == '__main__':
            print(a)
    return a[1:]

if __name__ == '__main__':
    i = input('ソートしたい値をスペース区切りで入力： ')
    input_list = [0] + [int(x) for x in i.split()]  # 先頭にダミー要素を追加
    sorted_list = heap_sort(input_list)
    print(sorted_list)
