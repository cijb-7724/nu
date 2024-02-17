from isqrt import isqrt

def trial_division(n):
    primes = [2]
    i = 3
    while i <= n:
        sqrt_i = isqrt(i)
        for p in primes:
            if p > sqrt_i:
                primes.append(i)
                break
            if i % p == 0:
                break
        else:
            primes.append(i)
        i += 2
    return primes

if __name__ == '__main__':
    n = int(input('素数を判定する範囲(>=2) : '))
    print(trial_division(n))
    