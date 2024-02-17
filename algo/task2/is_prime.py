from isqrt import isqrt

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, isqrt(n)+1):
        if n % i == 0:
            return False
    return True

if __name__ == '__main__':
    i = int(input('素数を判定する2以上の整数を入力してください : '))
    if is_prime(i):
        print(f'{i} は素数です')
    else:
        print(f'{i} は素数ではありません')