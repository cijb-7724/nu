def binary_search(lst, key):
    lst.sort()
    left = 0
    right = len(lst)-1
    while left < right:
        middle = (left + right) // 2
        if lst[middle] < key:
            left = middle + 1
        else:
            right = middle
    
    if lst[left] == key:
        return left

    return -1

if __name__ == '__main__':
    lst = input('探索リストをスペース区切りで入力 : ')
    key = input('探索対象のキーを入力 : ')
    print(binary_search(lst.split(), key))
    