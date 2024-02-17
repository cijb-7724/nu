import random

def _quick_sort_recursion(a, first, last):
    pivot = random.choice(a[first:last])

    if __name__ == '__main__':
        print(pivot, first, last, a)
    
    i = first
    j = last
    while True:
        while a[i] < pivot:
            i += 1

        while a[j] > pivot:
            j -= 1
        
        if i >= j:
            break
        
        a[i], a[j] = a[j], a[i]
        i += 1
        j -= 1
    if j + 1 < last:
        _quick_sort_recursion(a, j+1, last)
    if i - 1 > first:
        _quick_sort_recursion(a, first, i-1)
    return a

def quick_sort(lst):
    n = len(lst)
    lst = _quick_sort_recursion(lst, 0, n-1)
    return lst

if __name__ == '__main__':
    a = input('ソートしたい値をスペース区切りで入力 : ')
    print(quick_sort(a.split()))
