import math

def _merge_sort_recursion(a, first, last, work):
    middle = 0
    if first < last:
        middle = int((first + last) / 2)
        _merge_sort_recursion(a, first, middle, work)
        _merge_sort_recursion(a, middle + 1, last, work)
    if __name__ == '__main__':
        print(first, last, a)
    
    wk_size = 0
    for i in range(first, middle + 1):
        work[wk_size] = a[i]
        wk_size += 1
    
    i = 0
    j = middle + 1
    k = first
    while i < wk_size and j <= last:
        if work[i] <= a[j]:
            a[k] = work[i]
            k += 1
            i += 1
        else:
            a[k] = a[j]
            k += 1
            j += 1
    while i < wk_size:
        a[k] = work[i]
        k += 1
        i += 1
    return a

def merge_sort(lst):
    n = len(lst)
    work = [0] * (math.ceil(n/2))
    lst = _merge_sort_recursion(lst, 0, n-1, work)
    return lst

if __name__ == '__main__':
    a = input('ソートしたい値をスペース区切りで入力 : ')
    print(merge_sort(a.split()))



