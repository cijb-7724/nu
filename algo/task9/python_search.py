def python_search(lst, key):
    try:
        return lst.index(key)
    except ValueError:
        return -1

if __name__ == '__main__':
    lst = input('探索リストをスペース区切りで入力 : ')
    key = input('探索対象のキーを入力 : ')
    print(python_search(lst.split(), key))
    