import math

def is_prime(n):
    for j in range(2, int(math.sqrt(n)) + 1):
        if n % j == 0:
            return False
    return True

i = int(input("素数を判定する2以上の整数を入力してください : "))
if is_prime(i):
    print(f'{i}は素数です．')
else:
    print(f'{i}は素数ではありません．')