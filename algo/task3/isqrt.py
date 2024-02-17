def isqrt(n):
    x = n
    y = (x+1)//2
    while y < x:
        x = y
        y = (x+n//x)//2
    return x


if __name__ == '__main__':
    i = int(input('整数を入力してください : '))
    print(isqrt(i))
