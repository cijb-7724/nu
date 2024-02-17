import math

# エラトステネスの篩いによる素数判定をインポートする
import eratosthenes


def is_carmichael(n):
    """カーマイケル数であるか調べる

    Args:
        n (int): 合成数

    Returns:
        bool: カーマイケル数であれば True、それ以外は False
    """
    # 整数aに対して1以上のn未満の値をすべて試行する
    for a in range(1, n):
        # aとnが互いに素ではないので次の数を確認する
        if math.gcd(a, n) != 1:
            continue

        # a**(n - 1) mod n の答えが1以外ならnは合成数である
        if pow(a, n - 1, n) != 1:
            return False

    return True


# カーマイケル数を判定する範囲
n = int(input("カーマイケル数を判定する範囲 : "))

# エラトステネスの篩いでn以下の素数のリストを取得
primes = eratosthenes.sieve_eratosthenes(n)

# 2以上n以下の素数以外の値リストを取得
# 2からn以下の値と素数のリストをセット型に変換して、
# セット型で集合の差を求めてリスト型に変換する。
not_primes = list(set(range(2, n + 1)) - set(primes))

# 素数以外の値(合成数)からカーマイケル数をリスト型として抽出
# filter関数を利用して、第2引数の擬素数候補のリストから
# 第1引数のカーマイケル数の判定関数でカーマイケル数を抽出する。
print(list(filter(is_carmichael, not_primes)))
