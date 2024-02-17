def insertion_sort(lst):
	n = len(lst)
	for i in range(1, n):
		tmp = lst[i]
		j = i-1
		while j >= 0 and lst[j] > tmp:
			lst[j+1] = lst[j]
			j -= 1
		lst[j+1] = tmp
		if __name__ == '__main__':
			print(i, lst)
	return lst

if __name__ == '__main__':
	i = input('ソートしたい値をスペース区切りで入力： ')
	print(insertion_sort(i.split()))

'''

'''
