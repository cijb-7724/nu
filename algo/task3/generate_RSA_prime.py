# 作成したMiller-Rabin法、素数生成
# 拡張ユークリッドの互除法、バイナリ法を読み込む
import generate_prime
import ex_euclidean
import power2
import hexdump

# 生成するRSA暗号のビット数を取得
bit = int(input("生成する鍵のビット数 : "))

# publicExponent(OpenSSLでは固定値65537)
e = 65537

# 生成する素数のbit数を計算
# 奇数の場合は prime1 側を 1 大きくする
prime_bit = [0]*2
prime_bit[1], mod = divmod(bit, 2)
prime_bit[0] = prime_bit[1] + mod

# 2つの素数を生成
prime1 = 0
prime2 = 0
#prime1 = 61967
#prime2 = 50147
if prime1 == 0 or prime2 == 0:
    prev_prime = 0
    for i in range(2):
        while True:
            # 素数を生成
            prime = generate_prime.generate_prime(prime_bit[i])

            # 同じ素数を生成してしまった場合は作り直す
            if prime == prev_prime:
                continue

            # e と(q - 1)、e と(p - 1)が互いに素でなければ作り直す
            x, y, gcd = ex_euclidean.ex_gcd(e, prime - 1)
            if gcd == 1:
                break

        # 生成した素数を変数に保存
        prev_prime = prime
        if i == 0:
            prime1 = prime
        else:
            prime2 = prime

# OpenSSL では2つの素数のうち大きい値を prime1 としている
if prime1 < prime2:
    prime1, prime2 = prime2, prime1

# 素数同士の掛け算
modules = prime1*prime2

# (p - 1)(q - 1)
L = (prime1 - 1)*(prime2 - 1)

# 拡張ユークリッドの互除法
x, y, gcd = ex_euclidean.ex_gcd(L, e)

# yが負の時は、xa + yb = 1 のときの
# 任意の解(x + kb, y - ka)を利用して正にする
while y <= 0:
    y += L

# 求まったyは未知数d
d = y

# d mod (p - 1) の値
exp1 = d % (prime1 - 1)

# d mod (q - 1) の値
exp2 = d % (prime2 - 1)

# モジュラ逆数 inverse of q mod p を求める
#
# 法pが素数なので q^(p - 2) mod p で求めることができる
# もしもべき剰余の関数を使わず「x**y % z」の式で解こうとすると、
# もの凄く時間がかかってしまう。
coef = power2.upower(prime2, prime1 - 2, prime1)
# coef = pow(prime2, prime1 - 2, prime1)
# coef = prime2**(prime1 - 2) % prime1
#
# 拡張ユークリッドの互除法を用いて求める（こちらが汎用的である）
#coef, _, _ = ex_euclidean.ex_gcd(prime2, prime1)
#while coef <= 0:
#    coef += prime1

# 計算結果を表示
print("Privete-Key: ({0} bit, 2 primes)".format(bit))
print("modules: " + hexdump.i2hex(modules))
print("publicExponent: " + hexdump.i2hex(e))
print("privateExponent: " + hexdump.i2hex(d))
print("prime1: " + hexdump.i2hex(prime1))
print("prime2: " + hexdump.i2hex(prime2))
print("exponent1: " + hexdump.i2hex(exp1))
print("exponent1: " + hexdump.i2hex(exp2))
print("coefficient: " + hexdump.i2hex(coef))
