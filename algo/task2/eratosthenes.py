from isqrt import isqrt

def sieve_eratosthenes(n):
    sqrt_n = isqrt(n)
    sieve_list = [False, False, True]
    for i in range(3, n+1):
        if i % 2 == 1:
            sieve_list.append(True)
        else:
            sieve_list.append(False)
    for i in range(3, sqrt_n+1, 2):
        if not sieve_list[i]:
            continue
        for j in range(2*i, n+1, i):
            sieve_list[j] = False
    prime_list = list(
        filter(lambda n: sieve_list[n], range(2, n+1))
    )
    return prime_list

if __name__ == '__main__':
    n = int(input('素数を判定する範囲(>=2) : '))
    print(sieve_eratosthenes(n))