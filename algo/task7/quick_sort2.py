import random
import collections as cll

def quick_sort(a):
    n = len(a)
    indexstack = cll.deque([(0, n-1)])
    right = left = 0
    while len(indexstack) != 0:
        if right - left < 1:
            left, right = indexstack.pop()
        
        pivot = random.choice(a[left:right])
        if __name__ == '__main__':
            print(pivot, left, right, a)
        i = left
        j = right
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

        if i-left > right-j:
            if i-1 > left:
                indexstack.append((left, i-1))
            left = j+1
        else:
            if j+1 < right:
                indexstack.append((j+1, right))
            right = i-1
    return a

if __name__ == '__main__':
    a = input('ソートしたい値をスペース区切りで入力 : ')
    print(quick_sort(a.split()))
