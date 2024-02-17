def _down_heap(a, n, i, x):
	j = 2*i
	while j <= n:
		if j < n and a[j] < a[j+1]:
			j += 1
		if x >= a[j]:
			break
		a[i] = a[j]
		i = j
		j = 2*i
	a[i] = x
	return a

def heap_sort(a):
	n = len(a)
	a.insert(0, 0)
	for i in range(int(n/2), 0, -1):
		x = a[i]
		a = _down_heap(a, i//2, i, x)
		if __name__ == '__main__':
			print(a)
	for i in range(n, 1, -1):
		x = a[i]
		a[i] = a[1]

		a = _down_heap(a, (i-1)//2, i-1, x)
		if __name__ == '__main__':
			print(i, a)
	del a[0]
	return a

if __name__ == '__main__':
	i = input('ソートしたい値をスペース区切りで入力： ')
	print(heap_sort(i.split()))
