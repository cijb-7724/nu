def sequential_search(lst, key):
    for i, v in enumerate(lst):
        if v == key:
            return i
    return -1

if __name__ == '__main__':
    lst = input('探索リストをスペース区切りで入力 : ')
    key = input('探索対象のキーを入力 : ')
    print(sequential_search(lst.split(), key))
    