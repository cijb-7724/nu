def bubble_sort(lst):
    n = len(lst)
    for i in range(0, n-1):
        for j in range(n-1, i, -1):
            if (lst[j-1] > lst[j]):
                lst[j-1], lst[j] = lst[j], lst[j-1]
        
        if __name__ == '__main__':
            print(i, lst)
    return lst

if __name__ == '__main__':
    i = input("ソートしたい値をスペース区切りで入力：")
    print(bubble_sort(i.split()))

'''
実行結果
ソートしたい値をスペース区切りで入力：3 7 2 8 1 9 4 5 5
0 ['1', '3', '7', '2', '8', '4', '9', '5', '5']
1 ['1', '2', '3', '7', '4', '8', '5', '9', '5']
2 ['1', '2', '3', '4', '7', '5', '8', '5', '9']
3 ['1', '2', '3', '4', '5', '7', '5', '8', '9']
4 ['1', '2', '3', '4', '5', '5', '7', '8', '9']
5 ['1', '2', '3', '4', '5', '5', '7', '8', '9']
6 ['1', '2', '3', '4', '5', '5', '7', '8', '9']
7 ['1', '2', '3', '4', '5', '5', '7', '8', '9']
['1', '2', '3', '4', '5', '5', '7', '8', '9']
'''