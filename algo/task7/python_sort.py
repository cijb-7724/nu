def python_sort(lst):
    lst.sort()
    return lst

if __name__ == '__main__':
    a = input('ソートしたい値をスペース区切りで入力 : ')
    print(python_sort(a.split()))
